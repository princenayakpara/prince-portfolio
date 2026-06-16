import { useEffect, useState } from 'react';
import './DotGrid.css';

export default function DotGrid() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Slow parallax effect (shift by scrollY * 0.08)
      setOffset(window.scrollY * 0.08);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="dot-grid-fixed-container">
      <div 
        className="dot-grid-pattern" 
        style={{
          transform: `translate3d(0, ${offset}px, 0)`
        }}
      />
    </div>
  );
}
