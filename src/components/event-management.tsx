'use client';
import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';
import Box from '@/components/shared/box';
import Item from '@/components/shared/item';
import ScrollToSectionButton from '@/components/shared/scroll-to-section-button';
import { Paragraph, SubHeading } from '@/components/shared/typography';
import { EVENT_MANAGEMENT_SERVICES } from '@/constants/data';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import React, { FC, useState } from 'react';
type EventManagementProps = React.ComponentProps<typeof Section>;
const EventManagement: FC<EventManagementProps> = ({ className, ...props }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentService = EVENT_MANAGEMENT_SERVICES[currentIndex];
  const { isMatched: isMobile } = useMediaQuery({ maxWidth: 768 });
  return (
    <Section
      id="event-management"
      className={cn('min-h-screen px-8 py-12', className)}
      {...props}
    >
      <Container className="mx-auto text-center md:w-[65%]">
        <SubHeading>إدارة الحدث والإشراف على الفعاليات :</SubHeading>
        <Paragraph>
          تعتمـد Excited منهجيـة إدارة المشـاريع في تخطيـط وتنفيـذ وإدارة
          المشـاريع لاسـتثمار المـوارد بالشـكل الأمثـل، وإتمام متطلبــات المشروع
          بالمواصفــات المطلوبــة وفقًا لخطــة زمنيــة محــددة ومواصفــات جــودة
          عاليــة وذلــك بهــدف إنتــاج مخــرج نهــائي يتوافــق مــع أهــداف
          المشروع ورؤيتــه.
        </Paragraph>
        <div className="mt-10 flex w-full flex-col gap-2 md:grid md:grid-cols-3 md:grid-rows-4">
          <Item
            onClick={() => setCurrentIndex(0)}
            isActive={currentIndex === 0}
            className="hidden md:flex"
          >
            {EVENT_MANAGEMENT_SERVICES[0].icon}
            {EVENT_MANAGEMENT_SERVICES[0].title}
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
            {EVENT_MANAGEMENT_SERVICES[0].icon}
            {EVENT_MANAGEMENT_SERVICES[0].title}
          </Item>
          {EVENT_MANAGEMENT_SERVICES.slice(1).map((service, i) => {
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
      <ScrollToSectionButton elementId="management-services" />
    </Section>
  );
};

export default EventManagement;
