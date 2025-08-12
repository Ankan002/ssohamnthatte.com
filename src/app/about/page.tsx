import { Column, Heading, Text, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  return (
    <Column maxWidth="m" horizontal="center" gap="xl" paddingY="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column 
        maxWidth="s" 
        horizontal="center" 
        gap="l" 
        padding="xl"
        radius="l"
        background="surface"
        border="neutral-alpha-weak"
        style={{
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <Heading variant="display-strong-l" style={{ textAlign: "center" }}>
          About Me
        </Heading>
        <Text variant="body-default-l" style={{ textAlign: "center" }} onBackground="neutral-weak">
          Coming Soon
        </Text>
        <Text variant="body-default-s" style={{ textAlign: "center" }} onBackground="neutral-medium">
          I'm working on sharing my story and experience. Check back soon!
        </Text>
      </Column>
    </Column>
  );
}
