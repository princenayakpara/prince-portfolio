import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.replace('#', '');
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [pathname, hash]);

  return null;
}
