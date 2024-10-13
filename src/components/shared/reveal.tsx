'use client';
import React, { FC, useEffect, useRef } from 'react';
type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  side?: 'left' | 'right' | 'up' | 'down';
};
const Reveal: FC<RevealProps> = ({ children, side = 'left', ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    switch (side) {
      case 'left':
        ref?.current?.classList.remove('reveal-left');
        void ref?.current?.offsetWidth;
        ref?.current?.classList.add('reveal-left');
        break;
      case 'right':
        ref?.current?.classList.remove('reveal-right');
        void ref?.current?.offsetWidth;
        ref?.current?.classList.add('reveal-right');
        break;
      case 'up':
        ref?.current?.classList.remove('reveal-up');
        void ref?.current?.offsetWidth;
        ref?.current?.classList.add('reveal-up');
        break;
      case 'down':
        ref?.current?.classList.remove('reveal-down');
        void ref?.current?.offsetWidth;
        ref?.current?.classList.add('reveal-down');
        break;
      default:
        ref?.current?.classList.remove('reveal-left');
        void ref?.current?.offsetWidth;
        ref?.current?.classList.add('reveal-left');
        break;
    }
  }, [children, side]);
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};

export default Reveal;
