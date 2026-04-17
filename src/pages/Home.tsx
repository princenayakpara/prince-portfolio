import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FigmaLogo } from '../components/FigmaLogo';
import { HeroSocialLinks } from '../components/HeroSocialLinks';
import { CareerSection } from '../components/CareerSection';
import { ProjectBento } from '../components/ProjectBento';
import { ResumeModal } from '../components/ResumeModal';
import { TiltSkillCard } from '../components/TiltSkillCard';
import { TechIcon } from '../components/TechIcon';
import { projects, type Project } from '../data/projects';
import { unstopCertificates } from '../data/unstopCertificates';
import { useFadeUpRef } from '../hooks/useFadeUpRef';
import { useTypewriter } from '../hooks/useTypewriter';

function HomeProjectRow({ project }: { project: Project }) {
  const ref = useFadeUpRef<HTMLDivElement>();
  return (
    <div ref={ref} className="project-item" data-cat={project.categories.join(' ')}>
      <ProjectBento project={project} />
    </div>
  );
}

function SiteNavFadeLink({
  to,
  className,
  children,
}: {
  to: string;
  className: string;
  children: ReactNode;
}) {
  const ref = useFadeUpRef<HTMLAnchorElement>();
  return (
    <Link ref={ref} to={to} className={className}>
      {children}
    </Link>
  );
}

const EMAIL = 'prince.nayakpara.cg@gmail.com';

const typePhrases = ['Creative Software Engineer', 'Full-Stack Developer', 'Problem Solver'];

export function Home() {
  const typed = useTypewriter(typePhrases);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    void navigator.clipboard.writeText(EMAIL).then(() => {
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const previewProjects = projects.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-top-row">
            <div className="hero-text-col">
              <div className="hero-eyebrow">
                <span className="status-dot" />
                Available for freelance &amp; full-time
              </div>
              <h1 className="hero-heading">
                Hello! I&apos;m <em>Prince</em> —<br />a creative software engineer.
              </h1>
              <div className="hero-sub">
                <strong>Prince Nayakpara</strong> — <span className="typewriter">{typed}</span>
              </div>
              <div className="hero-email">
                <button type="button" className="email-copy" onClick={copyEmail}>
                  <span>{'\u2709'}</span>
                  <span style={{ opacity: emailCopied ? 0 : 1 }}>{EMAIL}</span>
                  <span className={`copy-badge ${emailCopied ? 'show' : ''}`}>Copied!</span>
                </button>
              </div>
              <HeroSocialLinks variant="mobile" />
            </div>
            <div className="hero-photo-col">
              <div className="hero-photo-wrap">
                <div className="hero-photo-placeholder">
                  <img src="/images/prince.png" alt="Prince Nayakpara" width={220} height={270} />
                </div>
                <HeroSocialLinks variant="desktop" />
              </div>
            </div>
          </div>
          <div className="hero-cards">
            <Link to="/contact" className="hero-card">
              <div className="hcard-label">Let&apos;s Build Together</div>
              <div className="hcard-sub">Clear communication, fast iterations, no surprises</div>
              <span className="hcard-arrow">→</span>
            </Link>
            <Link to="/projects" className="hero-card">
              <div className="hcard-label">What You Get</div>
              <div className="hcard-sub">Clean code, pixel-perfect UI, deployed &amp; scaling</div>
              <span className="hcard-arrow">→</span>
            </Link>
          </div>

        </div>
      </section>

      <CareerSection />

      <section className="skills-section" id="skills">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">EXPERTISE</span>
            <h2 className="section-title">Skills &amp; technologies</h2>
          </div>
          <div className="skills-interactive-grid">
            
            <div className="skill-cat-container">
              <h3 className="skill-cat-title">Frontend</h3>
              <p className="skill-cat-desc">Building responsive, interactive UIs with modern web frameworks</p>
              <div className="skill-cards-grid">
                {[
                  ['React', 'UI Framework'],
                  ['Next.js', 'Meta Framework'],
                  ['TypeScript', 'Type Safety'],
                  ['Tailwind CSS', 'Utility Design'],
                  ['Framer Motion', 'Animations'],
                  ['Zustand', 'State Management'],
                  ['Zod', 'Schema Validation'],
                  ['HTML5', 'Markup Language']
                ].map(([name, desc]) => (
                  <TiltSkillCard key={name} name={name} desc={desc} icon={<TechIcon type={name} />} />
                ))}
              </div>
            </div>

            <div className="skill-cat-container">
              <h3 className="skill-cat-title">Backend</h3>
              <p className="skill-cat-desc">Architecting robust, scalable server-side systems and databases</p>
              <div className="skill-cards-grid">
                {[
                  ['Node.js', 'Runtime Env'],
                  ['Express', 'Web Server'],
                  ['MongoDB', 'NoSQL DB'],
                  ['PostgreSQL', 'Relational DB'],
                  ['REST APIs', 'Architecture'],
                  ['Redis', 'In-Memory DB'],
                  ['Firebase', 'BaaS'],
                  ['Sanity CMS', 'Headless CMS']
                ].map(([name, desc]) => (
                  <TiltSkillCard key={name} name={name} desc={desc} icon={<TechIcon type={name} />} />
                ))}
              </div>
            </div>

            <div className="skill-cat-container">
              <h3 className="skill-cat-title">Tools &amp; DevOps</h3>
              <p className="skill-cat-desc">Streamlining development, version control, and deployments</p>
              <div className="skill-cards-grid">
                {[
                  ['Git', 'Version Control'],
                  ['GitHub', 'Source Repository'],
                  ['Docker', 'Containerization'],
                  ['Vercel', 'Edge Hosting'],
                  ['Figma', 'Prototyping'],
                  ['Turborepo', 'Monorepo Builds'],
                  ['Postman', 'API Testing'],
                  ['Linux', 'Operating System']
                ].map(([name, desc]) => (
                  <TiltSkillCard key={name} name={name} desc={desc} icon={<TechIcon type={name} />} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">CASE STUDIES</span>
            <h2 className="section-title">Curated work</h2>
          </div>
          <div className="project-list">
            {previewProjects.map((p) => (
              <HomeProjectRow key={p.id} project={p} />
            ))}
          </div>
          <Link to="/projects" className="see-more-link">
            See more projects →
          </Link>
        </div>
      </section>

      <section className="figma-section" id="figma">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">UI/UX DESIGN</span>
            <h2 className="section-title">Figma designs</h2>
          </div>
          <div className="figma-grid">
            <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="figma-card">
              <div className="figma-preview" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(/figma/ecommerce_app_ui.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <FigmaLogo />
                <span className="figma-preview-label">E-Commerce App UI</span>
              </div>
              <div className="figma-info">
                <div className="figma-title">E-Commerce App UI</div>
                <div className="figma-sub">
                  Complete mobile shopping experience with cart, checkout, and product flows
                </div>
                <span className="figma-link-tag">View on Figma →</span>
              </div>
            </a>
            <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="figma-card">
              <div className="figma-preview" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(/figma/saas_dashboard_ui.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <FigmaLogo />
                <span className="figma-preview-label">SaaS Dashboard</span>
              </div>
              <div className="figma-info">
                <div className="figma-title">SaaS Dashboard Design</div>
                <div className="figma-sub">
                  Analytics dashboard with dark theme, data visualization, and component library
                </div>
                <span className="figma-link-tag">View on Figma →</span>
              </div>
            </a>
            <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="figma-card">
              <div className="figma-preview" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(/figma/portfolio_design_system.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <FigmaLogo />
                <span className="figma-preview-label">Portfolio Design System</span>
              </div>
              <div className="figma-info">
                <div className="figma-title">Portfolio Design System</div>
                <div className="figma-sub">
                  Full design system with tokens, components, and responsive layouts
                </div>
                <span className="figma-link-tag">View on Figma →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="certs-section" id="certificates">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">CREDENTIALS</span>
            <h2 className="section-title">Certifications</h2>
            <p className="section-sub cert-section-sub">
              Each credential includes a preview and a link to verify on the issuer&apos;s site or download the PDF.
            </p>
          </div>
          <div className="certs-grid">
            <div className="cert-card">
              <div className="cert-body">
                <div className="cert-title">Python</div>
                <div className="cert-issuer">Kaggle · Dec 19, 2025</div>
                <div className="cert-desc">Certificate of completion — Kaggle Learn.</div>
                <div className="cert-thumb-card">
                  <img
                    className="cert-thumb-img"
                    src="/certificates/kaggle-python.png"
                    alt="Kaggle Python certificate"
                    width={640}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <a
                  href="https://www.kaggle.com/learn/python"
                  className="cert-verify-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify on Kaggle
                </a>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-body">
                <div className="cert-title">C Intermediate</div>
                <div className="cert-issuer">Sololearn · 06 Mar 2026</div>
                <div className="cert-desc">Certificate ID CC-67EAJ75N</div>
                <div className="cert-thumb-card">
                  <img
                    className="cert-thumb-img"
                    src="/certificates/sololearn-c-intermediate.png"
                    alt="Sololearn C Intermediate certificate"
                    width={640}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <a
                  href="https://www.sololearn.com/certificates/CC-67EAJ75N/"
                  className="cert-verify-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify on Sololearn
                </a>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-body">
                <div className="cert-title">Introduction to C++</div>
                <div className="cert-issuer">Sololearn · 09 Mar 2026</div>
                <div className="cert-desc">Certificate ID CC-0Y95DAQG</div>
                <div className="cert-thumb-card">
                  <img
                    className="cert-thumb-img"
                    src="/certificates/sololearn-cpp-intro.png"
                    alt="Sololearn Introduction to C++ certificate"
                    width={640}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <a
                  href="https://www.sololearn.com/certificates/CC-0Y95DAQG/"
                  className="cert-verify-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify on Sololearn
                </a>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-body">
                <div className="cert-title">Generative AI Mastermind</div>
                <div className="cert-issuer">Outskill · Course certificate</div>
                <div className="cert-desc">
                  Certificate of completion — Generative AI Mastermind.
                </div>
                <div className="cert-thumb-card">
                  <img
                    className="cert-thumb-img"
                    src="/certificates/generative-ai.png"
                    alt="Generative AI Certificate"
                    width={640}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <a
                  href="/certificates/generative-ai.png"
                  className="cert-verify-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View full certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hackathon-section" id="hackathons">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">COMPETITIONS</span>
            <h2 className="section-title">Hackathons &amp; Challenges</h2>
          </div>
          <div className="hack-certs-grid">
            {unstopCertificates.map((c) => (
              <div className="cert-card" key={c.id}>
                <div className="cert-body">
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-issuer">Unstop · Engineering Challenge</div>
                  <div className="cert-thumb-card">
                    <img
                      className="cert-thumb-img"
                      src={c.image}
                      alt={`${c.title} certificate`}
                      width={640}
                      height={400}
                      loading="lazy"
                    />
                  </div>
                  <div className="hack-qa-item">
                    <strong>Problem:</strong> {c.problem}
                  </div>
                  <div className="hack-qa-item">
                    <strong>Solution:</strong> {c.solution}
                  </div>
                  <div className="hack-qa-item">
                    <strong>Outcome:</strong> {c.outcome}
                  </div>
                  <a href={c.url} className="cert-verify-btn" target="_blank" rel="noopener noreferrer">
                    Verify Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pow-section" id="proof-of-work">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">HIGHLIGHTS</span>
            <h2 className="section-title">Proof of Work</h2>
          </div>
          <div className="pow-grid">
            {[
              ['200+ Problems Solved', 'Strong foundation in DSA with consistent practice across coding platforms'],
              ['5+ Projects Built', 'Developed real-world full-stack applications including an Instagram clone'],
              ['Full Stack Developer', 'Working with React, Node.js, Express, MongoDB, and modern web tools'],
              ['15 hrs/day Discipline', 'Highly consistent learning and building routine focused on growth'],
              ['UI/UX Focused', 'Creating modern, clean, and user-friendly interfaces'],
              ['Goal: Top 1% Developer', 'Focused on mastering scalable systems and advanced development'],
            ].map(([title, sub]) => (
              <div className="pow-card" key={title}>
                <div className="pow-title">{title}</div>
                <div className="pow-sub">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resume-section" id="resume">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">RESUME</span>
            <h2 className="section-title">My resume</h2>
          </div>
          <div className="resume-card">
            <div className="resume-left">
              <div className="resume-icon">{String.fromCodePoint(0x1f4c4)}</div>
              <div>
                <div className="resume-title">Prince Nayakpara — Resume</div>
                <div className="resume-sub">Full-stack developer · CS student · Open to opportunities</div>
              </div>
            </div>
            <button type="button" className="resume-view-btn" onClick={() => setResumeOpen(true)}>
              View Resume
            </button>
          </div>
        </div>
      </section>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />

      <section className="social-section" id="social">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">CONNECT</span>
            <h2 className="section-title">Find me online</h2>
          </div>
          <div className="social-grid">
            <a
              href="https://github.com/princenayakpara"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon" style={{ background: '#333', color: '#fff' }}>
                <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <div className="social-info">
                <div className="social-name">GitHub</div>
                <div className="social-handle">princenayakpara</div>
                <div className="social-stat">Projects &amp; open source</div>
              </div>
              <span className="social-arrow">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/prince-nayakpara-7846b337b/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon" style={{ background: '#0A66C2', color: '#fff' }}>
                <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="social-info">
                <div className="social-name">LinkedIn</div>
                <div className="social-handle">Prince Nayakpara</div>
                <div className="social-stat">Connect professionally</div>
              </div>
              <span className="social-arrow">→</span>
            </a>
            <a
              href="https://leetcode.com/u/Prince27507/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon" style={{ background: '#FFA116', color: '#000' }}>
                <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </div>
              <div className="social-info">
                <div className="social-name">LeetCode</div>
                <div className="social-handle">Prince27507</div>
                <div className="social-stat">Problem solving &amp; DSA</div>
              </div>
              <span className="social-arrow">→</span>
            </a>
            <a
              href="https://x.com/Prince1252254"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon" style={{ background: '#000', color: '#fff' }}>
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div className="social-info">
                <div className="social-name">X (Twitter)</div>
                <div className="social-handle">@Prince1252254</div>
                <div className="social-stat">Updates &amp; dev thoughts</div>
              </div>
              <span className="social-arrow">→</span>
            </a>
            <a
              href="https://www.youtube.com/@princenayakpara"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon" style={{ background: '#FF0000', color: '#fff' }}>
                <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div className="social-info">
                <div className="social-name">YouTube</div>
                <div className="social-handle">@princenayakpara</div>
                <div className="social-stat">Videos &amp; project demos</div>
              </div>
              <span className="social-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="site-nav-section">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">
              My Site — Explore, experiment <span className="code-amp">&amp;&amp;</span> say hello
            </h2>
          </div>
          <div className="site-nav-grid">
            <SiteNavFadeLink to="/uses" className="site-nav-card tools-card">
              <div className="snc-tools-row">
                <span className="tool-pill">Zed</span>
                <span className="tool-pill">Claude Code</span>
                <span className="tool-pill">Ghostty</span>
                <span className="tool-pill">Arc</span>
              </div>
              <div className="snc-label">Uses</div>
              <div className="snc-sub">Check out my favorite tools</div>
            </SiteNavFadeLink>
            <SiteNavFadeLink to="/about" className="site-nav-card about-card">
              <div className="snc-avatar-wrap">
                <div className="snc-avatar">PN</div>
              </div>
              <div className="snc-label">Behind The Code</div>
              <div className="snc-sub">Journey, skills &amp; experience</div>
            </SiteNavFadeLink>
            <SiteNavFadeLink to="/guestbook" className="site-nav-card guestbook-card">
              <div className="snc-icon">{String.fromCodePoint(0x270d)}</div>
              <div className="snc-label">Guestbook</div>
              <div className="snc-sub">Let me know you were here</div>
            </SiteNavFadeLink>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-wings">
            <svg viewBox="0 0 200 80" fill="none" className="wings-svg">
              <path
                d="M100 40 C80 20,40 10,10 30 C40 25,70 35,100 40Z"
                fill="currentColor"
                opacity=".15"
              />
              <path
                d="M100 40 C80 20,40 10,10 30 C40 25,70 35,100 40Z"
                stroke="currentColor"
                strokeWidth=".5"
                fill="none"
              />
              <path
                d="M100 40 C120 20,160 10,190 30 C160 25,130 35,100 40Z"
                fill="currentColor"
                opacity=".15"
              />
              <path
                d="M100 40 C120 20,160 10,190 30 C160 25,130 35,100 40Z"
                stroke="currentColor"
                strokeWidth=".5"
                fill="none"
              />
              <circle cx={100} cy={40} r={3} fill="currentColor" />
            </svg>
          </div>
          <p className="cta-eyebrow">FROM CONCEPT TO CREATION</p>
          <h2 className="cta-heading">LET&apos;S MAKE IT HAPPEN!</h2>
          <Link to="/contact" className="cta-btn">
            Get In Touch
          </Link>
          <p className="cta-sub">
            I&apos;m available for full-time roles &amp; freelance projects.
            <br />I thrive on crafting dynamic web applications and delivering seamless user experiences.
          </p>
        </div>
      </section>
    </>
  );
}
