import React, { useState, useEffect, useCallback } from 'react';
import './index.css';

import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import SocialProof     from './components/SocialProof';
import SupportSection  from './components/SupportSection';
import FeaturesGrid    from './components/FeaturesGrid';
import BenefitsSection from './components/BenefitsSection';
import PricingSection  from './components/PricingSection';
import ContactForm     from './components/ContactForm';
import Footer          from './components/Footer';
import AuthModal       from './components/AuthModal';
import DashboardModal  from './components/DashboardModal';
import VideoModal      from './components/VideoModal';

/* ─── TOAST component ────────────────────────────────────────── */
function ToastStack({ toasts }) {
  if (!toasts.length) return null;
  return (
    <div className="toast-wrap">
      {toasts.map(t => (
        <div
          key={t.id}
          className="toast-item"
          style={{
            borderLeftColor:
              t.type === 'success' ? '#54BD95'
              : t.type === 'error'   ? '#EF4444'
              : t.type === 'warning' ? '#F59E0B'
              : '#3B82F6',
          }}
        >
          <span style={{ fontSize: 16 }}>
            {t.type === 'success' ? '✓' : t.type === 'error' ? '✕' : t.type === 'warning' ? '⚠' : 'ℹ'}
          </span>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── APP ────────────────────────────────────────────────────── */
export default function App() {
  const [user, setUser]               = useState(null);
  const [authModal, setAuthModal]     = useState(null);   // 'login' | 'signup' | null
  const [dashboardOpen, setDashboard] = useState(false);
  const [videoOpen, setVideoOpen]     = useState(false);
  const [toasts, setToasts]           = useState([]);

  /* Restore session on mount */
  useEffect(() => {
    try {
      const saved = localStorage.getItem('biccas_user');
      if (saved) setUser(JSON.parse(saved));
    } catch (_) {}
  }, []);

  /* Toast helper */
  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  }, []);

  /* Auth handlers */
  const handleLoginSuccess = useCallback((u) => {
    setUser(u);
    localStorage.setItem('biccas_user', JSON.stringify(u));
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('biccas_user');
    setUser(null);
    showToast('Successfully logged out', 'info');
  }, [showToast]);

  /* Pricing plan CTA */
  const handleSelectPlan = useCallback((plan) => {
    if (!user) {
      setAuthModal('signup');
      showToast(`Create an account to get started with ${plan.name}!`, 'info');
    } else {
      setDashboard(true);
      showToast(`Opening workspace for ${plan.name} plan!`, 'success');
    }
  }, [user, showToast]);

  /* Close auth modal */
  const closeAuth = useCallback(() => setAuthModal(null), []);

  return (
    <>
      {/* ── Sections ── */}
      <Navbar
        user={user}
        onLogout={handleLogout}
        onOpenAuth={setAuthModal}
        onOpenDashboard={() => {
          if (!user) { setAuthModal('login'); return; }
          setDashboard(true);
        }}
      />

      <main>
        <Hero
          onOpenDashboard={() => {
            if (!user) { setAuthModal('signup'); return; }
            setDashboard(true);
          }}
          onOpenVideoModal={() => setVideoOpen(true)}
        />

        <SocialProof />

        <SupportSection />

        <FeaturesGrid
          onOpenDashboard={() => {
            if (!user) { setAuthModal('signup'); return; }
            setDashboard(true);
          }}
        />

        <BenefitsSection />

        <PricingSection onSelectPlan={handleSelectPlan} />

        <ContactForm showToast={showToast} />

        <Footer showToast={showToast} />
      </main>

      {/* ── Modals ── */}
      {authModal && (
        <AuthModal
          initialMode={authModal}
          onClose={closeAuth}
          showToast={showToast}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {dashboardOpen && (
        <DashboardModal
          onClose={() => setDashboard(false)}
          showToast={showToast}
          user={user}
        />
      )}

      {videoOpen && (
        <VideoModal onClose={() => setVideoOpen(false)} />
      )}

      {/* ── Toast notifications ── */}
      <ToastStack toasts={toasts} />
    </>
  );
}
