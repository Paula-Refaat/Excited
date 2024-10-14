import Section from '@/components/layouts/section';
import { Heading, SubHeading } from '@/components/shared/typography';
import { cn } from '@/lib/utils';
import { FC } from 'react';

const Message: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <Section
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <article className="flex flex-col items-center text-center">
        <Heading>الرسالة:</Heading>
        <SubHeading className="mt-16">تحقيق المعادلة الاكثر توازنا</SubHeading>
        <p className="mt-2 w-full max-w-[800px] text-accent">
          نحن في &quot;Excited&quot;نلتزم بتحويل كل فكرة إلى تجربة فريدة، من
          خلال تخطيط وتنظيم فعاليات مميزة تلبي تطلعات عملائنا وتعزز هويتهم. مع
          السعي الدائم إلى إبداع حلول مبتكرة تدمج بين الإبهار والكفاءة. نحن نسعى
          بشغف لتقديم أعمال وخدمات تساهم بشكل فعال في بناء مستقبل اقتصادي مشرق.
        </p>
      </article>
    </Section>
  );
};

export default Message;
