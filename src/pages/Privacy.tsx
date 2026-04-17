export function Privacy() {
  return (
    <main style={{ padding: '60px 0 80px' }}>
      <div className="section-inner" style={{ maxWidth: 720 }}>
        <h1 className="section-title">Privacy Policy</h1>
        <p style={{ color: 'var(--text2)', lineHeight: 1.7, marginTop: 20 }}>
          This portfolio site may use standard analytics or contact forms you configure (for example EmailJS). Do not
          paste secrets into the repository; use environment variables for API keys. Replace this page with your full
          legal text before production use.
        </p>
      </div>
    </main>
  );
}
