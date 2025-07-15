"use client";

import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Logo,
  Line,
  LetterFx,
  RevealFx,
} from "@once-ui-system/core";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Video Background - positioned absolutely behind content, starts under header */}
      <div style={{
        position: 'absolute',
        top: '-110px', // Adjust this value based on your header height
        left: 0,
        width: '100vw',
        height: 'calc(100vh - 80px)', // Subtract header height from total height
        zIndex: 0,
        overflow: 'hidden',
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100vw',
            height: 'calc(100vh - 80px)', // Match the container height
            objectFit: 'cover',
            display: 'block',
            filter: 'brightness(0.85) saturate(1.1)',
          }}
          id="hero-bg-video"
        >
          <source src="/videos/bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Navy Blue Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(25, 57, 99, 0.4)', // Navy blue with 60% opacity
          zIndex: 1,
          pointerEvents: 'none',
        }}></div>

        {/* Arch-like blurred overlay at bottom for smooth transition */}
        <div style={{
          position: 'absolute',
          bottom: -5,
          left: 0,
          width: '100%',
          height: '150px',
          background: 'linear-gradient(180deg, transparent 0%, #132e54 80%, #132e54 100%)',
          zIndex: 2,
          pointerEvents: 'none',
          borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
          transform: 'scaleX(1.2)',
          filter: 'blur(2px)',
        }}></div>
      </div>

      {/* Main Content Column */}
      <Column fillWidth center padding="l" style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: '0vh', justifyContent: 'flex-start', paddingBottom: 0 }}>
        {/* Header content */}
        <Column maxWidth="l" horizontal="center" gap="l" align="center" style={{ marginTop: '15vh', position: 'relative', zIndex: 4 }}>
          <Heading 
            variant="display-strong-xl" 
            marginTop="0" 
            onBackground="neutral-weak" 
            style={{ 
              lineHeight: '1.1', 
              textAlign: 'center', 
              width: '100%',
              maxWidth: '100vw',
              wordBreak: 'break-word',
              whiteSpace: 'normal',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: 'clamp(3rem, 12vw, 8rem)',
            }}
            className="hero-heading gradient-text"
          >
            <span style={{ display: 'block' }}>Innovative Tech</span>
            <span style={{ display: 'block' }}>Infinite Possibility</span>
          </Heading>
          <Text
            variant="heading-default-xl"
            onBackground="neutral-weak"
            wrap="balance"
            marginBottom="16"
            style={{ 
              textAlign: 'center',
              transform: 'translateX(1vw)',
              fontWeight: '600',
              width: '100%',
              maxWidth: '100vw',
              wordBreak: 'break-word',
              textOverflow: 'ellipsis',
              fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
            }}
            className="hero-subtext"
          >
            Leading the way in AI
          </Text>
        </Column>

        {/* Spacer to push content below the video background */}
        <div style={{ height: '40vh', width: '100%' }}></div>

        {/* Text below video/hero - now has solid background */}
        <div style={{
          width: '100%',
          maxWidth: 900,
          margin: '0 auto',
          position: 'relative',
          zIndex: 4,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          paddingTop: '0px',
          paddingBottom: '80px',
        }}>
          {/* Circular Arch Gradient Above Text */}
          <div
            style={{
              position: 'absolute',
              // Responsive top offset for arch
              top: 'clamp(20px, 6vw, 60px)', // default for desktop
              left: '50%',
              transform: 'translate(-50%, -70%)',
              width: 'min(1400px, 120vw)',
              height: 'min(220px, 18vw)',
              zIndex: 1,
              pointerEvents: 'none',
              background: 'linear-gradient(180deg,rgb(18, 64, 95) 0%, #142e55 80%, #142e55 100%)',
              opacity: 0.7,
              borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
              filter: 'blur(2px)',
              maxWidth: '98vw',
              minWidth: '320px',
              minHeight: '60px',
              // Move arch further down and shrink on mobile/tablet
              ...(typeof window !== 'undefined' && window.innerWidth <= 900 ? {
                top: '15vw',
                width: 'min(600px, 98vw)',
                height: 'min(110px, 16vw)',
              } : {}),
            }}
          ></div>
          <Text
            as="div"
            style={{
              background: 'linear-gradient(90deg, #1976d2 0%, #67e8f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: 'clamp(1.1rem, 2.5vw, 2.1rem)',
              fontWeight: 500,
              lineHeight: 1.5,
              whiteSpace: 'pre-line',
              textAlign: 'center',
              letterSpacing: '0.01em',
              position: 'relative',
              zIndex: 2,
              marginTop: 0,
              /* Responsive margin for tablet/mobile */
              ...(typeof window !== 'undefined' && window.innerWidth <= 900 ? { marginTop: 32 } : {}),
            }}
          >
            {`We specalised in AI driven web and\nmobile solutions, mastering every step\nfrom concept to market`}
          </Text>
        </div>

        {/* Gradient Cards Section */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2.5rem',
          justifyContent: 'center',
          alignItems: 'stretch',
          width: '100%',
          maxWidth: 1500,
          margin: '0 auto',
          zIndex: 4,
        }}>
          {/* Card 1 */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flex: '1 1 340px',
            minWidth: 340,
            maxWidth: 700,
            height: 200,
            background: 'linear-gradient(135deg,rgb(6, 51, 105) 0%,rgb(32, 99, 170) 100%)',
            borderRadius: '1.5rem',
            boxShadow: '0 4px 32px 0 rgba(3, 56, 121, 0.18)',
            padding: '2.5rem 2rem 2rem 2rem',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: 0,
          }}>
            <img src="/images/ai-h.webp" alt="AI" style={{ height: 180, width: 'auto', marginRight: 24, borderRadius: 16, objectFit: 'cover' }} />
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 12 }}>Artificial <br /> Intelligence</h2>
              <Link
                href="/services/ai"
                aria-label="Explore Artificial Intelligence Services"
                style={{
                  marginTop: 8,
                  padding: '0.7rem 1.6rem',
                  fontSize: '1.08rem',
                  fontWeight: 600,
                  border: 'none',
                  borderRadius: '1.1rem',
                  background: 'linear-gradient(90deg, #67e8f9 0%, #38bdf8 100%)',
                  color: '#0a2240',
                  cursor: 'pointer',
                  boxShadow: '0 2px 12px 0 rgba(46,166,255,0.13)',
                  transition: 'background 0.2s, color 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  textDecoration: 'none',
                }}
              >
                Explore More <span style={{ fontSize: '1.2em', marginLeft: 4 }}>{'>>'}</span>
              </Link>
            </div>
          </div>
          {/* Card 2 */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flex: '1 1 340px',
            minWidth: 340,
            maxWidth: 700,
            height: 200,
            background: 'linear-gradient(135deg,rgb(6, 51, 105) 0%,rgb(32, 99, 170) 100%)',
            borderRadius: '1.5rem',
            boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)',
            padding: '2.5rem 2rem 2rem 2rem',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: 0,
          }}>
            <img src="/images/web-h.webp" alt="Web" style={{ height: 180, width: 'auto', marginRight: 24, borderRadius: 16, objectFit: 'cover' }} />
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 12 }}>Web & Mobile App <br /> Development</h2>
              <Link
                href="/services/web"
                aria-label="Explore Web and Mobile App Development Services"
                style={{
                  marginTop: 8,
                  padding: '0.7rem 1.6rem',
                  fontSize: '1.08rem',
                  fontWeight: 600,
                  border: 'none',
                  borderRadius: '1.1rem',
                  background: 'linear-gradient(90deg, #67e8f9 0%, #38bdf8 100%)',
                  color: '#0a2240',
                  cursor: 'pointer',
                  boxShadow: '0 2px 12px 0 rgba(46,166,255,0.13)',
                  transition: 'background 0.2s, color 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  textDecoration: 'none',
                }}
              >
                Explore More <span style={{ fontSize: '1.2em', marginLeft: 4 }}>{'>>'}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* AR/VR Box Section - now below the two cards */}
        <div style={{
          width: '100%',
          maxWidth: 700,
          margin: '2.5rem auto 0',
          background: 'linear-gradient(135deg,rgb(6, 51, 105) 0%,rgb(32, 99, 170) 100%)',
          borderRadius: '1.5rem',
          boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)',
          padding: '2.5rem 2rem 2rem 2rem',
          color: '#fff',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 4,
          height: 200,
        }}>
          <img src="/images/vr-h.webp" alt="VR" style={{ height: 180, width: 'auto', marginRight: 24, borderRadius: 16, objectFit: 'cover' }} />
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 12 }}>Augmented Reality (AR) <br /> Virtual Reality (VR)</h2>
            <Link
              href="/services/vr"
              aria-label="Explore Augmented Reality and Virtual Reality Services"
              style={{
                marginTop: 8,
                padding: '0.7rem 1.6rem',
                fontSize: '1.08rem',
                fontWeight: 600,
                border: 'none',
                borderRadius: '1.1rem',
                background: 'linear-gradient(90deg, #67e8f9 0%, #38bdf8 100%)',
                color: '#0a2240',
                cursor: 'pointer',
                boxShadow: '0 2px 12px 0 rgba(46,166,255,0.13)',
                transition: 'background 0.2s, color 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                textDecoration: 'none',
              }}
            >
              Explore More <span style={{ fontSize: '1.2em', marginLeft: 4 }}>{'>>'}</span>
            </Link>
          </div>
        </div>

        {/* Bottom Circular Arch Gradient - copy of the top arch */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 0,
            zIndex: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            pointerEvents: 'none',
            marginTop: '22rem', // match text margin
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: '-30px',
              left: '50%',
              transform: 'translate(-50%, 0)',
              width: 'min(1400px, 120vw)',
              height: 'min(220px, 18vw)',
              zIndex: 1,
              pointerEvents: 'none',
              background: 'linear-gradient(180deg,rgb(18, 64, 95) 0%, #142e55 80%, #142e55 100%)',
              opacity: 0.7,
              borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
              filter: 'blur(2px)',
              maxWidth: '98vw',
              minWidth: '320px',
              minHeight: '60px',
              // Responsive for mobile/tablet
              ...(typeof window !== 'undefined' && window.innerWidth <= 900 ? {
                bottom: '-10vw',
                width: 'min(600px, 98vw)',
                height: 'min(110px, 16vw)',
              } : {}),
            }}
          ></div>
        </div>

        {/* Gradient Text Below Cards */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '-5rem 0 0 0', zIndex: 4 }}>
          <span
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 700,
              background: 'linear-gradient(90deg,rgb(47, 90, 231) 0%,rgb(41, 184, 245) 50%,rgb(57, 181, 248) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              textAlign: 'center',
              letterSpacing: '0.01em',
              lineHeight: 1.2,
              display: 'inline-block',
              padding: '0.5rem 0',
            }}
          >
            Accelerating Growth Across Industries
          </span>
        </div>

        {/* White Text Below Gradient Text */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '1.5rem 0 0 0', zIndex: 4 }}>
          <span
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 2.5rem)',
              fontWeight: 500,
              color: '#fff',
              textAlign: 'center',
              letterSpacing: '0.01em',
              lineHeight: 1.6,
              display: 'inline-block',
              whiteSpace: 'pre-line',
              opacity: 0.92,
              maxWidth: 900,
            }}
          >
            {`Harnessing AI to revolutionize diverse sectors,\nmaking a lasin imapct\neverywhere we go.`}
          </span>
        </div>

        {/* 5 Cube-like Cards Section */}
        <div
          style={{
            width: '100%',
            maxWidth: 1500,
            margin: '3.5rem auto 0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2.2rem',
            justifyContent: 'center',
            alignItems: 'stretch',
            zIndex: 4,
            marginBottom: 100,
            marginLeft: 50,
            marginRight: 50,
          }}
        >
          {/* Card 1: Education */}
          <div style={{
            flex: '1 1 200px',
            minWidth: 200,
            maxWidth: 260,
            height: 280,
            background: 'linear-gradient(90deg,rgb(28, 51, 80) 0%,rgb(58, 97, 139) 100%)',
            borderRadius: '2.5rem',
            boxShadow: '0 4px 24px 0 rgba(7,37,73,0.18)',
            padding: '1.2rem 1rem',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 10, textAlign: 'center' }}>Education</div>
            <div style={{ margin: '0 0 12px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              {/* Education Icon */}
              <img src="/images/edu1.jpeg" alt="Education" style={{ height: 54, width: 54, marginBottom: 10 }} />
            </div>
            <div style={{ fontSize: '1rem', textAlign: 'center', opacity: 0.93, whiteSpace: 'pre-line' }}>
              {`Transforming learning with smart, interactive, and engaging educational tools.`}
            </div>
          </div>
          {/* Card 2: Health Care */}
          <div style={{
            flex: '1 1 200px',
            minWidth: 200,
            maxWidth: 260,
            height: 280,
            background: 'linear-gradient(90deg,rgb(28, 51, 80) 0%,rgb(58, 97, 139) 100%)',
            borderRadius: '2.5rem',
            boxShadow: '0 4px 24px 0 rgba(7,37,73,0.18)',
            padding: '1.2rem 1rem',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 10, textAlign: 'center' }}>Health Care</div>
            <div style={{ margin: '0 0 12px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              {/* Health Care Icon */}
              <img src="/images/health.png" alt="Health Care" style={{ height: 54, width: 54, marginBottom: 10 }} />
            </div>
            <div style={{ fontSize: '1rem', textAlign: 'center', opacity: 0.93, whiteSpace: 'pre-line' }}>
              {`Innovative healthcare solutions for better patient outcomes and streamlined operations.`}
            </div>
          </div>
          {/* Card 3: Real Estate */}
          <div style={{
            flex: '1 1 200px',
            minWidth: 200,
            maxWidth: 260,
            height: 280,
            background: 'linear-gradient(90deg,rgb(28, 51, 80) 0%,rgb(58, 97, 139) 100%)',
            borderRadius: '2.5rem',
            boxShadow: '0 4px 24px 0 rgba(7,37,73,0.18)',
            padding: '1.2rem 1rem',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 10, textAlign: 'center' }}>Real Estate</div>
            <div style={{ margin: '0 0 12px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              {/* Real Estate Icon */}
              <img src="/images/real_estate.png" alt="Real Estate" style={{ height: 54, width: 54, marginBottom: 10 }} />
            </div>
            <div style={{ fontSize: '1rem', textAlign: 'center', opacity: 0.93, whiteSpace: 'pre-line' }}>
              {`Transforming property management and real estate experiences.`}
            </div>
          </div>
          {/* Card 4: Government */}
          <div style={{
            flex: '1 1 200px',
            minWidth: 200,
            maxWidth: 260,
            height: 280,
            background: 'linear-gradient(90deg,rgb(28, 51, 80) 0%,rgb(58, 97, 139) 100%)',
            borderRadius: '2.5rem',
            boxShadow: '0 4px 24px 0 rgba(7,37,73,0.18)',
            padding: '1.2rem 1rem',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 10, textAlign: 'center' }}>Government</div>
            <div style={{ margin: '0 0 12px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              {/* Government Icon */}
              <img src="/images/gov.png" alt="Government" style={{ height: 54, width: 54, marginBottom: 10 }} />
            </div>
            <div style={{ fontSize: '1rem', textAlign: 'center', opacity: 0.93, whiteSpace: 'pre-line' }}>
              {`Empowering public services with advanced technological solutions.`}
            </div>
          </div>
          {/* Card 5: Corporate */}
          <div style={{
            flex: '1 1 200px',
            minWidth: 200,
            maxWidth: 260,
            height: 280,
            background: 'linear-gradient(90deg,rgb(28, 51, 80) 0%,rgb(58, 97, 139) 100%)',
            borderRadius: '2.5rem',
            boxShadow: '0 4px 24px 0 rgba(7,37,73,0.18)',
            padding: '1.2rem 1rem',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 10, textAlign: 'center' }}>Corporate</div>
            <div style={{ margin: '0 0 12px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              {/* Corporate Icon */}
              <img src="/images/corporate.png" alt="Corporate" style={{ height: 54, width: 54, marginBottom: 10 }} />
            </div>
            <div style={{ fontSize: '1rem', textAlign: 'center', opacity: 0.93, whiteSpace: 'pre-line' }}>
              {`Transforming business operations with intelligent solutions.`}
            </div>
          </div>
        </div>

        {/* Floating chat button at bottom right */}
        <Button
          id="chat-float"
          style={{
            position: "fixed",
            bottom: "90px",
            right: "48px",
            zIndex: 10,
            width: 80,
            height: 80,
            minWidth: 80,
            minHeight: 80,
            borderRadius: "50%",
            background: "#072549",
            boxShadow: "0 4px 24px 0 rgba(7,37,73,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
          aria-label="Open chat"
          data-border="rounded"
          weight="default"
          href="#"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#072549"/>
            <path d="M11 14.5C11 13.1193 12.1193 12 13.5 12H22.5C23.8807 12 25 14.5V21.5C25 22.8807 23.8807 24 22.5 24H15L11 27V14.5Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
            <circle cx="15" cy="18" r="1" fill="#fff"/>
            <circle cx="18" cy="18" r="1" fill="#fff"/>
            <circle cx="21" cy="18" r="1" fill="#fff"/>
          </svg>
        </Button>
      </Column>
    </div>
  );
}