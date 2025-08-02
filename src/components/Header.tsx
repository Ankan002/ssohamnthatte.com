"use client";

import { usePathname } from "next/navigation";

import { Flex, Line, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, blog, work, gallery, banana } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <Flex
      position="fixed"
      top="16"
      zIndex={9}
      horizontal="center"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Flex
        background="page"
        border="neutral-alpha-weak"
        radius="xl"
        shadow="xl"
        padding="12"
        horizontal="center"
        zIndex={1}
        style={{
          /* True Apple Liquid Glass Effect - More Translucent */
          backdropFilter: "blur(25px) saturate(150%)",
          WebkitBackdropFilter: "blur(25px) saturate(150%)",
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: `
            /* Primary shadow for depth */
            0 20px 40px rgba(0, 0, 0, 0.3),
            /* Inner highlight for liquid effect */
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            /* Inner shadow for depth */
            inset 0 -1px 0 rgba(0, 0, 0, 0.08),
            /* Subsurface scattering layers */
            inset 0 0 20px rgba(255, 255, 255, 0.03),
            inset 0 0 40px rgba(255, 255, 255, 0.01)
          `,
          minWidth: "fit-content",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dynamic light reflection layer */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(135deg, 
                rgba(255,255,255,0.15) 0%, 
                transparent 30%, 
                rgba(255,255,255,0.05) 60%, 
                transparent 100%
              )
            `,
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
        
        <Flex 
          gap="8" 
          vertical="center" 
          textVariant="body-default-s" 
          suppressHydrationWarning
        >
          {routes["/"] && (
            <ToggleButton 
              prefixIcon="home" 
              href="/" 
              selected={pathname === "/"}
            />
          )}
          <Line 
            background="neutral-alpha-medium" 
            vert 
            maxHeight="24" 
          />
          {routes["/about"] && (
            <ToggleButton
              prefixIcon="person"
              href="/about"
              label={about.label}
              selected={pathname === "/about"}
            />
          )}
          {routes["/work"] && (
            <ToggleButton
              prefixIcon="grid"
              href="/work"
              label={work.label}
              selected={pathname.startsWith("/work")}
            />
          )}
          {routes["/blog"] && (
            <ToggleButton
              prefixIcon="book"
              href="/blog"
              label={blog.label}
              selected={pathname.startsWith("/blog")}
            />
          )}
          {routes["/gallery"] && (
            <ToggleButton
              prefixIcon="gallery"
              href="/gallery"
              label={gallery.label}
              selected={pathname.startsWith("/gallery")}
            />
          )}
          {routes["/banana"] && (
            <ToggleButton
              prefixIcon="star"
              href="/banana"
              label={banana.label}
              selected={pathname === "/banana"}
            />
          )}
          {display.themeSwitcher && (
            <>
              <Line 
                background="neutral-alpha-medium" 
                vert 
                maxHeight="24" 
              />
              <ThemeToggle />
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
