"use client";

import Image from "next/image";
import {
  Heading,
  Text,
  Column,
} from "@once-ui-system/core";
import React from "react";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

export default function WhoWeAre() {
  const { isMobile, isTablet } = useDeviceDetect();

  // Define reusable styles
  const teamMemberStyle = {
    position: 'absolute' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    width: 180,
    margin: '18px 18px',
    gap: 30,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  };

  const teamImgBaseStyle = {
    width: 170,
    height: 170,
    overflow: 'hidden' as const,
    boxShadow: '0 4px 24px 0 rgba(7,37,73,0.18)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    background: '#153A5B',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    position: 'relative' as const,
    border: '2px solid rgba(255, 255, 255, 0.1)',
    filter: 'none',
    willChange: 'transform, filter',
  };

  const teamInfoStyle = {
    textAlign: 'center' as const,
    color: '#fff',
    position: 'absolute' as const,
    width: '100%',
    left: 0,
    zIndex: 3,
    // No transform or opacity here; handled by CSS
  };

  return (
    <Column fillWidth center padding="l" style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      paddingTop: '0vh', 
      justifyContent: 'flex-start', 
      paddingBottom: 0, 
      marginTop: isMobile ? '5vh' : '10vh',
      overflow: 'hidden',
      width: '100%'
    }}>
      {/* Arch-like background above About Us (unchanged) */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(0px, 6vw, 80px)',
          left: '50%',
          transform: 'translate(-50%, 0)',
          width: 'min(1400px, 100vw)',
          height: 'min(220px, 18vw)',
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(180deg,rgb(18, 64, 95) 0%, #0a264d 80%, #0a264d 100%)',
          opacity: 0.7,
          borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
          filter: 'blur(2px)',
          minWidth: '320px',
          minHeight: '60px',
        }}
      ></div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 4 }}>
        <Column maxWidth="l" horizontal="center" gap="l" align="center" style={{ 
          marginTop: '15vh', 
          position: 'relative', 
          zIndex: 4, 
          marginBottom: '5vh' 
        }}>
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
              fontSize: 'clamp(3rem, 12vw, 5rem)',
              color: '#5B8DF6',
            }}
          >
            About Us
          </Heading>
        </Column>

        {/* About Content */}
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: 48,
          background: 'none',
          maxWidth: 1400,
          margin: '0 auto',
          overflow: 'hidden',
        }}>
          <div style={{
            maxWidth: 1200,
            width: '100%',
            textAlign: 'justify',
            color: '#fff',
            fontSize: '1.05rem',
            fontWeight: 300,
            lineHeight: 1.7,
            padding: '0 24px',
            boxSizing: 'border-box',
          }}>
            <p style={{ marginBottom: '1.2rem', textAlign: 'justify' }}>
              At ZenturioTech, we don’t just build software - we engineer digital revolutions. Fueled by curiosity and driven by innovation, we turn bold ideas into breakthrough solutions. From AI-powered platforms to immersive web and mobile applications, our work is where creativity meets cutting-edge technology. We believe great tech isn't just functional - it's intuitive, beautiful and unforgettable. That’s why we blend sleek design with smart engineering to craft experiences that captivate and convert. With a team that thrives on curiosity and collaboration, we stay ahead of the curve - so our clients do too. Whether you're a startup dreaming big or an enterprise ready to evolve, we’re here to power your vision with precision, passion and a touch of magic. ZenturioTech - where innovation comes alive. Let’s build the extraordinary, together.
            </p>
         
          </div>
        </div>

        {/* People Section */}
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px 24px 0 24px',
          marginTop: -50,
          position: 'relative',
          maxWidth: 1400,
          margin: '0 auto',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#fff',
            alignSelf: 'flex-start',
            textAlign: 'left',
            position: 'relative',
            left: 10,
            marginBottom: 30,
          }}>
             Meet the Minds Behind the <span style={{ color: '#5B8DF6' }}> Magic</span>
          </h2>

          {/* Team Layout */}
          <div className="team-floating-layout">
            {/* Team Member 1 */}
            <div className="team-member" style={{ ...teamMemberStyle, top: '120px', left: '0px' }}>
              <div className="team-img" style={{ ...teamImgBaseStyle, borderRadius: '90px 0 0 90px / 50% 0 0 50%' }}>
                <Image src="/images/bhargav.jpeg" alt="Team Member 1" width={180} height={180} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: 'center',
                  willChange: 'transform, filter',
                  borderRadius: 'inherit',
                  filter: 'none',
                }} />
              </div>
              <div className="team-info" style={teamInfoStyle}>
                <div className="team-name" style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: 4 }}>Bhargav</div>
                <div className="team-role" style={{ fontWeight: 'bold', fontSize: '1rem' }}>UI/UX Designer</div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-member" style={{ ...teamMemberStyle, top: '0px', left: '180px' }}>
              <div className="team-img" style={{ ...teamImgBaseStyle, borderRadius: '50% 50% 0 0 / 90px 90px 0 0' }}>
                <Image src="/images/leksmigirishan.jpeg" alt="Team Member 2" width={180} height={180} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: 'center',
                  willChange: 'transform, filter',
                  borderRadius: 'inherit',
                  filter: 'none',
                }} />
              </div>
              <div className="team-info" style={teamInfoStyle}>
                <div className="team-name" style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: 4 }}>Lekshmi</div>
                <div className="team-role" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Software Engineer</div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-member" style={{ ...teamMemberStyle, top: '120px', left: '360px' }}>
              <div className="team-img" style={{ ...teamImgBaseStyle, borderRadius: '90px 0 0 90px / 50% 0 0 50%' }}>
                <Image src="/images/ajisha2.webp" alt="Team Member 3" width={180} height={180} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: 'center',
                  willChange: 'transform, filter',
                  borderRadius: 'inherit',
                  filter: 'none',
                }} />
              </div>
              <div className="team-info" style={teamInfoStyle}>
                <div className="team-name" style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: 4 }}>Ajisha</div>
                <div className="team-role" style={{ fontWeight: 'bold', fontSize: '1rem' }}>CEO</div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="team-member" style={{ ...teamMemberStyle, top: '0px', left: '540px' }}>
              <div className="team-img" style={{ ...teamImgBaseStyle, borderRadius: '50%' }}>
                <Image src="/images/1.jpeg" alt="Team Member 4" width={180} height={180} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: 'center',
                  willChange: 'transform, filter',
                  borderRadius: 'inherit',
                  filter: 'none',
                }} />
              </div>
              <div className="team-info" style={teamInfoStyle}>
                <div className="team-name" style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: 2 }}>Sreelekshmi</div>
                <div className="team-role" style={{ fontWeight: 'bold', fontSize: '1rem' }}>AI/ML Engineer</div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="team-member" style={{ ...teamMemberStyle, top: '120px', left: '720px' }}>
              <div className="team-img" style={{ ...teamImgBaseStyle, borderRadius: '0 90px 90px 0 / 0 50% 50% 0' }}>
                <Image src="/images/Mrudul.jpeg" alt="Team Member 5" width={180} height={180} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: 'center',
                  willChange: 'transform, filter',
                  borderRadius: 'inherit',
                  filter: 'none',
                }} />
              </div>
              <div className="team-info" style={teamInfoStyle}>
                <div className="team-name" style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: 4 }}>Mrudul</div>
                <div className="team-role" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Global Business Development Lead</div>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="team-member" style={{ ...teamMemberStyle, top: '240px', left: '180px' }}>
              <div className="team-img" style={{ ...teamImgBaseStyle, borderRadius: '50%' }}>
                <Image src="/images/aditya.jpeg" alt="Team Member 6" width={180} height={180} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: 'center',
                  willChange: 'transform, filter',
                  borderRadius: 'inherit',
                  filter: 'none',
                }} />
              </div>
              <div className="team-info" style={teamInfoStyle}>
                <div className="team-name" style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: 4 }}>Aditya Menon</div>
                <div className="team-role" style={{ fontWeight: 'bold', fontSize: '1rem' }}>AI/ML Engineer</div>
              </div>
            </div>

            {/* Team Member 7 */}
            <div className="team-member" style={{ ...teamMemberStyle, top: '240px', left: '540px' }}>
              <div className="team-img" style={{ ...teamImgBaseStyle, borderRadius: '0 0 50% 50% / 0 0 90px 90px' }}>
                <Image src="/images/divya1.jpeg" alt="Team Member 7" width={180} height={180} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: 'center',
                  willChange: 'transform, filter',
                  borderRadius: 'inherit',
                  filter: 'none',
                }} />
              </div>
              <div className="team-info" style={teamInfoStyle}>
                <div className="team-name" style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: 4 }}>Divya</div>
                <div className="team-role" style={{ fontWeight: 'bold', fontSize: '1rem' }}>HR & Operations Head</div>
              </div>
            </div>
          </div>

          {/* Leadership Box */}
          <div style={{
            maxWidth: 1200,
            background: 'rgba(21, 58, 91, 0.85)',
            borderRadius: 12,
            padding: '2rem',
            color: '#fff',
            fontSize: '1.05rem',
            fontWeight: 300,
            lineHeight: 1.7,
            marginBottom: '2rem',
            marginTop: '5rem',
          }}>
            <p style={{ textAlign: 'justify', marginBottom: '1.2rem' }}>
              At ZenturioTech, we’re not just a team - we’re a tribe of trailblazers. Driven by passion, powered by purpose and united by a shared vision, our people are the heart of everything we do. Every individual here leads with intention - not by title, but by mindset. We champion a culture where initiative is instinctive, voices are valued and collaboration sparks creation. We’re go-getters with grit, problem-solvers with purpose and dreamers who deliver. Whether it’s cracking code or breaking barriers, we bring energy, empathy and excellence into every project we touch. What sets us apart? It’s our unshakable belief that leadership is not a position - it’s a practice. Everyone here is empowered to lead, create, question and grow. Together, we don’t just build software. We build momentum. We build the future.
            </p>
          </div>
        </div>
      </div>

      {/* Add hover effects with CSS */}
      <style jsx>{`
        .team-floating-layout {
          position: relative;
          width: min(900px, 100%);
          height: 420px;
          margin: 0 auto 2rem auto;
          isolation: isolate; 
          overflow: visible;
          padding: 0 90px;
        }

        .team-member {
          position: relative;
          padding-bottom: 60px;
        }

        .team-info {
          top: 175px;
          opacity: 0;
          transform: translateY(0px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-member:hover .team-info {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .team-floating-layout:has(.team-member:hover) {
          background: rgba(7, 37, 73, 0.15);
          backdrop-filter: blur(2px);
        }

        .team-floating-layout:has(.team-member:hover) .team-member:not(:hover) {
          opacity: 0.65;
          transform: scale(0.98);
        }

        .team-floating-layout:has(.team-member:hover) .team-member:not(:hover) .team-img {
          filter: blur(8px) saturate(0.8);
        }

        .team-floating-layout:has(.team-member:hover) .team-member:not(:hover) .team-img img {
          filter: blur(4px) brightness(0.7) contrast(0.95);
          transform: scale(1.05);
        }

        .team-member:hover {
          transform: scale(1.15) translateY(-5px) !important;
          z-index: 10;
          opacity: 1 !important;
        }

        .team-member:hover .team-img {
          box-shadow: 0 12px 32px 0 rgba(7,37,73,0.45);
          filter: none !important;
        }

        .team-member:hover .team-img img {
          transform: scale(1.05);
          filter: contrast(1.05) brightness(1.1) !important;
        }

        .team-name {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 4px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .team-role {
          font-weight: bold;
          font-size: 1rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        @media (max-width: 985px) {
          .team-floating-layout {
            width: 100%;
            min-width: 0;
            max-width: 100vw;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-start;
            position: relative;
            padding: 0;
            margin: 0 auto 2rem auto;
            box-sizing: border-box;
          }

          .team-member {
            position: static !important;
            margin: 12px 8px !important;
            width: 140px !important;
            max-width: 140px !important;
            min-width: 120px !important;
            gap: 12px !important;
            padding-bottom: 0 !important;
          }

          .team-img {
            width: 100px !important;
            height: 100px !important;
            min-width: 100px !important;
            min-height: 100px !important;
            max-width: 100px !important;
            max-height: 100px !important;
            border-radius: 50% !important;
          }

          .team-info {
            position: static !important;
            opacity: 1 !important;
            transform: none !important;
            margin-top: 0.2rem !important;
          }

          .team-name, .team-role {
            font-size: 0.98rem !important;
          }
        }

        @media (max-width: 700px) {
          .team-floating-layout {
            padding: 0 20px;
          }
        }
      `}</style>
    </Column>
  );
}