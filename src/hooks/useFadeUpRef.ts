import { useEffect, useRef, type RefObject } from 'react';

export function useFadeUpRef<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('fade-up');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add('visible'), 60);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
