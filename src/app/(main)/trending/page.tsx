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

export default function Trending() {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 900);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
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
                What's Trending
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
                {isDesktop ? (
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
                      }} className="trending-badge">Trending #1</span>
                      {/* Text at left bottom */}
                      <div style={{ padding: '0 0 28px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>AI-Driven Innovations</div>
                        <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>Automate and optimize trades with advanced AI analytics.</div>
                      </div>
                      {/* Image at bottom right */}
                      <img src="/images/robo.webp" alt="AI-Driven Innovations" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                    </div>
                  </TiltFx>
                ) : (
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
                    }} className="trending-badge">Trending #1</span>
                    {/* Text at left bottom */}
                    <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                      <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>AI-Driven Innovations</div>
                      <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>Automate and optimize trades with advanced AI analytics.</div>
                    </div>
                    {/* Image at bottom right */}
                    <img src="/images/robo.webp" alt="AI-Driven Innovations" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                  </div>
                )}
                {/* Card 2 */}
                {isDesktop ? (
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
                      }} className="trending-badge">Trending #2</span>
                      {/* Text at left bottom */}
                      <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>Web Development Breakthroughs</div>
                        <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>The digital landscape is constantly evolving, with new web technologies.</div>
                      </div>
                      {/* Image at bottom right */}
                      <img src="/images/web.webp" alt="Web Development Breakthroughs" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                    </div>
                  </TiltFx>
                ) : (
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
                    }} className="trending-badge">Trending #2</span>
                    {/* Text at left bottom */}
                    <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                      <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>Web Development Breakthroughs</div>
                      <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>The digital landscape is constantly evolving, with new web technologies.</div>
                    </div>
                    {/* Image at bottom right */}
                    <img src="/images/web.webp" alt="Web Development Breakthroughs" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                  </div>
                )}
                {/* Card 3 */}
                {isDesktop ? (
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
                      }} className="trending-badge">Trending #3</span>
                      {/* Text at left bottom */}
                      <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>Mobile App Evolution</div>
                        <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>The mobile app industry is witnessing an exciting evolution, with AI integration.</div>
                      </div>
                      {/* Image at bottom right */}
                      <img src="/images/boy.webp" alt="Mobile App Evolution" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                    </div>
                  </TiltFx>
                ) : (
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
                    }} className="trending-badge">Trending #3</span>
                    {/* Text at left bottom */}
                    <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                      <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>Mobile App Evolution</div>
                      <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>The mobile app industry is witnessing an exciting evolution, with AI integration.</div>
                    </div>
                    {/* Image at bottom right */}
                    <img src="/images/boy.webp" alt="Mobile App Evolution" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                  </div>
                )}
                {/* Card 4 */}
                {isDesktop ? (
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
                      }} className="trending-badge">Trending #4</span>
                      {/* Text at left bottom */}
                      <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>Immersive Tech Solutions</div>
                        <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>The world of immersive technology, including AR, VR, and the metaverse.</div>
                      </div>
                      {/* Image at bottom right */}
                      <img src="/images/eva.webp" alt="Immersive Tech Solutions" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                    </div>
                  </TiltFx>
                ) : (
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
                    }} className="trending-badge">Trending #4</span>
                    {/* Text at left bottom */}
                    <div style={{ padding: '0 0 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', zIndex: 2, textAlign: 'left', paddingRight: 170 }} className="trending-text">
                      <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4, color: '#fff' }}>Immersive Tech Solutions</div>
                      <div style={{ fontSize: 15, opacity: 0.85, color: '#fff' }}>The world of immersive technology, including AR, VR, and the metaverse.</div>
                    </div>
                    {/* Image at bottom right */}
                    <img src="/images/eva.webp" alt="Immersive Tech Solutions" style={{ width: 160, height: 180, borderRadius: 18, objectFit: 'cover', position: 'absolute', right: 1, bottom: 1, boxShadow: '0 2px 12px 0 rgba(25,118,210,0.13)', zIndex: 2 }} />
                  </div>
                )}
              </div>
              {/* Explore All Button */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
                <Button style={{ background: 'linear-gradient(90deg, #1976d2 0%, #67e8f9 100%)', color: '#fff', borderRadius: '1.2rem', fontWeight: 600, padding: '0.7rem 2.2rem', fontSize: '1.1rem', border: 'none', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}>Explore all</Button>
              </div>
            </div>

            {/* Blog/Recent Articles Section */}
            <div style={{ width: '100%', margin: '0 auto', maxWidth: 1300, marginTop: 64, zIndex: 4, position: 'relative' }}>
              <div style={{ textAlign: 'center', marginBottom: 10, color: '#cbeafe', fontSize: 36, fontWeight: 500 }}>
                Inspiration and Insights: Dive into Our Blog
              </div>
              <div style={{ textAlign: 'center', fontWeight: 800, fontSize: 48, color: '#fff', marginBottom: 66 }}>
                Recent Articles
              </div>
              <div style={{ display: 'flex', gap: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* Article 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 420px', minWidth: 340, maxWidth: 520 }}>
                  <div style={{
                    width: '100%',
                    height: 260,
                    background: 'linear-gradient(135deg, #072549 0%, #17304a 100%)',
                    borderRadius: '1.5rem',
                    boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <img src="/images/kid-robo.webp" alt="AI for Student Assessments" style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: '1.5rem' }} />
                  </div>
                  <div style={{
                    textAlign: 'left',
                    marginTop: 18,
                    marginBottom: 32,
                    width: '100%',
                    maxWidth: 520,
                  }}>
                    <div style={{ fontWeight: 800, fontSize: 24, marginBottom: 8, color: '#fff' }}>AI for Student Assessments</div>
                    <div style={{ fontSize: 15, opacity: 0.93, marginBottom: 8, color: '#fff' }}>Rethinking How We Measure Learning</div>
                    <a href="#" style={{ color: '#60a5fa', fontWeight: 600, fontSize: 16, textDecoration: 'underline', marginTop: 4 }}>Read Blog</a>
                  </div>
                </div>
                {/* Article 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 420px', minWidth: 340, maxWidth: 520 }}>
                  <div style={{
                    width: '100%',
                    height: 260,
                    background: 'linear-gradient(135deg, #072549 0%, #17304a 100%)',
                    borderRadius: '1.5rem',
                    boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <img src="/images/pred.webp" alt="Predictive maintenance with AI" style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: '1.5rem' }} />
                  </div>
                  <div style={{
                    textAlign: 'left',
                    marginTop: 18,
                    marginBottom: 32,
                    width: '100%',
                    maxWidth: 520,
                  }}>
                    <div style={{ fontWeight: 800, fontSize: 24, marginBottom: 8, color: '#fff' }}>Predictive maintenance with AI</div>
                    <div style={{ fontSize: 15, opacity: 0.93, marginBottom: 8, color: '#fff' }}>Transforming Equipment Reliability in Manufacturing</div>
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
            padding-top: 24px !important;
          }
          .trending-card {
            margin-left: 10px !important;
          }
        }
      `}</style>
    </>
  );
}
