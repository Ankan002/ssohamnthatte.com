// Custom Smooth Scrolling Utility - Completely Independent Approach
// This provides buttery smooth scrolling without affecting header animations

interface SmoothScrollOptions {
  duration?: number;
  easing?: 'easeInOut' | 'easeOut' | 'easeIn' | 'linear';
  offset?: number;
}

class SmoothScrollUtility {
  private isScrolling = false;
  private currentAnimation: number | null = null;

  // Easing functions for smooth scrolling
  private easingFunctions = {
    easeInOut: (t: number): number => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeOut: (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    },
    easeIn: (t: number): number => {
      return t * t * t;
    },
    linear: (t: number): number => t
  };

  // Main smooth scroll function
  public scrollTo(targetY: number, options: SmoothScrollOptions = {}): void {
    if (this.isScrolling) {
      this.stopCurrentScroll();
    }

    const {
      duration = 1000,
      easing = 'easeInOut',
      offset = 80 // Account for header height
    } = options;

    const startY = window.pageYOffset;
    const distance = targetY - startY - offset;
    const startTime = performance.now();

    this.isScrolling = true;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeFunction = this.easingFunctions[easing];
      const easedProgress = easeFunction(progress);

      const newY = startY + distance * easedProgress;
      window.scrollTo(0, newY);

      if (progress < 1) {
        this.currentAnimation = requestAnimationFrame(animateScroll);
      } else {
        this.isScrolling = false;
        this.currentAnimation = null;
      }
    };

    this.currentAnimation = requestAnimationFrame(animateScroll);
  }

  // Scroll to element by ID
  public scrollToElement(elementId: string, options?: SmoothScrollOptions): void {
    const element = document.getElementById(elementId);
    if (element) {
      const targetY = element.offsetTop;
      this.scrollTo(targetY, options);
    }
  }

  // Scroll to element by selector
  public scrollToSelector(selector: string, options?: SmoothScrollOptions): void {
    const element = document.querySelector(selector);
    if (element) {
      const targetY = (element as HTMLElement).offsetTop;
      this.scrollTo(targetY, options);
    }
  }

  // Scroll to top
  public scrollToTop(options?: SmoothScrollOptions): void {
    this.scrollTo(0, options);
  }

  // Scroll to bottom
  public scrollToBottom(options?: SmoothScrollOptions): void {
    const targetY = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollTo(targetY, options);
  }

  // Stop current scroll animation
  public stopCurrentScroll(): void {
    if (this.currentAnimation) {
      cancelAnimationFrame(this.currentAnimation);
      this.currentAnimation = null;
    }
    this.isScrolling = false;
  }

  // Check if currently scrolling
  public get isCurrentlyScrolling(): boolean {
    return this.isScrolling;
  }

  // Enhanced scroll with momentum
  public scrollWithMomentum(targetY: number, options: SmoothScrollOptions = {}): void {
    const {
      duration = 1200,
      easing = 'easeOut',
      offset = 80
    } = options;

    this.scrollTo(targetY, { duration, easing, offset });
  }

  // Smooth scroll to hash in URL
  public scrollToHash(options?: SmoothScrollOptions): void {
    const hash = window.location.hash;
    if (hash) {
      const elementId = hash.substring(1);
      this.scrollToElement(elementId, options);
    }
  }

  // Initialize smooth scrolling for all internal links
  public initInternalLinks(options?: SmoothScrollOptions): void {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (link as HTMLAnchorElement).getAttribute('href');
        if (href && href !== '#') {
          const elementId = href.substring(1);
          this.scrollToElement(elementId, options);
        }
      });
    });
  }

  // Enhanced wheel event for buttery smooth scrolling
  public enhanceWheelScrolling(): void {
    let ticking = false;
    let lastScrollTime = 0;
    const throttleDelay = 16; // 60fps

    const handleWheel = (e: WheelEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentTime = Date.now();
          if (currentTime - lastScrollTime > throttleDelay) {
            // Apply smooth scrolling to wheel events
            const delta = e.deltaY;
            const currentScroll = window.pageYOffset;
            const targetScroll = currentScroll + delta * 0.5; // Reduce sensitivity for smoother feel
            
            window.scrollTo({
              top: targetScroll,
              behavior: 'smooth'
            });
            
            lastScrollTime = currentTime;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
  }
}

// Create and export singleton instance
export const smoothScroll = new SmoothScrollUtility();

// Export the class for custom instances
export { SmoothScrollUtility };

// Default export
export default smoothScroll; 