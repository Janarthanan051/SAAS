import React, { useState } from 'react';
import { Star, Send, BarChart2 } from 'lucide-react';

/* ⌘ icon for Engagement */
const CmdIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="22" height="22" rx="5" stroke="#54BD95" strokeWidth="2"/>
    <path d="M9 9H6a2 2 0 1 1 2-2v2zm0 0h6m0 0h3a2 2 0 1 1-2 2h-1m1-2V6a2 2 0 1 1 2 2h-2zm-7 6H6a2 2 0 1 0 2 2v-2zm0 0h6m0 0h3a2 2 0 1 0-2-2h-1m1 2v2a2 2 0 1 0 2-2h-2z" stroke="#54BD95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FEATURES = [
  {
    id: 'publishing',
    Icon: () => <Send size={20} color="#54BD95" />,
    title: 'Publishing',
    desc: 'Plan, schedule, and publish content that converts, right from your dashboard. We got your back.',
  },
  {
    id: 'analytics',
    Icon: () => <BarChart2 size={20} color="#54BD95" />,
    title: 'Analytics',
    desc: 'Analyze your performance and measure campaign return on investment.',
  },
  {
    id: 'engagement',
    Icon: CmdIcon,
    title: 'Engagement',
    desc: 'Quickly navigate you anda engage with your adience',
  },
];

export default function SupportSection() {
  const [active, setActive] = useState('engagement');

  return (
    <section id="support" style={S.section}>
      <div className="container" style={S.grid}>

        {/* LEFT */}
        <div style={S.left}>
          <h2 style={S.h2}>
            How we support our<br />pratner all over the world
          </h2>

          <p style={S.desc}>
            As a matter of fact the terrible news is that you cannot solve the issue by trying
            the same methods. You need a platform to coordinate team tasks and simplify your
            workflow with top security.
          </p>

          <div style={S.ratings}>
            {/* 4.9 databricks */}
            <div style={S.ratingBox}>
              <div style={S.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FFC107" color="#FFC107" />
                ))}
              </div>
              <div style={S.score}><strong>4.9</strong> / 5 rating</div>
              <div style={S.brand}>databricks</div>
            </div>

            {/* 4.8 Chainanalysis */}
            <div style={S.ratingBox}>
              <div style={S.stars}>
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={14} fill="#FFC107" color="#FFC107" />
                ))}
                <Star size={14} fill="#E5E7EB" color="#E5E7EB" />
              </div>
              <div style={S.score}><strong>4.8</strong> / 5 rating</div>
              <div style={S.brand}>Chainanalysis</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={S.right}>
          {FEATURES.map(({ id, Icon, title, desc }) => (
            <div
              key={id}
              onClick={() => setActive(id)}
              style={{ ...S.card, ...(active === id ? S.cardActive : {}) }}
            >
              <div style={S.iconBox}><Icon /></div>
              <div>
                <div style={S.cardTitle}>{title}</div>
                <div style={S.cardDesc}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const S = {
  section: { padding: '80px 0', background: '#F8FBFA' },
  grid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: 64, alignItems: 'center',
  },
  left: { maxWidth: 500 },
  h2: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 34, fontWeight: 800, color: '#192026',
    lineHeight: 1.25, marginBottom: 16,
  },
  desc: {
    fontSize: 14, color: '#A6A6A6', lineHeight: 1.78,
    marginBottom: 36,
  },
  ratings: { display: 'flex', gap: 48 },
  ratingBox: { display: 'flex', flexDirection: 'column', gap: 5 },
  stars: { display: 'flex', gap: 2, marginBottom: 2 },
  score: { fontSize: 14, color: '#192026', fontWeight: 500 },
  brand: { fontSize: 12, color: '#A6A6A6', fontWeight: 500 },
  right: { display: 'flex', flexDirection: 'column', gap: 16 },
  card: {
    display: 'flex', gap: 16, padding: '18px 20px',
    borderRadius: 14, background: '#fff',
    border: '1.5px solid #E8EDF0',
    cursor: 'pointer', transition: 'all 0.22s ease',
  },
  cardActive: {
    borderColor: '#54BD95',
    boxShadow: '0 6px 22px rgba(84,189,149,0.13)',
    transform: 'translateY(-2px)',
  },
  iconBox: {
    width: 44, height: 44, borderRadius: 11,
    background: '#EBF7F2',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 16, fontWeight: 700, color: '#192026', marginBottom: 4,
  },
  cardDesc: { fontSize: 13, color: '#A6A6A6', lineHeight: 1.6 },
};
