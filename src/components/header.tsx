'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Flex } from '@once-ui-system/core';
import { HiOutlineHome, HiOutlineBriefcase, HiOutlineInformationCircle, HiOutlineUserGroup, HiOutlineCog, HiOutlineFire } from 'react-icons/hi';

export default function Header() {
  const [showDock, setShowDock] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowDock(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down: hide dock
        setShowDock(false);
      } else {
        // Scrolling up: show dock
        setShowDock(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Logo - sticky in normal document flow, scrolls up with content */}
      <div className="zenturio-header-logo" style={{
        width: '100vw',
        background: 'transparent',
        paddingLeft: '80px',
        paddingTop: '30px',
        height: 68,
        position: 'relative',
        zIndex: 10,
      }}>
        <Link href="/">
          <img src="/images/zen.png" alt="Logo" style={{ height: 38 }} />
        </Link>
      </div>
      {/* Navigation Dock - fixed and animated */}
      <Flex as="header" align="left" padding="16" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 100, background: 'transparent', backdropFilter: 'none', height: 110, pointerEvents: 'none' }}>
        <div style={{ flex: 1 }} />
        {/* Navigation Dock Right (desktop/tablet) */}
        <Flex
          as="nav"
          gap="0"
          align="center"
          className="nav-dock-desktop nav-dock-glass"
          style={{
            background: 'rgba(32, 32, 32, 0.27)',
            backdropFilter: 'blur(16px)',
            borderRadius: '2rem',
            padding: '0.7rem 2.4rem',
            boxShadow: '0 2px 24px 0 rgba(0,0,0,0.13)',
            minWidth: 420,
            position: 'absolute',
            top: 36, // moved up from 56
            right: '5vw', // moved right from 8vw
            transform: showDock ? 'translateY(0)' : 'translateY(-200%)',
            transition: 'transform 0.35s cubic-bezier(.4,0,.2,1)',
            pointerEvents: showDock ? 'auto' : 'none',
          }}
        >
          <Link href="/" className="nav-link nav-link-flex"><HiOutlineHome className="nav-icon" /> <span>Home</span></Link>
          <Link href="/who-we-are" className="nav-link nav-link-flex"><HiOutlineUserGroup className="nav-icon" /> <span>Who we are</span></Link>
          <Link href="/services" className="nav-link nav-link-flex"><HiOutlineCog className="nav-icon" /> <span>Services</span></Link>
          <Link href="/trending" className="nav-link nav-link-flex"><HiOutlineFire className="nav-icon" /> <span>What's Trending</span></Link>
          <Link href="/about" className="nav-link nav-link-flex"><HiOutlineInformationCircle className="nav-icon" /> <span>Contact Us</span></Link>
          <Link href="/careers" className="nav-link nav-link-flex"><HiOutlineBriefcase className="nav-icon" /> <span>Careers</span></Link>
        </Flex>
      </Flex>
      {/* Mobile bottom nav dock */}
      <Flex as="nav" gap="32" align="center" className="nav-dock-mobile">
        <Link href="/" aria-label="Home"><HiOutlineHome style={{ fontSize: 28 }} /></Link>
        <Link href="/who-we-are" aria-label="Who we are"><HiOutlineUserGroup style={{ fontSize: 28 }} /></Link>
        <Link href="/services" aria-label="Services"><HiOutlineCog style={{ fontSize: 28 }} /></Link>
        <Link href="/trending" aria-label="What's Trending"><HiOutlineFire style={{ fontSize: 28 }} /></Link>
        <Link href="/about" aria-label="About"><HiOutlineInformationCircle style={{ fontSize: 28 }} /></Link>
        <Link href="/careers" aria-label="Careers"><HiOutlineBriefcase style={{ fontSize: 28 }} /></Link>
      </Flex>
      <style>{`
        .nav-link {
          color: #fff !important;
          transition: color 0.18s cubic-bezier(.4,0,.2,1);
          position: relative;
          z-index: 1;
          font-size: 1.08rem;
          font-weight: 500;
        }
        .nav-link:hover, .nav-link:focus {
          color: #60a5fa !important;
        }
        .nav-link-flex {
          display: flex;
          align-items: center;
          gap: 0.5em;
        }
        .nav-icon {
          font-size: 20px;
          display: flex;
          align-items: center;
        }
        .nav-dock-glass {
          position: relative;
          overflow: hidden;
        }
        .nav-dock-glass::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(32, 32, 64, 0.18);
          border-radius: 2rem;
          pointer-events: none;
          z-index: 0;
        }
        .nav-dock-glass .nav-link {
          padding: 0.3rem 1.1rem;
          border-radius: 1.2rem;
          transition: color 0.18s, background 0.18s, box-shadow 0.18s;
        }
        .nav-dock-glass .nav-link.selected, .nav-dock-glass .nav-link:active {
          color: #60a5fa;
        }
        .nav-dock-glass .nav-link::after {
          content: '';
          display: block;
          position: absolute;
          left: 0; top: 0; right: 0; bottom: 0;
          border-radius: 1.2rem;
          background: rgba(96,165,250,0.13);
          opacity: 0;
          transition: opacity 0.18s cubic-bezier(.4,0,.2,1);
          z-index: -1;
        }
        .nav-dock-glass .nav-link:hover::after, .nav-dock-glass .nav-link:focus::after, .nav-dock-glass .nav-link.selected::after {
          opacity: 1;
        }
        .nav-dock-mobile {
          display: none;
        }
        @media (max-width: 900px) {
          .nav-dock-desktop {
            display: none !important;
          }
          .nav-dock-mobile {
            display: flex;
            position: fixed;
            left: 50%;
            bottom: 18px;
            transform: translateX(-50%);
            background: rgba(32, 32, 32, 0.18);
            backdrop-filter: blur(18px) saturate(180%);
            border-radius: 2rem;
            box-shadow: 0 2px 16px 0 rgba(0,0,0,0.12);
            padding: 0.7rem 1.1rem;
            z-index: 100;
            gap: 18px;
            border: 1.5px solid rgba(255,255,255,0.13);
            max-width: 95vw;
            min-width: unset;
            position: fixed;
            overflow: hidden;
          }
          .nav-dock-mobile a {
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            padding: 0.2rem 0.4rem;
            border-radius: 1.2rem;
            position: relative;
            transition: color 0.18s, background 0.18s;
          }
          .nav-dock-mobile a:active, .nav-dock-mobile a:focus {
            color: #60a5fa;
          }
          .nav-dock-mobile a::after {
            content: '';
            display: block;
            position: absolute;
            left: 0; top: 0; right: 0; bottom: 0;
            border-radius: 1.2rem;
            background: rgba(96,165,250,0.13);
            opacity: 0;
            transition: opacity 0.18s cubic-bezier(.4,0,.2,1);
            z-index: -1;
          }
          .nav-dock-mobile a:active::after, .nav-dock-mobile a:focus::after, .nav-dock-mobile a:hover::after {
            opacity: 1;
          }
          .zenturio-header-logo {
            padding-top: 60px !important;
          }
        }
      `}</style>
    </>
  );
}