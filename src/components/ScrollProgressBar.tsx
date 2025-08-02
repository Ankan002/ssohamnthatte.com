"use client";

import React, { useState, useEffect } from 'react';

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress((scrolled / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #06b6d4 0%, #ef4444 100%)',
        width: `${scrollProgress}%`,
        zIndex: 99999,
        transition: 'width 0.1s ease-out',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        pointerEvents: 'none',
      }}
    />
  );
}; 