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
      zIndex={10}
      horizontal="center"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          {routes["/"] && (
            <ToggleButton 
              prefixIcon="home" 
              href="/" 
              selected={pathname === "/"}
            />
          )}
          <Line 
            background="neutral-alpha-medium" 
            vert 
            maxHeight="24" 
            style={{
              opacity: isHovered ? 0.8 : 0.5,
              transition: "opacity 0.3s ease",
            }}
          />
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
