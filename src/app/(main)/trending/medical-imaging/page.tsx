"use client"
import React from "react";

export default function ImmersiveTechSolutionsHero() {
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
                <span>AI in Medical Imaging</span><br />
                <span style={{
                  color: '#fff',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: 400,
                  display: 'block',
                  marginTop: '10px'
                }}>The Future of Faster, Smarter Diagnostics</span>
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
              <img src="/images/medical.jpg" alt="Medical Imaging" style={{
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
                Artificial Intelligence is revolutionizing medical imaging by enhancing diagnostic accuracy, reducing analysis time, and enabling early detection of diseases. This transformation is making healthcare more efficient, accessible, and precise than ever before.
              </p>
            </div>
          </div>
        </div>
        {/* Medical Imaging Section */}
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
            }}>How AI is Transforming Medical Imaging</h2>
            <ul style={{
              listStyle: 'disc',
              color: '#111',
              textAlign: 'left',
              padding: '0 0 0 20px'
            }}>
              {[
                {
                  title: "Enhanced Detection and Diagnosis",
                  content: <>
                    AI algorithms excel at identifying abnormalities:
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                      <li>Early cancer detection in mammograms</li>
                      <li>Brain tumor identification in MRIs</li>
                      <li>Lung nodule detection in CT scans</li>
                      <li>Fracture detection in X-rays</li>
                    </ul>
                  </>
                },
                {
                  title: "Workflow Optimization",
                  content: <>
                    AI streamlines radiologists' workflow by:
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                      <li>Prioritizing urgent cases</li>
                      <li>Automating routine measurements</li>
                      <li>Generating preliminary reports</li>
                      <li>Managing image quality control</li>
                    </ul>
                  </>
                },
                {
                  title: "Quantitative Analysis",
                  content: <>
                    AI provides precise measurements for:
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                      <li>Tumor volume and growth tracking</li>
                      <li>Organ size and function assessment</li>
                      <li>Blood flow analysis</li>
                      <li>Tissue density measurements</li>
                    </ul>
                  </>
                },
                {
                  title: "Predictive Analytics",
                  content: "AI algorithms can predict disease progression, treatment response, and patient outcomes by analyzing patterns in imaging data combined with clinical information, enabling more personalized treatment plans."
                },
                {
                  title: "Key Benefits",
                  content: <>
                    <b>Improved Accuracy:</b> Reduced human error and enhanced detection rates<br />
                    <b>Faster Analysis:</b> Significantly reduced image processing time<br />
                    <b>Cost Efficiency:</b> Optimized resource utilization<br />
                    <b>Better Access:</b> Enhanced care delivery in remote areas
                  </>
                },
                {
                  title: "Current Challenges",
                  content: <>
                    <b>Data Quality:</b> Need for standardized, high-quality imaging data<br />
                    <b>Integration:</b> Compatibility with existing healthcare systems<br />
                    <b>Regulatory Compliance:</b> Meeting healthcare regulations<br />
                    <b>Training Requirements:</b> Upskilling healthcare professionals
                  </>
                },
                {
                  title: "Future Developments",
                  content: <>
                    The future of AI in medical imaging promises:
                    <br />• Real-time diagnostic assistance
                    <br />• Multimodal image analysis
                    <br />• Automated follow-up recommendations
                    <br />• Integration with genomic data
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