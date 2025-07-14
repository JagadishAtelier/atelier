import React,{useEffect,useState} from 'react';
import './Navbar.css';
import logo from '../../Assets/AST.png'
import { useLocation } from 'react-router-dom';
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500); // Change 100 to whatever height you want
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const isNotHome = location.pathname !== '/';
  const isWhiteBackground = scrolled || isNotHome;
  return (
    <div>
      <div className="fixed-nav">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className={`navbar w-nav ${isWhiteBackground ? 'scrolled' : ''}`}
        >
          <div className="container navbar-container">
            <div className="navbar-holder">
              <div className="navbar-container">
                <a
                  href="/"
                  aria-current="page"
                  className="brand w-nav-brand w--current"
                  aria-label="home"
                >
                  <img
                    src={logo}
                    loading="lazy"
                    alt="logo"
                    className="brand-image"
                    style={{
                      filter: isWhiteBackground ? 'none' : 'invert(100%)',
                    }}
                  />
                </a>
                <nav
  role="navigation"
  className={`nav-menu w-nav-menu ${isMenuOpen ? 'open' : ''}`}
>

                  <div className="nav-menu-link-holder">
                    <div className="nav-menu-link-container">
                      <div className="nav-links">
                        <a href="/" className="nav-link w-nav-link w--current" style={{ color: '#f5f4fd' }}>
                          Home
                        </a>
                        <a href="/features" className="nav-link w-nav-link" style={{ color: '#f5f4fd' }}>
                          Features
                        </a>
                        <a href="/about" className="nav-link w-nav-link" style={{ color: '#f5f4fd' }}>
                          About
                        </a>
                        <a href="/blog" className="nav-link w-nav-link" style={{ color: '#f5f4fd' }}>
                          Blog
                        </a>
                        <a href="/contact" className="nav-link w-nav-link" style={{ color: '#f5f4fd' }}>
                          Contact
                        </a>
                      </div>
                    </div>
                    <div className="nav-button-holder">
                      <a
                        href="/template"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button w-button"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </nav>
                <div
                  className="menu-button w-nav-button"
                  aria-label="menu"
                  role="button"
                  tabIndex={0}
                  aria-haspopup="menu"
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen(prev => !prev)}
                >
                  <div className="icon w-icon-nav-menu"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-nav-overlay" id="w-nav-overlay-0"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
