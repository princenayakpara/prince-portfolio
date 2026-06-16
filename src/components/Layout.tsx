import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { ScrollToHash } from './ScrollToHash';
import BackgroundEffect from './BackgroundEffect';

const titles: Record<string, string> = {
  '/': 'Prince Nayakpara – Creative Developer & Software Engineer',
  '/about': 'About – Prince Nayakpara',
  '/projects': 'Projects – Prince Nayakpara',
  '/contact': 'Contact – Prince Nayakpara',
  '/blog': 'Blog – Prince Nayakpara',
  '/guestbook': 'Guestbook – Prince Nayakpara',
  '/uses': 'Uses – Prince Nayakpara',
  '/privacy': 'Privacy – Prince Nayakpara',
  '/terms': 'Terms – Prince Nayakpara',
};

export function Layout() {
  const { pathname } = useLocation();
  const footerVariant = pathname === '/' ? 'full' : 'compact';

  useEffect(() => {
    document.title = titles[pathname] ?? 'Prince Nayakpara';
  }, [pathname]);

  return (
    <>
      <BackgroundEffect />
      <ScrollToHash />
      <div className="announcement-bar">
        <span className="dot" />
        Live:{' '}
        <a href="https://princenayakpara-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
          princenayakpara-portfolio.vercel.app
        </a>
      </div>
      <Nav />
      <Outlet />
      <Footer variant={footerVariant} />
    </>
  );
}
