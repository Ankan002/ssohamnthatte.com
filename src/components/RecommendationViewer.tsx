"use client";

import React from "react";
import { Column, Flex, Text } from "@once-ui-system/core";

type RecommendationViewerProps = {
  images: string[];
  title?: string;
  controlsPlacement?: "default" | "nearCTA";
};

export default function RecommendationViewer({ images, title, controlsPlacement = "default" }: RecommendationViewerProps) {
  const [zoom, setZoom] = React.useState(1);
  const [vh, setVh] = React.useState<number>(0);

  React.useEffect(() => {
    const set = () => setVh(window.innerHeight);
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.2, 3));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.6));

  return (
    <Column fillWidth gap="0" paddingY="0">
      {/* top and bottom breathing room while keeping zero gap between pages */}
      <div style={{ marginTop: 64 }} />
      {images.map((src, index) => {
        const base = Math.max(vh - 160, 320); // reserve space for controls; minimum sensible height
        const target = Math.round(base * zoom);
        const containerMin = target; // zero gap between pages
        return (
          <div
            key={src}
            style={{
              minHeight: `${containerMin}px`,
              height: `${containerMin}px`,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              padding: 0,
            }}
          >
            <img
              src={src}
              alt={title ? `${title} ${index + 1}` : `Recommendation ${index + 1}`}
              style={{
                height: `${target}px`,
                width: "auto",
                maxWidth: "95vw",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        );
      })}
      <div style={{ marginBottom: 64 }} />

      {/* Floating zoom controls */}
      <div
        style={{
          position: "fixed",
          bottom: controlsPlacement === "nearCTA" ? 100 : 24,
          right: controlsPlacement === "nearCTA" ? 24 : 168,
          zIndex: 60,
          display: "flex",
          gap: 8,
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 12,
          padding: "10px 12px 14px 12px",
        }}
      >
        <button
          aria-label="Zoom out"
          onClick={handleZoomOut}
          style={{
            background: "transparent",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 8,
            padding: "6px 10px",
            cursor: "pointer",
          }}
        >
          −
        </button>
        <Text onBackground="neutral-weak" style={{ minWidth: 48, textAlign: "center", lineHeight: "28px" }}>
          {Math.round(zoom * 100)}%
        </Text>
        <button
          aria-label="Zoom in"
          onClick={handleZoomIn}
          style={{
            background: "transparent",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 8,
            padding: "6px 10px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </Column>
  );
}


