'use client';
import Image from 'next/image';
import { useState } from 'react';
import TermsPopup from './TermsPopup';
import PrivacyPopup from './PrivacyPopup';

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer
      style={{
        width: '100%',
        background: 'linear-gradient(rgb(152, 217, 252) 100%)',
        color: '#072549',
        padding: '3rem 0 2rem 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '3.5rem',
        fontSize: '1rem',
        boxShadow: '0 -2px 24px 0 rgba(103,232,249,0.08)',
        marginTop: '4rem',
        paddingLeft: '10vw',
        paddingRight: '3vw',
        position: 'relative',
        paddingBottom: 'clamp(100px, 15vh, 200px)',
      }}
      className="footer-container"
    >
      {/* Section 1: Logo & Address & Social */}
      <div style={{ minWidth: 200, flex: '1 1 220px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12}}>
        <Image src="/images/zen.png" alt="Logo" width={216} height={30} style={{ marginBottom: 8, }} />
        <div style={{ color: '#1976d2', fontWeight: 700, marginBottom: 2, fontSize:22 }}>Address</div>
        <div style={{ color: '#222', fontWeight: 300, marginBottom: 8 }}>STPI Building, Technopark Phase 1, Trivandrum, India</div>
        <div style={{ color: '#1976d2', fontWeight: 700, marginBottom: 2, fontSize:22 }}>Follow us on</div>
        <div style={{ display: 'flex', gap: 16, zIndex: 1 }}>
          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=61563813914814#" 
            aria-label="Facebook" 
            className="social-icon-link"
            target="_blank" 
            rel="noopener noreferrer">
            <Image src="/images/f.png" alt="Facebook" width={32} height={32} style={{ borderRadius: '8px', background: '#14325a', padding: '4px' }} />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/zenturiotech/" 
            aria-label="Instagram" 
            className="social-icon-link"
            target="_blank" 
            rel="noopener noreferrer">
            <Image src="/images/i.png" alt="Instagram" width={32} height={32} style={{ borderRadius: '8px', background: '#14325a', padding: '4px' }} />
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/zenturiotech" 
            aria-label="LinkedIn" 
            className="social-icon-link"
            target="_blank" 
            rel="noopener noreferrer">
            <Image src="/images/l.png" alt="LinkedIn" width={32} height={32} style={{ borderRadius: '8px', background: '#14325a', padding: '4px' }} />
          </a>
          {/* X (Twitter) */}
          <a href="https://x.com/zenturiotech" 
            aria-label="X" 
            className="social-icon-link"
            target="_blank" 
            rel="noopener noreferrer">
            <Image src="/images/x.png" alt="X" width={32} height={32} style={{ borderRadius: '8px', background: '#14325a', padding: '4px' }} />
          </a>
        </div>
      </div>
      {/* Section 2: Get in Touch */}
      <div style={{ minWidth: 200, flex: '1 1 220px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ color: '#1976d2', fontWeight: 700, marginBottom: 2, fontSize:22 }}>Get in Touch</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#072549', fontWeight: 300 }}>
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M2 4.5A2.5 2.5 0 014.5 2h11A2.5 2.5 0 0118 4.5v11A2.5 2.5 0 0115.5 18h-11A2.5 2.5 0 012 15.5v-11z" stroke="#1976d2" strokeWidth="1.5"/><path d="M4 6l6 5 6-5" stroke="#1976d2" strokeWidth="1.5"/></svg>
          <span>contact@zenturiotech.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#072549', fontWeight: 300 }}>
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" stroke="#1976d2" strokeWidth="1.5"/><path d="M10 6v4l2.5 2.5" stroke="#1976d2" strokeWidth="1.5"/></svg>
          <span>+91-8129993666</span>
        </div>
      </div>
      {/* Section 3: Company */}
      <div style={{ minWidth: 160, flex: '1 1 180px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ color: '#1976d2', fontWeight: 700, marginBottom: 2, fontSize:22 }}>Company</div>
        <div style={{ color: '#072549', fontWeight: 300, opacity: 0.92 }}>
          <a href="/who-we-are" style={{ color: '#000' }}>Who we are</a> <br />
          <a href="/careers" style={{ color: '#000' }}>Careers</a>
        </div>
      </div>
      <div style={{ minWidth: 160, flex: '1 1 180px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ color: '#1976d2', fontWeight: 700, marginBottom: 2, fontSize:22 }}>Services</div>
        <div style={{ color: '#072549', fontWeight: 300, opacity: 0.92 }}>
          <a href="/services/ai" style={{ color: '#000' }}>AI</a><br />
          <a href="/services/vr" style={{ color: '#000' }}>VR</a><br />
          <a href="/services/web" style={{ color: '#000' }}>Web Development</a>
        </div>
      </div>
      {/* Section 4: Quick Links */}
      <div style={{ minWidth: 160, flex: '1 1 180px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ color: '#1976d2', fontWeight: 700, marginBottom: 2, fontSize:22 }}>Quick Links</div>
        <div style={{ color: '#072549', fontWeight: 300, opacity: 0.92 }}>
          <a href="/about" style={{ color: '#000' }}>Contact US</a><br />
          <a href="/trending" style={{ color: '#000' }}>Blog</a><br />
        </div>
      </div>

      {/* Move NVIDIA section inside main footer content */}
      <div className="nvidia-logo-footer">
        <div className="nvidia-container">
          <Image src="/images/nvidia-logo.png" alt="NVIDIA Logo" className="nvidia-logo-img" width={180} height={48} style={{ objectFit: 'contain' }} />
          <div className="nvidia-text">Proud Member of the NVIDIA Inception <br/>Program – Driving AI Innovation!</div>
          <div className="copyright-text">
            © 2025 ZenturioTech. All rights reserved.
            <div className="policy-links">
              <a href="#" onClick={(e) => { e.preventDefault(); setIsTermsOpen(true); }}>Terms of use</a>
              <span className="separator">|</span>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyOpen(true); }}>Privacy policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Privacy Popups */}
      <TermsPopup isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyPopup isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      <style jsx global>{`
        .social-icon-link {
          opacity: 0.85;
          transition: opacity 0.2s ease, transform 0.2s ease;
          cursor: pointer;
          position: relative;
          z-index: 2;
        }
        .social-icon-link:hover {
          opacity: 1;
          transform: scale(1.05);
        }
        .nvidia-logo-footer {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          padding-bottom: 16px;
          text-align: center;
        }
        .nvidia-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          padding: 0 20px;
        }
        .nvidia-text {
          color: #072549;
          font-weight: 500;
          font-size: 16px;
        }
        .copyright-text {
          width: 100%;
          text-align: center;
          color: #072549;
          font-size: 14px;
          margin-top: 8px;
        }
        .policy-links {
          margin-top: 4px;
        }
        .policy-links a {
          color: #1976d2;
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
          z-index: 2;
        }
        .policy-links a:hover {
          color: #2196f3;
        }
        .separator {
          margin: 0 8px;
          color: #072549;
        }
        .nvidia-logo-img {
          width: 280px !important;
          height: auto;
          max-width: 90vw;
        }
        @media (max-width: 600px) {
          .nvidia-logo-footer {
            position: relative;
            margin-top: 0rem;
            padding-top: 0rem;
            order: 999;
            padding-bottom: 0px;
          }
          .nvidia-container {
            flex-direction: column;
            gap: 8px;
          }
          .nvidia-logo-img {
            width: 200px !important;
            height: auto;
          }
          .nvidia-text {
            font-size: 14px;
          }
          .copyright-text {
            font-size: 12px;
            margin-top: 6px;
          }
          .policy-links {
            margin-top: 3px;
          }
        }
      `}</style>
    </footer>
  );
}