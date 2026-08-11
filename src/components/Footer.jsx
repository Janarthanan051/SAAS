import React, { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';

export default function Footer({ showToast }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('Subscribed to Biccas newsletter!', 'success');
    setEmail('');
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        {/* Top Grid */}
        <div style={styles.grid}>
          {/* Brand & Newsletter Column */}
          <div style={styles.brandCol}>
            <a href="#" style={styles.logo}>
              <span style={styles.logoText}>Biccas</span>
              <span style={styles.logoDot}></span>
            </a>
            <p style={styles.tagline}>
              Get started now try our product for free and scale your team.
            </p>

            <form onSubmit={handleSubscribe} style={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.newsletterInput}
                required
              />
              <button type="submit" style={styles.newsletterBtn} title="Subscribe">
                <ArrowRight size={18} color="#FFFFFF" />
              </button>
            </form>
          </div>

          {/* Links Columns */}
          <div style={styles.linksCol}>
            <h4 style={styles.linkHeader}>Support</h4>
            <a href="#" style={styles.linkItem}>Help centre</a>
            <a href="#" style={styles.linkItem}>Account information</a>
            <a href="#benefits" style={styles.linkItem}>About</a>
            <a href="#contact" style={styles.linkItem}>Contact us</a>
          </div>

          <div style={styles.linksCol}>
            <h4 style={styles.linkHeader}>Helpful Links</h4>
            <a href="#" style={styles.linkItem}>Terms & conditions</a>
            <a href="#" style={styles.linkItem}>Privacy policy</a>
            <a href="#" style={styles.linkItem}>Security</a>
            <a href="#" style={styles.linkItem}>Status</a>
          </div>

          <div style={styles.linksCol}>
            <h4 style={styles.linkHeader}>Products</h4>
            <a href="#" style={styles.linkItem}>Update</a>
            <a href="#" style={styles.linkItem}>Security</a>
            <a href="#" style={styles.linkItem}>Beta test</a>
            <a href="#pricing" style={styles.linkItem}>Pricing product</a>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div style={styles.bottomBar}>
          <p>© 2026 Biccas Inc. Copyright and rights reserved</p>
          <div style={styles.bottomLinks}>
            <a href="#">Terms and Conditions</a>
            <span>•</span>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#192026',
    color: '#A6A6A6',
    padding: '80px 0 30px 0',
    borderTop: '1px solid rgba(255,255,255,0.08)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '60px',
    marginBottom: '60px',
  },
  brandCol: {
    maxWidth: '340px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '28px',
    fontWeight: '800',
    color: '#54BD95',
    marginBottom: '16px',
  },
  logoText: {
    color: '#54BD95',
  },
  logoDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#54BD95',
    borderRadius: '50%',
    display: 'inline-block',
    marginTop: '10px',
  },
  tagline: {
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '24px',
  },
  newsletterForm: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  newsletterInput: {
    width: '100%',
    padding: '14px 50px 14px 20px',
    borderRadius: '999px',
    backgroundColor: 'transparent',
    border: '1px solid #334155',
    color: '#FFFFFF',
    fontSize: '13px',
    outline: 'none',
  },
  newsletterBtn: {
    position: 'absolute',
    right: '6px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#54BD95',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  linksCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  linkHeader: {
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '700',
    marginBottom: '8px',
  },
  linkItem: {
    fontSize: '14px',
    color: '#A6A6A6',
    textDecoration: 'none',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '30px',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    fontSize: '13px',
    flexWrap: 'wrap',
    gap: '16px',
  },
  bottomLinks: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  }
};
