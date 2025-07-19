import { useState, useEffect } from 'react';

export function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      // Get the actual device width considering pixel ratio
      const deviceWidth = window.innerWidth;
      const pixelRatio = window.devicePixelRatio || 1;
      
      // Check if the device is mobile based on width and user agent
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Set mobile for devices with width <= 768 or mobile user agent
      setIsMobile(deviceWidth <= 768 || isMobileDevice);
      
      // Set tablet for devices with width between 769 and 1024, unless it's a mobile device
      setIsTablet(deviceWidth > 768 && deviceWidth <= 1024 && !isMobileDevice);
    };
    
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return { isMobile, isTablet };
} 