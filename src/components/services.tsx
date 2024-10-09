'use client';
import Box from '@/components/shared/box';
import { Circle, Shape } from '@/components/shared/icons';
import Item from '@/components/shared/item';
import { SERVICES } from '@/constants/data';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { Heading, Paragraph, SubHeading } from '@/components/shared/typography';
import React, { FC, useState } from 'react';
import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';

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
          <Heading as="h2" className="text-2xl font-bold text-primary">
            الخدمات:
          </Heading>
          <Paragraph className="font-semibold md:mt-8 md:text-lg lg:w-full lg:pr-12 lg:text-right">
            نحن نقدم مجموعة شاملة من الخدمات التي تغطي جميع جوانب تنظيم
            الفعاليات، من المؤتمرات والمعارض إلى ورش العمل واللقاءات الحكومية.
          </Paragraph>
        </article>
      </section>
      <Section
        id="event-management"
        className={cn('px-8 py-12', className)}
        {...props}
      >
        <Container className="mx-auto text-center md:w-[65%]">
          <SubHeading>إدارة الحدث والإشراف على الفعاليات :</SubHeading>
          <Paragraph>
            تعتمـد Excited منهجيـة إدارة المشـاريع في تخطيـط وتنفيـذ وإدارة
            المشـاريع لاسـتثمار المـوارد بالشـكل الأمثـل، وإتمام متطلبــات
            المشروع بالمواصفــات المطلوبــة وفقًا لخطــة زمنيــة محــددة
            ومواصفــات جــودة عاليــة وذلــك بهــدف إنتــاج مخــرج نهــائي
            يتوافــق مــع أهــداف المشروع ورؤيتــه.
          </Paragraph>
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
        </Container>
      </Section>
    </>
  );
};

export default Services;
