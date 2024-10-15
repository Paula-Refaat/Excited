'use client';
import Section from '@/components/layouts/section';
import { FiveVisions } from '@/components/shared/icons';
import { Heading, Paragraph, SubHeading } from '@/components/shared/typography';
import { VISIONS } from '@/constants/data';
import { cn } from '@/lib/utils';
import React, { FC, useEffect, useState } from 'react';

const Vision: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentVision = VISIONS[currentIndex];

  useEffect(() => {
    const addAnimation = (elementId: string, animationClasses: string[]) => {
      const element = document.getElementById(elementId);
      if (!element) return;
      element.classList.add(...animationClasses);
      element.addEventListener('animationend', () => {
        element.classList.remove(...animationClasses);
      });
    };
    addAnimation('paragraph', ['animate__fadeInUp', 'animate__animated']);
    addAnimation('title', ['animate__fadeInRight', 'animate__animated']);
  }, [currentIndex]);
  return (
    <Section className={cn('px-6 lg:px-20', className)} {...props}>
      <Heading as="h2">الرؤية:</Heading>
      <div className="mt-6 flex flex-col gap-16 md:flex-row">
        <div
          id="image"
          className="relative h-[200px] w-full rounded-3xl lg:size-[500px]"
        >
          <img
            src={'/vision.webp'}
            alt="image"
            className="absolute size-full rounded-[inherit] object-contain object-center"
          />
          <div className="absolute inset-0 size-full rounded-[inherit] bg-primary opacity-80 mix-blend-hue"></div>
          <div className="absolute inset-0 size-full rounded-[inherit] bg-black/5"></div>
        </div>
        <div className="flex flex-col gap-12 lg:gap-32">
          <div>
            <FiveVisions className="scale-90 md:scale-100" />
            <ul className="mt-4 flex items-center gap-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i}>
                  <SvgPagination
                    isActive={i === currentIndex}
                    onClick={() => {
                      setCurrentIndex(i);
                    }}
                  >
                    {i + 1}
                  </SvgPagination>
                </li>
              ))}
            </ul>
          </div>
          <article className="flex flex-col items-start">
            <SubHeading id="title" className="lg:text-lg">
              <span>{currentIndex + 1}. </span> {currentVision.title}
            </SubHeading>

            <Paragraph
              id="paragraph"
              className="mx-[none] max-w-[300px] px-0 text-start lg:w-full"
            >
              {currentVision.description}
            </Paragraph>
          </article>
        </div>
      </div>
    </Section>
  );
};

type SvgPaginationProps = React.HTMLAttributes<HTMLDivElement> & {
  isActive?: boolean;
};
const SvgPagination: FC<SvgPaginationProps> = ({
  className,
  children,
  isActive,
  ...props
}) => {
  return (
    <div
      className={cn(
        'group relative cursor-pointer transition-all duration-500 ease-in-out',
        className,
      )}
      {...props}
    >
      <svg
        width="36"
        height="45"
        viewBox="0 0 36 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="18"
          fill="#865CA3"
          className="group-hover:fill-secondary"
        />
        <path d="M18.5 4C22.3333 4 30.3 6.6 31.5 17" stroke="#F8F2FC" />
      </svg>
      <span className="absolute left-0 top-2 text-xl font-bold group-hover:text-primary">
        {children}
      </span>
      {isActive && (
        <div className="center-x absolute bottom-[-6px] h-[2px] w-[66px] bg-secondary-foreground"></div>
      )}
    </div>
  );
};

export default Vision;
