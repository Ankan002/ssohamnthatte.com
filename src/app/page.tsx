"use client";

import React from "react";
import Image from "next/image";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

const tools = [
  { 
    name: "Figma", 
    icon: <img src="/images/icons/figma.png" alt="Figma" style={{ width: "134px", height: "42px", filter: "grayscale(100%) brightness(0.9) contrast(1.1)", transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} className="ticker-icon" />,
    color: "#F24E1E" 
  },
  { 
    name: "Framer", 
    icon: <img src="/images/icons/framer.png" alt="Framer" style={{ width: "146px", height: "40px", filter: "grayscale(100%) brightness(0.9) contrast(1.1)", transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} className="ticker-icon" />,
    color: "#0055FF" 
  },
  { 
    name: "Illustrator", 
    icon: <img src="/images/icons/illustrator.png" alt="Illustrator" style={{ width: "157px", height: "39px", filter: "grayscale(100%) brightness(0.9) contrast(1.1)", transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} className="ticker-icon" />,
    color: "#FF9A00" 
  },
  { 
    name: "Notion", 
    icon: <img src="/images/icons/notion.png" alt="Notion" style={{ width: "157px", height: "39px", filter: "grayscale(100%) brightness(0.9) contrast(1.1)", transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} className="ticker-icon" />,
    color: "#000000" 
  },
  { 
    name: "Slack", 
    icon: <img src="/images/icons/slack.png" alt="Slack" style={{ width: "157px", height: "39px", filter: "grayscale(100%) brightness(0.9) contrast(1.1)", transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} className="ticker-icon" />,
    color: "#4A154B" 
  },
  { 
    name: "Webflow", 
    icon: <img src="/images/icons/webflow.png" alt="Webflow" style={{ width: "157px", height: "37px", filter: "grayscale(100%) brightness(0.9) contrast(1.1)", transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} className="ticker-icon" />,
    color: "#146EF5" 
  },
];

export default function Home() {
  React.useEffect(() => {
    // Interactive background elements with smooth scroll scaling
    const backgroundContainer = document.querySelector('.interactive-background') as HTMLElement | null;
    
    if (!backgroundContainer) return;

    // Add interactive background elements dynamically
    const circles = [
      { class: 'circle-1', size: 600, baseSize: 600 },
      { class: 'circle-2', size: 450, baseSize: 450 },
      { class: 'circle-3', size: 320, baseSize: 320 },
      { class: 'circle-4', size: 720, baseSize: 720 }
    ];

    const lines = [
      { class: 'line-1', size: 900, baseSize: 900 },
      { class: 'line-2', size: 700, baseSize: 700 },
      { class: 'line-3', size: 500, baseSize: 500 }
    ];

    const orbs = [
      { class: 'orb-1' },
      { class: 'orb-2' }
    ];

    // Create and append elements
    circles.forEach(circle => {
      const div = document.createElement('div');
      div.className = `floating-circle ${circle.class}`;
      div.style.width = `${circle.size}px`;
      div.style.height = `${circle.size}px`;
      div.setAttribute('data-base-size', circle.baseSize.toString());
      backgroundContainer.appendChild(div);
    });

    lines.forEach(line => {
      const div = document.createElement('div');
      div.className = `animated-line ${line.class}`;
      div.style.width = `${line.size}px`;
      div.style.height = `${line.size}px`;
      div.setAttribute('data-base-size', line.baseSize.toString());
      backgroundContainer.appendChild(div);
    });

    orbs.forEach(orb => {
      const div = document.createElement('div');
      div.className = `gradient-orb ${orb.class}`;
      backgroundContainer.appendChild(div);
    });

    // Smooth scroll scaling effect
    let ticking = false;
    let lastScrollY = window.scrollY;

    const updateCircleSizes = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.min(scrollY / maxScroll, 1);
      
      // Smooth easing function for butter-like animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(scrollProgress);
      
      // Scale factor (circles will grow up to 1.5x their original size)
      const maxScale = 1.5;
      const scaleFactor = 1 + (easedProgress * (maxScale - 1));

      // Update all circles and lines
      const allElements = backgroundContainer.querySelectorAll('.floating-circle, .animated-line');
      
      allElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const baseSize = parseInt(htmlElement.getAttribute('data-base-size') || '0');
        if (baseSize > 0) {
          const newSize = Math.round(baseSize * scaleFactor);
          htmlElement.style.width = `${newSize}px`;
          htmlElement.style.height = `${newSize}px`;
          
          // Add subtle opacity change for depth
          const opacity = 0.3 + (easedProgress * 0.2);
          htmlElement.style.opacity = opacity.toString();
        }
      });

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateCircleSizes);
        ticking = true;
      }
    };

    // Throttled scroll handler for smooth performance
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only update if scroll position changed significantly
      if (Math.abs(currentScrollY - lastScrollY) > 1) {
        lastScrollY = currentScrollY;
        requestTick();
      }
    };

    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // Cleanup
      window.removeEventListener('scroll', handleScroll);
      if (backgroundContainer) {
        backgroundContainer.innerHTML = '';
      }
    };
  }, []);


  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Hero Section - Full Width Breakout */}
      <Column 
        fillWidth 
        className="hero-container"
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          marginTop: "-5vh",
        }}
      >
        {/* Interactive Background Elements */}
        <div className="interactive-background">
          {/* Floating Circles */}
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-circle circle-4"></div>
          
          {/* Animated Lines */}
          <div className="animated-line line-1"></div>
          <div className="animated-line line-2"></div>
          <div className="animated-line line-3"></div>
          
          {/* Gradient Orbs */}
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>

        {/* Main Hero Content - Clean 15% Layout */}
        <Flex 
          fillWidth 
          gap="xl" 
          horizontal="center"
          vertical="center"
          style={{
            width: "70%",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Left Side - Text Content */}
          <Flex flex={3} direction="column" gap="s" vertical="center" style={{ minWidth: "0" }}>
            {/* Greeting */}
          <RevealFx translateY="4" fillWidth horizontal="start">
              <Text 
                className="hero-greeting"
                variant="heading-default-l"
                style={{
                  fontSize: "1.29rem",
                  fontWeight: "500",
                  color: "rgba(255, 255, 255, 0.8)",
                  letterSpacing: "0.02em",
                  marginBottom: "2px",
                }}
              >
                Namaste! I'm
              </Text>
            </RevealFx>
            
            {/* Main Name */}
            <RevealFx translateY="8" delay={0.1} fillWidth horizontal="start">
              <Heading 
                wrap="balance" 
                variant="display-strong-l"
                style={{
                  fontSize: "3.68rem",
                  lineHeight: "1.1",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginBottom: "8px",
                }}
              >
                <Text className="hero-name">Soham Thatte</Text>
            </Heading>
          </RevealFx>
          
            {/* Description */}
            <RevealFx translateY="12" delay={0.2} fillWidth horizontal="start">
              <Text 
                wrap="balance" 
                className="hero-description"
                variant="heading-default-m"
                style={{
                  fontSize: "1.12rem",
                  lineHeight: "1.8",
                  letterSpacing: "0.02em",
                  color: "rgba(255, 255, 255, 0.7)",
                  maxWidth: "1140px",
                  fontWeight: "400",
                  marginBottom: "16px",
                }}
              >
                A curious designer who enjoys the sweet spot between product and interaction design, 
                crafting intuitive experiences where simplicity meets impact and ideas drive meaningful change.
            </Text>
          </RevealFx>
          
                        {/* CTA Button */}
            <RevealFx translateY="16" delay={0.4} horizontal="start">
              <a
                href="/resume"
                className="resume-button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 32px",
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "16px",
                  color: "rgba(255, 255, 255, 0.95)",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  letterSpacing: "0.02em",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Liquid glass background effect */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.02) 100%)",
                    borderRadius: "16px",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                  className="button-glow"
                />
                
                {/* Shimmer effect */}
                <div
                  style={{
                    position: "absolute",
                    top: "-50%",
                    left: "-50%",
                    width: "200%",
                    height: "200%",
                    background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
                    transform: "translateX(-100%)",
                    transition: "transform 0.6s ease",
                  }}
                  className="button-shimmer"
                />
                
                <span style={{ position: "relative", zIndex: 2 }}>Resume</span>
                <span style={{ fontSize: "1.2rem", position: "relative", zIndex: 2, transition: "transform 0.3s ease" }} className="arrow-icon">→</span>
              </a>
            </RevealFx>
        </Flex>
        
          {/* Right Side - Avatar */}
          <Flex flex={1} horizontal="center" vertical="center" style={{ marginLeft: "-80px" }}>
                      <RevealFx translateY="0" delay={0}>
              <div
                style={{
                  width: "520px",
                  height: "606px",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 20,
                  marginTop: "-60px",
                  marginLeft: "80px",
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  contain: "layout paint",
                  maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                }}
              >
                <Image
                  src={person.avatar}
                  alt="Soham Thatte"
                  priority
                  width={520}
                  height={606}
                  sizes="(max-width: 1200px) 50vw, 520px"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    transform: "translateZ(0) scale(1.1) scaleX(-1)",
                  }}
                />
              </div>
            </RevealFx>
        </Flex>
      </Flex>
      
        {/* Tools Ticker - Bottom */}
        <RevealFx translateY="24" delay={0.6} fillWidth style={{ position: "absolute", bottom: "20px", left: 0, right: 0, zIndex: 10 }}>
          <div 
            className="tools-ticker-container"
            style={{
              width: "100vw",
              marginLeft: "calc(-50vw + 50%)",
              marginRight: "calc(-50vw + 50%)",
              overflow: "hidden",
              position: "relative",
              padding: "30px 0",
            }}
          >
            <div 
              className="tools-ticker" 
              style={{
                display: "flex",
                gap: "32px",
                width: "max-content",
                minWidth: "100vw",
                paddingLeft: "0",
                paddingRight: "0",
                animation: "toolsTickerScroll 30s linear infinite",
                alignItems: "center",
              }}
            >
              {/* Original Tools */}
              {tools.map((tool, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "96px",
                    height: "80px",
                    filter: "brightness(0.8) contrast(0.9)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {tool.icon}
                </div>
              ))}
              
              {/* Duplicate Tools for seamless loop */}
              {tools.map((tool, index) => (
                <div
                  key={`duplicate-${index}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "96px",
                    height: "80px",
                    filter: "brightness(0.8) contrast(0.9)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {tool.icon}
                </div>
              ))}
              
              {/* Third set for ultra-seamless loop */}
              {tools.map((tool, index) => (
                <div
                  key={`triplicate-${index}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "96px",
                    height: "80px",
                    filter: "brightness(0.8) contrast(0.9)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {tool.icon}
                </div>
              ))}
            </div>
          </div>
        </RevealFx>
      </Column>
      
      {/* Case Studies Hook Section */}
      <Column fillWidth gap="32" paddingY="48">
        <RevealFx translateY="8" fillWidth horizontal="center">
          <Column horizontal="center" gap="16" maxWidth="l">
            <Heading variant="display-strong-l" wrap="balance" style={{ textAlign: "center" }}>
              <Text onBackground="neutral-strong">Featured Case Studies</Text>
            </Heading>
            <Text variant="heading-default-xl" wrap="balance" onBackground="neutral-weak" style={{ textAlign: "center" }}>
              Compilation of my work that evoke my sense of pride
            </Text>
            <Text variant="body-default-l" wrap="balance" onBackground="neutral-weak" style={{ maxWidth: "600px", textAlign: "center" }}>
              A glimpse into my design process and the impact-driven solutions I've crafted for various challenges.
            </Text>
          </Column>
        </RevealFx>
        
        <RevealFx translateY="12" delay={0.2} fillWidth>
          <Flex
            fillWidth
            horizontal="center"
            style={{
              justifyContent: "center",
            }}
          >
            {/* Sophisticated UI Card - Moneyvest Case Study */}
            <div
              className="sophisticated-ui-card"
              style={{
                width: "1000px",
                height: "600px",
                background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                borderRadius: "24px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                cursor: "pointer",
              }}
            >
              {/* Purple/Blue Glow Effect */}
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  left: "-50px",
                  width: "200px",
                  height: "200px",
                  background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
                  borderRadius: "50%",
                  filter: "blur(40px)",
                  zIndex: 1,
                }}
              />
              
              {/* Card Content */}
              <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex" }}>
                {/* Left Section - Case Study Content */}
                <div style={{ flex: "35%", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  {/* Case Study Badge */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }}></div>
                    <Text style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", fontWeight: "500" }}>
                      Featured Case Study • 5 min read
                    </Text>
                  </div>
                  
                  {/* Main Headline */}
                  <Heading style={{ 
                    fontSize: "2.4rem", 
                    fontWeight: "700", 
                    color: "white", 
                    marginBottom: "16px",
                    lineHeight: "1.1"
                  }}>
                    MoneyVest Finance App
                  </Heading>
                  
                  {/* Sub-headline */}
                  <Text style={{ 
                    fontSize: "1.1rem", 
                    color: "rgba(255, 255, 255, 0.8)", 
                    marginBottom: "24px",
                    lineHeight: "1.5"
                  }}>
                    A comprehensive financial management app designed to help users track expenses, manage investments, and achieve their financial goals with intuitive design.
                  </Text>
                  
                  {/* Project Details */}
                  <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "12px", color: "#3b82f6", background: "rgba(59, 130, 246, 0.2)", padding: "4px 8px", borderRadius: "6px" }}>Mobile App</span>
                    <span style={{ fontSize: "12px", color: "#10b981", background: "rgba(16, 185, 129, 0.2)", padding: "4px 8px", borderRadius: "6px" }}>2024</span>
                    <span style={{ fontSize: "12px", color: "#8b5cf6", background: "rgba(139, 92, 246, 0.2)", padding: "4px 8px", borderRadius: "6px" }}>Finance</span>
                  </div>
                  

                  
                  {/* CTA Button - Liquid Glass Style */}
                  <a
                    href="/case-studies/moneyvest"
                    className="resume-button"
                    style={{
                      gap: "16px",
                      padding: "16px 32px",
                      background: "rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(20px) saturate(180%)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "16px",
                      color: "rgba(255, 255, 255, 0.95)",
                      fontSize: "16px",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      alignSelf: "flex-start",
                      position: "relative",
                      overflow: "hidden",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                      transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    {/* Button glow effect */}
                    <div
                      className="button-glow"
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        background: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
                        opacity: 0,
                        transition: "opacity 0.4s ease",
                      }}
                    />
                    
                    {/* Button shimmer effect */}
                    <div
                      className="button-shimmer"
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                        transition: "transform 0.6s ease",
                      }}
                    />
                    
                    {/* Button text */}
                    <span style={{ position: "relative", zIndex: 2 }}>
                      Read Case Study
                    </span>
                    
                    {/* Arrow icon */}
                    <span 
                      className="arrow-icon"
                      style={{ 
                        fontSize: "18px", 
                        position: "relative", 
                        zIndex: 2,
                        transition: "transform 0.3s ease"
                      }}
                    >
                      →
                    </span>
                  </a>
                </div>
                
                {/* Right Section - Moneyvest App Interface */}
                <div style={{ flex: "65%", padding: "24px", background: "rgba(0, 0, 0, 0.2)", position: "relative" }}>
                  {/* App Screenshot */}
                  <div style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                    background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}>
                    <img
                      src="/images/moneyvest.png"
                      alt="MoneyVest Finance App"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "16px"
                      }}
                    />
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </Flex>
        </RevealFx>
        
        <RevealFx translateY="8" delay={0.4} horizontal="center">
          <Button
            href="/case-studies"
            variant="secondary"
            size="l"
            weight="default"
            arrowIcon
            style={{
              padding: "16px 32px",
              borderRadius: "12px",
            }}
          >
            View All Case Studies
          </Button>
        </RevealFx>
      </Column>

      {/* Text Ticker - Unified Liquid Glass Bar with tilt and continuous scroll */}
      <div
        className="text-ticker-bar"
        style={{
          position: "relative",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          overflow: "hidden",
          marginTop: "0",
          marginBottom: "0",
          transform: "skewY(-1deg)",
        }}
      >
        <div className="text-ticker" style={{ transform: "skewY(1deg)" }}>
          {[
            "Drive", "Storytelling", "Impact", "Strategy", "Interaction Oriented", "Scalable",
            "Drive", "Storytelling", "Impact", "Strategy", "Interaction Oriented", "Scalable",
            "Drive", "Storytelling", "Impact", "Strategy", "Interaction Oriented", "Scalable",
            "Drive", "Storytelling", "Impact", "Strategy", "Interaction Oriented", "Scalable",
          ].map((text, index) => (
            <div className="item" key={index}>
              <span className="label">{text}</span>
              <span className="star" />
            </div>
          ))}
        </div>
      </div>

      {/* Passion Display - Layout swap per provided component; keep title/description above */}
      <Column fillWidth gap="16" paddingY="24">
        <RevealFx translateY="8" fillWidth horizontal="center">
          <Column horizontal="center" gap="8" maxWidth="l">
            <Heading variant="display-strong-l" wrap="balance" style={{ textAlign: "center" }}>
              <Text onBackground="neutral-strong">Passion Display</Text>
            </Heading>
            <Text variant="heading-default-xl" wrap="balance" onBackground="neutral-weak" style={{ textAlign: "center" }}>
              What I love doing every day
            </Text>
          </Column>
        </RevealFx>

        <RevealFx translateY="12" delay={0.1} fillWidth>
          <div style={{ position: "relative", minHeight: 720, width: "100%", maxWidth: 1200, margin: "0 auto" }}>
            {/* Top Left - UNAGI meme */}
            <div style={{ position: "absolute", top: 0, left: 0, width: 320, height: 256 }} className="glass-card">
              <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #7c2d12, #c2410c)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ width: 96, height: 96, background: "#ea580c", borderRadius: 9999, margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>👨‍💼</div>
                    <div style={{ color: "#fff", fontSize: 36, fontWeight: 800, letterSpacing: 2 }}>UNAGI</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Thinking below UNAGI */}
            <div style={{ position: "absolute", top: 288, left: 0, width: 320, height: 128 }} className="glass-card">
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                  <span className="glass-card-icon" />
                  <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 600, marginLeft: 12 }}>Design Thinking</h3>
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Empathize, Define, Ideate, Prototype and Test</p>
              </div>
            </div>

            {/* UX Research top center */}
            <div style={{ position: "absolute", top: 0, left: 384, width: 320, height: 160 }} className="glass-card">
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                  <span className="glass-card-icon" />
                  <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 600, marginLeft: 12 }}>UX Research</h3>
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Unveiling Insights through UX Research, bridging user desires with digital excellence.</p>
              </div>
            </div>

            {/* Visual Design bottom-left large */}
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 384, height: 320 }} className="glass-card">
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                  <span className="glass-card-icon" />
                  <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 600, marginLeft: 12 }}>Visual Design</h3>
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Impactful, Aesthetic, Visual Storytelling</p>
              </div>
              <div style={{ background: "#374151", borderRadius: 12, overflow: "hidden", height: 192, margin: 0 }}>
                <div style={{ background: "#4b5563", height: 32, display: "flex", alignItems: "center", padding: "0 12px", gap: 8 }}>
                  <div style={{ width: 12, height: 12, background: "#ef4444", borderRadius: 9999 }} />
                  <div style={{ width: 12, height: 12, background: "#f59e0b", borderRadius: 9999 }} />
                  <div style={{ width: 12, height: 12, background: "#22c55e", borderRadius: 9999 }} />
                  <div style={{ marginLeft: 16, fontSize: 12, color: "#e5e7eb", background: "#6b7280", padding: "2px 6px", borderRadius: 6 }}>✓ Secure | portfolio</div>
                </div>
                <div style={{ padding: 12, height: "calc(100% - 32px)", background: "#fff" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 16, height: 16, background: "#3b82f6", borderRadius: 4 }} />
                    <span style={{ fontSize: 12, color: "#4b5563" }}>Some portfolio</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#1f2937", fontWeight: 600 }}>Links</div>
                    <div style={{ marginLeft: 16, fontSize: 12, color: "#4b5563" }}>
                      <div>→ Navigation</div>
                      <div>→ Page 1</div>
                      <div>→ Page 2</div>
                      <div>→ Page 3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side stacked cards */}
            <div style={{ position: "absolute", top: 0, right: 0, width: 320 }}>
              <div style={{ marginBottom: 16, width: 128, height: 128 }} className="glass-card">
                <div style={{ textAlign: "center", padding: 16 }}>
                  <div style={{ width: 32, height: 32, background: "#3b82f6", borderRadius: 9999, margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12 }}>👥</div>
                  <div style={{ color: "#fff", fontSize: 12, fontWeight: 500 }}>Primary Research</div>
                </div>
              </div>
              <div style={{ position: "absolute", top: 0, right: 0, width: 128, height: 160 }} className="glass-card">
                <div style={{ textAlign: "center", padding: 16 }}>
                  <div style={{ width: 32, height: 32, background: "#f97316", borderRadius: 8, margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12 }}>📱</div>
                  <div style={{ color: "#fff", fontSize: 12, fontWeight: 500 }}>User Testing</div>
                </div>
              </div>
              <div style={{ position: "absolute", top: 144, left: 0, width: 128, height: 128 }} className="glass-card">
                <div style={{ textAlign: "center", padding: 16 }}>
                  <div style={{ width: 32, height: 32, background: "#14b8a6", borderRadius: 9999, margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12 }}>🔍</div>
                  <div style={{ color: "#fff", fontSize: 12, fontWeight: 500 }}>Secondary Research</div>
                </div>
              </div>
              <div style={{ position: "absolute", top: 144, right: 0, width: 128, height: 128 }} className="glass-card">
                <div style={{ textAlign: "center", padding: 16 }}>
                  <div style={{ width: 32, height: 32, background: "#22c55e", borderRadius: 8, margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12 }}>🗺️</div>
                  <div style={{ color: "#fff", fontSize: 12, fontWeight: 500 }}>Affinity Mapping</div>
                </div>
              </div>
              <div style={{ position: "absolute", top: 288, left: 0, width: 160, height: 192, background: "linear-gradient(135deg, #6b7280, #374151)", borderRadius: 14, padding: 8 }}>
                <div style={{ width: "100%", height: "100%", background: "#111827", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 12 }}>Device Mockup</div>
              </div>
            </div>

            {/* Prototyping bottom-right */}
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 320 }}>
              {/* Simple connection lines */}
              <svg width="300" height="100" style={{ position: "absolute", top: -100 }}>
                <line x1="0" y1="20" x2="200" y2="20" stroke="#22c55e" strokeWidth="2"/>
                <circle cx="50" cy="20" r="3" fill="#22c55e"/>
                <circle cx="150" cy="20" r="3" fill="#22c55e"/>
                <line x1="0" y1="50" x2="250" y2="50" stroke="#22c55e" strokeWidth="2"/>
                <circle cx="80" cy="50" r="3" fill="#22c55e"/>
                <circle cx="200" cy="50" r="3" fill="#22c55e"/>
                <path d="M180 10 L190 25 L185 25 L185 30 L180 10" fill="#22c55e"/>
              </svg>
              <div className="glass-card" style={{ padding: 24, width: "100%", height: 128 }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                  <span className="glass-card-icon" />
                  <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 600, marginLeft: 12 }}>Prototyping</h3>
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Turning Ideas into Interactive Prototypes that Spark User Love</p>
              </div>
            </div>
          </div>
        </RevealFx>
      </Column>

      {/* About Me Hook Section */}
      <Column fillWidth gap="32" paddingY="48">
        <RevealFx translateY="8" fillWidth horizontal="center">
          <Column horizontal="center" gap="16" maxWidth="l">
            <Heading variant="display-strong-l" wrap="balance" style={{ textAlign: "center" }}>
              <Text onBackground="neutral-strong">About Me</Text>
            </Heading>
            <Text variant="heading-default-xl" wrap="balance" onBackground="neutral-weak" style={{ textAlign: "center" }}>
              Designer, thinker, and problem solver
            </Text>
            <Text variant="body-default-l" wrap="balance" onBackground="neutral-weak" style={{ maxWidth: "600px", textAlign: "center" }}>
              I believe great design happens at the intersection of creativity and strategy. My journey in design has taught me that the best solutions come from understanding people, their needs, and the context in which they operate.
            </Text>
          </Column>
        </RevealFx>
        
        <RevealFx translateY="12" delay={0.2} horizontal="center">
          <Flex gap="24" horizontal="center" style={{ flexWrap: "wrap" }}>
            <Flex
              direction="column"
              gap="12"
              horizontal="center"
              vertical="center"
              padding="24"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              className="about-hook-card"
              style={{
                minWidth: "200px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <span style={{ fontSize: "48px", filter: "drop-shadow(0 2px 4px var(--shadow-color))" }}>
                🎯
              </span>
              <Text variant="body-default-s" onBackground="neutral-strong" style={{ textAlign: "center", fontWeight: "500" }}>
                User-Centered Design
              </Text>
            </Flex>
            
            <Flex
              direction="column"
              gap="12"
              horizontal="center"
              vertical="center"
              padding="24"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              className="about-hook-card"
              style={{
                minWidth: "200px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <span style={{ fontSize: "48px", filter: "drop-shadow(0 2px 4px var(--shadow-color))" }}>
                🚀
              </span>
              <Text variant="body-default-s" onBackground="neutral-strong" style={{ textAlign: "center", fontWeight: "500" }}>
                Innovation & Strategy
              </Text>
            </Flex>
            
                <Flex
                  direction="column"
              gap="12"
                  horizontal="center"
                  vertical="center"
              padding="24"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              className="about-hook-card"
              style={{
                minWidth: "200px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <span style={{ fontSize: "48px", filter: "drop-shadow(0 2px 4px var(--shadow-color))" }}>
                💡
              </span>
              <Text variant="body-default-s" onBackground="neutral-strong" style={{ textAlign: "center", fontWeight: "500" }}>
                Creative Problem Solving
              </Text>
            </Flex>
          </Flex>
        </RevealFx>
        
        <RevealFx translateY="8" delay={0.4} horizontal="center">
          <Button
            href="/about"
            variant="secondary"
            size="l"
            weight="default"
            arrowIcon
            style={{
              padding: "16px 32px",
              borderRadius: "12px",
            }}
          >
            Learn More About Me
          </Button>
        </RevealFx>
      </Column>

      {/* Passion Display Section */}
      <Column fillWidth gap="32" paddingY="48">
        <RevealFx translateY="8" fillWidth horizontal="center">
          <Column horizontal="center" gap="16" maxWidth="l">
            <Heading variant="display-strong-l" wrap="balance" style={{ textAlign: "center" }}>
              <Text onBackground="neutral-strong">What Drives Me</Text>
            </Heading>
            <Text variant="heading-default-xl" wrap="balance" onBackground="neutral-weak" style={{ textAlign: "center" }}>
              Beyond pixels and interfaces
            </Text>
            <Text variant="body-default-l" wrap="balance" onBackground="neutral-weak" style={{ maxWidth: "600px", textAlign: "center" }}>
              Design is more than aesthetics—it's about creating meaningful connections, solving real problems, and making technology feel human.
            </Text>
          </Column>
        </RevealFx>
        
        <RevealFx translateY="12" delay={0.2} fillWidth>
          <Flex
            fillWidth
            gap="32"
            style={{
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Flex
              flex={1}
              direction="column"
              gap="16"
              padding="32"
              radius="l"
                  background="surface"
                  border="neutral-alpha-weak"
              className="passion-card"
                  style={{
                minWidth: "300px",
                maxWidth: "400px",
                    position: "relative",
                    overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
              <span style={{ fontSize: "56px", filter: "drop-shadow(0 2px 4px var(--shadow-color))" }}>
                🌟
              </span>
              <Heading variant="heading-strong-m" onBackground="neutral-strong">
                User Experience
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                I'm passionate about creating experiences that feel intuitive, delightful, and meaningful. Every interaction should tell a story and serve a purpose.
              </Text>
            </Flex>
            
            <Flex
              flex={1}
              direction="column"
              gap="16"
              padding="32"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              className="passion-card"
                    style={{
                minWidth: "300px",
                maxWidth: "400px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <span style={{ fontSize: "56px", filter: "drop-shadow(0 2px 4px var(--shadow-color))" }}>
                🎨
              </span>
              <Heading variant="heading-strong-m" onBackground="neutral-strong">
                Visual Design
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                Crafting beautiful, purposeful visuals that communicate clearly and create emotional connections. Design should be both functional and inspiring.
                  </Text>
            </Flex>
            
            <Flex
              flex={1}
              direction="column"
              gap="16"
              padding="32"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              className="passion-card"
              style={{
                minWidth: "300px",
                maxWidth: "400px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <span style={{ fontSize: "56px", filter: "drop-shadow(0 2px 4px var(--shadow-color))" }}>
                🔬
              </span>
              <Heading variant="heading-strong-m" onBackground="neutral-strong">
                Research & Strategy
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                Understanding the problem deeply before designing the solution. Data-driven insights combined with human empathy lead to better outcomes.
                  </Text>
            </Flex>
          </Flex>
        </RevealFx>
      </Column>

      {/* Testimonials Section */}
      <Column fillWidth gap="32" paddingY="48">
        <RevealFx translateY="8" fillWidth horizontal="center">
          <Column horizontal="center" gap="16" maxWidth="l">
            <Text variant="label-default-s" onBackground="neutral-weak" style={{ textAlign: "center", color: "var(--brand-strong)", textTransform: "uppercase", letterSpacing: "1px" }}>
              TESTIMONIAL OF FEW FOLKS
            </Text>
            <Heading variant="display-strong-l" wrap="balance" style={{ textAlign: "center" }}>
              <Text onBackground="neutral-strong">Word On The Street About Me</Text>
            </Heading>
            <Text variant="heading-default-xl" wrap="balance" onBackground="neutral-weak" style={{ textAlign: "center" }}>
              Few words from people who collaborated with me
            </Text>
          </Column>
        </RevealFx>
        
        <RevealFx translateY="12" delay={0.2} fillWidth>
          <div className="testimonials-ticker-container" style={{
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            overflow: "hidden",
            position: "relative",
            padding: "0",
            left: "0",
            right: "0",
          }}>
            <div 
              className="testimonials-ticker" 
              style={{
                display: "flex",
                gap: "24px",
                width: "max-content",
                minWidth: "100vw",
                paddingLeft: "0",
                paddingRight: "0",
                cursor: "grab",
                userSelect: "none",
                willChange: "transform",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
              onMouseDown={(e) => {
                const ticker = e.currentTarget;
                const startX = e.clientX;
                const startTransform = ticker.style.transform || 'translateX(0)';
                const startTranslateX = parseInt(startTransform.match(/translateX\(([-\d.]+)px\)/)?.[1] || '0');
                let isDragging = true;

                // Pause the animation and add dragging class
                ticker.style.animationPlayState = 'paused';
                ticker.classList.add('dragging');

                const handleMouseMove = (e: MouseEvent) => {
                  if (!isDragging) return;
                  e.preventDefault();
                  
                  const x = e.clientX;
                  const walk = (startX - x) * 1.5; // Smoother movement
                  const newTranslateX = startTranslateX - walk;
                  
                  // Apply the transform
                  ticker.style.transform = `translateX(${newTranslateX}px)`;
                };

                const handleMouseUp = () => {
                  isDragging = false;
                  ticker.classList.remove('dragging');
                  
                  // Resume animation with current position
                  ticker.style.animationPlayState = 'running';
                  
                  // Remove the inline transform to let CSS animation take over
                  setTimeout(() => {
                    ticker.style.transform = '';
                  }, 50);
                  
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
              onMouseEnter={() => {
                // Pause animation on hover for better interaction
                const ticker = document.querySelector('.testimonials-ticker') as HTMLElement;
                if (ticker) {
                  ticker.style.animationPlayState = 'paused';
                }
              }}
              onMouseLeave={() => {
                // Resume animation when mouse leaves
                const ticker = document.querySelector('.testimonials-ticker') as HTMLElement;
                if (ticker && !ticker.classList.contains('dragging')) {
                  ticker.style.animationPlayState = 'running';
                }
              }}
              onTouchStart={(e) => {
                const ticker = e.currentTarget;
                const touch = e.touches[0];
                const startX = touch.clientX;
                const startTransform = ticker.style.transform || 'translateX(0)';
                const startTranslateX = parseInt(startTransform.match(/translateX\(([-\d.]+)px\)/)?.[1] || '0');
                let isDragging = true;

                // Pause the animation and add dragging class
                ticker.style.animationPlayState = 'paused';
                ticker.classList.add('dragging');

                const handleTouchMove = (e: TouchEvent) => {
                  if (!isDragging) return;
                  e.preventDefault();
                  
                  const touch = e.touches[0];
                  const x = touch.clientX;
                  const walk = (startX - x) * 1.5;
                  const newTranslateX = startTranslateX - walk;
                  
                  // Apply the transform
                  ticker.style.transform = `translateX(${newTranslateX}px)`;
                };

                const handleTouchEnd = () => {
                  isDragging = false;
                  ticker.classList.remove('dragging');
                  
                  // Resume animation with current position
                  ticker.style.animationPlayState = 'running';
                  
                  // Remove the inline transform to let CSS animation take over
                  setTimeout(() => {
                    ticker.style.transform = '';
                  }, 50);
                  
                  document.removeEventListener('touchmove', handleTouchMove);
                  document.removeEventListener('touchend', handleTouchEnd);
                };

                document.addEventListener('touchmove', handleTouchMove, { passive: false });
                document.addEventListener('touchend', handleTouchEnd);
              }}
            >
              {/* Original 4 Cards */}
              {/* Testimonial Card 1 */}
              <Flex
                direction="column"
                gap="16"
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                className="testimonial-card"
                style={{
                  minWidth: "280px",
                  maxWidth: "320px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: "pointer",
                }}
              >
                <Flex gap="12" vertical="center">
                  <span style={{ fontSize: "32px" }}>👩‍💻</span>
                  <Flex direction="column" gap="4">
                    <Text variant="body-strong-s" onBackground="neutral-strong">
                      Aditi Gupta
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      UI/UX designer @ NatFirst
                    </Text>
                  </Flex>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance" style={{ marginBottom: "8px" }}>
                  Working with Soham has been an amazing experience. He is smart and a confident person with an amazing understanding and grasping skills. I would love to get on some interesting projects with him in the future.
                </Text>
                <div 
                  className="recommendation-link"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open('https://example.com', '_blank');
                    }
                  }}
                >
                  View Recommendation →
                </div>
              </Flex>
              
              {/* Testimonial Card 2 */}
              <Flex
                direction="column"
                gap="16"
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                className="testimonial-card"
                style={{
                  minWidth: "280px",
                  maxWidth: "320px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: "pointer",
                }}
              >
                <Flex gap="12" vertical="center">
                  <div style={{ fontSize: "32px" }}>👨‍💼</div>
                  <Flex direction="column" gap="4">
                    <Text variant="body-strong-s" onBackground="neutral-strong">
                      Akhil Krishna
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      CEO @ Engineers Built
                    </Text>
                  </Flex>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance" style={{ marginBottom: "8px" }}>
                  I have been working with Soham for the past 5 months to build my startup. He has an eye for detail and a deep understanding of user experience principles, consistently delivering designs that not only look visually stunning but also prioritize functionality and user satisfaction.
                </Text>
                <div 
                  className="recommendation-link"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open('https://example.com', '_blank');
                    }
                  }}
                >
                  View Recommendation →
                </div>
              </Flex>
              
              {/* Testimonial Card 3 */}
              <Flex
                direction="column"
                gap="16"
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                className="testimonial-card"
                style={{
                  minWidth: "280px",
                  maxWidth: "320px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: "pointer",
                }}
              >
                <Flex gap="12" vertical="center">
                  <div style={{ fontSize: "32px" }}>👨‍🎨</div>
                  <Flex direction="column" gap="4">
                    <Text variant="body-strong-s" onBackground="neutral-strong">
                      Sudhanwa Bandi
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      Designer @ Hindustan Times
                    </Text>
                  </Flex>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance" style={{ marginBottom: "8px" }}>
                  Soham is an enthusiastic UI/UX designer, a hardworker with perfect go-getter attitude. He always thrives to get all his best possibilities at the table which do create differences in major decisions. It's always a pleasure to work with him.
                </Text>
                <div 
                  className="recommendation-link"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open('https://example.com', '_blank');
                    }
                  }}
                >
                  View Recommendation →
                </div>
              </Flex>
              
              {/* Testimonial Card 4 */}
              <Flex
                direction="column"
                gap="16"
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                className="testimonial-card"
                style={{
                  minWidth: "280px",
                  maxWidth: "320px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: "pointer",
                }}
              >
                <Flex gap="12" vertical="center">
                  <div style={{ fontSize: "32px" }}>👨‍🔬</div>
                  <Flex direction="column" gap="4">
                    <Text variant="body-strong-s" onBackground="neutral-strong">
                      Raghul Baskar
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      Researcher @ Samsung
                    </Text>
                  </Flex>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance" style={{ marginBottom: "8px" }}>
                  Working with Soham has been an absolute adventure. His ability to seamlessly blend creativity with user-centric design principles has been a blessing in disguise. His attention to detail, collaborative spirit, and commitment to delivering designs that align with the brand vision has truly set him apart.
                </Text>
                <div 
                  className="recommendation-link"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open('https://example.com', '_blank');
                    }
                  }}
                >
                  View Recommendation →
                </div>
              </Flex>
              
              {/* Duplicate 4 Cards for seamless loop */}
              {/* Testimonial Card 1 (Duplicate) */}
                <Flex
                  direction="column"
                gap="16"
                padding="24"
                radius="l"
                  background="surface"
                  border="neutral-alpha-weak"
                className="testimonial-card"
                  style={{
                  minWidth: "280px",
                  maxWidth: "320px",
                    position: "relative",
                    overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: "pointer",
                }}
              >
                <Flex gap="12" vertical="center">
                  <span style={{ fontSize: "32px" }}>👩‍💻</span>
                  <Flex direction="column" gap="4">
                    <Text variant="body-strong-s" onBackground="neutral-strong">
                      Aditi Gupta
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      UI/UX designer @ NatFirst
                    </Text>
                  </Flex>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance" style={{ marginBottom: "8px" }}>
                  Working with Soham has been an amazing experience. He is smart and a confident person with an amazing understanding and grasping skills. I would love to get on some interesting projects with him in the future.
                </Text>
                <div 
                  className="recommendation-link"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open('https://example.com', '_blank');
                    }
                  }}
                >
                  View Recommendation →
                </div>
              </Flex>
              
              {/* Testimonial Card 2 (Duplicate) */}
              <Flex
                direction="column"
                gap="16"
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                className="testimonial-card"
                    style={{
                  minWidth: "280px",
                  maxWidth: "320px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: "pointer",
                }}
              >
                <Flex gap="12" vertical="center">
                  <span style={{ fontSize: "32px" }}>👨‍💼</span>
                  <Flex direction="column" gap="4">
                    <Text variant="body-strong-s" onBackground="neutral-strong">
                      Akhil Krishna
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      CEO @ Engineers Built
                    </Text>
                  </Flex>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance" style={{ marginBottom: "8px" }}>
                  I have been working with Soham for the past 5 months to build my startup. He has an eye for detail and a deep understanding of user experience principles, consistently delivering designs that not only look visually stunning but also prioritize functionality and user satisfaction.
                  </Text>
                <div 
                  className="recommendation-link"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open('https://example.com', '_blank');
                    }
                  }}
                >
                  View Recommendation →
                </div>
              </Flex>
              
              {/* Testimonial Card 3 (Duplicate) */}
              <Flex
                direction="column"
                gap="16"
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                className="testimonial-card"
                style={{
                  minWidth: "280px",
                  maxWidth: "320px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: "pointer",
                }}
              >
                <Flex gap="12" vertical="center">
                  <span style={{ fontSize: "32px" }}>👨‍🎨</span>
                  <Flex direction="column" gap="4">
                    <Text variant="body-strong-s" onBackground="neutral-strong">
                      Sudhanwa Bandi
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      Designer @ Hindustan Times
                  </Text>
                  </Flex>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance" style={{ marginBottom: "8px" }}>
                  Soham is an enthusiastic UI/UX designer, a hardworker with perfect go-getter attitude. He always thrives to get all his best possibilities at the table which do create differences in major decisions. It's always a pleasure to work with him.
                </Text>
                <div 
                  className="recommendation-link"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open('https://example.com', '_blank');
                    }
                  }}
                >
                  View Recommendation →
                </div>
              </Flex>
              
              {/* Testimonial Card 4 (Duplicate) */}
              <Flex
                direction="column"
                gap="16"
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                className="testimonial-card"
                style={{
                  minWidth: "280px",
                  maxWidth: "320px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: "pointer",
                }}
              >
                <Flex gap="12" vertical="center">
                  <span style={{ fontSize: "32px" }}>👨‍🔬</span>
                  <Flex direction="column" gap="4">
                    <Text variant="body-strong-s" onBackground="neutral-strong">
                      Raghul Baskar
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      Researcher @ Samsung
                    </Text>
            </Flex>
          </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance" style={{ marginBottom: "8px" }}>
                  Working with Soham has been an absolute adventure. His ability to seamlessly blend creativity with user-centric design principles has been a blessing in disguise. His attention to detail, collaborative spirit, and commitment to delivering designs that align with the brand vision has truly set him apart.
                </Text>
                <div 
                  className="recommendation-link"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open('https://example.com', '_blank');
                    }
                  }}
                >
                  View Recommendation →
                </div>
              </Flex>
            </div>
          </div>
        </RevealFx>
      </Column>
      
      {/* Scroll Indicator */}
      <Flex fillWidth horizontal="center" paddingBottom="32">
        <RevealFx translateY="8" delay={0.8}>
          <Flex
            gap="8"
            vertical="center"
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              background: "var(--neutral-alpha-weak)",
              border: "1px solid var(--neutral-alpha-medium)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "linear-gradient(90deg, var(--brand-strong) 0%, var(--accent-strong) 100%)",
                animation: "pulse 2s infinite",
              }}
            />
            <Text variant="body-default-s" onBackground="neutral-weak">
              Scroll to explore
            </Text>
          </Flex>
        </RevealFx>
      </Flex>

      {/* Original Content */}
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured.display && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
