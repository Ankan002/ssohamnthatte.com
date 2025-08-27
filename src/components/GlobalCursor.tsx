"use client";

import React, { useEffect } from "react";

export const GlobalCursor: React.FC = () => {
  useEffect(() => {
    console.log('GlobalCursor: useEffect triggered');
    
    // Wait for DOM to be ready
    const initCursor = () => {
      console.log('GlobalCursor: initCursor called');
      
      // Custom cursor elements - PROPER IMPLEMENTATION
      const $bigBall = document.querySelector('.cursor__ball--big') as HTMLElement | null;
      const $smallBall = document.querySelector('.cursor__ball--small') as HTMLElement | null;
      const customCursor = document.querySelector('.custom-cursor') as HTMLElement | null;

      console.log('GlobalCursor: Elements found:', { 
        bigBall: !!$bigBall, 
        smallBall: !!$smallBall, 
        customCursor: !!customCursor 
      });

      if (!$bigBall || !$smallBall || !customCursor) {
        console.warn('GlobalCursor: Cursor elements not found, retrying...');
        // Retry after a short delay
        setTimeout(initCursor, 100);
        return;
      }

      let lastX = 0;
      let lastY = 0;
      let lastT = 0;

      // Smooth cursor movement with proper easing
      const updateCursor = (e: MouseEvent) => {
        if ($bigBall && $smallBall) {
          // Big ball with slower, smoother movement
          $bigBall.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
          // Small ball with faster, more responsive movement
          $smallBall.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 7}px)`;
        }

        // Separation detection based on pointer speed
        const now = performance.now();
        if (lastT !== 0 && customCursor) {
          const dt = Math.max(1, now - lastT);
          const dx = e.clientX - lastX;
          const dy = e.clientY - lastY;
          const speed = Math.hypot(dx, dy) / dt; // px per ms
          if (speed > 0.8) {
            customCursor.classList.add('cursor-separated');
          } else {
            customCursor.classList.remove('cursor-separated');
          }
        }
        lastX = e.clientX;
        lastY = e.clientY;
        lastT = now;
      };

      const handleCursorHover = (e: Event) => {
        if (customCursor) {
          customCursor.classList.add('cursor-hover');
        }
      };

      const handleCursorLeave = (e: Event) => {
        if (customCursor) {
          customCursor.classList.remove('cursor-hover');
        }
      };

      // Add cursor event listeners
      document.addEventListener('mousemove', updateCursor);
      
      // Add hover effects to interactive elements
      const interactiveElements = document.querySelectorAll('a, button, .resume-button, .testimonial-card, .case-study-preview-card, .about-hook-card, .passion-card, .social-media-card, .contact-form-card input, .contact-form-card textarea');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleCursorHover);
        el.addEventListener('mouseleave', handleCursorLeave);
      });

      console.log('GlobalCursor: Cursor initialized successfully');
    };

    // Initialize cursor after a short delay to ensure DOM is ready
    const timer = setTimeout(initCursor, 50);

    return () => {
      clearTimeout(timer);
      // Cleanup event listeners
      document.removeEventListener('mousemove', () => {});
    };
  }, []);

  return null; // This component doesn't render anything
}; 