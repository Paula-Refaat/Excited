'use client';
import { Circle, Shape } from '@/components/shared/icons';
import ScrollToSectionButton from '@/components/shared/scroll-to-section-button';
import { Heading, Paragraph } from '@/components/shared/typography';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';

const ServiceOverview: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      id="services"
      className={cn(
        'relative flex items-center py-12 md:min-h-screen lg:px-20',
        className,
      )}
      {...props}
    >
      <div className="absolute left-20 top-24 hidden lg:block">
        <Circle className="animate-bounce ease-in-out" />
        <Shape />
      </div>
      <article className="relative text-center md:p-20 md:text-start lg:w-[70%]">
        <div className="absolute left-0 top-0 hidden h-52 w-full rounded-tr-[118px] border-r border-t border-primary lg:block"></div>
        <Heading as="h2" className="text-2xl font-bold text-primary">
          الخدمات:
        </Heading>
        <Paragraph className="font-semibold md:mt-8 md:text-lg lg:w-full lg:pr-12 lg:text-right">
          نحن نقدم مجموعة شاملة من الخدمات التي تغطي جميع جوانب تنظيم الفعاليات،
          من المؤتمرات والمعارض إلى ورش العمل واللقاءات الحكومية.
        </Paragraph>
      </article>
      <ScrollToSectionButton elementId="event-management" />
    </section>
  );
};

export default ServiceOverview;
