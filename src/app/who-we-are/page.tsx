'use client'
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <div className="about-root">
      <div className="about-arch-container">
        <div className="about-arch-bg"></div>
        <h1 className="about-title">About Us</h1>
      </div>
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
            <div className="team-img team-img-d-normal">
              <Image src="/images/5.jpeg" alt="Team Member 1" width={180} height={180} />
            </div>
            <div className="team-info">
              <div className="team-name">Bhargav</div>
              <div className="team-role">UI/UX Designer</div>
            </div>
          </div>
          <div className="team-member" style={{ top: '0px', left: '180px' }}>
            <div className="team-img team-img-circle">
              <Image src="/images/2.jpeg" alt="Team Member 2" width={180} height={180} />
            </div>
            <div className="team-info">
              <div className="team-name">Lekshmi</div>
              <div className="team-role">Software Engineer</div>
            </div>
          </div>
          <div className="team-member" style={{ top: '120px', left: '360px' }}>
            <div className="team-img team-img-d-inverted">
              <Image src="/images/3.jpeg" alt="Team Member 3" width={180} height={180} />
            </div>
            <div className="team-info">
              <div className="team-name">Ajisha</div>
              <div className="team-role">CEO</div>
            </div>
          </div>
          <div className="team-member" style={{ top: '0px', left: '540px' }}>
            <div className="team-img team-img-circle">
              <Image src="/images/4.jpeg" alt="Team Member 4" width={180} height={180} />
            </div>
            <div className="team-info">
              <div className="team-name">Mrudul</div>
              <div className="team-role">Business Development</div>
            </div>
          </div>
          <div className="team-member" style={{ top: '120px', left: '720px' }}>
            <div className="team-img team-img-d-normal">
              <Image src="/images/4.jpeg" alt="Team Member 5" width={180} height={180} />
            </div>
            <div className="team-info">
              <div className="team-name">Arshad</div>
              <div className="team-role">Software Engineer</div>
            </div>
          </div>
          <div className="team-member" style={{ top: '240px', left: '180px' }}>
            <div className="team-img team-img-d-inverted">
              <Image src="/images/3.jpeg" alt="Team Member 6" width={180} height={180} />
            </div>
            <div className="team-info">
              <div className="team-name">Aditya Menon</div>
              <div className="team-role">AI/ML Engineer</div>
            </div>
          </div>
          <div className="team-member" style={{ top: '240px', left: '540px' }}>
            <div className="team-img team-img-d-normal">
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
      <style jsx>{`
        .about-root {
          min-height: 100vh;
          width: 100%;
          background: #0B2341;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about-arch-container {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-top: 100px;
          min-height: 220px;
        }
        .about-arch-bg {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, 50%);
          width: min(1400px, 98vw);
          height: min(220px, 18vw);
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(180deg,rgb(18, 64, 95) 0%, #142e55 80%, #142e55 100%);
          opacity: 0.7;
          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
          filter: blur(2px);
          max-width: 98vw;
          min-width: 320px;
          min-height: 60px;
          
        }
        .about-title {
          font-size: 3rem;
          padding-top: 150px;
          font-weight: bold;
          color: #5B8DF6;
          z-index: 2;
          position: relative;
          margin-bottom: 2rem;
        }
        .about-header {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 48px;
          background: none;
        }
        .about-intro {
          max-width: 1000px;
          text-align: justify;
          color: #fff;
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .about-intro p {
          margin-bottom: 1.2rem;
        }
        .about-people-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 48px 0 0 0;
        }
        .about-people-title {
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        .about-people-title span {
          color: #5B8DF6;
        }
        .about-core-team {
          color: #fff;
          font-weight: 600;
          margin-bottom: 2rem;
        }
        .team-floating-layout {
          position: relative;
          width: 900px;
          height: 420px;
          margin: 0 auto 2rem auto;
        }
        .team-member {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 180px;
        }
        .team-img {
          width: 180px;
          height: 180px;
          overflow: hidden;
          box-shadow: 0 4px 24px 0 rgba(7,37,73,0.18);
          transition: transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s;
          background: #153A5B;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .team-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .team-img-circle {
          border-radius: 50%;
        }
        .team-img-d-normal {
          border-radius: 0 90px 90px 0 / 0 50% 50% 0;
        }
        .team-img-d-inverted {
          border-radius: 90px 0 0 90px / 50% 0 0 50%;
        }
        .team-img:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 32px 0 rgba(7,37,73,0.28);
          z-index: 3;
        }
        .team-info {
          opacity: 0;
          max-height: 0;
          transition: opacity 0.25s, max-height 0.25s;
          text-align: center;
          margin-top: 0.5rem;
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
          margin-bottom: 0.2rem;
        }
        .team-role {
          color: #fff;
          font-weight: bold;
          font-size: 1rem;
        }
        .about-leadership-box {
          max-width: 900px;
          background: rgba(21, 58, 91, 0.85);
          border-radius: 12px;
          padding: 2rem;
          color: #fff;
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .about-leadership-box p {
          margin-bottom: 1.2rem;
        }
        @media (max-width: 1000px) {
          .team-floating-layout {
            width: 98vw;
            min-width: 320px;
            height: 420px;
          }
        }
        @media (max-width: 700px) {
          .about-header, .about-people-section {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .about-title {
            font-size: 2rem;
          }
          .about-people-title {
            font-size: 1.3rem;
          }
          .team-floating-layout {
            width: 100vw;
            min-width: 0;
            height: 600px;
          }
          .team-img, .team-member {
            width: 120px;
          }
          .team-img, .team-img-circle, .team-img-d-normal, .team-img-d-inverted {
            height: 120px;
            width: 120px;
          }
        }
      `}</style>
    </div>
  );
}
