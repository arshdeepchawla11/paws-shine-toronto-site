import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
}

export const useCountUp = ({ end, duration = 2000, start = 0, decimals = 0 }: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    startTimeRef.current = undefined;
    
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }
      
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + (end - start) * easeOutQuart;
      
      setCount(Number(currentCount.toFixed(decimals)));
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
  };

  const reset = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
    setCount(start);
    setIsAnimating(false);
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { count, startAnimation, reset, isAnimating };
};