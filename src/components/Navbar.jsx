import React, { useState } from 'react';
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import { NAV_ITEMS } from '../data/siteContent';

export default function Navbar({ user, onLogout, onOpenAuth, onOpenDashboard }) {
  const [open, setOpen] = useState(false);

  return (
    <nav style={S.nav}>
      <div className="container" style={S.inner}>
        {/* Logo */}
        <a href="#home" style={S.logo}>Biccas</a>

        {/* Desktop Nav */}
        <ul style={S.links}>
          {NAV_ITEMS.map(n => (
            <li key={n.label}>
              <a href={n.href} style={n.active ? S.linkActive : S.link}>{n.label}</a>
            </li>
          ))}
        </ul>

        {/* Auth Area */}
        <div style={S.auth}>
          {user ? (
            <div style={S.userRow}>
              <button onClick={onOpenDashboard} style={S.wkBtn}>
                <LayoutDashboard size={14} />
                <span>Workspace</span>
              </button>
              <div style={S.userPill}>
                <img
                  src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=54BD95&color=fff`}
                  alt={user.name}
                  style={S.avi}
                />
                <span style={S.uname}>{user.name}</span>
              </div>
              <button onClick={onLogout} style={S.logoutBtn} title="Logout">
                <LogOut size={15} color="#A6A6A6" />
              </button>
            </div>
          ) : (
            <div style={S.authBtns}>
              <button onClick={() => onOpenAuth('login')} style={S.loginBtn}>Login</button>
              <button onClick={() => onOpenAuth('signup')} style={S.signupBtn}>Sign Up</button>
            </div>
          )}
        </div>

        {/* Hamburger */}
        <button style={S.ham} onClick={() => setOpen(!open)}>
          {open ? <X size={22} color="#192026" /> : <Menu size={22} color="#192026" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={S.drawer}>
          {NAV_ITEMS.map(n => (
            <a key={n.label} href={n.href} style={S.drawerLink} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <div style={S.drawerAuthRow}>
            <button onClick={() => { setOpen(false); onOpenAuth('login'); }} style={S.drawerLogin}>Login</button>
            <button onClick={() => { setOpen(false); onOpenAuth('signup'); }} style={S.signupBtn}>Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}

const S = {
  nav: {
    position: 'sticky', top: 0, zIndex: 100,
    background: 'linear-gradient(90deg, rgba(230,250,246,0.96) 0%, rgba(239,249,245,0.96) 50%, rgba(248,252,254,0.96) 100%)',
    WebkitBackdropFilter: 'blur(16px)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(84,189,149,0.08)',
  },
  inner: {
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
    height: 68, gap: 24,
  },
  logo: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 800, fontSize: 24,
    color: '#54BD95', letterSpacing: '-0.4px',
    flexShrink: 0,
  },
  links: {
    display: 'flex', alignItems: 'center',
    gap: 36, listStyle: 'none',
  },
  link: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14, fontWeight: 500,
    color: '#A6A6A6', transition: 'color 0.2s',
  },
  linkActive: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14, fontWeight: 700,
    color: '#192026',
  },
  auth: { display: 'flex', alignItems: 'center', flexShrink: 0 },
  authBtns: { display: 'flex', alignItems: 'center', gap: 20 },
  loginBtn: {
    background: 'none', fontSize: 14, fontWeight: 500,
    color: '#A6A6A6', padding: '0 4px',
  },
  signupBtn: {
    backgroundColor: '#54BD95', color: '#fff',
    fontWeight: 600, fontSize: 14,
    padding: '9px 22px', borderRadius: 999,
    boxShadow: '0 4px 14px rgba(84,189,149,0.30)',
  },
  userRow: { display: 'flex', alignItems: 'center', gap: 12 },
  wkBtn: {
    display: 'flex', alignItems: 'center', gap: 6,
    backgroundColor: '#54BD95', color: '#fff',
    fontWeight: 600, fontSize: 13, padding: '8px 16px', borderRadius: 999,
  },
  userPill: {
    display: 'flex', alignItems: 'center', gap: 8,
    background: '#fff', padding: '4px 12px 4px 4px',
    borderRadius: 999, border: '1px solid #E2E8F0',
  },
  avi: { width: 26, height: 26, borderRadius: '50%', objectFit: 'cover' },
  uname: { fontSize: 13, fontWeight: 600, color: '#192026' },
  logoutBtn: { background: 'none', padding: 4, display: 'flex', alignItems: 'center' },
  ham: { display: 'none', background: 'none', padding: 4 },
  drawer: {
    display: 'flex', flexDirection: 'column', gap: 14,
    padding: '18px 32px', background: '#fff',
    borderBottom: '1px solid #F0F4F8',
    boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
  },
  drawerLink: { fontSize: 16, fontWeight: 600, color: '#192026' },
  drawerAuthRow: { display: 'flex', gap: 12, marginTop: 6 },
  drawerLogin: {
    flex: 1, padding: '10px', borderRadius: 999,
    border: '1.5px solid #54BD95', color: '#54BD95',
    fontWeight: 600, background: 'none',
  },
};
