import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';
import { MediaIcon } from '@/components/shared/icons';
import { SubHeading } from '@/components/shared/typography';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
type DigitalMediaProps = React.ComponentProps<typeof Section>;
const DigitalMedia: FC<DigitalMediaProps> = ({ className, ...props }) => {
  return (
    <Section className={cn('px-8 py-12', className)} {...props}>
      <Container className="mx-auto flex flex-col items-center justify-center text-center md:w-full lg:w-[90%]">
        <SubHeading>الاعلام الرقمي</SubHeading>
        <div className="relative mt-12 w-full rounded-2xl border border-primary px-6 py-12">
          <div className="absolute right-8 top-0 size-[100px] translate-y-[-50%] bg-background px-4">
            <MediaIcon className="size-full text-secondary" />
          </div>
          <p className="leading-loose">
            الإعلام الرقمي يعزز من فعالية شركات تنظيم المعارض والمؤتمرات من خلال
            تسويق الفعاليات على وسائل التواصل الاجتماعي والإعلانات المدفوعة،
            وإدارة المحتوى مثل الفيديوهات والصور، والتسويق عبر البريد الإلكتروني
            لجذب المشاركين. كما يساهم في تحليل البيانات لقياس فعالية الحملات
            والتفاعل مع الجمهور لتقديم دعم فوري وتعزيز
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default DigitalMedia;
