"use client"
import React from "react";

export default function AiHealthcareAutomationPage() {
  return (
    <>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: '100vh', 
        overflow: 'hidden',
        background: 'url(\'/images/blogbg.jpeg\') center/cover no-repeat, #0a1a2f',
      }}>
        {/* Dark overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(10,26,47,0.95) 0%, rgba(30,58,92,0.85) 60%, rgba(58,95,168,0.8) 100%)',
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
                <span>AI in Healthcare Automation</span><br />
                <span style={{
                  color: '#fff',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: 400,
                  display: 'block',
                  marginTop: '10px'
                }}>Streamlining healthcare operations with intelligent systems</span>
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
                }}>Content Writer & Healthcare Operations Analyst</span>
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
            Revolutionizing Healthcare Operations
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            Artificial Intelligence is transforming healthcare operations by automating routine tasks and streamlining complex workflows. Through intelligent automation, healthcare providers can focus more on patient care while improving operational efficiency and reducing costs.
          </p>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', marginTop: '40px', color: '#1e3a5c' }}>
            Key Applications in Healthcare Automation
          </h3>
          <ul style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '16px' }}>Administrative task automation</li>
            <li style={{ marginBottom: '16px' }}>Appointment scheduling and management</li>
            <li style={{ marginBottom: '16px' }}>Medical record management</li>
            <li style={{ marginBottom: '16px' }}>Supply chain optimization</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', marginTop: '40px', color: '#1e3a5c' }}>
            Benefits of Healthcare Automation
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            The integration of AI in healthcare operations offers numerous advantages:
          </p>
          <ul style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '16px' }}>Improved operational efficiency</li>
            <li style={{ marginBottom: '16px' }}>Reduced administrative burden</li>
            <li style={{ marginBottom: '16px' }}>Better resource allocation</li>
            <li style={{ marginBottom: '16px' }}>Enhanced patient experience</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', marginTop: '40px', color: '#1e3a5c' }}>
            Future Implications
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            As AI technology continues to evolve, we can expect even more sophisticated automation solutions in healthcare. The combination of machine learning, process automation, and predictive analytics will lead to more efficient healthcare delivery systems.
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
              <li style={{ marginBottom: '12px' }}>AI streamlines healthcare operations</li>
              <li style={{ marginBottom: '12px' }}>Reduced administrative workload</li>
              <li style={{ marginBottom: '12px' }}>Improved resource utilization</li>
              <li style={{ marginBottom: '0' }}>Better patient care through efficiency</li>
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