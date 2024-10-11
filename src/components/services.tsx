'use client';
import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';
import Box from '@/components/shared/box';
import { Circle, Shape } from '@/components/shared/icons';
import Item from '@/components/shared/item';
import { Heading, Paragraph, SubHeading } from '@/components/shared/typography';
import { LOGISTICS, SERVICES } from '@/constants/data';
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
      <Section
        style={{
          backgroundImage: isMobile ? '' : 'url(/image.webp)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backdropFilter: 'blur(50%)',
        }}
        className={cn('relative min-h-[800px] px-8 py-12', className)}
        {...props}
      >
        <div className="absolute inset-0 bg-primary mix-blend-hue"></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <Container className="relative mx-auto pt-4 text-center md:w-full">
          <SubHeading>خدمات دعم تنظيم الاحداث و المعارض :</SubHeading>
          <Paragraph className="lg:w-[65%]">
            نحن نقدم مجموعة شاملة من الخدمات التي تغطي جميع جوانب تنظيم
            الفعاليات، من المؤتمرات والمعارض إلى ورش العمل واللقاءات الحكومية.
            تشمل خدماتنا:
          </Paragraph>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="group h-[290px] w-full rounded-2xl bg-secondary text-secondary-foreground transition-all duration-500 ease-in-out hover:aspect-auto hover:h-[500px] hover:bg-primary hover:text-secondary"
              >
                <div className="flex flex-col gap-2 p-1">
                  <figure>
                    <img
                      src={`/image.webp`}
                      alt="image"
                      width={300}
                      height={300}
                      className="w-full rounded-xl"
                    />
                    <figcaption className="mt-4 text-center text-lg font-semibold">
                      الخدمة {i + 1}
                    </figcaption>
                  </figure>
                  <p className="hidden px-4 text-start font-light group-hover:block">
                    الفعاليات، من المؤتمرات والمعارض إلى ورش العمل واللقاءات
                    الحكومية. تشمل خدماتنا:
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section className={cn('min-h-screen px-8 py-12', className)} {...props}>
        <Container className="mx-auto flex flex-col items-center justify-center text-center md:w-[70%]">
          <SubHeading>الخدمات اللوجستية</SubHeading>
          <Paragraph>
            مجموعة شاملة من الخدمات اللوجستية التي تغطي جميع احتياجات الفعاليات،
            وتشمل:
          </Paragraph>
          <div className="mt-8 grid w-full grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:w-[90%]">
            {LOGISTICS.map((service, i) => (
              <Item
                key={i}
                className="group relative w-full py-8 hover:bg-transparent hover:text-secondary"
              >
                {service.icon}
                {service.title}
                <div className="center-x absolute top-[100%] z-20 h-0 w-[80%] overflow-hidden rounded-b-xl bg-secondary px-3 py-4 text-secondary-foreground opacity-0 transition-all duration-500 ease-in-out group-hover:h-[200px] group-hover:opacity-100">
                  <p className="text-start font-light">{service.description}</p>
                </div>
              </Item>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Services;
