import { Link, NavLink } from 'react-router-dom';

const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : undefined);

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          PN<span className="logo-dot">.</span>
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={linkClass}>
              Work
            </NavLink>
          </li>
          <li>
            <Link to="/#career">Career</Link>
          </li>
          <li>
            <Link to="/#skills">Skills</Link>
          </li>
          <li>
            <Link to="/#certificates">Certs</Link>
          </li>
          <li>
            <Link to="/#hackathons">Hackathons</Link>
          </li>
          <li>
            <Link to="/#resume">Resume</Link>
          </li>

          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
        <Link to="/contact" className="nav-cta">
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  );
}
