"use client"
import React from "react";

export default function AiEducationPage() {
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
                <span>The Future of Learning</span><br />
                <span style={{
                  color: '#fff',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: 400,
                  display: 'block',
                  marginTop: '10px'
                }}>How Artificial Intelligence is Transforming Education</span>
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
                }}>Content Writer & Education Technology Analyst</span>
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
            Artificial Intelligence (AI) is no longer just a futuristic buzzword in education—it's actively reshaping how we teach, learn, and connect. From personalised learning experiences to streamlined administrative tasks, AI is making education more accessible, efficient and engaging for everyone involved.
          </p>

          {/* Personalized Learning at Scale */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c', marginTop: '3rem' }}>
            Personalised Learning at Scale
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            Every learner is unique, and traditional education often struggles to meet individual needs. AI bridges this gap by delivering tailored content and real-time recommendations based on each student's progress and preferences:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>Adaptive learning platforms dynamically adjust question difficulty and content based on student responses.</li>
            <li style={{ marginBottom: '1rem' }}>AI-powered tutors provide targeted support, simulating a 1-on-1 learning experience.</li>
            <li style={{ marginBottom: '1rem' }}>Learning analytics empower educators to quickly identify gaps and intervene early.</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555' }}>
            This level of hyper-personalisation increases engagement, boosts retention, and fosters a more inclusive environment where every student can thrive.
          </p>

          {/* Natural Language Processing */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            Natural Language Processing (NLP) for Smarter Communication
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            Natural Language Processing (NLP) is revolutionising how students and educators interact:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>AI chatbots deliver instant answers to questions about assignments, schedules and more.</li>
            <li style={{ marginBottom: '1rem' }}>Automated grading tools accelerate feedback for objective and even short-answer questions.</li>
            <li style={{ marginBottom: '1rem' }}>NLP-driven writing assistants help students improve grammar, clarity and tone in real time.</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555' }}>
            NLP is especially transformative for language learning, offering real-time translations, pronunciation feedback, and culturally relevant guidance.
          </p>

          {/* Enhancing Accessibility */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            Enhancing Accessibility and Inclusivity
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            AI is breaking down barriers for learners with disabilities or language challenges:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>Speech-to-text tools support students with hearing impairments.</li>
            <li style={{ marginBottom: '1rem' }}>Text-to-speech applications assist visually impaired learners.</li>
            <li style={{ marginBottom: '1rem' }}>Real-time translation and multilingual support make content accessible to non-native speakers.</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555' }}>
            These innovations ensure that education is equitable and accessible, regardless of physical or linguistic limitations.
          </p>

          {/* Administrative Work */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            Streamlining Administrative Work for Educators
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            AI is freeing educators from repetitive administrative tasks, allowing them to focus on what matters most—teaching and mentorship:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>Automation of attendance, exam scheduling, and grading.</li>
            <li style={{ marginBottom: '1rem' }}>Organization of student records and generation of performance analytics.</li>
            <li style={{ marginBottom: '1rem' }}>Data-driven insights to refine curricula and improve student outcomes.</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555' }}>
            This shift enhances the overall quality of education by giving teachers more time for meaningful engagement with students.
          </p>

          {/* Data-Driven Decision Making */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            Data-Driven Decision Making
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            AI-powered analytics are driving smarter decisions at every level:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>Identifying courses with high dropout rates and understanding the causes.</li>
            <li style={{ marginBottom: '1rem' }}>Tracking long-term student outcomes to continually refine academic programs.</li>
            <li style={{ marginBottom: '1rem' }}>Forecasting resource needs for staffing, classroom management and student services.</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555' }}>
            Data is now the backbone of strategic planning in modern education.
          </p>

          {/* What Lies Ahead */}
          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '1.5rem', color: '#1e3a5c' }}>
            What Lies Ahead?
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: '#555' }}>
            The future of AI in education is filled with promise:
          </p>
          <ul style={{ 
            fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            color: '#555',
            paddingLeft: 'clamp(20px, 2vw, 24px)'
          }}>
            <li style={{ marginBottom: '1rem' }}>Immersive learning through AI-powered Virtual and Augmented Reality.</li>
            <li style={{ marginBottom: '1rem' }}>AI teaching assistants facilitating group discussions and peer learning.</li>
            <li style={{ marginBottom: '1rem' }}>Predictive models to identify at-risk students and provide proactive support.</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, marginBottom: '2rem', color: '#555' }}>
            As AI continues to evolve, ethical use, data privacy and human oversight will be critical to ensuring positive outcomes.
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
              Final Thought
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', lineHeight: 1.8, color: '#555' }}>
              AI in education isn't about replacing teachers—it's about empowering them with better tools and deeper insights. The goal is a learner-centric ecosystem where every student has the opportunity to succeed.
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