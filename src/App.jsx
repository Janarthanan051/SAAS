import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import SupportSection from './components/SupportSection';
import FeaturesGrid from './components/FeaturesGrid';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import DashboardModal from './components/DashboardModal';
import AuthModal from './components/AuthModal';
import VideoModal from './components/VideoModal';

export default function App() {
  const [authModal, setAuthModal] = useState(null); // 'login' | 'signup' | null
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Load persistent user session if available
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('biccas_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error('Error restoring session', e);
    }
  }, []);

  // Toast notification trigger
  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleLogout = () => {
    localStorage.removeItem('biccas_user');
    setUser(null);
    showToast('Logged out of Biccas', 'info');
  };

  const handleSelectPlan = (plan) => {
    if (plan.id === 'free') {
      if (!user) {
        setAuthModal('signup');
      } else {
        setDashboardOpen(true);
      }
      showToast(`Signing up for Free tier`, 'info');
    } else {
      setDashboardOpen(true);
      showToast(`Opening Workspace for ${plan.name} Plan!`, 'success');
    }
  };

  return (
    <div className="app-root">
      {/* Toast Notification Bar */}
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className="toast" style={{
            borderLeftColor: t.type === 'success' ? '#54BD95' : t.type === 'error' ? '#EF4444' : '#3B82F6'
          }}>
            <span>{t.type === 'success' ? '✓' : 'ℹ'}</span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>

      {/* Main Navigation */}
      <Navbar 
        user={user}
        onLogout={handleLogout}
        onOpenAuth={(mode) => setAuthModal(mode)}
        onOpenDashboard={() => setDashboardOpen(true)}
      />

      {/* Landing Page Hero */}
      <Hero 
        onOpenDashboard={() => setDashboardOpen(true)}
        onOpenVideoModal={() => setVideoOpen(true)}
        onOpenAuth={(mode) => setAuthModal(mode)}
      />

      {/* Social Proof Partners */}
      <SocialProof />

      {/* Global Support & Rating */}
      <SupportSection />

      {/* Features Showcase */}
      <FeaturesGrid onOpenDashboard={() => setDashboardOpen(true)} />

      {/* User Benefits Checklist */}
      <BenefitsSection />

      {/* Pricing Tier Plans */}
      <PricingSection 
        onOpenAuth={(mode) => setAuthModal(mode)}
        onSelectPlan={handleSelectPlan}
      />

      {/* Testimonials & Demo Request */}
      <ContactForm showToast={showToast} />

      {/* Site Footer */}
      <Footer showToast={showToast} />

      {/* Interactive Modals */}
      {dashboardOpen && (
        <DashboardModal 
          onClose={() => setDashboardOpen(false)}
          showToast={showToast}
        />
      )}

      {authModal && (
        <AuthModal 
          initialMode={authModal}
          onClose={() => setAuthModal(null)}
          showToast={showToast}
          onLoginSuccess={(u) => setUser(u)}
        />
      )}

      {videoOpen && (
        <VideoModal onClose={() => setVideoOpen(false)} />
      )}
    </div>
  );
}
