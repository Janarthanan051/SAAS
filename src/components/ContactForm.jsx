import React, { useState } from 'react';
import { CheckCircle2, Play, Send } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteContent';

export default function ContactForm({ showToast }) {
  const [idx, setIdx] = useState(0);
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) { showToast('Please enter your email', 'error'); return; }
    setDone(true);
    showToast('Demo request submitted!', 'success');
  };

  const t = TESTIMONIALS[idx];

  return (
    <section id="contact" style={S.section}>
      <div className="container" style={S.grid}>

        {/* LEFT – testimonials */}
        <div style={S.left}>
          <h2 style={S.h2}>People are Saying<br />About Biccas</h2>
          <p style={S.sub}>
            Everything you need to accept payment and grow your money or manage your business.
          </p>

          {/* Quote mark */}
          <div style={S.quoteMark}>"</div>

          {/* Quote text */}
          <p style={S.quoteText}>{t.quote}</p>

          {/* Author + nav */}
          <div style={S.authorRow}>
            <div>
              <div style={S.authorName}>{t.name}</div>
              <div style={S.authorRole}>{t.role}</div>
            </div>
            <div style={S.navRow}>
              {/* Avatar thumbnails */}
              <div style={S.aviRow}>
                {TESTIMONIALS.map((tv, i) => (
                  <img
                    key={i}
                    src={tv.avatar}
                    alt={tv.name}
                    onClick={() => setIdx(i)}
                    style={{
                      ...S.avi,
                      ...(i === idx ? S.aviActive : {}),
                    }}
                  />
                ))}
              </div>
              {/* Next button */}
              <button
                onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)}
                style={S.btnNext}
              >
                <Play size={11} fill="#fff" color="#fff" style={{ marginLeft: 2 }} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT – dark "Get Started" card */}
        <div style={S.right}>
          <div style={S.darkCard}>
            {/* Green envelope icon */}
            <div style={S.iconWrap}>
              <Send size={20} color="#54BD95" />
            </div>

            <h3 style={S.cardTitle}>Get Started</h3>

            {!done ? (
              <form onSubmit={submit} style={S.form}>
                <div style={S.group}>
                  <label style={S.label}>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={S.input}
                    required
                  />
                </div>
                <div style={S.group}>
                  <label style={S.label}>Message</label>
                  <textarea
                    placeholder="What are you looking for?"
                    value={msg}
                    onChange={e => setMsg(e.target.value)}
                    style={S.textarea}
                    rows={4}
                  />
                </div>
                <button type="submit" style={S.btnSubmit}>Request Demo</button>
              </form>
            ) : (
              <div style={S.successBox}>
                <CheckCircle2 size={44} color="#54BD95" />
                <div style={S.successTitle}>Thank You!</div>
                <div style={S.successMsg}>
                  We'll reach out to <strong style={{ color: '#54BD95' }}>{email}</strong> shortly.
                </div>
                <button
                  style={S.btnReset}
                  onClick={() => { setDone(false); setEmail(''); setMsg(''); }}
                >
                  Send another request
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

const S = {
  section: {
    padding: '80px 0 60px',
    background: 'linear-gradient(180deg, #F5FCFA 0%, #EEF8FB 50%, #E8F5F9 100%)',
  },
  grid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: 60, alignItems: 'center',
  },
  left: { maxWidth: 490 },
  h2: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 34, fontWeight: 800, color: '#192026',
    lineHeight: 1.22, marginBottom: 14,
  },
  sub: { fontSize: 14, color: '#68717A', lineHeight: 1.75, marginBottom: 28 },
  quoteMark: {
    fontSize: 60, color: '#54BD95', lineHeight: 1,
    marginBottom: -12, fontFamily: 'Georgia, serif',
  },
  quoteText: {
    fontSize: 16, color: '#192026', lineHeight: 1.68,
    marginBottom: 28, fontStyle: 'italic', fontWeight: 500,
  },
  authorRow: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  authorName: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 16, fontWeight: 700, color: '#192026', marginBottom: 3,
  },
  authorRole: { fontSize: 12, color: '#A6A6A6' },
  navRow: { display: 'flex', alignItems: 'center', gap: 12 },
  aviRow: { display: 'flex', gap: 6 },
  avi: {
    width: 32, height: 32, borderRadius: '50%',
    objectFit: 'cover', cursor: 'pointer',
    opacity: 0.5, border: '2px solid transparent',
    transition: 'all 0.2s',
  },
  aviActive: { opacity: 1, borderColor: '#54BD95', transform: 'scale(1.08)' },
  btnNext: {
    width: 32, height: 32, borderRadius: '50%',
    background: '#54BD95',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  right: { display: 'flex', justifyContent: 'center' },
  darkCard: {
    width: '100%', maxWidth: 420,
    background: '#222B32',
    borderRadius: 22, padding: '34px 30px',
    boxShadow: '0 28px 60px rgba(0,0,0,0.38)',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  iconWrap: {
    width: 48, height: 48, borderRadius: 14,
    background: 'rgba(84,189,149,0.15)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 20,
  },
  form: { display: 'flex', flexDirection: 'column', gap: 16 },
  group: { display: 'flex', flexDirection: 'column', gap: 7 },
  label: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 12, fontWeight: 600, color: '#94A3B8',
  },
  input: {
    width: '100%', padding: '12px 14px',
    borderRadius: 10, background: '#192026',
    border: '1px solid #2E3D4A', color: '#fff',
    fontSize: 13, outline: 'none',
    fontFamily: "'Inter', sans-serif",
  },
  textarea: {
    width: '100%', padding: '12px 14px',
    borderRadius: 10, background: '#192026',
    border: '1px solid #2E3D4A', color: '#fff',
    fontSize: 13, outline: 'none', resize: 'none',
    fontFamily: "'Inter', sans-serif",
  },
  btnSubmit: {
    width: '100%', padding: '13px',
    borderRadius: 999, background: '#54BD95',
    color: '#fff', fontSize: 14, fontWeight: 700,
    boxShadow: '0 8px 22px rgba(84,189,149,0.28)',
    marginTop: 4,
  },
  successBox: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', textAlign: 'center', gap: 14, padding: '14px 0',
  },
  successTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 20, fontWeight: 800, color: '#fff',
  },
  successMsg: { fontSize: 13, color: '#94A3B8', lineHeight: 1.6 },
  btnReset: {
    background: 'none', color: '#54BD95',
    border: '1px solid #54BD95', padding: '9px 20px',
    borderRadius: 999, fontWeight: 600, fontSize: 13,
  },
};
