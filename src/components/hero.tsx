import { Logo } from '@/components/shared/icons';
import { cn } from '@/lib/utils';
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

      <a
        href="#services"
        className="group absolute bottom-10 flex flex-col items-center text-foreground"
      >
        <span lang="en" className="block">
          Company Profile
        </span>
        <span> التعريف بالشركة</span>
        <svg
          width="31"
          height="21"
          viewBox="0 0 31 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-2 fill-[#E9D8F6] transition-all duration-300 ease-linear group-hover:translate-y-4 group-hover:scale-110 group-hover:fill-primary"
        >
          <path d="M15.3202 20.03L10.4802 13.31L0.910156 0H9.2702L15.6102 9.45001L21.8802 0H30.0902L20.4102 13.31L15.3202 20.03Z" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
