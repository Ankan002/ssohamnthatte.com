import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Meta,
  Schema,
  Background
} from "@once-ui-system/core";
import { baseURL, person, social } from "@/resources";
import { ContactForm } from "@/components/ContactForm";

export async function generateMetadata() {
  return Meta.generate({
    title: "Contact – Soham Thatte",
    description: "Get in touch with me",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Contact")}`,
    path: "/contact",
  });
}

export default function Contact() {
  const emailSocial = social.find(s => s.name === "Email");
  const linkedinSocial = social.find(s => s.name === "LinkedIn");
  const behanceSocial = social.find(s => s.name === "Behance");

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Contact – Soham Thatte"
        description="Get in touch with me"
        path="/contact"
        image={`/api/og/generate?title=${encodeURIComponent("Contact")}`}
        author={{
          name: person.name,
          url: `${baseURL}/contact`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column fillWidth gap="xl" paddingY="xl">
        <Column fillWidth gap="m">
          <Heading variant="display-strong-xl">
            Get In Touch
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak">
            Let's connect and discuss how we can work together
          </Text>
        </Column>

        <ContactForm />
        
        {/* Social Media Links Card */}
        <Flex 
          fillWidth 
          padding="l" 
          background="surface" 
          border="neutral-alpha-weak" 
          radius="m"
          style={{
            backdropFilter: "blur(20px) saturate(150%)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            position: "relative",
            overflow: "hidden",
          }}
          className="social-media-card"
        >
          {/* Custom CSS gradient background - covers full width */}
          <div 
            className="social-card-gradient"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "radial-gradient(ellipse at center top, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 50%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          
          <Column fillWidth gap="m" style={{ position: "relative", zIndex: 1 }}>
            <Heading variant="heading-strong-l">
              Connect on Social Media
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Follow my work and connect with me on various platforms
            </Text>
            
            <Flex gap="m" wrap horizontal="center">
              {emailSocial && (
                <Button
                  href={emailSocial.link}
                  variant="primary"
                  size="m"
                  prefixIcon="email"
                >
                  Send Email
                </Button>
              )}
              {linkedinSocial && (
                <Button
                  href={linkedinSocial.link}
                  variant="secondary"
                  size="m"
                  prefixIcon="linkedin"
                >
                  Connect on LinkedIn
                </Button>
              )}
              {behanceSocial && (
                <Button
                  href={behanceSocial.link}
                  variant="secondary"
                  size="m"
                  prefixIcon="behance"
                >
                  View on Behance
                </Button>
              )}
            </Flex>
          </Column>
        </Flex>
      </Column>
    </Column>
  );
} 