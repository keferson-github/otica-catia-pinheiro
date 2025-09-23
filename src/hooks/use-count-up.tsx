import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  useEasing?: boolean;
  useGrouping?: boolean;
}

export const useCountUp = ({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = ',',
  useEasing = true,
  useGrouping = true,
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  // Função de easing para suavizar a animação
  const easeOutExpo = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  // Função para formatar o número
  const formatNumber = (num: number): string => {
    const fixedNum = Number(num.toFixed(decimals));
    
    let formattedNum = fixedNum.toString();
    
    if (useGrouping && separator) {
      formattedNum = formattedNum.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    
    return `${prefix}${formattedNum}${suffix}`;
  };

  // Função para iniciar a animação
  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    startTimeRef.current = undefined;
    
    const animate = (currentTime: number) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = currentTime;
      }
      
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      let easedProgress = progress;
      if (useEasing) {
        easedProgress = easeOutExpo(progress);
      }
      
      const currentCount = start + (end - start) * easedProgress;
      setCount(currentCount);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        setCount(end);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
  };

  // Função para resetar a animação
  const reset = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
    setCount(start);
    setIsAnimating(false);
  };

  // Cleanup na desmontagem do componente
  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return {
    count,
    formattedCount: formatNumber(count),
    isAnimating,
    start: startAnimation,
    reset,
  };
};

// Hook para usar com Intersection Observer
export const useCountUpOnView = (
  options: UseCountUpOptions,
  threshold = 0.3
) => {
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const countUp = useCountUp(options);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          countUp.start();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasStarted, countUp, threshold]);

  return {
    ...countUp,
    elementRef,
    hasStarted,
  };
};