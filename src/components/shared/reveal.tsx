'use client';
import { cn } from '@/lib/utils';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  side?: 'left' | 'right' | 'up' | 'down';
};
const Reveal: FC<RevealProps> = ({
  children,
  className,
  side = 'left',
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, [children, side]);

  const getAnimationClass = useCallback(() => {
    switch (side) {
      case 'left':
        return isVisible ? 'reveal-left' : 'invisible';

      case 'right':
        return isVisible ? 'reveal-right' : 'invisible';

      case 'up':
        return isVisible ? 'reveal-up' : 'invisible';

      case 'down':
        return isVisible ? 'reveal-down' : 'invisible';

      default:
        return isVisible ? 'reveal-left' : 'invisible';
    }
  }, [isVisible, side]);
  return (
    <div ref={ref} className={cn(getAnimationClass(), className)} {...props}>
      {children}
    </div>
  );
};

export default Reveal;
