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
          <div key={src} style={{ width: "100%", margin: i === 0 ? "0 auto 0" : i === images.length - 1 ? "0 auto 0" : "0 auto 0" }}>
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

      {/* Floating controls */}
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
          href="/case-studies"
          className="resume-button"
          style={{
            pointerEvents: "auto",
            gap: "12px",
            padding: "12px 16px",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "12px",
            color: "rgba(255, 255, 255, 0.95)",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)",
            transition: "all .4s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          <div className="button-glow" style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,.15) 0%, transparent 70%)", opacity: 0, transition: "opacity .4s ease" }} />
          <div className="button-shimmer" style={{ position: "absolute", inset: 0, left: "-100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,.1), transparent)", transition: "transform .6s ease" }} />
          <span style={{ position: "relative", zIndex: 2 }}>View All Case Studies</span>
          <span className="arrow-icon" style={{ position: "relative", zIndex: 2, fontSize: 16 }}>→</span>
        </a>
        <a
          href="/"
          className="resume-button"
          style={{
            pointerEvents: "auto",
            gap: "12px",
            padding: "12px 16px",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "12px",
            color: "rgba(255, 255, 255, 0.95)",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)",
            transition: "all .4s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          <div className="button-glow" style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,.15) 0%, transparent 70%)", opacity: 0, transition: "opacity .4s ease" }} />
          <div className="button-shimmer" style={{ position: "absolute", inset: 0, left: "-100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,.1), transparent)", transition: "transform .6s ease" }} />
          <span style={{ position: "relative", zIndex: 2 }}>Go Home</span>
          <span className="arrow-icon" style={{ position: "relative", zIndex: 2, fontSize: 16 }}>↗</span>
        </a>
      </div>
    </Column>
  );
}






