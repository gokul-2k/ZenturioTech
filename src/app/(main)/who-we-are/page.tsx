"use client";

import Image from "next/image";
import {
  Heading,
  Text,
  Column,
} from "@once-ui-system/core";

export default function WhoWeAre() {
  return (
    <Column fillWidth center padding="l" style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      paddingTop: '0vh', 
      justifyContent: 'flex-start', 
      paddingBottom: 0, 
      marginTop: '10vh',
      overflow: 'hidden',
      width: '100%'
    }}>
      {/* Arch-like background above About Us (updated to match home page) */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(0px, 6vw, 40px)',
          left: '50%',
          transform: 'translate(-50%, 0)',
          width: 'min(1400px, 100vw)',
          height: 'min(220px, 18vw)',
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(180deg,rgb(18, 64, 95) 0%, #142e55 80%, #142e55 100%)',
          opacity: 0.7,
          borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
          filter: 'blur(2px)',
          minWidth: '320px',
          minHeight: '60px',
        }}
      ></div>
      {/* Main content starts here */}
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
            className="about-title"
          >
            About Us
          </Heading>
        </Column>
        {/* About Content */}
        <div className="about-header">
          <div className="about-intro">
            <p>
              At ZenturioTech, we're not just creating software – we're shaping the future of digital innovation. Our passion lies in crafting cutting-edge solutions that transform ideas into reality. With a deep understanding of advanced technologies, we specialize in delivering dynamic web, mobile, and AI-driven applications that push the boundaries of what's possible. Innovation is at the heart of everything we do. We blend creativity with technical excellence, designing user experiences that are not only intuitive but also captivating. Our team of experts is committed to staying ahead of the curve, continuously exploring new technologies to offer solutions that are as forward-thinking as they are impactful. Collaboration is the cornerstone of our approach at ZenturioTech.
            </p>
            <p>
              We work closely with our clients, understanding their unique needs and tailoring our approach to deliver results that exceed expectations. Whether you're a startup with a bold vision or an established business ready to innovate, we're here to help you achieve your goals with precision and flair. We are the partners you can trust to bring your digital ambitions to life. Together, let's create the extraordinary.
            </p>
          </div>
        </div>
        <div className="about-people-section">
          <h2 className="about-people-title">Our <span>People</span></h2>
          <div className="about-core-team">Core Team</div>
          <div className="team-floating-layout">
            <div className="team-member" style={{ top: '120px', left: '0px' }}>
              <div className="team-img team-img-d-inverted">
                <Image src="/images/bhargav.jpeg" alt="Team Member 1" width={180} height={180} />
              </div>
              <div className="team-info">
                <div className="team-name">Bhargav</div>
                <div className="team-role">UI/UX Designer</div>
              </div>
            </div>
            <div className="team-member" style={{ top: '0px', left: '180px' }}>
              <div className="team-img team-img-d-up">
                <Image src="/images/leksmigirishan.jpeg" alt="Team Member 2" width={180} height={180} />
              </div>
              <div className="team-info">
                <div className="team-name">Lekshmi</div>
                <div className="team-role">Software Engineer</div>
              </div>
            </div>
            <div className="team-member" style={{ top: '120px', left: '360px' }}>
              <div className="team-img team-img-d-inverted">
                <Image src="/images/Ajisha2.webp" alt="Team Member 3" width={180} height={180} />
              </div>
              <div className="team-info">
                <div className="team-name">Ajisha</div>
                <div className="team-role">CEO</div>
              </div>
            </div>
            <div className="team-member" style={{ top: '0px', left: '540px' }}>
              <div className="team-img team-img-circle">
                <Image src="/images/divya1.jpeg" alt="Team Member 4" width={180} height={180} />
              </div>
              <div className="team-info">
                <div className="team-name">Divya</div>
                <div className="team-role">HR Executive</div>
              </div>
            </div>
            <div className="team-member" style={{ top: '120px', left: '720px' }}>
              <div className="team-img team-img-d-normal">
                <Image src="/images/Mrudul.jpeg" alt="Team Member 5" width={180} height={180} />
              </div>
              <div className="team-info">
                <div className="team-name">Mrudul</div>
                <div className="team-role">Business Developer</div>
              </div>
            </div>
            <div className="team-member" style={{ top: '240px', left: '180px' }}>
              <div className="team-img team-img-circle">
                <Image src="/images/aditya.jpeg" alt="Team Member 6" width={180} height={180} />
              </div>
              <div className="team-info">
                <div className="team-name">Aditya Menon</div>
                <div className="team-role">AI/ML Engineer</div>
              </div>
            </div>
            <div className="team-member" style={{ top: '240px', left: '540px' }}>
              <div className="team-img team-img-d-down">
                <Image src="/images/1.jpeg" alt="Team Member 7" width={180} height={180} />
              </div>
              <div className="team-info">
                <div className="team-name">Sreelekshmi</div>
                <div className="team-role">AI/ML Engineer</div>
              </div>
            </div>
          </div>
          <div className="about-leadership-box">
            <p>
              At ZenturioTech, we believe in the power of holistic leadership and growth. Our team is a collective of visionary individuals, each driven by a shared commitment to innovation and excellence. Together, we are more than just a team; we are a network connected by a common vision.
            </p>
            <p>
              Every member of our team acts with the autonomy and initiative of a leader, bringing unique perspectives and skills to the table. This delegated leadership ensures that our projects benefit from diverse insights and collaborative energy, allowing us to deliver groundbreaking solutions with passion and precision.
            </p>
          </div>
        </div>
      </div>
      {/* Styles for About Page */}
      <style jsx>{`
        .about-header {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 48px;
          background: none;
          max-width: 1400px;
          margin: 0 auto;
          overflow: hidden;
        }
        .about-intro {
          max-width: 1200px;
          width: 100%;
          text-align: justify;
          color: #fff;
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 2rem;
          padding: 0 24px;
          box-sizing: border-box;
        }
        .about-intro p {
          margin-bottom: 1.2rem;
        }
        .about-people-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 48px 24px 0 24px;
          margin-top: 10px;
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          box-sizing: border-box;
          overflow: hidden;
        }
        .about-people-title {
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          align-self: flex-start;
          margin-bottom: 0.5rem;
          text-align: left;
          position: relative;
          left: 48px;
        }
        .about-people-title span {
          color: #5B8DF6;
        }
        .about-core-team {
          color: #fff;
          font-weight: 600;
          margin-bottom: 2rem;
          font-size: 1.5rem;
          align-self: flex-start;
          position: relative;
          left: 48px;
        }
        .team-floating-layout {
          position: relative;
          width: min(900px, 100%);
          height: 420px;
          margin: 0 auto 2rem auto;
          isolation: isolate;
          overflow: visible;
          padding: 0 90px;
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
        .team-member {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 180px;
          margin: 18px 18px;
          gap: 30px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .team-img {
          width: 170px;
          height: 170px;
          overflow: hidden;
          box-shadow: 0 4px 24px 0 rgba(7,37,73,0.18);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: #153A5B;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          position: relative;
          border: 2px solid rgba(255, 255, 255, 0.1);
          filter: none;
          will-change: transform, filter;
        }
        .team-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
          will-change: transform, filter;
          border-radius: inherit;
          filter: none;
        }
        .team-member:hover {
          transform: scale(1.15) translateY(-5px);
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
        .team-img-circle {
          border-radius: 50%;
          overflow: hidden;
        }
        .team-img-d-up {
          border-radius: 50% 50% 0 0 / 90px 90px 0 0;
          overflow: hidden;
        }
        .team-img-d-down {
          border-radius: 0 0 50% 50% / 0 0 90px 90px;
          overflow: hidden;
        }
        .team-img-d-normal {
          border-radius: 0 90px 90px 0 / 0 50% 50% 0;
          overflow: hidden;
        }
        .team-img-d-inverted {
          border-radius: 90px 0 0 90px / 50% 0 0 50%;
          overflow: hidden;
        }
        .team-info {
          opacity: 0;
          max-height: 0;
          transition: opacity 0.25s, max-height 0.25s;
          text-align: center;
          pointer-events: none;
        }
        .team-member:hover .team-info {
          opacity: 1;
          max-height: 80px;
          pointer-events: auto;
        }
        .team-name {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 500;
          margin-top: -20px;
        }
        .team-role {
          color: #fff;
          font-weight: bold;
          font-size: 1rem;
        }
        .about-leadership-box {
          max-width: 1200px;
          background: rgba(21, 58, 91, 0.85);
          border-radius: 12px;
          padding: 2rem;
          color: #fff;
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 2rem;
          margin-top: 5rem;
        }
        .about-leadership-box p {
          text-align: justify;
          margin-bottom: 1.2rem;
        }
        @media (max-width: 1000px) {
          .team-floating-layout {
            width: 100%;
            min-width: 320px;
            height: 420px;
            padding: 0 60px;
            box-sizing: border-box;
            overflow: visible;
          }
          .about-people-title,
          .about-core-team {
            left: 24px;
          }
        }
        /* Tablet-specific styles for 985px width */
        @media (max-width: 985px) {
          .about-people-title {
            font-size: 1.5rem;
            left: 24px;
            margin-right: 0;
            text-align: left;
            width: auto;
          }
          .about-core-team {
            margin-right: 0;
            font-size: 1.2rem;
          }
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
            position: static;
            margin: 12px 8px;
            width: 140px;
            max-width: 140px;
            min-width: 120px;
            gap: 12px;
          }
          .team-img, .team-img-circle, .team-img-d-normal, .team-img-d-inverted, .team-img-d-up, .team-img-d-down {
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
            max-width: 100px;
            max-height: 100px;
            border-radius: 50% !important;
          }
          .team-info {
            margin-top: 0.4rem;
            text-align: center;
            max-width: 100%;
            opacity: 1;
            max-height: none;
            pointer-events: auto;
          }
          .team-name, .team-role {
            text-align: center;
            font-size: 0.98rem;
          }
        }
        @media (max-width: 700px) {
          .about-header, .about-people-section {
            padding-left: 16px;
            padding-right: 16px;
            width: 100%;
            box-sizing: border-box;
            overflow: visible;
          }
          .team-floating-layout {
            padding: 0 20px;
            overflow: visible;
          }
          .about-title {
            font-size: 2rem;
          }
          .about-people-title {
            font-size: 1.3rem;
            left: 16px;
            margin-right: 0;
          }
          .about-core-team {
            left: 16px;
            margin-right: 0;
            font-size: 1.1rem;
          }
          body, html, :global(body), :global(html) {
            max-width: 100vw;
            overflow-x: hidden;
          }
        }
      `}</style>
    </Column>
  );
}