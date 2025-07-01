import {
  Heading,
  Text,
  Button,
  Column,
} from "@once-ui-system/core";

export default function Trending() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', background: 'transparent' }}>
      {/* Main Content Column */}
      <Column fillWidth center padding="l" style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: '0vh', justifyContent: 'flex-start', paddingBottom: 0 }}>
        {/* What's Trending Heading */}
        <Column maxWidth="l" horizontal="center" gap="l" align="center" style={{ marginTop: '7vh', position: 'relative', zIndex: 4 }}>
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
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
              color: '#6ea8ff',
              marginBottom: 32,
            }}
          >
            What's Trending
          </Heading>
        </Column>

        {/* Trending Cards Glassmorphic Box - now square corners and gradient bg */}
        <div style={{
          width: '100%',
          maxWidth: 1100,
          margin: '0 auto',
          background: 'linear-gradient(135deg, #0a1a2f 0%, #1e3a5c 60%, #3a5fa8 100%)',
          borderRadius: 0,
          boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)',
          padding: '2.5rem 2.5rem 2.2rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.2rem',
          zIndex: 4,
          position: 'relative',
        }}>
          {/* Top Row */}
          <div style={{ display: 'flex', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{
              flex: '1 1 320px',
              minWidth: 280,
              maxWidth: 340,
              height: 210,
              background: 'rgba(255,255,255,0.10)',
              borderRadius: '1.5rem',
              boxShadow: '0 2px 16px 0 rgba(7,37,73,0.13)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(255,255,255,0.18)',
              color: '#fff',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              padding: 0,
            }}>
              {/* Trending # badge at top left */}
              <span style={{
                position: 'absolute',
                top: 18,
                left: 18,
                display: 'inline-block',
                background: 'linear-gradient(90deg, #1976d2 0%, #67e8f9 100%)',
                color: '#fff',
                borderRadius: '1.2rem 1.2rem 1.2rem 1.2rem/1.2rem 1.2rem 1.2rem 1.2rem',
                fontWeight: 600,
                fontSize: 13,
                padding: '0.25rem 1.1rem',
                boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                zIndex: 2,
              }}>Trending #1</span>
              {/* Text at left bottom */}
              <div style={{ padding: '0 0 22px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4, color: '#fff' }}>AI-Driven Innovations</div>
                <div style={{ fontSize: 14, opacity: 0.85, color: '#fff' }}>Automate and optimize trades with advanced AI analytics.</div>
              </div>
              {/* Image at right bottom */}
              <img src="/images/1.jpeg" alt="AI-Driven Innovations" style={{ width: 80, height: 80, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 18, bottom: 18, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)' }} />
            </div>
            {/* Card 2 */}
            <div style={{
              flex: '1 1 320px',
              minWidth: 280,
              maxWidth: 340,
              height: 210,
              background: 'rgba(255,255,255,0.10)',
              borderRadius: '1.5rem',
              boxShadow: '0 2px 16px 0 rgba(7,37,73,0.13)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(255,255,255,0.18)',
              color: '#fff',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              padding: 0,
            }}>
              {/* Trending # badge at top left */}
              <span style={{
                position: 'absolute',
                top: 18,
                left: 18,
                display: 'inline-block',
                background: 'linear-gradient(90deg, #1976d2 0%, #67e8f9 100%)',
                color: '#fff',
                borderRadius: '1.2rem 1.2rem 1.2rem 1.2rem/1.2rem 1.2rem 1.2rem 1.2rem',
                fontWeight: 600,
                fontSize: 13,
                padding: '0.25rem 1.1rem',
                boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                zIndex: 2,
              }}>Trending #2</span>
              {/* Text at left bottom */}
              <div style={{ padding: '0 0 22px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4, color: '#fff' }}>Web Development Breakthroughs</div>
                <div style={{ fontSize: 14, opacity: 0.85, color: '#fff' }}>The digital landscape is constantly evolving, with new web technologies.</div>
              </div>
              {/* Image at right bottom */}
              <img src="/images/2.jpeg" alt="Web Development Breakthroughs" style={{ width: 80, height: 80, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 18, bottom: 18, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)' }} />
            </div>
          </div>
          {/* Bottom Row */}
          <div style={{ display: 'flex', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Card 3 */}
            <div style={{
              flex: '1 1 320px',
              minWidth: 280,
              maxWidth: 340,
              height: 210,
              background: 'rgba(255,255,255,0.10)',
              borderRadius: '1.5rem',
              boxShadow: '0 2px 16px 0 rgba(7,37,73,0.13)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(255,255,255,0.18)',
              color: '#fff',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              padding: 0,
            }}>
              {/* Trending # badge at top left */}
              <span style={{
                position: 'absolute',
                top: 18,
                left: 18,
                display: 'inline-block',
                background: 'linear-gradient(90deg, #1976d2 0%, #67e8f9 100%)',
                color: '#fff',
                borderRadius: '1.2rem 1.2rem 1.2rem 1.2rem/1.2rem 1.2rem 1.2rem 1.2rem',
                fontWeight: 600,
                fontSize: 13,
                padding: '0.25rem 1.1rem',
                boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                zIndex: 2,
              }}>Trending #3</span>
              {/* Text at left bottom */}
              <div style={{ padding: '0 0 22px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4, color: '#fff' }}>Mobile App Evolution</div>
                <div style={{ fontSize: 14, opacity: 0.85, color: '#fff' }}>The mobile app industry is witnessing an exciting evolution, with AI integration.</div>
              </div>
              {/* Image at right bottom */}
              <img src="/images/2girls.jpg" alt="Mobile App Evolution" style={{ width: 80, height: 80, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 18, bottom: 18, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)' }} />
            </div>
            {/* Card 4 */}
            <div style={{
              flex: '1 1 320px',
              minWidth: 280,
              maxWidth: 340,
              height: 210,
              background: 'rgba(255,255,255,0.10)',
              borderRadius: '1.5rem',
              boxShadow: '0 2px 16px 0 rgba(7,37,73,0.13)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(255,255,255,0.18)',
              color: '#fff',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              padding: 0,
            }}>
              {/* Trending # badge at top left */}
              <span style={{
                position: 'absolute',
                top: 18,
                left: 18,
                display: 'inline-block',
                background: 'linear-gradient(90deg, #1976d2 0%, #67e8f9 100%)',
                color: '#fff',
                borderRadius: '1.2rem 1.2rem 1.2rem 1.2rem/1.2rem 1.2rem 1.2rem 1.2rem',
                fontWeight: 600,
                fontSize: 13,
                padding: '0.25rem 1.1rem',
                boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                zIndex: 2,
              }}>Trending #4</span>
              {/* Text at left bottom */}
              <div style={{ padding: '0 0 22px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4, color: '#fff' }}>Immersive Tech Solutions</div>
                <div style={{ fontSize: 14, opacity: 0.85, color: '#fff' }}>The world of immersive technology, including AR, VR, and the metaverse.</div>
              </div>
              {/* Image at right bottom */}
              <img src="/images/4.jpeg" alt="Immersive Tech Solutions" style={{ width: 80, height: 80, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 18, bottom: 18, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)' }} />
            </div>
          </div>
          {/* Explore All Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
            <Button style={{ background: 'linear-gradient(90deg, #1976d2 0%, #67e8f9 100%)', color: '#fff', borderRadius: '1.2rem', fontWeight: 600, padding: '0.7rem 2.2rem', fontSize: '1.1rem', border: 'none', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}>Explore all</Button>
          </div>
        </div>

        {/* Blog/Recent Articles Section */}
        <div style={{ width: '100%', margin: '0 auto', maxWidth: 1300, marginTop: 64, zIndex: 4, position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 10, color: '#cbeafe', fontSize: 26, fontWeight: 500 }}>
            Inspiration and Insights: Dive into Our Blog
          </div>
          <div style={{ textAlign: 'center', fontWeight: 800, fontSize: 38, color: '#fff', marginBottom: 36 }}>
            Recent Articles
          </div>
          <div style={{ display: 'flex', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Article 1 */}
            <div style={{
              flex: '1 1 420px',
              minWidth: 340,
              maxWidth: 520,
              height: 260,
              background: 'linear-gradient(135deg, #072549 0%, #17304a 100%)',
              borderRadius: '1.5rem',
              boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)',
              padding: 0,
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <img src="/images/3.jpeg" alt="AI for Student Assessments" style={{ width: '100%', height: 140, objectFit: 'cover', borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }} />
              <div style={{ padding: '1.2rem 1.5rem 1.2rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ fontWeight: 800, fontSize: 24, marginBottom: 8 }}>AI for Student Assessments</div>
                <div style={{ fontSize: 15, opacity: 0.93, marginBottom: 8 }}>Rethinking How We Measure Learning</div>
                <a href="#" style={{ color: '#60a5fa', fontWeight: 600, fontSize: 16, textDecoration: 'underline', marginTop: 4 }}>Read Blog</a>
              </div>
            </div>
            {/* Article 2 */}
            <div style={{
              flex: '1 1 420px',
              minWidth: 340,
              maxWidth: 520,
              height: 260,
              background: 'linear-gradient(135deg, #072549 0%, #17304a 100%)',
              borderRadius: '1.5rem',
              boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)',
              padding: 0,
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <img src="/images/5.jpeg" alt="Predictive maintenance with AI" style={{ width: '100%', height: 140, objectFit: 'cover', borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }} />
              <div style={{ padding: '1.2rem 1.5rem 1.2rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ fontWeight: 800, fontSize: 24, marginBottom: 8 }}>Predictive maintenance with AI</div>
                <div style={{ fontSize: 15, opacity: 0.93, marginBottom: 8 }}>Transforming Equipment Reliability in Manufacturing</div>
                <a href="#" style={{ color: '#60a5fa', fontWeight: 600, fontSize: 16, textDecoration: 'underline', marginTop: 4 }}>Read Blog</a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating chat button at bottom right */}
        <Button
          id="chat-float"
          style={{
            position: "fixed",
            bottom: "90px",
            right: "48px",
            zIndex: 10,
            width: 80,
            height: 80,
            minWidth: 80,
            minHeight: 80,
            borderRadius: "50%",
            background: "#072549",
            boxShadow: "0 4px 24px 0 rgba(7,37,73,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
          aria-label="Open chat"
          data-border="rounded"
          weight="default"
          href="#"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#072549"/>
            <path d="M11 14.5C11 13.1193 12.1193 12 13.5 12H22.5C23.8807 12 25 14.5V21.5C25 22.8807 23.8807 24 22.5 24H15L11 27V14.5Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
            <circle cx="15" cy="18" r="1" fill="#fff"/>
            <circle cx="18" cy="18" r="1" fill="#fff"/>
            <circle cx="21" cy="18" r="1" fill="#fff"/>
          </svg>
        </Button>
      </Column>
    </div>
  );
}
