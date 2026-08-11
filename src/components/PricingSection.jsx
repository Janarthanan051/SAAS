import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function PricingSection({ onOpenAuth, onSelectPlan }) {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      desc: 'Have a go and see your app perform',
      monthlyPrice: 0,
      yearlyPrice: 0,
      popular: false,
      features: [
        '2 Users',
        '2GB Storage',
        'Public Share & Comments',
        'Chat Support',
        'New updates outline'
      ],
      btnText: 'Sign up for free',
      btnStyle: 'outline'
    },
    {
      id: 'pro',
      name: 'Pro',
      desc: 'Experiment the power of professional automation',
      monthlyPrice: 8,
      yearlyPrice: 8,
      popular: true,
      badgeText: 'Save 20%',
      features: [
        '4 Users',
        '10GB Storage',
        'Public Share & Comments',
        'Chat Support & Analytics',
        'Advanced Security'
      ],
      btnText: 'Go to Pro',
      btnStyle: 'primary'
    },
    {
      id: 'business',
      name: 'Business',
      desc: 'Unleash maximum performance for teams',
      monthlyPrice: 16,
      yearlyPrice: 16,
      popular: false,
      features: [
        '10 Users & Manager',
        '100GB Cloud Storage',
        'Direct Custom Domain',
        '24/7 Priority Support',
        'Collaboration Teams'
      ],
      btnText: 'Goto Business',
      btnStyle: 'outline'
    }
  ];

  return (
    <section id="pricing" style={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div style={styles.header}>
          <h2 style={styles.heading}>
            Choose Plan <br />
            That's Right For You
          </h2>
          <p style={styles.subtext}>
            Choose plan that works best for you, feel free to contact us
          </p>

          {/* Monthly / Yearly Toggle */}
          <div style={styles.toggleWrapper}>
            <button 
              onClick={() => setIsYearly(false)}
              style={{
                ...styles.toggleBtn,
                ...(!isYearly ? styles.toggleBtnActive : {})
              }}
            >
              Billed Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              style={{
                ...styles.toggleBtn,
                ...(isYearly ? styles.toggleBtnActive : {})
              }}
            >
              Billed Yearly
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div style={styles.grid}>
          {plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div 
                key={plan.id}
                style={{
                  ...styles.card,
                  ...(plan.popular ? styles.cardPopular : styles.cardStandard)
                }}
              >
                {/* Save 20% Badge */}
                {plan.badgeText && (
                  <div style={styles.saveBadgeContainer}>
                    <span style={styles.saveBadgeText}>{plan.badgeText}</span>
                  </div>
                )}

                <h3 style={{
                  ...styles.planName,
                  color: plan.popular ? '#FFFFFF' : '#192026'
                }}>{plan.name}</h3>

                <p style={{
                  ...styles.planDesc,
                  color: plan.popular ? 'rgba(255,255,255,0.9)' : '#A6A6A6'
                }}>{plan.desc}</p>

                <div style={styles.priceRow}>
                  <span style={{
                    ...styles.currency,
                    color: plan.popular ? '#FFFFFF' : '#192026'
                  }}>$</span>
                  <span style={{
                    ...styles.priceValue,
                    color: plan.popular ? '#FFFFFF' : '#192026'
                  }}>{price}</span>
                </div>

                <div style={{
                  ...styles.featuresBox,
                  backgroundColor: plan.popular ? '#FFFFFF' : '#FAFCFB',
                  boxShadow: plan.popular ? '0 10px 25px rgba(0,0,0,0.06)' : 'none',
                  border: plan.popular ? 'none' : '1px solid #F0F4F8'
                }}>
                  {plan.features.map((feat, i) => (
                    <div key={i} style={styles.featureItem}>
                      <div style={styles.checkIcon}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span style={styles.featureText}>{feat}</span>
                    </div>
                  ))}

                  <button 
                    onClick={() => onSelectPlan(plan)}
                    style={styles.cardBtn}
                  >
                    {plan.btnText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#FFFFFF',
  },
  header: {
    textAlign: 'center',
    maxWidth: '560px',
    margin: '0 auto 60px auto',
  },
  heading: {
    fontSize: '44px',
    fontWeight: '800',
    color: '#192026',
    lineHeight: '1.2',
    marginBottom: '16px',
  },
  subtext: {
    fontSize: '15px',
    color: '#A6A6A6',
    marginBottom: '32px',
  },
  toggleWrapper: {
    display: 'inline-flex',
    backgroundColor: '#FAFCFB',
    padding: '6px',
    borderRadius: '999px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
  },
  toggleBtn: {
    padding: '10px 24px',
    borderRadius: '999px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#A6A6A6',
    background: 'none',
    cursor: 'pointer',
  },
  toggleBtnActive: {
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    boxShadow: '0 4px 12px rgba(84, 189, 149, 0.3)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    alignItems: 'stretch',
  },
  cardStandard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E2E8F0',
    borderRadius: '24px',
    padding: '36px 24px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
  },
  cardPopular: {
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    border: '1px solid #54BD95',
    borderRadius: '24px',
    padding: '36px 24px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'all 0.3s ease',
    boxShadow: '0 20px 45px rgba(84, 189, 149, 0.35)',
    transform: 'translateY(-6px)',
  },
  saveBadgeContainer: {
    textAlign: 'center',
    marginBottom: '12px',
  },
  saveBadgeText: {
    backgroundColor: '#FFFFFF',
    color: '#54BD95',
    fontSize: '11px',
    fontWeight: '700',
    padding: '4px 14px',
    borderRadius: '20px',
    display: 'inline-block',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  planName: {
    fontSize: '26px',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '6px',
  },
  planDesc: {
    fontSize: '13px',
    textAlign: 'center',
    marginBottom: '24px',
    minHeight: '36px',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '4px',
    marginBottom: '24px',
  },
  currency: {
    fontSize: '20px',
    fontWeight: '700',
    marginTop: '6px',
  },
  priceValue: {
    fontSize: '52px',
    fontWeight: '800',
    lineHeight: '1',
  },
  featuresBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    padding: '24px 20px',
    borderRadius: '20px',
    flex: 1,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '14px',
  },
  checkIcon: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featureText: {
    fontWeight: '500',
    color: '#192026',
  },
  cardBtn: {
    width: '100%',
    padding: '14px',
    borderRadius: '999px',
    fontSize: '14px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    boxShadow: '0 4px 14px rgba(84, 189, 149, 0.35)',
  }
};
