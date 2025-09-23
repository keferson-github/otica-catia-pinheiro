import { useEffect, useState, useCallback } from 'react';
import type { Variants, Transition, Variant } from 'framer-motion';

// Hook para detectar preferências de movimento reduzido
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Hook para throttle de scroll events
export const useThrottledScroll = (callback: (elementId: string, offset?: number) => void, delay: number = 16) => {
  const [isThrottled, setIsThrottled] = useState(false);

  const throttledCallback = useCallback((elementId: string, offset?: number) => {
    if (!isThrottled) {
      callback(elementId, offset);
      setIsThrottled(true);
      setTimeout(() => setIsThrottled(false), delay);
    }
  }, [callback, delay, isThrottled]);

  return throttledCallback;
};

// Hook para detectar se o dispositivo suporta animações complexas
export const useDeviceCapabilities = () => {
  const [capabilities, setCapabilities] = useState({
    supportsComplexAnimations: true,
    supportsParallax: true,
    isMobile: false,
    isLowEndDevice: false
  });

  useEffect(() => {
    // Detectar se é mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Detectar dispositivos de baixo desempenho
    const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
                          (navigator as Navigator & { deviceMemory?: number }).deviceMemory <= 2 ||
                          isMobile;

    // Detectar suporte a animações complexas
    const supportsComplexAnimations = !isLowEndDevice && 
                                    window.requestAnimationFrame !== undefined &&
                                    CSS.supports('transform', 'translateZ(0)');

    // Detectar suporte a parallax
    const supportsParallax = supportsComplexAnimations && 
                           !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setCapabilities({
      supportsComplexAnimations,
      supportsParallax,
      isMobile,
      isLowEndDevice
    });
  }, []);

  return capabilities;
};

// Hook para variantes de animação otimizadas
export const useOptimizedVariants = () => {
  const prefersReducedMotion = useReducedMotion();
  const { supportsComplexAnimations, isLowEndDevice } = useDeviceCapabilities();

  const getOptimizedVariants = useCallback((baseVariants: Variants) => {
    if (prefersReducedMotion) {
      // Remover animações se o usuário prefere movimento reduzido
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.1 } }
      } as Variants;
    }

    if (isLowEndDevice) {
      // Simplificar animações para dispositivos de baixo desempenho
      const visibleVariant = baseVariants.visible as Variant;
      return {
        ...baseVariants,
        visible: {
          ...visibleVariant,
          transition: {
            ...(typeof visibleVariant === 'object' && 'transition' in visibleVariant ? visibleVariant.transition : {}),
            type: "tween",
            duration: Math.min(
              (typeof visibleVariant === 'object' && 'transition' in visibleVariant && 
               visibleVariant.transition && typeof visibleVariant.transition === 'object' && 
               'duration' in visibleVariant.transition ? visibleVariant.transition.duration as number : 0.3) || 0.3, 
              0.3
            )
          }
        }
      } as Variants;
    }

    return baseVariants;
  }, [prefersReducedMotion, isLowEndDevice]);

  const getOptimizedTransition = useCallback((baseTransition: Transition) => {
    if (prefersReducedMotion) {
      return { duration: 0.1 };
    }

    if (isLowEndDevice) {
      return {
        ...baseTransition,
        type: "tween",
        duration: Math.min(baseTransition?.duration || 0.3, 0.3)
      };
    }

    return baseTransition;
  }, [prefersReducedMotion, isLowEndDevice]);

  return {
    getOptimizedVariants,
    getOptimizedTransition,
    shouldUseComplexAnimations: supportsComplexAnimations && !prefersReducedMotion,
    shouldUseParallax: !prefersReducedMotion && !isLowEndDevice
  };
};

// Hook para lazy loading de animações
export const useLazyAnimation = (threshold: number = 0.1) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { shouldUseComplexAnimations } = useOptimizedVariants();

  useEffect(() => {
    if (!shouldUseComplexAnimations) {
      setShouldAnimate(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    return () => observer.disconnect();
  }, [threshold, shouldUseComplexAnimations]);

  return shouldAnimate;
};

// Configurações globais de performance
export const PERFORMANCE_CONFIG = {
  // Delays otimizados para diferentes tipos de animação
  STAGGER_DELAY: {
    FAST: 50,
    NORMAL: 100,
    SLOW: 150
  },
  
  // Durações otimizadas
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.4,
    SLOW: 0.6
  },
  
  // Configurações de spring otimizadas
  SPRING: {
    LIGHT: { stiffness: 200, damping: 25 },
    NORMAL: { stiffness: 150, damping: 20 },
    HEAVY: { stiffness: 100, damping: 15 }
  },
  
  // Thresholds para intersection observer
  THRESHOLD: {
    EARLY: 0.1,
    NORMAL: 0.2,
    LATE: 0.5
  }
};