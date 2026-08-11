import React from 'react';
import { Cloud, Briefcase } from 'lucide-react';

export default function FeaturesGrid({ onOpenDashboard }) {
  return (
    <section id="features" style={styles.section}>
      <div className="container">
        {/* Header Row */}
        <div style={styles.headerRow}>
          <div style={styles.headerLeft}>
            <h2 style={styles.heading}>
              Our Features <br />
              you cab get
            </h2>
          </div>
          <div style={styles.headerRight}>
            <p style={styles.subtext}>
              We offer a variety of interesting features that you can help increase yor productivity at work and manage your projct esaly
            </p>
            <button onClick={onOpenDashboard} className="btn-primary" style={styles.btnGetStarted}>
              Get Started
            </button>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div style={styles.grid}>
          {/* CARD 1: Collboration Teams */}
          <div style={styles.card}>
            <div style={styles.visualContainer}>
              <div style={visualStyles.collabBox}>
                {/* Top Row: Green Block & Pointer */}
                <div style={visualStyles.collabTopRow}>
                  <div style={visualStyles.greenBlock}></div>
                  <div style={visualStyles.pointerGroup}>
                    <div style={visualStyles.greenDot}></div>
                    <div style={visualStyles.pointerArrow}></div>
                  </div>
                  <div style={visualStyles.lineGroup}>
                    <div style={visualStyles.barLine}></div>
                    <div style={{ ...visualStyles.barLine, width: '70%' }}></div>
                  </div>
                </div>

                {/* Middle Row: Blue Block & Lines */}
                <div style={visualStyles.collabMidRow}>
                  <div style={visualStyles.blueBlock}></div>
                  <div style={visualStyles.lineGroup}>
                    <div style={visualStyles.barLine}></div>
                    <div style={{ ...visualStyles.barLine, width: '85%' }}></div>
                    <div style={{ ...visualStyles.barLine, width: '60%' }}></div>
                  </div>
                </div>

                {/* Bottom Row: 3 Circles */}
                <div style={visualStyles.collabBottomRow}>
                  <div style={{ ...visualStyles.circleItem, backgroundColor: '#E2E8F0' }}></div>
                  <div style={{ ...visualStyles.circleItem, backgroundColor: '#0088FF' }}></div>
                  <div style={{ ...visualStyles.circleItem, backgroundColor: '#54BD95', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '12px', fontWeight: '800' }}>
                    •••
                  </div>
                </div>
              </div>
            </div>

            <h3 style={styles.cardTitle}>Collboration Teams</h3>
            <p style={styles.cardDesc}>
              Here you can handle projects together with team virtually
            </p>
          </div>

          {/* CARD 2: Cloud Storage */}
          <div style={styles.card}>
            <div style={styles.visualContainer}>
              <div style={visualStyles.storageBox}>
                {/* White Cloud Badge Top Right */}
                <div style={visualStyles.cloudBadgeTop}>
                  <Cloud size={14} color="#54BD95" />
                </div>

                {/* Main Green Card */}
                <div style={visualStyles.greenDocumentCard}>
                  <div style={visualStyles.yellowIconBadge}>
                    <div style={visualStyles.yellowIconLines}></div>
                  </div>
                  <div style={visualStyles.docTitleText}>Document File</div>
                  <div style={visualStyles.docSubText}>456 GB | 1056 Items</div>
                </div>

                {/* 5 Green Vertical Bar Charts */}
                <div style={visualStyles.greenBarsRow}>
                  <div style={{ ...visualStyles.vBar, height: '24px' }}></div>
                  <div style={{ ...visualStyles.vBar, height: '36px' }}></div>
                  <div style={{ ...visualStyles.vBar, height: '20px' }}></div>
                  <div style={{ ...visualStyles.vBar, height: '40px' }}></div>
                  <div style={{ ...visualStyles.vBar, height: '28px' }}></div>
                </div>
              </div>
            </div>

            <h3 style={styles.cardTitle}>Cloud Storage</h3>
            <p style={styles.cardDesc}>
              No nedd to worry about storage because we provide storage up to 2 TB
            </p>
          </div>

          {/* CARD 3: Daily Analytics */}
          <div style={styles.card}>
            <div style={styles.visualContainer}>
              <div style={visualStyles.analyticsBox}>
                {/* Gauge Speed Chart */}
                <div style={visualStyles.gaugeArchContainer}>
                  <div style={visualStyles.gaugeRing}></div>
                  <div style={visualStyles.gaugeCenterBadge}>d</div>
                  <span style={visualStyles.labelLeft}>60%</span>
                  <span style={visualStyles.labelRight}>40%</span>
                </div>

                {/* Bottom Row 1: Cloud Card */}
                <div style={visualStyles.analyticsCardRow}>
                  <div style={{ ...visualStyles.miniIconSquare, backgroundColor: '#0088FF' }}>
                    <Cloud size={12} color="#FFFFFF" />
                  </div>
                  <div style={visualStyles.greenLineTrack}>
                    <div style={{ ...visualStyles.greenLineFill, width: '45%' }}></div>
                  </div>
                </div>

                {/* Bottom Row 2: Briefcase Card */}
                <div style={visualStyles.analyticsCardRow}>
                  <div style={{ ...visualStyles.miniIconSquare, backgroundColor: '#54BD95' }}>
                    <Briefcase size={12} color="#FFFFFF" />
                  </div>
                  <div style={visualStyles.greenLineTrack}>
                    <div style={{ ...visualStyles.greenLineFill, width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <h3 style={styles.cardTitle}>Daily Analytics</h3>
            <p style={styles.cardDesc}>
              We always provide useful Informatin to make it easier for you every day
            </p>
          </div>
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
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '60px',
    flexWrap: 'wrap',
    gap: '30px',
  },
  headerLeft: {
    flex: '1',
    minWidth: '280px',
  },
  heading: {
    fontSize: '44px',
    fontWeight: '800',
    color: '#192026',
    lineHeight: '1.15',
  },
  headerRight: {
    flex: '1',
    minWidth: '320px',
    maxWidth: '520px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '24px',
  },
  subtext: {
    fontSize: '15px',
    color: '#A6A6A6',
    lineHeight: '1.7',
  },
  btnGetStarted: {
    padding: '14px 32px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '24px',
    borderRadius: '24px',
    backgroundColor: '#FAFCFB',
    border: '1px solid #F0F4F8',
    transition: 'all 0.3s ease',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#192026',
    marginTop: '12px',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#A6A6A6',
    lineHeight: '1.6',
  },
  visualContainer: {
    width: '100%',
    height: '220px',
    borderRadius: '20px',
    backgroundColor: '#EDF7F3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
  }
};

const visualStyles = {
  collabBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  collabTopRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  greenBlock: {
    width: '36px',
    height: '42px',
    backgroundColor: '#54BD95',
    borderRadius: '6px',
  },
  pointerGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  greenDot: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#54BD95',
  },
  pointerArrow: {
    width: '0',
    height: '0',
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderLeft: '10px solid #54BD95',
  },
  lineGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  barLine: {
    width: '100%',
    height: '6px',
    backgroundColor: '#D1EAE0',
    borderRadius: '4px',
  },
  collabMidRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  blueBlock: {
    width: '36px',
    height: '36px',
    backgroundColor: '#0088FF',
    borderRadius: '6px',
  },
  collabBottomRow: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    marginTop: '6px',
  },
  circleItem: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
  },
  storageBox: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cloudBadgeTop: {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: '#FFFFFF',
    padding: '6px 10px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  },
  greenDocumentCard: {
    width: '160px',
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 12px 25px rgba(84, 189, 149, 0.35)',
    zIndex: 2,
  },
  yellowIconBadge: {
    width: '28px',
    height: '28px',
    backgroundColor: '#F59E0B',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
  },
  yellowIconLines: {
    width: '12px',
    height: '10px',
    borderTop: '2px solid #FFFFFF',
    borderBottom: '2px solid #FFFFFF',
  },
  docTitleText: {
    fontSize: '14px',
    fontWeight: '700',
  },
  docSubText: {
    fontSize: '10px',
    opacity: 0.85,
    marginTop: '2px',
  },
  greenBarsRow: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '10px',
    marginTop: '12px',
  },
  vBar: {
    width: '8px',
    backgroundColor: '#54BD95',
    borderRadius: '4px',
  },
  analyticsBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },
  gaugeArchContainer: {
    position: 'relative',
    width: '130px',
    height: '65px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  gaugeRing: {
    position: 'absolute',
    top: 0,
    width: '130px',
    height: '65px',
    borderTopLeftRadius: '130px',
    borderTopRightRadius: '130px',
    border: '12px solid #0088FF',
    borderRightColor: '#F59E0B',
    borderBottom: 'none',
  },
  gaugeCenterBadge: {
    position: 'absolute',
    bottom: '-10px',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: '#0088FF',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelLeft: {
    position: 'absolute',
    bottom: '0',
    left: '-20px',
    fontSize: '11px',
    fontWeight: '700',
    color: '#64748B',
  },
  labelRight: {
    position: 'absolute',
    bottom: '0',
    right: '-20px',
    fontSize: '11px',
    fontWeight: '700',
    color: '#64748B',
  },
  analyticsCardRow: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: '8px 12px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
  },
  miniIconSquare: {
    width: '24px',
    height: '24px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenLineTrack: {
    flex: 1,
    height: '5px',
    backgroundColor: '#E2E8F0',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  greenLineFill: {
    height: '100%',
    backgroundColor: '#54BD95',
    borderRadius: '4px',
  }
};
