import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PLANS_DATA = [
  {
    id: 'free',
    name: 'Free',
    desc: 'Have a go  and test your superpowers',
    price: '0',
    features: [
      '2 Users',
      '2 Files',
      'Public Share & Comments',
      'Chat Support',
      'New income apps',
    ],
    btnText: 'Signup for free',
    isPro: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    desc: 'Experiment the power of infinite possibilities',
    price: '8',
    badge: 'Save $50 a year',
    features: [
      '4 Users',
      'All apps',
      'Unlimited editable exports',
      'Folders and collaboration',
      'All incoming apps',
    ],
    btnText: 'Go to pro',
    isPro: true,
  },
  {
    id: 'business',
    name: 'Business',
    desc: 'Unveil new superpowers and join the Design League',
    price: '16',
    features: [
      'All the features of pro plan',
      'Account success Manager',
      'Single Sign-On (SSO)',
      'Co-conception pogram',
      'Collaboration-Soon',
    ],
    btnText: 'Goto Business',
    isPro: false,
  },
];

export default function PricingSection({ onSelectPlan }) {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" style={S.section}>
      <div className="container">

        {/* ── Heading ── */}
        <div style={S.hdr}>
          <h2 style={S.h2}>
            Choose Plan<br />That's Right For You
          </h2>
          <p style={S.sub}>
            Choose plan that works best for you, feel free to contact us
          </p>

          {/* Toggle pill */}
          <div style={S.toggleWrap}>
            <div className="pricing-toggle" style={S.toggle}>
              <button
                style={!yearly ? S.toggleActive : S.toggleInactive}
                onClick={() => setYearly(false)}
              >
                Bil Monthly
              </button>
              <button
                style={yearly ? S.toggleActive : S.toggleInactive}
                onClick={() => setYearly(true)}
              >
                Bil Yearly
              </button>
            </div>
          </div>
        </div>

        {/* ── 3 Cards Grid ── */}
        <div className="pricing-grid" style={S.grid}>
          {PLANS_DATA.map(p => (
            <div key={p.id} className="pricing-card" style={p.isPro ? S.cardPro : S.cardStd}>

              {/* Decorative circle on Pro card */}
              {p.isPro && <div style={S.proArc} />}

              {/* Card Top Details */}
              <div style={S.cardTop}>
                <h3 style={{ ...S.planName, color: p.isPro ? '#FFFFFF' : '#191A15' }}>
                  {p.name}
                </h3>
                <p style={{ ...S.planDesc, color: p.isPro ? 'rgba(255,255,255,0.92)' : '#A6A6A6' }}>
                  {p.desc}
                </p>

                <div style={S.priceRow}>
                  <span style={{ ...S.curr, color: p.isPro ? 'rgba(255,255,255,0.85)' : '#A6A6A6' }}>$</span>
                  <span style={{ ...S.priceNum, color: p.isPro ? '#FFFFFF' : '#191A15' }}>{p.price}</span>
                </div>

                {p.badge && (
                  <div style={S.badgeWrap}>
                    <span style={S.proBadge}>{p.badge}</span>
                  </div>
                )}
              </div>

              {/* Inner Feature Box */}
              <div style={{
                ...S.innerBox,
                background: p.isPro ? '#FFFFFF' : '#F9FAFB',
              }}>
                <div style={S.featList}>
                  {p.features.map((f, i) => (
                    <div key={i} style={S.featItem}>
                      <div style={S.checkCircle}>
                        <Check size={13} color="#FFFFFF" strokeWidth={3.5} />
                      </div>
                      <span style={S.featText}>{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onSelectPlan && onSelectPlan(p)}
                  style={p.isPro ? S.btnPro : S.btnStd}
                >
                  {p.btnText}
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
  section: {
    padding: '90px 0 110px',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #F4FAF7 45%, #D8F0E7 100%)',
  },
  hdr: {
    textAlign: 'center',
    maxWidth: 620,
    margin: '0 auto 56px',
  },
  h2: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 54, fontWeight: 800,
    color: '#191A15', lineHeight: 1.2,
    letterSpacing: '-0.5px', marginBottom: 18,
  },
  sub: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 16, fontWeight: 600,
    color: '#A6A6A6', letterSpacing: '0%',
    marginBottom: 36,
  },

  /* Toggle */
  toggleWrap: { display: 'flex', justifyContent: 'center' },
  toggle: {
    background: '#FFFFFF',
    borderRadius: 14,
    padding: '6px',
    boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
    border: '1px solid #EEEEEE',
    display: 'inline-flex', gap: 6,
  },
  toggleActive: {
    background: '#54BD95', color: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14, fontWeight: 600,
    padding: '12px 26px', borderRadius: 10,
    border: 'none', cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(84,189,149,0.30)',
  },
  toggleInactive: {
    background: 'none', color: '#191A15',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14, fontWeight: 600,
    padding: '12px 26px', borderRadius: 10,
    border: 'none', cursor: 'pointer',
  },

  /* Grid */
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 32, alignItems: 'stretch',
  },

  /* Standard Card (Free / Business) */
  cardStd: {
    background: '#FFFFFF',
    borderRadius: 20,
    padding: '36px 20px 20px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
    border: '1px solid #EFF2F7',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between',
  },

  /* Pro Card (Middle Highlighted) */
  cardPro: {
    background: '#54BD95',
    borderRadius: 20,
    padding: '36px 20px 20px',
    boxShadow: '0 14px 44px rgba(84,189,149,0.38)',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative', overflow: 'hidden',
  },
  proArc: {
    position: 'absolute',
    top: 50, left: '50%',
    transform: 'translateX(-50%)',
    width: 380, height: 380,
    borderRadius: '50%',
    background: '#6BC2A1',
    opacity: 0.35,
    pointerEvents: 'none',
    zIndex: 0,
  },

  cardTop: {
    textAlign: 'center',
    marginBottom: 24,
    position: 'relative', zIndex: 1,
  },
  planName: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 32, fontWeight: 700,
    marginBottom: 8, letterSpacing: '-0.3px',
  },
  planDesc: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14, fontWeight: 500,
    lineHeight: 1.5, minHeight: 42,
    maxWidth: 240, margin: '0 auto 16px',
  },
  priceRow: {
    display: 'flex', alignItems: 'flex-start',
    justifyContent: 'center', gap: 3,
  },
  curr: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 16, fontWeight: 600,
    marginTop: 8,
  },
  priceNum: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 56, fontWeight: 800,
    lineHeight: 1,
  },
  badgeWrap: {
    marginTop: 10,
    display: 'flex', justifyContent: 'center',
  },
  proBadge: {
    background: '#85DAB9', color: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
    fontSize: 12, fontWeight: 700,
    padding: '6px 14px', borderRadius: 8,
  },

  /* Inner Feature Box */
  innerBox: {
    borderRadius: 14,
    padding: '24px 20px 20px',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    position: 'relative', zIndex: 1,
  },
  featList: {
    display: 'flex', flexDirection: 'column',
    gap: 16, marginBottom: 26,
  },
  featItem: {
    display: 'flex', alignItems: 'center', gap: 12,
  },
  checkCircle: {
    width: 24, height: 24, borderRadius: '50%',
    background: '#54BD95', flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  featText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 15, fontWeight: 500,
    color: '#191A15',
  },

  /* Buttons */
  btnStd: {
    width: '100%', padding: '15px',
    borderRadius: 14,
    background: '#FFFFFF', color: '#54BD95',
    fontFamily: "'Inter', sans-serif",
    fontSize: 15, fontWeight: 700,
    border: 'none', cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
    transition: 'all 0.2s',
  },
  btnPro: {
    width: '100%', padding: '15px',
    borderRadius: 14,
    background: '#54BD95', color: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
    fontSize: 15, fontWeight: 700,
    border: 'none', cursor: 'pointer',
    boxShadow: '0 6px 18px rgba(84,189,149,0.35)',
    transition: 'all 0.2s',
  },
};
