'use client';

import ScrollToSectionButton from '@/components/shared/scroll-to-section-button';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

const Introduction: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      id="introduction"
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center justify-between gap-4 px-6 pt-10 lg:flex-row lg:gap-20 lg:px-40',
        className,
        {
          'opacity-0': !inView,
          'animate__animated animate__fadeInUp': inView,
        },
      )}
      {...props}
    >
      <div className="relative h-[300px] w-full rounded-3xl lg:h-[500px] lg:w-[470px]">
        {/* <Shape className='fill-none  stroke-primary bottom-[35%] left-[80%] absolute stroke-2'/>
        <Shape className='fill-none absolute top-[35%] right-[80%] rotate-180 stroke-primary stroke-2'/> */}
        <img
          src="/image.webp"
          alt="image"
          className="absolute size-full rounded-[inherit] object-cover"
        />
        <div className="absolute inset-0 size-full rounded-[inherit] bg-primary opacity-80 mix-blend-hue"></div>
        <div className="absolute inset-0 size-full rounded-[inherit] bg-black/5"></div>
      </div>
      <div className="flex-1 py-4 lg:max-w-[700px]">
        <h3 className="mb-2 text-lg font-bold">مقدمة</h3>
        <p className="text-sm font-light leading-loose">
          <span className="mb-6 block">
            تأسست شركتنا على قيم <strong>الابتكار، والإبداع، والتميز</strong> في
            تقديم خدمات متكاملة في <strong>تخطيط وتنفيذ الفعاليات</strong>. بفضل
            فريقنا المتخصص والشغوف، نحن ملتزمون بتحقيق رؤية عملائنا عبر تنظيم
            فعاليات تترك أثرًا لا يُنسى.
          </span>
          <span>
            نحن نؤمن بأن الفعالية ليست مجرد حدث؛ بل هي{' '}
            <strong>
              تجربة متكاملة تبدأ بالتخطيط الدقيق وتنتهي بانطباعات دائمة لدى
              المشاركين.
            </strong>
            &nbsp;من هنا، نحرص على تقديم حلول مبتكرة تشمل كل جانب من جوانب
            الفعالية، من التخطيط الاستراتيجي إلى التنفيذ والإدارة، مرورًا بالدعم
            اللوجستي والتسويق. سواء كنت تسعى لتنظيم مؤتمر عالمي، أو حفل خاص، أو
            أي فعالية أخرى،
            <strong>
              {' '}
              نحن هنا لنقدم لك تجربة فريدة ترفع من مستوى توقعاتك.
            </strong>
          </span>
          <span className="mt-4 block text-center font-medium">
            في &quot;Excited&quot;، نحن نصنع تجارب استثنائية.
          </span>
        </p>
      </div>
      <ScrollToSectionButton elementId="company-story" />
    </div>
  );
};

export default Introduction;
