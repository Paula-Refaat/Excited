import { cn } from '@/lib/utils';
import React, { FC } from 'react';
type ContainerProps = React.HTMLAttributes<HTMLDivElement>;
const Container: FC<ContainerProps> = ({ className, children, ...props }) => {
  return (
    <article
      className={cn('mx-auto text-center md:w-[65%]', className)}
      {...props}
    >
      {children}
    </article>
  );
};

export default Container;
