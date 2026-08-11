import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck, Eye, EyeOff, Zap } from 'lucide-react';

export default function AuthModal({ initialMode = 'login', onClose, showToast, onLoginSuccess }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please fill in all required fields', 'error');
      return;
    }
    if (mode === 'signup' && !name) {
      showToast('Please enter your full name', 'error');
      return;
    }

    const userData = {
      name: name || (email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)),
      email: email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      loggedInAt: new Date().toLocaleTimeString()
    };

    if (rememberMe) {
      localStorage.setItem('biccas_user', JSON.stringify(userData));
    }

    onLoginSuccess(userData);
    showToast(mode === 'login' ? `Welcome back, ${userData.name}!` : `Account created! Welcome to Biccas.`, 'success');
    onClose();
  };

  // 1-Click Quick Demo Login for testing
  const handleQuickDemoLogin = () => {
    const demoUser = {
      name: 'Alex Rivera',
      email: 'alex.rivera@biccas.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Product Lead',
      loggedInAt: new Date().toLocaleTimeString()
    };
    localStorage.setItem('biccas_user', JSON.stringify(demoUser));
    onLoginSuccess(demoUser);
    showToast('Logged in as Demo User (Alex Rivera)!', 'success');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logoGroup}>
            <span style={styles.logoText}>Biccas</span>
            <span style={styles.logoDot}></span>
          </div>
          <button onClick={onClose} style={styles.closeBtn} title="Close">
            <X size={20} color="#192026" />
          </button>
        </div>

        {/* Tab Toggle: Login vs Sign Up */}
        <div style={styles.tabs}>
          <button 
            type="button"
            onClick={() => setMode('login')}
            style={{ ...styles.tabBtn, ...(mode === 'login' ? styles.tabBtnActive : {}) }}
          >
            Sign In
          </button>
          <button 
            type="button"
            onClick={() => setMode('signup')}
            style={{ ...styles.tabBtn, ...(mode === 'signup' ? styles.tabBtnActive : {}) }}
          >
            Create Account
          </button>
        </div>

        {/* 1-Click Demo Login Banner */}
        <div style={styles.demoBanner}>
          <div style={styles.demoTextGroup}>
            <Zap size={16} color="#54BD95" />
            <span style={styles.demoText}>Testing the site? Try 1-Click Quick Login</span>
          </div>
          <button type="button" onClick={handleQuickDemoLogin} style={styles.btnQuickDemo}>
            Quick Demo Login
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {mode === 'signup' && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <div style={styles.inputWrapper}>
                <User size={18} color="#A6A6A6" />
                <input 
                  type="text" 
                  placeholder="e.g. Alex Rivera" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>
            </div>
          )}

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <div style={styles.inputWrapper}>
              <Mail size={18} color="#A6A6A6" />
              <input 
                type="email" 
                placeholder="name@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <Lock size={18} color="#A6A6A6" />
              <input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeBtn}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={16} color="#A6A6A6" /> : <Eye size={16} color="#A6A6A6" />}
              </button>
            </div>
          </div>

          {/* Remember Me / Forgot Password row */}
          <div style={styles.optionsRow}>
            <label style={styles.checkboxLabel}>
              <input 
                type="checkbox" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: '#54BD95' }}
              />
              Remember me
            </label>
            {mode === 'login' && (
              <a href="#" onClick={(e) => { e.preventDefault(); showToast('Password reset link sent to your email!', 'info'); }} style={styles.forgotLink}>
                Forgot Password?
              </a>
            )}
          </div>

          <button type="submit" style={styles.btnSubmit}>
            {mode === 'login' ? 'Sign In to Biccas Workspace' : 'Create Free Account'}
          </button>

          <p style={styles.termsNote}>
            Protected by Biccas 256-bit SSL encryption. <br />
            <a href="#" style={{ color: '#54BD95' }}>Terms of Service</a> & <a href="#" style={{ color: '#54BD95' }}>Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    width: '100%',
    maxWidth: '450px',
    padding: '32px',
    boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logoGroup: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#54BD95',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  logoText: {
    color: '#54BD95',
  },
  logoDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#54BD95',
    borderRadius: '50%',
    display: 'inline-block',
    marginTop: '8px',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  tabs: {
    display: 'flex',
    backgroundColor: '#FAFCFB',
    padding: '4px',
    borderRadius: '12px',
    border: '1px solid #E2E8F0',
    marginBottom: '16px',
  },
  tabBtn: {
    flex: 1,
    padding: '10px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#A6A6A6',
    backgroundColor: 'transparent',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
  },
  tabBtnActive: {
    backgroundColor: '#FFFFFF',
    color: '#192026',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  demoBanner: {
    backgroundColor: '#E8F7F0',
    border: '1px solid #54BD95',
    borderRadius: '12px',
    padding: '10px 14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
    gap: '10px',
  },
  demoTextGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  demoText: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#192026',
  },
  btnQuickDemo: {
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    fontSize: '11px',
    fontWeight: '700',
    padding: '6px 12px',
    borderRadius: '999px',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#192026',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #CBD5E1',
    backgroundColor: '#F8FAFC',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: '14px',
    color: '#192026',
  },
  eyeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '2px',
  },
  optionsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    color: '#68717A',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
  },
  forgotLink: {
    color: '#54BD95',
    fontWeight: '600',
    textDecoration: 'none',
  },
  btnSubmit: {
    padding: '14px',
    borderRadius: '999px',
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: '15px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(84, 189, 149, 0.3)',
    marginTop: '6px',
  },
  termsNote: {
    fontSize: '11px',
    color: '#A6A6A6',
    textAlign: 'center',
    marginTop: '6px',
    lineHeight: '1.5',
  }
};
