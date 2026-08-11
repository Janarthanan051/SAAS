import React, { useState } from 'react';
import { Play, Check, Coins, MessageSquare } from 'lucide-react';

export default function Hero({ onOpenDashboard, onOpenVideoModal }) {
  const [amount, setAmount] = useState('450..00');

  return (
    <section id="home" style={styles.heroSection}>
      <div className="container" style={styles.heroGrid}>
        {/* Left Column Text & CTAs */}
        <div style={styles.leftCol}>
          <h1 style={styles.heading}>
            We’re here to <br />
            Increase your <br />
            <span style={styles.productivityWrapper}>
              Productivity
              {/* Exact Green Curved Underline SVG */}
              <svg 
                width="100%" 
                height="16" 
                viewBox="0 0 340 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={styles.greenUnderlineSvg}
              >
                <path 
                  d="M5 14 Q 170 2 335 14" 
                  stroke="#54BD95" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
          </h1>

          <p style={styles.subtext}>
            Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.
          </p>

          <div style={styles.ctaGroup}>
            <button 
              onClick={onOpenDashboard} 
              className="btn-primary"
              style={styles.btnTryTrial}
            >
              Try free trial
            </button>

            <button 
              onClick={onOpenVideoModal} 
              style={styles.btnViewDemo}
            >
              <div style={styles.playCircleOutline}>
                <Play size={14} fill="none" color="#192026" strokeWidth={2.5} />
              </div>
              <span style={styles.viewDemoText}>View Demo</span>
            </button>
          </div>
        </div>

        {/* Right Column Visual Graphic */}
        <div style={styles.rightCol}>
          <div style={styles.heroGraphicWrapper}>
            {/* Green Background Box with Line Accent */}
            <div style={styles.greenBgShape}>
              <svg width="100%" height="100%" viewBox="0 0 340 440" fill="none" style={styles.lineSvg}>
                <path d="M20 80 Q100 20 180 90 T320 60 Q260 200 300 350" stroke="#46AA83" strokeWidth="2.5" fill="none" />
                <path d="M40 220 Q120 160 220 280 T300 400" stroke="#46AA83" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Person Photo */}
            <img 
              src="/hero_person.jpg" 
              alt="Biccas Hero Professional" 
              style={styles.personImage}
            />

            {/* Top Floating Card: Enter amount / Send */}
            <div className="animate-float" style={styles.cardEnterAmount}>
              <div style={styles.enterAmountLabel}>Enter amount</div>
              <div style={styles.enterAmountRow}>
                <span style={styles.enterAmountVal}>$450..00</span>
                <button style={styles.btnSendPill}>Send</button>
              </div>
            </div>

            {/* Purple Check Floating Badge */}
            <div style={styles.purpleCheckBadge}>
              <Check size={14} color="#FFFFFF" strokeWidth={3} />
            </div>

            {/* Top Right Orange Coin Badge */}
            <div style={styles.orangeCoinBadge}>
              <Coins size={18} color="#FFFFFF" />
            </div>

            {/* Bottom Floating Card: Total Income $245.00 */}
            <div className="animate-float-delayed" style={styles.cardTotalIncome}>
              <div style={styles.incomeLabelText}>Total Income</div>
              <div style={styles.incomeValueRow}>
                <span style={styles.incomeValText}>$245.00</span>
                <div style={styles.miniBarChartIcon}>
                  <div style={{ ...styles.bar1, height: '8px' }}></div>
                  <div style={{ ...styles.bar1, height: '14px', backgroundColor: '#54BD95' }}></div>
                  <div style={{ ...styles.bar1, height: '10px' }}></div>
                </div>
              </div>
            </div>

            {/* Dark Credit Card Accent (Creadlit Crad) */}
            <div style={styles.creditCardDark}>
              <div style={styles.cardLogoCircles}>
                <div style={styles.cCircle1}></div>
                <div style={styles.cCircle2}></div>
              </div>
              <div style={styles.cardTitleText}>Creadlit Crad</div>
              <div style={styles.cardNumberText}>•••• 1234</div>
              <div style={styles.cardExpiryText}>09/25</div>
            </div>

            {/* Bottom Right Orange Chat Badge */}
            <div style={styles.orangeChatBadge}>
              <MessageSquare size={16} color="#FFFFFF" fill="#FFFFFF" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    padding: '60px 0 90px 0',
    background: 'linear-gradient(180deg, #EBF7F2 0%, #FFFFFF 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 1fr',
    gap: '40px',
    alignItems: 'center',
  },
  leftCol: {
    maxWidth: '560px',
  },
  heading: {
    fontSize: '60px',
    fontWeight: '800',
    color: '#192026',
    letterSpacing: '-1.5px',
    marginBottom: '28px',
    lineHeight: '1.12',
  },
  productivityWrapper: {
    position: 'relative',
    display: 'inline-block',
    paddingBottom: '6px',
  },
  greenUnderlineSvg: {
    position: 'absolute',
    bottom: '-6px',
    left: '0',
    width: '100%',
    pointerEvents: 'none',
  },
  subtext: {
    fontSize: '16px',
    color: '#68717A',
    lineHeight: '1.7',
    marginBottom: '40px',
    maxWidth: '480px',
    fontWeight: '500',
  },
  ctaGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  },
  btnTryTrial: {
    fontSize: '16px',
    padding: '16px 36px',
  },
  btnViewDemo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  playCircleOutline: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '2px solid #192026',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  viewDemoText: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#192026',
  },
  rightCol: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  heroGraphicWrapper: {
    position: 'relative',
    width: '450px',
    height: '490px',
  },
  greenBgShape: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '320px',
    height: '420px',
    backgroundColor: '#54BD95',
    borderRadius: '32px',
    zIndex: 1,
    overflow: 'hidden',
  },
  lineSvg: {
    opacity: 0.4,
  },
  personImage: {
    position: 'absolute',
    bottom: '0',
    right: '30px',
    width: '330px',
    height: '440px',
    objectFit: 'cover',
    borderRadius: '30px',
    zIndex: 2,
  },
  cardEnterAmount: {
    position: 'absolute',
    top: '30px',
    left: '-20px',
    backgroundColor: '#FFFFFF',
    padding: '14px 18px',
    borderRadius: '16px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
    zIndex: 4,
    minWidth: '220px',
  },
  enterAmountLabel: {
    fontSize: '11px',
    color: '#A6A6A6',
    marginBottom: '6px',
  },
  enterAmountRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
  },
  enterAmountVal: {
    fontSize: '17px',
    fontWeight: '800',
    color: '#192026',
  },
  btnSendPill: {
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: '700',
    padding: '6px 16px',
    borderRadius: '999px',
    border: 'none',
  },
  purpleCheckBadge: {
    position: 'absolute',
    top: '180px',
    left: '110px',
    width: '32px',
    height: '32px',
    borderRadius: '10px',
    backgroundColor: '#4F46E5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    boxShadow: '0 8px 20px rgba(79, 70, 229, 0.3)',
    transform: 'rotate(-8deg)',
  },
  orangeCoinBadge: {
    position: 'absolute',
    top: '30px',
    right: '-10px',
    width: '36px',
    height: '36px',
    borderRadius: '12px',
    backgroundColor: '#F59E0B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    boxShadow: '0 8px 20px rgba(245, 158, 11, 0.3)',
    transform: 'rotate(12deg)',
  },
  cardTotalIncome: {
    position: 'absolute',
    bottom: '70px',
    left: '-30px',
    backgroundColor: '#FFFFFF',
    padding: '14px 18px',
    borderRadius: '16px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    zIndex: 4,
    minWidth: '180px',
  },
  incomeLabelText: {
    fontSize: '11px',
    color: '#A6A6A6',
    marginBottom: '4px',
  },
  incomeValueRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
  },
  incomeValText: {
    fontSize: '17px',
    fontWeight: '800',
    color: '#192026',
  },
  miniBarChartIcon: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '3px',
  },
  bar1: {
    width: '4px',
    backgroundColor: '#CBD5E1',
    borderRadius: '2px',
  },
  creditCardDark: {
    position: 'absolute',
    bottom: '50px',
    right: '-35px',
    width: '140px',
    height: '140px',
    backgroundColor: '#1E252B',
    borderRadius: '18px',
    padding: '16px',
    color: '#FFFFFF',
    zIndex: 4,
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    transform: 'rotate(10deg)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardLogoCircles: {
    display: 'flex',
    gap: '-4px',
  },
  cCircle1: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#EF4444',
    opacity: 0.8,
  },
  cCircle2: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#F59E0B',
    opacity: 0.8,
    marginLeft: '-8px',
  },
  cardTitleText: {
    fontSize: '11px',
    color: '#94A3B8',
    fontWeight: '600',
    marginTop: '12px',
  },
  cardNumberText: {
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
  },
  cardExpiryText: {
    fontSize: '10px',
    color: '#94A3B8',
    alignSelf: 'flex-end',
  },
  orangeChatBadge: {
    position: 'absolute',
    bottom: '30px',
    right: '80px',
    width: '32px',
    height: '32px',
    borderRadius: '10px',
    backgroundColor: '#F97316',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    boxShadow: '0 8px 20px rgba(249, 115, 22, 0.3)',
    transform: 'rotate(-10deg)',
  }
};
