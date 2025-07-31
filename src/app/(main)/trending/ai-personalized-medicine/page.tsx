"use client"
import React from "react";

export default function AiPersonalizedMedicinePage() {
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
                <span>Real-World Applications of Agentic AI</span><br />
                <span style={{
                  color: '#fff',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: 400,
                  display: 'block',
                  marginTop: '10px'
                }}>Transforming Industries Beyond Automation</span>
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
                }}>Content Writer & AI Technology Analyst</span>
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
        padding: 'clamp(32px, 5vw, 64px) clamp(16px, 3vw, 24px)'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          color: '#333'
        }}>
          {/* Introduction */}
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555' }}>
            Agentic AI is no longer a futuristic concept—it's actively reshaping how businesses operate, innovate and compete. These self-directed systems don't just follow commands; they think, act and adapt autonomously. Let's explore how they're driving tangible impact across sectors.
          </p>

          {/* Healthcare Section */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c', marginTop: '3rem' }}>
            The Proactive Medical Partner in Healthcare
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            Agentic AI is revolutionising healthcare by acting as a 24/7 medical assistant that:
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', marginBottom: '1rem', color: '#2a4a7f' }}>
              Predicts Health Risks
            </h3>
            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
              Analyses patient vitals and historical data to identify anomalies (e.g., irregular heart rhythms) before they occur.
            </p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', marginBottom: '1rem', color: '#2a4a7f' }}>
              Coordinates Care
            </h3>
            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
              Automates workflows between labs, pharmacies and specialists, reducing delays in treatment.
            </p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', marginBottom: '1rem', color: '#2a4a7f' }}>
              Assists with Surgeries
            </h3>
            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
              Guides robotic systems during procedures, improving precision in complex operations.
            </p>
          </div>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555', fontStyle: 'italic' }}>
            Real-World Impact: Tempus Labs uses Agentic AI to personalise cancer treatments, while Philips' IntelliVue Guardian System monitors ICU patients in real time.
          </p>

          {/* Business Operations Section */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            Business Operations: The Autonomous Executive
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            Forget manual task management. Agentic AI streamlines operations by:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}><strong>Prioritising Emails:</strong> Using sentiment analysis to highlight urgent messages</li>
            <li style={{ marginBottom: '1rem' }}><strong>Automating Reporting:</strong> Generating financial summaries or project updates without human input</li>
            <li style={{ marginBottom: '1rem' }}><strong>Dynamic Scheduling:</strong> Rescheduling meetings based on real-time conflicts</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555', fontStyle: 'italic' }}>
            Outcome: Teams save ~10 hours/week on administrative tasks, focusing on strategic work.
          </p>

          {/* R&D Section */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            R&D: The AI-Powered Innovator
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            Agentic AI accelerates discovery in research-heavy fields:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}><strong>Hypothesis Generation:</strong> Proposes new research angles by analysing millions of papers</li>
            <li style={{ marginBottom: '1rem' }}><strong>Parallel Experimentation:</strong> Runs 100+ simulated trials simultaneously</li>
            <li style={{ marginBottom: '1rem' }}><strong>Regulatory Compliance:</strong> Automatically updates protocols to align with changing standards</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555', fontStyle: 'italic' }}>
            Case Study: Siemens uses Agentic AI to optimize manufacturing processes, reducing prototyping costs by 40%.
          </p>

          {/* E-Commerce Section */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            The Dynamic Sales Engine in E-Commerce
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            Agentic AI drives revenue by bridging insight and action:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}><strong>Personalized Campaigns:</strong> Crafts hyper-targeted ads using real-time browsing data</li>
            <li style={{ marginBottom: '1rem' }}><strong>Dynamic Pricing:</strong> Adjusts product prices based on demand spikes or competitor moves</li>
            <li style={{ marginBottom: '1rem' }}><strong>Inventory Optimisation:</strong> Predicts stock needs using weather, trends, and social signals</li>
          </ul>

          {/* Sustainability Section */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            Sustainability: The Smart City Architect
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            Agentic AI is building greener, smarter urban ecosystems:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}><strong>Energy Optimisation:</strong> Balances grid loads using renewable sources and redirects excess power</li>
            <li style={{ marginBottom: '1rem' }}><strong>Traffic Management:</strong> Reroutes vehicles in real time to reduce congestion and emissions</li>
            <li style={{ marginBottom: '1rem' }}><strong>Fault Detection:</strong> Identifies leaks in water systems or power outages before they escalate</li>
          </ul>

          {/* Business Impact Section */}
          <div style={{
            marginTop: '3rem',
            padding: 'clamp(20px, 3vw, 32px)',
            background: '#f5f8ff',
            borderRadius: '12px',
            border: '1px solid #e1e8ff'
          }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1rem', color: '#1e3a5c' }}>
              What This Means for Your Business
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
              Agentic AI isn't replacing humans—it's augmenting capabilities by handling repetitive tasks and enabling data-driven decisions.
            </p>
            <ul style={{ 
              fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
              lineHeight: 1.8, 
              marginBottom: '0', 
              color: '#555',
              paddingLeft: 'clamp(20px, 2vw, 24px)'
            }}>
              <li style={{ marginBottom: '1rem' }}><strong>Autonomous Supply Chains:</strong> Self-optimizing logistics for manufacturers</li>
              <li style={{ marginBottom: '1rem' }}><strong>AI-Driven Compliance:</strong> Real-time regulatory updates for financial firms</li>
              <li style={{ marginBottom: '0' }}><strong>Smart Customer Engagements:</strong> Context-aware chatbots that resolve 80% of queries without escalation</li>
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

        @media (max-width: 768px) {
          ul {
            padding-left: 16px;
          }
          
          li {
            margin-bottom: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          h2 {
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          
          p {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </>
  );
} 