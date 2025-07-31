"use client"
import React from "react";

export default function AiPersonalizedMedicinePage() {
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
                <span>AI in Personalized Medicine</span><br />
                <span style={{
                  color: '#fff',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: 400,
                  display: 'block',
                  marginTop: '10px'
                }}>Tailoring treatments to individual genetic profiles</span>
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
                }}>Content Writer & Healthcare Technology Analyst</span>
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
            The Future of Personalized Healthcare
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            Artificial Intelligence is revolutionizing healthcare by enabling truly personalized medicine. By analyzing vast amounts of patient data, including genetic information, medical history, and lifestyle factors, AI helps healthcare providers deliver more effective, individualized treatments.
          </p>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', marginTop: '40px', color: '#1e3a5c' }}>
            Key Applications in Personalized Medicine
          </h3>
          <ul style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '16px' }}>Genetic profile analysis</li>
            <li style={{ marginBottom: '16px' }}>Treatment response prediction</li>
            <li style={{ marginBottom: '16px' }}>Drug interaction assessment</li>
            <li style={{ marginBottom: '16px' }}>Lifestyle and environmental factor analysis</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', marginTop: '40px', color: '#1e3a5c' }}>
            Benefits of AI-Driven Personalized Medicine
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            The integration of AI in personalized medicine offers numerous advantages:
          </p>
          <ul style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '16px' }}>More effective treatments</li>
            <li style={{ marginBottom: '16px' }}>Reduced adverse reactions</li>
            <li style={{ marginBottom: '16px' }}>Better patient outcomes</li>
            <li style={{ marginBottom: '16px' }}>Cost-effective healthcare delivery</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', marginTop: '40px', color: '#1e3a5c' }}>
            Future Implications
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            As AI technology continues to advance, we can expect even more precise and effective personalized medicine solutions. The combination of genetic analysis, machine learning, and real-time health monitoring will revolutionize how we approach individual patient care.
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
              <li style={{ marginBottom: '12px' }}>AI enables truly personalized treatment approaches</li>
              <li style={{ marginBottom: '12px' }}>Improved treatment outcomes through data analysis</li>
              <li style={{ marginBottom: '12px' }}>Better prediction of treatment responses</li>
              <li style={{ marginBottom: '0' }}>More efficient healthcare delivery</li>
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