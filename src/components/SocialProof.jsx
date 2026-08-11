import React from 'react';

export default function SocialProof() {
  const partners = [
    { name: 'Unsplash', icon: '📷' },
    { name: 'Notion', icon: '📝' },
    { name: 'INTERCOM', icon: '💬' },
    { name: 'descript', icon: '🎙️' },
    { name: 'grammarly', icon: '✍️' },
  ];

  return (
    <section style={styles.section}>
      <div className="container">
        <h3 style={styles.title}>More than 25,000 teams use Collabs</h3>
        <div style={styles.logoRow}>
          {partners.map((partner, idx) => (
            <div key={idx} style={styles.logoItem}>
              <span style={styles.logoIcon}>{partner.icon}</span>
              <span style={styles.logoName}>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px 0 60px 0',
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #F0F4F8',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#192026',
    marginBottom: '40px',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '60px',
    flexWrap: 'wrap',
  },
  logoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    opacity: 0.65,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    filter: 'grayscale(100%)',
  },
  logoIcon: {
    fontSize: '24px',
  },
  logoName: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#A6A6A6',
    letterSpacing: '-0.5px',
  }
};
