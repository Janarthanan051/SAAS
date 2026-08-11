import React, { useState } from 'react';
import { Send, CheckCircle2, ChevronRight, Play, Star } from 'lucide-react';

export default function ContactForm({ showToast }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const testimonials = [
    {
      quote: "I am very helped by this E-wallet application, my days are very easy to use this application and its very helpful in my life, i recommend it to you 🌟",
      name: "John Richard",
      role: "Founder at TechFlow",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Biccas has transformed how our remote team operates. Task management, cloud sync and live analytics in one clean dashboard!",
      name: "Sarah Jenkins",
      role: "VP of Product at Acme",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter your email address', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Demo request submitted successfully!', 'success');
  };

  return (
    <section id="contact" style={styles.section}>
      <div className="container" style={styles.grid}>
        {/* Left Side Testimonials */}
        <div style={styles.leftCol}>
          <h2 style={styles.heading}>
            People are Saying <br />
            About DoWithIt
          </h2>

          <p style={styles.subtext}>
            Everything you need to accept payment and grow your money or manage your business.
          </p>

          <div style={styles.quoteMark}>“</div>

          <p style={styles.testimonialQuote}>
            {testimonials[activeTestimonial].quote}
          </p>

          <div style={styles.authorRow}>
            <div>
              <h4 style={styles.authorName}>{testimonials[activeTestimonial].name}</h4>
              <p style={styles.authorRole}>{testimonials[activeTestimonial].role}</p>
            </div>

            <div style={styles.carouselNav}>
              <div style={styles.avatarList}>
                {testimonials.map((t, idx) => (
                  <img 
                    key={idx} 
                    src={t.avatar} 
                    alt={t.name}
                    onClick={() => setActiveTestimonial(idx)}
                    style={{
                      ...styles.avatarItem,
                      ...(activeTestimonial === idx ? styles.avatarItemActive : {})
                    }}
                  />
                ))}
              </div>
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                style={styles.btnNext}
                title="Next Testimonial"
              >
                <Play size={14} fill="#FFFFFF" color="#FFFFFF" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Dark Get Started Card Form */}
        <div style={styles.rightCol}>
          <div style={styles.darkCard}>
            <div style={styles.cardIconBg}>
              <Send size={24} color="#54BD95" />
            </div>

            <h3 style={styles.cardTitle}>Get Started</h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Message</label>
                  <textarea 
                    placeholder="What are you looking for?" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={styles.textarea}
                    rows={4}
                  />
                </div>

                <button type="submit" style={styles.btnSubmit}>
                  Request Demo
                </button>
              </form>
            ) : (
              <div style={styles.successBox}>
                <CheckCircle2 size={48} color="#54BD95" />
                <h4 style={styles.successTitle}>Thank You!</h4>
                <p style={styles.successText}>
                  Our product specialist will reach out to <strong>{email}</strong> within 15 minutes.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setEmail(''); setMessage(''); }}
                  style={styles.btnReset}
                >
                  Send another request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#192026',
    color: '#FFFFFF',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  leftCol: {
    maxWidth: '500px',
  },
  heading: {
    fontSize: '40px',
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: '1.2',
    marginBottom: '20px',
  },
  subtext: {
    fontSize: '15px',
    color: '#A6A6A6',
    lineHeight: '1.7',
    marginBottom: '32px',
  },
  quoteMark: {
    fontSize: '60px',
    color: '#54BD95',
    lineHeight: '1',
    marginBottom: '-20px',
    fontFamily: 'serif',
  },
  testimonialQuote: {
    fontSize: '18px',
    color: '#E2E8F0',
    lineHeight: '1.6',
    marginBottom: '32px',
    fontStyle: 'italic',
  },
  authorRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorName: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  authorRole: {
    fontSize: '13px',
    color: '#A6A6A6',
  },
  carouselNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  avatarList: {
    display: 'flex',
    gap: '8px',
  },
  avatarItem: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
    opacity: 0.5,
    border: '2px solid transparent',
    transition: 'all 0.2s ease',
  },
  avatarItemActive: {
    opacity: 1,
    borderColor: '#54BD95',
    transform: 'scale(1.1)',
  },
  btnNext: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#54BD95',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  rightCol: {
    display: 'flex',
    justifyContent: 'center',
  },
  darkCard: {
    width: '100%',
    maxWidth: '440px',
    backgroundColor: '#222B32',
    padding: '40px 36px',
    borderRadius: '24px',
    boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  cardIconBg: {
    width: '52px',
    height: '52px',
    borderRadius: '16px',
    backgroundColor: 'rgba(84, 189, 149, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#A6A6A6',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    backgroundColor: '#192026',
    border: '1px solid #334155',
    color: '#FFFFFF',
    fontSize: '14px',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    backgroundColor: '#192026',
    border: '1px solid #334155',
    color: '#FFFFFF',
    fontSize: '14px',
    outline: 'none',
    resize: 'none',
  },
  btnSubmit: {
    width: '100%',
    padding: '14px',
    borderRadius: '999px',
    backgroundColor: '#54BD95',
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(84, 189, 149, 0.3)',
    marginTop: '10px',
  },
  successBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '16px',
    padding: '20px 0',
  },
  successTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  successText: {
    fontSize: '14px',
    color: '#A6A6A6',
    lineHeight: '1.6',
  },
  btnReset: {
    backgroundColor: 'transparent',
    color: '#54BD95',
    border: '1px solid #54BD95',
    padding: '10px 20px',
    borderRadius: '999px',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
  }
};
