"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

import { Flex, Line, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, blog, work, gallery, banana } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1); // Start with -1 to indicate no route initially
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLDivElement>(null);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Simple binary scroll state - only 2 states for better UX
  useEffect(() => {
    const handleScroll = () => {
      // Single threshold: navbar shrinks after 100px scroll
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get current route index for animation
  useEffect(() => {
    // More precise route matching to avoid partial matches
    let currentIndex = 0; // Default to home
    
    if (pathname === "/") {
      currentIndex = 0; // Home
    } else if (pathname === "/about" || pathname.startsWith("/about/")) {
      currentIndex = 1; // About
    } else if (pathname === "/work" || pathname.startsWith("/work/")) {
      currentIndex = 2; // Work
    } else if (pathname === "/blog" || pathname.startsWith("/blog/")) {
      currentIndex = 3; // Blog
    } else if (pathname === "/gallery" || pathname.startsWith("/gallery/")) {
      currentIndex = 4; // Gallery
    } else if (pathname === "/banana" || pathname.startsWith("/banana/")) {
      currentIndex = 5; // Banana
    }
    
    setActiveIndex(currentIndex);
    
    // Trigger animation when route changes
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  }, [pathname]);

  // Handle mouse movement for interactive effects (throttled)
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!headerRef.current || isDragging) return;
    
    const now = Date.now();
    if (now - lastInteraction < 16) return; // 60fps throttle
    
    const rect = headerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    
    setHoverPosition({ x, y });
    setLastInteraction(now);
    
    // Clear previous timeout
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    
    // Reset position after inactivity - much shorter timeout
    interactionTimeoutRef.current = setTimeout(() => {
      setHoverPosition({ x: 0, y: 0 });
    }, 500); // Reduced from 2000ms to 500ms
  }, [isDragging, lastInteraction]);

  // Handle mouse enter with immediate animation stop
  const handleMouseEnter = () => {
    setIsHovered(true);
    // Stop any ongoing animations immediately
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
  };

  // Handle mouse leave with immediate reset
  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoverPosition({ x: 0, y: 0 });
    // Clear any pending timeouts
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
  };

  // Handle drag interactions (Dynamic Island style)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Trigger a subtle "release" animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Handle touch interactions for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getActiveRouteCount = () => {
    return Object.values(routes).filter(Boolean).length;
  };

  const routeCount = getActiveRouteCount();

  // Simple translucency - only 2 states
  const getTranslucency = () => {
    if (isScrolled) {
      return 0.08; // Much more transparent when scrolled
    } else {
      return 0.04; // Very transparent at top like true frosted glass
    }
  };

  // Simple border opacity - only 2 states
  const getBorderOpacity = () => {
    if (isScrolled) {
      return 0.12; // More subtle border when scrolled
    } else {
      return 0.08; // Very subtle border at top
    }
  };

  // Enhanced dimensions with smart interactions - NO continuous animations
  const getDimensions = () => {
    let baseScale = isScrolled ? 0.95 : 1.05;
    let baseRadius = isScrolled ? 20 : 28;
    let basePadding = isScrolled ? 12 : 16;
    
    // Hover effects (very subtle, only on initial hover)
    if (isHovered && !isDragging && Math.abs(hoverPosition.x) > 0.1) {
      baseScale += 0.01;
      baseRadius += 0.5;
      basePadding += 0.25;
    }
    
    // Drag effects (more dramatic, but only when actually dragging)
    if (isDragging) {
      baseScale += 0.02;
      baseRadius += 2;
      basePadding += 1;
    }
    
    // Animation effects (very subtle, only during route changes)
    if (isAnimating) {
      baseScale += 0.005;
      baseRadius += 0.25;
    }
    
    return {
      borderRadius: baseRadius,
      padding: basePadding,
      scale: baseScale,
      shadowIntensity: isScrolled ? 0.08 : 0.15, // Much more subtle shadows
      blur: isScrolled ? 20 : 28 // Reduced blur for more transparency
    };
  };

  const dimensions = getDimensions();
  const translucency = getTranslucency();
  const borderOpacity = getBorderOpacity();

  return (
    <Flex
      position="fixed"
      top="16"
      horizontal="center"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <Flex
        ref={headerRef}
        background="page"
        border="neutral-alpha-weak"
        radius="xl"
        shadow="xl"
        padding="12"
        horizontal="center"
        zIndex={1}
        className={`navbar-dynamic ${isScrolled ? 'navbar-contracted' : 'navbar-expanded'} ${isDragging ? 'dragging' : ''} ${isAnimating ? 'interacting' : 'stable'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          /* Apple Liquid Glass Effect - Perfect Frosted Glass */
          backdropFilter: `blur(${dimensions.blur}px) saturate(120%)`,
          WebkitBackdropFilter: `blur(${dimensions.blur}px) saturate(120%)`,
          
          /* Perfect frosted glass translucency */
          backgroundColor: `rgba(255, 255, 255, ${translucency})`,
          border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
          
          /* Simple morphing - only 2 states for clear UX */
          borderRadius: `${dimensions.borderRadius}px`,
          padding: `${dimensions.padding}px`,
          
          /* Apple-style shadows with perfect frosted glass effect */
          boxShadow: `
            /* Primary depth shadow - very subtle */
            0 ${dimensions.scale * 8}px ${dimensions.scale * 16}px rgba(0, 0, 0, ${0.05 + dimensions.shadowIntensity * 0.1}),
            /* Inner highlight for liquid effect - much more subtle */
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            /* Inner shadow for depth - very subtle */
            inset 0 -1px 0 rgba(0, 0, 0, 0.03),
            /* Subsurface scattering layers - very subtle */
            inset 0 0 ${dimensions.scale * 8}px rgba(255, 255, 255, 0.03),
            inset 0 0 ${dimensions.scale * 16}px rgba(255, 255, 255, 0.01),
            /* Ambient occlusion - very light */
            inset 0 0 0 1px rgba(255, 255, 255, 0.03)
          `,
          
          minWidth: "fit-content",
          position: "relative",
          overflow: "hidden",
          cursor: isDragging ? "grabbing" : "grab",
          
          /* Apple's signature transition curve - smart timing */
          transition: isDragging 
            ? "all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          
          /* Perfect centering with simple scaling - maintain center alignment */
          transform: `scale(${dimensions.scale})`,
          
          /* Performance optimizations */
          willChange: "transform, backdrop-filter, box-shadow",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Interactive Liquid Glass Refraction Layer */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              /* Perfect frosted glass refraction with hover interaction */
              radial-gradient(
                ellipse at ${50 + hoverPosition.x * 15}% ${50 + hoverPosition.y * 15}%,
                rgba(255, 255, 255, 0.06) 0%,
                rgba(255, 255, 255, 0.03) 40%,
                rgba(255, 255, 255, 0.015) 70%,
                transparent 85%
              ),
              /* Subtle chromatic aberration with hover movement */
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.02) 0%, 
                transparent 25%, 
                rgba(255, 255, 255, 0.03) 50%, 
                transparent 75%,
                rgba(255, 255, 255, 0.02) 100%
              )
            `,
            opacity: isHovered ? 0.4 : 0.25,
            pointerEvents: "none",
            zIndex: -1,
            transition: "all 0.3s ease",
            filter: "blur(0.2px)",
            transform: `translate(${hoverPosition.x * 3}px, ${hoverPosition.y * 3}px)`,
          }}
        />
        
        {/* Dynamic Island Morphing Background with Hover Effects */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) translate(${hoverPosition.x * 8}px, ${hoverPosition.y * 8}px)`,
            width: `${100 + (dimensions.scale - 1) * 12}%`,
            height: `${100 + (dimensions.scale - 1) * 12}%`,
            background: `
              radial-gradient(
                ellipse at center,
                rgba(255, 255, 255, 0.04) 0%,
                rgba(255, 255, 255, 0.02) 50%,
                rgba(255, 255, 255, 0.005) 80%,
                transparent 95%
              )
            `,
            borderRadius: "inherit",
            pointerEvents: "none",
            zIndex: -2,
            transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
        
        {/* Enhanced Active Route Indicator with Animation - Only show when valid */}
        {/* Removed active page indicator dot completely */}
        
        {/* Interactive Liquid Glass Surface Highlights */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(
                ${135 + hoverPosition.x * 25}deg,
                rgba(255, 255, 255, 0.08) 0%,
                transparent 25%,
                rgba(255, 255, 255, 0.03) 50%,
                transparent 75%,
                rgba(255, 255, 255, 0.06) 100%
              )
            `,
            opacity: isHovered ? 0.3 : 0.1,
            pointerEvents: "none",
            zIndex: -1,
            transition: "all 0.3s ease",
            mixBlendMode: "overlay",
            transform: `translate(${hoverPosition.x * 2}px, ${hoverPosition.y * 2}px)`,
          }}
        />
        
        {/* Smart Hover Glow Effect (only when actually hovering) */}
        {isHovered && !isDragging && (
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "-12px",
              right: "-12px",
              bottom: "-12px",
              background: `
                radial-gradient(
                  ellipse at center,
                  rgba(255, 255, 255, 0.03) 0%,
                  rgba(255, 255, 255, 0.015) 50%,
                  transparent 80%
                )
              `,
              borderRadius: "inherit",
              pointerEvents: "none",
              zIndex: -3,
              opacity: 0,
              animation: "smartHoverGlow 0.3s ease-out forwards",
            }}
          />
        )}
        
        {/* Drag Feedback Indicator */}
        {isDragging && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              background: `
                radial-gradient(
                  ellipse at center,
                  rgba(255, 255, 255, 0.02) 0%,
                  rgba(255, 255, 255, 0.01) 60%,
                  transparent 90%
                )
              `,
              borderRadius: "inherit",
              pointerEvents: "none",
              zIndex: -4,
              animation: "dragFeedback 0.3s ease-out forwards",
            }}
          />
        )}
        
        <Flex 
          gap="8" 
          vertical="center" 
          textVariant="body-default-s" 
          suppressHydrationWarning
          style={{
            transition: "all 0.3s ease",
            transform: isHovered ? "scale(1.02)" : "scale(1)",
            filter: isHovered ? "brightness(1.1)" : "brightness(1)",
          }}
        >
          {/* SVG Logo on the left */}
          <div
            style={{
              width: "48px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              position: "relative",
            }}
            onClick={() => window.location.href = "/"}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 222.64 401.86"
              style={{
                width: "36px",
                height: "36px",
                fill: "none",
                stroke: "rgba(255, 255, 255, 1)",
                strokeWidth: "3",
                position: "relative",
                zIndex: 3,
              }}
            >
              <g id="Layer_2" data-name="Layer 2">
                {/* Subtle fill for brightness */}
                <path 
                  d="M441.26,276.51a4.35,4.35,0,0,0-3.42-1.65s-13.36-1.2-25.31-1.41c-9.49-.18-18.12.61-18.12.61s-4.19-.19-4.86-3,2.22-8.27,2.22-8.27l21.81-56.13s.85-3.72-.11-6.41a7.28,7.28,0,0,0-3.39-3.41A13,13,0,0,0,404,199a13.2,13.2,0,0,0-4.14,4.57l-30.95,60.11s-2.1,6-7.19,8.87c-5.41,3.08-13.82,3.08-13.82,3.08s-37,3.39-64.3,11.48a87,87,0,0,0-31,16.73s-12.07,9.1-10.93,18.76c1.05,8.81,15.32,18.27,15.32,18.27a142,142,0,0,0,17.11,9c10,4.26,21.91,8.69,31,13,9.63,4.58,12.88,10,12.88,10s3.78,4.52,3.13,8.47-5.79,7.6-5.79,7.6-17.08,12-34.3,20.15a191,191,0,0,1-33.44,11.79s-6.76,1.78-8.94-.22c-1.73-1.57,1-7,1-7a58.75,58.75,0,0,1,7.67-16c8.11-11.89,20.69-25.61,20.69-25.61a8.54,8.54,0,0,0,1.31-6.82c-.69-2.74-2.18-5.42-4.3-6.21-1.94-.72-5,.4-7.57,1.79-3.85,2.06-5.09,3.58-5.09,3.58s-11.57,11.7-19.08,24.93a153.28,153.28,0,0,0-12.88,31.34s-2.19,10,2.67,14c5.51,4.57,18.16,3.23,18.16,3.23s20.57-2.68,39-10.21c16.57-6.77,31.24-18.48,31.24-18.48s5.66-3.94,7.22-2.46c1.83,1.72-.4,8.9-.4,8.9l-69.08,170s-2.72,9.85.72,12.17c1.63,1.09,4.67,1,7.32-.07,3.09-1.19,5-5.81,5-5.81s48.52-104.79,82-190.11a892.84,892.84,0,0,0,33-103.25s1.05-5.05,4.7-7.85c3.14-2.41,9-2.64,9-2.64l46.43-2.48s4.61-1.21,5.1-4.29A7.81,7.81,0,0,0,441.26,276.51ZM359,298,337.1,363c.35-1.07-.94,3.41-1.91,4a2.89,2.89,0,0,1-2.55,0,184.7,184.7,0,0,0-26.5-17.88c-20.25-11.06-45.28-21.07-45.28-21.07a8.47,8.47,0,0,1-4.46-4.16,5.87,5.87,0,0,1-.3-3.22,7.94,7.94,0,0,1,2.35-3.85l2.41-2.85a75.49,75.49,0,0,1,18-12.47,125.11,125.11,0,0,1,25.57-9.63c20.45-5.13,45.09-3,45.09-3s6,.59,8.65,3.17C360.12,293.92,359,298,359,298Z" 
                  transform="translate(-219.93 -196.8)"
                  style={{
                    fill: "rgba(255, 255, 255, 0.08)",
                    stroke: "none",
                  }}
                />
                
                {/* Main path - bright base */}
                <path 
                  d="M441.26,276.51a4.35,4.35,0,0,0-3.42-1.65s-13.36-1.2-25.31-1.41c-9.49-.18-18.12.61-18.12.61s-4.19-.19-4.86-3,2.22-8.27,2.22-8.27l21.81-56.13s.85-3.72-.11-6.41a7.28,7.28,0,0,0-3.39-3.41A13,13,0,0,0,404,199a13.2,13.2,0,0,0-4.14,4.57l-30.95,60.11s-2.1,6-7.19,8.87c-5.41,3.08-13.82,3.08-13.82,3.08s-37,3.39-64.3,11.48a87,87,0,0,0-31,16.73s-12.07,9.1-10.93,18.76c1.05,8.81,15.32,18.27,15.32,18.27a142,142,0,0,0,17.11,9c10,4.26,21.91,8.69,31,13,9.63,4.58,12.88,10,12.88,10s3.78,4.52,3.13,8.47-5.79,7.6-5.79,7.6-17.08,12-34.3,20.15a191,191,0,0,1-33.44,11.79s-6.76,1.78-8.94-.22c-1.73-1.57,1-7,1-7a58.75,58.75,0,0,1,7.67-16c8.11-11.89,20.69-25.61,20.69-25.61a8.54,8.54,0,0,0,1.31-6.82c-.69-2.74-2.18-5.42-4.3-6.21-1.94-.72-5,.4-7.57,1.79-3.85,2.06-5.09,3.58-5.09,3.58s-11.57,11.7-19.08,24.93a153.28,153.28,0,0,0-12.88,31.34s-2.19,10,2.67,14c5.51,4.57,18.16,3.23,18.16,3.23s20.57-2.68,39-10.21c16.57-6.77,31.24-18.48,31.24-18.48s5.66-3.94,7.22-2.46c1.83,1.72-.4,8.9-.4,8.9l-69.08,170s-2.72,9.85.72,12.17c1.63,1.09,4.67,1,7.32-.07,3.09-1.19,5-5.81,5-5.81s48.52-104.79,82-190.11a892.84,892.84,0,0,0,33-103.25s1.05-5.05,4.7-7.85c3.14-2.41,9-2.64,9-2.64l46.43-2.48s4.61-1.21,5.1-4.29A7.81,7.81,0,0,0,441.26,276.51ZM359,298,337.1,363c.35-1.07-.94,3.41-1.91,4a2.89,2.89,0,0,1-2.55,0,184.7,184.7,0,0,0-26.5-17.88c-20.25-11.06-45.28-21.07-45.28-21.07a8.47,8.47,0,0,1-4.46-4.16,5.87,5.87,0,0,1-.3-3.22,7.94,7.94,0,0,1,2.35-3.85l2.41-2.85a75.49,75.49,0,0,1,18-12.47,125.11,125.11,0,0,1,25.57-9.63c20.45-5.13,45.09-3,45.09-3s6,.59,8.65,3.17C360.12,293.92,359,298,359,298Z" 
                  transform="translate(-219.93 -196.8)"
                  style={{
                    stroke: "rgba(255, 255, 255, 0.95)",
                    strokeWidth: "3",
                    filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))",
                  }}
                />
                
                {/* Pure white light line passing through */}
                <path 
                  d="M441.26,276.51a4.35,4.35,0,0,0-3.42-1.65s-13.36-1.2-25.31-1.41c-9.49-.18-18.12.61-18.12.61s-4.19-.19-4.86-3,2.22-8.27,2.22-8.27l21.81-56.13s.85-3.72-.11-6.41a7.28,7.28,0,0,0-3.39-3.41A13,13,0,0,0,404,199a13.2,13.2,0,0,0-4.14,4.57l-30.95,60.11s-2.1,6-7.19,8.87c-5.41,3.08-13.82,3.08-13.82,3.08s-37,3.39-64.3,11.48a87,87,0,0,0-31,16.73s-12.07,9.1-10.93,18.76c1.05,8.81,15.32,18.27,15.32,18.27a142,142,0,0,0,17.11,9c10,4.26,21.91,8.69,31,13,9.63,4.58,12.88,10,12.88,10s3.78,4.52,3.13,8.47-5.79,7.6-5.79,7.6-17.08,12-34.3,20.15a191,191,0,0,1-33.44,11.79s-6.76,1.78-8.94-.22c-1.73-1.57,1-7,1-7a58.75,58.75,0,0,1,7.67-16c8.11-11.89,20.69-25.61,20.69-25.61a8.54,8.54,0,0,0,1.31-6.82c-.69-2.74-2.18-5.42-4.3-6.21-1.94-.72-5,.4-7.57,1.79-3.85,2.06-5.09,3.58-5.09,3.58s-11.57,11.7-19.08,24.93a153.28,153.28,0,0,0-12.88,31.34s-2.19,10,2.67,14c5.51,4.57,18.16,3.23,18.16,3.23s20.57-2.68,39-10.21c16.57-6.77,31.24-18.48,31.24-18.48s5.66-3.94,7.22-2.46c1.83,1.72-.4,8.9-.4,8.9l-69.08,170s-2.72,9.85.72,12.17c1.63,1.09,4.67,1,7.32-.07,3.09-1.19,5-5.81,5-5.81s48.52-104.79,82-190.11a892.84,892.84,0,0,0,33-103.25s1.05-5.05,4.7-7.85c3.14-2.41,9-2.64,9-2.64l46.43-2.48s4.61-1.21,5.1-4.29A7.81,7.81,0,0,0,441.26,276.51ZM359,298,337.1,363c.35-1.07-.94,3.41-1.91,4a2.89,2.89,0,0,1-2.55,0,184.7,184.7,0,0,0-26.5-17.88c-20.25-11.06-45.28-21.07-45.28-21.07a8.47,8.47,0,0,1-4.46-4.16,5.87,5.87,0,0,1-.3-3.22,7.94,7.94,0,0,1,2.35-3.85l2.41-2.85a75.49,75.49,0,0,1,18-12.47,125.11,125.11,0,0,1,25.57-9.63c20.45-5.13,45.09-3,45.09-3s6,.59,8.65,3.17C360.12,293.92,359,298,359,298Z" 
                  transform="translate(-219.93 -196.8)"
                  style={{
                    stroke: "rgba(255, 255, 255, 1)",
                    strokeWidth: "4",
                    strokeDasharray: "1000",
                    strokeDashoffset: "1000",
                    animation: "elegantLight 6s ease-in-out infinite",
                    filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))",
                  }}
                />
              </g>
            </svg>
          </div>
          
          <Line 
            background="neutral-alpha-medium" 
            vert 
            maxHeight="24" 
            style={{
              opacity: isHovered ? 0.8 : 0.5,
              transition: "opacity 0.3s ease",
            }}
          />
          
          {/* Home icon in main menu */}
          {routes["/"] && (
            <ToggleButton 
              prefixIcon="home" 
              href="/" 
              selected={pathname === "/"}
            />
          )}
          
          {routes["/case-studies"] && (
            <ToggleButton
              prefixIcon="grid"
              href="/case-studies"
              label="Case Studies"
              selected={pathname.startsWith("/case-studies")}
          />
          )}
          {routes["/about"] && (
            <ToggleButton
              prefixIcon="person"
              href="/about"
              label="About Me"
              selected={pathname === "/about"}
            />
          )}
          {routes["/experience"] && (
            <ToggleButton
              prefixIcon="rocket"
              href="/experience"
              label="Experience"
              selected={pathname.startsWith("/experience")}
            />
          )}
          {routes["/contact"] && (
            <ToggleButton
              prefixIcon="email"
              href="/contact"
              label="Contact"
              selected={pathname.startsWith("/contact")}
            />
          )}
          {display.themeSwitcher && (
            <>
              <Line 
                background="neutral-alpha-medium" 
                vert 
                maxHeight="24" 
                style={{
                  opacity: isHovered ? 0.8 : 0.5,
                  transition: "opacity 0.3s ease",
                }}
              />
              <ThemeToggle />
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
