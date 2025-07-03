"use client";
import Image from "next/image";
import React from "react";

const cards = [
  {
    title: "AI Chatbots & Virtual Assistants",
    desc: "Automate customer service with human like, 24/7 support.",
    img: "/images/ai.webp",
  },
  {
    title: "LLM & Agentic AI Integration",
    desc: "Build systems that can reason, adapt, and learn continuously",
    img: "/images/robo.webp",
  },
  {
    title: "Virtual Reality Training Simulations",
    desc: "Safe, repeatable, and scalable training environments.",
    img: "/images/4.jpeg",
  },
  {
    title: "AR for Marketing & Retail",
    desc: 'Let users "try before they buy" with AR product previews',
    img: "/images/2.jpeg",
  },
];

const applications = [
  "Corporate & Industrial Training",
  "Healthcare Therapy & Simulation",
  "Real Estate Virtual Tours",
  "Education & Skill Development",
  "Education & Skill Development",
];

// Responsive style helper
const responsiveStyle = (base: Record<string, any>, mobile: Record<string, any>) => ({
  ...base,
  ...(typeof window !== "undefined" && window.innerWidth <= 600 ? mobile : {}),
});

export default function VRServicePage() {
  // SSR-safe window width check
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);
  
  React.useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a192f",
      color: "#fff",
      padding: 0,
      margin: 0,
      marginBottom: -65,
    }}>
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
          height: 180,
          background: 'linear-gradient(180deg, rgba(10,25,47,0) 0%, #0a192f 100%)',
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
          Virtual Reality
        </h1>
      </div>

      {/* Cards Section */}
      <div style={{ 
        maxWidth: isTablet ? 800 : 1200, 
        margin: "0 auto", 
        padding: '60px 20px', 
        marginTop: 110 
      }}>
        {cards.map((card, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={card.title}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: isMobile ? 'column' : isLeft ? 'row' : 'row-reverse',
                alignItems: 'center',
                marginBottom: 80,
                minHeight: isMobile ? 'auto' : 300,
                width: '100%',
              }}
            >
              {/* Image OUTSIDE the card box */}
              <div
                style={{
                  zIndex: 2,
                  flex: isMobile ? '0 0 auto' : '0 0 350px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: isMobile ? 0 : isLeft ? 0 : -100,
                  marginRight: isMobile ? 0 : isLeft ? -100 : 0,
                  marginBottom: isMobile ? 32 : 0,
                }}
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={isMobile ? 280 : 350}
                  height={isMobile ? 320 : 400}
                  style={{
                    borderRadius: 40,
                    objectFit: 'cover',
                    width: isMobile ? 280 : 350,
                    height: isMobile ? 320 : 400,
                    display: 'block',
                    border: '8px solid #4bb6ff',
                    boxSizing: 'border-box',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  }}
                />
              </div>
              {/* Card box with only text */}
              <div
                style={{
                  zIndex: 1,
                  flex: 1,
                  background: 'rgba(10, 44, 82, 0.44)',
                  borderRadius: 36,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  padding: isMobile ? '32px 24px' : '48px 64px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: isMobile ? 'center' : 'flex-start',
                  minHeight: isMobile ? 200 : 320,
                  paddingLeft: isMobile ? 24 : isLeft ? 140 : 64,
                  paddingRight: isMobile ? 24 : isLeft ? 64 : 140,
                  textAlign: isMobile ? 'center' : 'left',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div
                  style={{
                    fontSize: isMobile ? 24 : 36,
                    fontWeight: 500,
                    marginBottom: 16,
                    color: '#8ecaff',
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </div>
                <div
                  style={{
                    fontSize: isMobile ? 17 : 30,
                    color: '#e0e6ed',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    maxWidth: isMobile ? 'none' : '90%',
                  }}
                >
                  {card.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Applications Section */}
      <div style={{ maxWidth: 1100, margin: '0 auto', marginTop: 64 }}>
        <h2 style={{
          color: '#3ba3ff',
          fontSize: isMobile ? 28 : 38,
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 40,
          letterSpacing: 1,
        }}>
          Applications
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: isMobile ? 'nowrap' : 'wrap',
          justifyContent: 'center',
          alignItems: isMobile ? 'center' : 'stretch',
          gap: 24,
          marginBottom: 100,
        }}>
          {/* Desktop layout: 2x2 + 1 center, Mobile: stacked */}
          {isMobile ? (
            applications.map((app, i) => (
              <div key={i} style={{
                background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
                borderRadius: 32,
                padding: '18px 12px',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                minWidth: 0,
                width: '90vw',
                maxWidth: 400,
                textAlign: 'center',
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                margin: '0 auto',
              }}>{app}</div>
            ))
          ) : (
            <>
              <div style={{ display: 'flex', gap: 32 }}>
                <div style={{
                  background: 'linear-gradient(90deg,rgb(24, 51, 110) 0%,rgb(54, 102, 122) 100%)',
                  borderRadius: 32,
                  padding: '28px 48px',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 24,
                  minWidth: 340,
                  textAlign: 'center',
                  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                }}>
                  Corporate & Industrial Training
                </div>
                <div style={{
                  background: 'linear-gradient(90deg,rgb(24, 51, 110) 0%,rgb(54, 102, 122) 100%)',
                  borderRadius: 32,
                  padding: '28px 48px',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 24,
                  minWidth: 340,
                  textAlign: 'center',
                  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                }}>
                  Healthcare Therapy & Simulation
                </div>
              </div>
              <div style={{ display: 'flex', gap: 32 }}>
                <div style={{
                  background: 'linear-gradient(90deg,rgb(24, 51, 110) 0%,rgb(54, 102, 122) 100%)',
                  borderRadius: 32,
                  padding: '28px 48px',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 24,
                  minWidth: 340,
                  textAlign: 'center',
                  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                }}>
                  Real Estate Virtual Tours
                </div>
                <div style={{
                  background: 'linear-gradient(90deg,rgb(24, 51, 110) 0%,rgb(54, 102, 122) 100%)',
                  borderRadius: 32,
                  padding: '28px 48px',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 24,
                  minWidth: 340,
                  textAlign: 'center',
                  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                }}>
                  Education & Skill Development
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 16 }}>
                <div style={{
                  background: 'linear-gradient(90deg,rgb(24, 51, 110) 0%,rgb(54, 102, 122) 100%)',
                  borderRadius: 32,
                  padding: '28px 48px',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 24,
                  minWidth: 340,
                  textAlign: 'center',
                  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                }}>
                  Education & Skill Development
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 