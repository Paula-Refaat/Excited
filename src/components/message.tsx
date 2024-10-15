import Section from '@/components/layouts/section';
import ScrollToSectionButton from '@/components/shared/scroll-to-section-button';
import { Heading, SubHeading } from '@/components/shared/typography';
import { cn } from '@/lib/utils';
import { FC } from 'react';

const Message: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <Section
      id="message"
      className={cn(
        'relative flex items-center justify-center lg:min-h-screen',
        className,
      )}
      {...props}
    >
      <article className="flex flex-col items-center text-center">
        <Heading>الرسالة:</Heading>
        <SubHeading className="mt-16">تحقيق المعادلة الاكثر توازنا</SubHeading>
        <p className="mt-2 w-full max-w-[800px] text-accent">
          نحن في &quot;Excited&quot;&nbsp;نلتزم بتحويل كل فكرة إلى تجربة فريدة،
          من خلال تخطيط وتنظيم فعاليات مميزة تلبي تطلعات عملائنا وتعزز هويتهم.
          مع السعي الدائم إلى إبداع حلول مبتكرة تدمج بين الإبهار والكفاءة. نحن
          نسعى بشغف لتقديم أعمال وخدمات تساهم بشكل فعال في بناء مستقبل اقتصادي
          مشرق.
        </p>
      </article>
      <ScrollToSectionButton elementId="vision" />
    </Section>
  );
};

export default Message;
