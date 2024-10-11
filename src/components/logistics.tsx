import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';
import Item from '@/components/shared/item';
import { SubHeading, Paragraph } from '@/components/shared/typography';
import { LOGISTICS } from '@/constants/data';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
type LogisticsProps = React.ComponentProps<typeof Section>;
const Logistics: FC<LogisticsProps> = ({ className, ...props }) => {
  return (
    <Section className={cn('min-h-screen px-8 py-12', className)} {...props}>
      <Container className="mx-auto flex flex-col items-center justify-center text-center md:w-[70%]">
        <SubHeading>الخدمات اللوجستية</SubHeading>
        <Paragraph>
          مجموعة شاملة من الخدمات اللوجستية التي تغطي جميع احتياجات الفعاليات،
          وتشمل:
        </Paragraph>
        <div className="mt-8 grid w-full grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:w-[90%]">
          {LOGISTICS.map((service, i) => (
            <Item
              key={i}
              className="group relative w-full py-8 hover:bg-transparent hover:text-secondary"
            >
              {service.icon}
              {service.title}
              <div className="center-x absolute top-[100%] z-20 h-0 w-[80%] overflow-hidden rounded-b-xl bg-secondary px-3 py-4 text-secondary-foreground opacity-0 transition-all duration-500 ease-in-out group-hover:h-[200px] group-hover:opacity-100">
                <p className="text-start font-light">{service.description}</p>
              </div>
            </Item>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Logistics;
