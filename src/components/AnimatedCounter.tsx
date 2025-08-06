import { useEffect } from 'react';
import { useCountUp } from '@/hooks/use-count-up';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  trigger?: boolean;
  className?: string;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  decimals = 0, 
  suffix = '', 
  prefix = '',
  trigger = false,
  className = ''
}: AnimatedCounterProps) => {
  const { count, startAnimation } = useCountUp({ 
    end, 
    duration, 
    decimals 
  });

  useEffect(() => {
    if (trigger) {
      // Small delay to make the animation feel more natural
      const timer = setTimeout(() => {
        startAnimation();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [trigger, startAnimation]);

  const formatNumber = (num: number) => {
    if (decimals === 1) {
      return num.toFixed(1);
    }
    return Math.floor(num).toString();
  };

  return (
    <span className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default AnimatedCounter;