'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';

export default function Services() {
  const router = useRouter();
  const pathname = usePathname();

  // Navigate to target path if not already there
  const handleExploreClick = (target: string) => {
    if (pathname !== target) {
      router.push(target);
    }
  };

  return (
    <>
    <div style={{ minHeight: '100vh', width: '100%', background: '#0a2240', paddingTop: 0, margin: 0, marginBottom: -100 }}>
      {/* HERO SECTION */}
      <div style={{
        width: '100%',
        minHeight: 780,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'url("/images/service.webp") center/cover no-repeat',
        backgroundPosition: 'center 0px',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        overflow: 'hidden',
        marginBottom: 0,
        marginTop: -80,
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
          height: 120,
          background: 'linear-gradient(180deg, rgba(10,34,64,0) 0%, #0a2240 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        <h1 style={{
          position: 'relative',
          zIndex: 3,
          color: '#fff',
          fontSize: 68,
          fontWeight: 600,
          textAlign: 'center',
          letterSpacing: 1,
        }}>
          Services
        </h1>
      </div>

      {/* SERVICES CARDS SECTION */}
      <div className="services-cards-section" style={{ width: '100%', padding: '0 64px', marginTop: 110 }}>
        {/* Card 1: AI */}
        <div className="service-card-row" style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 32,
          marginBottom: 48,
          alignItems: 'stretch',
        }}>
          {/* Image with text overlay */}
          <div className="service-card-img" style={{ flex: 1.5, minWidth: 0, maxWidth: '100%', aspectRatio: '16/9', borderRadius: 48, overflow: 'hidden', boxShadow: '0 8px 36px 0 rgba(7,37,73,0.22)', position: 'relative', background: 'transparent' }}>
            <img
              src="/images/ai.webp"
              alt="Artificial Intelligence"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 48, display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              color: '#fff',
              fontWeight: 700,
              fontSize: 32,
              padding: '18px 32px',
              letterSpacing: 0.5,
              zIndex: 2,
              textShadow: '0 2px 8px #000',
            }}>
              Artificial Intelligence
            </div>
          </div>
          {/* Text Card */}
          <div className="service-card-text" style={{
            flex: 2,
            background: 'transparent',
            borderRadius: 40,
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 0 0 48px',
          }}>
            <div style={{ fontSize: 42, fontWeight: 500,fontStyle: 'bold', marginBottom: 16, lineHeight: 1.15, background: 'linear-gradient(90deg, #2ea6ff 0%, #fff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
              <span>AI-Powered Innovation</span><br/>
              <span>for Smarter Business</span>
            </div>
            <div style={{ fontSize: 22, opacity: 0.97, marginBottom: 24, lineHeight: 1.7 , textAlign: 'justify'}}>
              At ZenturioTech, we design and deploy cutting-edge AI solutions that help businesses unlock efficiency, improve decision-making, and create personalized experiences. Whether you're starting with AI or scaling your existing systems, we tailor intelligent technology to meet your specific needs.
            </div>
            <Link
              href="/services/ai"
              aria-label="Explore Artificial Intelligence Services"
              style={{
                background: '#2ea6ff',
                color: '#fff',
                border: 'none',
                borderRadius: 12,
                fontWeight: 400,
                fontSize: 18,
                padding: '0.6rem 1.6rem',
                alignSelf: 'flex-start',
                cursor: 'pointer',
                marginTop: 8,
                boxShadow: '0 3px 12px 0 rgba(25,118,210,0.18)',
                letterSpacing: '0.3px',
                display: 'inline-block',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
                outline: 'none',
                position: 'relative',
                zIndex: 3,
              }}
            >
              Explore More »
            </Link>
          </div>
        </div>

        {/* Divider after Card 1 */}
        <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, margin: '80px 0 80px 0' }} />

        {/* Card 2: VR/AR (mirrored layout) */}
        <div className="service-card-row" style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 32,
          marginBottom: 48,
          alignItems: 'stretch',
        }}>
          {/* Text Card */}
          <div className="service-card-text" style={{
            flex: 2,
            background: 'transparent',
            borderRadius: 40,
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 48px 0 0',
          }}>
            <div style={{ fontSize: 42, fontWeight: 500,fontStyle: 'bold', marginBottom: 16, lineHeight: 1.15, background: 'linear-gradient(90deg, #2ea6ff 0%, #fff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
              <span>Create, Engage & Inspire</span><br/>
              <span>with Immersive Experiences</span>
            </div>
            <div style={{ fontSize: 22, opacity: 0.97, marginBottom: 24, lineHeight: 1.7, textAlign: 'justify' }}>
              At ZenturioTech, we design and deploy cutting-edge AI solutions that help businesses unlock efficiency, improve decision-making. Step into the future with ZenturioTech's Virtual Reality (VR) and Augmented Reality (AR) development services.
            </div>
            <Link
              href="/services/vr"
              aria-label="Explore Virtual Reality Services"
              style={{
                background: '#2ea6ff',
                color: '#fff',
                border: 'none',
                borderRadius: 12,
                fontWeight: 400,
                fontSize: 18,
                padding: '0.6rem 1.6rem',
                alignSelf: 'flex-start',
                cursor: 'pointer',
                marginTop: 8,
                boxShadow: '0 3px 12px 0 rgba(25,118,210,0.18)',
                letterSpacing: '0.3px',
                display: 'inline-block',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
                outline: 'none',
                position: 'relative',
                zIndex: 3,
              }}
            >
              Explore More »
            </Link>
          </div>
          {/* Image with text overlay (right) */}
          <div className="service-card-img" style={{ flex: 1.5, minWidth: 0, maxWidth: '100%', aspectRatio: '16/9', borderRadius: 48, overflow: 'hidden', boxShadow: '0 8px 36px 0 rgba(7,37,73,0.22)', position: 'relative', background: 'transparent' }}>
            <img
              src="/images/vr-hp.webp"
              alt="Augmented Reality & Virtual Reality"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 48, display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              color: '#fff',
              fontWeight: 700,
              fontSize: 32,
              padding: '18px 32px',
              letterSpacing: 0.5,
              zIndex: 2,
              textShadow: '0 2px 8px #000',
            }}>
              Augmented Reality <br/><span style={{ color: '#2ea6ff' }}>& Virtual Reality</span>
            </div>
          </div>
        </div>

        {/* Divider after Card 2 */}
        <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, margin: '80px 0 80px 0' }} />

        {/* Card 3: Web Development */}
        <div className="service-card-row" style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 32,
          marginBottom: 48,
          alignItems: 'stretch',
        }}>
          {/* Image with text overlay */}
          <div className="service-card-img" style={{ flex: 1.5, minWidth: 0, maxWidth: '100%', aspectRatio: '16/9', borderRadius: 48, overflow: 'hidden', boxShadow: '0 8px 36px 0 rgba(7,37,73,0.22)', position: 'relative', background: 'transparent' }}>
            <img
              src="/images/web-des.webp"
              alt="Web Development"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 48, display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              color: '#fff',
              fontWeight: 700,
              fontSize: 32,
              padding: '18px 32px',
              letterSpacing: 0.5,
              zIndex: 2,
              textShadow: '0 2px 8px #000',
            }}>
              Web Development
            </div>
          </div>
          {/* Text Card */}
          <div className="service-card-text" style={{
            flex: 2,
            background: 'transparent',
            borderRadius: 40,
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 48px 0 0',
          }}>
            <div style={{ fontSize: 42, fontWeight: 500,fontStyle: 'bold', marginBottom: 16, lineHeight: 1.15, background: 'linear-gradient(90deg, #2ea6ff 0%, #fff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
              <span>Modern Web Solutions</span><br/>
              <span>for Every Business</span>
            </div>
            <div style={{ fontSize: 22, opacity: 0.97, marginBottom: 24, lineHeight: 1.7 , textAlign: 'justify' }}>
              ZenturioTech crafts high-performance, scalable, and visually stunning web applications tailored to your business needs. From landing pages to complex platforms, our web development team ensures seamless user experiences and robust functionality.
            </div>
            <Link
              href="/services/web"
              aria-label="Explore Web Development Services"
              style={{
                background: '#2ea6ff',
                color: '#fff',
                border: 'none',
                borderRadius: 12,
                fontWeight: 400,
                fontSize: 18,
                padding: '0.6rem 1.6rem',
                alignSelf: 'flex-start',
                cursor: 'pointer',
                marginTop: 8,
                boxShadow: '0 3px 12px 0 rgba(25,118,210,0.18)',
                letterSpacing: '0.3px',
                display: 'inline-block',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
                outline: 'none',
                position: 'relative',
                zIndex: 3,
              }}
            >
              Explore More »
            </Link>
          </div>
        </div>

        {/* Divider after Card 3 */}
        <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, margin: '80px 0 80px 0' }} />
      </div>
    </div>
    <style>{`
      .explore-more-btn {
        background: #2ea6ff;
        color: #fff;
        border: none;
        border-radius: 12px;
        font-weight: 400;
        font-size: 18px;
        padding: 0.6rem 1.6rem;
        align-self: flex-start;
        cursor: pointer;
        margin-top: 8px;
        box-shadow: 0 3px 12px 0 rgba(25,118,210,0.18);
        letter-spacing: 0.3px;
        display: inline-block;
        text-decoration: none;
        transition: background 0.2s, transform 0.2s;
        outline: none;
      }
      .explore-more-btn:hover, .explore-more-btn:focus {
        background: #1976d2;
        transform: scale(1.06);
      }
      .services-cards-section {
        padding-left: 128px !important;
        padding-right: 128px !important;
      }
      @media (max-width: 1200px) {
        .service-card-img {
          aspect-ratio: 16/9 !important;
          border-radius: 32px !important;
        }
        .service-card-text {
          padding: 0 0 0 24px !important;
        }
        .services-cards-section {
          padding-left: 16px !important;
          padding-right: 16px !important;
        }
      }
      @media (max-width: 900px) {
        .service-card-row {
          flex-direction: column !important;
          gap: 0 !important;
        }
        .service-card-img {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          aspect-ratio: 16/9 !important;
          border-radius: 24px !important;
        }
        .service-card-text {
          padding: 24px 0 0 0 !important;
          border-radius: 0 0 24px 24px !important;
        }
      }
      @media (max-width: 700px) {
        .services-cards-section {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
      }
    `}</style>
    </>
  );
}