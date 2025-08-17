"use client";

import { ReactNode } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  // Initialize smooth scrolling with buttery smooth settings
  useSmoothScroll({
    duration: 1200, // Slightly longer for buttery feel
    easing: 'easeOut', // Natural deceleration
    offset: 80, // Account for header height
    enableWheelEnhancement: true, // Enhanced wheel scrolling
    enableInternalLinks: true // Smooth internal link navigation
  });

  return <>{children}</>;
}; 