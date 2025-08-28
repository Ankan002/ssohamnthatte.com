import fs from "fs";
import path from "path";
import { Meta, Column } from "@once-ui-system/core";
import RecommendationViewer from "@/components/RecommendationViewer";
import { person, baseURL } from "@/resources";

function getImages(): string[] {
  const dir = path.join(process.cwd(), "public", "images", "testimonials", "recommendations");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /^makarand\.(png|jpg|jpeg|webp)$/i.test(f))
    .map((f) => `/images/testimonials/recommendations/${f}`);
}

export async function generateMetadata() {
  return Meta.generate({
    title: `Recommendation – Makarand Kulkarni`,
    description: `Recommendation snapshots for ${person.name}`,
    baseURL,
    path: "/recommendations/makarand",
    image: `/api/og/generate?title=${encodeURIComponent("Makarand Recommendation")}`,
  });
}

export default function RecommendationMakarand() {
  const images = getImages();
  return (
    <Column fillWidth gap="0" paddingY="0">
      <RecommendationViewer images={images} title="Makarand Recommendation" />
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }}>
        <a href="/" className="resume-button" style={{ padding: "12px 16px", borderRadius: 12, textDecoration: "none" }}>
          Go Home
        </a>
      </div>
    </Column>
  );
}


