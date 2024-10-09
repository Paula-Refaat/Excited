import { cn } from '@/lib/utils';
import React, { FC } from 'react';

const Section: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section className={cn('px-8 py-12', className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
