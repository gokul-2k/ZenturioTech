"use client"
import React from "react";

export default function AiDrugDiscoveryPage() {
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
                <span>AI in Drug Discovery</span><br />
                <span style={{
                  color: '#fff',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: 400,
                  display: 'block',
                  marginTop: '10px'
                }}>Accelerating the Future of Medicine</span>
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
                }}>Content Writer & Pharmaceutical Technology Analyst</span>
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
            The journey from a promising molecule to a market-ready drug has always been long, costly, and fraught with uncertainty — often spanning 10–15 years and costing billions. Today, Artificial Intelligence (AI) is redefining this landscape, transforming drug discovery from a marathon into a strategic sprint.
          </p>

          {/* The Traditional Challenge */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1rem', color: '#1e3a5c', marginTop: '3rem' }}>
            The Traditional Challenge
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555' }}>
            Drug discovery is inherently complex. Scientists must sift through millions of molecules, predict intricate biological interactions, validate efficacy, and ensure safety while directing difficult regulatory frameworks. Historically this process has been slow, expensive and marked by high failure rates.
          </p>

          {/* How AI is Revolutionising Drug Discovery */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c', marginTop: '3rem' }}>
            How AI is Revolutionising Drug Discovery
          </h2>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', marginBottom: '1rem', color: '#2a4a7f' }}>
              Target Identification and Validation
            </h3>
            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
              AI rapidly analyses genomic, proteomic, and clinical data to uncover promising biological targets, streamlining the critical first step of determining what to target in the body.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', marginBottom: '1rem', color: '#2a4a7f' }}>
              Molecular Generation and Screening
            </h3>
            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
              Generative AI models can design novel molecules with optimal properties, predicting solubility, toxicity, and bioavailability before any lab work begins. This dramatically narrows down candidates and accelerates hit discovery.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', marginBottom: '1rem', color: '#2a4a7f' }}>
              Predictive Modelling for Drug-Drug Interactions
            </h3>
            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
              AI simulates how new compounds might interact with existing medications, flagging potential risks early and improving patient safety.
            </p>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', marginBottom: '1rem', color: '#2a4a7f' }}>
              Clinical Trial Optimisation
            </h3>
            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
              AI identifies ideal trial sites, patient populations, and biomarkers, enhancing trial success rates and reducing costs.
            </p>
          </div>

          {/* Real-World Impact */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            Real-World Impact
          </h2>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '3rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong>AlphaFold (DeepMind):</strong> Solved the protein folding problem, unlocking new opportunities for structure-based drug design.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Insilico Medicine & BenevolentAI:</strong> Use AI to rapidly identify new compounds and repurpose existing drugs.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Pfizer & IBM Watson:</strong> Collaborated to optimize immuno-oncology clinical trials with AI-driven insights.
            </li>
          </ul>

          {/* Business Benefits */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            Business Benefits
          </h2>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '3rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Faster Time-to-Market:</strong> AI can reduce drug development timelines from years to months in some cases.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Cost Savings:</strong> By filtering out poor candidates early, AI helps avoid unnecessary lab work and clinical trials.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Higher Success Rates:</strong> Improved candidate selection leads to higher success rates in early-phase development.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Personalized Medicine:</strong> AI enables more precise targeting and customization of therapies.
            </li>
          </ul>

          {/* Challenges to Address */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            Challenges to Address
          </h2>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '3rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Data Quality:</strong> AI models are only as good as the data they learn from. Incomplete or biased datasets can lead to flawed predictions.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Interpretability:</strong> Regulatory bodies require clear, explainable AI decisions – black-box models pose challenges for approval.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Ethical and Regulatory Concerns:</strong> Ensuring transparency, fairness and patient safety in AI-driven trials is paramount.
            </li>
          </ul>

          {/* The Road Ahead */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            The Road Ahead
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            AI is not replacing scientists but it's empowering them. As models learn from ever-growing biomedical datasets, expect to see:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '3rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>Faster responses to pandemics (as seen during COVID-19)</li>
            <li style={{ marginBottom: '1rem' }}>Accelerated drug repurposing for rare and emerging diseases</li>
            <li style={{ marginBottom: '1rem' }}>Deeper integration of AI in personalized medicine and genomics</li>
          </ul>

          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555' }}>
            AI's ability to accelerate and personalize drug discovery could be life-saving for countless people, dramatically reducing development time, increasing precision, and opening new possibilities for treating previously untreatable diseases.
          </p>

          {/* Conclusion */}
          <div style={{
            marginTop: '3rem',
            padding: 'clamp(20px, 3vw, 32px)',
            background: '#f5f8ff',
            borderRadius: '12px',
            border: '1px solid #e1e8ff'
          }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1rem', color: '#1e3a5c' }}>
              Conclusion
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, color: '#555' }}>
              AI is revolutionizing drug discovery, making the process faster, more efficient, and more precise. By overcoming data and regulatory challenges, the pharmaceutical industry stands on the brink of a new era—where life-saving therapies reach patients at unprecedented speed.
            </p>
            <p style={{ 
              fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
              lineHeight: 1.8, 
              marginTop: '1rem',
              fontStyle: 'italic',
              color: '#1e3a5c'
            }}>
              Let's embrace this transformation because the future of medicine is arriving faster than ever before.
            </p>
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