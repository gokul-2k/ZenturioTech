"use client";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "AI Chatbots & Virtual Assistants",
    desc: "Automate customer service with human like, 24/7 support.",
    img: "/images/robo.webp",
  },
  {
    title: "LLM & Agentic AI Integration",
    desc: "Build systems that can reason, adapt, and learn continuously",
    img: "/images/llm2.webp",
  },
  {
    title: "Computer Vision Applications",
    desc: "Enable real-time image recognition, defect detection, and object tracking",
    img: "/images/eva.webp",
  },
  {
    title: "Predictive Analytics & Machine Learning",
    desc: "Make data-driven decisions using custom ML models.",
    img: "/images/pred.webp",
  },
  {
    title: "Custom AI Development",
    desc: "End-to-end AI solutions designed for your business workflow.",
    img: "/images/custom.avif",
  }
];

export default function AIPage() {
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
    <div style={{ background: '#0a192f', minHeight: '100vh', width: '100%', padding: 0, margin: 0, marginBottom: -70 }}>
      {/* HERO SECTION */}
      <div style={{
        width: '100%',
        minHeight: 780,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'url("/images/aiwp.avif") center/cover no-repeat',
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
          fontSize: isMobile ? 32 : isTablet ? 48 : 68,
          fontWeight: 600,
          textAlign: 'center',
          letterSpacing: 1,
        }}>
          Artificial Intelligence
        </h1>
      </div>

      {/* Services Section */}
      <div style={{ 
        maxWidth: isTablet ? 800 : 1200, 
        margin: "0 auto", 
        padding: '60px 20px', 
        marginTop: 110 
      }}>
        {services.map((service, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={service.title}
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
                  src={service.img}
                  alt={service.title}
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
                  {service.title}
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
                  {service.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Industries Section */}
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <h2 style={{ 
          fontSize: 32, 
          color: '#4a9eff', 
          marginBottom: 40,
          fontWeight: 500 
        }}>
          Industries <span style={{ color: '#fff' }}>We Serve</span>
        </h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 24,
          flexWrap: 'wrap',
          padding: '0 20px'
        }}>
          <IndustryCard icon="/images/ed.png" title="Education" />
          <IndustryCard icon="/images/hea.png" title="Health Care" />
          <IndustryCard icon="/images/rea.png" title="Real Estate" />
          <IndustryCard icon="/images/com2.png" title="E-Commerce" />
          <IndustryCard icon="/images/log5.png" title="Logistics" />
        </div>
      </div>
    </div>
  );
}

function IndustryCard({ icon, title }: { icon: string, title: string }) {
  const isImage = icon.endsWith('.png') || icon.endsWith('.jpg') || icon.endsWith('.jpeg') || icon.endsWith('.webp');
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a2240 0%, #2ea6ff 100%)',
      backdropFilter: 'blur(20px)',
      borderRadius: 16,
      padding: '24px',
      width: 200,
      aspectRatio: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      boxShadow: '0 4px 24px 0 rgba(46,166,255,0.10)',
    }}>
      {isImage ? (
        <Image src={icon} alt={title + ' icon'} width={64} height={64} style={{ objectFit: 'contain', marginBottom: 8 }} />
      ) : (
        <span style={{ fontSize: 36 }}>{icon}</span>
      )}
      <h3 style={{ 
        color: '#fff', 
        margin: 0,
        fontSize: 18,
        fontWeight: 500
      }}>{title}</h3>
    </div>
  );
}
