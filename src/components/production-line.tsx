import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';
import { FactoryIcon } from '@/components/shared/icons';
import ScrollToSectionButton from '@/components/shared/scroll-to-section-button';
import { SubHeading } from '@/components/shared/typography';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
type ProductionLineProps = React.ComponentProps<typeof Section>;
const ProductionLine: FC<ProductionLineProps> = ({ className, ...props }) => {
  return (
    <Section
      id="production-line"
      className={cn('flex items-center justify-center px-8 py-12', className)}
      {...props}
    >
      <Container className="mx-auto flex flex-col items-center justify-center text-center md:w-full lg:w-[90%]">
        <SubHeading>خط الإنتاج</SubHeading>
        <div className="relative mt-12 w-full rounded-2xl border border-primary px-6 py-12">
          <div className="absolute right-8 top-0 size-[100px] translate-y-[-50%] bg-background px-4">
            <FactoryIcon className="size-full text-secondary" />
          </div>
          <p className="leading-loose">
            في مصنع &quot;اكسايتد&quot;، نبدأ بتصميم وتخطيط المعدات بدقة، ثم
            نجهز الآلات ونتحقق من جاهزيتها. بعد بدء التشغيل نطبق معايير صارمة
            لمراقبة الجودة وننفذ صيانة دورية. نختتم بتحليل الأداء لتحسين الكفاءة
            وتقليل التكاليف
          </p>
        </div>
      </Container>
      <ScrollToSectionButton elementId="technology" />
    </Section>
  );
};

export default ProductionLine;
