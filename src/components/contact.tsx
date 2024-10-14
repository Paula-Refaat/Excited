import { InstagramIcon } from '@/components/shared/icons';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';

const Contact: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex h-[50vh] items-center justify-center px-6',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-xl font-bold md:text-2xl">
          يسعدنا تواصلك معنا وثقتك بنا
        </p>
        <div className="flex items-center gap-2">
          <p lang="en" className="flex flex-col gap-1 text-sm text-secondary">
            <a href="mailto:Info@excited.sa">Info@excited.sa</a>
            {/* <a href="tel:+966555066017">+966 55 506 6017</a> */}
          </p>
          <div className="h-10 w-[2px] bg-secondary"></div>
          <a
            href="https://www.instagram.com/excited.sa?igsh=czJwYmFkOXNxOTZl&utm_source=qr"
            className="flex size-10 items-center justify-center rounded-full bg-foreground p-1"
          >
            <InstagramIcon className="size-full text-background" />
          </a>
          <a
            href="https://x.com/excited_sa?s=21"
            className="flex size-10 items-center justify-center rounded-full bg-foreground"
          >
            <img src="/x.png" alt="X" className="size-[60%]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
