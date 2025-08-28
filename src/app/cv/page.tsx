import fs from "fs";
import path from "path";
import { person, baseURL } from "@/resources";
import { Meta, Column } from "@once-ui-system/core";
import RecommendationViewer from "@/components/RecommendationViewer";

function getResumeImages(): string[] {
  const dir = path.join(process.cwd(), "public", "images", "resume");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f))
    .sort((a, b) => {
      const na = parseInt(a.replace(/[^0-9]/g, "")) || 0;
      const nb = parseInt(b.replace(/[^0-9]/g, "")) || 0;
      return na - nb;
    })
    .map((f) => `/images/resume/${f}`);
}

export async function generateMetadata() {
  return Meta.generate({
  title: `${person.name} – Resume`,
  description: `Resume visuals for ${person.name}`,
  baseURL,
  path: "/cv",
  image: `/api/og/generate?title=${encodeURIComponent("Resume")}`,
  });
}

export default function Resume() {
  const images = getResumeImages();
  return (
    <Column fillWidth gap="0" paddingY="0">
      {/* Fit one page per screen with zoom */}
      <RecommendationViewer images={images} title="Resume" controlsPlacement="nearCTA" />

      {/* Floating CTAs */}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          display: "flex",
          gap: 12,
          zIndex: 50,
          pointerEvents: "none",
        }}
      >
        <a
          href="/images/soham_resume.pdf"
          download
          className="resume-button"
          style={{
            pointerEvents: "auto",
            gap: "12px",
            padding: "12px 16px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "12px",
            color: "rgba(255,255,255,0.95)",
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)",
          }}
        >
          <span style={{ position: "relative", zIndex: 2 }}>Download Resume</span>
          <span className="arrow-icon" style={{ position: "relative", zIndex: 2, fontSize: 16 }}>↓</span>
        </a>
        <a
          href="/"
          className="resume-button"
        style={{
            pointerEvents: "auto",
            gap: "12px",
            padding: "12px 16px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "12px",
            color: "rgba(255,255,255,0.95)",
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)",
          }}
        >
          <span style={{ position: "relative", zIndex: 2 }}>Go Home</span>
          <span className="arrow-icon" style={{ position: "relative", zIndex: 2, fontSize: 16 }}>↗</span>
        </a>
      </div>
    </Column>
  );
} 