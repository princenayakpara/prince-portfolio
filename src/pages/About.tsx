import './extra.css';

export function About() {
  return (
    <main>
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <div className="about-photo">
              <img
                src="/images/prince.png"
                alt="Prince Nayakpara"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
              />
            </div>
          </div>
          <div className="about-content">
            <p className="section-eyebrow">BEHIND THE CODE</p>
            <h1>
              Journey, skills &amp;<br />
              <em>experience</em>
            </h1>
            <p>
              I&apos;m <strong>Prince Nayakpara</strong> — a Computer Science student and aspiring full-stack developer
              focused on building modern, scalable web applications.
            </p>
            <p>
              I&apos;m passionate about clean code, problem-solving, and creating seamless user experiences. I enjoy
              turning ideas into products that are fast, maintainable, and pleasant to use.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m learning new tools, sharpening problem-solving on LeetCode, and shipping
              projects you can explore on my{' '}
              <a href="https://github.com/princenayakpara" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{' '}
              and{' '}
              <a href="https://princenayakpara.vercel.app/" target="_blank" rel="noopener noreferrer">
                live portfolio
              </a>
              .
            </p>
            <div className="skills-grid">
              <div className="skill-card">
                <h4>Frontend</h4>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Tailwind</span>
                  <span className="skill-tag">Motion</span>
                </div>
              </div>
              <div className="skill-card">
                <h4>Backend</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">Bun</span>
                  <span className="skill-tag">REST</span>
                  <span className="skill-tag">tRPC</span>
                </div>
              </div>
              <div className="skill-card">
                <h4>Database</h4>
                <div className="skill-tags">
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">Firebase</span>
                  <span className="skill-tag">Redis</span>
                </div>
              </div>
              <div className="skill-card">
                <h4>Tooling</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Turborepo</span>
                  <span className="skill-tag">Vercel</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
