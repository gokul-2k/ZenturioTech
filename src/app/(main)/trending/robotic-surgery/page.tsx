"use client"
import React from "react";

export default function MobileAppEvolutionHero() {
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
                <span>AI in Robotic Surgery</span><br />
                <span style={{
                  color: '#fff',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: 400,
                  display: 'block',
                  marginTop: '10px'
                }}>Where Precision Meets Intelligence</span>
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
                }}>Content Writer & Medical Technology Analyst</span>
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
              <img src="/images/robosurgery.jpg" alt="Robotic Surgery" style={{
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
                Robotic surgery, enhanced by artificial intelligence, is revolutionizing the medical field by offering unprecedented precision, control, and minimally invasive options. This fusion of robotics and AI is transforming surgical procedures, improving patient outcomes, and expanding the possibilities of modern medicine.
              </p>
            </div>
          </div>
        </div>
        {/* Robotic Surgery Section */}
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
            }}>The Impact of AI in Robotic Surgery</h2>
            <ul style={{
              listStyle: 'disc',
              color: '#111',
              textAlign: 'left',
              padding: '0 0 0 20px'
            }}>
              {[
                {
                  title: "Enhanced Precision and Control",
                  content: <>
                    AI-powered robotic systems provide surgeons with:
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                      <li>3D visualization of surgical sites</li>
                      <li>Real-time motion scaling</li>
                      <li>Tremor filtration</li>
                      <li>Enhanced dexterity in tight spaces</li>
                    </ul>
                  </>
                },
                {
                  title: "Pre-operative Planning",
                  content: <>
                    AI assists surgeons in planning procedures by:
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                      <li>Creating detailed 3D surgical maps</li>
                      <li>Identifying optimal incision points</li>
                      <li>Predicting potential complications</li>
                      <li>Personalizing surgical approaches</li>
                    </ul>
                  </>
                },
                {
                  title: "Intraoperative Guidance",
                  content: <>
                    During surgery, AI provides:
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                      <li>Real-time tissue identification</li>
                      <li>Critical structure alerts</li>
                      <li>Optimal tool path suggestions</li>
                      <li>Automated safety boundaries</li>
                    </ul>
                  </>
                },
                {
                  title: "Training and Simulation",
                  content: "AI-powered simulators provide realistic training environments for surgeons, allowing them to practice complex procedures and improve their skills without risk to patients. The systems can assess performance and provide targeted feedback for improvement."
                },
                {
                  title: "Patient Benefits",
                  content: <>
                    <b>Minimally Invasive:</b> Smaller incisions and faster healing<br />
                    <b>Reduced Pain:</b> Less trauma to surrounding tissues<br />
                    <b>Shorter Recovery:</b> Quicker return to normal activities<br />
                    <b>Better Outcomes:</b> Increased precision leads to improved results
                  </>
                },
                {
                  title: "Current Challenges",
                  content: <>
                    <b>Cost:</b> High initial investment and maintenance expenses<br />
                    <b>Training:</b> Extensive training required for surgical teams<br />
                    <b>Technical Limitations:</b> Ongoing development of haptic feedback<br />
                    <b>Regulatory Compliance:</b> Meeting strict medical device standards
                  </>
                },
                {
                  title: "Future Developments",
                  content: <>
                    The future of AI in robotic surgery promises:
                    <br />• Autonomous surgical assistants
                    <br />• Advanced haptic feedback systems
                    <br />• Remote surgery capabilities
                    <br />• Integration with 5G and cloud computing
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
