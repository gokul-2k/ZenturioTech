"use client";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/header";

export default function StickyHeader() {
  const headerRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY && currentScrollY > 60) {
            setHidden(true); // scroll down, hide
          } else {
            setHidden(false); // scroll up, show
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      ref={headerRef}
      className="sticky-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 100,
        transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
        transform: hidden ? "translateY(-220px)" : "translateY(0)",
      }}
    >
      <Header />
      <style>{`
        @media (max-width: 1450px) and (min-width: 1071px) {
          .sticky-header {
            transform: ${hidden ? "translateY(-300px)" : "translateY(0)"} !important;
          }
        }
      `}</style>
    </div>
  );
}
