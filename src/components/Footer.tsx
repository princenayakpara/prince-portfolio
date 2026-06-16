import { Link } from 'react-router-dom';
import {
  FaGithub, FaLinkedinIn, FaYoutube, FaTwitter
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Extras.css';

type FooterProps = {
  variant?: 'full' | 'compact';
};

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/princenayakpara', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/prince-nayakpara-7846b337b/', label: 'LinkedIn' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@princenayakpara', label: 'YouTube' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/Prince27507/', label: 'LeetCode' },
  { icon: FaTwitter, href: 'https://x.com/Prince1252254', label: 'Twitter / X' },
];

export function Footer({ variant = 'full' }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {variant === 'full' && (
          <>
            {/* Social Icons Row */}
            <div className="footer-social-row">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={link.label}
                  >
                    <Icon style={{ width: '20px', height: '20px' }} />
                  </a>
                );
              })}
            </div>

            <p className="footer-bio">
              I&apos;m Prince Nayakpara — a full-stack developer and CS student. Thanks for visiting!
            </p>
            <div className="footer-links">
              <div className="footer-col">
                <h4>General</h4>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
              </div>
              <div className="footer-col">
                <h4>Sections</h4>
                <Link to="/#career">Career</Link>
                <Link to="/#skills">Skills</Link>
                <Link to="/#certificates">Certificates</Link>
                <Link to="/#hackathons">Hackathons</Link>
                <Link to="/#resume">Resume</Link>
              </div>
              <div className="footer-col">
                <h4>Connect</h4>
                <a href="https://github.com/princenayakpara" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/prince-nayakpara-7846b337b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a href="https://leetcode.com/u/Prince27507/" target="_blank" rel="noopener noreferrer">
                  LeetCode
                </a>
                <Link to="/contact">Contact</Link>
              </div>
              <div className="footer-col">
                <h4>More</h4>
                <Link to="/guestbook">Guestbook</Link>
                <Link to="/uses">Uses</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
              </div>
            </div>
          </>
        )}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Prince Nayakpara. All rights reserved</span>
          <span>
            <Link to="/privacy">Privacy Policy</Link> · <Link to="/terms">Terms of Use</Link>
          </span>
        </div>
        <p className="footer-made-with">
          Made with <span>React</span> + <span>Vite</span> · Deployed on <span>Vercel</span>
        </p>
      </div>
      <div className="marquee-bar">
        <div className="marquee-track">
          <span>
            OPEN TO WORK · OPEN TO WORK · OPEN TO WORK · OPEN TO WORK · OPEN TO WORK · OPEN TO WORK · OPEN TO WORK ·
            OPEN TO WORK ·{' '}
          </span>
        </div>
      </div>
    </footer>
  );
}
