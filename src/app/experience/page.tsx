import {
  Column,
  Flex,
  Heading,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Experience – Soham Thatte",
    description: "My professional experience and career journey",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Experience")}`,
    path: "/experience",
  });
}

export default function Experience() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Experience – Soham Thatte"
        description="My professional experience and career journey"
        path="/experience"
        image={`/api/og/generate?title=${encodeURIComponent("Experience")}`}
        author={{
          name: person.name,
          url: `${baseURL}/experience`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column fillWidth gap="xl" paddingY="xl">
        <Column fillWidth gap="m">
          <Heading variant="display-strong-xl">
            Experience
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak">
            My professional journey and career highlights
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
                Professional Journey
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                I'm currently working on a comprehensive experience page that will showcase 
                my career progression, key achievements, and the skills I've developed 
                throughout my professional journey.
              </Text>
            </Column>
          </Flex>
        </Column>
      </Column>
    </Column>
  );
} 