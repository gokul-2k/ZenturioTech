'use client';
import Image from 'next/image';
import React from 'react';
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

const services = [
  {
    title: 'Mobile App Development',
    subtitle: '(iOS & Android)',
    description: 'Native and cross-platform apps built for performance.'
  },
  {
    title: 'Progressive Web Apps (PWAs)',
    description: 'Responsive, lightweight web apps that work across all devices'
  },
  {
    title: 'Custom Web Applications',
    description: 'Tailored portals, dashboards, and platforms that scale with your needs.'
  },
  {
    title: 'UI/UX Design & Prototyping',
    description: 'Engaging interfaces designed for usability and conversion.'
  }
];

const developmentSections = [
  {
    title: 'Webflow Development',
    description: 'Get modern, responsive, and lightning-fast websites using Webflow — ideal for businesses that value design freedom and CMS flexibility.',
    features: [
      'Pixel-perfect design implementation',
      'Custom animations & interactions',
      'CMS for dynamic content',
      'Fast, secure, and SEO-ready',
      'No-code handover for marketing teams',
    ],
    image: '/images/web1.jpeg'
  },
  {
    title: 'WordPress Development',
    description: 'Power your business with custom WordPress websites — the world\'s most popular CMS platform.',
    features: [
      'Custom theme development',
      'WooCommerce integration',
      'SEO optimization & plugin setup',
      'Blog and content management system',
      'Easy backend management',
    ],
    image: '/images/web.webp'
  },
  {
    title: 'Custom-Coded Websites',
    description: 'For businesses with unique needs or complex functionality, we offer fully custom-coded websites using the latest frameworks and technologies.',
    features: [
      'HTML5, CSS3, JavaScript, Bootstrap',
      'React.js / Next.js web apps',
      'API integration & backend development',
      'Optimized for speed and scalability',
      'Highly flexible UI/UX',
    ],
    image: '/images/web2.jpeg'
  }
];

export default function WebServicePage() {
  const { isMobile, isTablet } = useDeviceDetect();
  
  return (
    <main style={{
      width: '100%',
      minHeight: '100vh',
      background: '#0a2240',
      color: '#fff',
      overflowX: 'hidden',
      fontFamily: 'Poppins, sans-serif',
      position: 'relative',
      marginTop: -70,
    }}>
      {/* Hero Section with Background */}
      <div style={{
        width: '100%',
        minHeight: 780,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Background Image */}
        <Image
          src="/images/webbg.jpeg"
          alt="VR Hero"
          fill
          style={{ 
            objectFit: 'cover',
            objectPosition: '50% 0',
            opacity: 0.45
          }}
          priority
        />
        
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '40%',
          background: 'linear-gradient(180deg, rgba(10,34,64,0) 0%, #102c4c 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        {/* Main Heading */}
        <h1 style={{
          position: 'relative',
          zIndex: 3,
          color: '#fff',
          fontSize: isMobile ? 32 : isTablet ? 48 : 68,
          fontWeight: 600,
          textAlign: 'center',
          letterSpacing: 1,
          marginTop: -30
        }}>
          Web & Mobile App Development
        </h1>
      </div>

      {/* Services Section */}
      <section style={{
        maxWidth: isTablet ? 800 : 1200,
        margin: '0 auto',
        padding: '60px 20px',
        marginTop: isMobile ? -80 : 80,
        position: 'relative',
        zIndex: 4
      }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'flex-start',
          gap: isMobile ? '30px' : '48px'
        }}>
          {/* Character Container */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobile ? '240px' : '340px',
            height: isMobile ? '340px' : '420px',
            order: isMobile ? 1 : 0
          }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              bottom: isMobile ? '30px' : 0,
              width: isMobile ? '180px' : '280px',
              height: isMobile ? '140px' : '200px',
              background: '#b3cfff',
              borderRadius: isMobile ? '30px' : '80px',
              boxShadow: '0 4px 24px 0 rgba(179,207,255,0.25)',
              transform: 'translateX(-50%)',
              zIndex: 1
            }} />
            <img
              src="/images/fullboy.png"
              alt="3D Boy with Tablet"
              style={{
                position: 'relative',
                width: isMobile ? '180px' : '260px',
                height: isMobile ? '340px' : '500px',
                objectFit: isMobile ? 'contain' : 'cover',
                zIndex: 2
              }}
            />
          </div>

          {/* Services List */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: isMobile ? '100%' : 700,
            gap: isMobile ? '30px' : '40px',
            order: isMobile ? 2 : 0
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                textAlign: isMobile ? 'center' : 'left'
              }}>
                <span style={{
                  display: 'block',
                  fontSize: isMobile ? '22px' : '32px',
                  color: '#8cb6f7',
                  fontWeight: 700,
                  marginBottom: '2px'
                }}>
                  {service.title}
                  {service.subtitle && (
                    <span style={{
                      fontSize: isMobile ? '18px' : '22px',
                      color: '#a9b8c9',
                      fontWeight: 400
                    }}> {service.subtitle}</span>
                  )}
                </span>
                <span style={{
                  display: 'block',
                  fontSize: isMobile ? '16px' : '24px',
                  color: '#fff',
                  marginTop: '8px',
                  padding: isMobile ? '0 10px' : 0
                }}>
                  {service.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Sections */}
      <section style={{
        maxWidth: isTablet ? 800 : 1200,
        margin: '0 auto',
        padding: isMobile ? '24px 16px' : '32px 0 48px'
      }}>
        {developmentSections.map((section, index) => (
          <div key={index} style={{
            width: '100%',
            marginBottom: 40
          }}>
            {/* Section Title */}
            <div style={{
              width: isMobile ? '100%' : '80%',
              maxWidth: 900,
              margin: '0 auto 32px',
              background: '#0a2240',
              borderRadius: 32,
              padding: isMobile ? '14px 0' : '18px 0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <h2 style={{
                color: '#a9c8ff',
                fontSize: isMobile ? '24px' : '36px',
                fontWeight: 600,
                textAlign: 'center',
                margin: 0,
                letterSpacing: 1
              }}>
                {section.title}
              </h2>
            </div>

            {/* Section Card */}
            <div style={{
              width: isMobile ? '100%' : '80%',
              maxWidth: 900,
              background: '#0a2240',
              borderRadius: 32,
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              padding: isMobile ? '24px' : '40px',
              gap: isMobile ? '24px' : '40px',
              margin: '0 auto'
            }}>
              {/* Image */}
              <div style={{
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '260px' : '320px',
                height: isMobile ? '260px' : '320px',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: '0 4px 24px 0 #b3cfff',
                border: '4px solid #b3cfff',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image
                  src={section.image}
                  alt={`${section.title} Screenshot`}
                  width={300}
                  height={300}
                  style={{
                    borderRadius: 20,
                    width: isMobile ? '220px' : '300px',
                    height: isMobile ? '220px' : '300px',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Content */}
              <div style={{
                flex: 1,
                color: '#fff',
                textAlign: isMobile ? 'center' : 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '16px' : '18px'
              }}>
                <p style={{
                  fontSize: isMobile ? '16px' : '22px',
                  lineHeight: 1.5,
                  marginBottom: isMobile ? '16px' : '8px',
                  color: '#e0eaff'
                }}>
                  {section.description}
                </p>
                <ul style={{
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  alignItems: isMobile ? 'flex-start' : 'flex-start',
                  width: '100%',
                  maxWidth: isMobile ? '280px' : 'none',
                  marginLeft: isMobile ? 'auto' : 0,
                  marginRight: isMobile ? 'auto' : 0
                }}>
                  {section.features.map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: isMobile ? '15px' : '20px',
                      color: '#e0eaff',
                      fontWeight: 400,
                      gap: isMobile ? '12px' : '16px',
                      textAlign: 'left'
                    }}>
                      <span style={{
                        display: 'inline-block',
                        width: isMobile ? '12px' : '18px',
                        height: isMobile ? '12px' : '18px',
                        minWidth: isMobile ? '12px' : '18px',
                        borderRadius: '50%',
                        background: '#a9c8ff',
                        marginRight: isMobile ? '12px' : '16px',
                        boxShadow: '0 2px 8px 0 #a9c8ff55',
                        flexShrink: 0
                      }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
} 