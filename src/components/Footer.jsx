import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FOOTER_COLUMNS } from '../data/siteContent';

export default function Footer({ showToast }) {
  const [email, setEmail] = useState('');

  const handleSub = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('Subscribed to Biccas newsletter!', 'success');
    setEmail('');
  };

  return (
    <footer style={S.footer}>
      <div className="container">
        <div style={S.top}>

          {/* Brand + newsletter */}
          <div style={S.brand}>
            <a href="#" style={S.logo}>
              <span>Biccas</span>
              <span style={S.dot} />
            </a>
            <p style={S.tagline}>
              Get started now try our product for free and scale your team.
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
                <ArrowRight size={15} color="#fff" />
              </button>
            </form>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map(col => (
            <div key={col.title} style={S.col}>
              <h4 style={S.colTitle}>{col.title}</h4>
              {col.links.map(l => (
                <a key={l} href="#" style={S.colLink}>{l}</a>
              ))}
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div style={S.bottom}>
          <span style={S.copy}>© 2026 Biccas Inc. Copyright and rights reserved</span>
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
    background: 'linear-gradient(180deg, #1A2A2E 0%, #0F1F24 100%)',
    color: '#A6A6A6',
    padding: '64px 0 24px',
    borderTop: '1px solid rgba(255,255,255,0.07)',
  },
  top: {
    display: 'grid',
    gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
    gap: 48, marginBottom: 48,
  },
  brand: { maxWidth: 320 },
  logo: {
    display: 'inline-flex', alignItems: 'center', gap: 5,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 22, fontWeight: 800, color: '#54BD95',
    marginBottom: 12, textDecoration: 'none',
  },
  dot: {
    display: 'inline-block', width: 7, height: 7,
    background: '#54BD95', borderRadius: '50%', marginTop: 8,
  },
  tagline: { fontSize: 13, lineHeight: 1.68, marginBottom: 20 },
  form: { position: 'relative', display: 'flex', alignItems: 'center' },
  input: {
    width: '100%', padding: '12px 46px 12px 18px',
    borderRadius: 999, background: 'transparent',
    border: '1px solid #2E3D4A', color: '#fff',
    fontSize: 12, outline: 'none',
    fontFamily: "'Inter', sans-serif",
  },
  arrowBtn: {
    position: 'absolute', right: 5,
    width: 34, height: 34, borderRadius: '50%',
    background: '#54BD95',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  col: { display: 'flex', flexDirection: 'column', gap: 10 },
  colTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    color: '#fff', fontSize: 14, fontWeight: 700, marginBottom: 4,
  },
  colLink: { fontSize: 13, color: '#A6A6A6', textDecoration: 'none' },
  bottom: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', paddingTop: 22,
    borderTop: '1px solid rgba(255,255,255,0.07)',
    flexWrap: 'wrap', gap: 12,
  },
  copy: { fontSize: 12 },
  bottomLinks: { display: 'flex', alignItems: 'center', gap: 8 },
  bottomLink: { fontSize: 12, color: '#A6A6A6', textDecoration: 'none' },
  sep: { fontSize: 12 },
};
