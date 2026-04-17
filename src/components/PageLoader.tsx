import { useEffect } from 'react';

export function PageLoader() {
  useEffect(() => {
    document.body.classList.add('is-loading');
    const hide = () => {
      const loader = document.getElementById('pageLoader');
      loader?.classList.add('page-loader--done');
      document.body.classList.remove('is-loading');
    };
    if (document.readyState === 'complete') {
      requestAnimationFrame(() => setTimeout(hide, 400));
    } else {
      const onLoad = () => setTimeout(hide, 450);
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  return (
    <div
      id="pageLoader"
      className="page-loader"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="uiverse-loader loader" role="presentation">
        <div className="text">
          <span>PRINCE</span>
        </div>
        <div className="text">
          <span>PRINCE</span>
        </div>
        <div className="text">
          <span>PRINCE</span>
        </div>
        <div className="text">
          <span>PRINCE</span>
        </div>
        <div className="text">
          <span>PRINCE</span>
        </div>
        <div className="text">
          <span>PRINCE</span>
        </div>
        <div className="line" />
      </div>
    </div>
  );
}
