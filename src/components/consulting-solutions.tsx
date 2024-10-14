import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';
import { HandshakeIcon } from '@/components/shared/icons';
import { SubHeading } from '@/components/shared/typography';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
type ConsultingSolutionsProps = React.ComponentProps<typeof Section>;
const ConsultingSolutions: FC<ConsultingSolutionsProps> = ({
  className,
  ...props
}) => {
  return (
    <Section className={cn('px-8 py-12', className)} {...props}>
      <Container className="mx-auto flex flex-col items-center justify-center text-center md:w-full lg:w-[90%]">
        <SubHeading>خدمة الحلول الاستشارية</SubHeading>
        <div className="relative mt-12 w-full rounded-2xl border border-primary px-6 py-12">
          <div className="absolute right-8 top-0 size-[100px] translate-y-[-50%] bg-background px-4">
            <HandshakeIcon className="size-full text-secondary" />
          </div>
          <p className="leading-loose">
            هي مساعده شامله في جميع جوانب تنظيم الفعاليات لضمان نجاحها، يتم فيها
            تقديم حلول استشارية متكاملة واحترافية مبنية على تحليل دقيق واحتياجات
            مخصصة، مع التركيز على تقديم أفضل النتائج ودعم العملاء في تحقيق
            أهدافهم بكفاءة وفعالية.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default ConsultingSolutions;
