"use client";
import Image from "next/image";
import React from "react";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

const services = [
  {
    title: "AI Chatbots & Virtual Assistants",
    desc: "24/7 support that listens, understands, and responds - just like a human, only faster.",
    img: "/images/chatbot.jpeg",
  },
  {
    title: "LLM & Agentic AI Integration",
    desc: "Create adaptive systems that reason, plan and self-improve- the next leap in automation.",
    img: "/images/llmog.png",
  },
  {
    title: "Computer Vision Applications",
    desc: "From real-time object detection to visual inspection -see what machines can truly do.",
    img: "/images/cv.jpeg",
  },
  {
    title: "Predictive Analytics & Machine Learning",
    desc: "Turn your data into foresight. Build models that anticipate, personalize and optimize.",
    img: "/images/pred.webp",
  },
  {
    title: "ML Ops & AI Lifecycle Management",
    desc: "Deploy, monitor and scale AI effortlessly -from proof of concept to production.",
    img: "/images/mlops.jpeg",
  }
];

export default function AIPage() {
  const { isMobile, isTablet } = useDeviceDetect();

  return (
    <div style={{ background: '#0a192f', minHeight: '100vh', width: '100%', padding: 0, margin: 0, marginBottom: -100 }}>
      {/* HERO SECTION */}
      <div style={{
        width: '100%',
        minHeight: isMobile ? 600 : 700,
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
          background: 'rgba(10,25,47,0.65)',
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
        <div style={{
          position: 'relative',
          zIndex: 3,
          color: '#fff',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 20px',
        }}>
          <h1 style={{
            fontSize: isMobile ? 32 : isTablet ? 48 : 68,
            fontWeight: 600,
            letterSpacing: 1,
            marginBottom: isMobile ? 16 : 24,
          }}>
            Artificial Intelligence
          </h1>
          <h2 style={{
            fontSize: isMobile ? 18 : 24,
            fontWeight: 700,
            color: '#4bb6ff',
            marginBottom: 16,
            lineHeight: 1.3,
            maxWidth: 900,
          }}>
            Unleashing Intelligence. Powering Possibilities.
          </h2>
          <p style={{
            fontSize: isMobile ? 14 : 18,
            color: '#e0e6ed',
            lineHeight: 1.6,
            maxWidth: 700,
            margin: '0 auto',
          }}>
            At ZenturioTech, we build future-ready AI solutions that think, learn and evolve - transforming the way businesses operate, serve and scale.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div style={{ 
        maxWidth: isTablet ? 800 : 1200, 
        margin: "0 auto", 
        padding: isMobile ? '40px 20px' : '60px 20px', 
        marginTop: isMobile ? 40 : 60,
        background: '#0a192f', // Added consistent background
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
                background: '#0a192f', // Added consistent background
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
                  background: 'transparent', // Transparent to show parent background
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
                    fontSize: isMobile ? 18 : isTablet ? 28 : 36,
                    fontWeight: 500,
                    marginBottom: 12,
                    color: '#8ecaff',
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </div>
                <div
                  style={{
                    fontSize: isMobile ? 14 : isTablet ? 20 : 30,
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
      <div style={{ 
        textAlign: 'center', 
        marginBottom: 100,
        background: '#0a192f', // Added consistent background
        padding: '20px 0', // Added padding for visual consistency
        paddingBottom: '60px'
      }}>
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
          padding: '0 20px',
          background: '#0a192f', // Added consistent background
        }}>
          <IndustryCard icon="/images/ed.png" title="Education" isMobile={isMobile} />
          <IndustryCard icon="/images/hea.png" title="Health Care" isMobile={isMobile} />
          <IndustryCard icon="/images/oilgasenergy2.png" title="Oil, Gas & Energy" isMobile={isMobile} />
          <IndustryCard icon="/images/defence1.png" title="Defence" isMobile={isMobile} />
          <IndustryCard icon="/images/aerospace.png" title="Aerospace" isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
}

function IndustryCard({ icon, title, isMobile }: { icon: string, title: string, isMobile: boolean }) {
  const isImage = icon.endsWith('.png') || icon.endsWith('.jpg') || icon.endsWith('.jpeg') || icon.endsWith('.webp');
  
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a2240 0%, #2ea6ff 100%)',
      backdropFilter: 'blur(20px)',
      borderRadius: 16,
      padding: '24px',
      width: isMobile ? 'calc(50% - 12px)' : 200,
      aspectRatio: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      boxShadow: '0 4px 24px 0 rgba(46,166,255,0.10)',
    }}>
      <div style={{
        height: isMobile ? 48 : 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {isImage ? (
          <Image 
            src={icon} 
            alt={title + ' icon'} 
            width={isMobile ? 48 : 64} 
            height={isMobile ? 48 : 64} 
            style={{ 
              objectFit: 'contain',
              maxWidth: '100%',
              maxHeight: '100%',
            }} 
          />
        ) : (
          <span style={{ fontSize: isMobile ? 28 : 36 }}>{icon}</span>
        )}
      </div>
      <h3 style={{ 
        color: '#fff', 
        margin: 0,
        fontSize: isMobile ? 15 : 17,
        fontWeight: 500,
        textAlign: 'center',
        lineHeight: 1.2,
        height: isMobile ? 36 : 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>{title}</h3>
    </div>
  );
}