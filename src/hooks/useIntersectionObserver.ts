import { useEffect, useState } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

const useIntersectionObserver = (
  targetRef: React.RefObject<HTMLElement>,
  options?: IntersectionObserverOptions,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && options?.once) {
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = targetRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [targetRef, options]);

  return isIntersecting;
};

export default useIntersectionObserver;
