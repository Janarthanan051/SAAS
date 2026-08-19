import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FOOTER_DATA = [
  {
    title: 'Support',
    links: ['Help centre', 'Account information', 'About', 'Contact us'],
  },
  {
    title: 'Help and Solution',
    links: ['Talk to support', 'Support docs', 'System status', 'Covid response'],
  },
  {
    title: 'Product',
    links: ['Update', 'Security', 'Beta test', 'Pricing product'],
  },
];

export default function Footer({ showToast }) {
  const [email, setEmail] = useState('');

  const handleSub = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('Subscribed to Biccas newsletter!', 'success');
    setEmail('');
  };

  return (
    <footer className="section-navy" style={S.footer}>
      <div className="container">
        <div className="footer-top-grid" style={S.top}>

          {/* Brand + newsletter */}
          <div className="footer-brand-col" style={S.brand}>
            <a href="#home" style={S.logo}>
              Biccas
            </a>
            <p style={S.tagline}>
              Get started now try our product
            </p>
            <form onSubmit={handleSub} style={S.form}>
              <input
                type="email"
                placeholder="Enter your email here"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={S.input}
              />
              <button type="submit" style={S.arrowBtn}>
                <ArrowRight size={18} color="#FFFFFF" />
              </button>
            </form>
          </div>

          {/* Link columns */}
          {FOOTER_DATA.map(col => (
            <div key={col.title} className="footer-col" style={S.col}>
              <h4 style={S.colTitle}>{col.title}</h4>
              {col.links.map(l => (
                <a key={l} href="#" style={S.colLink}>{l}</a>
              ))}
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar" style={S.bottom}>
          <span style={S.copy}>© 2022 Biccas Inc.</span>
          <div style={S.bottomLinks}>
            <a href="#" style={S.bottomLink}>Terms and Conditions</a>
            <span style={S.sep}>•</span>
            <a href="#" style={S.bottomLink}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const S = {
  footer: {
    background: '#161C28',
    color: '#A6A6A6',
    padding: '80px 0 36px',
    borderTop: '1px solid rgba(255,255,255,0.07)',
  },
  top: {
    display: 'grid',
    gridTemplateColumns: '1.6fr 1fr 1.2fr 1fr',
    gap: 64, marginBottom: 64,
  },
  brand: { maxWidth: 410 },
  logo: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 50, fontWeight: 600, color: '#54BD95',
    marginBottom: 16, textDecoration: 'none',
    display: 'inline-block', letterSpacing: '0%',
  },
  tagline: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, color: '#A6A6A6', lineHeight: '30px',
    marginBottom: 28, letterSpacing: '0%', fontWeight: 500,
  },
  form: {
    position: 'relative', display: 'flex', alignItems: 'center',
    width: '100%', maxWidth: 410,
  },
  input: {
    width: '100%', height: 60,
    padding: '0 60px 0 24px',
    borderRadius: 70, background: 'transparent',
    border: '2px solid #A6A6A6', color: '#FFFFFF',
    fontSize: 16, outline: 'none',
    fontFamily: "'Inter', sans-serif",
  },
  arrowBtn: {
    position: 'absolute', right: 7,
    width: 46, height: 46, borderRadius: '50%',
    background: '#54BD95', border: 'none',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
  },
  col: { display: 'flex', flexDirection: 'column', gap: 16 },
  colTitle: {
    fontFamily: "'Inter', sans-serif",
    color: '#FFFFFF', fontSize: 18, fontWeight: 500,
    marginBottom: 8, letterSpacing: '0%',
  },
  colLink: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, color: '#A6A6A6', textDecoration: 'none',
    letterSpacing: '0%', fontWeight: 500,
  },
  bottom: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', paddingTop: 28,
    borderTop: '1px solid rgba(255,255,255,0.07)',
    flexWrap: 'wrap', gap: 16,
  },
  copy: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, fontWeight: 500, color: '#FFFFFF',
    lineHeight: '30px', letterSpacing: '0%',
  },
  bottomLinks: { display: 'flex', alignItems: 'center', gap: 12 },
  bottomLink: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, color: '#FFFFFF', textDecoration: 'none',
    fontWeight: 500, letterSpacing: '0%',
  },
  sep: {
    fontSize: 18, color: '#A6A6A6',
  },
};
