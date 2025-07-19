'use client';
import Link from 'next/link';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { Flex } from '@once-ui-system/core';
import { HiOutlineHome, HiOutlineBriefcase, HiOutlineInformationCircle, HiOutlineUserGroup, HiOutlineCog, HiOutlineFire, HiChevronDown } from 'react-icons/hi';
import { usePathname, useRouter } from 'next/navigation';

// DropdownItem component for menu
function DropdownItem({ 
  label, 
  path,
  closeDesktopDropdown,
  closeMobileDropdown 
}: { 
  label: string, 
  path: string,
  closeDesktopDropdown: () => void,
  closeMobileDropdown: () => void
}) {
  const router = useRouter();
  const pathname = usePathname();
  const navTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dockRef = useRef<HTMLDivElement | null>(document.querySelector('.nav-dock-desktop'));

  return (
    <button
      type="button"
      className="services-dropdown-item"
      style={{
        width: '100%',
        background: 'none',
        border: 'none',
        color: pathname === path ? '#2ea6ff' : '#fff',
        fontSize: 17,
        padding: '12px 24px',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'background 0.18s',
        borderRadius: 10,
        outline: 'none',
        display: 'block',
      }}
      onClick={() => {
        // Close both dropdowns
        closeDesktopDropdown();
        closeMobileDropdown();

        if (pathname !== path) {
          if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
          
          // Step 1: Move glider to Services button
          const servicesBtn = document.querySelector('.nav-link-dropdown-btn');
          const dock = dockRef.current;
          if (servicesBtn && dock) {
            const dockRect = dock.getBoundingClientRect();
            const selRect = servicesBtn.getBoundingClientRect();
            const glider = document.querySelector('.nav-glider') as HTMLElement;
            if (glider) {
              glider.style.left = `${selRect.left - dockRect.left}px`;
              glider.style.width = `${selRect.width}px`;
            }
          }

          // Step 2: Navigate after animation
          setTimeout(() => {
            navTimeoutRef.current = setTimeout(() => {
              router.push(path);
            }, 350);
          }, 10);
        }
      }}
      tabIndex={0}
    >
      {label}
    </button>
  );
}

export default function Header() {
  const [showDock, setShowDock] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const dockRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [gliderStyle, setGliderStyle] = useState({ left: 0, width: 0 });
  const mobileDockRef = useRef<HTMLDivElement>(null);
  const [mobileGliderStyle, setMobileGliderStyle] = useState({ left: 0, width: 0 });
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const navTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileNavTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesDropdownOpen, setMobileServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const mobileServicesDropdownRef = useRef<HTMLDivElement>(null);
  const [keepDropdownOpen, setKeepDropdownOpen] = useState(false);

  // Responsive width for dock centering
  const isCenteredDock = typeof window !== 'undefined' && window.innerWidth <= 1450 && window.innerWidth >= 1071;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowDock(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down: hide dock and reset dropdown states
        setShowDock(false);
        setServicesDropdownOpen(false);
        setKeepDropdownOpen(false);
      } else {
        // Scrolling up: show dock
        setShowDock(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    const updateGlider = () => {
      if (!dockRef.current) return;
      const dock = dockRef.current;
      const selector = `.nav-link.selected`;
      const selected = dock.querySelector(selector);
      if (selected) {
        const dockRect = dock.getBoundingClientRect();
        const selRect = selected.getBoundingClientRect();
        setGliderStyle(prev => {
          const left = selRect.left - dockRect.left;
          const width = selRect.width;
          if (prev.left !== left || prev.width !== width) {
            return { left, width };
          }
          return prev;
        });
      }
    };
    updateGlider();
    window.addEventListener('resize', updateGlider);
    return () => window.removeEventListener('resize', updateGlider);
  }, [pathname, showDock]);

  useLayoutEffect(() => {
    const updateMobileGlider = () => {
      if (!mobileDockRef.current) return;
      const dock = mobileDockRef.current;
      const selector = `.nav-link-mobile.selected`;
      const selected = dock.querySelector(selector);
      if (selected) {
        const dockRect = dock.getBoundingClientRect();
        const selRect = selected.getBoundingClientRect();
        setMobileGliderStyle(prev => {
          const left = (selRect.left - dockRect.left);
          const width = selRect.width;
          if (prev.left !== left || prev.width !== width) {
            return { left, width };
          }
          return prev;
        });
      }
    };
    updateMobileGlider();
    window.addEventListener('resize', updateMobileGlider);
    return () => window.removeEventListener('resize', updateMobileGlider);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [servicesDropdownOpen]);

  // Close mobile dropdown on outside click
  useEffect(() => {
    function handleMobileClickOutside(event: MouseEvent) {
      if (mobileServicesDropdownRef.current && !mobileServicesDropdownRef.current.contains(event.target as Node)) {
        setMobileServicesDropdownOpen(false);
      }
    }
    if (mobileServicesDropdownOpen) {
      document.addEventListener('mousedown', handleMobileClickOutside);
    } else {
      document.removeEventListener('mousedown', handleMobileClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleMobileClickOutside);
  }, [mobileServicesDropdownOpen]);

  return (
    <>
      {/* Logo - sticky in normal document flow, scrolls up with content */}
      <div className="zenturio-header-logo">
        <Link href="/">
          <img src="/images/zen-white.png" alt="Logo" style={{ height: 38, display: 'block' }} />
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
          className={`nav-dock-desktop nav-dock-glass${!showDock ? ' nav-dock-hidden' : ''}`}
          ref={dockRef}
          style={{
            background: 'rgba(32, 32, 32, 0.27)',
            backdropFilter: 'blur(16px)',
            borderRadius: '2rem',
            padding: '0.5rem 0.2rem',
            boxShadow: '0 2px 24px 0 rgba(0,0,0,0.13)',
            position: 'absolute',
            top: isCenteredDock ? 110 : 36,
            right: isCenteredDock ? undefined : '5vw',
            left: isCenteredDock ? '50%' : undefined,
            transform: isCenteredDock 
              ? `translateX(-50%) translateY(${showDock ? '0' : '-300%'})` 
              : `translateY(${showDock ? '0' : '-300%'})`,
            minWidth: isCenteredDock ? 600 : 420,
            maxWidth: isCenteredDock ? 930 : undefined,
            width: isCenteredDock ? 'auto' : undefined,
            whiteSpace: isCenteredDock ? 'nowrap' : undefined,
            justifyContent: isCenteredDock ? 'center' : undefined,
            paddingLeft: isCenteredDock ? '2rem' : undefined,
            paddingRight: isCenteredDock ? '2rem' : undefined,
            transition: 'transform 0.35s cubic-bezier(.4,0,.2,1), right 0.35s cubic-bezier(.4,0,.2,1)',
            pointerEvents: showDock ? 'auto' : 'none',
            overflow: 'visible !important',
          }}
        >
          <div
            className="nav-glider"
            style={{
              position: 'absolute',
              top: 0,
              left: gliderStyle.left,
              width: gliderStyle.width,
              height: '100%',
              background: 'rgba(255,255,255,0.18)',
              boxShadow: 'none',
              border: '1.5px solid rgba(255,255,255,0.22)',
              borderRadius: '2rem',
              backdropFilter: 'blur(8px) saturate(180%)',
              WebkitBackdropFilter: 'blur(8px) saturate(180%)',
              transition: 'left 0.35s cubic-bezier(.4,0,.2,1), width 0.35s cubic-bezier(.4,0,.2,1) !important',
              zIndex: 0,
            }}
          />
          <Link href="/" className={`nav-link nav-link-flex${pathname === '/' ? ' selected' : ''}`} data-path="/"
            onClick={e => {
              if (pathname !== '/') {
                e.preventDefault();
                if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
                // Step 1: Set glider to current position
                const currentEl = document.querySelector(`.nav-link[data-path='${pathname}']`);
                const dock = dockRef.current;
                if (currentEl && dock) {
                  const dockRect = dock.getBoundingClientRect();
                  const selRect = currentEl.getBoundingClientRect();
                  setGliderStyle({
                    left: selRect.left - dockRect.left,
                    width: selRect.width
                  });
                }
                // Step 2: Animate to new position
                setTimeout(() => {
                  setPendingPath('/');
                  setIsAnimating(true);
                  navTimeoutRef.current = setTimeout(() => {
                    setPendingPath(null);
                    setIsAnimating(false);
                    router.push('/');
                  }, 350);
                }, 10);
              }
            }}
          >
            <HiOutlineHome className="nav-icon" /> <span>Home</span>
          </Link>
          <Link href="/who-we-are" className={`nav-link nav-link-flex${pathname === '/who-we-are' ? ' selected' : ''}`} data-path="/who-we-are"
            onClick={e => {
              if (pathname !== '/who-we-are') {
                e.preventDefault();
                if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
                // Step 1: Set glider to current position
                const currentEl = document.querySelector(`.nav-link[data-path='${pathname}']`);
                const dock = dockRef.current;
                if (currentEl && dock) {
                  const dockRect = dock.getBoundingClientRect();
                  const selRect = currentEl.getBoundingClientRect();
                  setGliderStyle({
                    left: selRect.left - dockRect.left,
                    width: selRect.width
                  });
                }
                // Step 2: Animate to new position
                setTimeout(() => {
                  setPendingPath('/who-we-are');
                  setIsAnimating(true);
                  navTimeoutRef.current = setTimeout(() => {
                    setPendingPath(null);
                    setIsAnimating(false);
                    router.push('/who-we-are');
                  }, 350);
                }, 10);
              }
            }}
          ><HiOutlineUserGroup className="nav-icon" /> <span>Who we are</span></Link>
          <div 
            style={{ position: 'relative', marginLeft: 0 }} 
            ref={servicesDropdownRef}
            onMouseEnter={() => !keepDropdownOpen && setServicesDropdownOpen(true)}
            onMouseLeave={() => !keepDropdownOpen && setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className={`nav-link nav-link-flex nav-link-dropdown-btn${pathname.startsWith('/services') ? ' selected' : ''}`}
              style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '0 10px', height: 48 }}
              onClick={(e) => {
                setKeepDropdownOpen(true);
                setServicesDropdownOpen(true);
                if (pathname !== '/services') {
                  if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
                  // Step 1: Set glider to current position
                  const currentEl = document.querySelector(`.nav-link[data-path='${pathname}']`);
                  const dock = dockRef.current;
                  if (currentEl && dock) {
                    const dockRect = dock.getBoundingClientRect();
                    const selRect = currentEl.getBoundingClientRect();
                    setGliderStyle({
                      left: selRect.left - dockRect.left,
                      width: selRect.width
                    });
                  }
                  // Step 2: Animate to new position
                  setTimeout(() => {
                    setPendingPath('/services');
                    setIsAnimating(true);
                    navTimeoutRef.current = setTimeout(() => {
                      setPendingPath(null);
                      setIsAnimating(false);
                      router.push('/services');
                    }, 350);
                  }, 10);
                }
              }}
              aria-haspopup="true"
              aria-expanded={servicesDropdownOpen}
            >
              <HiOutlineCog className="nav-icon" /> <span>Services</span>
              <HiChevronDown style={{ marginLeft: 2, fontSize: 20 }} />
            </button>
            {servicesDropdownOpen && (
              <div
                className="services-dropdown-menu"
                style={{
                  position: 'absolute',
                  top: 'calc(100% - 1px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(32, 32, 32, 0.75)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: 16,
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                  minWidth: 180,
                  zIndex: 9999,
                  marginTop: 8,
                  border: '1.5px solid rgba(255,255,255,0.13)',
                  padding: '10px 0',
                }}
              >
                <DropdownItem 
                  label="AI" 
                  path="/services/ai" 
                  closeDesktopDropdown={() => setServicesDropdownOpen(false)}
                  closeMobileDropdown={() => setMobileServicesDropdownOpen(false)}
                />
                <DropdownItem 
                  label="VR/AR" 
                  path="/services/vr" 
                  closeDesktopDropdown={() => setServicesDropdownOpen(false)}
                  closeMobileDropdown={() => setMobileServicesDropdownOpen(false)}
                />
                <DropdownItem 
                  label="Web & App" 
                  path="/services/web" 
                  closeDesktopDropdown={() => setServicesDropdownOpen(false)}
                  closeMobileDropdown={() => setMobileServicesDropdownOpen(false)}
                />
              </div>
            )}
          </div>
          <Link 
            href="/trending" 
            className={`nav-link nav-link-flex${pathname.startsWith('/trending') ? ' selected' : ''}`} 
            data-path="/trending"
            onClick={e => {
              if (!pathname.startsWith('/trending')) {
                e.preventDefault();
                if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
                // Step 1: Set glider to current position
                const currentEl = document.querySelector(`.nav-link[data-path='${pathname}']`);
                const dock = dockRef.current;
                if (currentEl && dock) {
                  const dockRect = dock.getBoundingClientRect();
                  const selRect = currentEl.getBoundingClientRect();
                  setGliderStyle({
                    left: selRect.left - dockRect.left,
                    width: selRect.width
                  });
                }
                // Step 2: Animate to new position
                setTimeout(() => {
                  setPendingPath('/trending');
                  setIsAnimating(true);
                  navTimeoutRef.current = setTimeout(() => {
                    setPendingPath(null);
                    setIsAnimating(false);
                    router.push('/trending');
                  }, 350);
                }, 10);
              }
            }}
          ><HiOutlineFire className="nav-icon" /> <span>Blog</span></Link>
          <Link href="/about" className={`nav-link nav-link-flex${pathname === '/about' ? ' selected' : ''}`} data-path="/about"
            onClick={e => {
              if (pathname !== '/about') {
                e.preventDefault();
                if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
                // Step 1: Set glider to current position
                const currentEl = document.querySelector(`.nav-link[data-path='${pathname}']`);
                const dock = dockRef.current;
                if (currentEl && dock) {
                  const dockRect = dock.getBoundingClientRect();
                  const selRect = currentEl.getBoundingClientRect();
                  setGliderStyle({
                    left: selRect.left - dockRect.left,
                    width: selRect.width
                  });
                }
                // Step 2: Animate to new position
                setTimeout(() => {
                  setPendingPath('/about');
                  setIsAnimating(true);
                  navTimeoutRef.current = setTimeout(() => {
                    setPendingPath(null);
                    setIsAnimating(false);
                    router.push('/about');
                  }, 350);
                }, 10);
              }
            }}
          ><HiOutlineInformationCircle className="nav-icon" /> <span>Contact Us</span></Link>
          <Link href="/careers" className={`nav-link nav-link-flex${pathname === '/careers' ? ' selected' : ''}`} data-path="/careers"
            onClick={e => {
              if (pathname !== '/careers') {
                e.preventDefault();
                if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
                // Step 1: Set glider to current position
                const currentEl = document.querySelector(`.nav-link[data-path='${pathname}']`);
                const dock = dockRef.current;
                if (currentEl && dock) {
                  const dockRect = dock.getBoundingClientRect();
                  const selRect = currentEl.getBoundingClientRect();
                  setGliderStyle({
                    left: selRect.left - dockRect.left,
                    width: selRect.width
                  });
                }
                // Step 2: Animate to new position
                setTimeout(() => {
                  setPendingPath('/careers');
                  setIsAnimating(true);
                  navTimeoutRef.current = setTimeout(() => {
                    setPendingPath(null);
                    setIsAnimating(false);
                    router.push('/careers');
                  }, 350);
                }, 10);
              }
            }}
          ><HiOutlineBriefcase className="nav-icon" /> <span>Careers</span></Link>
        </Flex>
      </Flex>
      {/* Mobile bottom nav dock */}
      <Flex as="nav" gap="32" align="center" className="nav-dock-mobile" ref={mobileDockRef}>
        <div
          className="nav-glider-mobile"
          style={{
            position: 'absolute',
            top: 0,
            left: (mobileGliderStyle.left ?? 0) - 8,
            width: (mobileGliderStyle.width ?? 0) + 14,
            height: '100%',
            background: 'rgba(255,255,255,0.18)',
            boxShadow: 'none',
            border: '1.5px solid rgba(255,255,255,0.22)',
            borderRadius: '2rem',
            backdropFilter: 'blur(8px) saturate(180%)',
            WebkitBackdropFilter: 'blur(8px) saturate(180%)',
            transition: 'left 0.35s cubic-bezier(.4,0,.2,1), width 0.35s cubic-bezier(.4,0,.2,1) !important',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        <Link href="/" aria-label="Home" className={`nav-link-mobile${pathname === '/' ? ' selected' : ''}`} data-path="/"
          onClick={e => {
            if (pathname !== '/') {
              e.preventDefault();
              if (mobileNavTimeoutRef.current) clearTimeout(mobileNavTimeoutRef.current);
              // Step 1: Set glider to current position
              const currentEl = document.querySelector(`.nav-link-mobile[data-path='${pathname}']`);
              const dock = mobileDockRef.current;
              if (currentEl && dock) {
                const dockRect = dock.getBoundingClientRect();
                const selRect = currentEl.getBoundingClientRect();
                setMobileGliderStyle({
                  left: selRect.left - dockRect.left,
                  width: selRect.width
                });
              }
              // Step 2: Animate to new position
              setTimeout(() => {
                setPendingPath('/');
                setIsAnimating(true);
                mobileNavTimeoutRef.current = setTimeout(() => {
                  setPendingPath(null);
                  setIsAnimating(false);
                  router.push('/');
                }, 350);
              }, 10);
            }
          }}
        ><HiOutlineHome style={{ fontSize: 28 }} /></Link>
        <Link href="/who-we-are" aria-label="Who we are" className={`nav-link-mobile${pathname === '/who-we-are' ? ' selected' : ''}`} data-path="/who-we-are"
          onClick={e => {
            if (pathname !== '/who-we-are') {
              e.preventDefault();
              if (mobileNavTimeoutRef.current) clearTimeout(mobileNavTimeoutRef.current);
              // Step 1: Set glider to current position
              const currentEl = document.querySelector(`.nav-link-mobile[data-path='${pathname}']`);
              const dock = mobileDockRef.current;
              if (currentEl && dock) {
                const dockRect = dock.getBoundingClientRect();
                const selRect = currentEl.getBoundingClientRect();
                setMobileGliderStyle({
                  left: selRect.left - dockRect.left,
                  width: selRect.width
                });
              }
              // Step 2: Animate to new position
              setTimeout(() => {
                setPendingPath('/who-we-are');
                setIsAnimating(true);
                mobileNavTimeoutRef.current = setTimeout(() => {
                  setPendingPath(null);
                  setIsAnimating(false);
                  router.push('/who-we-are');
                }, 350);
              }, 10);
            }
          }}
        ><HiOutlineUserGroup style={{ fontSize: 28 }} /></Link>
        <div style={{ position: 'relative' }} ref={mobileServicesDropdownRef}>
          <button
            type="button"
            aria-label="Services"
            className={`nav-link-mobile${pathname.startsWith('/services') ? ' selected' : ''}`}
            style={{ 
              background: 'none', 
              border: 'none', 
              padding: '0.2rem 0.4rem',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              fontSize: '1.5rem',
              borderRadius: '1.2rem',
              position: 'relative',
              transition: 'color 0.18s, background 0.18s',
              width: 'auto',
              height: 'auto'
            }}
            onClick={(e) => {
              setMobileServicesDropdownOpen(v => !v);
              if (pathname !== '/services') {
                if (mobileNavTimeoutRef.current) clearTimeout(mobileNavTimeoutRef.current);
                // Step 1: Set glider to current position
                const currentEl = document.querySelector(`.nav-link-mobile[data-path='${pathname}']`);
                const dock = mobileDockRef.current;
                if (currentEl && dock) {
                  const dockRect = dock.getBoundingClientRect();
                  const selRect = currentEl.getBoundingClientRect();
                  setMobileGliderStyle({
                    left: selRect.left - dockRect.left,
                    width: selRect.width
                  });
                }
                // Step 2: Animate to new position
                setTimeout(() => {
                  setPendingPath('/services');
                  setIsAnimating(true);
                  mobileNavTimeoutRef.current = setTimeout(() => {
                    setPendingPath(null);
                    setIsAnimating(false);
                    router.push('/services');
                  }, 350);
                }, 10);
              }
            }}
            aria-haspopup="true"
            aria-expanded={mobileServicesDropdownOpen}
            data-path="/services"
          >
            <HiOutlineCog style={{ fontSize: 28 }} />
          </button>
          {mobileServicesDropdownOpen && (
            <div
              className="services-dropdown-menu mobile-services-dropdown"
              style={{
                position: 'fixed',
                bottom: '80px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(32, 32, 32, 0.75)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: 16,
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                minWidth: 180,
                maxWidth: '90vw',
                zIndex: 101,
                marginBottom: 8,
                border: '1.5px solid rgba(255,255,255,0.13)',
                padding: '10px 0',
              }}
            >
              <DropdownItem 
                label="AI" 
                path="/services/ai" 
                closeDesktopDropdown={() => setServicesDropdownOpen(false)}
                closeMobileDropdown={() => setMobileServicesDropdownOpen(false)}
              />
              <DropdownItem 
                label="VR/AR" 
                path="/services/vr" 
                closeDesktopDropdown={() => setServicesDropdownOpen(false)}
                closeMobileDropdown={() => setMobileServicesDropdownOpen(false)}
              />
              <DropdownItem 
                label="Web & App" 
                path="/services/web" 
                closeDesktopDropdown={() => setServicesDropdownOpen(false)}
                closeMobileDropdown={() => setMobileServicesDropdownOpen(false)}
              />
            </div>
          )}
        </div>
        <Link 
          href="/trending" 
          aria-label="Blog" 
          className={`nav-link-mobile${pathname.startsWith('/trending') ? ' selected' : ''}`} 
          data-path="/trending"
          onClick={e => {
            if (!pathname.startsWith('/trending')) {
              e.preventDefault();
              if (mobileNavTimeoutRef.current) clearTimeout(mobileNavTimeoutRef.current);
              // Step 1: Set glider to current position
              const currentEl = document.querySelector(`.nav-link-mobile[data-path='${pathname}']`);
              const dock = mobileDockRef.current;
              if (currentEl && dock) {
                const dockRect = dock.getBoundingClientRect();
                const selRect = currentEl.getBoundingClientRect();
                setMobileGliderStyle({
                  left: selRect.left - dockRect.left,
                  width: selRect.width
                });
              }
              // Step 2: Animate to new position
              setTimeout(() => {
                setPendingPath('/trending');
                setIsAnimating(true);
                mobileNavTimeoutRef.current = setTimeout(() => {
                  setPendingPath(null);
                  setIsAnimating(false);
                  router.push('/trending');
                }, 350);
              }, 10);
            }
          }}
        ><HiOutlineFire style={{ fontSize: 28 }} /></Link>
        <Link href="/about" aria-label="About" className={`nav-link-mobile${pathname === '/about' ? ' selected' : ''}`} data-path="/about"
          onClick={e => {
            if (pathname !== '/about') {
              e.preventDefault();
              if (mobileNavTimeoutRef.current) clearTimeout(mobileNavTimeoutRef.current);
              // Step 1: Set glider to current position
              const currentEl = document.querySelector(`.nav-link-mobile[data-path='${pathname}']`);
              const dock = mobileDockRef.current;
              if (currentEl && dock) {
                const dockRect = dock.getBoundingClientRect();
                const selRect = currentEl.getBoundingClientRect();
                setMobileGliderStyle({
                  left: selRect.left - dockRect.left,
                  width: selRect.width
                });
              }
              // Step 2: Animate to new position
              setTimeout(() => {
                setPendingPath('/about');
                setIsAnimating(true);
                mobileNavTimeoutRef.current = setTimeout(() => {
                  setPendingPath(null);
                  setIsAnimating(false);
                  router.push('/about');
                }, 350);
              }, 10);
            }
          }}
        ><HiOutlineInformationCircle style={{ fontSize: 28 }} /></Link>
        <Link href="/careers" aria-label="Careers" className={`nav-link-mobile${pathname === '/careers' ? ' selected' : ''}`} data-path="/careers"
          onClick={e => {
            if (pathname !== '/careers') {
              e.preventDefault();
              if (mobileNavTimeoutRef.current) clearTimeout(mobileNavTimeoutRef.current);
              // Step 1: Set glider to current position
              const currentEl = document.querySelector(`.nav-link-mobile[data-path='${pathname}']`);
              const dock = mobileDockRef.current;
              if (currentEl && dock) {
                const dockRect = dock.getBoundingClientRect();
                const selRect = currentEl.getBoundingClientRect();
                setMobileGliderStyle({
                  left: selRect.left - dockRect.left,
                  width: selRect.width
                });
              }
              // Step 2: Animate to new position
              setTimeout(() => {
                setPendingPath('/careers');
                setIsAnimating(true);
                mobileNavTimeoutRef.current = setTimeout(() => {
                  setPendingPath(null);
                  setIsAnimating(false);
                  router.push('/careers');
                }, 350);
              }, 10);
            }
          }}
        ><HiOutlineBriefcase style={{ fontSize: 28 }} /></Link>
      </Flex>
      <style>{`
        .nav-link, .nav-link-mobile {
          color: #fff !important;
          transition: transform 0.18s cubic-bezier(.4,0,.2,1), font-size 0.18s cubic-bezier(.4,0,.2,1);
          position: relative;
          z-index: 1;
          font-size: 1.08rem;
          font-weight: 500;
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
          overflow: visible !important;
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
          padding: 0.2rem 1.1rem;
          border-radius: 1.2rem;
          transition: color 0.18s, background 0.18s, box-shadow 0.18s;
        }
        .nav-dock-glass .nav-link.selected, .nav-dock-glass .nav-link:active {
          color:rgba(96, 165, 250, 0);
        }
        .nav-dock-mobile {
          display: none;
        }
        @media (max-width: 1070px) {
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
            padding: 0.7rem 0.5rem;
            z-index: 100;
            gap: 15px;
            border: 1.5px solid rgba(255,255,255,0.13);
            max-width: 95vw;
            min-width: unset;
            overflow: visible !important;
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
          .zenturio-header-logo {
            padding-left: 0 !important;
            justify-content: center !important;
          }
          .zenturio-header-logo img {
            margin: 0 auto !important;
          }
          .nav-glider-mobile {
            border-radius: 2rem;
          }
        }
        @media (max-width: 600px) {
          .nav-glider-mobile {
            border-radius: 3rem;
          }
        }
          @media (max-width: 1450px) and (min-width: 1071px) {
          .zenturio-header-logo {
            padding-left: 0 !important;
            text-align: center !important;
            justify-content: center !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 auto !important;
          }
          .zenturio-header-logo img {
            margin: 0 auto !important;
            display: block !important;
          }
          .nav-dock-desktop {
            left: 50% !important;
            right: auto !important;
            transform: translateX(-50%) translateY(var(--nav-transform-y, 0)) !important;
            top: 110px !important;
            min-width: 600px !important;
            max-width: 930px !important;
            width: auto !important;
            white-space: nowrap !important;
            justify-content: center !important;
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
          .nav-dock-desktop.nav-dock-hidden {
            --nav-transform-y: -300%;
          }
          .nav-dock-desktop .nav-link {
            white-space: nowrap !important;
          }
        }
        .nav-glider {
          pointer-events: none;
          transition: left 0.35s cubic-bezier(.4,0,.2,1), width 0.35s cubic-bezier(.4,0,.2,1) !important;
        }
        .nav-glider-mobile {
          pointer-events: none;
          border-radius: 2rem;
          transition: left 0.35s cubic-bezier(.4,0,.2,1), width 0.35s cubic-bezier(.4,0,.2,1) !important;
        }
        .nav-link:hover, .nav-link:focus, .nav-link-mobile:hover, .nav-link-mobile:focus {
          transform: scale(1.12);
        }
        .nav-link.selected, .nav-link-mobile.selected {
          color: #60a5fa !important;
        }
        .nav-link-dropdown-btn:focus, .nav-link-dropdown-btn:hover {
          color: #2ea6ff;
        }
        .services-dropdown-menu {
          position: relative;
          animation: fadeInDropdown 0.18s;
        }
        .services-dropdown-menu::before {
          display: none;
        }
        .services-dropdown-item {
          position: relative;
          z-index: 1;
        }
        .services-dropdown-item:hover, .services-dropdown-item:focus {
          background: rgba(46, 166, 255, 0.1);
          color: #2ea6ff;
        }
        @keyframes fadeInDropdown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .services-dropdown-menu.mobile-services-dropdown {
          animation: fadeInDropdownMobile 0.18s;
        }
        @keyframes fadeInDropdownMobile {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .zenturio-header-logo {
          width: 100vw;
          background: transparent;
          padding-left: 80px;
          padding-top: 50px;
          height: 68px;
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        @media (max-width: 1200px) {
          .zenturio-header-logo {
            padding-left: 0 !important;
            justify-content: center !important;
          }
          .zenturio-header-logo img {
            margin: 0 auto !important;
          }
        }
      `}</style>
    </>
  );
}