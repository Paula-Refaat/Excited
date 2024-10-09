import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = ({
  element,
  duration = 1000,
}: {
  element: HTMLElement | null;
  duration?: number;
}) => {
  const targetPosition = element?.offsetTop || 0;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let start: number;

  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime: number) => {
    if (!start) start = currentTime;
    const timeElapsed = currentTime - start;
    const run =
      easeInOutCubic(timeElapsed / duration) * distance + startPosition;

    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};
