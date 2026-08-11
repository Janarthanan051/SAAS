import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  const [ip, setIp] = useState('');
  const [phone, setPhone] = useState('');
  const [ipResult, setIpResult] = useState(null);
  const [phoneResult, setPhoneResult] = useState(null);

  async function lookupIP() {
    try {
      const q = ip ? `?ip=${encodeURIComponent(ip)}` : '';
      const r = await fetch(`/api/lookup/ip${q}`);
      const data = await r.json();
      setIpResult(data);
    } catch (err) {
      console.error('IP lookup failed:', err);
    }
  }

  async function lookupPhone() {
    try {
      const r = await fetch(`/api/lookup/phone?number=${encodeURIComponent(phone)}`);
      const data = await r.json();
      setPhoneResult(data);
    } catch (err) {
      console.error('Phone lookup failed:', err);
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h2>IP Tracker & Phone Geo-Lookup</h2>

      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ width: '400px' }}>
          <h3>IP Lookup</h3>
          <div style={{ marginBottom: 10 }}>
            <p style={{ fontSize: '14px', color: '#666', margin: '5px 0' }}>
              Enter IPv4 address or leave blank for your own IP:
              <br />
              • Format: xxx.xxx.xxx.xxx (each xxx is 0-255)
              <br />
              • Indian IP Examples:
              <br />
              • 103.153.154.2 (Airtel)
              <br />
              • 125.16.134.214 (Tata)
              <br />
              • 182.79.223.114 (Jio)
            </p>
          </div>
          <input
            placeholder="Enter IP (e.g., 8.8.8.8) or leave blank"
            value={ip}
            onChange={e => {
              const value = e.target.value;
              // Allow only numbers, dots, and backspace
              if (value === '' || /^[\d.]*$/.test(value)) {
                setIp(value);
              }
            }}
            style={{ 
              marginRight: 10,
              padding: '5px',
              width: '200px'
            }}
          />
          <button onClick={lookupIP}>Lookup IP</button>
          {ipResult && (
            <div style={{ marginTop: 10 }}>
              <div style={ipResult.status === 'success' ? {
                backgroundColor: '#f0f8f0',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #90EE90'
              } : {
                backgroundColor: '#fff0f0',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ffcccb'
              }}>
                {ipResult.status === 'success' ? (
                  <div style={{ marginBottom: '10px' }}>
                    <strong>Location:</strong> {ipResult.city}, {ipResult.regionName}, {ipResult.country}
                    <br />
                    <strong>ISP:</strong> {ipResult.isp}
                    <br />
                    <strong>Timezone:</strong> {ipResult.timezone}
                  </div>
                ) : (
                  <div style={{ color: '#d32f2f' }}>
                    {ipResult.error === 'reserved range' ? (
                      <div>
                        <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>
                          The IP {ip} is in a reserved range (Carrier-grade NAT).
                        </p>
                        <div style={{ fontSize: '14px', backgroundColor: '#ffebee', padding: '10px', borderRadius: '4px' }}>
                          <p style={{ margin: '0 0 10px 0' }}>
                            Why this IP won't work:
                            <br />
                            • 100.68.69.189 is in the CGN range (100.64.0.0 - 100.127.255.255)
                            <br />
                            • This range is reserved for Internet Service Providers
                            <br />
                            • Geolocation services can't track internal/reserved IPs
                          </p>
                          <p style={{ margin: '0', fontWeight: 'bold' }}>
                            Try these public Indian IP addresses instead:
                          </p>
                          <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
                            <li>103.153.154.2 (Airtel India)</li>
                            <li>125.16.134.214 (Tata Communications)</li>
                            <li>182.79.223.114 (Reliance Jio)</li>
                          </ul>
                          <p style={{ margin: '10px 0 0 0', fontSize: '13px', color: '#666' }}>
                            Other reserved ranges to avoid:
                            <br />
                            • Private networks: 10.x.x.x, 192.168.x.x, 172.16-31.x.x
                            <br />
                            • Carrier-grade NAT: 100.64.x.x - 100.127.x.x
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p style={{ margin: '0 0 10px 0' }}>{ipResult.message || 'Invalid IP address'}</p>
                    )}
                  </div>
                )}
                <pre style={{ margin: 0 }}>{JSON.stringify(ipResult, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>

        <div style={{ width: '400px' }}>
          <h3>Phone Lookup</h3>
          <div style={{ marginBottom: 10 }}>
            <p style={{ fontSize: '14px', color: '#666', margin: '5px 0' }}>
              Enter Indian phone number:
              <br />
              • Start with +91 (India country code)
              <br />
              • Add your 10-digit mobile number
              <br />
              • Examples: +919876543210, +91 98765 43210
            </p>
          </div>
          <input
            placeholder="+91 9876543210"
            value={phone}
            onChange={e => {
              const value = e.target.value;
              // Allow only +, spaces, and numbers
              if (value === '' || /^[+\d\s]*$/.test(value)) {
                setPhone(value);
              }
            }}
            style={{ 
              marginRight: 10,
              padding: '5px',
              width: '200px'
            }}
          />
          <button 
            onClick={lookupPhone}
            disabled={!phone.includes('+')}
          >
            Lookup Phone
          </button>
          {phoneResult && (
            <div style={{ marginTop: 10 }}>
              {phoneResult.valid ? (
                <div style={{ 
                  backgroundColor: '#f0f8f0', 
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #90EE90'
                }}>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>Formatted:</strong> {phoneResult.nationalNumber}
                    <br />
                    <strong>Country:</strong> {phoneResult.country}
                    <br />
                    <strong>Country Code:</strong> +{phoneResult.countryCallingCode}
                  </div>
                  <pre style={{ margin: 0 }}>{JSON.stringify(phoneResult, null, 2)}</pre>
                </div>
              ) : (
                <div style={{ 
                  backgroundColor: '#fff0f0', 
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ffcccb'
                }}>
                  <p style={{ color: '#d32f2f', margin: '0 0 10px 0' }}>
                    Invalid phone number. Please check the format and try again.
                  </p>
                  <pre style={{ margin: 0 }}>{JSON.stringify(phoneResult, null, 2)}</pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Quick IP Validation Guide */}
      {ipResult?.error === 'reserved range' && (
        <div style={{
          marginTop: 20,
          padding: '15px',
          backgroundColor: '#e3f2fd',
          borderRadius: '4px',
          border: '1px solid #bbdefb'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>💡 Try these Indian public IP addresses:</h4>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div>
              <strong>ISP Networks:</strong>
              <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
                <li>103.153.154.2 (Airtel)</li>
                <li>125.16.134.214 (Tata)</li>
                <li>182.79.223.114 (Jio)</li>
              </ul>
            </div>
            <div>
              <strong>Tech Services:</strong>
              <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
                <li>104.47.173.138 (Microsoft India)</li>
                <li>52.172.51.45 (Azure India)</li>
                <li>13.234.210.38 (AWS India)</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Location Summary Section */}
      {(ipResult?.status === 'success' || phoneResult?.valid) && (
        <div style={{ 
          marginTop: 20, 
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}>
          <h3 style={{ marginTop: 0 }}>📍 Location Information</h3>
          <div style={{ display: 'flex', gap: '40px' }}>
            {ipResult?.status === 'success' && (
              <div>
                <h4 style={{ color: '#2196f3' }}>IP Location</h4>
                <p>
                  <strong>Address:</strong> {ipResult.query}<br />
                  <strong>City:</strong> {ipResult.city}<br />
                  <strong>Region:</strong> {ipResult.regionName}<br />
                  <strong>Country:</strong> {ipResult.country}<br />
                  <strong>ISP:</strong> {ipResult.isp}<br />
                  <strong>Coordinates:</strong> {ipResult.lat}, {ipResult.lon}
                </p>
              </div>
            )}
            {phoneResult?.valid && phoneResult.country === 'IN' && (
              <div>
                <h4 style={{ color: '#4caf50' }}>Phone Location</h4>
                <p>
                  <strong>Number:</strong> {phoneResult.nationalNumber}<br />
                  <strong>Region:</strong> India<br />
                  <strong>Format:</strong> {phoneResult.e164}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Map Section */}
      {ipResult?.status === 'success' && ipResult.country === 'IN' && ipResult.lat && ipResult.lon && (
        <div style={{ marginTop: 20, height: 400 }}>
          <h3 style={{ marginBottom: 10 }}>📌 Location Map</h3>
          <MapContainer 
            center={[ipResult.lat, ipResult.lon]} 
            zoom={12} 
            style={{ height: '100%', borderRadius: '8px', border: '1px solid #ddd' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[ipResult.lat, ipResult.lon]}>
              <Popup>
                <div style={{ textAlign: 'center' }}>
                  <strong>{ipResult.city}, {ipResult.regionName}</strong><br />
                  {ipResult.isp}<br />
                  <small>Coordinates: {ipResult.lat}, {ipResult.lon}</small>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
      
      {/* Show message if location is not in India */}
      {ipResult?.status === 'success' && ipResult.country !== 'IN' && (
        <div style={{ 
          marginTop: 20, 
          padding: '15px', 
          backgroundColor: '#fff3e0', 
          borderRadius: '4px',
          border: '1px solid #ffe0b2'
        }}>
          <p style={{ margin: 0, color: '#e65100' }}>
            ⚠️ The detected location is outside India ({ipResult.country}). 
            For best results, please use an Indian IP address.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;