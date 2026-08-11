require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const { parsePhoneNumberFromString } = require('libphonenumber-js');
const rateLimit = require('express-rate-limit');

// Optional Twilio initialization
let twilioClient = null;
let twilioNumber = null;

// Initialize Twilio if credentials are available
if (process.env.TWILIO_ACCOUNT_SID && 
    process.env.TWILIO_AUTH_TOKEN && 
    process.env.TWILIO_PHONE_NUMBER) {
    const twilio = require('twilio');
    try {
        twilioClient = twilio(
            process.env.TWILIO_ACCOUNT_SID,
            process.env.TWILIO_AUTH_TOKEN
        );
        twilioNumber = process.env.TWILIO_PHONE_NUMBER;
        console.log('Twilio initialized successfully');
    } catch (error) {
        console.error('Failed to initialize Twilio:', error.message);
    }
}

const app = express();
app.use(express.json());

// Trust proxy to handle X-Forwarded-For header correctly
app.set('trust proxy', 1);

// Helper function to get coordinates for Indian states/circles
function getCircleCoordinates(circle) {
  const coordinates = {
    'Karnataka': { lat: 12.9716, lon: 77.5946, zoom: 8 }, // Bangalore
    'Maharashtra': { lat: 19.0760, lon: 72.8777, zoom: 8 }, // Mumbai
    'Kerala': { lat: 9.9312, lon: 76.2673, zoom: 8 }, // Kochi
    'Delhi': { lat: 28.6139, lon: 77.2090, zoom: 10 },
    'Tamil Nadu': { lat: 13.0827, lon: 80.2707, zoom: 8 }, // Chennai
    'West Bengal': { lat: 22.5726, lon: 88.3639, zoom: 8 }, // Kolkata
    'Gujarat': { lat: 23.0225, lon: 72.5714, zoom: 8 }, // Ahmedabad
    'Telangana': { lat: 17.3850, lon: 78.4867, zoom: 8 }, // Hyderabad
    'Punjab': { lat: 30.9010, lon: 75.8573, zoom: 8 }, // Ludhiana
    'Uttar Pradesh': { lat: 26.8467, lon: 80.9462, zoom: 8 } // Lucknow
  };
  return coordinates[circle] || { lat: 20.5937, lon: 78.9629, zoom: 5 }; // Default to India center
}

// Basic rate limiter
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  trustProxy: true // Trust the X-Forwarded-For header
});

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// Apply rate limiting to API endpoints only
app.use('/api/', limiter);

// 1) IP lookup endpoint
app.get('/api/lookup/ip', async (req, res) => {
  try {
    const ip = req.query.ip || req.ip;
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2) Phone lookup: detailed location information for Indian numbers
app.post('/api/request-location', async (req, res) => {
  try {
    // Check if Twilio is configured
    if (!twilioClient || !twilioNumber) {
      return res.status(503).json({
        error: 'SMS service not configured',
        details: `To enable SMS functionality, you need to configure Twilio:
1. Sign up at https://www.twilio.com
2. Get your Account SID (starts with 'AC')
3. Get your Auth Token
4. Get a Twilio phone number
5. Set these environment variables:
   - TWILIO_ACCOUNT_SID
   - TWILIO_AUTH_TOKEN
   - TWILIO_PHONE_NUMBER`
      });
    }

    const raw = req.body.number;
    if (!raw) {
      return res.status(400).json({ error: 'missing number' });
    }

    const phone = parsePhoneNumberFromString(raw);
    if (!phone || !phone.isValid()) {
      return res.json({ valid: false, message: 'Invalid phone number' });
    }

    // Create a unique tracking ID for this request
    const trackingId = Math.random().toString(36).substring(2, 15);

    // Generate the location sharing link
    const locationLink = `${req.protocol}://${req.get('host')}/share-location/${trackingId}`;

    try {
      // Send SMS with location request
      const message = await twilioClient.messages.create({
        body: `Location request: Please click this link to share your location: ${locationLink}`,
        to: phone.format('E.164'),
        from: twilioNumber
      });

      res.json({ 
        success: true, 
        message: 'Location request sent',
        trackingId,
        messageId: message.sid
      });
    } catch (twilioError) {
      console.error('Twilio error:', twilioError);
      res.status(500).json({ 
        error: 'Failed to send SMS',
        details: twilioError.message
      });
    }
  } catch (error) {
    console.error('Request processing failed:', error);
    res.status(500).json({ 
      error: 'Failed to process location request',
      details: error.message 
    });
  }
});

app.get('/api/lookup/phone', async (req, res) => {
  try {
    const raw = req.query.number;
    if (!raw) {
      return res.status(400).json({ error: 'missing number' });
    }

    const phone = parsePhoneNumberFromString(raw);
    if (!phone) {
      return res.json({ valid: false, message: 'could not parse' });
    }

    const result = {
      valid: phone.isValid(),
      country: phone.country || null,
      countryCallingCode: phone.countryCallingCode || null,
      nationalNumber: phone.formatNational ? phone.format('NATIONAL') : phone.nationalNumber,
      e164: phone.format('E.164'),
    };

    // Only proceed with detailed lookup for valid Indian numbers
    if (result.valid && result.country === 'IN') {
      const nationalNumber = result.nationalNumber.replace(/\D/g, '');
      const areaCode = nationalNumber.substring(0, 4);
      
      // Indian mobile number series mapping (expanded database)
      const operatorCodes = {
        // Karnataka
        '9900': { operator: 'Airtel', circle: 'Karnataka', district: 'Bangalore Urban', village: 'Koramangala' },
        '9901': { operator: 'Airtel', circle: 'Karnataka', district: 'Mysore', village: 'Chamundi Hills' },
        '8904': { operator: 'Idea', circle: 'Karnataka', district: 'Bangalore Rural', village: 'Devanahalli' },
        
        // Maharashtra
        '8876': { operator: 'Reliance Jio', circle: 'Maharashtra', district: 'Mumbai Suburban', village: 'Andheri' },
        '9833': { operator: 'Vodafone', circle: 'Maharashtra', district: 'Pune', village: 'Hinjewadi' },
        '9820': { operator: 'Vodafone', circle: 'Maharashtra', district: 'Mumbai City', village: 'Colaba' },
        
        // Kerala
        '7012': { operator: 'Idea', circle: 'Kerala', district: 'Ernakulam', village: 'Fort Kochi' },
        '9446': { operator: 'BSNL', circle: 'Kerala', district: 'Thiruvananthapuram', village: 'Kovalam' },
        '8921': { operator: 'Airtel', circle: 'Kerala', district: 'Kozhikode', village: 'Beypore' },
        
        // Delhi NCR
        '9910': { operator: 'Airtel', circle: 'Delhi', district: 'South Delhi', village: 'Hauz Khas' },
        '9871': { operator: 'Vodafone', circle: 'Delhi', district: 'East Delhi', village: 'Mayur Vihar' },
        '8800': { operator: 'Reliance Jio', circle: 'Delhi', district: 'North Delhi', village: 'Civil Lines' },
        
        // Tamil Nadu
        '9840': { operator: 'Airtel', circle: 'Tamil Nadu', district: 'Chennai', village: 'Mylapore' },
        '9942': { operator: 'BSNL', circle: 'Tamil Nadu', district: 'Coimbatore', village: 'Peelamedu' },
        '8248': { operator: 'Reliance Jio', circle: 'Tamil Nadu', district: 'Madurai', village: 'Mattuthavani' },
        
        // Uttar Pradesh
        '7418': { operator: 'BSNL', circle: 'Uttar Pradesh', district: 'Lucknow', village: 'Gomti Nagar' },
        '7388': { operator: 'Airtel', circle: 'Uttar Pradesh', district: 'Kanpur', village: 'Civil Lines' },
        '8400': { operator: 'Reliance Jio', circle: 'Uttar Pradesh', district: 'Varanasi', village: 'Dashashwamedh' }
      };

      // Get location data based on area code
      if (operatorCodes[areaCode]) {
        const locationData = operatorCodes[areaCode];
        result.locationInfo = {
          country: 'India',
          state: locationData.circle,
          district: locationData.district,
          village: locationData.village,
          operator: locationData.operator,
          // Approximate coordinates for the circle/state
          coordinates: getCircleCoordinates(locationData.circle)
        };
      }
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// In-memory store for shared locations
const sharedLocations = {};

// Serve a simple consent page which requests geolocation and posts it back
app.get('/share-location/:trackingId', (req, res) => {
  const trackingId = req.params.trackingId;
  res.send(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Share Location</title>
    <style>body{font-family:Arial,Helvetica,sans-serif;padding:1rem}button{padding:.6rem 1rem}</style>
  </head>
  <body>
    <h2>Share your location</h2>
    <p id="msg">This page will request permission to share your location with the requester.</p>
    <button id="share">Share location</button>
    <script>
      const btn = document.getElementById('share');
      const msg = document.getElementById('msg');
      btn.addEventListener('click', () => {
        if (!navigator.geolocation) {
          msg.textContent = 'Geolocation not supported by your browser.';
          return;
        }
        msg.textContent = 'Requesting location...';
        navigator.geolocation.getCurrentPosition(async (pos) => {
          const payload = {
            trackingId: "${trackingId}",
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            accuracy: pos.coords.accuracy
          };
          try {
            const res = await fetch('/api/share-location', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });
            const j = await res.json();
            if (j && j.success) {
              msg.textContent = 'Location shared successfully. Thank you.';
              btn.disabled = true;
            } else {
              msg.textContent = 'Failed to share location: ' + (j && j.error ? j.error : 'unknown');
            }
          } catch (e) {
            msg.textContent = 'Failed to send location: ' + e.message;
          }
        }, (err) => {
          msg.textContent = 'Permission denied or error: ' + err.message;
        }, { enableHighAccuracy: true, timeout: 15000 });
      });
    </script>
  </body>
</html>`);
});

// Endpoint to receive shared location
app.post('/api/share-location', (req, res) => {
  try {
    const { trackingId, lat, lon, accuracy } = req.body || {};
    if (!trackingId || typeof lat !== 'number' || typeof lon !== 'number') {
      return res.status(400).json({ error: 'missing or invalid parameters' });
    }
    sharedLocations[trackingId] = {
      lat,
      lon,
      accuracy: accuracy || null,
      timestamp: new Date().toISOString(),
      ip: req.ip
    };
    console.log('Received shared location for', trackingId, sharedLocations[trackingId]);
    res.json({ success: true });
  } catch (err) {
    console.error('Error saving shared location:', err);
    res.status(500).json({ error: err.message });
  }
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});