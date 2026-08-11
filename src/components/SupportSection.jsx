import React, { useState } from 'react';
import { Star, Send, BarChart2, Command } from 'lucide-react';

export default function SupportSection() {
  const [activeTab, setActiveTab] = useState('engagement');

  const features = [
    {
      id: 'publishing',
      icon: <Send size={22} color="#54BD95" />,
      title: 'Publishing',
      desc: 'Plan, schedule, and publish content that converts, right from your dashboard. We got your back.',
    },
    {
      id: 'analytics',
      icon: <BarChart2 size={22} color="#54BD95" />,
      title: 'Analytics',
      desc: 'Analyze your performance and measure campaign return on investment.',
    },
    {
      id: 'engagement',
      icon: <Command size={22} color="#54BD95" />,
      title: 'Engagement',
      desc: 'Quluckly navigate you anda engage with your adience',
    },
  ];

  return (
    <section id="support" style={styles.section}>
      <div className="container" style={styles.grid}>
        {/* Left Column */}
        <div style={styles.leftCol}>
          <h2 style={styles.heading}>
            How we support our <br />
            pratner all over the world
          </h2>

          <p style={styles.desc}>
            As a matter of fact the terrible news is that you cannot solve the issue by trying the same methods. 
            You need a platform to coordinate team tasks and simplify your workflow with top security.
          </p>

          <div style={styles.ratingsRow}>
            {/* Rating Box 1 - databricks */}
            <div style={styles.ratingBox}>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#FFC107" color="#FFC107" />
                ))}
              </div>
              <div style={styles.ratingScore}>
                <strong>4.9</strong> / 5 rating
              </div>
              <div style={styles.ratingSub}>databricks</div>
            </div>

            {/* Rating Box 2 - Chainanalysis */}
            <div style={styles.ratingBox}>
              <div style={styles.stars}>
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={15} fill="#FFC107" color="#FFC107" />
                ))}
                <Star size={15} fill="#E2E8F0" color="#CBD5E1" />
              </div>
              <div style={styles.ratingScore}>
                <strong>4.8</strong> / 5 rating
              </div>
              <div style={styles.ratingSub}>Chainanalysis</div>
            </div>
          </div>
        </div>

        {/* Right Column Feature Items */}
        <div style={styles.rightCol}>
          {features.map((item) => (
            <div 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                ...styles.featureCard,
                ...(activeTab === item.id ? styles.featureCardActive : {})
              }}
            >
              <div style={styles.iconBg}>{item.icon}</div>
              <div>
                <h3 style={styles.featureTitle}>{item.title}</h3>
                <p style={styles.featureDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '90px 0',
    backgroundColor: '#FAFCFB',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  leftCol: {
    maxWidth: '520px',
  },
  heading: {
    fontSize: '42px',
    fontWeight: '800',
    color: '#192026',
    lineHeight: '1.2',
    marginBottom: '20px',
  },
  desc: {
    fontSize: '15px',
    color: '#A6A6A6',
    lineHeight: '1.7',
    marginBottom: '36px',
  },
  ratingsRow: {
    display: 'flex',
    gap: '48px',
  },
  ratingBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  stars: {
    display: 'flex',
    gap: '3px',
  },
  ratingScore: {
    fontSize: '15px',
    color: '#192026',
    fontWeight: '500',
  },
  ratingSub: {
    fontSize: '13px',
    color: '#A6A6A6',
    fontWeight: '500',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  featureCard: {
    display: 'flex',
    gap: '20px',
    padding: '24px',
    borderRadius: '16px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E2E8F0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  featureCardActive: {
    borderColor: '#54BD95',
    boxShadow: '0 12px 30px rgba(84, 189, 149, 0.12)',
    transform: 'translateY(-2px)',
  },
  iconBg: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: '#E8F7F0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#192026',
    marginBottom: '6px',
  },
  featureDesc: {
    fontSize: '14px',
    color: '#A6A6A6',
    lineHeight: '1.6',
  }
};
