import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { BENEFITS } from '../data/siteContent';

export default function BenefitsSection() {
  return (
    <section id="benefits" style={S.section}>
      <div className="container" style={S.grid}>

        {/* LEFT – checklist */}
        <div style={S.left}>
          <h2 style={S.h2}>What Benefit Will<br />You Get</h2>
          <ul style={S.list}>
            {BENEFITS.map((b, i) => (
              <li key={i} style={S.item}>
                <div style={S.checkBg}>
                  <Check size={12} color="#fff" strokeWidth={3} />
                </div>
                <span style={S.itemText}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT – laptop photo with overlay badges */}
        <div style={S.right}>
          <div style={S.wrap}>
            {/* mint green soft background shape */}
            <div style={S.bgShape} />

            {/* Laptop photo */}
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Workspace"
              style={S.laptop}
            />

            {/* User card */}
            <div className="float" style={S.userCard}>
              <div style={S.userAvi}>AC</div>
              <div>
                <div style={S.userName}>Amanda Claire</div>
                <div style={S.userRole}>Product Lead</div>
              </div>
            </div>

            {/* Transfer badge */}
            <div className="float2" style={S.xferCard}>
              <div style={S.xferIcon}>
                <ShieldCheck size={17} color="#54BD95" />
              </div>
              <div>
                <div style={S.xferTitle}>Money Transfer Successful</div>
                <div style={S.xferAmt}>$ 450.00 Processed</div>
              </div>
            </div>

            {/* View Profile link */}
            <div style={S.viewLink}>View Profile</div>
          </div>
        </div>

      </div>
    </section>
  );
}

const S = {
  section: { padding: '80px 0', background: '#F5FCFA' },
  grid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: 64, alignItems: 'center',
  },
  left: { maxWidth: 480 },
  h2: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 36, fontWeight: 800, color: '#192026',
    lineHeight: 1.22, marginBottom: 32,
  },
  list: { display: 'flex', flexDirection: 'column', gap: 18, listStyle: 'none' },
  item: { display: 'flex', alignItems: 'center', gap: 14 },
  checkBg: {
    width: 24, height: 24, borderRadius: '50%',
    background: '#54BD95', flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(84,189,149,0.28)',
  },
  itemText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 15, fontWeight: 600, color: '#192026',
  },
  right: { display: 'flex', justifyContent: 'flex-end' },
  wrap: { position: 'relative', width: 420, height: 350 },
  bgShape: {
    position: 'absolute', top: 20, right: 0,
    width: 360, height: 295,
    background: '#DDF0E8', borderRadius: 26, zIndex: 1,
  },
  laptop: {
    position: 'absolute', top: 0, left: 10,
    width: 380, height: 270, objectFit: 'cover',
    borderRadius: 20,
    boxShadow: '0 18px 44px rgba(0,0,0,0.13)',
    zIndex: 2,
  },
  userCard: {
    position: 'absolute', top: -14, left: -4,
    background: '#fff', padding: '10px 16px',
    borderRadius: 14,
    boxShadow: '0 12px 32px rgba(0,0,0,0.10)',
    display: 'flex', alignItems: 'center', gap: 12, zIndex: 3,
  },
  userAvi: {
    width: 32, height: 32, borderRadius: '50%',
    background: '#54BD95', color: '#fff',
    fontSize: 12, fontWeight: 700,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  userName: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 13, fontWeight: 700, color: '#192026',
  },
  userRole: { fontSize: 11, color: '#A6A6A6' },
  xferCard: {
    position: 'absolute', bottom: 14, right: -8,
    background: '#fff', padding: '11px 16px',
    borderRadius: 14,
    boxShadow: '0 12px 32px rgba(0,0,0,0.10)',
    display: 'flex', alignItems: 'center', gap: 12, zIndex: 3,
  },
  xferIcon: {
    width: 34, height: 34, borderRadius: 10,
    background: '#EBF7F2',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  xferTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 12, fontWeight: 700, color: '#192026',
  },
  xferAmt: { fontSize: 11, color: '#54BD95', fontWeight: 600, marginTop: 2 },
  viewLink: {
    position: 'absolute', bottom: -6, left: '50%',
    transform: 'translateX(-50%)',
    fontFamily: "'Inter', sans-serif",
    fontSize: 12, fontWeight: 700, color: '#54BD95',
    textDecoration: 'underline', zIndex: 3, whiteSpace: 'nowrap',
    cursor: 'pointer',
  },
};
