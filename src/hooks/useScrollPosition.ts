import { useState, useEffect, useCallback } from 'react';

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);
  const [containerRefs, setContainerRefs] = useState<Map<string, { top: number; height: number }>>(new Map());

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  // Register container reference
  const registerContainer = useCallback((id: string, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const height = element.offsetHeight;
    
    setContainerRefs(prev => new Map(prev).set(id, { top, height }));
  }, []);

  // Get container info
  const getContainerInfo = useCallback((id: string) => {
    return containerRefs.get(id);
  }, [containerRefs]);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [handleScroll]);

  return {
    scrollY,
    registerContainer,
    getContainerInfo
  };
};


