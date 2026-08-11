import React from 'react';

/* SVG icons matching reference exactly */
const UnsplashIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="#666" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"/>
  </svg>
);
const NotionIcon = () => (
  <svg width="18" height="18" viewBox="0 0 100 100" fill="#666" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9.5c1.24 1.01 1.71.93 4.04.78l55.3-3.32c.46 0 .08-.46-.08-.54L55.66 1.16C54.95.54 53.94.08 52.09.23L8.96 3.47c-1.71.16-2.01.62-1.24 1.09zm2.32 8.17v57.92c0 3.09 1.55 4.26 5.04 4.03l60.65-3.48c3.48-.24 3.87-2.32 3.87-4.79V9.58c0-2.48-.97-3.87-3.1-3.64L11.58 9.5c-2.24.24-3.25 1.71-3.25 8.17zm59.2 1.55c.31 1.39 0 2.79-1.39 2.95l-2.32.46v34.11c-2.01 1.09-3.87 1.71-5.43 1.71-2.48 0-3.09-.78-4.95-3.1L36.5 32.49v22.44L43.3 56s0 2.78-3.87 3.1l-10.7.62c-.31-.62 0-2.17 1.09-2.48l2.79-.77V24.96L24.7 24.5c-.31-1.39.46-3.4 2.48-3.56l11.48-.77 18.72 28.64V22.33l-5.89-.77c-.31-1.71.93-2.95 2.48-3.1z"/>
  </svg>
);
const IntercomIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="#666" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C8.28 2 2 8.28 2 16s6.28 14 14 14 14-6.28 14-14S23.72 2 16 2zm7 19.4c-.14.44-.6.66-1.04.54C19.5 20.9 17.8 20.5 16 20.5c-1.8 0-3.5.4-5.96 1.44a.78.78 0 01-1.04-.54V9.06c0-.44.36-.8.8-.8s.8.36.8.8v10.4c2-.8 3.64-1.16 5.4-1.16 1.76 0 3.4.36 5.4 1.16V9.06c0-.44.36-.8.8-.8s.8.36.8.8V21.4z"/>
  </svg>
);
const DescriptIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#666"/>
    <rect x="6" y="9" width="20" height="3" rx="1.5" fill="white"/>
    <rect x="6" y="15" width="14" height="3" rx="1.5" fill="white"/>
    <rect x="6" y="21" width="10" height="3" rx="1.5" fill="white"/>
  </svg>
);
const GrammarlyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="#666" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C8.27 2 2 8.27 2 16s6.27 14 14 14 14-6.27 14-14S23.73 2 16 2zm-.5 23c-4.97 0-9-4.03-9-9s4.03-9 9-9c2.48 0 4.73 1 6.36 2.63l-2.12 2.12A6 6 0 0015.5 10c-3.31 0-6 2.69-6 6s2.69 6 6 6c3.16 0 5.77-2.31 6.22-5.33H15.5v-3h9.14c.1.61.15 1.22.15 1.83 0 4.97-4.03 9-9.29 9z"/>
  </svg>
);

const PARTNERS = [
  { name: 'Unsplash',   Icon: UnsplashIcon  },
  { name: 'Notion',     Icon: NotionIcon    },
  { name: 'INTERCOM',   Icon: IntercomIcon  },
  { name: 'descript',   Icon: DescriptIcon  },
  { name: 'grammarly',  Icon: GrammarlyIcon },
];

export default function SocialProof() {
  return (
    <section style={S.section}>
      <div className="container" style={S.inner}>
        <p style={S.title}>More than 25,000 teams use Collabs</p>
        <div style={S.row}>
          {PARTNERS.map(({ name, Icon }) => (
            <div key={name} style={S.item}>
              <Icon />
              <span style={S.name}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const S = {
  section: {
    padding: '44px 0 56px',
    background: '#fff',
    borderBottom: '1px solid #F0F4F8',
  },
  inner: { textAlign: 'center' },
  title: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 22, fontWeight: 800, color: '#192026',
    letterSpacing: '-0.3px', marginBottom: 36,
  },
  row: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: 56, flexWrap: 'wrap',
  },
  item: {
    display: 'flex', alignItems: 'center', gap: 9,
    opacity: 0.58,
  },
  name: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 17, fontWeight: 700,
    color: '#666', letterSpacing: '-0.2px',
  },
};
