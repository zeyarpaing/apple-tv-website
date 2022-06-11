import React, { useEffect, useRef } from 'react';

type interSectionProps = {
  children: React.ReactNode;
  animationName: string;
};
const IntersectionAnimate = ({
  children,
  animationName,
}: interSectionProps) => {
  let ref = useRef();

  const intersectionObserve: () => IntersectionObserver = () =>
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(`entered-${animationName}`);
          }, 500);
        } else {
          entry.target.classList.remove(`entered-${animationName}`);
        }
      });
    });

  useEffect(() => {
    // @ts-ignore
    ref.current.classList.add(`before-${animationName}`);
    // @ts-ignore
    intersectionObserve().observe(ref.current);
  }, []);
  // @ts-ignore
  return <div ref={ref}>{children}</div>;
};

export default IntersectionAnimate;
