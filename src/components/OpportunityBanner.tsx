import { useState, useEffect } from 'react';
import './Extras.css';

const STORAGE_KEY = 'opportunity-banner-dismissed';

export function OpportunityBanner() {
  const [dismissed, setDismissed] = useState(true); // start hidden to avoid flash

  useEffect(() => {
    const wasDismissed = localStorage.getItem(STORAGE_KEY);
    if (!wasDismissed) {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  if (dismissed) return null;

  return (
    <div className="opportunity-banner">
      <div className="opportunity-banner-inner">
        <span className="opportunity-dot">
          <span className="opportunity-dot-ping"></span>
          <span className="opportunity-dot-solid"></span>
        </span>
        🚀 Open to full-time roles &amp; freelance projects — Let&apos;s connect!
      </div>
      <button
        className="opportunity-dismiss"
        onClick={handleDismiss}
        aria-label="Dismiss banner"
      >
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
