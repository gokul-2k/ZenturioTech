"use client";
import { useEffect } from 'react';

interface TermsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsPopup({ isOpen, onClose }: TermsPopupProps) {
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
    <div className="terms-popup-overlay">
      <div className="terms-popup">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="terms-content">
          <h2>Terms and Conditions</h2>
          
          <h3>Acceptance of Terms</h3>
          <p>By accessing and using our website (zenturiotech.com), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Website.</p>
          
          <h3>Use of the Website</h3>
          <p>1. License: ZenturioTech grants you a limited, non-exclusive, and revocable license to access and use the Website for informational and non-commercial purposes.</p>
          <p>2. Prohibited Activities: You agree not to engage in any of the following activities:</p>
          <ul>
            <li>Violating any applicable laws or regulations.</li>
            <li>Attempting to gain unauthorized access to the Website or its servers.</li>
            <li>Using the Website for any illegal or unethical purposes.</li>
            <li>Transmitting harmful code or malware.</li>
          </ul>
          
          <h3>Intellectual Property</h3>
          <p>1. Copyright: All content on the Website, including text, graphics, logos, and software, is the property of ZenturioTech and is protected by copyright laws.</p>
          <p>2. Trademarks: Any trademarks or logos used on the Website are the property of ZenturioTech or their respective owners.</p>
          
          <h3>Privacy Policy</h3>
          <p>Your use of the Website is also governed by our Privacy Policy.</p>
          
          <h3>Links to Third-Party Websites</h3>
          <p>The Website may contain links to third-party websites. ZenturioTech is not responsible for the content or practices of these websites. You access them at your own risk.</p>
          
          <h3>Disclaimer of Warranties</h3>
          <p>1. The Website is provided "as is" and "as available" without warranties of any kind, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
          <p>2. ZenturioTech does not guarantee the accuracy, completeness, or reliability of any information on the Website.</p>
          
          <h3>Limitation of Liability</h3>
          <p>In no event shall ZenturioTech be liable for any direct, indirect, special, incidental, or consequential damages arising out of or in connection with your use or inability to use the Website.</p>
          
          <h3>Modifications to Terms</h3>
          <p>ZenturioTech reserves the right to modify these Terms and Conditions at any time. It is your responsibility to check for updates periodically.</p>
          
          <p className="contact-info">If you have any questions or concerns about these Terms and Conditions, please contact us at contact@zenturiotech.com.</p>
        </div>
      </div>

      <style jsx>{`
        .terms-popup-overlay {
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

        .terms-popup {
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

        .terms-content {
          padding: 40px;
          overflow-y: auto;
          max-height: 90vh;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .terms-content::-webkit-scrollbar {
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
          .terms-popup {
            max-height: 85vh;
          }

          .terms-content {
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
        }
      `}</style>
    </div>
  );
} 