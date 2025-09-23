import { useEffect, useState, useRef } from 'react';
import { useOptimizedVariants, useThrottledScroll, PERFORMANCE_CONFIG } from './useOptimizedAnimation';

interface ScrollTriggerOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollTrigger = (options: ScrollTriggerOptions = {}) => {
  const {
    threshold = PERFORMANCE_CONFIG.THRESHOLD.NORMAL,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const { shouldUseComplexAnimations } = useOptimizedVariants();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Se não suporta animações complexas, ativar imediatamente
    if (!shouldUseComplexAnimations) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce && !isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered, shouldUseComplexAnimations]);

  return { elementRef, isVisible };
};

// Hook para múltiplos triggers de scroll otimizado
export const useStaggeredScrollTrigger = (count: number, delay: number = PERFORMANCE_CONFIG.STAGGER_DELAY.NORMAL) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(count).fill(false));
  const elementRefs = useRef<(HTMLElement | null)[]>(new Array(count).fill(null));
  const { shouldUseComplexAnimations } = useOptimizedVariants();

  useEffect(() => {
    // Se não suporta animações complexas, ativar todos imediatamente
    if (!shouldUseComplexAnimations) {
      setVisibleItems(new Array(count).fill(true));
      return;
    }

    // Capturar a referência atual para usar no cleanup
    const currentElementRefs = elementRefs.current;

    const observers = currentElementRefs.map((element, index) => {
      if (!element) return null;

      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Usar delay otimizado baseado na performance do dispositivo
            const optimizedDelay = shouldUseComplexAnimations ? delay : delay / 2;
            
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * optimizedDelay);
          }
        },
        {
          threshold: PERFORMANCE_CONFIG.THRESHOLD.NORMAL,
          rootMargin: '0px 0px -50px 0px'
        }
      );
    });

    observers.forEach((observer, index) => {
      const element = currentElementRefs[index];
      if (observer && element) {
        observer.observe(element);
      }
    });

    return () => {
      observers.forEach((observer, index) => {
        const element = currentElementRefs[index];
        if (observer && element) {
          observer.unobserve(element);
        }
      });
    };
  }, [count, delay, shouldUseComplexAnimations]);

  const setElementRef = (index: number) => (ref: HTMLElement | null) => {
    elementRefs.current[index] = ref;
  };

  return { setElementRef, visibleItems };
};

// Hook para scroll suave otimizado
export const useSmoothScroll = () => {
  const { shouldUseComplexAnimations } = useOptimizedVariants();

  const scrollToElement = useThrottledScroll((elementId: string, offset: number = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: shouldUseComplexAnimations ? 'smooth' : 'auto'
      });
    }
  }, 100);

  const scrollToTop = useThrottledScroll(() => {
    window.scrollTo({
      top: 0,
      behavior: shouldUseComplexAnimations ? 'smooth' : 'auto'
    });
  }, 100);

  return { scrollToElement, scrollToTop };
};