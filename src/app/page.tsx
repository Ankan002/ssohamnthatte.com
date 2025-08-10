import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

const tools = [
  { name: "Figma", icon: "🎨", color: "#F24E1E" },
  { name: "Adobe XD", icon: "✨", color: "#FF61F6" },
  { name: "Sketch", icon: "📱", color: "#FFAE00" },
  { name: "InVision", icon: "👁️", color: "#FF3366" },
  { name: "Principle", icon: "⚡", color: "#5A67D8" },
  { name: "Framer", icon: "🚀", color: "#0055FF" },
  { name: "Protopie", icon: "🎯", color: "#FF6B35" },
  { name: "Axure RP", icon: "🔧", color: "#FF6600" },
  { name: "Balsamiq", icon: "✏️", color: "#A4C639" },
  { name: "Marvel", icon: "🦸", color: "#FF6B6B" },
  { name: "Zeplin", icon: "📐", color: "#FDBD39" },
  { name: "Abstract", icon: "📦", color: "#FF6B9D" },
  { name: "Lucidchart", icon: "📊", color: "#FDBD39" },
  { name: "Miro", icon: "🧠", color: "#FF6B6B" },
  { name: "Notion", icon: "📝", color: "#000000" },
  { name: "Slack", icon: "💬", color: "#4A154B" },
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
            <Button
              className="hero-cta"
              href="/resume.pdf"
              variant="primary"
              size="l"
              weight="default"
              arrowIcon
            >
              Resume
            </Button>
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
            style={{
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Flex
              gap="16"
              className="tools-scroll"
              style={{
                whiteSpace: "nowrap",
                minWidth: "max-content",
              }}
            >
              {/* First set of tools */}
              {tools.map((tool, index) => (
                <Flex
                  key={index}
                  direction="column"
                  gap="8"
                  horizontal="center"
                  vertical="center"
                  padding="16"
                  radius="m"
                  background="surface"
                  border="neutral-alpha-weak"
                  style={{
                    minWidth: "120px",
                    backdropFilter: "blur(20px) saturate(150%)",
                    WebkitBackdropFilter: "blur(20px) saturate(150%)",
                    backgroundColor: "var(--surface-background)",
                    border: "1px solid var(--neutral-alpha-weak)",
                    boxShadow: `
                      0 8px 32px var(--shadow-color),
                      inset 0 1px 0 var(--neutral-alpha-weak),
                      inset 0 -1px 0 var(--neutral-alpha-weak)
                    `,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Text
                    variant="heading-strong-l"
                    style={{
                      fontSize: "32px",
                      filter: "drop-shadow(0 2px 4px var(--shadow-color))",
                    }}
                  >
                    {tool.icon}
                  </Text>
                  <Text
                    variant="body-default-s"
                    onBackground="neutral-strong"
                    style={{ textAlign: "center" }}
                  >
                    {tool.name}
                  </Text>
                </Flex>
              ))}
              {/* Duplicate set for seamless loop */}
              {tools.map((tool, index) => (
                <Flex
                  key={`duplicate-${index}`}
                  direction="column"
                  gap="8"
                  horizontal="center"
                  vertical="center"
                  padding="16"
                  radius="m"
                  background="surface"
                  border="neutral-alpha-weak"
                  style={{
                    minWidth: "120px",
                    backdropFilter: "blur(20px) saturate(150%)",
                    WebkitBackdropFilter: "blur(20px) saturate(150%)",
                    backgroundColor: "var(--surface-background)",
                    border: "1px solid var(--neutral-alpha-weak)",
                    boxShadow: `
                      0 8px 32px var(--shadow-color),
                      inset 0 1px 0 var(--neutral-alpha-weak),
                      inset 0 -1px 0 var(--neutral-alpha-weak)
                    `,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Text
                    variant="heading-strong-l"
                    style={{
                      fontSize: "32px",
                      filter: "drop-shadow(0 2px 4px var(--shadow-color))",
                    }}
                  >
                    {tool.icon}
                  </Text>
                  <Text
                    variant="body-default-s"
                    onBackground="neutral-strong"
                    style={{ textAlign: "center" }}
                  >
                    {tool.name}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
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
