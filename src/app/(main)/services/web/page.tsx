import Image from 'next/image';

export default function WebServicePage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', background: 'linear-gradient(180deg, #0a2240 0%, #0e2d56 100%)', color: '#fff', overflowX: 'hidden', fontFamily: 'Poppins, sans-serif', position: 'relative' }}>
      {/* Top vignette overlay */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: 180, pointerEvents: 'none', zIndex: 1, background: 'linear-gradient(180deg, rgba(10,34,64,0.85) 60%, rgba(10,34,64,0) 100%)' }} />

      {/* Background image above arch and nav bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 420,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <Image
          src="/images/vr-hp.webp"
          alt="VR Hero"
          fill
          style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.45 }}
          priority
        />
        {/* dark overlay for image */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, #0a2240 60%, rgba(10,34,64,0.1) 100%)', zIndex: 1 }} />
      </div>

      {/* Hero Section with arch */}
      <section style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 0, paddingBottom: 80, position: 'relative', background: 'none', zIndex: 2 }}>
        {/* Arch structure */}
        <div style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: 1200,
          height: 420,
          background: 'linear-gradient(180deg, #13305a 80%, #18325a 100%)',
          borderBottomLeftRadius: 600,
          borderBottomRightRadius: 600,
          borderTopLeftRadius: 600,
          borderTopRightRadius: 600,
          zIndex: 2,
          boxShadow: '0 12px 48px 0 #0a2240, 0 8px 32px 0 rgba(0,0,0,0.18)',
        }} />
        {/* Hero content inside arch */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          maxWidth: 1200,
          width: '100%',
          padding: '0 0',
          gap: 64,
          position: 'relative',
          marginTop: 180,
          zIndex: 3,
        }}>
          {/* Blurred blue ellipse background behind character */}
          <div style={{ position: 'absolute', left: 0, top: 60, width: 400, height: 400, zIndex: 0, filter: 'blur(80px)', background: 'radial-gradient(ellipse at 60% 40%, #b3cfff 0%, #0a2240 80%)', opacity: 0.55 }} />
          {/* Left: Character and blue box */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 340px', position: 'relative', zIndex: 2 }}>
            <div style={{ position: 'relative', zIndex: 2, marginBottom: 0 }}>
              <Image
                src="/images/boy.webp"
                alt="3D Boy with Tablet"
                width={260}
                height={260}
                style={{ borderRadius: 40, display: 'block', boxShadow: '0 12px 48px 0 #b3cfff, 0 8px 32px 0 rgba(0,0,0,0.25)' }}
                priority
              />
            </div>
            {/* Light blue box under image */}
            <div style={{
              width: 240,
              height: 90,
              background: 'linear-gradient(90deg, #b3cfff 0%, #e0eaff 100%)',
              borderRadius: 36,
              marginTop: -28,
              zIndex: 1,
              boxShadow: '0 4px 24px 0 rgba(179,207,255,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              color: '#0a2240',
              fontSize: 22,
              letterSpacing: 1,
              border: '2px solid #e0eaff',
            }}>
              Web & Mobile
            </div>
          </div>
          {/* Right: Hero Text */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 32, minWidth: 340, zIndex: 2 }}>
            <h1 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 12, color: '#fff', letterSpacing: 0.5 }}>
              Web & Mobile App <br />Development
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
              <div>
                <span style={{ fontWeight: 700, fontSize: 24, color: '#a9c8ff', display: 'block', marginBottom: 2 }}>Mobile App Development <span style={{ fontSize: 15, color: '#b3cfff' }}>(iOS & Android)</span></span>
                <span style={{ fontSize: 18, color: '#e0eaff', display: 'block', marginTop: 2 }}>Native and cross-platform apps built for performance.</span>
              </div>
              <div>
                <span style={{ fontWeight: 700, fontSize: 24, color: '#a9c8ff', display: 'block', marginBottom: 2 }}>Progressive Web Apps (PWAs)</span>
                <span style={{ fontSize: 18, color: '#e0eaff', display: 'block', marginTop: 2 }}>Responsive, lightweight web apps that work across all devices</span>
              </div>
              <div>
                <span style={{ fontWeight: 700, fontSize: 24, color: '#a9c8ff', display: 'block', marginBottom: 2 }}>Custom Web Applications</span>
                <span style={{ fontSize: 18, color: '#e0eaff', display: 'block', marginTop: 2 }}>Tailored portals, dashboards, and platforms that scale with your needs.</span>
              </div>
              <div>
                <span style={{ fontWeight: 700, fontSize: 24, color: '#a9c8ff', display: 'block', marginBottom: 2 }}>UI/UX Design & Prototyping</span>
                <span style={{ fontSize: 18, color: '#e0eaff', display: 'block', marginTop: 2 }}>Engaging interfaces designed for usability and conversion.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webflow Development Section - Redesigned */}
      <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40, background: '#13305a', paddingTop: 32, paddingBottom: 48 }}>
        {/* Section Title */}
        <div style={{
          width: '80%',
          maxWidth: 900,
          margin: '0 auto 32px auto',
          background: 'rgba(24,50,90,0.85)',
          borderRadius: 32,
          padding: '18px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h2 style={{
            color: '#a9c8ff',
            fontSize: 36,
            fontWeight: 600,
            textAlign: 'center',
            margin: 0,
            letterSpacing: 1,
          }}>
            Webflow Development
          </h2>
        </div>
        {/* Card/Box */}
        <div style={{
          width: '80%',
          maxWidth: 900,
          background: '#18325a',
          borderRadius: 32,
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 40,
          gap: 40,
        }}>
          {/* Image left */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 4px 24px 0 #b3cfff',
              border: '4px solid #b3cfff',
              background: '#fff',
              width: 320,
              height: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image
                src="/images/web-des.webp"
                alt="Webflow Screenshot"
                width={300}
                height={300}
                style={{ borderRadius: 20, width: 300, height: 300, objectFit: 'cover' }}
              />
            </div>
          </div>
          {/* Content right */}
          <div style={{ flex: 1, color: '#fff', fontSize: 22, display: 'flex', flexDirection: 'column', gap: 18, minWidth: 320 }}>
            <p style={{ fontSize: 22, lineHeight: 1.5, marginBottom: 8, color: '#e0eaff' }}>
              Get modern, responsive, and lightning-fast websites using Webflow — ideal for businesses that value design freedom and CMS flexibility.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Pixel-perfect design implementation',
                'Custom animations & interactions',
                'CMS for dynamic content',
                'Fast, secure, and SEO-ready',
                'No-code handover for marketing teams',
              ].map((text, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', fontSize: 20, color: '#e0eaff', fontWeight: 400 }}>
                  <span style={{
                    display: 'inline-block',
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: '#a9c8ff',
                    marginRight: 16,
                    boxShadow: '0 2px 8px 0 #a9c8ff55',
                  }} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WordPress Development Section - Redesigned */}
      <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40, background: '#13305a', paddingTop: 32, paddingBottom: 48 }}>
        {/* Section Title */}
        <div style={{
          width: '80%',
          maxWidth: 900,
          margin: '0 auto 32px auto',
          background: 'rgba(24,50,90,0.85)',
          borderRadius: 32,
          padding: '18px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h2 style={{
            color: '#a9c8ff',
            fontSize: 36,
            fontWeight: 600,
            textAlign: 'center',
            margin: 0,
            letterSpacing: 1,
          }}>
            WordPress Development
          </h2>
        </div>
        {/* Card/Box */}
        <div style={{
          width: '80%',
          maxWidth: 900,
          background: '#18325a',
          borderRadius: 32,
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 40,
          gap: 40,
        }}>
          {/* Content left */}
          <div style={{ flex: 1, color: '#fff', fontSize: 22, display: 'flex', flexDirection: 'column', gap: 18, minWidth: 320 }}>
            <p style={{ fontSize: 22, lineHeight: 1.5, marginBottom: 8, color: '#e0eaff' }}>
              Power your business with custom WordPress websites — the world's most popular CMS platform.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Custom theme development',
                'WooCommerce integration',
                'SEO optimization & plugin setup',
                'Blog and content management systemEasy backend management',
              ].map((text, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', fontSize: 20, color: '#e0eaff', fontWeight: 400 }}>
                  <span style={{
                    display: 'inline-block',
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: '#a9c8ff',
                    marginRight: 16,
                    boxShadow: '0 2px 8px 0 #a9c8ff55',
                  }} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          {/* Image right */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 4px 24px 0 #b3cfff',
              border: '4px solid #b3cfff',
              background: '#fff',
              width: 320,
              height: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image
                src="/images/web.webp"
                alt="WordPress Screenshot"
                width={300}
                height={300}
                style={{ borderRadius: 20, width: 300, height: 300, objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom-Coded Websites Section - Redesigned */}
      <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40, background: '#13305a', paddingTop: 32, paddingBottom: 48 }}>
        {/* Section Title */}
        <div style={{
          width: '80%',
          maxWidth: 900,
          margin: '0 auto 32px auto',
          background: 'rgba(24,50,90,0.85)',
          borderRadius: 32,
          padding: '18px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h2 style={{
            color: '#a9c8ff',
            fontSize: 36,
            fontWeight: 600,
            textAlign: 'center',
            margin: 0,
            letterSpacing: 1,
          }}>
            Custom-Coded Websites
          </h2>
        </div>
        {/* Card/Box */}
        <div style={{
          width: '80%',
          maxWidth: 900,
          background: '#18325a',
          borderRadius: 32,
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 40,
          gap: 40,
        }}>
          {/* Image left */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 4px 24px 0 #b3cfff',
              border: '4px solid #b3cfff',
              background: '#fff',
              width: 320,
              height: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image
                src="/images/web-des.webp"
                alt="Custom Code Screenshot"
                width={300}
                height={300}
                style={{ borderRadius: 20, width: 300, height: 300, objectFit: 'cover' }}
              />
            </div>
          </div>
          {/* Content right */}
          <div style={{ flex: 1, color: '#fff', fontSize: 22, display: 'flex', flexDirection: 'column', gap: 18, minWidth: 320 }}>
            <p style={{ fontSize: 22, lineHeight: 1.5, marginBottom: 8, color: '#e0eaff' }}>
              For businesses with unique needs or complex functionality, we offer fully custom-coded websites using the latest frameworks and technologies.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'HTML5, CSS3, JavaScript, Bootstrap',
                'React.js / Next.js web apps',
                'API integration & backend development',
                'Optimized for speed and scalability',
                'Highly flexible UI/UX',
              ].map((text, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', fontSize: 20, color: '#e0eaff', fontWeight: 400 }}>
                  <span style={{
                    display: 'inline-block',
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: '#a9c8ff',
                    marginRight: 16,
                    boxShadow: '0 2px 8px 0 #a9c8ff55',
                  }} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 