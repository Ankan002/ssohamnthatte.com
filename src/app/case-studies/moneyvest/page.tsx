import { Column, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import fs from "fs";
import path from "path";

export async function generateMetadata() {
  return Meta.generate({
    title: "MoneyVest Finance App – Case Study",
    description: "Deep-dive into the MoneyVest finance app redesign.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("MoneyVest Case Study")}`,
    path: "/case-studies/moneyvest",
  });
}

function getMoneyvestImages(): string[] {
  const dir = path.join(process.cwd(), "public", "images", "moneyvest");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir)
    .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f))
    .sort((a, b) => {
      const na = parseInt(a.replace(/[^0-9]/g, "")) || 0;
      const nb = parseInt(b.replace(/[^0-9]/g, "")) || 0;
      return na - nb;
    });
  return files.map((f) => `/images/moneyvest/${f}`);
}

export default function MoneyVestCaseStudy() {
  const images = getMoneyvestImages();
  return (
    <Column fillWidth gap="l" paddingY="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="MoneyVest Finance App – Case Study"
        description="Deep-dive into the MoneyVest finance app redesign."
        path="/case-studies/moneyvest"
        image={`/api/og/generate?title=${encodeURIComponent("MoneyVest Case Study")}`}
        author={{
          name: person.name,
          url: `${baseURL}/case-studies/moneyvest`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {images.length === 0 && (
        <Text variant="heading-default-l" onBackground="neutral-weak">
          Case study images coming soon.
        </Text>
      )}
      {/* Full-bleed container */}
      <div
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        {images.map((src, i) => (
          <div key={src} style={{ width: "100%", margin: "0 auto 24px" }}>
            {/* Use img to allow arbitrary sizes from public dir */}
            <img
              src={src}
              alt={`MoneyVest case study ${i + 1}`}
              style={{ width: "100%", height: "auto", display: "block" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Column>
  );
}






