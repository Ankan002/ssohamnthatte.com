"use client";

import React, { useRef, useEffect } from 'react';
import { useStackedCards } from '@/hooks/useStackedCards';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { RevealFx, Flex, Text, Heading } from "@once-ui-system/core";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  readTime: string;
  type: string;
  year: string;
  category: string;
  href: string;
  coverImage: string;
  badgeText: string;
}

interface StackedCaseStudiesProps {
  caseStudies: CaseStudy[];
}

export const StackedCaseStudies: React.FC<StackedCaseStudiesProps> = ({ caseStudies }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY, registerContainer } = useScrollPosition();
  
  const {
    cardPositions,
    containerHeight,
    isSticky,
    updatePositions
  } = useStackedCards({
    totalCards: caseStudies.length,
    cardHeight: 600,
    cardOffset: 20,
    transitionDistance: 120
  });

  // Register container and update positions on scroll
  useEffect(() => {
    if (containerRef.current) {
      registerContainer('stacked-case-studies', containerRef.current);
    }
  }, [registerContainer]);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      updatePositions(scrollY, top);
    }
  }, [scrollY, updatePositions]);

  return (
    <div
      ref={containerRef}
      style={{
        height: `${containerHeight}px`,
        position: 'relative',
        marginTop: '80px',
        marginBottom: '80px',
      }}
    >
      {/* Sticky Container */}
      <div
        style={{
          position: isSticky ? 'sticky' : 'relative',
          top: 0,
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Case Study Cards */}
        {caseStudies.map((caseStudy, index) => {
          const position = cardPositions[index] || {
            scale: 0.95,
            translateY: index * 20,
            opacity: 0.8,
            zIndex: caseStudies.length - index
          };

          return (
            <div
              key={caseStudy.id}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) scale(${position.scale}) translateY(${position.translateY}px)`,
                opacity: position.opacity,
                zIndex: position.zIndex,
                width: '1000px',
                height: '600px',
                borderRadius: '24px',
                overflow: 'hidden',
                transition: 'all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transformOrigin: 'center top',
                cursor: 'pointer',
              }}
            >
              {/* Card Background */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                }}
              >
                <img
                  src={caseStudy.coverImage}
                  alt={caseStudy.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 100%)',
                }} />
              </div>

              {/* Purple/Blue Glow Effect */}
              <div
                style={{
                  position: 'absolute',
                  top: '-50px',
                  left: '-50px',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                  zIndex: 2,
                }}
              />

              {/* Content Overlay */}
              <div style={{
                position: 'relative',
                zIndex: 3,
                height: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                padding: '32px',
              }}>
                <div style={{
                  maxWidth: '500px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                }}>
                  {/* Case Study Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></div>
                    <Text style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500' }}>
                      {caseStudy.badgeText}
                    </Text>
                    <Text style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500', display: 'block', width: '100%' }}>
                      {caseStudy.readTime}
                    </Text>
                  </div>

                  {/* Main Headline */}
                  <Heading style={{
                    fontSize: '2.4rem',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '16px',
                    lineHeight: '1.1'
                  }}>
                    {caseStudy.title}
                  </Heading>

                  {/* Sub-headline */}
                  <Text style={{
                    fontSize: '1.1rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '24px',
                    lineHeight: '1.5'
                  }}>
                    {caseStudy.description}
                  </Text>

                  {/* Project Details */}
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '12px', color: '#3b82f6', background: 'rgba(59, 130, 246, 0.3)', padding: '4px 8px', borderRadius: '6px' }}>
                      {caseStudy.type}
                    </span>
                    <span style={{ fontSize: '12px', color: '#10b981', background: 'rgba(16, 185, 129, 0.3)', padding: '4px 8px', borderRadius: '6px' }}>
                      {caseStudy.year}
                    </span>
                    <span style={{ fontSize: '12px', color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.3)', padding: '4px 8px', borderRadius: '6px' }}>
                      {caseStudy.category}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={caseStudy.href}
                    className="resume-button"
                    style={{
                      gap: '16px',
                      padding: '16px 32px',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '16px',
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontSize: '16px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      alignSelf: 'flex-start',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                  >
                    {/* Button glow effect */}
                    <div
                      className="button-glow"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at 50% 0px, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      }}
                    />

                    {/* Button shimmer effect */}
                    <div
                      className="button-shimmer"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                        transition: 'transform 0.6s ease',
                      }}
                    />

                    {/* Button text */}
                    <span style={{ position: 'relative', zIndex: 2 }}>
                      Read Case Study
                    </span>

                    {/* Arrow icon */}
                    <span
                      className="arrow-icon"
                      style={{
                        fontSize: '18px',
                        position: 'relative',
                        zIndex: 2,
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


