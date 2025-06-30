import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: 'linear-gradient(rgb(152, 217, 252) 100%)',
        color: '#072549',
        padding: '3rem 0 2rem 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '3.5rem',
        fontSize: '1rem',
        boxShadow: '0 -2px 24px 0 rgba(103,232,249,0.08)',
        marginTop: '4rem',
        paddingLeft: '10vw', // add left padding
        paddingRight: '3vw', // add right padding for symmetry
      }}
    >
      {/* Section 1: Logo & Address & Social */}
      <div style={{ minWidth: 200, flex: '1 1 220px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12}}>
        <Image src="/images/zen.png" alt="Logo" width={216} height={30} style={{ marginBottom: 8, }} />
        <div style={{ color: '#1976d2', fontWeight: 700, marginBottom: 2, fontSize:22 }}>Address</div>
        <div style={{ color: '#222', fontWeight: 300, marginBottom: 8 }}>Technopark, Trivandrum</div>
        <div style={{ color: '#1976d2', fontWeight: 700, marginBottom: 2, fontSize:22 }}>Follow us on</div>
        <div style={{ display: 'flex', gap: 12 }}>
          {/* Facebook */}
          <a href="#" aria-label="Facebook" style={{ color: '#fff' }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17 2.1h-2.2c-2.2 0-3.7 1.3-3.7 3.5v1.4H8.1c-.2 0-.3.1-.3.3v2.2c0 .2.1.3.3.3h2.1v7.6c0 .2.1.3.3.3h2.3c.2 0 .3-.1.3-.3v-7.6h2.1c.2 0 .3-.1.3-.3l.1-2.2c0-.2-.1-.3-.3-.3h-2.2V6c0-.6.2-.9.9-.9h1.3c.2 0 .3-.1.3-.3V2.4c0-.2-.1-.3-.3-.3z" fill="#fff"/></svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" style={{ color: '#fff' }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" fill="#fff"/><circle cx="12" cy="12" r="4" fill="#1976d2"/><circle cx="17" cy="7" r="1.2" fill="#1976d2"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" style={{ color: '#fff' }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#fff"/><rect x="6" y="10" width="2" height="7" fill="#1976d2"/><rect x="11" y="10" width="2" height="7" fill="#1976d2"/><circle cx="7" cy="7" r="1" fill="#1976d2"/><rect x="13" y="13" width="2" height="4" fill="#1976d2"/><rect x="16" y="10" width="2" height="7" fill="#1976d2"/></svg>
          </a>
          {/* X (Twitter) */}
          <a href="#" aria-label="X" style={{ color: '#fff' }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#fff"/><path d="M7 7l10 10M17 7L7 17" stroke="#1976d2" strokeWidth="2"/></svg>
          </a>
        </div>
      </div>
      {/* Section 2: Get in Touch */}
      <div style={{ minWidth: 200, flex: '1 1 220px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ color: '#1976d2', fontWeight: 700, marginBottom: 2, fontSize:22 }}>Get in Touch</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#072549', fontWeight: 300 }}>
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M2 4.5A2.5 2.5 0 014.5 2h11A2.5 2.5 0 0118 4.5v11A2.5 2.5 0 0115.5 18h-11A2.5 2.5 0 012 15.5v-11z" stroke="#1976d2" strokeWidth="1.5"/><path d="M4 6l6 5 6-5" stroke="#1976d2" strokeWidth="1.5"/></svg>
          <span>contact@zenturio.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#072549', fontWeight: 300 }}>
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" stroke="#1976d2" strokeWidth="1.5"/><path d="M10 6v4l2.5 2.5" stroke="#1976d2" strokeWidth="1.5"/></svg>
          <span>+91-8129993666</span>
        </div>
      </div>
      {/* Section 3: Company */}
      <div style={{ minWidth: 160, flex: '1 1 180px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ color: '#1976d2', fontWeight: 700, marginBottom: 2, fontSize:22 }}>Company</div>
        <div style={{ color: '#072549', fontWeight: 300, opacity: 0.92 }}>
          Who we are <br />What we do<br />Careers
        </div>
      </div>
      {/* Section 4: Quick Links */}
      <div style={{ minWidth: 160, flex: '1 1 180px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ color: '#1976d2', fontWeight: 700, marginBottom: 2, fontSize:22 }}>Quick Links</div>
        <div style={{ color: '#072549', fontWeight: 300, opacity: 0.92 }}>
          Contact US<br />Blog<br />Case Study<br />What's Trending
        </div>
      </div>
    </footer>
  );
}
