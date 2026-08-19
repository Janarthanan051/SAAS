import React from 'react';
import { Play, Check } from 'lucide-react';

export default function Hero({ onOpenDashboard, onOpenVideoModal }) {
  return (
    <section id="home" style={S.section}>
      <div className="container hero-grid" style={S.grid}>

        {/* ── LEFT ── */}
        <div className="hero-left" style={S.left}>
          <h1 className="hero-title" style={S.h1}>
            <span style={{ display: 'block' }}>We're here to</span>
            <span style={{ display: 'block' }}>Increase your</span>
            <span style={{ ...S.highlight, display: 'inline-block' }}>
              Productivity
              {/* Exact curved green underline Vector 32 */}
              <svg
                style={S.underlineSvg}
                viewBox="0 0 479 26"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 6 22 Q 240 2 473 22"
                  stroke="#54BD95"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="hero-sub" style={S.sub}>
            Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.
          </p>

          <div className="hero-btn-row" style={S.btnRow}>
            <button onClick={onOpenDashboard} style={S.btnTrial}>Try free trial</button>
            <button onClick={onOpenVideoModal} style={S.btnDemo}>
              <span style={S.playCircle}>
                <Play size={13} color="#191A15" fill="#191A15" style={{ marginLeft: 2 }} />
              </span>
              <span style={S.demoLabel}>View Demo</span>
            </button>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hero-right" style={S.right}>
          <div className="hero-graphic" style={S.graphic}>

            {/* Green card + person: CSS background-image */}
            <div style={S.greenBox} />

            {/* ── Floating Card: Enter amount (top-left) ── */}
            <div style={S.cardAmount}>
              <div style={S.amtLabel}>Enter amount</div>
              <div style={S.amtRow}>
                <span style={S.amtVal}>$450..00</span>
                <button style={S.btnSend}>Send</button>
              </div>
            </div>

            {/* ── Badge: Purple Check ── */}
            <div style={S.purpleCheck}>
              <Check size={20} color="#fff" strokeWidth={3.5} />
            </div>

            {/* ── Badge: Yellow Database ── */}
            <div style={S.yellowIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>

            {/* ── Floating Card: Total Income (bottom-left) ── */}
            <div style={S.cardIncome}>
              <div style={S.incomeLabel}>Total Income</div>
              <div style={S.incomeRow}>
                <span style={S.incomeVal}>$245.00</span>
                <div style={S.miniChart}>
                  <div style={{ ...S.bar, height: 8,  background: '#DBE5FA' }} />
                  <div style={{ ...S.bar, height: 16, background: '#54BD95' }} />
                  <div style={{ ...S.bar, height: 10, background: '#DBE5FA' }} />
                </div>
              </div>
            </div>

            {/* ── Credit Card: bottom-right, rotated ── */}
            <div style={S.creditCard}>
              <div style={S.ccDarkCircle} />
              <div style={S.ccCircles}>
                <div style={{ ...S.ccCirc, background: 'rgba(180,180,180,0.7)' }} />
                <div style={{ ...S.ccCirc, background: 'rgba(120,120,120,0.6)', marginLeft: -10 }} />
              </div>
              <div style={S.ccName}>Creadit Crad</div>
              <div style={S.ccNum}>• • • •  1234</div>
              <div style={S.ccExp}>09/25</div>
            </div>

            {/* ── Badge: Coral Chat (bottom-center) ── */}
            <div style={S.chatBadge}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
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
    background: 'linear-gradient(180deg, #E5F6F0 0%, #E9F7F3 50%, #EEF9F5 100%)',
    padding: '60px 0 80px',
    position: 'relative',
    overflow: 'visible',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '520px 1fr',
    gap: 40, alignItems: 'center',
  },
  left: { maxWidth: 520 },
  h1: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 66, fontWeight: 700,
    color: '#191A15', lineHeight: '76px',
    letterSpacing: '0%', marginBottom: 36,
  },
  highlight: {
    position: 'relative', display: 'inline-block',
    paddingBottom: 22,
  },
  underlineSvg: {
    position: 'absolute',
    bottom: -18, left: 0,
    width: 479, height: 26,
    pointerEvents: 'none',
    zIndex: 0,
  },
  sub: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, fontWeight: 500,
    color: '#000000', lineHeight: '30px',
    letterSpacing: '0%', marginBottom: 36,
    maxWidth: 461, opacity: 0.8,
  },
  btnRow: { display: 'flex', alignItems: 'center', gap: 24 },
  btnTrial: {
    backgroundColor: '#54BD95', color: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500, fontSize: 16,
    padding: '16px 34px',
    borderRadius: 40,
    boxShadow: '0 8px 24px rgba(84,189,149,0.34)',
    border: 'none', cursor: 'pointer',
    letterSpacing: '0%',
  },
  btnDemo: {
    display: 'flex', alignItems: 'center', gap: 12,
    background: 'none', border: 'none', cursor: 'pointer',
    height: 40, padding: 0,
  },
  playCircle: {
    width: 40, height: 40,
    borderRadius: '50%',
    border: '1.5px solid #C0C8D0',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: '#FFFFFF',
    flexShrink: 0,
  },
  demoLabel: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 16, fontWeight: 600, color: '#191A15',
    letterSpacing: '0%',
  },

  /* ── RIGHT GRAPHIC ── */
  right: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' },

  graphic: {
    position: 'relative',
    width: 620, height: 530,
  },

  greenBox: {
    position: 'absolute',
    top: 0, left: 140,
    width: 410, height: 526,
    backgroundImage: "url('/hero_person_bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    borderRadius: 24,
    zIndex: 2,
  },

  cardAmount: {
    position: 'absolute',
    top: 14, left: 0,
    background: '#FFFFFF',
    borderRadius: 14,
    padding: '12px 18px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.10)',
    zIndex: 6,
    width: 230,
  },
  amtLabel: {
    fontSize: 11, color: '#A6A6A6',
    marginBottom: 4, fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
  },
  amtRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 },
  amtVal: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 20, fontWeight: 700, color: '#191A15',
  },
  btnSend: {
    background: '#54BD95', color: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
    fontSize: 13, fontWeight: 700,
    padding: '7px 18px', borderRadius: 40,
    flexShrink: 0, border: 'none', cursor: 'pointer',
  },

  purpleCheck: {
    position: 'absolute',
    top: 175, left: 88,
    width: 42, height: 42,
    borderRadius: 12,
    background: '#4535AF',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 6,
    boxShadow: '0 6px 18px rgba(69,53,175,0.35)',
    transform: 'rotate(-15deg)',
  },

  yellowIcon: {
    position: 'absolute',
    top: 24, right: 36,
    width: 46, height: 46,
    borderRadius: 12,
    background: '#FBC75E',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 6,
    boxShadow: '0 6px 18px rgba(251,199,94,0.35)',
    transform: 'rotate(15deg)',
  },

  cardIncome: {
    position: 'absolute',
    bottom: 50, left: 60,
    background: '#FFFFFF',
    borderRadius: 14,
    padding: '10px 16px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.10)',
    zIndex: 6,
    width: 175,
  },
  incomeLabel: {
    fontSize: 11, color: '#A6A6A6',
    marginBottom: 4, fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
  },
  incomeRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  incomeVal: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, fontWeight: 700, color: '#191A15',
  },
  miniChart: { display: 'flex', alignItems: 'flex-end', gap: 3 },
  bar: { width: 4, borderRadius: 2 },

  creditCard: {
    position: 'absolute',
    bottom: 30, right: 6,
    width: 148, height: 175,
    background: '#161C28',
    borderRadius: 16,
    padding: '14px 16px',
    color: '#FFFFFF',
    zIndex: 5,
    boxShadow: '0 14px 44px rgba(0,0,0,0.35)',
    transform: 'rotate(14deg)',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  ccDarkCircle: {
    position: 'absolute',
    top: -20, right: -20,
    width: 88, height: 88,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.04)',
  },
  ccCircles: { display: 'flex', alignItems: 'center' },
  ccCirc: { width: 20, height: 20, borderRadius: '50%' },
  ccName: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 10, color: '#F0F0EF', fontWeight: 500, marginTop: 4,
  },
  ccNum: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 12, fontWeight: 700, letterSpacing: '1px', color: '#FFFFFF',
  },
  ccExp: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 10, color: '#E6E6E6', alignSelf: 'flex-end',
  },

  chatBadge: {
    position: 'absolute',
    bottom: 2, right: 175,
    width: 40, height: 40,
    borderRadius: 12,
    background: '#FFAA94',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 6,
    boxShadow: '0 6px 18px rgba(255,170,148,0.40)',
    transform: 'rotate(15deg)',
  },
};
