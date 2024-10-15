'use client';
import CompanyStory from '@/components/company-story';
import ConsultingSolutions from '@/components/consulting-solutions';
import Contact from '@/components/contact';
import DigitalMedia from '@/components/digital-media';
import Entertainment from '@/components/entertainment';
import EventManagement from '@/components/event-management';
import Hero from '@/components/hero';
import Introduction from '@/components/introduction';
import Logistics from '@/components/logistics';
import ManagementServices from '@/components/management-services';
import Message from '@/components/message';
import ProductionLine from '@/components/production-line';
import ServiceOverview from '@/components/service-overview';
import { Logo, MenuIcon } from '@/components/shared/icons';
import Technology from '@/components/technology';
import Vision from '@/components/vision';
import { cn, scrollToSection } from '@/lib/utils';
import { InstagramIcon, Mail, PhoneCall } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-background px-4 py-6 md:px-36">
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <MenuIcon />
        </button>
        <Logo className="h-[14px] w-[150px] scale-90 md:scale-100" />
      </header>
      <aside
        className={cn('fixed z-50 flex h-screen w-full duration-500', {
          'translate-x-0': isOpen,
          'translate-x-[102%]': !isOpen,
        })}
      >
        <div className="flex w-[70%] flex-col items-center gap-4 overflow-auto rounded-l-[100px] border border-primary border-r-background bg-background px-4 py-10 md:w-56">
          <Logo
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="w-[150px] cursor-pointer lg:w-[80%]"
          />
          <nav className="flex w-full flex-col items-center gap-2 text-base font-light text-secondary">
            <button
              onClick={() => {
                setIsOpen(false);
                scrollToSection({
                  element: document.getElementById('introduction'),
                });
              }}
              className="rounded px-2 py-1 hover:bg-secondary-foreground"
            >
              عن الشركة
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                scrollToSection({
                  element: document.getElementById('event-management'),
                });
              }}
              className="rounded px-2 py-1 hover:bg-secondary-foreground"
            >
              خدماتنا
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                scrollToSection({
                  element: document.getElementById('management-services'),
                });
              }}
              className="rounded px-2 py-1 hover:bg-secondary-foreground"
            >
              سابقة أعمالنا
            </button>
          </nav>
          <p className="border-t border-foreground py-4 text-sm font-light">
            ... شركة سعودية متخصصــة في تنظيــــم وإنشــــــــــــاء
            الأحـــــــــداث والفعـــــاليــــــــات على المستوى الحكــومــي
            والقطاع الخاص ...
          </p>
          <div
            lang="en"
            className="flex w-full flex-col gap-2 border-t border-foreground py-4 pl-4 text-sm font-light"
          >
            <a href="tel:+966555066017" className="flex items-center gap-2">
              <PhoneCall />
              <span>+966 55 506 6017</span>
            </a>
            <a
              href="mailto:Info@excited.sa"
              className="flex items-center gap-2"
            >
              <Mail />
              <span>Info@excited.sa</span>
            </a>
          </div>
          <div className="flex w-full items-center justify-center gap-4 border-t border-foreground py-4">
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
        <div
          className="flex-1 bg-transparent"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      </aside>
      <Hero />
      <Introduction />
      <CompanyStory />
      <Message />
      <Vision />
      <ServiceOverview />
      <EventManagement />
      <ManagementServices />
      <Logistics />
      <ConsultingSolutions />
      <Entertainment />
      <ProductionLine />
      <Technology />
      <DigitalMedia />
      <Contact />
    </div>
  );
};

export default Home;
