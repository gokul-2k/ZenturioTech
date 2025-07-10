"use client";
import Image from 'next/image';
import React from 'react';

export default function WebServicePage() {
  // Add responsive state management with new breakpoint
  const [isMobile, setIsMobile] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);

  React.useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallScreen(window.innerWidth <= 815);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <main style={{ 
      width: '100%', 
      minHeight: '100vh', 
      background: '#0a192f',
      color: '#fff', 
      overflowX: 'hidden', 
      fontFamily: 'Poppins, sans-serif', 
      position: 'relative', 
      marginTop: -70,
      marginBottom: -120
    }}>
      {/* HERO SECTION */}
      <div style={{
        width: '100%',
        minHeight: isSmallScreen ? 580 : 780,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'url("/images/services.webp") center/cover no-repeat',
        backgroundPosition: 'center 0px',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        overflow: 'hidden',
        marginBottom: 0,
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(10,34,64,0.65)',
          zIndex: 1,
        }} />
        {/* Bottom Blur Gradient */}
        <div style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: 180,
          background: 'linear-gradient(180deg, rgba(10,25,47,0) 0%, #0a192f 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        <h1 style={{
          position: 'relative',
          zIndex: 3,
          color: '#fff',
          fontSize: isSmallScreen ? 36 : 60,
          fontWeight: 400,
          textAlign: 'left',
          letterSpacing: 1,
          width: '80%',
          maxWidth: 1200,
          marginLeft: isSmallScreen ? '5%' : '8%',
          paddingTop: isSmallScreen ? 100 : 0
        }}>
          Web & Mobile App<br /> Development
        </h1>
      </div>

      {/* New Hero Content Section */}
      <section style={{
        background: '#0a192f', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        paddingTop: isSmallScreen ? 40 : 80, 
        paddingBottom: isSmallScreen ? 40 : 80
      }}>
        <div style={{ 
          width: isSmallScreen ? '92%' : '80%', 
          maxWidth: 1200, 
          display: 'flex', 
          flexDirection: isSmallScreen ? 'column' : 'row', 
          alignItems: isSmallScreen ? 'center' : 'flex-start',
          justifyContent: 'space-between', 
          gap: isSmallScreen ? 32 : 40 
        }}>
          {/* Left: Character and blue box */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            flex: isSmallScreen ? 'none' : '0 0 340px',
            position: 'relative', 
            zIndex: 2,
            marginBottom: isSmallScreen ? 20 : 0
          }}>
            <div style={{ position: 'relative', zIndex: 2, marginBottom: 0 }}>
              <Image
                src="/images/boy.webp"
                alt="3D Boy with Tablet"
                width={isSmallScreen ? 200 : 260}
                height={isSmallScreen ? 200 : 260}
                style={{ borderRadius: 40, display: 'block' }}
                priority
              />
            </div>
            {/* Light blue box under image */}
            <div style={{
              width: isSmallScreen ? 180 : 240,
              height: isSmallScreen ? 60 : 90,
              background: 'linear-gradient(90deg, #b3cfff 0%, #e0eaff 100%)',
              borderRadius: isSmallScreen ? 24 : 36,
              marginTop: -28,
              zIndex: 1,
              boxShadow: '0 4px 24px 0 rgba(179,207,255,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              color: '#0a2240',
              fontSize: isSmallScreen ? 16 : 22,
              letterSpacing: 1,
              border: '2px solid #e0eaff',
            }}>
              Web & Mobile
            </div>
          </div>

          {/* Right: Hero Text */}
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: isSmallScreen ? 'center' : 'flex-start', 
            justifyContent: 'center', 
            gap: isSmallScreen ? 20 : 32, 
            minWidth: isSmallScreen ? 'auto' : 340, 
            zIndex: 2, 
            paddingTop: isSmallScreen ? 0 : 100,
            textAlign: isSmallScreen ? 'center' : 'left'
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: isSmallScreen ? 24 : 24, 
              width: '100%' 
            }}>
              {[
                {
                  title: 'Mobile App Development',
                  subtitle: '(iOS & Android)',
                  desc: 'Native and cross-platform apps built for performance.'
                },
                {
                  title: 'Progressive Web Apps (PWAs)',
                  desc: 'Responsive, lightweight web apps that work across all devices'
                },
                {
                  title: 'Custom Web Applications',
                  desc: 'Tailored portals, dashboards, and platforms that scale with your needs.'
                },
                {
                  title: 'UI/UX Design & Prototyping',
                  desc: 'Engaging interfaces designed for usability and conversion.'
                }
              ].map((item, idx) => (
                <div key={idx}>
                  <span style={{ 
                    fontWeight: 500, 
                    fontSize: isSmallScreen ? 24 : 38, 
                    color: '#a9c8ff', 
                    display: 'block', 
                    marginBottom: isSmallScreen ? 4 : 2,
                    lineHeight: isSmallScreen ? 1.3 : 'normal'
                  }}>
                    {item.title} 
                    {item.subtitle && <span style={{ fontSize: isSmallScreen ? 13 : 15, color: '#b3cfff' }}>{item.subtitle}</span>}
                  </span>
                  <span style={{ 
                    fontSize: isSmallScreen ? 16 : 28, 
                    color: '#e0eaff', 
                    display: 'block', 
                    marginTop: isSmallScreen ? 4 : 2,
                    lineHeight: isSmallScreen ? 1.5 : 'normal'
                  }}>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Webflow Development Section - Redesigned */}
      <section style={{background: '#0a192f', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 0, paddingTop: 120, paddingBottom: 50}}>
        {/* Section Title */}
        <div style={{
          width: '80%',
          maxWidth: 900,
          margin: '0 auto 32px auto',
          background: 'rgba(24,50,90,0.25)',
          borderRadius: 32,
          padding: '18px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h2 style={{
            color: '#a9c8ff',
            fontSize: 36,
            fontWeight: 400,
            textAlign: 'center',
            margin: 0,
            letterSpacing: 1,
          }}>
            Webflow Development
          </h2>
        </div>
        {/* Card/Box */}
        <div style={{
          width: '80%',
          maxWidth: 900,
          background: 'transparent',
          borderRadius: 32,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 40,
          gap: 40,
          backdropFilter: 'blur(12px)',
        }}>
          {/* Image left */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              position: 'relative',
              width: 320,
              height: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* Background layer for displacement effect */}
              <div style={{
                position: 'absolute',
                top: 12,
                left: -12,
                width: '100%',
                height: '100%',
                background: '#a9c8ff',
                borderRadius: 64,
                opacity: 0.3,
              }} />
              <Image
                src="/images/web-des.webp"
                alt="Webflow Screenshot"
                width={300}
                height={300}
                style={{ 
                  borderRadius: 20, 
                  width: 300, 
                  height: 300, 
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 1,
                  background: '#fff',
                }}
              />
            </div>
          </div>
          {/* Content right */}
          <div style={{ flex: 1, color: '#fff', fontSize: 22, display: 'flex', flexDirection: 'column', gap: 18, minWidth: 320 }}>
            <p style={{ fontSize: 22, lineHeight: 1.5, marginBottom: 8, color: '#e0eaff' }}>
              Get modern, responsive, and lightning-fast websites using Webflow — ideal for businesses that value design freedom and CMS flexibility.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Pixel-perfect design implementation',
                'Custom animations & interactions',
                'CMS for dynamic content',
                'Fast, secure, and SEO-ready',
                'No-code handover for marketing teams',
              ].map((text, idx) => (
                <li key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  fontSize: isMobile ? 16 : 20, 
                  color: '#e0eaff', 
                  fontWeight: 400,
                  lineHeight: 1.5
                }}>
                  <span style={{
                    flexShrink: 0,
                    display: 'block',
                    width: 16,
                    height: 16,
                    borderRadius: '100%',
                    background: '#a9c8ff',
                    marginRight: 16,
                    marginTop: 8,
                    boxShadow: '0 2px 8px 0 #a9c8ff55',
                  }} />
                  <span style={{
                    flex: 1,
                  }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WordPress Development Section - Redesigned */}
      <section style={{background: '#0a192f', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 32, paddingBottom: 48 }}>
        {/* Section Title */}
        <div style={{
          width: '80%',
          maxWidth: 900,
          margin: '0 auto 32px auto',
          background: 'rgba(24,50,90,0.25)',
          borderRadius: 32,
          padding: '18px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h2 style={{
            color: '#a9c8ff',
            fontSize: 36,
            fontWeight: 400,
            textAlign: 'center',
            margin: 0,
            letterSpacing: 1,
          }}>
            WordPress Development
          </h2>
        </div>
        {/* Card/Box */}
        <div style={{
          width: '80%',
          maxWidth: 900,
          background: 'transparent',
          borderRadius: 32,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 40,
          gap: 40,
          backdropFilter: 'blur(12px)',
        }}>
          {/* Content left */}
          <div style={{ flex: 1, color: '#fff', fontSize: 22, display: 'flex', flexDirection: 'column', gap: 18, minWidth: 320 }}>
            <p style={{ fontSize: 22, lineHeight: 1.5, marginBottom: 8, color: '#e0eaff' }}>
              Power your business with custom WordPress websites — the world's most popular CMS platform.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Custom theme development',
                'WooCommerce integration',
                'SEO optimization & plugin setup',
                'Blog and content management systemEasy backend management',
              ].map((text, idx) => (
                <li key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  fontSize: isMobile ? 16 : 20, 
                  color: '#e0eaff', 
                  fontWeight: 400,
                  lineHeight: 1.5
                }}>
                  <span style={{
                    flexShrink: 0,
                    display: 'block',
                    width: 16,
                    height: 16,
                    borderRadius: '100%',
                    background: '#a9c8ff',
                    marginRight: 16,
                    marginTop: 8,
                    boxShadow: '0 2px 8px 0 #a9c8ff55',
                  }} />
                  <span style={{
                    flex: 1,
                  }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Image right */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              position: 'relative',
              width: 320,
              height: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* Background layer for displacement effect */}
              <div style={{
                position: 'absolute',
                top: 12,
                left: -12,
                width: '100%',
                height: '100%',
                background: '#a9c8ff',
                borderRadius: 64,
                opacity: 0.3,
              }} />
              <Image
                src="/images/web.webp"
                alt="WordPress Screenshot"
                width={300}
                height={300}
                style={{ 
                  borderRadius: 20, 
                  width: 300, 
                  height: 300, 
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 1,
                  background: '#fff',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom-Coded Websites Section - Redesigned */}
      <section style={{background: '#0a192f', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40, paddingTop: 32, paddingBottom: 48 }}>
        {/* Section Title */}
        <div style={{
          width: '80%',
          maxWidth: 900,
          margin: '0 auto 32px auto',
          background: 'rgba(24,50,90,0.25)',
          borderRadius: 32,
          padding: '18px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h2 style={{
            color: '#a9c8ff',
            fontSize: 36,
            fontWeight: 400,
            textAlign: 'center',
            margin: 0,
            letterSpacing: 1,
          }}>
            Custom-Coded Websites
          </h2>
        </div>
        {/* Card/Box */}
        <div style={{
          width: '80%',
          maxWidth: 900,
          background: 'transparent',
          borderRadius: 32,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 40,
          gap: 40,
          backdropFilter: 'blur(12px)',
        }}>
          {/* Image left */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              position: 'relative',
              width: 320,
              height: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* Background layer for displacement effect */}
              <div style={{
                position: 'absolute',
                top: 12,
                left: -12,
                width: '100%',
                height: '100%',
                background: '#a9c8ff',
                borderRadius: 64,
                opacity: 0.3,
              }} />
              <Image
                src="/images/web-des.webp"
                alt="Custom Code Screenshot"
                width={300}
                height={300}
                style={{ 
                  borderRadius: 20, 
                  width: 300, 
                  height: 300, 
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 1,
                  background: '#fff',
                }}
              />
            </div>
          </div>
          {/* Content right */}
          <div style={{ flex: 1, color: '#fff', fontSize: 22, display: 'flex', flexDirection: 'column', gap: 18, minWidth: 320 }}>
            <p style={{ fontSize: 22, lineHeight: 1.5, marginBottom: 8, color: '#e0eaff' }}>
              For businesses with unique needs or complex functionality, we offer fully custom-coded websites using the latest frameworks and technologies.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'HTML5, CSS3, JavaScript, Bootstrap',
                'React.js / Next.js web apps',
                'API integration & backend development',
                'Optimized for speed and scalability',
                'Highly flexible UI/UX',
              ].map((text, idx) => (
                <li key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  fontSize: isMobile ? 16 : 20, 
                  color: '#e0eaff', 
                  fontWeight: 400,
                  lineHeight: 1.5
                }}>
                  <span style={{
                    flexShrink: 0,
                    display: 'block',
                    width: 16,
                    height: 16,
                    borderRadius: '100%',
                    background: '#a9c8ff',
                    marginRight: 16,
                    marginTop: 8,
                    boxShadow: '0 2px 8px 0 #a9c8ff55',
                  }} />
                  <span style={{
                    flex: 1,
                  }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 