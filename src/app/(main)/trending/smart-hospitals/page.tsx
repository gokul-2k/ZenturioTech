"use client"
import React from "react";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
export default function WebDevelopmentBreakthroughsHero() {
  const { isMobile, isTablet } = useDeviceDetect();
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
                <span>Smart Hospitals</span><br />
                <span style={{
                  color: '#fff',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: 400,
                  display: 'block',
                  marginTop: '10px'
                }}>How AI Is Transforming Hospital Operations</span>
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
              <img src="/images/smart.jpg" alt="Smart Hospitals" style={{
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
                AI is quietly revolutionizing the way hospitals operate—making care more efficient, responsive, and human-centred than ever before. In today's high-pressure healthcare environment, hospitals face the daily challenge of delivering excellent care amid resource constraints, rising costs, and growing patient demands.
              </p>
            </div>
          </div>
          <div style={{
            maxWidth: '1100px',
            margin: '32px auto 0',
            padding: '0 24px'
          }}>
            <p style={{
              color: '#111',
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              lineHeight: 1.6,
              textAlign: 'justify',
              margin: 0
            }}>
              and growing patient demands. AI is stepping in as a powerful ally, not just automating tasks, but helping hospitals run smarter and more compassionately.
            </p>
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
            }}>How AI Is Transforming Hospital Operations?</h2>
            <ul style={{
              listStyle: 'disc',
              color: '#111',
              textAlign: 'left',
              padding: '0 0 0 20px'
            }}>
              {[
                {
                  title: "Optimising Patient Flow",
                  content: "AI analyses real-time data from emergency rooms, wards, and ICUs to anticipate admissions and discharges. This means beds are allocated dynamically, wait times shrink, and the chaos of overcrowding is replaced with smoother, more predictable care transitions. For patients, this translates to less waiting and a more seamless hospital."
                },
                {
                  title: "Intelligent Staff Scheduling",
                  content: "Gone are the days of manual roster headaches. AI-powered scheduling tools study historical data and predict patient surges, ensuring the right staff are on hand at the right times. This helps prevent burnout, keeps care teams energised, and ensures patients are never left waiting for attention."
                },
                {
                  title: "Smart Resource Allocation",
                  content: "From ICU beds to oxygen tanks, AI forecasts demand by analysing trends and real-time usage. Hospitals can make informed decisions, avoiding shortages and minimising waste so critical resources are always available when needed most."
                },
                {
                  title: "Automating Administrative Tasks",
                  content: "AI-driven automation takes over repetitive chores like billing, insurance claims, and patient registration. This reduces errors, lightens the administrative load, and lets healthcare professionals devote more time to what matters: caring for patients."
                },
                {
                  title: "Predictive Maintenance of Equipment",
                  content: "AI keeps a watchful eye on medical devices, predicting breakdowns before they happen. This proactive approach means essential equipment like ventilators and imaging machines remains operational, reducing downtime and ensuring uninterrupted care."
                },
                {
                  title: "Data-Driven Decision Making",
                  content: "AI sifts through mountains of hospital data, spotting patterns and generating insights. Leaders can make smarter decisions, whether it's launching a new department or identifying gaps in preventive care, all backed by real evidence."
                },
                {
                  title: "Enhancing Patient Safety and Care Quality",
                  content: "AI's ability to catch subtle patterns in patient data leads to earlier interventions and fewer medical errors. For example, AI systems like Sepsis Watch can detect early warning signs of sepsis, enabling faster treatment and saving lives."
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
                    textAlign: 'justify',
                    paddingLeft: isMobile ? '0' : '100px'
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
