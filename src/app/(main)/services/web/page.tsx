import Image from 'next/image';

export default function WebServicePage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', background: 'linear-gradient(180deg, #0a2240 0%, #0e2d56 100%)', color: '#fff', overflowX: 'hidden', fontFamily: 'Poppins, sans-serif', position: 'relative' }}>
      {/* Top vignette overlay */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: 180, pointerEvents: 'none', zIndex: 1, background: 'linear-gradient(180deg, rgba(10,34,64,0.85) 60%, rgba(10,34,64,0) 100%)' }} />

      {/* Main heading below logo */}
      <h1 style={{
        fontSize: 48,
        fontWeight: 700,
        lineHeight: 1.1,
        margin: '48px 0 0 0',
        color: '#fff',
        letterSpacing: 0.5,
        textAlign: 'left',
        paddingLeft: 64,
        zIndex: 10,
        position: 'relative',
        marginTop: 150,
      }}>
        Web & Mobile App Development
      </h1>

      {/* Background image above arch and nav bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 520,
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
        {/* Downward faded overlay at the bottom of the hero image */}
        <div style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '40%',
          background: 'linear-gradient(180deg, rgba(10,34,64,0) 0%, #0a2240 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
      </div>

      {/* Hero Section with arch */}
      <section style={{ width: '100%', minHeight: 320, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingTop: 0, paddingBottom: 0, position: 'relative', background: 'none', zIndex: 2 }}>
        {/* Only hero background or heading if needed */}
      </section>

      {/* Content Section: Character + Service Descriptions */}
      <section style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: 200, marginBottom: 64, zIndex: 4, position: 'relative' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 1200,
          width: '100%',
          gap: 48,
        }}>
          {/* Left: Character on blue rounded rectangle */}
          <div style={{ position: 'relative', width: 340, minWidth: 260, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: 420 }}>
            {/* Rounded blue rectangle */}
            <div style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: 280,
              height: 200,
              background: '#b3cfff',
              borderRadius: 80,
              zIndex: 1,
              boxShadow: '0 4px 24px 0 rgba(179,207,255,0.25)',
            }} />
            {/* Character image */}
            <img
              src="/images/fullboy.png"
              alt="3D Boy with Tablet"
              style={{ width: 260, height: 500, position: 'relative', zIndex: 2 }}
            />
          </div>
          {/* Right: Service Descriptions */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 40, minWidth: 340, maxWidth: 700, marginBottom: 40 }}>
            <div>
              <span style={{ fontWeight: 700, fontSize: 32, color: '#8cb6f7', display: 'block', marginBottom: 2, fontFamily: 'inherit' }}>Mobile App Development <span style={{ fontSize: 22, color: '#a9b8c9', fontWeight: 400 }}>(iOS & Android)</span></span>
              <span style={{ fontSize: 24, color: '#fff', display: 'block', marginTop: 8, fontFamily: 'inherit' }}>Native and cross-platform apps built for performance.</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, fontSize: 32, color: '#7fa8e7', display: 'block', marginBottom: 2, fontFamily: 'inherit' }}>Progressive Web Apps (PWAs)</span>
              <span style={{ fontSize: 24, color: '#fff', display: 'block', marginTop: 8, fontFamily: 'inherit' }}>Responsive, lightweight web apps that work across all devices</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, fontSize: 32, color: '#8cb6f7', display: 'block', marginBottom: 2, fontFamily: 'inherit' }}>Custom Web Applications</span>
              <span style={{ fontSize: 24, color: '#fff', display: 'block', marginTop: 8, fontFamily: 'inherit' }}>Tailored portals, dashboards, and platforms that scale with your needs.</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, fontSize: 32, color: '#7fa8e7', display: 'block', marginBottom: 2, fontFamily: 'inherit' }}>UI/UX Design & Prototyping</span>
              <span style={{ fontSize: 24, color: '#fff', display: 'block', marginTop: 8, fontFamily: 'inherit' }}>Engaging  interfaces designed for usability and conversion.</span>
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