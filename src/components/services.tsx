'use client';
import Box from '@/components/shared/box';
import { Circle, Shape } from '@/components/shared/icons';
import Item from '@/components/shared/item';
import { SERVICES } from '@/constants/data';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import React, { FC, useState } from 'react';

const Services: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentService = SERVICES[currentIndex];
  const { isMatched: isMobile } = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <section
        id="services"
        className="relative flex h-[50vh] items-center lg:h-svh lg:px-20"
      >
        <div className="absolute left-20 top-24 hidden lg:block">
          <Circle className="animate-bounce ease-in-out" />
          <Shape />
        </div>
        <article className="relative text-center md:p-20 md:text-start lg:w-[70%]">
          <div className="absolute left-0 top-0 hidden h-52 w-full rounded-tr-[118px] border-r border-t border-primary lg:block"></div>
          <h2 className="text-2xl font-bold text-primary">الخدمات:</h2>
          <p className="mt-2 px-8 text-center text-lg font-semibold md:mt-8 lg:pr-12 lg:text-right">
            نحن نقدم مجموعة شاملة من الخدمات التي تغطي جميع جوانب تنظيم
            الفعاليات، من المؤتمرات والمعارض إلى ورش العمل واللقاءات الحكومية.
          </p>
        </article>
      </section>
      <section
        id="event-management"
        className={cn('px-8 py-12', className)}
        {...props}
      >
        <article className="mx-auto text-center md:w-[65%]">
          <h2 className="text-xl font-bold text-secondary">
            إدارة الحدث والإشراف على الفعاليات :
          </h2>
          <p className="mx-auto mt-2 text-center font-light lg:w-[80%]">
            تعتمـد Excited منهجيـة إدارة المشـاريع في تخطيـط وتنفيـذ وإدارة
            المشـاريع لاسـتثمار المـوارد بالشـكل الأمثـل، وإتمام متطلبــات
            المشروع بالمواصفــات المطلوبــة وفقًا لخطــة زمنيــة محــددة
            ومواصفــات جــودة عاليــة وذلــك بهــدف إنتــاج مخــرج نهــائي
            يتوافــق مــع أهــداف المشروع ورؤيتــه.
          </p>
          <div className="mt-10 flex w-full flex-col gap-2 md:grid md:grid-cols-3 md:grid-rows-4">
            <Item
              onClick={() => setCurrentIndex(0)}
              isActive={currentIndex === 0}
              className="hidden md:flex"
            >
              {SERVICES[0].icon}
              {SERVICES[0].title}
            </Item>
            <Box className="col-span-2 row-span-3 min-h-[300px] p-8 pt-14 text-start font-light text-foreground">
              {currentService.description}
            </Box>
            <Item
              onClick={() => setCurrentIndex(0)}
              isActive={currentIndex === 0}
              className="md:hidden"
              side={isMobile ? 'right' : 'left'}
            >
              {SERVICES[0].icon}
              {SERVICES[0].title}
            </Item>
            {SERVICES.slice(1).map((service, i) => {
              const side = isMobile
                ? 'right'
                : service.id === 6 || service.id === 5
                  ? 'top'
                  : 'left';
              return (
                <Item
                  key={i}
                  isActive={i + 1 === currentIndex}
                  onClick={() => setCurrentIndex(i + 1)}
                  side={side}
                >
                  {service.icon}
                  {service.title}
                </Item>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
};

export default Services;
