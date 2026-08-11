import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PLANS = [
  {
    id: 'free', name: 'Free', price: 0,
    desc: 'Have a go and see your app perform',
    features: ['2 Users', '2GB Storage', 'Public Share & Comments', 'Chat Support', 'New updates outline'],
    btn: 'Sign up for free', popular: false,
  },
  {
    id: 'pro', name: 'Pro', price: 8,
    desc: 'Experiment the power of professional automation',
    badge: 'Save 20%',
    features: ['4 Users', '10GB Storage', 'Public Share & Comments', 'Chat Support & Analytics', 'Advanced Security'],
    btn: 'Go to Pro', popular: true,
  },
  {
    id: 'business', name: 'Business', price: 16,
    desc: 'Unleash maximum performance for teams',
    features: ['10 Users & Manager', '100GB Cloud Storage', 'Direct Custom Domain', '24/7 Priority Support', 'Collaboration Teams'],
    btn: 'Goto Business', popular: false,
  },
];

export default function PricingSection({ onSelectPlan }) {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" style={S.section}>
      <div className="container">

        {/* Header */}
        <div style={S.hdr}>
          <h2 style={S.h2}>Choose Plan<br />That's Right For You</h2>
          <p style={S.sub}>Choose plan that works best for you, feel free to contact us</p>

          {/* Billed toggle */}
          <div style={S.toggle}>
            <button
              style={!yearly ? S.toggleOn : S.toggleOff}
              onClick={() => setYearly(false)}
            >Billed Monthly</button>
            <button
              style={yearly ? S.toggleOn : S.toggleOff}
              onClick={() => setYearly(true)}
            >Billed Yearly</button>
          </div>
        </div>

        {/* Cards */}
        <div style={S.grid}>
          {PLANS.map(p => (
            <div key={p.id} style={p.popular ? S.cardPop : S.cardStd}>

              {/* Save badge */}
              {p.badge && (
                <div style={S.badgeRow}>
                  <span style={S.badge}>{p.badge}</span>
                </div>
              )}

              <h3 style={{ ...S.planName, color: p.popular ? '#fff' : '#192026' }}>{p.name}</h3>
              <p style={{ ...S.planDesc, color: p.popular ? 'rgba(255,255,255,0.85)' : '#A6A6A6' }}>{p.desc}</p>

              <div style={S.priceRow}>
                <span style={{ ...S.curr, color: p.popular ? '#fff' : '#192026' }}>$</span>
                <span style={{ ...S.price, color: p.popular ? '#fff' : '#192026' }}>{p.price}</span>
              </div>

              {/* Feature list */}
              <div style={{
                ...S.featBox,
                background: p.popular ? '#fff' : '#F8FBFA',
                border: p.popular ? 'none' : '1px solid #EAEEF3',
              }}>
                {p.features.map((f, i) => (
                  <div key={i} style={S.featRow}>
                    <div style={S.checkCirc}>
                      <Check size={10} strokeWidth={3} color="#fff" />
                    </div>
                    <span style={S.featText}>{f}</span>
                  </div>
                ))}
                <button onClick={() => onSelectPlan(p)} style={S.cardBtn}>
                  {p.btn}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const S = {
  section: { padding: '80px 0', background: '#fff' },
  hdr: { textAlign: 'center', maxWidth: 500, margin: '0 auto 52px' },
  h2: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 38, fontWeight: 800, color: '#192026',
    lineHeight: 1.2, marginBottom: 12,
  },
  sub: { fontSize: 14, color: '#A6A6A6', marginBottom: 26 },
  toggle: {
    display: 'inline-flex', background: '#F4F7F5',
    padding: 5, borderRadius: 999, border: '1px solid #E2E8F0',
  },
  toggleOn: {
    padding: '9px 24px', borderRadius: 999,
    fontSize: 13, fontWeight: 700,
    background: '#54BD95', color: '#fff',
    boxShadow: '0 4px 14px rgba(84,189,149,0.30)',
  },
  toggleOff: {
    padding: '9px 24px', borderRadius: 999,
    fontSize: 13, fontWeight: 500,
    background: 'none', color: '#A6A6A6',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 26, alignItems: 'start',
  },
  cardStd: {
    background: '#fff', border: '1px solid #E2E8F0',
    borderRadius: 22, padding: '28px 22px',
    display: 'flex', flexDirection: 'column',
    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
  },
  cardPop: {
    background: '#54BD95',
    borderRadius: 22, padding: '28px 22px',
    display: 'flex', flexDirection: 'column',
    boxShadow: '0 20px 50px rgba(84,189,149,0.42)',
    transform: 'translateY(-8px)',
  },
  badgeRow: { textAlign: 'center', marginBottom: 10 },
  badge: {
    background: '#fff', color: '#54BD95',
    fontSize: 11, fontWeight: 800,
    padding: '3px 14px', borderRadius: 20,
    display: 'inline-block',
  },
  planName: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 24, fontWeight: 800, textAlign: 'center', marginBottom: 5,
  },
  planDesc: { fontSize: 12, textAlign: 'center', marginBottom: 18, lineHeight: 1.55, minHeight: 36 },
  priceRow: {
    display: 'flex', alignItems: 'flex-start',
    justifyContent: 'center', gap: 2, marginBottom: 20,
  },
  curr: { fontSize: 18, fontWeight: 700, marginTop: 6 },
  price: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 54, fontWeight: 800, lineHeight: 1,
  },
  featBox: {
    display: 'flex', flexDirection: 'column', gap: 12,
    padding: '20px 16px', borderRadius: 16,
  },
  featRow: { display: 'flex', alignItems: 'center', gap: 11 },
  checkCirc: {
    width: 18, height: 18, borderRadius: '50%',
    background: '#54BD95', flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  featText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 13, fontWeight: 500, color: '#192026',
  },
  cardBtn: {
    width: '100%', padding: '13px',
    borderRadius: 999,
    background: '#54BD95', color: '#fff',
    fontSize: 14, fontWeight: 700,
    boxShadow: '0 5px 16px rgba(84,189,149,0.32)',
    marginTop: 12,
  },
};
