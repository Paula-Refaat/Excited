import Section from '@/components/layouts/section';
import { RotatedU } from '@/components/shared/icons';
import ScrollToSectionButton from '@/components/shared/scroll-to-section-button';
import { Heading, SubHeading } from '@/components/shared/typography';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';

const CompanyStory: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <Section
      id="company-story"
      className={cn('relative flex gap-12 md:px-20', className)}
      {...props}
    >
      <RotatedU className="hidden w-full md:block md:w-auto" />
      <article>
        <Heading>قصة الشركة</Heading>
        <SubHeading className="mt-16">
          رمزاً جديدًا للإبداع والتميز في عالم الفعاليات
        </SubHeading>
        <p className="mt-2 w-full max-w-[800px] text-accent">
          &quot;Excited&quot; وُلدت من شغف لا مثيل له بمجال تنظيم الفعاليات، بعد
          تجربة طويلة ومليئة بالتحديات. قررنا أن نحول هذا الشغف إلى شركة تتجاوز
          توقعات العملاء، وتقدم فعاليات تترك بصمة دائمة في أذهان الحضور. بنينا
          &quot;Excited&quot; لتكون رمزاً للإبداع والتميز في عالم الفعاليات،
          ونسعى دائماً للارتقاء بمعايير النجاح وتقديم تجارب لا تُنسى.
        </p>
      </article>
      <ScrollToSectionButton elementId="message" />
    </Section>
  );
};

export default CompanyStory;
