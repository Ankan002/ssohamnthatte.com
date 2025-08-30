"use client";

import React from "react";
import Image from "next/image";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema, Background } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes, mailchimp } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

const tools = [
  { 
    name: "Figma", 
    icon: <img src="/images/icons/figma.png" alt="Figma" style={{ width: "214px", height: "67px", filter: "grayscale(100%) brightness(0.9) contrast(1.1)", transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} className="ticker-icon" />,
    color: "#F24E1E" 
  },
  { 
    name: "Framer", 
    icon: <img src="/images/icons/framer.png" alt="Framer" style={{ width: "234px", height: "64px", filter: "grayscale(100%) brightness(0.9) contrast(1.1)", transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} className="ticker-icon" />,
    color: "#0055FF" 
  },
  { 
    name: "Illustrator", 
    icon: <img src="/images/icons/illustrator.png" alt="Illustrator" style={{ width: "251px", height: "62px", filter: "grayscale(100%) brightness(0.9) contrast(1.1)", transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} className="ticker-icon" />,
    color: "#FF9A00" 
  },
  { 
    name: "Notion", 
    icon: <img src="/images/icons/notion.png" alt="Notion" style={{ width: "251px", height: "62px", filter: "grayscale(100%) brightness(0.9) contrast(1.1)", transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} className="ticker-icon" />,
    color: "#000000" 
  },
  { 
    name: "Slack", 
    icon: <img src="/images/icons/slack.png" alt="Slack" style={{ width: "251px", height: "62px", filter: "grayscale(100%) brightness(0.9) contrast(1.1)", transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} className="ticker-icon" />,
    color: "#4A154B" 
  },
  { 
    name: "Webflow", 
    icon: <img src="/images/icons/webflow.png" alt="Webflow" style={{ width: "251px", height: "59px", filter: "grayscale(100%) brightness(0.9) contrast(1.1)", transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} className="ticker-icon" />,
    color: "#146EF5" 
  },
];

const testimonials = [
  {
    name: "Devamrit Mohanty",
    role: "Bosch JMP- Growth Strategy | GTM Specialist",
    emoji: "🧭",
    text:
      "Soham brought sharp design sensibility and systems-level thinking to our UX strategy. He improved usability, mapped stakeholder journeys, and proposed scalable interventions that streamlined workflows. His balance of strategic foresight with precise execution made him a valued member of our team.",
    alwaysShowRecommendation: false,
  },
  {
    name: "Aditya Gautam",
    role: "Head Product Marketing & Strategy @ Bosch",
    emoji: "📈",
    text:
      "Soham brings a rare mix of design sensitivity and strategic thinking. During his internship, he led UX audits, redesigned workflows, and created empathy maps that streamlined processes and improved usability. He has a knack for identifying friction points within complex systems and turning them into clear, scalable solutions. His ability to balance design craft with systems-level foresight, while communicating effectively across teams, made him a highly valued contributor.",
    alwaysShowRecommendation: false,
  },
  {
    name: "Makarand Kulkarni",
    role: "Founder & Director @ Ether Design",
    emoji: "🎨",
    text:
      "Soham quickly made an impact with his collaborative spirit and design thinking. During his internship, he redesigned the website for an overseas client, studying user needs in depth and creating wireframes that guided decision-making smoothly. His ability to analyze patterns, craft engaging page compositions, and bring a youthful user perspective resulted in a highly intuitive and user-friendly design. Passionate, rigorous, and quick to learn, he left a strong mark in a short time.",
    alwaysShowRecommendation: true,
  },
  {
    name: "Sabyasachi  rout",
    role: "Product Manager  @ Bosch",
    emoji: "🧩",
    text:
      "Soham made a strong impact during his time at Bosch, contributing meaningfully to our UX Strategy initiatives. He combined sharp design sensibility with structured systems thinking to address complex workflows and improve usability. His ability to present ideas clearly, integrate feedback, and deliver grounded solutions made him a highly valued team member. I would be glad to share more context about his work anytime.",
    alwaysShowRecommendation: false,
  },
  {
    name: "Shirin Deshpande",
    role: "Head of Product Marketing @ Bosch",
    emoji: "💡",
    text:
      "Soham demonstrated professionalism, creativity, and dedication throughout his time with us. His strong design and strategic mindset brought real value to our projects, and his ability to approach challenges with clarity and innovation stood out. I strongly recommend him for roles in UX design and strategy, as I am confident he will be a great asset to any organization.",
    alwaysShowRecommendation: false,
  },
  {
    name: "Avinash Jethwani",
    role: "CTO @ Jobsub",
    emoji: "🧠",
    text:
      "Working with Soham was a seamless and rewarding experience. He went beyond surface-level requirements, showcasing a remarkable ability to understand user behavior and long-term scalability. The result was a visually compelling and cohesive interface that brought structure to our vision. Soham's process is both collaborative and strategic, and his contributions were invaluable.",
    alwaysShowRecommendation: false,
  },
  {
    name: "Rahul Kumar",
    role: "Sr. Ux Designer @ Ambertag Analytics",
    emoji: "🔧",
    text:
      "During his internship, Soham demonstrated exceptional ability in tackling complex UX challenges. His research-driven approach, attention to detail, and strong grasp of UX principles allowed him to deliver solutions that significantly improved usability and customer satisfaction. His insights, creativity, and structured problem-solving made a real impact, and I am confident he will continue to be a valuable asset in any design team.",
    alwaysShowRecommendation: true,
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
                href="/cv"
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
      </Column>
      
      {/* Tools I work with – dedicated section below hero */}
      <Column fillWidth gap="0" paddingY="8">
        <RevealFx translateY="24" delay={0.1} fillWidth>
          <div 
            className="tools-ticker-container"
            style={{
              width: "100vw",
              marginLeft: "calc(-50vw + 50%)",
              marginRight: "calc(-50vw + 50%)",
              overflow: "hidden",
              position: "relative",
              padding: "16px 0",
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
              {tools.map((tool, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "144px",
                    height: "112px",
                    filter: "brightness(0.8) contrast(0.9)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {tool.icon}
                </div>
              ))}
              {tools.map((tool, index) => (
                <div
                  key={`duplicate-${index}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "144px",
                    height: "112px",
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
      <Column fillWidth gap="16" paddingY="24">
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
            <a href="/case-studies/moneyvest" style={{ textDecoration: "none", color: "inherit" }}
            >
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
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }}></div>
                    <Text style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", fontWeight: "500" }}>Featured Re-design Case Study</Text>
                    <Text style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", fontWeight: "500", display: "block", width: "100%" }}>10 min read</Text>
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
                    <span style={{ fontSize: "12px", color: "#3b82f6", background: "rgba(59, 130, 246, 0.2)", padding: "4px 8px", borderRadius: "6px" }}>Webapp</span>
                    <span style={{ fontSize: "12px", color: "#10b981", background: "rgba(16, 185, 129, 0.2)", padding: "4px 8px", borderRadius: "6px" }}>2025</span>
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
            </a>
          </Flex>
        </RevealFx>
        
        {/* Samsung Case Study Card */}
        <RevealFx translateY="12" delay={0.3} fillWidth>
          <Flex
            fillWidth
            horizontal="center"
            style={{
              justifyContent: "center",
            }}
          >
            <a href="/case-studies/samsung" style={{ textDecoration: "none", color: "inherit" }}>
              <div
                className="sophisticated-ui-card"
                style={{
                  width: "1000px",
                  height: "600px",
                  borderRadius: "24px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 40px 80px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: "pointer",
                }}
              >
                {/* Full Cover Image Background */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}>
                  <img
                    src="/images/samsung-casestudy/1.png"
                    alt="Samsung Mobile App"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  {/* Sophisticated gradient overlay for better text readability */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 100%)",
                  }} />
                </div>
                
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
                    zIndex: 2,
                  }}
                />
                
                {/* Content Overlay - Floating Glass Card */}
                <div style={{ 
                  position: "relative", 
                  zIndex: 3, 
                  height: "100%", 
                  display: "flex", 
                  alignItems: "flex-start",
                  padding: "32px"
                }}>
                  <div style={{ 
                    maxWidth: "500px",
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "20px",
                    padding: "32px",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  }}>
                    {/* Case Study Badge */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }}></div>
                      <Text style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.9)", fontWeight: "500" }}>Featured Case Study</Text>
                      <Text style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.9)", fontWeight: "500", display: "block", width: "100%" }}>8 min read</Text>
                    </div>
                    
                    {/* Main Headline */}
                    <Heading style={{ 
                      fontSize: "2.4rem", 
                      fontWeight: "700", 
                      color: "white", 
                      marginBottom: "16px",
                      lineHeight: "1.1"
                    }}>
                      Samsung Mobile App
                    </Heading>
                    
                    {/* Sub-headline */}
                    <Text style={{ 
                      fontSize: "1.1rem", 
                      color: "rgba(255, 255, 255, 0.9)", 
                      marginBottom: "24px",
                      lineHeight: "1.5"
                    }}>
                      A comprehensive mobile app design focused on enhancing user experience, improving navigation, and creating a more intuitive interface for Samsung users.
                    </Text>
                    
                    {/* Project Details */}
                    <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "12px", color: "#3b82f6", background: "rgba(59, 130, 246, 0.3)", padding: "4px 8px", borderRadius: "6px" }}>Mobile App</span>
                      <span style={{ fontSize: "12px", color: "#10b981", background: "rgba(16, 185, 129, 0.3)", padding: "4px 8px", borderRadius: "6px" }}>2025</span>
                      <span style={{ fontSize: "12px", color: "#8b5cf6", background: "rgba(139, 92, 246, 0.3)", padding: "4px 8px", borderRadius: "6px" }}>Technology</span>
                    </div>
                    
                    {/* CTA Button - Liquid Glass Style */}
                    <a
                      href="/case-studies/samsung"
                      className="resume-button"
                      style={{
                        gap: "16px",
                        padding: "16px 32px",
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(20px) saturate(180%)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
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
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
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
                          background: "radial-gradient(circle at 50% 0px, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
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
                </div>
              </div>
            </a>
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
              {index > 0 && <span className="star" />}
              <span className="label">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Passion Display removed */}

      {/* About Me Hook Section - hidden */}
      <Column hide fillWidth gap="0" paddingY="0">
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

      {/* Passion Display Section - removed per request */}

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
                gap: "16px",
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
              {/* Testimonials (updated list, recommendation link always visible only on two) */}
              {testimonials.concat(testimonials).map((t, i) => (
              <Flex
                  key={`${t.name}-${i}`}
                direction="column"
                gap="16"
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                className="testimonial-card"
                style={{
                    width: "340px",
                    minHeight: "340px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: "pointer",
                }}
              >
                <Flex gap="12" vertical="center">
                    <div className="testimonial-avatar" style={{
                      width: "40px",
                      height: "40px",
                      minWidth: "40px",
                      minHeight: "40px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                      padding: "2px",
                      display: "grid",
                      placeItems: "center",
                      overflow: "visible",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                      boxSizing: "border-box",
                      border: "1px solid rgba(255,255,255,0.25)"
                    }}>
                      <img
                        src={(() => {
                          const map: Record<string, string> = {
                            "Devamrit Mohanty": "/images/testimonials/devamrit.png",
                            "Aditya Gautam": "/images/testimonials/aditya.png",
                            "Makarand Kulkarni": "/images/testimonials/makarand.png",
                            "Sabyasachi  rout": "/images/testimonials/sabhyasachi.png",
                            "Shirin Deshpande": "/images/testimonials/shirin.png",
                            "Avinash Jethwani": "/images/testimonials/avinash.png",
                            "Rahul Kumar": "/images/testimonials/rahul.png",
                          };
                          return map[t.name] || "/images/testimonials/placeholder.png";
                        })()}
                        alt={t.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", display: "block" }}
                      />
                </div>
                  <Flex direction="column" gap="4">
                      <Text variant="body-strong-s" onBackground="neutral-strong">{t.name}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">{t.role}</Text>
                  </Flex>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance" style={{ marginBottom: "8px" }}>
                    {t.text}
                </Text>
                {t.name === 'Makarand Kulkarni' && (<div style={{ height: '0.6em' }} />)}
                {(t.alwaysShowRecommendation || t.name.toLowerCase().includes('sabya') || t.name.toLowerCase().includes('shirin')) && (
                <a 
                  className="recommendation-link"
                style={{
                        opacity: 1, 
                        transform: 'translateY(0)', 
                        marginTop: 4, 
                        paddingTop: 0,
                        display: 'inline-block',
                        textDecoration: 'none'
                      }}
                  href={
                    t.name === 'Makarand Kulkarni'
                      ? '/recommendations/makarand'
                      : t.name === 'Rahul Kumar'
                      ? '/recommendations/rahul'
                      : t.name.toLowerCase().includes('sabya')
                      ? '/recommendations/sabhyasachi'
                      : t.name.toLowerCase().includes('shirin')
                      ? '/recommendations/shirin'
                      : '#'
                  }
                >
                  View Recommendation →
                </a>
                  )}
              </Flex>
              ))}
                </div>
                </div>
        </RevealFx>
      </Column>
      
      {/* Keep only newsletter below */}
      {newsletter.display && (
        <Column fillWidth paddingY="16">
          <Column
            fillWidth
            padding="l"
                radius="l"
                  background="surface"
                  border="neutral-alpha-weak"
            horizontal="center"
            align="center"
            gap="8"
            style={{ overflow: "hidden", borderRadius: "var(--radius-l)" }}
          >
            <Background
              top="0"
              position="absolute"
              mask={{
                x: mailchimp.effects.mask.x,
                y: mailchimp.effects.mask.y,
                radius: mailchimp.effects.mask.radius,
                cursor: mailchimp.effects.mask.cursor
              }}
              gradient={{
                display: mailchimp.effects.gradient.display,
                opacity: mailchimp.effects.gradient.opacity as any,
                x: mailchimp.effects.gradient.x,
                y: mailchimp.effects.gradient.y,
                width: mailchimp.effects.gradient.width,
                height: mailchimp.effects.gradient.height,
                tilt: mailchimp.effects.gradient.tilt,
                colorStart: mailchimp.effects.gradient.colorStart,
                colorEnd: mailchimp.effects.gradient.colorEnd,
              }}
              dots={{
                display: mailchimp.effects.dots.display,
                opacity: mailchimp.effects.dots.opacity as any,
                size: mailchimp.effects.dots.size as any,
                color: mailchimp.effects.dots.color,
              }}
              grid={{
                display: mailchimp.effects.grid.display,
                opacity: mailchimp.effects.grid.opacity as any,
                color: mailchimp.effects.grid.color,
                width: mailchimp.effects.grid.width,
                height: mailchimp.effects.grid.height,
              }}
              lines={{
                display: mailchimp.effects.lines.display,
                opacity: mailchimp.effects.lines.opacity as any,
                size: mailchimp.effects.lines.size as any,
                thickness: mailchimp.effects.lines.thickness,
                angle: mailchimp.effects.lines.angle,
                color: mailchimp.effects.lines.color,
              }}
            />
            <Heading variant="display-strong-xs">Stay in touch</Heading>
            <Text onBackground="neutral-weak" wrap="balance">Prefer a quick note? Reach out via the contact page.</Text>
            <a
              href="/contact"
              className="resume-button"
                style={{
                gap: "12px",
                padding: "12px 20px",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "12px",
                color: "rgba(255, 255, 255, 0.95)",
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <div
                className="button-glow"
            style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                }}
              />
              <div
                className="button-shimmer"
              style={{
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                  transition: "transform 0.6s ease",
                }}
              />
              <span style={{ position: "relative", zIndex: 2 }}>Go to Contact</span>
              <span
                className="arrow-icon"
                style={{ fontSize: 16, position: "relative", zIndex: 2 }}
              >
                →
              </span>
            </a>
        </Column>
      </Column>
      )}
    </Column>
  );
}
