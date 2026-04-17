import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : undefined);

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, hash]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            PN<span className="logo-dot">.</span>
          </Link>
          
          <ul className="nav-links">
            <li><NavLink to="/" className={linkClass} end>Home</NavLink></li>
            <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
            <li><NavLink to="/projects" className={linkClass}>Work</NavLink></li>
            <li><Link to="/#career">Career</Link></li>
            <li><Link to="/#skills">Skills</Link></li>
            <li><Link to="/#certificates">Certs</Link></li>
            <li><Link to="/#hackathons">Hackathons</Link></li>
            <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          </ul>

          <div className="nav-right">
            <Link to="/contact" className="nav-cta">Let&apos;s Talk</Link>
            
            <button 
              className={`menu-toggle ${isOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="menu-bar"></span>
              <span className="menu-bar"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
        <div className="mobile-menu-inner">
          <ul className="mobile-nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Work</NavLink></li>
            <li><Link to="/#career">Career</Link></li>
            <li><Link to="/#skills">Skills</Link></li>
            <li><Link to="/#certificates">Certificates</Link></li>
            <li><Link to="/#hackathons">Hackathons</Link></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <Link to="/contact" className="mobile-cta" onClick={() => setIsOpen(false)}>
            Start a Project
          </Link>
        </div>
      </div>
    </>
  );
}
