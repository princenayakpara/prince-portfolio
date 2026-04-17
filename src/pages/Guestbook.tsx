import { useState } from 'react';
import './extra.css';

type Entry = { initials: string; name: string; date: string; message: string };

const initialEntries: Entry[] = [
  {
    initials: 'AK',
    name: 'Alex Kim',
    date: 'Apr 15, 2026',
    message:
      'Great portfolio! The projects are really impressive. Love the clean design and attention to detail. Keep shipping!',
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    date: 'Apr 10, 2026',
    message: 'Found your site through Twitter. The Finote app looks amazing — love the UI. Following your work!',
  },
  {
    initials: 'MJ',
    name: 'Marcus Johnson',
    date: 'Mar 28, 2026',
    message:
      'Just here to say your Next.js optimization article saved me about 3 hours of debugging. Thanks for writing it!',
  },
];

export function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [msg, setMsg] = useState('');

  const addEntry = () => {
    const n = name.trim();
    const m = msg.trim();
    if (!n || !m) return;
    const initials = n
      .split(/\s+/)
      .map((x) => x[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
    setEntries([
      { initials, name: n, date: 'Today', message: m + (from ? ` · ${from}` : '') },
      ...entries,
    ]);
    setName('');
    setFrom('');
    setMsg('');
  };

  return (
    <main style={{ padding: '60px 0 80px' }}>
      <div className="section-inner" style={{ maxWidth: 700 }}>
        <div className="section-header">
          <span className="section-eyebrow">GUESTBOOK</span>
          <h1 className="section-title">Let me know you were here {String.fromCodePoint(0x270d)}</h1>
        </div>
        <div className="gb-form">
          <h3>Leave a note</h3>
          <div className="gb-fields">
            <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            <input
              type="text"
              placeholder="Where are you from?"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="gb-msg">
            <textarea
              placeholder="Say hello, share a thought, or leave a link to your site..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <button type="button" className="gb-submit" onClick={addEntry}>
            Sign Guestbook →
          </button>
        </div>
        <div className="gb-entries">
          {entries.map((e) => (
            <div className="gb-entry" key={`${e.name}-${e.date}-${e.message.slice(0, 20)}`}>
              <div className="gb-entry-header">
                <div className="gb-avatar">{e.initials}</div>
                <span className="gb-name">{e.name}</span>
                <span className="gb-date">{e.date}</span>
              </div>
              <p className="gb-message">{e.message}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
