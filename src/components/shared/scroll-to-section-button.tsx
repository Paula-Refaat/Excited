'use client';
import { Arrow } from '@/components/shared/icons';
import { cn, scrollToSection } from '@/lib/utils';
import React, { FC } from 'react';
type ScrollToElementButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  elementId: string;
};
const ScrollToSectionButton: FC<ScrollToElementButtonProps> = ({
  className,
  elementId,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={(e) => {
        scrollToSection({
          element: document.getElementById(elementId),
        });
        onClick?.(e);
      }}
      className={cn(
        'center-x absolute bottom-0 hidden py-6 text-secondary lg:block',
        className,
      )}
      {...props}
    >
      <Arrow />
    </button>
  );
};

export default ScrollToSectionButton;
