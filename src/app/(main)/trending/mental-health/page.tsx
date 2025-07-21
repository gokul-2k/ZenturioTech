"use client"
import React from "react";

export default function AiDrivenInnovationsHero() {
  return (
    <div>
      {/* Hero Section with background image and heading */}
      <div style={{
        minHeight: '620px',
        width: '100%',
        background: 'url(\'/images/blogbg.jpeg\') center/cover no-repeat, #14325a',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        top: -70,
        marginBottom: -70
      }}>
        <div style={{
          width: '100%',
          minHeight: '620px',
          background: 'rgba(19, 46, 85, 0.82)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          position: 'relative'
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
                <span>AI In Mental Health</span><br />
                <span style={{
                  color: '#fff',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: 400,
                  display: 'block',
                  marginTop: '10px'
                }}>A Silent Revolution in Emotional Well-being</span>
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
                }}>Content Writer & Research Psychologist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content Section below hero */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        background: '#fff',
        marginTop: '0px',
        paddingTop: '0px',
        marginBottom: '-70px'
      }}>
        <div style={{ width: '100%', background: '#fff', padding: '0' }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '32px',
            padding: '0 24px',
            position: 'relative',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: '#14325a',
              borderRadius: '2rem',
              boxShadow: '0 8px 40px 0 rgba(7, 37, 73, 0.28), 0 0 0 3px #fff',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              maxWidth: '400px',
              border: '2.5px solid #fff',
              position: 'relative',
              top: '-40px',
              aspectRatio: '16/9',
              margin: '0 auto'
            }}>
              <img src="/images/mental.jpg" alt="Smart Hospitals" style={{
                width: '100%',
                height: '100%',
                borderRadius: '2rem',
                objectFit: 'cover'
              }} />
            </div>
            <div style={{
              flex: '1 1 300px',
              display: 'flex',
              alignItems: 'center',
              margin: '0 auto'
            }}>
              <p style={{
                color: '#111',
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                lineHeight: 1.6,
                background: 'none',
                padding: '0',
                textAlign: 'justify',
                width: '100%',
                marginTop: '0'
              }}>
                Mental health has long suffered from underdiagnosis, stigma and limited access to care. Today Artificial Intelligence is playing a transformative role in breaking barriers, enhancing early detection and delivering personalised support and all while maintaining scalability and privacy.
              </p>
            </div>
          </div>
        </div>
        {/* AI Transformation Section */}
        <div style={{ width: '100%', background: '#fff', padding: '20px 24px 48px', margin: '0' }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 clamp(24px, 8vw, 0px)'
          }}>
            <h2 style={{
              color: '#111',
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 600,
              marginBottom: '24px',
              textAlign: 'left'
            }}>How AI Is Enhancing Mental Healthcare</h2>
            <ul style={{
              listStyle: 'disc',
              color: '#111',
              textAlign: 'left',
              padding: '0 0 0 20px'
            }}>
              {[
                {
                  title: "Early Detection through Behaviour Analysis",
                  content: <>
                    AI models can analyse speech patterns, facial expressions, typing speed and even social media activity to identify early signs of:
                    <br /><b>Depression</b>, <b>Anxiety</b>, <b>Bipolar disorder</b>, <b>PTSD</b>
                    <br />This enables proactive interventions before conditions escalate.
                  </>
                },
                {
                  title: "Virtual Therapists and Chatbots",
                  content: <>
                    AI-powered chatbots like Wysa, Woebot and Tess offer real-time emotional support, helping users cope with stress, loneliness and negative thought patterns. While not a replacement for human therapists, they:
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                      <li>Provide 24/7 accessibility</li>
                      <li>Reduce stigma by allowing anonymous interaction</li>
                      <li>Offer CBT-based guidance tailored to user needs</li>
                    </ul>
                  </>
                },
                {
                  title: "Personalized Therapy Recommendations",
                  content: <>
                    AI can analyze user data and therapy progress to suggest:
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                      <li>Most effective therapy types (e.g., CBT, DBT)</li>
                      <li>Session frequency and format (in-person, virtual)</li>
                      <li>Medication adjustments (in collaboration with clinicians)</li>
                    </ul>
                  </>
                },
                {
                  title: "Monitoring Mood and Progress Over Time",
                  content: "Wearables and mobile apps using AI can passively track sleep, heart rate and activity levels—all important indicators of mental health. This allows therapists and caregivers to monitor trends and adjust care plans in real time."
                },
                {
                  title: "Why It Matters",
                  content: <>
                    <b>Accessibility:</b> AI tools offer mental health support in rural or underserved areas<br />
                    <b>Affordability:</b> Scalable solutions make therapy more cost-effective<br />
                    <b>Privacy:</b> Secure, anonymised systems reduce the fear of judgment or disclosure<br />
                    <b>Timeliness:</b> Instant support in crises can save lives
                  </>
                },
                {
                  title: "Challenges to Address",
                  content: <>
                    <b>Data Sensitivity:</b> Mental health data is deeply personal and must be protected<br />
                    <b>Algorithmic Bias:</b> Diverse datasets are essential to avoid cultural or demographic misdiagnosis<br />
                    <b>Human Oversight:</b> AI can support but not fully replace human therapists, especially in complex or high-risk cases
                  </>
                },
                {
                  title: "The Future of AI in Mental Health",
                  content: <>
                    Emotion AI will become more advanced in understanding nuanced human emotions.<br />
                    Integrations with wearables will provide holistic views of physical and mental wellness.<br />
                    AI-coach hybrids may offer continuity between therapy sessions, reinforcing long-term behavioural changes.<br />
                    AI is not just changing how we treat mental health. It's changing how we talk about it, reach out for help, and build resilient minds in the digital age.
                  </>
                }
              ].map((item, index) => (
                <li key={index} style={{ 
                  marginBottom: '24px',
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)'
                }}>
                  <span style={{ 
                    fontWeight: 600,
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                    display: 'block',
                    marginBottom: '12px'
                  }}>{item.title}</span>
                  <p style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                    color: '#111',
                    margin: '0',
                    lineHeight: 1.6,
                    textAlign: 'justify'
                  }}>
                    {item.content}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}