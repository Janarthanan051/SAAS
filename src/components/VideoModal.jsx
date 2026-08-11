import React from 'react';
import { X, Play, CheckCircle2 } from 'lucide-react';

export default function VideoModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h3 style={styles.title}>Biccas Product Tour & Overview</h3>
          <button onClick={onClose} style={styles.closeBtn}>
            <X size={20} color="#FFFFFF" />
          </button>
        </div>

        <div style={styles.videoWrapper}>
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
            title="Biccas SaaS Overview Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={styles.iframe}
          ></iframe>
        </div>

        <div style={styles.footerInfo}>
          <div style={styles.infoBadge}>
            <CheckCircle2 size={16} color="#54BD95" />
            <span>HD 1080p Interactive Walkthrough</span>
          </div>
          <p style={styles.infoText}>
            Learn how 25,000+ teams streamline collaboration, manage cloud storage, and accelerate productivity with Biccas.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  modalContent: {
    backgroundColor: '#192026',
    color: '#FFFFFF',
    borderRadius: '24px',
    width: '100%',
    maxWidth: '750px',
    padding: '24px',
    boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  videoWrapper: {
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#000000',
    marginBottom: '16px',
  },
  iframe: {
    borderRadius: '16px',
  },
  footerInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  infoBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#54BD95',
  },
  infoText: {
    fontSize: '13px',
    color: '#A6A6A6',
  }
};
