import Box from '@/components/shared/box';
import { cn } from '@/lib/utils';
import { FC } from 'react';

type ItemProps = React.ComponentProps<typeof Box> & {
  isActive?: boolean;
  side?: 'left' | 'right' | 'top' | 'bottom';
};
const Item: FC<ItemProps> = ({
  className,
  children,
  isActive = false,
  side = 'left',
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
      {isActive && SIDES[side]}
      {children}
    </Box>
  );
};

const MySide: FC<
  React.HTMLAttributes<HTMLDivElement> & {
    direction?: 'vertical' | 'horizontal';
  }
> = ({ className, direction = 'horizontal', ...props }) => {
  return (
    <div
      className={cn(
        'absolute rounded-[20px] bg-primary',
        {
          'left-[50%] h-[10px] w-[30px] translate-x-[-50%]':
            direction === 'horizontal',
          'top-[50%] h-[30px] w-[10px] translate-y-[-50%]':
            direction === 'vertical',
        },
        className,
      )}
      {...props}
    />
  );
};

const SIDES = {
  left: <MySide direction="vertical" className="right-[100%]" />,
  right: <MySide direction="vertical" className="left-[100%]" />,
  top: <MySide className="bottom-[100%]" />,
  bottom: <MySide className="top-[100%]" />,
};

export default Item;
