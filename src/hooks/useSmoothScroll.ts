import { useEffect, useCallback } from 'react';
import { smoothScroll } from '@/utils/smoothScroll';

interface UseSmoothScrollOptions {
  duration?: number;
  easing?: 'easeInOut' | 'easeOut' | 'easeIn' | 'linear';
  offset?: number;
  enableWheelEnhancement?: boolean;
  enableInternalLinks?: boolean;
}

export const useSmoothScroll = (options: UseSmoothScrollOptions = {}) => {
  const {
    duration = 1000,
    easing = 'easeInOut',
    offset = 80,
    enableWheelEnhancement = true,
    enableInternalLinks = true
  } = options;

  // Enhanced wheel scrolling for buttery smooth feel
  useEffect(() => {
    if (enableWheelEnhancement) {
      smoothScroll.enhanceWheelScrolling();
    }

    return () => {
      // Cleanup if needed
    };
  }, [enableWheelEnhancement]);

  // Initialize internal links for smooth scrolling
  useEffect(() => {
    if (enableInternalLinks) {
      smoothScroll.initInternalLinks({ duration, easing, offset });
    }
  }, [enableInternalLinks, duration, easing, offset]);

  // Scroll to element by ID
  const scrollToElement = useCallback((elementId: string, customOptions?: Partial<UseSmoothScrollOptions>) => {
    smoothScroll.scrollToElement(elementId, {
      duration: customOptions?.duration || duration,
      easing: customOptions?.easing || easing,
      offset: customOptions?.offset || offset
    });
  }, [duration, easing, offset]);

  // Scroll to element by selector
  const scrollToSelector = useCallback((selector: string, customOptions?: Partial<UseSmoothScrollOptions>) => {
    smoothScroll.scrollToSelector(selector, {
      duration: customOptions?.duration || duration,
      easing: customOptions?.easing || easing,
      offset: customOptions?.offset || offset
    });
  }, [duration, easing, offset]);

  // Scroll to top
  const scrollToTop = useCallback((customOptions?: Partial<UseSmoothScrollOptions>) => {
    smoothScroll.scrollToTop({
      duration: customOptions?.duration || duration,
      easing: customOptions?.easing || easing,
      offset: customOptions?.offset || offset
    });
  }, [duration, easing, offset]);

  // Scroll to bottom
  const scrollToBottom = useCallback((customOptions?: Partial<UseSmoothScrollOptions>) => {
    smoothScroll.scrollToBottom({
      duration: customOptions?.duration || duration,
      easing: customOptions?.easing || easing,
      offset: customOptions?.offset || offset
    });
  }, [duration, easing, offset]);

  // Scroll with momentum
  const scrollWithMomentum = useCallback((targetY: number, customOptions?: Partial<UseSmoothScrollOptions>) => {
    smoothScroll.scrollWithMomentum(targetY, {
      duration: customOptions?.duration || duration,
      easing: customOptions?.easing || easing,
      offset: customOptions?.offset || offset
    });
  }, [duration, easing, offset]);

  // Stop current scroll
  const stopScroll = useCallback(() => {
    smoothScroll.stopCurrentScroll();
  }, []);

  // Check if currently scrolling
  const isScrolling = smoothScroll.isCurrentlyScrolling;

  return {
    scrollToElement,
    scrollToSelector,
    scrollToTop,
    scrollToBottom,
    scrollWithMomentum,
    stopScroll,
    isScrolling
  };
}; 