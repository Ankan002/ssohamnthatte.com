import { useState, useEffect, useCallback } from 'react';

interface CardPosition {
  scale: number;
  translateY: number;
  opacity: number;
  zIndex: number;
}

interface UseStackedCardsProps {
  totalCards: number;
  cardHeight: number;
  cardOffset: number;
  transitionDistance: number;
}

export const useStackedCards = ({
  totalCards,
  cardHeight,
  cardOffset,
  transitionDistance
}: UseStackedCardsProps) => {
  const [cardPositions, setCardPositions] = useState<CardPosition[]>([]);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  // Calculate container height for proper scroll distance
  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const calculatedHeight = viewportHeight * totalCards;
    setContainerHeight(calculatedHeight);
  }, [totalCards]);

  // Calculate card positions based on scroll progress
  const calculateCardPositions = useCallback((scrollY: number, containerTop: number) => {
    const viewportHeight = window.innerHeight;
    const scrollProgress = (scrollY - containerTop) / (containerHeight - viewportHeight);
    const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
    
    const positions: CardPosition[] = [];
    
    for (let i = 0; i < totalCards; i++) {
      const cardProgress = (clampedProgress * totalCards) - i;
      
      let scale: number;
      let translateY: number;
      let opacity: number;
      let zIndex: number;
      
      if (cardProgress <= 0) {
        // Card is stacked below
        scale = 0.95;
        translateY = i * cardOffset;
        opacity = 0.8;
        zIndex = totalCards - i;
      } else if (cardProgress >= 1) {
        // Card is active/fully visible
        scale = 1.0;
        translateY = 0;
        opacity = 1.0;
        zIndex = totalCards + 1;
      } else {
        // Card is transitioning
        const transitionProgress = cardProgress;
        scale = 0.95 + (0.05 * transitionProgress);
        translateY = (i * cardOffset) - (transitionDistance * transitionProgress);
        opacity = 0.8 + (0.2 * transitionProgress);
        zIndex = totalCards - i + 1;
      }
      
      positions.push({ scale, translateY, opacity, zIndex });
    }
    
    return positions;
  }, [totalCards, cardOffset, transitionDistance, containerHeight]);

  // Update card positions on scroll
  const updatePositions = useCallback((scrollY: number, containerTop: number) => {
    const positions = calculateCardPositions(scrollY, containerTop);
    setCardPositions(positions);
    
    // Check if container should be sticky
    const viewportHeight = window.innerHeight;
    const shouldBeSticky = scrollY >= containerTop && scrollY < containerTop + containerHeight - viewportHeight;
    setIsSticky(shouldBeSticky);
  }, [calculateCardPositions, containerHeight]);

  return {
    cardPositions,
    containerHeight,
    isSticky,
    updatePositions
  };
};


