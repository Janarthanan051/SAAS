import React from 'react';
import { Cloud, Briefcase } from 'lucide-react';

export default function FeaturesGrid({ onOpenDashboard }) {
  // Donut chart dimensions (scaled from spec 190px to fit card)
  const R = 56;          // ring radius
  const SW = 26;         // strokeWidth (proportional to spec 34px)
  const C = 2 * Math.PI * R; // circumference ≈ 351.9
  const seg = Math.floor(C / 4) - 3; // segment length minus gap = ~85
  const gap = C - seg;  // remaining = ~267

  return (
    <section id="features" className="section-white" style={S.section}>
      <div className="container">

        {/* ── HEADER ROW ── */}
        <div className="features-header-row" style={S.headerRow}>
          <div style={S.headerLeft}>
            <h2 className="section-title" style={S.h2}>Our Features<br />you cab get</h2>
          </div>
          <div style={S.headerCenter}>
            <p style={S.sub}>
              We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly
            </p>
          </div>
          <div style={S.headerRight}>
            <button onClick={onOpenDashboard} style={S.btnGet}>Get Started</button>
          </div>
        </div>

        {/* ── 3-COLUMN CARDS ── */}
        <div className="features-grid" style={S.grid}>

          {/* ── CARD 1: Collaboration Teams ── */}
          <div style={S.card}>
            <div style={S.visual}>
              {/* Row 1: green block + circle-arrow + skeleton lines */}
              <div style={V.row}>
                <div style={V.greenBlock} />
                <div style={V.arrowGroup}>
                  <div style={V.greenCircle} />
                  <div style={V.arrowHead} />
                </div>
                <div style={V.linesCol}>
                  <div style={V.line} />
                  <div style={{ ...V.line, width: '70%' }} />
                </div>
              </div>

              {/* Row 2: blue block + skeleton lines */}
              <div style={V.row}>
                <div style={V.blueBlock} />
                <div style={V.linesCol}>
                  <div style={V.line} />
                  <div style={{ ...V.line, width: '82%' }} />
                  <div style={{ ...V.line, width: '55%' }} />
                </div>
              </div>

              {/* Row 3: 3 avatar circles */}
              <div style={V.circleRow}>
                <div style={{ ...V.circ, background: '#E9EFFC' }} />
                <div style={{ ...V.circ, background: '#0F8CE9' }} />
                <div style={{
                  ...V.circ, background: '#54BD95',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ color: '#fff', fontSize: 13, fontWeight: 900, letterSpacing: '-1px' }}>•••</span>
                </div>
              </div>
            </div>
            <h3 style={S.cardTitle}>Collboration Teams</h3>
            <p style={S.cardDesc}>Here you can handle projects together with team virtually</p>
          </div>

          {/* ── CARD 2: Cloud Storage ── */}
          <div style={S.card}>
            <div style={S.visual}>
              {/* White cloud badge — top-right */}
              <div style={V.cloudBadge}>
                <Cloud size={16} color="#54BD95" />
              </div>

              {/* Blue vertical accent bar */}
              <div style={V.blueAccentBar} />

              {/* Green document card — left-center */}
              <div style={V.docCard}>
                <div style={V.docYellow}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="7" width="3.5" height="8" rx="1.5" fill="white"/>
                    <rect x="6.25" y="4" width="3.5" height="11" rx="1.5" fill="white"/>
                    <rect x="11.5" y="1" width="3.5" height="14" rx="1.5" fill="white"/>
                  </svg>
                </div>
                <div style={V.docTitle}>Document File</div>
                <div style={V.docSub}>456 GB I 1056 Items</div>
              </div>

              {/* Green vertical bars — bottom */}
              <div style={V.barsWrap}>
                {[22, 36, 18, 44, 28, 34].map((h, i) => (
                  <div key={i} style={{ ...V.vBar, height: h }} />
                ))}
              </div>
            </div>
            <h3 style={S.cardTitle}>Cloud Storage</h3>
            <p style={S.cardDesc}>No nedd to worry about storage because we provide storage up to 2 TB</p>
          </div>

          {/* ── CARD 3: Daily Analytics ── */}
          <div style={S.card}>
            <div style={S.visual}>
              <div style={V.analyticsWrap}>

                {/* 4-segment donut chart */}
                <div style={V.donutWrap}>
                  <svg width="140" height="140" viewBox="0 0 140 140">
                    <g transform="rotate(-90 70 70)">
                      {/* Background track */}
                      <circle cx="70" cy="70" r={R} fill="none" stroke="#E7ECF3" strokeWidth={SW} />
                      {/* Segment 1 — Purple */}
                      <circle cx="70" cy="70" r={R} fill="none" stroke="#52459F" strokeWidth={SW}
                        strokeDasharray={`${seg} ${gap}`} strokeDashoffset={0} strokeLinecap="butt" />
                      {/* Segment 2 — Blue */}
                      <circle cx="70" cy="70" r={R} fill="none" stroke="#0F8CE9" strokeWidth={SW}
                        strokeDasharray={`${seg} ${gap}`} strokeDashoffset={-(seg + 3)} strokeLinecap="butt" />
                      {/* Segment 3 — Green */}
                      <circle cx="70" cy="70" r={R} fill="none" stroke="#54BD95" strokeWidth={SW}
                        strokeDasharray={`${seg} ${gap}`} strokeDashoffset={-(seg + 3) * 2} strokeLinecap="butt" />
                      {/* Segment 4 — Yellow */}
                      <circle cx="70" cy="70" r={R} fill="none" stroke="#FEE900" strokeWidth={SW}
                        strokeDasharray={`${seg} ${gap}`} strokeDashoffset={-(seg + 3) * 3} strokeLinecap="butt" />
                    </g>
                    {/* Center fill circles */}
                    <circle cx="70" cy="70" r="37" fill="#FEFEFD" />
                    <circle cx="70" cy="70" r="27" fill="#E6F9FD" />
                  </svg>
                  <div style={V.gaugeLabels}>
                    <span style={V.gaugeLabel}>60%</span>
                    <span style={V.gaugeLabel}>40%</span>
                  </div>
                </div>

                {/* Cloud progress row */}
                <div style={V.progRow}>
                  <div style={{ ...V.progIcon, background: '#0F8CE9' }}>
                    <Cloud size={11} color="#fff" />
                  </div>
                  <div style={V.track}>
                    <div style={{ ...V.fill, width: '45%' }} />
                  </div>
                </div>

                {/* Briefcase progress row */}
                <div style={V.progRow}>
                  <div style={{ ...V.progIcon, background: '#EBF7F4' }}>
                    <Briefcase size={11} color="#54BD95" />
                  </div>
                  <div style={V.track}>
                    <div style={{ ...V.fill, width: '70%' }} />
                  </div>
                </div>

              </div>
            </div>
            <h3 style={S.cardTitle}>Daily Analytics</h3>
            <p style={S.cardDesc}>We always provide useful informatin to make it easier for you every day</p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── SECTION & LAYOUT STYLES ── */
const S = {
  section: {
    padding: '80px 0 96px',
    background: 'linear-gradient(90deg, #FFF5F5 0%, #FFFFFF 50%, #E8F7F2 100%)',
  },

  headerRow: {
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 56, gap: 32,
  },
  headerLeft: { flex: '0 0 auto' },
  h2: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 50, fontWeight: 600,
    color: '#191A15', lineHeight: 1.2,
    letterSpacing: 0, margin: 0,
  },
  headerCenter: { flex: 1, maxWidth: 360 },
  sub: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, fontWeight: 500,
    color: '#A6A6A6', lineHeight: '30px',
    letterSpacing: 0, margin: 0,
  },
  headerRight: { flex: '0 0 auto' },
  btnGet: {
    background: '#54BD95', color: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500, fontSize: 18,
    lineHeight: '30px', letterSpacing: 0,
    width: 162, height: 66,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: 70,
    border: 'none', cursor: 'pointer',
    flexShrink: 0,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 44,
  },
  card: {
    display: 'flex', flexDirection: 'column',
  },

  /* Card illustration box */
  visual: {
    width: '100%', height: 300,
    background: '#F9F8FE',
    borderRadius: 20,
    display: 'flex', flexDirection: 'column',
    alignItems: 'flex-start', justifyContent: 'center',
    padding: '20px 22px',
    position: 'relative', overflow: 'hidden',
    gap: 14, boxSizing: 'border-box',
  },

  /* Title below illustration */
  cardTitle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 30, fontWeight: 600,
    color: '#191A15', lineHeight: '30px',
    letterSpacing: 0,
    marginTop: 30, marginBottom: 0,
  },

  /* Description below title */
  cardDesc: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, fontWeight: 500,
    color: '#A6A6A6', lineHeight: '30px',
    letterSpacing: 0,
    marginTop: 12, marginBottom: 0,
  },
};

/* ── VISUAL / ILLUSTRATION ELEMENT STYLES ── */
const V = {

  /* ─ Collaboration card ─ */
  row: { display: 'flex', alignItems: 'center', gap: 10, width: '100%' },
  greenBlock: {
    width: 30, height: 40,
    background: '#54BD95', borderRadius: 7, flexShrink: 0,
  },
  blueBlock: {
    width: 30, height: 32,
    background: '#0F8CE9', borderRadius: 7, flexShrink: 0,
  },
  arrowGroup: { display: 'flex', alignItems: 'center', gap: 3 },
  greenCircle: { width: 18, height: 18, borderRadius: '50%', background: '#54BD95' },
  arrowHead: {
    width: 0, height: 0,
    borderTop: '5px solid transparent',
    borderBottom: '5px solid transparent',
    borderLeft: '9px solid #54BD95',
  },
  linesCol: { flex: 1, display: 'flex', flexDirection: 'column', gap: 5 },
  line: { width: '100%', height: 7, background: '#DBE5FA', borderRadius: 4 },
  circleRow: { display: 'flex', gap: 10, marginTop: 4 },
  circ: { width: 36, height: 36, borderRadius: '50%' },

  /* ─ Cloud Storage card ─ */
  cloudBadge: {
    position: 'absolute', top: 14, right: 14,
    background: '#FFFFFF', padding: '6px 10px',
    borderRadius: 10,
    boxShadow: '0 4px 9px rgba(0,0,0,0.08)',
    display: 'flex', alignItems: 'center',
  },
  blueAccentBar: {
    position: 'absolute', right: 50, top: 36, bottom: 36,
    width: 10, background: '#0F8CE9', borderRadius: 6,
    zIndex: 1,
  },
  docCard: {
    background: '#5FC09B', color: '#FFFFFF',
    borderRadius: 14, padding: '14px 16px',
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
    width: 175, zIndex: 2,
    boxShadow: '0 14px 44px rgba(0,0,0,0.12)',
  },
  docYellow: {
    width: 34, height: 34, background: '#FEE900',
    borderRadius: 9,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 8,
    boxShadow: '0 4px 9px rgba(0,0,0,0.10)',
  },
  docTitle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 20, fontWeight: 500,
    color: '#FFFFFF', lineHeight: 1.3, letterSpacing: 0,
  },
  docSub: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 13, fontWeight: 500,
    color: 'rgba(255,255,255,0.88)',
    marginTop: 3, letterSpacing: 0,
  },
  barsWrap: {
    position: 'absolute', bottom: 14,
    left: 22, right: 22,
    display: 'flex', alignItems: 'flex-end',
    gap: 8, justifyContent: 'center',
  },
  vBar: { width: 9, background: '#54BD95', borderRadius: 4 },

  /* ─ Daily Analytics card ─ */
  analyticsWrap: {
    width: '100%',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', gap: 8,
  },
  donutWrap: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
  },
  gaugeLabels: {
    display: 'flex', justifyContent: 'space-between',
    width: 120, marginTop: 4,
  },
  gaugeLabel: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14, fontWeight: 500,
    color: '#000000', letterSpacing: 0,
  },
  progRow: {
    width: '100%', background: '#FFFFFF',
    padding: '7px 10px', borderRadius: 10,
    display: 'flex', alignItems: 'center', gap: 10,
    boxShadow: '0 4px 9px rgba(0,0,0,0.05)',
  },
  progIcon: {
    width: 26, height: 26, borderRadius: 7,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 9px rgba(0,0,0,0.08)',
  },
  track: {
    flex: 1, height: 5,
    background: '#DBE5FA', borderRadius: 4, overflow: 'hidden',
  },
  fill: {
    height: '100%', background: '#54BD95', borderRadius: 4,
  },
};
