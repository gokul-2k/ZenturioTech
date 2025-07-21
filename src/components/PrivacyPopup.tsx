"use client";
import { useEffect } from 'react';

interface PrivacyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPopup({ isOpen, onClose }: PrivacyPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="privacy-popup-overlay">
      <div className="privacy-popup">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="privacy-content">
          <h2>Privacy Policy</h2>
          
          <p className="intro">
            Welcome to ZenturioTech. We are dedicated to safeguarding your privacy and ensuring the security of your personal information. 
            This Privacy Policy outlines how we gather, utilize, share, and protect your personal data when you engage with our website, 
            products, and services. Your use of our website and services implies your acceptance of the practices detailed in this Privacy Policy.
          </p>
          
          <h3>Collection and Processing of Personal Information</h3>
          <p>
            While browsing our website, we do not collect any personal data from you. However, any information you provide on our contact 
            or inquiry pages is securely stored.
          </p>
          
          <h3>Implications of Withholding Personal Information</h3>
          <p>
            We do not sell any data entered on our site to third parties, nor do we have any agreements with such parties for data collection 
            or storage. Providing false information may lead to legal consequences and hinder proper processing of your requests.
          </p>
          
          <h3>Data Recipients, Transfer, and Disclosure</h3>
          <ul>
            <li>Cookies are used to identify users for future visits, streamlining the browsing experience.</li>
            <li>We only provide links to third-party sites authorized or controlled by ZenturioTech, ensuring trust and reliability.</li>
            <li>Users can reach out with suggestions, complaints, or inquiries via the email address listed on our website.</li>
            <li>ZenturioTech reserves the right to amend its privacy policies to align with our growth and evolving needs.</li>
          </ul>
          
          <h3>Contact Us</h3>
          <p className="contact-info">
            For any questions, concerns, or requests regarding your personal information or this Privacy Policy, please contact us at 
            contact@zenturiotech.com.
          </p>
        </div>
      </div>

      <style jsx>{`
        .privacy-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          padding: 20px;
          backdrop-filter: blur(5px);
        }

        .privacy-popup {
          background: white;
          border-radius: 16px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          position: relative;
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.2);
        }

        .close-button {
          position: absolute;
          right: 20px;
          top: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #1976d2;
          width: 40px;
          height: 40px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
          z-index: 2;
        }

        .close-button:hover {
          background-color: rgba(25, 118, 210, 0.1);
        }

        .privacy-content {
          padding: 40px;
          overflow-y: auto;
          max-height: 90vh;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .privacy-content::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        h2 {
          color: #1976d2;
          font-size: 24px;
          margin-bottom: 24px;
          font-weight: 600;
        }

        h3 {
          color: #072549;
          font-size: 18px;
          margin: 24px 0 12px 0;
          font-weight: 600;
        }

        p {
          color: #333;
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .intro {
          font-size: 16px;
          color: #444;
          margin-bottom: 24px;
        }

        ul {
          margin: 0 0 16px 20px;
          color: #333;
          line-height: 1.6;
        }

        li {
          margin-bottom: 8px;
        }

        .contact-info {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid #eee;
          color: #666;
          font-style: italic;
        }

        @media (max-width: 600px) {
          .privacy-popup {
            max-height: 85vh;
          }

          .privacy-content {
            padding: 24px;
          }

          h2 {
            font-size: 20px;
            margin-bottom: 20px;
          }

          h3 {
            font-size: 16px;
            margin: 20px 0 10px 0;
          }

          p, ul {
            font-size: 14px;
          }

          .intro {
            font-size: 14px;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
} 