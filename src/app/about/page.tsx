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
        gap="s" 
        padding="m"
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

      {/* Photo Gallery Section - Curved Arc Layout */}
      <Column
        horizontal="center"
        gap="s"
        padding="m"
        style={{
          width: "100%",
          marginTop: "-40px", /* Much tighter spacing from description */
        }}
      >
        {/* Photo Gallery - Curved Arc Layout with Playing Card Interactions */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "1400px",
            position: "relative",
            height: "400px",
          }}
        >
          {/* Image 1 - Leftmost, slight curve left */}
          <div
            className="image-card image-card-1"
            style={{
              position: "relative",
              transform: "rotate(-4deg) translateY(12px)",
              transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              cursor: "pointer",
              zIndex: 1,
              marginRight: "-154px", /* 45% visible (280px * 0.55 = 154px) */
            }}
          >
            <img
              src="/images/about/1.png"
              alt="Creative pursuits and artistic expression"
              style={{
                width: "280px",
                height: "350px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>

          {/* Image 2 - Very slight curve left */}
          <div
            className="image-card image-card-2"
            style={{
              position: "relative",
              transform: "rotate(-2deg) translateY(6px)",
              transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              cursor: "pointer",
              zIndex: 2,
              marginRight: "-154px",
            }}
          >
            <img
              src="/images/about/2.png"
              alt="Outdoor adventures and exploration"
              style={{
                width: "280px",
                height: "350px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>

          {/* Image 3 - Center, no curve */}
          <div
            className="image-card image-card-3"
            style={{
              position: "relative",
              transform: "rotate(0deg) translateY(0px)",
              transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              cursor: "pointer",
              zIndex: 3,
              marginRight: "-154px",
            }}
          >
            <img
              src="/images/about/3.png"
              alt="Urban experiences and city life"
              style={{
                width: "280px",
                height: "350px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>

          {/* Image 4 - Very slight curve right */}
          <div
            className="image-card image-card-4"
            style={{
              position: "relative",
              transform: "rotate(2deg) translateY(4px)",
              transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              cursor: "pointer",
              zIndex: 4,
              marginRight: "-154px",
            }}
          >
            <img
              src="/images/about/4.png"
              alt="Companionship and friendship"
              style={{
                width: "280px",
                height: "350px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>

          {/* Image 5 - Slight curve right */}
          <div
            className="image-card image-card-5"
            style={{
              position: "relative",
              transform: "rotate(3deg) translateY(8px)",
              transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              cursor: "pointer",
              zIndex: 5,
              marginRight: "-154px",
            }}
          >
            <img
              src="/images/about/5.png"
              alt="Adventure and exploration"
              style={{
                width: "280px",
                height: "350px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>

          {/* Image 6 - Rightmost, slight curve right */}
          <div
            className="image-card image-card-6"
            style={{
              position: "relative",
              transform: "rotate(4deg) translateY(14px)",
              transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              cursor: "pointer",
              zIndex: 6,
            }}
          >
            <img
              src="/images/about/6.png"
              alt="Life moments and memories"
              style={{
                width: "280px",
                height: "350px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </div>

        {/* Gallery Description - Ultra tight spacing from images */}
        <Text 
          variant="body-default-s" 
          style={{ 
            textAlign: "center",
            color: "#B0B0B0",
            lineHeight: "1.5",
            margin: "0",
            padding: "0",
            maxWidth: "600px",
            fontStyle: "italic",
            marginTop: "2px", /* Ultra tight spacing - half of 5px */
          }}
        >
          My Life in Frames
        </Text>
      </Column>
    </Column>
  );
}
