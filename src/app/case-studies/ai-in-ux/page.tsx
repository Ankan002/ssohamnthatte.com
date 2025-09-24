import { Column, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "AI in UX – Case Study",
    description: "Exploration of AI-driven patterns in UX and interface strategy.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("AI in UX Case Study")}`,
    path: "/case-studies/ai-in-ux",
  });
}

export default function AIInUXCaseStudy() {
  return (
    <Column fillWidth gap="l" paddingY="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="AI in UX – Case Study"
        description="Exploration of AI-driven patterns in UX and interface strategy."
        path="/case-studies/ai-in-ux"
        image={`/api/og/generate?title=${encodeURIComponent("AI in UX Case Study")}`}
        author={{
          name: person.name,
          url: `${baseURL}/case-studies/ai-in-ux`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Full-bleed container */}
      <div
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        {/* Very tall hero image with progressive, deferred rendering */}
        <div
          style={{
            width: "100%",
            margin: "0 auto 0",
            contentVisibility: "auto" as any,
            containIntrinsicSize: "2000px 1000px" as any,
          }}
        >
          <img
            src="/images/ai-in-ux/1.png"
            alt="AI in UX – overview"
            style={{ width: "100%", height: "auto", display: "block" }}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Supporting image */}
        <div style={{ width: "100%", margin: "0 auto 0" }}>
          <img
            src="/images/ai-in-ux/2.png"
            alt="AI in UX – details"
            style={{ width: "100%", height: "auto", display: "block" }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </Column>
  );
}


