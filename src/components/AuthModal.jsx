import React, { useState } from 'react';
import { X, Eye, EyeOff, Zap } from 'lucide-react';

export default function AuthModal({ initialMode, onClose, showToast, onLoginSuccess }) {
  const [mode, setMode] = useState(initialMode || 'login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) { showToast('Please fill all fields', 'error'); return; }
    if (mode === 'signup' && !name) { showToast('Please enter your name', 'error'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    const user = {
      name: mode === 'signup' ? name : email.split('@')[0],
      email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(mode === 'signup' ? name : email.split('@')[0])}&background=54BD95&color=fff`,
    };
    if (remember) localStorage.setItem('biccas_user', JSON.stringify(user));
    onLoginSuccess(user);
    showToast(`Welcome${mode === 'signup' ? ', ' + name : ' back'}! 🎉`, 'success');
    setLoading(false);
    onClose();
  };

  const handleDemo = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    const user = { name: 'Demo User', email: 'demo@biccas.io', avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=54BD95&color=fff' };
    localStorage.setItem('biccas_user', JSON.stringify(user));
    onLoginSuccess(user);
    showToast('Welcome to Biccas Demo! 🚀', 'success');
    setLoading(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={s.card}>
        {/* Close */}
        <button onClick={onClose} style={s.closeBtn}><X size={18} /></button>

        {/* Logo */}
        <div style={s.logoWrap}>
          <span style={s.logo}>Biccas</span>
        </div>

        <h2 style={s.title}>{mode === 'login' ? 'Welcome back' : 'Create account'}</h2>
        <p style={s.subtitle}>{mode === 'login' ? 'Sign in to your Biccas account' : 'Start your free Biccas trial today'}</p>

        {/* Demo button */}
        <button onClick={handleDemo} style={s.demoBtn} disabled={loading}>
          <Zap size={15} /> Quick Demo Login
        </button>

        <div style={s.orLine}><span>or</span></div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={s.form}>
          {mode === 'signup' && (
            <div style={s.group}>
              <label style={s.label}>Full Name</label>
              <input
                type="text" placeholder="Your full name"
                value={name} onChange={e => setName(e.target.value)}
                style={s.input} required={mode === 'signup'}
              />
            </div>
          )}

          <div style={s.group}>
            <label style={s.label}>Email</label>
            <input
              type="email" placeholder="your@email.com"
              value={email} onChange={e => setEmail(e.target.value)}
              style={s.input} required
            />
          </div>

          <div style={s.group}>
            <label style={s.label}>Password</label>
            <div style={s.pwWrap}>
              <input
                type={showPw ? 'text' : 'password'}
                placeholder="Password"
                value={password} onChange={e => setPassword(e.target.value)}
                style={{ ...s.input, paddingRight: 44 }} required
              />
              <button type="button" onClick={() => setShowPw(!showPw)} style={s.eyeBtn}>
                {showPw ? <EyeOff size={16} color="#A6A6A6" /> : <Eye size={16} color="#A6A6A6" />}
              </button>
            </div>
          </div>

          {mode === 'login' && (
            <div style={s.remRow}>
              <label style={s.remLabel}>
                <input
                  type="checkbox" checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                  style={{ accentColor: '#54BD95' }}
                />
                <span>Remember me</span>
              </label>
              <a href="#" style={s.forgot}>Forgot password?</a>
            </div>
          )}

          <button type="submit" style={s.btnSubmit} disabled={loading}>
            {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p style={s.switchText}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            style={s.switchLink}
          >
            {mode === 'login' ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
}

const s = {
  card: {
    backgroundColor: '#fff', borderRadius: 22,
    padding: '40px 36px', maxWidth: 440, width: '100%',
    boxShadow: '0 32px 80px rgba(0,0,0,0.22)',
    position: 'relative', animation: 'fadeIn 0.22s ease',
  },
  closeBtn: {
    position: 'absolute', top: 16, right: 16,
    background: 'none', color: '#A6A6A6', padding: 6,
    borderRadius: '50%', display: 'flex', alignItems: 'center',
  },
  logoWrap: { textAlign: 'center', marginBottom: 18 },
  logo: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontSize: 24, fontWeight: 800, color: '#54BD95',
  },
  title: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontSize: 24, fontWeight: 800, color: '#192026',
    textAlign: 'center', marginBottom: 6,
  },
  subtitle: { fontSize: 13, color: '#A6A6A6', textAlign: 'center', marginBottom: 22 },
  demoBtn: {
    width: '100%', padding: '12px',
    borderRadius: 999, border: '2px dashed #54BD95',
    backgroundColor: '#EBF7F2', color: '#54BD95',
    fontWeight: 700, fontSize: 14,
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    cursor: 'pointer', marginBottom: 16,
  },
  orLine: {
    display: 'flex', alignItems: 'center',
    gap: 12, marginBottom: 20, color: '#CBD5E1', fontSize: 13,
    '&::before': { content: '""', flex: 1, height: 1, background: '#E2E8F0' },
  },
  form: { display: 'flex', flexDirection: 'column', gap: 16 },
  group: { display: 'flex', flexDirection: 'column', gap: 7 },
  label: { fontSize: 12, fontWeight: 600, color: '#192026' },
  input: {
    width: '100%', padding: '12px 14px',
    borderRadius: 11, border: '1.5px solid #E2E8F0',
    backgroundColor: '#FAFAFA', color: '#192026',
    fontSize: 14, outline: 'none',
    fontFamily: "'Inter',sans-serif",
    transition: 'border-color 0.2s',
  },
  pwWrap: { position: 'relative' },
  eyeBtn: {
    position: 'absolute', right: 12, top: '50%',
    transform: 'translateY(-50%)', background: 'none',
    display: 'flex', alignItems: 'center', padding: 4,
  },
  remRow: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', fontSize: 13,
  },
  remLabel: { display: 'flex', alignItems: 'center', gap: 7, color: '#68717A', cursor: 'pointer' },
  forgot: { color: '#54BD95', fontWeight: 600, fontSize: 13 },
  btnSubmit: {
    width: '100%', padding: '13px',
    borderRadius: 999, backgroundColor: '#54BD95',
    color: '#fff', fontWeight: 700, fontSize: 15,
    boxShadow: '0 8px 22px rgba(84,189,149,0.30)',
    cursor: 'pointer', marginTop: 4,
  },
  switchText: { textAlign: 'center', fontSize: 13, color: '#A6A6A6', marginTop: 20 },
  switchLink: {
    background: 'none', color: '#54BD95', fontWeight: 700,
    fontSize: 13, cursor: 'pointer', textDecoration: 'underline',
  },
};
