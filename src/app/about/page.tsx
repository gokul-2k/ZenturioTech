'use client';
import { useState } from "react";
import { Column, Button, Text, Heading } from "@once-ui-system/core";
import type { CSSProperties } from "react";

export default function About() {
  // Dummy state for form fields (no real submission logic)
  const [form, setForm] = useState({ name: '', email: '', budget: '', category: '', details: '' });
  return (
    <div style={{ minHeight: '100vh', width: '100%', background: 'transparent', paddingLeft: 24, paddingRight: 24 }}>
      {/* Contact/Project Section */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3.5rem',
        width: '100%',
        maxWidth: 1300,
        margin: '0 auto',
        marginTop: 60,
        marginBottom: 80,
        paddingTop: 100,
      }}>
        {/* Left: Form & Text */}
        <div style={{ flex: '1 1 380px', minWidth: 340, maxWidth: 480 }}>
          <Heading as="h2" style={{ color: '#fff', fontSize: 32, fontWeight: 700, marginBottom: 12, lineHeight: 1.2 }}>
            Tell us about your next Project<br />at <span style={{ color: '#60a5fa' }}>Zenturiotech</span>
          </Heading>
          <Text style={{ color: '#bcd1f7', fontSize: 17, marginBottom: 28, lineHeight: 1.5 }}>
            We're here to help! Share your thoughts or questions with us, and we'll respond promptly.
          </Text>
          {/* Updated Form Layout */}
          <form className="about-form-responsive" style={{ display: 'flex', flexDirection: 'row', gap: 18, alignItems: 'flex-start', paddingTop: 50 }}>
            {/* Left column: 4 stacked fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, minWidth: 0 }}>
              <input type="text" placeholder="Your name" style={inputStyle} />
              <input type="email" placeholder="Your email" style={inputStyle} />
              <select style={inputStyle} defaultValue="">
                <option value="" disabled>Budget range</option>
                <option value="<$5k">&lt;$5k</option>
                <option value="$5k-$20k">$5k-$20k</option>
                <option value=">$20k">&gt;$20k</option>
              </select>
              <select style={inputStyle} defaultValue="">
                <option value="" disabled>Service category</option>
                <option value="AI">AI</option>
                <option value="Web">Web</option>
                <option value="Mobile">Mobile</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* Right column: textarea, height matches 4 fields */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <textarea placeholder="Enter your project details" style={{ ...inputStyle, minHeight: 196, height: 196, resize: 'vertical', width: '100%' }} />
            </div>
          </form>
          <Button style={{ background: '#3490fa', color: '#fff', borderRadius: 8, fontWeight: 600, fontSize: 17, padding: '0.7rem 0', marginTop: 18, width: 140 }}>Submit</Button>
        </div>
        {/* Right: Image */}
        <div style={{ flex: '1 1 340px', minWidth: 320, maxWidth: 540, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img className="about-vr-img" src="/images/vr.webp" alt="VR" style={{ width: '100%', maxWidth: 540, borderRadius: 32, objectFit: 'cover', boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)' }} />
        </div>
      </div>

      {/* Clients Section */}
      <div style={{ width: '100%', margin: '0 auto', maxWidth: 1200, marginBottom: 80, textAlign: 'center' }}>
        <Heading as="h3" style={{ color: '#fff', fontSize: 28, fontWeight: 700, marginBottom: 18 }}>
          More than <span style={{ color: '#3490fa' }}>2500+ Clients</span>
        </Heading>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginBottom: 18 }}>
          {/* Dummy client logos */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={{ width: 90, height: 90, background: 'rgba(52,144,250,0.07)', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #2e4a7b' }}>
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none"><rect width="54" height="54" rx="12" fill="#3490fa"/><text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" dy=".3em">COMPANY</text></svg>
            </div>
          ))}
        </div>
        <div style={{ color: '#bcd1f7', fontSize: 15, marginBottom: 8 }}>
          Highlighting our successful collaborations with top-tier clients<br />and their transformative projects.
        </div>
        {/* Progress bar mimic */}
        <div style={{ width: 120, height: 6, background: '#1e3a5c', borderRadius: 6, margin: '18px auto 0 auto', position: 'relative' }}>
          <div style={{ width: 38, height: 6, background: '#3490fa', borderRadius: 6, position: 'absolute', left: 0, top: 0 }} />
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{ width: '100%', margin: '0 auto', maxWidth: 1200, marginBottom: 80, textAlign: 'center',marginTop: 200 }}>
        {/* Move Hear from them text above heading, styled as a button-like label */}
        <div className="about-hear-label" style={{ marginBottom: 18, textAlign: 'left', marginLeft: 330 }}>
          <span style={{
            background: '#3490fa',
            color: '#fff',
            borderRadius: 18,
            fontWeight: 500,
            fontSize: 15,
            padding: '0.3rem 1.2rem',
            display: 'inline-block',
            marginBottom: 0,
            letterSpacing: 0.2,
          }}>Hear from them</span>
        </div>
        <Heading as="h3" style={{ color: '#fff', fontSize: 45, fontWeight: 700, marginBottom: 140}}>
          What our <span style={{ color: '#3490fa' }}>Customer</span> says
        </Heading>
        <div style={{ display: 'flex', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Testimonial 1 */}
          <div style={testimonialCardStyleCentered}>
            <div style={{ position: 'relative', width: '100%', height: 32 }}>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Harry Maguire" style={avatarStyleCentered} />
            </div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginTop: 26, textAlign: 'center' }}>Harry Maguire</div>
            <div style={{ color: '#bcd1f7', fontSize: 14, marginBottom: 10, textAlign: 'center' }}>CTO, company</div>
            <div style={{ color: '#bcd1f7', fontSize: 15, textAlign: 'center' }}>
              I've tried many platforms, but UI/UX stands out for its attention to detail and clean aesthetics. Highly recommend!
            </div>
          </div>
          {/* Testimonial 2 */}
          <div style={testimonialCardStyleCentered}>
            <div style={{ position: 'relative', width: '100%', height: 32 }}>
              <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="John Walker" style={avatarStyleCentered} />
            </div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginTop: 26, textAlign: 'center' }}>John Walker</div>
            <div style={{ color: '#bcd1f7', fontSize: 14, marginBottom: 10, textAlign: 'center' }}>CEO, company</div>
            <div style={{ color: '#bcd1f7', fontSize: 15, textAlign: 'center' }}>
              UI/UX transformed our design process! The templates are modern, user-friendly, and saved us countless hours.
            </div>
          </div>
          {/* Testimonial 3 */}
          <div style={testimonialCardStyleCentered}>
            <div style={{ position: 'relative', width: '100%', height: 32 }}>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Kristie Jenson" style={avatarStyleCentered} />
            </div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginTop: 26, textAlign: 'center' }}>Kristie Jenson</div>
            <div style={{ color: '#bcd1f7', fontSize: 14, marginBottom: 10, textAlign: 'center' }}>CMO, company</div>
            <div style={{ color: '#bcd1f7', fontSize: 15, textAlign: 'center' }}>
              As a freelancer, UI/UX has been my go-to for quick, high-quality design solutions. It's like having a design partner.
            </div>
          </div>
        </div>
      </div>

      {/* Add responsive styles for mobile */}
      <style>{`
        @media (max-width: 700px) {
          .about-form-responsive {
            flex-direction: column !important;
            gap: 0 !important;
          }
          .about-form-responsive > div {
            width: 100% !important;
            min-width: 0 !important;
            margin-bottom: 14px !important;
          }
          .about-vr-img {
            max-width: 420px !important;
          }
          .about-hear-label {
            margin-left: 18px !important;
          }
        }
        @media (max-width: 900px) and (min-width: 701px) {
          .about-vr-img {
            max-width: 420px !important;
          }
          .about-hear-label {
            margin-left: 18px !important;
          }
        }
      `}</style>
    </div>
  );
}

const inputStyle = {
  flex: 1,
  background: 'rgba(30,58,92,0.7)',
  border: '1.5px solid #2e4a7b',
  borderRadius: 8,
  color: '#fff',
  fontSize: 15,
  padding: '0.7rem 1rem',
  outline: 'none',
  marginBottom: 0,
  minWidth: 0,
};

const testimonialCardStyleCentered: React.CSSProperties = {
  flex: '1 1 320px',
  minWidth: 280,
  maxWidth: 370,
  background: 'rgba(30,58,92,0.7)',
  borderRadius: 18,
  border: '1px solid #2e4a7b',
  boxShadow: '0 2px 16px 0 rgba(7,37,73,0.13)',
  padding: '2.2rem 1.2rem 1.2rem 1.2rem',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
  overflow: 'visible',
  marginBottom: 18,
  paddingTop: 0,
};

const avatarStyleCentered: React.CSSProperties = {
  width: 64,
  height: 64,
  borderRadius: '50%',
  objectFit: 'cover',
  border: '2.5px solid #3490fa',
  position: 'absolute',
  top: -32,
  left: '50%',
  transform: 'translateX(-50%)',
  background: '#0a2342',
  zIndex: 2,
};
