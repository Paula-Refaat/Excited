import Hero from '@/components/hero';
import Services from '@/components/services';
import { Logo } from '@/components/shared/icons';

const Home = () => {
  return (
    <div>
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-end bg-background px-4 py-6 md:px-36">
        <Logo className="h-[14px] w-[150px] scale-90 md:scale-100" />
      </header>
      <Hero />
      <Services />
    </div>
  );
};

export default Home;
