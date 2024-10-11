'use client';
import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';
import { SubHeading, Paragraph } from '@/components/shared/typography';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
type ManagementServicesProps = React.ComponentProps<typeof Section>;
const ManagementServices: FC<ManagementServicesProps> = ({
  className,
  ...props
}) => {
  const { isMatched: isMobile } = useMediaQuery({ maxWidth: 768 });
  return (
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
          نحن نقدم مجموعة شاملة من الخدمات التي تغطي جميع جوانب تنظيم الفعاليات،
          من المؤتمرات والمعارض إلى ورش العمل واللقاءات الحكومية. تشمل خدماتنا:
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
  );
};

export default ManagementServices;
