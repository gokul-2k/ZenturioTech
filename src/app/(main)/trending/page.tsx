"use client"
import {
  Heading,
  Text,
  Button,
  Column,
  RevealFx,
  TiltFx,
} from "@once-ui-system/core";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { strapiApi } from "@/lib/strapi";
import ReactMarkdown from 'react-markdown';

export default function Trending() {
  const { isMobile } = useDeviceDetect();
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      
      // Debug environment variables
      console.log('🔧 Environment Check:', {
        STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
        hasToken: !!process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
        tokenLength: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN?.length || 0
      });
      
      console.log('Fetching blogs from Strapi...');
      const response = await strapiApi.getAllBlogs();
      console.log('Strapi response:', JSON.stringify(response, null, 2));
      console.log('Response data structure:', response.data ? {
        length: response.data.length,
        firstBlog: response.data[0] ? {
          id: response.data[0].id,
          attributes: response.data[0].attributes,
        } : null,
      } : 'No data');
      if (response.data?.[0]) {
        console.log('First blog attributes:', response.data[0].attributes);
      }
      if (response.data) {
        setBlogs(response.data);
        setLastUpdated(new Date());
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch blogs when component mounts
    fetchBlogs();
    
    // Set up automatic refresh every 30 seconds
    const interval = setInterval(() => {
      console.log('Auto-refreshing blogs...');
      fetchBlogs();
    }, 30000000000000000000000); // 30 seconds
    
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <RevealFx>
        <div style={{ position: 'relative', minHeight: '100vh', width: '100%', background: 'transparent' }}>
          {/* Main Content Column */}
          <Column fillWidth center padding="l" style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: '0vh', justifyContent: 'flex-start', paddingBottom: 0 }}>
            {/* What's Trending Heading */}
            <Column maxWidth="l" horizontal="center" gap="l" align="center" style={{ marginTop: '15vh', position: 'relative', zIndex: 4 }}>
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
                  marginBottom: 82,
                }}
              >
                What We Think
              </Heading>
            </Column>

            {/* Trending Cards Glassmorphic Box - now bigger, with padding */}
            <div style={{
              width: '100%',
              maxWidth: 1400,
              margin: '0 auto',
              background: 'linear-gradient(135deg, #0a1a2f 0%, #1e3a5c 60%, #3a5fa8 100%)',
              boxShadow: '0 4px 48px 0 rgb(0, 0, 0)',
              padding: '3.5rem 3.5rem 3.2rem 3.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.8rem',
              zIndex: 4,
              position: 'relative',
            }}>
              {/* Top Row */}
              <div style={{ display: 'flex', gap: '2.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* Card 1 */}
                {isMobile ? (
                  <Link href="/trending/smart-hospitals" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <TiltFx>
                      <div style={{
                        flex: '1 1 360px',
                        minWidth: 320,
                        maxWidth: 380,
                        height: 240,
                        background: 'rgba(255,255,255,0.13)',
                        borderRadius: '2rem',
                        boxShadow: '0 4px 24px 0 rgba(7,37,73,0.16)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1.5px solid rgba(255,255,255,0.22)',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start',
                        position: 'relative',
                        overflow: 'hidden',
                        padding: 0,
                        cursor: 'pointer',
                      }} className="trending-card">
                        {/* Reflective glass effect */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          pointerEvents: 'none',
                          zIndex: 1,
                          background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.01) 100%)',
                          mixBlendMode: 'lighten',
                        }} />
                        {/* Trending # badge at top right/left */}
                        <span style={{
                          position: 'absolute',
                          top: 18,
                          left: 18,
                          display: 'inline-block',
                          background: 'rgba(255,255,255,0.13)',
                          border: '1px solid rgba(255,255,255,0.22)',
                          color: '#fff',
                          borderRadius: '1.2rem',
                          fontWeight: 600,
                          fontSize: 13,
                          padding: '0.5rem 1.1rem',
                          boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                          zIndex: 2,
                        }} className="trending-badge">Blog #1</span>
                        {/* Text at left bottom */}
                        <div style={{ padding: '0 0 28px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                          <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>Smart Hospitals</div>
                          <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>How AI Is Transforming Hospital Operations</div>
                        </div>
                        {/* Image at bottom right */}
                        <img src="/images/hosbot1.png" alt="AI-Driven Innovations" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                      </div>
                    </TiltFx>
                  </Link>
                ) : (
                  <Link href="/trending/smart-hospitals" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                      flex: '1 1 360px',
                      minWidth: 320,
                      maxWidth: 380,
                      height: 240,
                      background: 'rgba(255,255,255,0.13)',
                      borderRadius: '2rem',
                      boxShadow: '0 4px 24px 0 rgba(7,37,73,0.16)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1.5px solid rgba(255,255,255,0.22)',
                      color: '#fff',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      position: 'relative',
                      overflow: 'hidden',
                      padding: 0,
                      cursor: 'pointer',
                    }} className="trending-card">
                      {/* Reflective glass effect */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 1,
                        background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.01) 100%)',
                        mixBlendMode: 'lighten',
                      }} />
                      {/* Trending # badge at top right/left */}
                      <span style={{
                        position: 'absolute',
                        top: 18,
                        left: 18,
                        display: 'inline-block',
                        background: 'rgba(255,255,255,0.13)',
                        border: '1px solid rgba(255,255,255,0.22)',
                        color: '#fff',
                        borderRadius: '1.2rem',
                        fontWeight: 600,
                        fontSize: 13,
                        padding: '0.5rem 1.1rem',
                        boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                        zIndex: 2,
                      }} className="trending-badge">Blog #1</span>
                      {/* Text at left bottom */}
                      <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>Smart Hospitals</div>
                        <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>How AI Is Transforming Hospital Operations</div>
                      </div>
                      {/* Image at bottom right */}
                      <img src="/images/hosbot1.png" alt="Smart Hospitals" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                    </div>
                  </Link>
                )}
                {/* Card 2 */}
                {isMobile ? (
                  <Link href="/trending/mental-health" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <TiltFx>
                      <div style={{
                        flex: '1 1 360px',
                        minWidth: 320,
                        maxWidth: 480,
                        height: 240,
                        background: 'rgba(255,255,255,0.13)',
                        borderRadius: '2rem',
                        boxShadow: '0 4px 24px 0 rgba(7,37,73,0.16)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1.5px solid rgba(255,255,255,0.22)',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start',
                        position: 'relative',
                        overflow: 'hidden',
                        padding: 0,
                        cursor: 'pointer',
                      }} className="trending-card">
                        {/* Reflective glass effect */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          pointerEvents: 'none',
                          zIndex: 1,
                          background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.01) 100%)',
                          mixBlendMode: 'lighten',
                        }} />
                        {/* Trending # badge at top left */}
                        <span style={{
                          position: 'absolute',
                          top: 18,
                          left: 18,
                          display: 'inline-block',
                          background: 'rgba(255,255,255,0.13)',
                          border: '1px solid rgba(255,255,255,0.22)',
                          color: '#fff',
                          borderRadius: '1.2rem',
                          fontWeight: 600,
                          fontSize: 13,
                          padding: '0.5rem 1.1rem',
                          boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                          zIndex: 2,
                        }} className="trending-badge">Blog #2</span>
                        {/* Text at left bottom */}
                        <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                          <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>AI in Mental Health</div>
                          <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>A Silent Revolution in Emotional Well-being</div>
                        </div>
                        {/* Image at bottom right */}
                        <img src="/images/mental1.png" alt="Web Development Breakthroughs" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                      </div>
                    </TiltFx>
                  </Link>
                ) : (
                  <Link href="/trending/mental-health" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                      flex: '1 1 360px',
                      minWidth: 320,
                      maxWidth: 480,
                      height: 240,
                      background: 'rgba(255,255,255,0.13)',
                      borderRadius: '2rem',
                      boxShadow: '0 4px 24px 0 rgba(7,37,73,0.16)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1.5px solid rgba(255,255,255,0.22)',
                      color: '#fff',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      position: 'relative',
                      overflow: 'hidden',
                      padding: 0,
                      cursor: 'pointer',
                    }} className="trending-card">
                      {/* Reflective glass effect */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 1,
                        background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.01) 100%)',
                        mixBlendMode: 'lighten',
                      }} />
                      {/* Trending # badge at top left */}
                      <span style={{
                        position: 'absolute',
                        top: 18,
                        left: 18,
                        display: 'inline-block',
                        background: 'rgba(255,255,255,0.13)',
                        border: '1px solid rgba(255,255,255,0.22)',
                        color: '#fff',
                        borderRadius: '1.2rem',
                        fontWeight: 600,
                        fontSize: 13,
                        padding: '0.5rem 1.1rem',
                        boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                        zIndex: 2,
                      }} className="trending-badge">Blog #2</span>
                      {/* Text at left bottom */}
                      <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>AI in Mental Health</div>
                        <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>A Silent Revolution in Emotional Well-being</div>
                      </div>
                      {/* Image at bottom right */}
                      <img src="/images/mental1.png" alt="Web Development Breakthroughs" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                    </div>
                  </Link>
                )}
                {/* Card 3 */}
                {isMobile ? (
                  <Link href="/trending/robotic-surgery" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <TiltFx>
                      <div style={{
                        flex: '1 1 360px',
                        minWidth: 320,
                        maxWidth: 480,
                        height: 240,
                        background: 'rgba(255,255,255,0.13)',
                        borderRadius: '2rem',
                        boxShadow: '0 4px 24px 0 rgba(7,37,73,0.16)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1.5px solid rgba(255,255,255,0.22)',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start',
                        position: 'relative',
                        overflow: 'hidden',
                        padding: 0,
                        cursor: 'pointer',
                      }} className="trending-card">
                        {/* Reflective glass effect */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          pointerEvents: 'none',
                          zIndex: 1,
                          background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.01) 100%)',
                          mixBlendMode: 'lighten',
                        }} />
                        {/* Trending # badge at top left */}
                        <span style={{
                          position: 'absolute',
                          top: 18,
                          left: 18,
                          display: 'inline-block',
                          background: 'rgba(255,255,255,0.13)',
                          border: '1px solid rgba(255,255,255,0.22)',
                          color: '#fff',
                          borderRadius: '1.2rem',
                          fontWeight: 600,
                          fontSize: 13,
                          padding: '0.5rem 1.1rem',
                          boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                          zIndex: 2,
                        }} className="trending-badge">Blog #3</span>
                        {/* Text at left bottom */}
                        <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                          <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>AI in Robotic Surgery</div>
                          <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>How and Where Precision Meets Intelligence</div>
                        </div>
                        {/* Image at bottom right */}
                        <img src="/images/boy.webp" alt="Mobile App Evolution" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                      </div>
                    </TiltFx>
                  </Link>
                ) : (
                  <Link href="/trending/robotic-surgery" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                      flex: '1 1 360px',
                      minWidth: 320,
                      maxWidth: 480,
                      height: 240,
                      background: 'rgba(255,255,255,0.13)',
                      borderRadius: '2rem',
                      boxShadow: '0 4px 24px 0 rgba(7,37,73,0.16)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1.5px solid rgba(255,255,255,0.22)',
                      color: '#fff',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      position: 'relative',
                      overflow: 'hidden',
                      padding: 0,
                      cursor: 'pointer',
                    }} className="trending-card">
                      {/* Reflective glass effect */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 1,
                        background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.01) 100%)',
                        mixBlendMode: 'lighten',
                      }} />
                      {/* Trending # badge at top left */}
                      <span style={{
                        position: 'absolute',
                        top: 18,
                        left: 18,
                        display: 'inline-block',
                        background: 'rgba(255,255,255,0.13)',
                        border: '1px solid rgba(255,255,255,0.22)',
                        color: '#fff',
                        borderRadius: '1.2rem',
                        fontWeight: 600,
                        fontSize: 13,
                        padding: '0.5rem 1.1rem',
                        boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                        zIndex: 2,
                      }} className="trending-badge">Blog #3</span>
                      {/* Text at left bottom */}
                      <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>AI in Robotic Surgery</div>
                        <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>How and Where Precision Meets Intelligence </div>
                      </div>
                      {/* Image at bottom right */}
                      <img src="/images/hospitalbg.png" alt="Mobile App Evolution" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                    </div>
                  </Link>
                )}
                {/* Card 4 */}
                {isMobile ? (
                  <Link href="/trending/medical-imaging" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <TiltFx>
                      <div style={{
                        flex: '1 1 360px',
                        minWidth: 320,
                        maxWidth: 380,
                        height: 240,
                        background: 'rgba(255,255,255,0.13)',
                        borderRadius: '2rem',
                        boxShadow: '0 4px 24px 0 rgba(7,37,73,0.16)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1.5px solid rgba(255,255,255,0.22)',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start',
                        position: 'relative',
                        overflow: 'hidden',
                        padding: 0,
                        cursor: 'pointer',
                      }} className="trending-card">
                        {/* Reflective glass effect */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          pointerEvents: 'none',
                          zIndex: 1,
                          background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.01) 100%)',
                          mixBlendMode: 'lighten',
                        }} />
                        {/* Trending # badge at top left */}
                        <span style={{
                          position: 'absolute',
                          top: 18,
                          left: 18,
                          display: 'inline-block',
                          background: 'rgba(255,255,255,0.13)',
                          border: '1px solid rgba(255,255,255,0.22)',
                          color: '#fff',
                          borderRadius: '1.2rem',
                          fontWeight: 600,
                          fontSize: 13,
                          padding: '0.5rem 1.1rem',
                          boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                          zIndex: 2,
                        }} className="trending-badge">Blog #4</span>
                        {/* Text at left bottom */}
                        <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                          <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>AI in Medical Imaging</div>
                          <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>Future of Faster,Quick,Smarter Diagnostics</div>
                        </div>
                        {/* Image at bottom right */}
                        <img src="/images/imaging.png" alt="Immersive Tech Solutions" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                      </div>
                    </TiltFx>
                  </Link>
                ) : (
                  <Link href="/trending/medical-imaging" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                      flex: '1 1 360px',
                      minWidth: 320,
                      maxWidth: 380,
                      height: 240,
                      background: 'rgba(255,255,255,0.13)',
                      borderRadius: '2rem',
                      boxShadow: '0 4px 24px 0 rgba(7,37,73,0.16)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1.5px solid rgba(255,255,255,0.22)',
                      color: '#fff',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      position: 'relative',
                      overflow: 'hidden',
                      padding: 0,
                      cursor: 'pointer',
                    }} className="trending-card">
                      {/* Reflective glass effect */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 1,
                        background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.01) 100%)',
                        mixBlendMode: 'lighten',
                      }} />
                      {/* Trending # badge at top left */}
                      <span style={{
                        position: 'absolute',
                        top: 18,
                        left: 18,
                        display: 'inline-block',
                        background: 'rgba(255,255,255,0.13)',
                        border: '1px solid rgba(255,255,255,0.22)',
                        color: '#fff',
                        borderRadius: '1.2rem',
                        fontWeight: 600,
                        fontSize: 13,
                        padding: '0.5rem 1.1rem',
                        boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                        zIndex: 2,
                      }} className="trending-badge">Blog #4</span>
                      {/* Text at left bottom */}
                      <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>AI in Medical Imaging</div>
                        <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}> Future of Faster,Quick,Smarter Diagnostics</div>
                      </div>
                      {/* Image at bottom right */}
                      <img src="/images/imaging.png" alt="Immersive Tech Solutions" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                    </div>
                  </Link>
                )}
              </div>
              {/* Explore All Button */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
                <Button
                  style={{ background: 'linear-gradient(90deg, #1976d2 0%, #67e8f9 100%)', color: '#fff', borderRadius: '1.2rem', fontWeight: 600, padding: '0.7rem 2.2rem', fontSize: '1.1rem', border: 'none', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}
                  onClick={() => setShowUpcoming((v) => !v)}
                >
                  {showUpcoming ? 'Show Less' : 'Explore all'}
                </Button>
              </div>
            </div>
            {showUpcoming && (
              <div style={{
                width: '100%',
                maxWidth: '100%',
                margin: '32px auto 0 auto',
                background: 'linear-gradient(135deg, #0a1a2f 0%, #1e3a5c 60%, #3a5fa8 100%)',
                boxShadow: '0 4px 48px 0 rgb(0, 0, 0)',
                padding: '2.5rem 2.5rem 2.2rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.2rem',
                zIndex: 4,
                position: 'relative',
                borderRadius: 24,
                overflowX: 'auto'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '20px',
                  padding: '0 10px'
                }}>
                  <div style={{ 
                    color: '#fff', 
                    fontSize: '14px',
                    opacity: 0.8
                  }}>
                    {lastUpdated && `Last updated: ${lastUpdated.toLocaleTimeString()}`}
                  </div>
                  <button
                    onClick={fetchBlogs}
                    disabled={loading}
                    style={{
                      background: 'linear-gradient(135deg, #3a5fa8 0%, #1e3a5c 100%)',
                      color: '#fff',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      fontSize: '14px',
                      opacity: loading ? 0.6 : 1
                    }}
                  >
                    {loading ? 'Refreshing...' : 'Refresh Blogs'}
                  </button>
                </div>
                {loading && (
                  <div style={{ 
                    color: '#fff', 
                    textAlign: 'center', 
                    padding: '20px',
                    fontSize: '16px'
                  }}>
                    Loading blogs from Strapi...
                  </div>
                )}
                <div style={{ 
                  display: 'flex', 
                  gap: '2.2rem', 
                  justifyContent: 'flex-start',
                  minWidth: 'max-content',
                  paddingBottom: '1rem'
                }}>
                  {/* Only show Strapi blogs as cards */}
                  {blogs && blogs.length > 0 && blogs.map((blog, index) => {
                    // Debug log for each blog
                    // Debug the entire blog object structure
                    console.log('Complete blog object:', JSON.stringify(blog, null, 2));
                    // Debug the data we're trying to access
                    console.log('Blog details:', {
                      id: blog.id,
                      rawAttributes: blog.attributes,
                      textcontent: blog.attributes?.Textcontent,
                      slug: blog.attributes?.slug,
                      author: blog.attributes?.author,
                      desig: blog.attributes?.desig,
                      image: blog.attributes?.image?.data?.url,
                      thumbnail: blog.attributes?.thumbnail?.data?.url
                    });

                    return (
                      <Link
                        href={`/blog/${blog.slug}`}
                        key={blog.slug || index}
                        style={{ textDecoration: 'none', color: 'inherit', flex: '0 0 auto', width: '360px' }}
                      >
                        <TiltFx>
                          <div style={{
                            flex: '1 1 360px',
                            minWidth: 320,
                            maxWidth: 380,
                            height: 240 ,
                            background: 'rgba(255,255,255,0.13)',
                            borderRadius: '2rem',
                            boxShadow: '0 4px 24px 0 rgba(7,37,73,0.16)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            border: '1.5px solid rgba(255,255,255,0.22)',
                            color: '#fff',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-start',
                            position: 'relative',
                            overflow: 'hidden',
                            padding: 0,
                            cursor: 'pointer',
                          }} className="trending-card">
                            {/* Reflective glass effect */}
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              pointerEvents: 'none',
                              zIndex: 1,
                              background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.01) 100%)',
                              mixBlendMode: 'lighten',
                            }} />
                            {/* Blog number badge */}
                            <span style={{
                              position: 'absolute',
                              top: 18,
                              left: 18,
                              display: 'inline-block',
                              background: 'rgba(255,255,255,0.13)',
                              border: '1px solid rgba(255,255,255,0.22)',
                              color: '#fff',
                              borderRadius: '1.2rem',
                              fontWeight: 600,
                              fontSize: 13,
                              padding: '0.5rem 1.1rem',
                              boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)',
                              zIndex: 2,
                            }}>Blog #{index + 5}</span>
                            {/* Text at left bottom */}
                            <div style={{ 
                              padding: '0 0 18px 28px', 
                              flex: 1, 
                              display: 'flex', 
                              flexDirection: 'column', 
                              justifyContent: 'flex-end', 
                              alignItems: 'flex-start', 
                              zIndex: 2, 
                              textAlign: 'left', 
                              paddingRight: 170 
                            }}>
                              <div style={{ 
                                fontWeight: 700, 
                                fontSize: 14, 
                                marginBottom: 4, 
                                color: '#fff',
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                textOverflow: 'ellipsis' 
                              }}>
                                {blog.Title?.substring(0, 65) || 'Untitled Blog'}
                              </div>
                              <div style={{ 
                                fontSize: 12, 
                                opacity: 0.85, 
                                color: '#fff',
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                textOverflow: 'ellipsis'
                              }}>
                                {blog.content?.substring(0, 150) || 'No content available'}
                              </div>
                              {/* {(blog.author || blog.desig) && (
                                <div style={{ 
                                  fontSize: 13, 
                                  opacity: 0.7, 
                                  color: '#fff',
                                  marginTop: 8
                                }}>
                                  {blog.author && `By ${blog.author}`}
                                  {blog.desig && ` - ${blog.desig}`}
                                </div>
                              )} */}
                            </div>
                            {/* Blog Image */}
                            <img 
                              src={blog.thumbnail?.url ? `${blog.thumbnail.url}` : '/images/default-blog.png'} 
                              alt={blog.Title || 'Blog Image'} 
                              style={{ 
                                width: 160, 
                                height: 180, 
                                borderRadius: 18, 
                                objectFit: 'cover', 
                                position: 'absolute', 
                                right: 1, 
                                bottom: 1, 
                                boxShadow: '0 2px 8px 0 rgba(25,118,210,0.13)', 
                                zIndex: 2 
                              }} 
                            />
                          </div>
                        </TiltFx>
                      </Link>
                    );
                  })}
                </div>
                {/* Blog Content Modal/Inline */}
                {selectedBlog && (
                  <div style={{
                    marginTop: 32,
                    background: 'rgba(10,26,47,0.97)',
                    borderRadius: 18,
                    padding: '2rem',
                    color: '#fff',
                    maxWidth: 900,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)',
                    zIndex: 10,
                    position: 'relative',
                  }}>
                    <button
                      onClick={() => setSelectedBlog(null)}
                      style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'transparent',
                        color: '#fff',
                        border: 'none',
                        fontSize: 24,
                        cursor: 'pointer',
                        zIndex: 11,
                      }}
                      aria-label="Close blog content"
                    >
                      ×
                    </button>
                    
                    {/* Blog Header */}
                    <div style={{ marginBottom: 32 }}>
                      <h1 style={{ 
                        fontSize: 32, 
                        fontWeight: 700, 
                        marginBottom: 16,
                        color: '#6ea8ff'
                      }}>
                        {selectedBlog.attributes?.Title || 'Untitled Blog'}
                      </h1>
                      
                      {(selectedBlog.attributes?.author || selectedBlog.attributes?.desig) && (
                        <div style={{ 
                          fontSize: 16, 
                          color: '#fff', 
                          opacity: 0.8,
                          marginBottom: 24
                        }}>
                          {selectedBlog.attributes.author && `By ${selectedBlog.attributes.author}`}
                          {selectedBlog.attributes.desig && ` - ${selectedBlog.attributes.desig}`}
                        </div>
                      )}
                    </div>

                    {/* Blog Image */}
                    {selectedBlog.attributes?.image && (
                      <div style={{ marginBottom: 32 }}>
                        <img 
                          src={selectedBlog.attributes.image}
                          alt={selectedBlog.attributes.Title || 'Blog image'}
                          style={{
                            width: '100%',
                            maxHeight: 400,
                            objectFit: 'cover',
                            borderRadius: 12
                          }}
                        />
                      </div>
                    )}

                    {/* Blog Content */}
                    <div style={{ fontSize: 17, lineHeight: 1.7 }}>
                      <ReactMarkdown
                        components={{
                          h2: ({node, ...props}) => (
                            <h2 style={{ 
                              fontSize: 24, 
                              fontWeight: 600, 
                              marginTop: 32, 
                              marginBottom: 16, 
                              color: '#6ea8ff' 
                            }} {...props} />
                          ),
                          p: ({node, ...props}) => (
                            <p style={{ 
                              fontSize: 17, 
                              marginBottom: 20, 
                              color: '#fff', 
                              lineHeight: 1.7 
                            }} {...props} />
                          ),
                          li: ({node, ...props}) => (
                            <li style={{ 
                              fontSize: 17, 
                              marginBottom: 8, 
                              color: '#fff', 
                              lineHeight: 1.7, 
                              marginLeft: 24 
                            }} {...props} />
                          ),
                          ul: ({node, ...props}) => (
                            <ul style={{ 
                              marginBottom: 20, 
                              marginTop: 12 
                            }} {...props} />
                          ),
                        }}
                      >
                        {selectedBlog.attributes?.content || 'No content available'}
                      </ReactMarkdown>
                    </div>

                    {/* Author Section */}
                    {selectedBlog.attributes?.author && (
                      <div style={{ 
                        marginTop: 40, 
                        paddingTop: 24, 
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        fontSize: 14,
                        color: '#fff',
                        opacity: 0.7
                      }}>
                        Written by {selectedBlog.attributes.author}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

           
            {/* Floating chat button at bottom right */}
            {/* <Button
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
            </Button> */}
          </Column>
        </div>
      </RevealFx>
      <style>{`
        @media (max-width: 900px) {
          .trending-badge {
            top: 8px !important;
            right: 12px !important;
            left: auto !important;
            font-size: 11px !important;
            padding: 0.5rem 0.7rem !important;
            border-radius: 0.9rem !important;
          }
          .trending-text {
            padding: 18px 12px 12px 16px !important;
            padding-right: 140px !important;
            max-width: 100% !important;
          }
          .trending-text > div:first-child {
            font-size: 17px !important;
            margin-bottom: 6px !important;
            line-height: 1.2 !important;
          }
          .trending-text > div:last-child {
            font-size: 13px !important;
            opacity: 0.9 !important;
            line-height: 1.3 !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 3 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
          .trending-card {
            margin-left: 10px !important;
            height: 200px !important;
            min-width: 280px !important;
            max-width: 100% !important;
          }
          .trending-card img {
            width: 120px !important;
            height: 140px !important;
            right: 8px !important;
          }
          .trending-card > div:first-child {
            background: linear-gradient(120deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.01) 100%) !important;
          }

          /* Specific styles for upcoming blog cards */
          [style*="Upcoming Blogs"] {
            font-size: 24px !important;
            margin-bottom: 12px !important;
          }
          [style*="Upcoming Blogs"] + div {
            gap: 1.5rem !important;
          }
          [style*="Upcoming Blogs"] + div > div {
            height: 180px !important;
            min-width: 280px !important;
          }
          [style*="Upcoming Blogs"] + div > div > div[style*="padding"] {
            padding: 18px 12px 12px 16px !important;
            padding-right: 140px !important;
          }
          [style*="Upcoming Blogs"] + div > div > div[style*="padding"] > div:first-of-type {
            font-size: 16px !important;
            margin-bottom: 6px !important;
            line-height: 1.2 !important;
            margin-top: 0 !important;
            margin-bottom: 8px !important;
            font-weight: 600 !important;
          }
          [style*="Upcoming Blogs"] + div > div > div[style*="padding"] > div:last-of-type {
            font-size: 12px !important;
            line-height: 1.3 !important;
            margin: 0 !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 2 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            opacity: 0.9 !important;
          }
          [style*="Upcoming Blogs"] + div > div > img {
            width: 120px !important;
            height: 140px !important;
            right: 8px !important;
            bottom: 8px !important;
          }
        }
      `}</style>
    </>
  );
}
