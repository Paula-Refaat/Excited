'use client';
import { SERVICES } from '@/constants/data';
import { cn } from '@/lib/utils';
import React, { FC, useState } from 'react';

const Services: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentService = SERVICES[currentIndex];
  return (
    <>
      <section
        id="services"
        className="relative flex h-[50vh] items-center lg:h-svh lg:px-20"
      >
        <div className="absolute left-20 top-24 hidden lg:block">
          <svg
            width="170"
            height="170"
            viewBox="0 0 223 223"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce ease-in-out"
          >
            <circle cx="111.5" cy="111.5" r="111.5" fill="#E9D8F6" />
          </svg>
          <svg
            width="170"
            height="400"
            viewBox="0 0 225 530"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M103.496 124.304C103.496 121.767 101.319 119.815 98.9446 119.815H0L0.198083 0H99.1427C168.602 0 225 55.81 225 124.304V530H103.496V124.304Z"
              fill="#865CA3"
            />
          </svg>
        </div>
        <article className="relative text-center md:p-20 md:text-start lg:w-[70%]">
          <div className="absolute left-0 top-0 hidden h-52 w-full rounded-tr-[118px] border-r border-t border-primary lg:block"></div>
          <h2 className="text-2xl font-bold text-primary">الخدمات:</h2>
          <p className="mt-2 px-8 text-center text-lg font-semibold md:mt-8 lg:pr-12 lg:text-right">
            نحن نقدم مجموعة شاملة من الخدمات التي تغطي جميع جوانب تنظيم
            الفعاليات، من المؤتمرات والمعارض إلى ورش العمل واللقاءات الحكومية.
          </p>
        </article>
      </section>
      <section className={cn('px-8 py-12', className)} {...props}>
        <article className="mx-auto text-center md:w-[65%]">
          <h2 className="text-xl font-bold text-secondary">
            إدارة الحدث والإشراف على الفعاليات :
          </h2>
          <p className="mx-auto mt-2 text-center font-light lg:w-[80%]">
            تعتمـد Excited منهجيـة إدارة المشـاريع في تخطيـط وتنفيـذ وإدارة
            المشـاريع لاسـتثمار المـوارد بالشـكل الأمثـل، وإتمام متطلبــات
            المشروع بالمواصفــات المطلوبــة وفقًا لخطــة زمنيــة محــددة
            ومواصفــات جــودة عاليــة وذلــك بهــدف إنتــاج مخــرج نهــائي
            يتوافــق مــع أهــداف المشروع ورؤيتــه.
          </p>
          <div className="mt-10 flex w-full flex-col gap-2 md:grid md:grid-cols-3 md:grid-rows-4">
            <Item
              onClick={() => setCurrentIndex(0)}
              isActive={currentIndex === 0}
              className="hidden md:flex"
            >
              {SERVICES[0].icon}
              {SERVICES[0].title}
            </Item>
            <Box className="col-span-2 row-span-3 min-h-[300px] p-8 pt-14 text-start font-light text-foreground">
              {currentService.description}
            </Box>
            <Item
              onClick={() => setCurrentIndex(0)}
              isActive={currentIndex === 0}
              className="md:hidden"
            >
              {SERVICES[0].icon}
              {SERVICES[0].title}
            </Item>
            {SERVICES.slice(1).map((service, i) => (
              <Item
                key={i}
                isActive={i + 1 === currentIndex}
                onClick={() => setCurrentIndex(i + 1)}
              >
                {service.icon}
                {service.title}
              </Item>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

const Box: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-[20px] border border-primary p-4 text-secondary',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type ItemProps = React.ComponentProps<typeof Box> & {
  isActive?: boolean;
};
const Item: FC<ItemProps> = ({
  className,
  children,
  isActive = false,
  ...props
}) => {
  return (
    <Box
      role="button"
      className={cn(
        'relative flex cursor-pointer items-center gap-4 duration-300 *:shrink-0 hover:bg-primary hover:text-primary-foreground',
        className,
      )}
      {...props}
    >
      {isActive && (
        <>
          <div className="absolute right-[100%] top-[50%] hidden h-[30px] w-[10px] translate-y-[-50%] rounded-[20px] bg-primary md:block"></div>
          <div className="absolute left-[100%] top-[50%] h-[30px] w-[10px] translate-y-[-50%] rounded-[20px] bg-primary md:block md:hidden"></div>
        </>
      )}
      {children}
    </Box>
  );
};

export default Services;
