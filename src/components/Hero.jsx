import React from 'react';
import { Play, Check } from 'lucide-react';

export default function Hero({ onOpenDashboard, onOpenVideoModal }) {
  return (
    <section id="home" style={S.section}>
      <div className="container" style={S.grid}>

        {/* ── LEFT ── */}
        <div style={S.left}>
          <h1 style={S.h1}>
            We're here to<br />
            Increase your<br />
            <span style={S.highlight}>
              Productivity
              {/* Exact curved green underline from reference */}
              <svg
                style={S.underlineSvg}
                viewBox="0 0 340 16"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 4 10 Q 85 2 170 8 Q 255 14 336 8"
                  stroke="#54BD95"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p style={S.sub}>
            Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.
          </p>

          <div style={S.btnRow}>
            <button onClick={onOpenDashboard} style={S.btnTrial}>Try free trial</button>
            <button onClick={onOpenVideoModal} style={S.btnDemo}>
              <span style={S.playCircle}>
                <Play size={11} color="#192026" fill="none" strokeWidth={2.5} style={{ marginLeft: 2 }} />
              </span>
              <span style={S.demoLabel}>View Demo</span>
            </button>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div style={S.right}>
          <div style={S.graphic}>

            {/* Green background rounded rectangle */}
            <div style={S.greenBox}>
              {/* Zig-zag / wave line inside green box */}
              <svg style={S.waveSvg} viewBox="0 0 280 380" fill="none">
                <polyline
                  points="10,80 50,40 90,110 130,30 170,100 210,50 260,90"
                  stroke="rgba(255,255,255,0.25)" strokeWidth="2.5"
                  fill="none" strokeLinecap="round" strokeLinejoin="round"
                />
                <polyline
                  points="10,160 60,120 100,200 140,130 180,190 230,150 270,180"
                  stroke="rgba(255,255,255,0.18)" strokeWidth="2"
                  fill="none" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Person image overlaid on green box */}
            <img
              src="/hero_person.jpg"
              alt="Person"
              style={S.personImg}
              onError={e => {
                e.target.style.display = 'none';
              }}
            />

            {/* White card: Enter amount */}
            <div className="float" style={S.cardAmount}>
              <div style={S.amtLabel}>Enter amount</div>
              <div style={S.amtRow}>
                <span style={S.amtVal}>$450.00</span>
                <button style={S.btnSend}>Send</button>
              </div>
            </div>

            {/* Purple rounded-square checkmark */}
            <div style={S.purpleCheck}>
              <Check size={12} color="#fff" strokeWidth={3} />
            </div>

            {/* Yellow/gold rounded-square icon top-right of green */}
            <div style={S.yellowIcon}>
              {/* document icon lines */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="1" width="14" height="16" rx="2" fill="rgba(255,255,255,0.3)"/>
                <rect x="4" y="5" width="10" height="1.5" rx="0.75" fill="white"/>
                <rect x="4" y="8" width="8" height="1.5" rx="0.75" fill="white"/>
                <rect x="4" y="11" width="6" height="1.5" rx="0.75" fill="white"/>
              </svg>
            </div>

            {/* White card: Total Income */}
            <div className="float2" style={S.cardIncome}>
              <div style={S.incomeLabel}>Total Income</div>
              <div style={S.incomeRow}>
                <span style={S.incomeVal}>$245.00</span>
                {/* mini bar chart */}
                <div style={S.miniChart}>
                  <div style={{ ...S.bar, height: 7,  background: '#CBD5E1' }} />
                  <div style={{ ...S.bar, height: 14, background: '#54BD95' }} />
                  <div style={{ ...S.bar, height: 9,  background: '#CBD5E1' }} />
                </div>
              </div>
            </div>

            {/* Dark card: Creadlit Crad */}
            <div style={S.creditCard}>
              {/* Mastercard-style overlapping circles */}
              <div style={S.ccCircles}>
                <div style={{ ...S.ccCirc, background: '#EF4444' }} />
                <div style={{ ...S.ccCirc, background: '#F59E0B', marginLeft: -8 }} />
              </div>
              <div style={S.ccName}>Creadlit Crad</div>
              <div style={S.ccNum}>●●●● 1234</div>
              <div style={S.ccExp}>09/25</div>
            </div>

            {/* Orange chat bubble badge (bottom right of credit card area) */}
            <div style={S.chatBadge}>
              {/* chat bubble SVG */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const S = {
  section: {
    background: 'linear-gradient(135deg, #D0F4ED 0%, #E0FAFA 35%, #EEF8FB 70%, #F8FCFE 100%)',
    padding: '52px 0 80px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48, alignItems: 'center',
  },
  left: { maxWidth: 520 },
  h1: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 56, fontWeight: 800,
    color: '#192026', lineHeight: 1.12,
    letterSpacing: '-1.5px', marginBottom: 24,
  },
  highlight: {
    position: 'relative', display: 'inline-block',
    paddingBottom: 8,
  },
  underlineSvg: {
    position: 'absolute',
    bottom: -2, left: 0,
    width: '100%', height: 16,
    pointerEvents: 'none',
  },
  sub: {
    fontSize: 15, color: '#68717A',
    lineHeight: 1.72, marginBottom: 36,
    maxWidth: 440, fontWeight: 400,
  },
  btnRow: { display: 'flex', alignItems: 'center', gap: 28 },
  btnTrial: {
    backgroundColor: '#54BD95', color: '#fff',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600, fontSize: 15,
    padding: '14px 32px', borderRadius: 999,
    boxShadow: '0 8px 24px rgba(84,189,149,0.34)',
  },
  btnDemo: {
    display: 'flex', alignItems: 'center', gap: 12,
    background: 'none',
  },
  playCircle: {
    width: 42, height: 42,
    borderRadius: '50%',
    border: '1.5px solid #C0C8D0',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: '#fff',
    flexShrink: 0,
  },
  demoLabel: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 15, fontWeight: 600, color: '#192026',
  },

  right: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' },
  graphic: {
    position: 'relative',
    width: 440, height: 500,
  },

  /* Green background rounded box */
  greenBox: {
    position: 'absolute',
    top: 20, right: 0,
    width: 290, height: 430,
    background: '#54BD95',
    borderRadius: 28,
    overflow: 'hidden',
    zIndex: 1,
  },
  waveSvg: {
    position: 'absolute', inset: 0, width: '100%', height: '100%',
  },

  /* Person image */
  personImg: {
    position: 'absolute',
    bottom: 0, right: 8,
    width: 295, height: 445,
    objectFit: 'cover',
    borderRadius: 24,
    zIndex: 2,
  },

  /* Enter amount card (top-left) */
  cardAmount: {
    position: 'absolute',
    top: 24, left: 0,
    background: '#fff',
    borderRadius: 14,
    padding: '12px 16px',
    boxShadow: '0 16px 40px rgba(0,0,0,0.10)',
    zIndex: 4,
    minWidth: 200,
  },
  amtLabel: { fontSize: 10, color: '#A6A6A6', marginBottom: 6, fontWeight: 500 },
  amtRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 },
  amtVal: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 17, fontWeight: 800, color: '#192026',
  },
  btnSend: {
    background: '#54BD95', color: '#fff',
    fontSize: 12, fontWeight: 700,
    padding: '5px 14px', borderRadius: 999,
    flexShrink: 0,
  },

  /* Purple check badge */
  purpleCheck: {
    position: 'absolute',
    top: 195, left: 95,
    width: 32, height: 32,
    borderRadius: 9,
    background: '#5A55CA',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 5,
    boxShadow: '0 6px 18px rgba(90,85,202,0.4)',
  },

  /* Yellow icon (top right of green box) */
  yellowIcon: {
    position: 'absolute',
    top: 20, right: -6,
    width: 38, height: 38,
    borderRadius: 10,
    background: '#F59E0B',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 5,
    boxShadow: '0 6px 16px rgba(245,158,11,0.38)',
    transform: 'rotate(8deg)',
  },

  /* Total Income card (bottom-left) */
  cardIncome: {
    position: 'absolute',
    bottom: 80, left: -10,
    background: '#fff',
    borderRadius: 14,
    padding: '12px 16px',
    boxShadow: '0 16px 40px rgba(0,0,0,0.10)',
    zIndex: 4,
    minWidth: 170,
  },
  incomeLabel: { fontSize: 10, color: '#A6A6A6', marginBottom: 4, fontWeight: 500 },
  incomeRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 },
  incomeVal: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 17, fontWeight: 800, color: '#192026',
  },
  miniChart: { display: 'flex', alignItems: 'flex-end', gap: 3 },
  bar: { width: 4, borderRadius: 2 },

  /* Credit card dark */
  creditCard: {
    position: 'absolute',
    bottom: 52, right: -26,
    width: 130, height: 130,
    background: '#1C2530',
    borderRadius: 16,
    padding: '14px',
    color: '#fff',
    zIndex: 4,
    boxShadow: '0 20px 44px rgba(0,0,0,0.35)',
    transform: 'rotate(10deg)',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ccCircles: { display: 'flex' },
  ccCirc: { width: 18, height: 18, borderRadius: '50%', opacity: 0.88 },
  ccName: { fontSize: 9, color: '#94A3B8', fontWeight: 600, marginTop: 6 },
  ccNum: { fontSize: 11, fontWeight: 700, letterSpacing: '0.5px' },
  ccExp: { fontSize: 9, color: '#94A3B8', alignSelf: 'flex-end' },

  /* Orange chat badge */
  chatBadge: {
    position: 'absolute',
    bottom: 36, right: 72,
    width: 32, height: 32,
    borderRadius: 9,
    background: '#F97316',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 5,
    boxShadow: '0 6px 16px rgba(249,115,22,0.40)',
    transform: 'rotate(-8deg)',
  },
};
