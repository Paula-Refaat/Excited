import Section from '@/components/layouts/section';
import { Heading, SubHeading } from '@/components/shared/typography';

const Message = () => {
  return (
    <Section>
      <article>
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
