'use client';
import { useState } from "react";
import { Column, Button, Text, Heading, TiltFx, RevealFx } from "@once-ui-system/core";
import type { CSSProperties } from "react";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

export default function About() {
  const { isMobile, isTablet } = useDeviceDetect();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submission started');
    setIsLoading(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to JSON
    const formDataObj = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      budget: formData.get('budget') as string,
      category: formData.get('category') as string,
      message: formData.get('message') as string,
    };

    console.log('Form data:', formDataObj);

    try {
      console.log('Sending request to API...');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj),
      });

      console.log('Response received:', response.status, response.statusText);

      if (response.ok) {
        console.log('Form submitted successfully');
        setSubmitStatus('success');
        form.reset();
      } else {
        const errorData = await response.json();
        console.log('Form submission failed:', errorData);
        throw new Error(errorData.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RevealFx>
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
            {/* Status Message */}
            {submitStatus === 'success' && (
              <div style={{ color: '#4ade80', fontSize: 15, marginBottom: 12, padding: '8px 12px', background: 'rgba(74, 222, 128, 0.1)', borderRadius: 8 }}>
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div style={{ color: '#ef4444', fontSize: 15, marginBottom: 12, padding: '8px 12px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: 8 }}>
                Failed to send message. Please try again.
              </div>
            )}
            {/* Form Layout */}
            <form 
              id="contact-form"
              onSubmit={handleSubmit} 
              className="about-form-responsive" 
              style={{ display: 'flex', flexDirection: 'row', gap: 18, alignItems: 'flex-start', paddingTop: 50 }}
            >
              {/* Left column: 4 stacked fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, minWidth: 0 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  style={inputStyle}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  style={inputStyle}
                />
                <select
                  name="budget"
                  required
                  style={inputStyle}
                  defaultValue=""
                >
                  <option value="" disabled>Budget range</option>
                  <option value="<$5k">&lt;$5k</option>
                  <option value="$5k-$20k">$5k-$20k</option>
                  <option value=">$20k">&gt;$20k</option>
                </select>
                <select
                  name="category"
                  required
                  style={inputStyle}
                  defaultValue=""
                >
                  <option value="" disabled>Service category</option>
                  <option value="AI">AI</option>
                  <option value="Web">Web</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Right column: textarea */}
              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <textarea
                  name="message"
                  placeholder="Enter your project details"
                  required
                  style={{ ...inputStyle, minHeight: 196, height: 196, resize: 'vertical', width: '100%' }}
                />
              </div>
            </form>
            <Button 
              type="submit"
              form="contact-form"
              disabled={isLoading}
              style={{ 
                background: isLoading ? '#2470cc' : '#3490fa', 
                color: '#fff', 
                borderRadius: 8, 
                fontWeight: 600, 
                fontSize: 17, 
                padding: '0.7rem 0', 
                marginTop: 18, 
                width: 140,
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8
              }}
            >
              {isLoading ? (
                <>
                  <span style={{ width: 16, height: 16, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                  Sending...
                </>
              ) : 'Submit'}
            </Button>
          </div>
          {/* Right: Image */}
          <TiltFx>
          <div style={{ flex: '1 1 340px', minWidth: 320, maxWidth: 540, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img className="about-vr-img" src="/images/vr.webp" alt="VR" style={{ width: '100%', maxWidth: 540, borderRadius: 32, objectFit: 'cover', boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)' }} />
          </div>
          </TiltFx>
        </div>

        {/* Add responsive styles for mobile */}
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
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
    </RevealFx>
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
