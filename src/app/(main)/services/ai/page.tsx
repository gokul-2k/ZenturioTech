import Image from 'next/image';

export default function AIPage() {
  return (
    <div style={{ background: '#0a2240', minHeight: '100vh', width: '100%', padding: 0, margin: 0 }}>
      {/* HERO SECTION */}
      <div style={{
        width: '100%',
        minHeight: 420,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'url("/images/ai.webp") center/cover no-repeat',
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
        <h1 style={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          fontSize: 48,
          fontWeight: 600,
          textAlign: 'center',
          letterSpacing: 1,
        }}>
          Artificial Intelligence
        </h1>
      </div>

      {/* Feature Cards */}
      <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', marginTop: 32, marginBottom: 32 }}>
        {/* Row 1 */}
        <div style={{ display: 'flex', gap: 32, marginBottom: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Card 1 */}
          <FeatureCard
            img="/images/robo.webp"
            title="AI Chatbots & Virtual Assistants"
            desc="Automate customer service with human like, 24/7 support."
          />
          {/* Card 2 */}
          <FeatureCard
            img="/images/boy.webp"
            title="LLM & Agentic AI Integration"
            desc="Build systems that can reason, adapt, and learn continuously."
          />
        </div>
        {/* Row 2 */}
        <div style={{ display: 'flex', gap: 32, marginBottom: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Card 3 */}
          <FeatureCard
            img="/images/eva.webp"
            title="Computer Vision Applications"
            desc="Enable real-time image recognition, defect detection, and object tracking."
          />
          {/* Card 4 */}
          <FeatureCard
            img="/images/pred.webp"
            title="Predictive Analytics & Machine Learning"
            desc="Make data-driven decisions using custom ML models."
          />
        </div>
        {/* Row 3 */}
        <div style={{ display: 'flex', gap: 32, marginBottom: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Card 5 */}
          <FeatureCard
            img="/images/kid-robo.webp"
            title="Custom AI Development"
            desc="End-to-end AI solutions designed for your business workflow."
          />
        </div>
      </div>

      {/* Industries We Serve */}
      <div style={{ width: '100%', background: 'transparent', padding: '48px 0 0 0', textAlign: 'center' }}>
        <h2 style={{ color: '#2ea6ff', fontWeight: 600, fontSize: 36, marginBottom: 32 }}>
          Industries <span style={{ color: '#fff' }}>We Serve</span>
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, marginBottom: 48 }}>
          <IndustryCard icon="🎓" title="Education" desc="Transforming learning with smart interaction, and engaging educational tools." />
          <IndustryCard icon="🏥" title="Health Care" desc="Innovative healthcare solutions for better patient outcomes and streamlined operations." />
          <IndustryCard icon="🏢" title="Real Estate" desc="Transforming learning with smart interaction, and engaging educational tools." />
          <IndustryCard icon="🛒" title="E-Commerce" desc="Empowering public services with advanced technological solutions." />
          <IndustryCard icon="🚚" title="Logistics" desc="Transforming learning with smart interaction, and engaging educational tools." />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ img, title, desc }: { img: string, title: string, desc: string }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 24,
      boxShadow: '0 4px 24px 0 rgba(7,37,73,0.13)',
      padding: 24,
      minWidth: 320,
      maxWidth: 380,
      flex: '1 1 320px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      border: '1.5px solid #2e4a7b',
    }}>
      <img src={img} alt={title} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 18, marginBottom: 18, boxShadow: '0 2px 12px 0 rgba(46,166,255,0.13)' }} />
      <div style={{ color: '#bcd1f7', fontWeight: 700, fontSize: 22, marginBottom: 10, textAlign: 'center' }}>{title}</div>
      <div style={{ color: '#fff', fontSize: 16, opacity: 0.92, textAlign: 'center' }}>{desc}</div>
    </div>
  );
}

function IndustryCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 18,
      boxShadow: '0 2px 12px 0 rgba(46,166,255,0.13)',
      padding: 24,
      minWidth: 180,
      maxWidth: 220,
      flex: '1 1 180px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1.5px solid #2e4a7b',
    }}>
      <div style={{ fontSize: 38, marginBottom: 12 }}>{icon}</div>
      <div style={{ color: '#bcd1f7', fontWeight: 700, fontSize: 18, marginBottom: 8, textAlign: 'center' }}>{title}</div>
      <div style={{ color: '#fff', fontSize: 14, opacity: 0.92, textAlign: 'center' }}>{desc}</div>
    </div>
  );
}
