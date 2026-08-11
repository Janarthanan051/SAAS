import React, { useState } from 'react';
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react';

export default function Navbar({ user, onLogout, onOpenAuth, onOpenDashboard }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={styles.navContainer}>
      <div className="container" style={styles.navInner}>
        {/* Brand Logo - Mint Green Biccas */}
        <a href="#" style={styles.logo}>
          <span style={styles.logoText}>Biccas</span>
        </a>

        {/* Desktop Navigation Links */}
        <div style={styles.navLinks}>
          <a href="#home" style={{ ...styles.navLink, ...styles.navLinkActive }}>Home</a>
          <a href="#product" style={styles.navLink}>Product</a>
          <a href="#support" style={styles.navLink}>FAQ</a>
          <a href="#features" style={styles.navLink}>Blog</a>
          <a href="#benefits" style={styles.navLink}>About Us</a>
        </div>

        {/* Desktop CTA Buttons or Profile */}
        <div style={styles.navAuth}>
          {user ? (
            <div style={styles.userProfileGroup}>
              <button 
                onClick={onOpenDashboard}
                style={styles.btnOpenWorkspace}
              >
                <LayoutDashboard size={15} /> Open Workspace
              </button>

              <div style={styles.userInfoBadge} title={`Logged in as ${user.email}`}>
                <img 
                  src={user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'} 
                  alt={user.name} 
                  style={styles.userAvatarImg} 
                />
                <span style={styles.userNameText}>{user.name}</span>
              </div>

              <button 
                onClick={onLogout} 
                style={styles.btnLogoutIcon}
                title="Log Out"
              >
                <LogOut size={16} color="#64748B" />
              </button>
            </div>
          ) : (
            <>
              <button 
                onClick={() => onOpenAuth('login')} 
                style={styles.btnLogin}
              >
                Login
              </button>
              <button 
                onClick={() => onOpenAuth('signup')} 
                style={styles.btnSignup}
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          style={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={styles.mobileDrawer}>
          <a href="#home" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#product" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Product</a>
          <a href="#support" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a href="#features" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <a href="#benefits" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>About Us</a>

          <div style={styles.mobileAuthGroup}>
            {user ? (
              <>
                <button onClick={() => { setMobileMenuOpen(false); onOpenDashboard(); }} style={styles.btnSignup}>
                  Open Workspace
                </button>
                <button onClick={() => { setMobileMenuOpen(false); onLogout(); }} style={styles.mobileBtnLogin}>
                  Log Out ({user.name})
                </button>
              </>
            ) : (
              <>
                <button onClick={() => { setMobileMenuOpen(false); onOpenAuth('login'); }} style={styles.mobileBtnLogin}>
                  Login
                </button>
                <button onClick={() => { setMobileMenuOpen(false); onOpenAuth('signup'); }} style={styles.btnSignup}>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

const styles = {
  navContainer: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'rgba(235, 247, 242, 0.9)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(84, 189, 149, 0.12)',
    padding: '18px 0',
  },
  navInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#54BD95',
    letterSpacing: '-0.5px',
    textDecoration: 'none',
  },
  logoText: {
    color: '#54BD95',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '36px',
  },
  navLink: {
    color: '#A6A6A6',
    fontWeight: '500',
    fontSize: '15px',
    textDecoration: 'none',
  },
  navLinkActive: {
    color: '#192026',
    fontWeight: '700',
  },
  navAuth: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  btnLogin: {
    background: 'none',
    border: 'none',
    color: '#A6A6A6',
    fontWeight: '600',
    fontSize: '15px',
    cursor: 'pointer',
  },
  btnSignup: {
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: '14px',
    padding: '10px 24px',
    borderRadius: '999px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(84, 189, 149, 0.35)',
  },
  userProfileGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  btnOpenWorkspace: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: '13px',
    padding: '8px 18px',
    borderRadius: '999px',
    border: 'none',
    cursor: 'pointer',
  },
  userInfoBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#FFFFFF',
    padding: '4px 12px 4px 4px',
    borderRadius: '999px',
    border: '1px solid #E2E8F0',
  },
  userAvatarImg: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  userNameText: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#1E293B',
  },
  btnLogoutIcon: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '6px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#192026',
    padding: '4px',
  },
  mobileDrawer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E2E8F0',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
  },
  mobileNavLink: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#192026',
  },
  mobileAuthGroup: {
    display: 'flex',
    gap: '12px',
    marginTop: '12px',
  },
  mobileBtnLogin: {
    flex: 1,
    padding: '10px',
    borderRadius: '999px',
    border: '1px solid #54BD95',
    color: '#54BD95',
    fontWeight: '600',
    background: 'none',
    cursor: 'pointer',
  }
};
