"use client"
import React from "react";

export default function AiCybersecurityPage() {
  return (
    <>
      {/* Hero Section */}
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
        {/* Background Gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a1a2f 0%, #1e3a5c 60%, #3a5fa8 100%)',
          zIndex: 0
        }}>
          {/* Animated gradient overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(25,118,210,0.1) 0%, transparent 50%)',
            animation: 'pulse 8s infinite'
          }} />
        </div>

        {/* Content Container */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '48px 24px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              marginBottom: '10px',
              textAlign: 'center',
              width: '100%'
            }}>
              <h1 style={{
                color: '#fff',
                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '20px',
                letterSpacing: '0.5px',
                paddingTop: '200px'
              }}>
                <span>AI in Cybersecurity</span><br />
                <span style={{
                  color: '#fff',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: 400,
                  display: 'block',
                  marginTop: '10px'
                }}>Protecting digital assets with intelligent defense systems</span>
              </h1>
              <div style={{
                color: '#bcd1f7',
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                marginBottom: '10px'
              }}>
                <span>Blog by <b style={{ color: '#fff' }}>Fathimath Shamneera</b></span>
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.98rem)',
                  color: '#bcd1f7',
                  marginTop: '5px'
                }}>Content Writer & Cybersecurity Analyst</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        background: '#fff',
        padding: '64px 24px'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          color: '#333'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '24px', color: '#1e3a5c' }}>
            The Evolution of Cybersecurity
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            As cyber threats become increasingly sophisticated, artificial intelligence is emerging as a crucial tool in the cybersecurity arsenal. AI-powered systems can detect, analyze, and respond to threats in real-time, providing a more robust defense against modern cyber attacks.
          </p>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', marginTop: '40px', color: '#1e3a5c' }}>
            Key Applications of AI in Cybersecurity
          </h3>
          <ul style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '16px' }}>Threat detection and prevention</li>
            <li style={{ marginBottom: '16px' }}>Network security monitoring</li>
            <li style={{ marginBottom: '16px' }}>Automated incident response</li>
            <li style={{ marginBottom: '16px' }}>Behavioral analytics and anomaly detection</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', marginTop: '40px', color: '#1e3a5c' }}>
            Benefits of AI-Powered Cybersecurity
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            The integration of AI in cybersecurity brings several key advantages:
          </p>
          <ul style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '16px' }}>Real-time threat detection and response</li>
            <li style={{ marginBottom: '16px' }}>Reduced false positives</li>
            <li style={{ marginBottom: '16px' }}>Predictive threat intelligence</li>
            <li style={{ marginBottom: '16px' }}>Automated security operations</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', marginTop: '40px', color: '#1e3a5c' }}>
            Future Implications
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            As AI technology continues to advance, we can expect even more sophisticated cybersecurity solutions. The combination of machine learning, behavioral analytics, and automated response systems will create more resilient defense mechanisms against evolving cyber threats.
          </p>

          <div style={{
            marginTop: '48px',
            padding: '24px',
            background: '#f5f8ff',
            borderRadius: '12px',
            border: '1px solid #e1e8ff'
          }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px', color: '#1e3a5c' }}>Key Takeaways</h4>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '0', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}>AI enhances cybersecurity through intelligent threat detection</li>
              <li style={{ marginBottom: '12px' }}>Automated response systems improve security operations</li>
              <li style={{ marginBottom: '12px' }}>Predictive analytics help prevent future attacks</li>
              <li style={{ marginBottom: '0' }}>Continuous learning improves defense mechanisms</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </>
  );
} 