import React, { useState } from 'react';
import { CheckCircle2, Play } from 'lucide-react';

/* Stacked Coins / Currency Token Icon */
const StackedCoinsIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Coin 1 (Top) */}
    <ellipse cx="36" cy="19" rx="22" ry="9" fill="#54BD95" />
    {/* Euro / Currency symbol on top coin */}
    <path
      d="M39 15.5C36 15 32.5 16 31 18.5C29.5 21 31.5 23.5 35 24C38.5 24.5 41 23 42 22"
      stroke="#1E2A38" strokeWidth="2.5" strokeLinecap="round"
    />
    <path d="M28 18H38" stroke="#1E2A38" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M28 20.5H38" stroke="#1E2A38" strokeWidth="2.2" strokeLinecap="round" />

    {/* Coin 2 */}
    <path d="M14 19V26C14 31 23.8 35 36 35C48.2 35 58 31 58 26V19" fill="#54BD95" stroke="#1E2A38" strokeWidth="3" />
    {/* Coin 3 */}
    <path d="M14 27V34C14 39 23.8 43 36 43C48.2 43 58 39 58 34V27" fill="#54BD95" stroke="#1E2A38" strokeWidth="3" />
    {/* Coin 4 */}
    <path d="M14 35V42C14 47 23.8 51 36 51C48.2 51 58 47 58 42V35" fill="#54BD95" stroke="#1E2A38" strokeWidth="3" />
    {/* Coin 5 (Bottom) */}
    <path d="M14 43V50C14 55 23.8 59 36 59C48.2 59 58 55 58 50V43" fill="#54BD95" stroke="#1E2A38" strokeWidth="3" />
  </svg>
);

const TESTIMONIAL_ITEMS = [
  {
    quote: 'I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍',
    author: '_ Aria Zinanrio',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  },
  {
    quote: 'Biccas has transformed how our team operates. Task management, cloud sync and live analytics in one clean dashboard!',
    author: '_ Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  },
  {
    quote: 'The collaboration features are unmatched. Our productivity increased 40% in just 2 weeks of using Biccas.',
    author: '_ Daniel Craig',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
  },
  {
    quote: 'Best SaaS tool we have ever used. The financial analytics and cloud storage are worth every penny.',
    author: '_ Lucas Silva',
    avatar: '/amanda_avatar.png',
  },
];

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

  const t = TESTIMONIAL_ITEMS[idx];

  return (
    <section id="contact" style={S.section}>
      <div className="container contact-grid" style={S.grid}>

        {/* LEFT – testimonials */}
        <div className="contact-left" style={S.left}>
          <h2 className="section-title" style={S.h2}>
            People are Saying<br />About DoWhith
          </h2>

          <p style={S.sub}>
            Everything you need to accept to payment and grow your money of manage anywhere on planet
          </p>

          {/* Quotation Marks SVG */}
          <div style={S.quoteIconWrap}>
            <svg width="45" height="34" viewBox="0 0 45 34" fill="none">
              <path d="M18 0L9 34H0L9 0H18ZM45 0L36 34H27L36 0H45Z" fill="#D9D9D9" />
            </svg>
          </div>

          {/* Quote text */}
          <p style={S.quoteText}>{t.quote}</p>

          {/* Author */}
          <div style={S.authorName}>{t.author}</div>

          {/* Avatar row + Play button */}
          <div className="contact-avi-row" style={S.aviRow}>
            {TESTIMONIAL_ITEMS.map((item, i) => (
              <img
                key={i}
                src={item.avatar}
                alt="User"
                onClick={() => setIdx(i)}
                style={{
                  ...S.avi,
                  ...(i === idx ? S.aviActive : {}),
                }}
              />
            ))}
            <button
              onClick={() => setIdx((idx + 1) % TESTIMONIAL_ITEMS.length)}
              style={S.btnNext}
            >
              <Play size={16} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: 2 }} />
            </button>
          </div>
        </div>

        {/* RIGHT – dark "Get Started" card */}
        <div className="contact-right" style={S.right}>
          <div className="contact-dark-card" style={S.darkCard}>
            {/* Green Stacked Coins Icon from Figma */}
            <div style={S.iconWrap}>
              <img
                src="/coins_icon.png"
                alt="Get Started icon"
                style={{ width: 72, height: 72, objectFit: 'contain', display: 'block' }}
              />
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
                    placeholder="What are you say ?"
                    value={msg}
                    onChange={e => setMsg(e.target.value)}
                    style={S.textarea}
                  />
                </div>
                <button type="submit" style={S.btnSubmit}>Request Demo</button>
                <div style={S.orRow}>
                  <span style={S.orText}>or </span>
                  <a href="#pricing" style={S.trialLink}>Start Free Trial</a>
                </div>
              </form>
            ) : (
              <div style={S.successBox}>
                <CheckCircle2 size={48} color="#54BD95" />
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
    padding: '110px 0 100px',
    background: '#161C28',
    color: '#FFFFFF',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '500px 1fr',
    gap: 60, alignItems: 'center',
  },
  left: { maxWidth: 500 },
  h2: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 52, fontWeight: 700,
    color: '#FFFFFF', lineHeight: 1.2,
    letterSpacing: '-0.5px', marginBottom: 20,
  },
  sub: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, color: '#A6A6A6',
    lineHeight: '30px', marginBottom: 30,
    letterSpacing: '0%', fontWeight: 500,
  },
  quoteIconWrap: {
    marginBottom: 20,
  },
  quoteText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, color: '#A6A6A6',
    lineHeight: '32px', marginBottom: 24,
    letterSpacing: '0%', fontWeight: 500,
  },
  authorName: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, fontWeight: 500,
    color: '#A6A6A6', marginBottom: 36,
    letterSpacing: '0%',
  },
  aviRow: {
    display: 'flex', gap: 14, alignItems: 'center',
  },
  avi: {
    width: 60, height: 60, borderRadius: '50%',
    objectFit: 'cover', cursor: 'pointer',
    opacity: 0.5, border: '2px solid transparent',
    transition: 'all 0.2s',
  },
  aviActive: {
    opacity: 1,
    borderColor: '#54BD95',
    transform: 'scale(1.06)',
  },
  btnNext: {
    width: 60, height: 60, borderRadius: '50%',
    background: 'transparent',
    border: '2px solid #FFFFFF',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', flexShrink: 0,
  },

  /* ── RIGHT DARK CARD ── */
  right: { display: 'flex', justifyContent: 'flex-end' },
  darkCard: {
    width: '100%', maxWidth: 480,
    background: '#222938',
    borderRadius: 24, padding: '40px 36px 32px',
    boxShadow: '0 28px 60px rgba(0,0,0,0.38)',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
  },
  iconWrap: {
    marginBottom: 16,
  },
  cardTitle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 32, fontWeight: 700,
    color: '#FFFFFF', marginBottom: 28,
    letterSpacing: '-0.3px',
  },
  form: {
    width: '100%', display: 'flex',
    flexDirection: 'column', gap: 18,
  },
  group: { display: 'flex', flexDirection: 'column', gap: 8 },
  label: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 16, fontWeight: 600,
    color: '#FFFFFF', letterSpacing: '0%',
  },
  input: {
    width: '100%', height: 52,
    padding: '0 18px',
    borderRadius: 14, background: '#FFFFFF',
    border: 'none', color: '#191A15',
    fontSize: 15, outline: 'none',
    fontFamily: "'Inter', sans-serif",
  },
  textarea: {
    width: '100%', height: 110,
    padding: '14px 18px',
    borderRadius: 14, background: '#FFFFFF',
    border: 'none', color: '#191A15',
    fontSize: 15, outline: 'none', resize: 'none',
    fontFamily: "'Inter', sans-serif",
  },
  btnSubmit: {
    width: '100%', height: 58,
    borderRadius: 14, background: '#54BD95',
    color: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
    fontSize: 17, fontWeight: 700,
    border: 'none', cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(84,189,149,0.35)',
    marginTop: 6,
  },
  orRow: {
    textAlign: 'right', marginTop: 4,
  },
  orText: {
    color: '#A6A6A6',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14, fontWeight: 500,
  },
  trialLink: {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: 14,
    textDecoration: 'none',
  },
  successBox: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', textAlign: 'center', gap: 16, padding: '24px 0',
  },
  successTitle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 24, fontWeight: 700, color: '#FFFFFF',
  },
  successMsg: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14, color: '#A9A7B6', lineHeight: 1.6,
  },
  btnReset: {
    background: 'none', color: '#54BD95',
    border: '1px solid #54BD95', padding: '10px 24px',
    borderRadius: 10, fontWeight: 600, fontSize: 14,
    cursor: 'pointer',
  },
};
