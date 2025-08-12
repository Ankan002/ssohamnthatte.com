import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, person, social } from "@/resources";

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

        <Column fillWidth gap="l">
          <Flex 
            fillWidth 
            padding="l" 
            background="surface" 
            border="neutral-alpha-weak" 
            radius="m"
            style={{
              backdropFilter: "blur(20px) saturate(150%)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <Column fillWidth gap="m">
              <Heading variant="heading-strong-l">
                Contact Information
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                I'm always open to discussing new opportunities, collaborations, or just 
                having a conversation about design and technology.
              </Text>
              
              <Column gap="s">
                <Text variant="body-default-s" onBackground="neutral-medium">
                  <strong>Email:</strong> soham.thatte04@gmail.com
                </Text>
                <Text variant="body-default-s" onBackground="neutral-medium">
                  <strong>LinkedIn:</strong> soham-thatte-815b061a9
                </Text>
              </Column>
              
              <Flex gap="m" wrap>
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
              </Flex>
            </Column>
          </Flex>
        </Column>
      </Column>
    </Column>
  );
} 