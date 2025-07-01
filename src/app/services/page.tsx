export default function Services() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#0a2240', padding: 0, margin: 0 }}>
      {/* HERO SECTION */}
      <div style={{
        width: '100%',
        minHeight: 580,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'url("/images/services.webp") center/cover no-repeat',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        overflow: 'hidden',
        marginBottom: 0,
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
          marginTop: 400,
        }}>
          Services
        </h1>
        {/* Floating chat icon */}
        <div style={{
          position: 'absolute',
          right: 48,
          bottom: 32,
          zIndex: 3,
          background: '#1976d2',
          borderRadius: '50%',
          width: 56,
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 12px 0 rgba(25,118,210,0.18)',
        }}>
          <svg width="28" height="28" fill="#fff" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#1976d2"/><path d="M11 14.5C11 13.1193 12.1193 12 13.5 12H22.5C23.8807 12 25 14.5 25 21.5C25 22.8807 23.8807 24 22.5 24H15L11 27V14.5Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/><circle cx="15" cy="18" r="1" fill="#fff"/><circle cx="18" cy="18" r="1" fill="#fff"/><circle cx="21" cy="18" r="1" fill="#fff"/></svg>
        </div>
      </div>

      {/* SERVICES CARDS SECTION */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2vw', marginTop: 110 }}>
        {/* Card 1: AI */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 32,
          marginBottom: 48,
          alignItems: 'stretch',
        }}>
          {/* Image with text overlay */}
          <div style={{ flex: 1.1, minWidth: 320, maxWidth: 420, borderRadius: 32, overflow: 'hidden', boxShadow: '0 4px 24px 0 rgba(7,37,73,0.18)', position: 'relative', background: 'transparent' }}>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Artificial Intelligence"
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 32, display: 'block' }}
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
          <div style={{
            flex: 2,
            background: 'transparent',
            borderRadius: 32,
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 0 0 12px',
          }}>
            <div style={{ fontSize: 50, fontWeight: 700, marginBottom: 8, lineHeight: 1.15, background: 'linear-gradient(90deg, #2ea6ff 0%, #fff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
              <span>AI-Powered Innovation</span><br/>
              <span>for Smarter Business</span>
            </div>
            <div style={{ fontSize: 17, opacity: 0.97, marginBottom: 18, lineHeight: 1.6 , textAlign: 'justify'}}>
              At ZenturioTech, we design and deploy cutting-edge AI solutions that help businesses unlock efficiency, improve decision-making, and create personalized experiences. Whether you're starting with AI or scaling your existing systems, we tailor intelligent technology to meet your specific needs.
            </div>
            <button style={{
              background: '#2ea6ff',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontWeight: 500,
              fontSize: 13,
              padding: '0.35rem 1.1rem',
              alignSelf: 'flex-start',
              cursor: 'pointer',
              marginTop: 4,
              boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
              letterSpacing: 0.2,
            }}>
              Explore More »
            </button>
          </div>
        </div>

        {/* Divider after Card 1 */}
        <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, margin: '80px 0 80px 0' }} />

        {/* Card 2: VR/AR (mirrored layout) */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 32,
          marginBottom: 48,
          alignItems: 'stretch',
        }}>
          {/* Text Card */}
          <div style={{
            flex: 2,
            background: 'transparent',
            borderRadius: 32,
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 12px 0 0',
          }}>
            <div style={{ fontSize: 50, fontWeight: 700, marginBottom: 8, lineHeight: 1.15, background: 'linear-gradient(90deg, #2ea6ff 0%, #fff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
              <span>Create, Engage & Inspire</span><br/>
              <span>with Immersive Experiences</span>
            </div>
            <div style={{ fontSize: 17, opacity: 0.97, marginBottom: 18, lineHeight: 1.6, textAlign: 'justify' }}>
              At ZenturioTech, we design and deploy cutting-edge AI solutions that help businesses unlock efficiency, improve decision-making. Step into the future with ZenturioTech's Virtual Reality (VR) and Augmented Reality (AR) development services.
            </div>
            <button style={{
              background: '#2ea6ff',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontWeight: 500,
              fontSize: 13,
              padding: '0.35rem 1.1rem',
              alignSelf: 'flex-start',
              cursor: 'pointer',
              marginTop: 4,
              boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
              letterSpacing: 0.2,
            }}>
              Explore More »
            </button>
          </div>
          {/* Image with text overlay (right) */}
          <div style={{ flex: 1.1, minWidth: 320, maxWidth: 420, borderRadius: 32, overflow: 'hidden', boxShadow: '0 4px 24px 0 rgba(7,37,73,0.18)', position: 'relative', background: 'transparent' }}>
            <img
              src="https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=600&q=80"
              alt="Augmented Reality & Virtual Reality"
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 32, display: 'block' }}
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
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 32,
          marginBottom: 48,
          alignItems: 'stretch',
        }}>
          {/* Image with text overlay */}
          <div style={{ flex: 1.1, minWidth: 320, maxWidth: 420, borderRadius: 32, overflow: 'hidden', boxShadow: '0 4px 24px 0 rgba(7,37,73,0.18)', position: 'relative', background: 'transparent' }}>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
              alt="Web Development"
              style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 32, display: 'block' }}
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
          <div style={{
            flex: 2,
            background: 'transparent',
            borderRadius: 32,
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 0 0 12px',
          }}>
            <div style={{ fontSize: 50, fontWeight: 700, marginBottom: 8, lineHeight: 1.15, background: 'linear-gradient(90deg, #2ea6ff 0%, #fff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
              <span>Modern Web Solutions</span><br/>
              <span>for Every Business</span>
            </div>
            <div style={{ fontSize: 17, opacity: 0.97, marginBottom: 18, lineHeight: 1.6 , textAlign: 'justify' }}>
              ZenturioTech crafts high-performance, scalable, and visually stunning web applications tailored to your business needs. From landing pages to complex platforms, our web development team ensures seamless user experiences and robust functionality.
            </div>
            <button style={{
              background: '#2ea6ff',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontWeight: 500,
              fontSize: 13,
              padding: '0.35rem 1.1rem',
              alignSelf: 'flex-start',
              cursor: 'pointer',
              marginTop: 4,
              boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
              letterSpacing: 0.2,
            }}>
              Explore More »
            </button>
          </div>
        </div>

        {/* Divider after Card 3 */}
        <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, margin: '80px 0 80px 0' }} />
      </div>
    </div>
  );
}
