import { useEffect, useState } from 'react';

export function useTypewriter(phrases: string[]) {
  const [text, setText] = useState('');

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let tid = 0;

    const tick = () => {
      const current = phrases[roleIndex];
      if (deleting) {
        charIndex -= 1;
        setText(current.slice(0, charIndex));
        if (charIndex < 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % phrases.length;
          charIndex = 0;
          tid = window.setTimeout(tick, 400);
          return;
        }
      } else {
        charIndex += 1;
        setText(current.slice(0, charIndex));
        if (charIndex > current.length) {
          deleting = true;
          tid = window.setTimeout(tick, 1800);
          return;
        }
      }
      tid = window.setTimeout(tick, deleting ? 60 : 90);
    };

    tid = window.setTimeout(tick, 90);
    return () => clearTimeout(tid);
  }, [phrases]);

  return text;
}
