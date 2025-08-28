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
    .filter((f) => /^shirin-\d+\.(png|jpg|jpeg|webp)$/i.test(f))
    .sort((a, b) => {
      const na = parseInt(a.replace(/[^0-9]/g, "")) || 0;
      const nb = parseInt(b.replace(/[^0-9]/g, "")) || 0;
      return na - nb;
    })
    .map((f) => `/images/testimonials/recommendations/${f}`);
}

export async function generateMetadata() {
  return Meta.generate({
    title: `Recommendation – Shirin Deshpande`,
    description: `Recommendation snapshots for ${person.name}`,
    baseURL,
    path: "/case-studies/shirin",
    image: `/api/og/generate?title=${encodeURIComponent("Shirin Recommendation")}`,
  });
}

export default function ShirinRecommendation() {
  const images = getImages();
  return (
    <Column fillWidth gap="0" paddingY="0">
      <RecommendationViewer images={images} title="Shirin Recommendation" />
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }}>
        <a href="/" className="resume-button" style={{ padding: "12px 16px", borderRadius: 12, textDecoration: "none" }}>
          Go Home
        </a>
      </div>
    </Column>
  );
}


