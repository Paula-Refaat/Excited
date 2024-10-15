import Section from '@/components/layouts/section';
import ScrollToSectionButton from '@/components/shared/scroll-to-section-button';
import { Heading } from '@/components/shared/typography';
import { cn } from '@/lib/utils';
import { FC } from 'react';

const Creative: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <Section
      id="creative"
      className={cn(
        'relative flex items-center justify-center lg:min-h-screen',
        className,
      )}
      {...props}
    >
      <article className="flex flex-col items-center text-center">
        <Heading>الخبرة والابتكار:</Heading>
        <p className="mt-16 w-full max-w-[800px] text-accent">
          فريقنا المتميز يتألف من أفراد موهوبين وذوي خبرة في مجالاتهم. نحن نجمع
          بين الخبرة والابتكار لنقدم أفضل النتائج لعملائنا. نحن نعتمد على
          تكنولوجيا متقدمة وعمليات فعالة لضمان تنفيذ مشاريعنا بأعلى مستويات
          الجودة وفي الوقت المحدد. نعمل مع مجموعة واسعة من العملاء من مختلف
          الصناعات والقطاعات. ونحن نفخر بشراكاتنا القوية والعلاقات الطويلة الأمد
          التي قمنا ببنائها مع عملائنا في (اكسايتد).
        </p>
      </article>
      <ScrollToSectionButton elementId="vision" />
    </Section>
  );
};

export default Creative;
