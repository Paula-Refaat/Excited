import { cn } from '@/lib/utils';
import React, { FC } from 'react';

const Box: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-[20px] border border-primary p-4 text-secondary',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
