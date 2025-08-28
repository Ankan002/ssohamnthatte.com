import fs from "fs";
import path from "path";
import { Meta, Column } from "@once-ui-system/core";
import { person, baseURL } from "@/resources";

function getImages(): string[] {
  const dir = path.join(process.cwd(), "public", "images", "testimonials", "recommendations");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /^rahul\.(png|jpg|jpeg|webp)$/i.test(f))
    .map((f) => `/images/testimonials/recommendations/${f}`);
}

export async function generateMetadata() {
  return Meta.generate({
    title: `Recommendation – Rahul Kumar`,
    description: `Recommendation snapshots for ${person.name}`,
    baseURL,
    path: "/case-studies/rahul",
    image: `/api/og/generate?title=${encodeURIComponent("Rahul Recommendation")}`,
  });
}

export default function RahulRecommendation() {
  const images = getImages();
  return (
    <Column fillWidth gap="l" paddingY="xl">
      <div style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}>
        {images.map((src) => (
          <img key={src} src={src} alt="Rahul Recommendation" style={{ width: "100%", display: "block" }} />
        ))}
      </div>
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }}>
        <a href="/" className="resume-button" style={{ padding: "12px 16px", borderRadius: 12, textDecoration: "none" }}>
          Go Home
        </a>
      </div>
    </Column>
  );
}


