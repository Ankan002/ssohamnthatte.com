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
    title: "Case Studies – Soham Thatte",
    description: "Explore detailed case studies of my design and development projects",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Case Studies")}`,
    path: "/case-studies",
  });
}

export default function CaseStudies() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Case Studies – Soham Thatte"
        description="Explore detailed case studies of my design and development projects"
        path="/case-studies"
        image={`/api/og/generate?title=${encodeURIComponent("Case Studies")}`}
        author={{
          name: person.name,
          url: `${baseURL}/case-studies`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column fillWidth gap="xl" paddingY="xl">
        <Column fillWidth gap="m">
          <Heading variant="display-strong-xl">
            Case Studies
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak">
            Detailed explorations of my design and development projects
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
                Coming Soon
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                I'm currently working on detailed case studies that showcase my design process, 
                problem-solving approach, and the impact of my work. Check back soon for 
                comprehensive project breakdowns.
              </Text>
            </Column>
          </Flex>
        </Column>
      </Column>
    </Column>
  );
} 