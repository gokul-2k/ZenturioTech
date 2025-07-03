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
const responsiveStyle = (base, mobile) => ({
  ...base,
  ...(typeof window !== "undefined" && window.innerWidth <= 600 ? mobile : {}),
});

export default function VRServicePage() {
  // SSR-safe window width check
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#072549",
        color: "#fff",
        padding: "0 0 48px 0",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 320,
        marginBottom: 32,
        overflow: 'hidden',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
      }}>
        <Image
          src="/images/vr-hp.webp"
          alt="AR VR Hero Background"
          fill
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.6)',
          }}
          priority
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(7,37,73,0.85) 60%, rgba(7,37,73,0.3) 100%)',
          zIndex: 1,
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}>
          <h1 style={{
            fontSize: 44,
            fontWeight: 700,
            color: '#e0f0ff',
            letterSpacing: 1,
            textShadow: '0 4px 24px rgba(0,0,0,0.25)',
            margin: 0,
          }}>
            AI & VR Development
          </h1>
        </div>
      </div>
      {/* Cards Section */}
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginTop: 8 }}>
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
                  marginBottom: 64,
                  minHeight: 220,
                }}
              >
                {/* Image OUTSIDE the card box */}
                <div
                  style={{
                    zIndex: 2,
                    flex: isMobile ? '0 0 auto' : '0 0 250px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: isMobile ? 0 : isLeft ? 0 : -80,
                    marginRight: isMobile ? 0 : isLeft ? -80 : 0,
                    marginBottom: isMobile ? 24 : 0,
                  }}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={isMobile ? 180 : 250}
                    height={isMobile ? 200 : 300}
                    style={{
                      borderRadius: 32,
                      objectFit: 'cover',
                      width: isMobile ? 180 : 250,
                      height: isMobile ? 200 : 300,
                      display: 'block',
                      border: '7px solid #4bb6ff',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                {/* Card box with only text */}
                <div
                  style={{
                    zIndex: 1,
                    flex: 1,
                    background: 'rgba(10, 44, 82, 0.85)',
                    borderRadius: 28,
                    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
                    padding: isMobile ? '24px 16px' : '40px 48px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    minHeight: 150,
                    paddingLeft: isMobile ? 16 : isLeft ? 100 : 48,
                    paddingRight: isMobile ? 16 : isLeft ? 48 : 100,
                    textAlign: isMobile ? 'center' : 'left',
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? 20 : 28,
                      fontWeight: 600,
                      marginBottom: 10,
                      color: '#8ecaff',
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? 15 : 21,
                      color: '#e0e6ed',
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {card.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Applications Section */}
      <div style={{ maxWidth: 1100, margin: '0 auto', marginTop: 64 }}>
        <h2 style={{
          color: '#3ba3ff',
          fontSize: isMobile ? 28 : 38,
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 36,
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
                  background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
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
                  background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
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
                  background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
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
                  background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
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
                  background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
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