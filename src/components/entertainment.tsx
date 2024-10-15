import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';
import ScrollToSectionButton from '@/components/shared/scroll-to-section-button';
import { SubHeading } from '@/components/shared/typography';
import { ENTERTAINMENT_SERVICES } from '@/constants/data';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
type EntertainmentProps = React.ComponentProps<typeof Section>;
const Entertainment: FC<EntertainmentProps> = ({ className, ...props }) => {
  return (
    <Section
      id="entertainment"
      className={cn('flex items-center justify-center px-8 py-12', className)}
      {...props}
    >
      <Container className="mx-auto flex flex-col items-center justify-center text-center md:w-full lg:w-[90%]">
        <SubHeading>خدمات الترفية</SubHeading>
        <ul className="mt-8 flex w-full flex-wrap justify-center gap-4">
          {ENTERTAINMENT_SERVICES.map(
            ({ description, icon: Icon, title }, i) => (
              <li
                key={i}
                className="w-full rounded-2xl border border-primary p-6 md:max-w-[260px] lg:max-w-[280px]"
              >
                <Icon className="mx-auto size-16 text-secondary" />
                <h6 className="mx-auto mb-8 mt-4 text-base font-semibold">
                  {title}
                </h6>
                <p className="text-base font-light">{description}</p>
              </li>
            ),
          )}
        </ul>
      </Container>
      <ScrollToSectionButton elementId="production-line" />
    </Section>
  );
};

export default Entertainment;
