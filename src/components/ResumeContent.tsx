

/**
 * High-fidelity HTML Resume component.
 * Ported from prince_resume_hanuman_layout.html
 */
export function ResumeContent() {
  return (
    <div className="resume-content-wrapper">
      <style>{`
        .resume-content-wrapper {
          --black: #0a0a0a;
          --white: #fff;
          --gray: #555;
          --lgray: #999;
          --fd: 'Barlow Condensed', sans-serif;
          --fb: 'Barlow', sans-serif;
          --fm: 'IBM Plex Mono', monospace;
          background: #fff;
          color: #0a0a0a;
          font-family: var(--fb);
          font-size: 15.5px;
          line-height: 1.45;
          padding: 40px;
          max-width: 900px;
          margin: 0 auto;
        }

        .resume-header-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          border-bottom: 3px solid #0a0a0a;
          padding-bottom: 6px;
          margin-bottom: 6px;
        }
        .resume-name {
          font-family: var(--fd);
          font-size: 62px;
          font-weight: 900;
          letter-spacing: -1.5px;
          line-height: 1;
          text-transform: uppercase;
        }
        .resume-name span {
          font-weight: 400;
        }
        .resume-role {
          font-family: var(--fd);
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--gray);
          margin-top: 2px;
        }
        .resume-contact-block {
          text-align: right;
          font-family: var(--fm);
          font-size: 13.5px;
          color: var(--gray);
          line-height: 1.7;
        }
        .resume-ci {
          display: inline-block;
          width: 14px;
          text-align: center;
          margin-right: 4px;
          color: #0a0a0a;
        }

        .resume-links-bar {
          display: flex;
          border: 1.5px solid #0a0a0a;
          margin-bottom: 9px;
          overflow: hidden;
        }
        .resume-lp {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 6px 0;
          font-family: var(--fd);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          color: #0a0a0a;
          border-right: 1.5px solid #0a0a0a;
        }
        .resume-lp:last-child {
          border-right: none;
        }
        .resume-lp:hover {
          background: #0a0a0a;
          color: #fff;
        }
        .resume-lp svg {
          width: 13px;
          height: 13px;
        }

        .resume-summary {
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 8px;
          border-bottom: 1.5px solid #0a0a0a;
          padding-bottom: 4px;
        }
        .resume-summary b {
          font-family: var(--fd);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .resume-main-grid {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 0 16px;
        }
        .resume-col-left {
          border-right: 1.5px solid #0a0a0a;
          padding-right: 14px;
        }

        .resume-st {
          font-family: var(--fd);
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          border-bottom: 2px solid #0a0a0a;
          padding-bottom: 3px;
          margin-bottom: 6px;
          margin-top: 10px;
        }
        .resume-st:first-child,
        .resume-st.zt {
          margin-top: 0;
        }

        .resume-skill-row {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 1px 5px;
          margin-bottom: 2.5px;
          align-items: baseline;
        }
        .resume-sk-label {
          font-family: var(--fd);
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--gray);
          white-space: nowrap;
        }
        .resume-sk-vals {
          font-size: 13.5px;
        }

        .resume-edu-item {
          margin-bottom: 10px;
        }
        .resume-edu-school {
          font-family: var(--fd);
          font-size: 17px;
          font-weight: 700;
          text-transform: uppercase;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .resume-edu-year {
          font-family: var(--fm);
          font-size: 10.5px;
          color: var(--gray);
          font-weight: 400;
        }
        .resume-edu-deg {
          font-size: 12px;
          color: var(--gray);
        }
        .resume-edu-score {
          font-family: var(--fm);
          font-size: 11px;
          color: var(--lgray);
        }

        .resume-cg-name {
          font-family: var(--fd);
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--gray);
          margin-top: 8px;
          margin-bottom: 4px;
        }
        .resume-cl {
          list-style: none;
        }
        .resume-cl li {
          font-size: 13px;
          padding: 1.5px 0;
          color: var(--gray);
          display: flex;
          gap: 6px;
        }
        .resume-cl li a {
          text-decoration: none;
          color: inherit;
          transition: opacity 0.2s;
        }
        .resume-cl li a:hover {
          opacity: 0.75;
        }
        .resume-cl li::before {
          content: '•';
          color: #0a0a0a;
          flex-shrink: 0;
        }

        .resume-hl {
          list-style: none;
        }
        .resume-hl li {
          font-size: 14px;
          padding: 3px 0;
          display: flex;
          gap: 8px;
        }
        .resume-hl li::before {
          content: '■';
          font-size: 6px;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .resume-proj-item {
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #ddd;
        }
        .resume-proj-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .resume-proj-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }
        .resume-proj-name {
          font-family: var(--fd);
          font-size: 20px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        .resume-proj-type {
          font-family: var(--fm);
          font-size: 11.5px;
          color: var(--gray);
          letter-spacing: 0.5px;
        }
        .resume-proj-sub {
          font-size: 15px;
          color: var(--gray);
          font-style: italic;
          margin-bottom: 4px;
        }
        .resume-proj-links {
          display: flex;
          gap: 12px;
          margin-bottom: 6px;
        }
        .resume-pl {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: var(--fd);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none;
          color: #0a0a0a;
          border-bottom: 1.5px solid #0a0a0a;
        }
        .resume-pl svg {
          width: 11px;
          height: 11px;
        }
        .resume-pb {
          list-style: none;
          padding: 0;
        }
        .resume-pb li {
          font-size: 14.5px;
          padding: 1.5px 0;
          display: flex;
          gap: 8px;
        }
        .resume-pb li::before {
          content: '•';
          font-size: 14px;
          flex-shrink: 0;
          line-height: 1.4;
        }

        .resume-clone-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0 12px;
        }
        .resume-cct {
          font-family: var(--fd);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border-bottom: 1px solid #ddd;
          padding-bottom: 3px;
          margin-bottom: 6px;
        }
        .resume-ccl {
          list-style: none;
        }
        .resume-ccl li {
          font-size: 13px;
          color: var(--gray);
          padding: 1.5px 0;
          display: flex;
          gap: 6px;
        }
        .resume-ccl li::before {
          content: '•';
          color: #0a0a0a;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .resume-content-wrapper {
            padding: 20px;
          }
          .resume-header-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .resume-contact-block {
            text-align: left;
            margin-top: 10px;
          }
          .resume-main-grid {
            grid-template-columns: 1fr;
          }
          .resume-col-left {
            border-right: none;
            border-bottom: 1.5px solid #0a0a0a;
            padding-right: 0;
            padding-bottom: 20px;
            margin-bottom: 20px;
          }
          .resume-links-bar {
            flex-wrap: wrap;
          }
          .resume-lp {
            flex: 1 0 45%;
            border-bottom: 1.5px solid #0a0a0a;
          }
          .resume-lp:nth-child(even) {
            border-right: none;
          }
          .resume-clone-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="resume-header-top">
        <div>
          <div className="resume-name">PRINCE <span>NAYAKPARA</span></div>
          <div className="resume-role">Full Stack Developer</div>
        </div>
        <div className="resume-contact-block">
          <div><span className="resume-ci">✆</span>+91 94099 66883</div>
          <div><span className="resume-ci">✉</span>princenayakpara@gmail.com</div>
          <div><span className="resume-ci">⊙</span>Kalol, Gujarat</div>
        </div>
      </div>

      <div className="resume-links-bar">
        <a href="https://www.linkedin.com/in/prince-nayakpara-7846b337b/" target="_blank" rel="noopener noreferrer" className="resume-lp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          LinkedIn
        </a>
        <a href="https://github.com/princenayakpara" target="_blank" rel="noopener noreferrer" className="resume-lp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          GitHub
        </a>
        <a href="https://leetcode.com/u/Prince27507/" target="_blank" rel="noopener noreferrer" className="resume-lp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          LeetCode
        </a>
        <a href="https://princenayakpara-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="resume-lp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          Portfolio
        </a>
        <a href="https://www.youtube.com/@princenayakpara" target="_blank" rel="noopener noreferrer" className="resume-lp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.94C18.88 4 12 4 12 4s-6.88 0-8.6.48a2.78 2.78 0 0 0-1.94 1.94C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 1.94c1.72.48 8.6.48 8.6.48s6.88 0 8.6-.48a2.78 2.78 0 0 0 1.94-1.94C23 15.86 23 12 23 12s0-3.86-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
          YouTube
        </a>
      </div>

      <div className="resume-summary">
        <b>Summary:</b> Full Stack Developer skilled in MERN stack and AI/ML applications, currently pursuing B.Tech in Computer Science at Swaminarayan University. Experienced in building scalable web apps, REST APIs, and real-time systems using React, Node.js, MongoDB, FastAPI, and Python. Developed impactful projects including an AI PC Guardian, DSA visualizer, neural network from scratch, and India-wide postal explorer. Active hackathon participant — Top 15% on LeetCode globally.
      </div>

      <div className="resume-main-grid">
        <div className="resume-col-left">
          <div className="resume-st">Skills</div>
          <div className="resume-skill-row"><span className="resume-sk-label">Programming:</span><span className="resume-sk-vals">JavaScript, Python, C++, Java</span></div>
          <div className="resume-skill-row"><span className="resume-sk-label">Frontend:</span><span className="resume-sk-vals">React.js, Next.js, Tailwind CSS, Flutter</span></div>
          <div className="resume-skill-row"><span className="resume-sk-label">Backend:</span><span className="resume-sk-vals">Node.js, Express.js, FastAPI</span></div>
          <div className="resume-skill-row"><span className="resume-sk-label">Databases:</span><span className="resume-sk-vals">MongoDB, PostgreSQL, MySQL, Redis</span></div>
          <div className="resume-skill-row"><span className="resume-sk-label">Tools:</span><span className="resume-sk-vals">Git, Docker, Vercel, VS Code</span></div>
          <div className="resume-skill-row"><span className="resume-sk-label">Concepts:</span><span className="resume-sk-vals">DSA, OS, DBMS, System Design, JWT, REST</span></div>

          <div className="resume-st">Education</div>
          <div className="resume-edu-item">
            <div className="resume-edu-school">Swaminarayan University <span className="resume-edu-year">2025–29</span></div>
            <div className="resume-edu-deg">B.Tech in Computer Science</div>
            <div className="resume-edu-score">Pursuing</div>
          </div>
          <div className="resume-edu-item">
            <div className="resume-edu-school">Nirmal Science School <span className="resume-edu-year">2024</span></div>
            <div className="resume-edu-deg">12th Science, Morbi</div>
            <div className="resume-edu-score">78%</div>
          </div>
          <div className="resume-edu-item">
            <div className="resume-edu-school">Nirmal Vidhyalayi <span className="resume-edu-year">2022</span></div>
            <div className="resume-edu-deg">10th Standard, Morbi</div>
            <div className="resume-edu-score">92.87%</div>
          </div>

          <div className="resume-st">Certificates</div>
          <div className="resume-cg-name">Core Courses:</div>
          <ul className="resume-cl">
            <li><a href="https://www.kaggle.com/learn/certification/princenayakpara/python" target="_blank" rel="noopener noreferrer">Python | Kaggle</a></li>
            <li><a href="https://www.kaggle.com/learn/certification/princenayakpara/intro-to-machine-learning" target="_blank" rel="noopener noreferrer">Intro to Machine Learning | Kaggle</a></li>
            <li><a href="https://www.outskill.com/certificates/generative-ai" target="_blank" rel="noopener noreferrer">Generative AI Mastermind | Outskill</a></li>
            <li><a href="https://www.sololearn.com/certificates/course/en/Introduction-to-C++" target="_blank" rel="noopener noreferrer">Introduction to C++ | SoloLearn</a></li>
            <li><a href="https://www.sololearn.com/certificates/course/en/C-Intermediate" target="_blank" rel="noopener noreferrer">C Intermediate | SoloLearn</a></li>
          <div className="resume-cg-name">Hackathon Certificates:</div>
          <ul className="resume-cl">
            <li><a href="#" target="_blank" rel="noopener noreferrer">Big Code Challenge 2026</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Code Clash Elan &amp; nVision | IIT Hyderabad</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">K Hacks 3.0 | Anna University</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Odoo × Adani University Hackathon '26</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Doppelganger Build Sprint | OpenPools</a></li>
          </ul>
          <div className="resume-st">Honors</div>
          <ul className="resume-hl">
            <li>Solved 70+ DSA problems on LeetCode; Top 15% globally</li>
            <li>6+ working projects with real-world impact</li>
            <li>Round 1 Qualifier — Big Code Challenge 2026</li>
          </ul>
        </div>

        <div className="resume-col-right">
          <div className="resume-st zt">Projects</div>
          <div className="resume-proj-item">
            <div className="resume-proj-header">
              <span className="resume-proj-name">AlgoNexus</span>
              <span className="resume-proj-type">React · JavaScript · DSA | 2025</span>
            </div>
            <div className="resume-proj-sub">Interactive DSA Learning &amp; Visualization Platform</div>
            <div className="resume-proj-links">
              <a href="https://algo-nexus-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className="resume-pl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Live Demo
              </a>
              <a href="https://github.com/princenayakpara/AlgoNexus" target="_blank" rel="noopener noreferrer" className="resume-pl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            </div>
            <ul className="resume-pb">
              <li>Built interactive platform with step-by-step algorithm animation for sorting, searching, and graph traversal algorithms.</li>
              <li>Designed fully responsive UI deployed on Vercel; enhanced DSA conceptual understanding and learner engagement.</li>
            </ul>
          </div>

          <div className="resume-proj-item">
            <div className="resume-proj-header">
              <span className="resume-proj-name">AutoSense-X</span>
              <span className="resume-proj-type">Python · FastAPI · React · Flutter | 2026</span>
            </div>
            <div className="resume-proj-sub">AI-Powered PC Guardian — System Monitoring, Optimization &amp; Security</div>
            <div className="resume-proj-links">
              <a href="https://github.com/princenayakpara/AutoSense-X" target="_blank" rel="noopener noreferrer" className="resume-pl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            </div>
            <ul className="resume-pb">
              <li>Full-stack AI system guardian with Python/FastAPI backend, React frontend, and Flutter mobile app for real-time PC monitoring.</li>
              <li>Integrated IsolationForest + LSTM models for failure prediction, AI malware scanning, voice assistant, and offline fallback mode.</li>
              <li>20+ REST API endpoints — system health, process management, security, JWT + Google OAuth, and AI-generated PDF reports.</li>
            </ul>
          </div>

          <div className="resume-proj-item">
            <div className="resume-proj-header">
              <span className="resume-proj-name">NeuralArchitect</span>
              <span className="resume-proj-type">Python · ML · Neural Networks | 2025</span>
            </div>
            <div className="resume-proj-sub">Neural Network Built from Scratch — No External ML Libraries</div>
            <div className="resume-proj-links">
              <a href="https://github.com/princenayakpara/NeuralArchitect" target="_blank" rel="noopener noreferrer" className="resume-pl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            </div>
            <ul className="resume-pb">
              <li>Implemented forward/backpropagation, activation functions, and loss optimization entirely in pure Python with no ML libraries.</li>
              <li>Integrated Adam optimizer and dropout regularization to prevent overfitting; deepened understanding of ML internals.</li>
            </ul>
          </div>

          <div className="resume-proj-item">
            <div className="resume-proj-header">
              <span className="resume-proj-name">Deployflow</span>
              <span className="resume-proj-type">DevOps · CI/CD · Docker | 2025</span>
            </div>
            <div className="resume-proj-sub">Automated Deployment Pipeline</div>
            <div className="resume-proj-links">
              <a href="https://client-omega-olive-79.vercel.app/" target="_blank" rel="noopener noreferrer" className="resume-pl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Live Demo
              </a>
              <a href="https://github.com/princenayakpara/Deployflow" target="_blank" rel="noopener noreferrer" className="resume-pl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            </div>
            <ul className="resume-pb">
              <li>Built automated CI/CD pipeline for build, test, and deployment; containerized apps with Docker for consistent environments.</li>
              <li>Reduced deployment time and improved reliability through end-to-end automation across multiple deployment environments.</li>
            </ul>
          </div>

          <div className="resume-proj-item">
            <div className="resume-proj-header">
              <span className="resume-proj-name">PINAtlas</span>
              <span className="resume-proj-type">MERN · MongoDB Atlas | 2025</span>
            </div>
            <div className="resume-proj-sub">All India PIN Code Explorer — 154,000+ Post Offices</div>
            <div className="resume-proj-links">
              <a href="https://pin-atlas-vert.vercel.app/" target="_blank" rel="noopener noreferrer" className="resume-pl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Live Demo
              </a>
              <a href="https://github.com/princenayakpara/PINAtlas" target="_blank" rel="noopener noreferrer" className="resume-pl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            </div>
            <ul className="resume-pb">
              <li>Full-stack MERN app to explore 154,000+ Indian post offices with filtering, search, charts, and CSV export.</li>
              <li>10 REST API endpoints with MongoDB Atlas indexing; cascading dropdowns, debounced search, and interactive bar/pie charts.</li>
            </ul>
          </div>

          <div className="resume-st">Frontend | Clone &amp; Mini Projects</div>
          <div className="resume-clone-grid">
            <div>
              <div className="resume-cct">DSA / Visualizers</div>
              <ul className="resume-ccl">
                <li>Sorting Visualizer</li>
                <li>Pathfinding Visualizer</li>
                <li>BST Demo</li>
                <li>Stack &amp; Queue</li>
              </ul>
            </div>
            <div>
              <div className="resume-cct">Mini Games</div>
              <ul className="resume-ccl">
                <li>Tic-Tac-Toe</li>
                <li>Memory Card</li>
                <li>Color Guess</li>
                <li>Whack a Mole</li>
              </ul>
            </div>
            <div>
              <div className="resume-cct">API Projects</div>
              <ul className="resume-ccl">
                <li>Weather Dashboard</li>
                <li>News Feed</li>
                <li>Meals Explorer</li>
                <li>Fake Store</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
