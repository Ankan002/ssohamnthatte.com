"use client";

import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

const tools = [
  { 
    name: "Figma", 
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" fill="#F24E1E"/>
        <path d="M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" fill="white"/>
      </svg>
    ), 
    color: "#F24E1E" 
  },
  { 
    name: "Framer", 
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L2 16h14v14l14-14H16V2z" fill="#0055FF"/>
      </svg>
    ), 
    color: "#0055FF" 
  },
  { 
    name: "Notion", 
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h24v24H4V4zm2 2v20h20V6H6zm2 2h16v2H8V8zm0 4h16v2H8v-2zm0 4h16v2H8v-2zm0 4h12v2H8v-2z" fill="white"/>
      </svg>
    ), 
    color: "#000000" 
  },
];

export default function Home() {
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
      
      {/* Hero Section */}
      <Flex 
        fillWidth 
        gap="xl" 
        className="hero-container"
        paddingY="80"
      >
        {/* Left Side - Text Content */}
        <Flex flex={2} direction="column" gap="32" vertical="center">
          {/* Greeting - Subtle and elegant */}
          <RevealFx translateY="4" fillWidth horizontal="start">
            <Text 
              className="hero-greeting"
              variant="heading-default-l"
            >
              Namaste! I'm
            </Text>
          </RevealFx>
          
          {/* Main Name - Bold and prominent */}
          <RevealFx translateY="8" delay={0.1} fillWidth horizontal="start">
            <Heading wrap="balance" variant="display-strong-xl">
              <Text className="hero-name">Soham Thatte</Text>
            </Heading>
          </RevealFx>
          
          {/* Description - Elegant and meaningful */}
          <RevealFx translateY="12" delay={0.2} fillWidth horizontal="start">
            <Text 
              wrap="balance" 
              className="hero-description"
              variant="heading-default-xl"
            >
              A curious designer who enjoys the sweet spot between product and interaction design, 
              crafting intuitive experiences where simplicity meets impact and ideas drive meaningful change.
            </Text>
          </RevealFx>
          
          {/* CTA Button */}
          <RevealFx translateY="16" delay={0.4} horizontal="start">
            <a
              href="/resume.pdf"
              className="resume-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "12px",
                color: "var(--neutral-on-background-strong)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
                letterSpacing: "0.02em",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {/* Subtle Liquid Glass Refraction Layer */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `
                    radial-gradient(
                      ellipse at center,
                      rgba(255, 255, 255, 0.03) 0%,
                      rgba(255, 255, 255, 0.015) 40%,
                      transparent 70%
                    )
                  `,
                  pointerEvents: "none",
                  zIndex: -1,
                }}
              />
              
              {/* Simple Button Content */}
              <span style={{ position: "relative", zIndex: 1 }}>
              Resume
              </span>
            </a>
          </RevealFx>
        </Flex>
        
        {/* Right Side - Person's Image */}
        <Flex flex={1} horizontal="center" vertical="center">
          <RevealFx translateY="8" delay={0.3}>
            <Avatar
              src={person.avatar}
              size="xl"
              style={{
                borderRadius: "24px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                border: "4px solid rgba(255, 255, 255, 0.1)",
              }}
            />
          </RevealFx>
        </Flex>
      </Flex>
      
      {/* Tools I Work With Section */}
      <Column fillWidth gap="32" paddingY="48">
        <RevealFx translateY="8" fillWidth horizontal="center">
          <Column horizontal="center" gap="8">
            <Heading variant="display-strong-l" wrap="balance">
              <Text onBackground="neutral-strong">Tools I Work With</Text>
            </Heading>
            <Text variant="heading-default-s" onBackground="neutral-weak" wrap="balance">
              Modern tools for modern design solutions
            </Text>
          </Column>
        </RevealFx>
        
        <RevealFx translateY="12" delay={0.2} fillWidth>
          <Flex
            fillWidth
            horizontal="center"
            gap="24"
            style={{
              flexWrap: "wrap",
              justifyContent: "center",
              }}
            >
              {tools.map((tool, index) => (
                <Flex
                  key={index}
                  direction="column"
                gap="12"
                  horizontal="center"
                  vertical="center"
                padding="24"
                radius="l"
                  background="surface"
                  border="neutral-alpha-weak"
                className="tool-card"
                  style={{
                  minWidth: "140px",
                    position: "relative",
                    overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                <div
                    style={{
                    fontSize: "40px",
                    filter: "drop-shadow(0 2px 4px var(--shadow-color))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    }}
                  >
                    {tool.icon}
                </div>
                  <Text
                    variant="body-default-s"
                    onBackground="neutral-strong"
                  style={{ 
                    textAlign: "center",
                    fontWeight: "500",
                    letterSpacing: "0.02em"
                  }}
                  >
                    {tool.name}
                  </Text>
                </Flex>
              ))}
          </Flex>
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
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* Case Study Preview Card */}
            <Flex
              direction="column"
              gap="16"
              padding="24"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              className="case-study-preview-card"
              style={{
                minWidth: "320px",
                maxWidth: "380px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                cursor: "pointer",
              }}
            >
              {/* Project Image */}
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src="/images/moneyvest.png"
                  alt="MoneyVest project"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(0,0,0,0.8)",
                    color: "white",
                    padding: "6px 10px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                  }}
                >
                  FINANCE APP
                </div>
              </div>
              
              <Heading variant="heading-strong-s" onBackground="neutral-strong">
                MoneyVest Finance App
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
                A comprehensive financial management app designed to help users track expenses, manage investments, and achieve their financial goals with intuitive design.
              </Text>
              <Flex horizontal="between" vertical="center" style={{ marginTop: "8px" }}>
                <Text variant="label-default-s" onBackground="neutral-weak">
                  2024 • Mobile App
                </Text>
                <span style={{ fontSize: "16px", opacity: 0.7 }}>→</span>
              </Flex>
            </Flex>
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
                const startScrollLeft = ticker.scrollLeft;
                let isDragging = true;

                // Add dragging class for visual feedback
                ticker.classList.add('dragging');

                const handleMouseMove = (e: MouseEvent) => {
                  if (!isDragging) return;
                  e.preventDefault();
                  const x = e.clientX;
                  const walk = (startX - x) * 2;
                  ticker.scrollLeft = startScrollLeft + walk;
                };

                const handleMouseUp = () => {
                  isDragging = false;
                  ticker.classList.remove('dragging');
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
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
