import CompanyStory from '@/components/company-story';
import EventManagement from '@/components/event-management';
import Hero from '@/components/hero';
import Introduction from '@/components/introduction';
import Logistics from '@/components/logistics';
import ManagementServices from '@/components/management-services';
import ServiceOverview from '@/components/service-overview';
import { Logo } from '@/components/shared/icons';
import Vision from '@/components/vision';

const Home = () => {
  return (
    <div>
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-end bg-background px-4 py-6 md:px-36">
        <Logo className="h-[14px] w-[150px] scale-90 md:scale-100" />
      </header>
      <Hero />
      <Introduction />
      <CompanyStory />
      <Vision />
      <ServiceOverview />
      <EventManagement />
      <ManagementServices />
      <Logistics />
    </div>
  );
};

export default Home;
