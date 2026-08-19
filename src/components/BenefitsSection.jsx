import React from 'react';
import { Check, MessageCircle, Image } from 'lucide-react';

const BENEFIT_ITEMS = [
  'Free Consulting With Experet Saving Money',
  'Online Banking',
  'Investment Report Every Month',
  'Saving Money For The Future',
  'Online Transection',
];

export default function BenefitsSection() {
  return (
    <section id="benefits" style={S.section}>
      <div className="container benefits-grid" style={S.grid}>

        {/* LEFT – Checklist */}
        <div className="benefits-left" style={S.left}>
          <h2 className="section-title" style={S.h2}>
            What Benifit Will<br />You Get
          </h2>

          <ul style={S.list}>
            {BENEFIT_ITEMS.map((b, i) => (
              <li key={i} style={S.item}>
                <div style={S.checkBg}>
                  <Check size={14} color="#FFFFFF" strokeWidth={3.5} />
                </div>
                <span style={S.itemText}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT – Workspace with exact overlay cards */}
        <div className="benefits-right" style={S.right}>
          <div className="benefits-wrap" style={S.wrap}>

            {/* Laptop workspace photo */}
            <img
              src="/benefits_workspace.png"
              alt="Workspace"
              className="benefits-laptop"
              style={S.laptop}
            />

            {/* ── Card 1: Amanda Young (Top Left) ── */}
            <div style={S.userCard}>
              <img
                src="/amanda_avatar.png"
                alt="Amanda Young"
                style={S.userAvi}
              />
              <div style={S.userInfo}>
                <div style={S.userName}>Amanda Young</div>
                <div style={S.userRole}>Expert Saving Money</div>
              </div>
              <div style={S.chatCircle}>
                <MessageCircle size={15} color="#FFFFFF" fill="#FFFFFF" />
              </div>
            </div>

            {/* ── Card 2: Total Income (Top Right) ── */}
            <div style={S.incomeCard}>
              <div style={S.incomeLabel}>Total Income</div>
              <div style={S.incomeRow}>
                <span style={S.incomeVal}>$245.00</span>
                <div style={S.miniChart}>
                  <div style={{ ...S.bar, height: 8,  background: '#54BD95' }} />
                  <div style={{ ...S.bar, height: 16, background: '#54BD95' }} />
                  <div style={{ ...S.bar, height: 11, background: '#54BD95' }} />
                </div>
              </div>
            </div>

            {/* ── Decorative: Rotated green square (Middle Left) ── */}
            <img
              src="/gallery_badge.png"
              alt="Gallery badge"
              style={S.rotatedBadge}
            />

            {/* ── Card 3: Money Transfer Succesfull (Bottom Left) ── */}
            <div style={S.xferCard}>
              <div style={S.xferCheck}>
                <Check size={14} color="#54BD95" strokeWidth={3} />
              </div>
              <span style={S.xferText}>Money Transfer Succesfull</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

const S = {
  section: {
    padding: '90px 0 100px',
    background: 'linear-gradient(90deg, #FFF5F5 0%, #F9F8FE 45%, #E2F4EE 100%)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '500px 1fr',
    gap: 48, alignItems: 'center',
  },
  left: { maxWidth: 500 },
  h2: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 54, fontWeight: 800,
    color: '#191A15', lineHeight: 1.18,
    letterSpacing: '-0.5px', marginBottom: 40,
  },
  list: {
    display: 'flex', flexDirection: 'column',
    gap: 26, listStyle: 'none',
  },
  item: {
    display: 'flex', alignItems: 'center', gap: 18,
  },
  checkBg: {
    width: 28, height: 28, borderRadius: '50%',
    background: '#54BD95', flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  itemText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, fontWeight: 500,
    color: '#191A15', letterSpacing: '0%',
  },

  /* ── RIGHT GRAPHIC ── */
  right: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' },
  wrap: {
    position: 'relative',
    width: 440, height: 500,
  },
  laptop: {
    width: 440, height: 500,
    objectFit: 'cover',
    borderRadius: 24,
    display: 'block',
  },

  /* Card 1: Amanda Young */
  userCard: {
    position: 'absolute',
    top: 24, left: -60,
    background: '#FFFFFF',
    padding: '12px 18px',
    borderRadius: 14,
    boxShadow: '0 10px 32px rgba(0,0,0,0.08)',
    display: 'flex', alignItems: 'center', gap: 14,
    zIndex: 4, minWidth: 240,
  },
  userAvi: {
    width: 44, height: 44,
    borderRadius: '50%',
    objectFit: 'cover', flexShrink: 0,
  },
  userInfo: { flex: 1 },
  userName: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 15, fontWeight: 700,
    color: '#191A15', marginBottom: 2,
  },
  userRole: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 12, color: '#A6A6A6',
    fontWeight: 500,
  },
  chatCircle: {
    width: 32, height: 32,
    borderRadius: '50%',
    background: '#54BD95',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },

  /* Card 2: Total Income */
  incomeCard: {
    position: 'absolute',
    top: 96, right: -40,
    background: '#FFFFFF',
    padding: '12px 18px',
    borderRadius: 14,
    boxShadow: '0 10px 32px rgba(0,0,0,0.08)',
    zIndex: 4, width: 150,
  },
  incomeLabel: {
    fontSize: 11, color: '#A6A6A6',
    marginBottom: 4, fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
  },
  incomeRow: {
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', gap: 10,
  },
  incomeVal: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18, fontWeight: 800, color: '#191A15',
  },
  miniChart: { display: 'flex', alignItems: 'flex-end', gap: 3 },
  bar: { width: 3.5, borderRadius: 2 },

  /* Decorative Rotated Badge */
  rotatedBadge: {
    position: 'absolute',
    top: '52%', left: -54,
    transform: 'translateY(-50%)',
    width: 48, height: 48,
    objectFit: 'contain',
    filter: 'drop-shadow(0 6px 16px rgba(84,189,149,0.32))',
    zIndex: 5,
  },

  /* Card 3: Money Transfer Succesfull */
  xferCard: {
    position: 'absolute',
    bottom: -18, left: -40,
    background: '#FFFFFF',
    padding: '14px 22px',
    borderRadius: 14,
    boxShadow: '0 10px 32px rgba(0,0,0,0.08)',
    display: 'flex', alignItems: 'center', gap: 12,
    zIndex: 4, whiteSpace: 'nowrap',
  },
  xferCheck: {
    width: 22, height: 22,
    borderRadius: '50%',
    border: '2px solid #54BD95',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  xferText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 15, fontWeight: 600,
    color: '#191A15',
  },
};
