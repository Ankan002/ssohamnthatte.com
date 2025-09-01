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
        horizontal="center"
        gap="l" 
        padding="xl"
        style={{
          textAlign: "center",
        }}
      >
        {/* Icon - Circular image with transparent mask */}
        <div
          style={{
            width: "120px",
            height: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            marginBottom: "10px",
            cursor: "pointer",
          }}
          className="svg-hover-effect"
        >
          <img
            src="/images/nutshell.svg"
            alt="Me in a nutshell"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              clipPath: "circle(50% at 50% 50%)",
            }}
          />
        </div>

        {/* Heading */}
        <Heading 
          variant="display-strong-l" 
          style={{ 
            textAlign: "center",
            color: "#FFFFFF",
            margin: 0,
            marginBottom: "3px",
          }}
        >
          Me in a nutshell
        </Heading>

        {/* Body Text */}
        <Text 
          variant="body-default-s" 
          style={{ 
            textAlign: "center",
            color: "#E0E1DD",
            lineHeight: "1.68",
            margin: "0",
            padding: "0",
            width: "100%",
          }}
        >
          My passion lies at the intersection of art, technology, and human behavior, where I strive to create interfaces that are not only visually captivating but also strategically impactful in elevating overall digital experiences.
          Now in my fourth year as a UX Design student at MIT-ADT University, I have grown beyond foundational principles into integrating strategy with interaction design. This journey has equipped me with the ability to approach design challenges holistically blending aesthetics, functionality, and user-centered insights with strategic thinking to craft solutions that are both intuitive and purposeful.
        </Text>
      </Column>
    </Column>
  );
}
