import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Zap, Check } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    'Free Course Entry With Registration',
    'Online Learning & Workspace Templates',
    'Live & Interactive Sessions',
    'Savings Money For The Team',
    'Seamless Integrations With 50+ Apps'
  ];

  return (
    <section id="benefits" style={styles.section}>
      <div className="container" style={styles.grid}>
        {/* Left Column Checklist */}
        <div style={styles.leftCol}>
          <h2 style={styles.heading}>What Benefit Will You Get</h2>

          <div style={styles.list}>
            {benefits.map((benefit, idx) => (
              <div key={idx} style={styles.listItem}>
                <div style={styles.checkIconBg}>
                  <Check size={14} color="#FFFFFF" strokeWidth={3} />
                </div>
                <span style={styles.listText}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Laptop Graphic & Badges */}
        <div style={styles.rightCol}>
          <div style={styles.laptopGraphicContainer}>
            {/* Background Soft Shape */}
            <div style={styles.softBgShape}></div>

            {/* Main Laptop / Workplace Image */}
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Biccas SaaS Workspace" 
              style={styles.laptopImg}
            />

            {/* Top Floating User Card */}
            <div className="animate-float" style={styles.userCardOverlay}>
              <div style={styles.userAvatar}>AC</div>
              <div>
                <div style={styles.userName}>Amanda Claire</div>
                <div style={styles.userSub}>Product Lead</div>
              </div>
            </div>

            {/* Bottom Floating Success Badge */}
            <div className="animate-float-delayed" style={styles.successBadgeOverlay}>
              <div style={styles.successIconBg}>
                <ShieldCheck size={20} color="#54BD95" />
              </div>
              <div>
                <div style={styles.successTitle}>Money Transfer Successful</div>
                <div style={styles.successAmount}>$ 450.00 Processed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#FAFCFB',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  leftCol: {
    maxWidth: '500px',
  },
  heading: {
    fontSize: '40px',
    fontWeight: '800',
    color: '#192026',
    lineHeight: '1.25',
    marginBottom: '36px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  checkIconBg: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#54BD95',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 10px rgba(84, 189, 149, 0.3)',
  },
  listText: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#192026',
  },
  rightCol: {
    display: 'flex',
    justifyContent: 'center',
  },
  laptopGraphicContainer: {
    position: 'relative',
    width: '440px',
    height: '380px',
  },
  softBgShape: {
    position: 'absolute',
    top: '20px',
    right: '0',
    width: '380px',
    height: '320px',
    backgroundColor: '#E8F7F0',
    borderRadius: '30px',
    zIndex: 1,
  },
  laptopImg: {
    position: 'absolute',
    top: '0',
    left: '20px',
    width: '400px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
    zIndex: 2,
  },
  userCardOverlay: {
    position: 'absolute',
    top: '-15px',
    left: '-10px',
    backgroundColor: '#FFFFFF',
    padding: '12px 18px',
    borderRadius: '16px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: 3,
  },
  userAvatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    fontSize: '13px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#192026',
  },
  userSub: {
    fontSize: '11px',
    color: '#A6A6A6',
  },
  successBadgeOverlay: {
    position: 'absolute',
    bottom: '20px',
    right: '-10px',
    backgroundColor: '#FFFFFF',
    padding: '14px 20px',
    borderRadius: '18px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    zIndex: 3,
  },
  successIconBg: {
    width: '38px',
    height: '38px',
    borderRadius: '12px',
    backgroundColor: '#E8F7F0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#192026',
  },
  successAmount: {
    fontSize: '12px',
    color: '#54BD95',
    fontWeight: '600',
  }
};
