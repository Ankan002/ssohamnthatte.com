"use client";

import { useState, useCallback, useRef } from "react";
import { Column, Flex, Button, Text } from "@once-ui-system/core";
import { Document, Page, pdfjs } from "react-pdf";

// Configure worker from CDN matching the bundled pdfjs version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onDocumentLoadSuccess = useCallback((pdf: { numPages: number }) => {
    setNumPages(pdf.numPages);
    setPageNumber(1);
  }, []);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.2, 3));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.2, 0.6));
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/soham_thatte_resume.pdf";
    link.download = "Soham_Thatte_Resume.pdf";
    link.click();
  };

  const goPrev = () => setPageNumber((p) => Math.max(1, p - 1));
  const goNext = () => setPageNumber((p) => Math.min((numPages ?? 1), p + 1));

  return (
    <Column fillWidth gap="24" paddingY="24" style={{ paddingTop: "80px" }}>
      {/* Toolbar - liquid glass like header */}
      <Flex
        fillWidth
        padding="16"
        radius="l"
        background="surface"
        border="neutral-alpha-weak"
        style={{
          position: "sticky",
          top: "24px",
          zIndex: 10,
          backdropFilter: "blur(35px) saturate(200%)",
          WebkitBackdropFilter: "blur(35px) saturate(200%)",
          background: "rgba(255,255,255,0.05)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
        horizontal="between"
        vertical="center"
      >
        <Flex gap="8" vertical="center">
          <Button size="s" onClick={goPrev} disabled={pageNumber <= 1}>
            Prev
          </Button>
          <Button size="s" onClick={goNext} disabled={!!numPages && pageNumber >= (numPages ?? 1)}>
            Next
          </Button>
          <Text data-variant="label-default-s" onBackground="neutral-weak">
            Page {pageNumber} {numPages ? `of ${numPages}` : ""}
          </Text>
        </Flex>
        <Flex gap="8" vertical="center">
          <Button size="s" onClick={handleZoomOut}>−</Button>
          <Text data-variant="label-default-s" onBackground="neutral-weak">{Math.round(scale * 100)}%</Text>
          <Button size="s" onClick={handleZoomIn}>＋</Button>
          <Button size="s" variant="secondary" onClick={handleDownload}>Download</Button>
        </Flex>
      </Flex>

      {/* Viewer */}
      <Flex
        ref={containerRef}
        fillWidth
        horizontal="center"
        padding="16"
        radius="l"
        background="surface"
        border="neutral-alpha-weak"
        style={{
          backdropFilter: "blur(35px) saturate(200%)",
          WebkitBackdropFilter: "blur(35px) saturate(200%)",
          background: "rgba(255,255,255,0.05)",
          borderColor: "rgba(255,255,255,0.08)",
          overflow: "auto",
        }}
      >
        <Document
          file="/images/soham_thatte_resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(e:any) => console.error('PDF load error', e)}
          loading={<Text data-variant="body-default-m">Loading…</Text>}
          error={<Text data-variant="body-default-m">Failed to load PDF.</Text>}
        >
          <Page pageNumber={pageNumber} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
      </Flex>
    </Column>
  );
} 