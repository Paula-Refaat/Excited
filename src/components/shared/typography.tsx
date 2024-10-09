import { cn } from '@/lib/utils';
import React, { FC } from 'react';
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading: FC<HeadingProps> = ({
  className,
  children,
  as: Component = 'h1',
  ...props
}) => {
  return (
    <Component
      className={cn('text-xl font-bold text-primary md:text-2xl', className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export const SubHeading: FC<HeadingProps> = ({
  className,
  children,
  as: Component = 'h3',
  ...props
}) => {
  return (
    <Component
      className={cn('text-lg font-bold text-secondary md:text-xl', className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Paragraph: FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p
      className={cn(
        'mx-auto mt-2 px-6 text-center text-sm font-light md:text-base lg:w-[80%]',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
