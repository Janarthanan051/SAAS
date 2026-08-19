import React from 'react';
import { Star } from 'lucide-react';

/* Pulse / Waveform Icon for Publishing */
const PulseIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#54BD95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

/* Pie Chart Icon for Analytics */
const AnalyticsIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#54BD95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

/* Command / Clover Icon for Engagement */
const CmdIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#54BD95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 9a3 3 0 1 0-3-3M6 9a3 3 0 1 1 3-3M6 15a3 3 0 1 0 3 3M18 15a3 3 0 1 1-3 3M9 9h6v6H9z" />
  </svg>
);

const FEATURES = [
  {
    id: 'publishing',
    Icon: PulseIcon,
    title: 'Publishing',
    desc: 'Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd',
  },
  {
    id: 'analytics',
    Icon: AnalyticsIcon,
    title: 'Analytics',
    desc: 'Analyze your performance and create goeorgeous report',
  },
  {
    id: 'engagement',
    Icon: CmdIcon,
    title: 'Engagement',
    desc: 'Quiuckly navigate you anda engage with your adience',
  },
];

export default function SupportSection() {
  return (
    <section id="support" className="section-lavender" style={S.section}>
      <div className="container support-grid" style={S.grid}>

        {/* LEFT */}
        <div className="support-left" style={S.left}>
          <h2 className="section-title" style={S.h2}>How we support our<br />pratner all over the world</h2>

          <p style={S.desc}>
            SaaS become a common delivery model for many business application, inclouding office software, messaging software, payroll processing software, DBMS software, management software
          </p>

          {/* Ratings Row */}
          <div className="support-ratings" style={S.ratings}>
            {/* 4.9 databricks */}
            <div style={S.ratingBox}>
              <div style={S.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={26} fill="#FFC728" color="#FFC728" />
                ))}
              </div>
              <div style={S.score}><strong>4.9</strong> / 5 rating</div>
              <div style={S.brand}>databricks</div>
            </div>

            {/* 4.8 Chainanalysis */}
            <div style={S.ratingBox}>
              <div style={S.stars}>
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={26} fill="#FFC728" color="#FFC728" />
                ))}
                <Star size={26} fill="#BBBBBB" color="#BBBBBB" />
              </div>
              <div style={S.score}><strong>4.8</strong> / 5 rating</div>
              <div style={S.brand}>Chainanalysis</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={S.right}>
          {FEATURES.map(({ id, Icon, title, desc }) => (
            <div key={id} style={S.itemRow}>
              <div style={S.iconBox}>
                <Icon />
              </div>
              <div style={S.itemContent}>
                <h3 style={S.itemTitle}>{title}</h3>
                <p style={S.itemDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const S = {
  section: { padding: '90px 0', background: '#F9F8FE' },
  grid: {
    display: 'grid', gridTemplateColumns: '1.1fr 0.9fr',
    gap: 64, alignItems: 'flex-start',
  },
  left: { maxWidth: 644 },
  h2: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 50, fontWeight: 600,
    color: '#191A15', lineHeight: 1.2,
    letterSpacing: '0%', marginBottom: 24,
  },
  desc: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 16, fontWeight: 500,
    color: '#A6A6A6', lineHeight: '30px',
    letterSpacing: '0%', marginBottom: 44,
    maxWidth: 644,
  },
  ratings: { display: 'flex', gap: 60, alignItems: 'flex-start' },
  ratingBox: {
    display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between',
    width: 160, height: 110,
  },
  stars: { display: 'flex', gap: 6, alignItems: 'center' },
  score: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, color: '#191A15', fontWeight: 500, lineHeight: '30px',
  },
  brand: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, color: '#A6A6A6', fontWeight: 600, lineHeight: '30px',
  },
  right: {
    display: 'flex', flexDirection: 'column', gap: 36,
    maxWidth: 509, width: '100%',
  },
  itemRow: {
    display: 'flex', gap: 20, alignItems: 'flex-start',
  },
  iconBox: {
    width: 60, height: 60, borderRadius: 10,
    background: '#FFFFFF',
    boxShadow: '0 4px 9px rgba(0,0,0,0.05)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  itemContent: { flex: 1 },
  itemTitle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 28, fontWeight: 700,
    color: '#191A15', lineHeight: 1.2,
    letterSpacing: '0%', marginBottom: 8,
  },
  itemDesc: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, fontWeight: 500,
    color: '#A6A6A6', lineHeight: '30px',
    letterSpacing: '0%', maxWidth: 428,
  },
};
