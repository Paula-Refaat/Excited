import { InstagramIcon } from '@/components/shared/icons';
import { cn } from '@/lib/utils';
import React, { FC, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setIsLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
        },
      )
      .then(
        () => {
          form.current?.reset();
          setIsLoading(false);
        },
        () => {
          alert('Failed to send email, try again!');
          setIsLoading(false);
        },
      );
  };
  return (
    <div
      id="contact"
      className={cn(
        'flex min-h-[100vh] flex-col items-center justify-center px-6',
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
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto flex w-full flex-col gap-6 md:w-[80%] lg:w-[60%]"
      >
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="name">الاسم</label>
          <input
            id="name"
            type="text"
            placeholder="اكتب اسمك"
            className="rounded border border-primary bg-transparent p-2"
            name="name"
            required
            minLength={3}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="email">البريد الالكتروني</label>
          <input
            id="email"
            type="email"
            placeholder="اكتب بريدك الالكتروني"
            className="rounded border border-primary bg-transparent p-2"
            name="email"
            required
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="message">الرسالة</label>
          <textarea
            id="message"
            placeholder="اكتب رسالتك"
            className="max-h-[300px] min-h-[200px] rounded border border-primary bg-transparent p-2"
            name="message"
            required
            minLength={10}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="rounded-md bg-primary px-2 py-2 duration-200 hover:opacity-90 disabled:opacity-50"
        >
          {
            {
              true: 'جاري الارسال...',
              false: 'ارسال',
            }[isLoading.toString()]
          }
        </button>
      </form>
    </div>
  );
};

export default Contact;
