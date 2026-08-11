import React, { useState } from 'react';
import { X, Eye, EyeOff, Zap } from 'lucide-react';

export default function AuthModal({ initialMode, onClose, showToast, onLoginSuccess }) {
  const [mode, setMode]         = useState(initialMode || 'login');
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw]     = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading]   = useState(false);

  const switchMode = () => {
    setMode(m => m === 'login' ? 'signup' : 'login');
    setName(''); setEmail(''); setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      showToast('Please fill in all fields', 'error'); return;
    }
    if (mode === 'signup' && !name.trim()) {
      showToast('Please enter your name', 'error'); return;
    }
    if (password.length < 6) {
      showToast('Password must be at least 6 characters', 'error'); return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    const displayName = mode === 'signup' ? name.trim() : email.split('@')[0];
    const u = {
      name: displayName,
      email: email.trim(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=54BD95&color=fff&size=64`,
    };
    if (remember) localStorage.setItem('biccas_user', JSON.stringify(u));
    onLoginSuccess(u);
    showToast(mode === 'signup' ? `Welcome to Biccas, ${displayName}! 🎉` : `Welcome back, ${displayName}! 👋`, 'success');
    setLoading(false);
    onClose();
  };

  const handleDemo = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    const u = {
      name: 'Demo User',
      email: 'demo@biccas.io',
      avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=54BD95&color=fff&size=64',
    };
    localStorage.setItem('biccas_user', JSON.stringify(u));
    onLoginSuccess(u);
    showToast('Welcome to the Biccas Demo! 🚀', 'success');
    setLoading(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={S.card}>
        {/* Close */}
        <button onClick={onClose} style={S.closeBtn}><X size={18} color="#A6A6A6" /></button>

        {/* Logo */}
        <div style={S.logoWrap}>
          <span style={S.logo}>Biccas</span>
          <span style={S.logoDot} />
        </div>

        <h2 style={S.title}>{mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
        <p style={S.subtitle}>
          {mode === 'login'
            ? 'Sign in to access your Biccas workspace'
            : 'Start your free trial today — no credit card needed'}
        </p>

        {/* Quick Demo button */}
        <button onClick={handleDemo} disabled={loading} style={S.demoBtn}>
          <Zap size={14} color="#54BD95" />
          <span>Quick Demo Login</span>
        </button>

        {/* Divider */}
        <div style={S.divider}>
          <div style={S.divLine} />
          <span style={S.divText}>or continue with email</span>
          <div style={S.divLine} />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={S.form}>
          {mode === 'signup' && (
            <div style={S.group}>
              <label style={S.label}>Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={e => setName(e.target.value)}
                style={S.input}
                autoComplete="name"
              />
            </div>
          )}

          <div style={S.group}>
            <label style={S.label}>Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={S.input}
              autoComplete="email"
              required
            />
          </div>

          <div style={S.group}>
            <label style={S.label}>Password</label>
            <div style={S.pwWrap}>
              <input
                type={showPw ? 'text' : 'password'}
                placeholder="Minimum 6 characters"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ ...S.input, paddingRight: 44 }}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                required
              />
              <button
                type="button"
                onClick={() => setShowPw(v => !v)}
                style={S.eyeBtn}
                tabIndex={-1}
              >
                {showPw
                  ? <EyeOff size={16} color="#A6A6A6" />
                  : <Eye    size={16} color="#A6A6A6" />
                }
              </button>
            </div>
          </div>

          {mode === 'login' && (
            <div style={S.remRow}>
              <label style={S.remLabel}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                  style={{ accentColor: '#54BD95', width: 14, height: 14 }}
                />
                <span>Remember me</span>
              </label>
              <button type="button" style={S.forgotBtn}>Forgot password?</button>
            </div>
          )}

          <button type="submit" disabled={loading} style={S.submitBtn}>
            {loading
              ? 'Please wait…'
              : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p style={S.switchText}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button onClick={switchMode} style={S.switchLink}>
            {mode === 'login' ? 'Sign Up Free' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
}

const S = {
  card: {
    background: '#fff',
    borderRadius: 22,
    padding: '38px 36px',
    maxWidth: 440, width: '100%',
    boxShadow: '0 32px 80px rgba(0,0,0,0.22)',
    position: 'relative',
    animation: 'modalIn 0.22s ease',
  },
  closeBtn: {
    position: 'absolute', top: 14, right: 14,
    background: '#F0F4F8', padding: 7, borderRadius: '50%',
    display: 'flex', alignItems: 'center',
    transition: 'background 0.2s',
  },
  logoWrap: {
    display: 'flex', alignItems: 'center', gap: 5,
    justifyContent: 'center', marginBottom: 16,
  },
  logo: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 22, fontWeight: 800, color: '#54BD95',
  },
  logoDot: {
    display: 'inline-block', width: 6, height: 6,
    background: '#54BD95', borderRadius: '50%', marginTop: 8,
  },
  title: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 22, fontWeight: 800, color: '#192026',
    textAlign: 'center', marginBottom: 7,
  },
  subtitle: {
    fontSize: 13, color: '#A6A6A6', textAlign: 'center', marginBottom: 20,
    lineHeight: 1.55,
  },
  demoBtn: {
    width: '100%', padding: '11px',
    border: '2px dashed #54BD95',
    borderRadius: 999, background: '#EBF7F2',
    color: '#54BD95', fontWeight: 700, fontSize: 13,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, marginBottom: 18, cursor: 'pointer',
    transition: 'background 0.2s',
  },
  divider: {
    display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18,
  },
  divLine: { flex: 1, height: 1, background: '#E8EDF2' },
  divText: { fontSize: 12, color: '#A6A6A6', whiteSpace: 'nowrap' },
  form: { display: 'flex', flexDirection: 'column', gap: 14 },
  group: { display: 'flex', flexDirection: 'column', gap: 6 },
  label: { fontSize: 12, fontWeight: 600, color: '#192026' },
  input: {
    width: '100%', padding: '12px 14px',
    borderRadius: 11, border: '1.5px solid #E2E8F0',
    background: '#FAFAFA', color: '#192026',
    fontSize: 14, outline: 'none',
    transition: 'border-color 0.2s',
  },
  pwWrap: { position: 'relative', display: 'flex', alignItems: 'center' },
  eyeBtn: {
    position: 'absolute', right: 12,
    background: 'none', padding: 4,
    display: 'flex', alignItems: 'center',
  },
  remRow: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontSize: 13,
  },
  remLabel: {
    display: 'flex', alignItems: 'center', gap: 8,
    color: '#68717A', cursor: 'pointer',
  },
  forgotBtn: {
    background: 'none', color: '#54BD95',
    fontWeight: 600, fontSize: 13, cursor: 'pointer',
  },
  submitBtn: {
    width: '100%', padding: '13px',
    borderRadius: 999, background: '#54BD95', color: '#fff',
    fontWeight: 700, fontSize: 15,
    boxShadow: '0 8px 22px rgba(84,189,149,0.30)',
    marginTop: 4, cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  switchText: {
    textAlign: 'center', fontSize: 13, color: '#A6A6A6', marginTop: 18,
  },
  switchLink: {
    background: 'none', color: '#54BD95',
    fontWeight: 700, fontSize: 13,
    textDecoration: 'underline', cursor: 'pointer',
  },
};
