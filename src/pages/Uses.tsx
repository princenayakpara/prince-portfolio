export function Uses() {
  const tools = [
    { name: 'Zed', note: 'Primary editor for focused coding sessions.' },
    { name: 'Claude Code', note: 'AI pair programming in the terminal.' },
    { name: 'Ghostty', note: 'Fast, GPU-accelerated terminal.' },
    { name: 'Arc', note: 'Browser with spaces and clean UX.' },
    { name: 'Linear', note: 'Issue tracking that stays out of the way.' },
  ];

  return (
    <main style={{ padding: '60px 0 80px' }}>
      <div className="section-inner" style={{ maxWidth: 720 }}>
        <div className="section-header">
          <span className="section-eyebrow">TOOLING</span>
          <h1 className="section-title">Uses</h1>
          <p className="section-sub" style={{ marginTop: 12 }}>
            Hardware and software I rely on daily — the same stack highlighted on the home page tools strip.
          </p>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '32px 0 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {tools.map((t) => (
            <li
              key={t.name}
              style={{
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '18px 22px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, marginBottom: 6 }}>{t.name}</div>
              <div style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.6 }}>{t.note}</div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
