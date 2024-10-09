'use client';
import { Arrow, Logo } from '@/components/shared/icons';
import { cn, scrollToSection } from '@/lib/utils';
import React, { FC } from 'react';

const Hero: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        'relative flex h-[70vh] flex-col items-center justify-center gap-4 rounded-b-[118px] border-x border-b border-primary px-16 text-center lg:h-screen',
        className,
      )}
      {...props}
    >
      <Logo className="scale-50 md:scale-75 lg:scale-100" />
      <p className="text-lg font-semibold text-primary">
        تجربة متجددة وتطلع دائم نحو ما يليق بوطننا
      </p>

      <div className="reveal absolute left-[50%] top-[50%] h-[2px] w-[80%] translate-x-[-50%] translate-y-[100px] bg-primary md:w-[70%] md:translate-y-[150px]"></div>

      <button
        onClick={() =>
          scrollToSection({
            element: document.getElementById('services'),
          })
        }
        className="group absolute bottom-10 flex flex-col items-center text-secondary"
      >
        <span lang="en" className="block">
          Company Profile
        </span>
        <span> التعريف بالشركة</span>
        <Arrow className="group-hover:translate-y-4 group-hover:scale-110 group-hover:fill-primary" />
      </button>
    </section>
  );
};

export default Hero;
