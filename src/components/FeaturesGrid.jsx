import React from 'react';
import { Cloud, Briefcase } from 'lucide-react';

export default function FeaturesGrid({ onOpenDashboard }) {
  return (
    <section id="features" style={S.section}>
      <div className="container">

        {/* Header row */}
        <div style={S.headerRow}>
          <div style={S.headerLeft}>
            <h2 style={S.h2}>Our Features<br />you can get</h2>
          </div>
          <div style={S.headerRight}>
            <p style={S.sub}>
              We offer a variety of interesting features that you can help increase your
              productivity at work and manage your project easily
            </p>
            <button onClick={onOpenDashboard} style={S.btnGet}>Get Started</button>
          </div>
        </div>

        {/* 3-column grid */}
        <div style={S.grid}>

          {/* ── CARD 1: Collaboration Teams ── */}
          <div style={S.card}>
            <div style={S.visual}>
              {/* Row 1: green block + arrow + lines */}
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

              {/* Row 2: blue block + lines */}
              <div style={V.row}>
                <div style={V.blueBlock} />
                <div style={V.linesCol}>
                  <div style={V.line} />
                  <div style={{ ...V.line, width: '82%' }} />
                  <div style={{ ...V.line, width: '55%' }} />
                </div>
              </div>

              {/* Row 3: 3 circles */}
              <div style={V.circleRow}>
                <div style={{ ...V.circ, background: '#E2E8F0' }} />
                <div style={{ ...V.circ, background: '#0085FF' }} />
                <div style={{ ...V.circ, background: '#54BD95', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontSize: 11, fontWeight: 800 }}>•••</span>
                </div>
              </div>
            </div>
            <h3 style={S.cardTitle}>Collaboration Teams</h3>
            <p style={S.cardDesc}>Here you can handle projects together with team virtually</p>
          </div>

          {/* ── CARD 2: Cloud Storage ── */}
          <div style={S.card}>
            <div style={S.visual}>
              {/* White cloud badge top right */}
              <div style={V.cloudBadge}>
                <Cloud size={13} color="#54BD95" />
              </div>

              {/* Centered green document card */}
              <div style={V.docCard}>
                <div style={V.docYellow}>
                  {/* document lines icon */}
                  <div style={V.docYellowLine} />
                  <div style={{ ...V.docYellowLine, width: 8 }} />
                </div>
                <div style={V.docTitle}>Document File</div>
                <div style={V.docSub}>456 GB | 1056 Items</div>
              </div>

              {/* 5 green vertical bars bottom */}
              <div style={V.barsWrap}>
                {[22, 34, 18, 40, 26].map((h, i) => (
                  <div key={i} style={{ ...V.vBar, height: h }} />
                ))}
              </div>
            </div>
            <h3 style={S.cardTitle}>Cloud Storage</h3>
            <p style={S.cardDesc}>No need to worry about storage because we provide storage up to 2 TB</p>
          </div>

          {/* ── CARD 3: Daily Analytics ── */}
          <div style={S.card}>
            <div style={S.visual}>
              <div style={V.analyticsWrap}>
                {/* Gauge / donut top */}
                <div style={V.gaugeOuter}>
                  {/* Blue left half */}
                  <div style={V.gaugeSemicircle}>
                    <svg viewBox="0 0 120 60" width="120" height="60">
                      <path
                        d="M 6 60 A 54 54 0 0 1 114 60"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 6 60 A 54 54 0 0 1 114 60"
                        fill="none"
                        stroke="#0085FF"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray="110 170"
                      />
                      <path
                        d="M 6 60 A 54 54 0 0 1 114 60"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray="60 220"
                        strokeDashoffset="-110"
                      />
                    </svg>
                    {/* center dot */}
                    <div style={V.gaugeDot} />
                  </div>
                  <div style={V.gaugeLabels}>
                    <span style={V.gaugeLabel}>60%</span>
                    <span style={V.gaugeLabel}>40%</span>
                  </div>
                </div>

                {/* Blue progress row */}
                <div style={V.progRow}>
                  <div style={{ ...V.progIcon, background: '#0085FF' }}>
                    <Cloud size={10} color="#fff" />
                  </div>
                  <div style={V.track}>
                    <div style={{ ...V.fill, width: '45%' }} />
                  </div>
                </div>

                {/* Green progress row */}
                <div style={V.progRow}>
                  <div style={{ ...V.progIcon, background: '#54BD95' }}>
                    <Briefcase size={10} color="#fff" />
                  </div>
                  <div style={V.track}>
                    <div style={{ ...V.fill, width: '75%' }} />
                  </div>
                </div>
              </div>
            </div>
            <h3 style={S.cardTitle}>Daily Analytics</h3>
            <p style={S.cardDesc}>We always provide useful Informatin to make it easier for you every day</p>
          </div>

        </div>
      </div>
    </section>
  );
}

const S = {
  section: { padding: '80px 0', background: '#F8FBFA' },
  headerRow: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'flex-start', marginBottom: 52,
    flexWrap: 'wrap', gap: 24,
  },
  headerLeft: { flex: 1, minWidth: 240 },
  h2: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 38, fontWeight: 800, color: '#192026', lineHeight: 1.2,
  },
  headerRight: {
    flex: 1, minWidth: 300, maxWidth: 500,
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20,
  },
  sub: { fontSize: 14, color: '#A6A6A6', lineHeight: 1.76 },
  btnGet: {
    background: '#54BD95', color: '#fff',
    fontWeight: 700, fontSize: 14,
    padding: '12px 28px', borderRadius: 999,
    boxShadow: '0 6px 18px rgba(84,189,149,0.30)',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 26,
  },
  card: {
    background: '#fff', border: '1px solid #EAEFF4',
    borderRadius: 20, padding: '20px',
    display: 'flex', flexDirection: 'column', gap: 14,
    boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
  },
  visual: {
    width: '100%', height: 205,
    background: '#F0F4F8',
    borderRadius: 14,
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    padding: '18px 16px', position: 'relative', overflow: 'hidden',
    gap: 12,
  },
  cardTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 18, fontWeight: 800, color: '#192026',
  },
  cardDesc: { fontSize: 13, color: '#A6A6A6', lineHeight: 1.65 },
};

const V = {
  /* Collab card */
  row: { display: 'flex', alignItems: 'center', gap: 10, width: '100%' },
  greenBlock: { width: 32, height: 38, background: '#54BD95', borderRadius: 7, flexShrink: 0 },
  blueBlock:  { width: 32, height: 32, background: '#0085FF', borderRadius: 7, flexShrink: 0 },
  arrowGroup: { display: 'flex', alignItems: 'center', gap: 4 },
  greenCircle: { width: 20, height: 20, borderRadius: '50%', background: '#54BD95' },
  arrowHead: {
    width: 0, height: 0,
    borderTop: '5px solid transparent',
    borderBottom: '5px solid transparent',
    borderLeft: '8px solid #54BD95',
  },
  linesCol: { flex: 1, display: 'flex', flexDirection: 'column', gap: 5 },
  line: { width: '100%', height: 5, background: '#C8D8CC', borderRadius: 3 },
  circleRow: { display: 'flex', gap: 12, marginTop: 2 },
  circ: { width: 34, height: 34, borderRadius: '50%' },

  /* Storage card */
  cloudBadge: {
    position: 'absolute', top: 8, right: 8,
    background: '#fff', padding: '5px 9px',
    borderRadius: 8, boxShadow: '0 3px 9px rgba(0,0,0,0.07)',
  },
  docCard: {
    background: '#54BD95', color: '#fff',
    borderRadius: 14, padding: '14px 16px',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    textAlign: 'center', width: 148,
    boxShadow: '0 10px 28px rgba(84,189,149,0.35)',
    zIndex: 2,
  },
  docYellow: {
    width: 26, height: 26, background: '#F59E0B',
    borderRadius: 7,
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', gap: 3,
    marginBottom: 7,
  },
  docYellowLine: { width: 12, height: 2, background: '#fff', borderRadius: 1 },
  docTitle: { fontSize: 13, fontWeight: 700 },
  docSub: { fontSize: 10, opacity: 0.88, marginTop: 2 },
  barsWrap: {
    position: 'absolute', bottom: 10, right: 14,
    display: 'flex', alignItems: 'flex-end', gap: 7,
  },
  vBar: { width: 7, background: '#54BD95', borderRadius: 3 },

  /* Analytics card */
  analyticsWrap: {
    width: '100%', display: 'flex', flexDirection: 'column',
    alignItems: 'center', gap: 10,
  },
  gaugeOuter: { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  gaugeSemicircle: { position: 'relative', display: 'flex', justifyContent: 'center' },
  gaugeDot: {
    position: 'absolute', bottom: -8, left: '50%',
    transform: 'translateX(-50%)',
    width: 22, height: 22, borderRadius: '50%',
    background: '#0085FF',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#fff', fontSize: 9, fontWeight: 800,
  },
  gaugeLabels: { display: 'flex', justifyContent: 'space-between', width: 120, marginTop: 4 },
  gaugeLabel: { fontSize: 10, fontWeight: 700, color: '#64748B' },
  progRow: {
    width: '100%', background: '#fff',
    padding: '7px 10px', borderRadius: 8,
    display: 'flex', alignItems: 'center', gap: 9,
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  progIcon: {
    width: 22, height: 22, borderRadius: 6,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  track: { flex: 1, height: 4, background: '#E5E7EB', borderRadius: 4, overflow: 'hidden' },
  fill: { height: '100%', background: '#54BD95', borderRadius: 4 },
};
