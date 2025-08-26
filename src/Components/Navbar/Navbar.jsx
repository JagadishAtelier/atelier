import React,{useEffect,useState} from 'react';
import './Navbar.css';
import logo from '../../Assets/AST.png'
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const closeTimeout = useRef(null);


  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current); // cancel pending close
    }
    setIsFeaturesOpen(true);
  };

  const handleMouseLeave = () => {
    // wait 5 seconds before closing
    closeTimeout.current = setTimeout(() => {
      setIsFeaturesOpen(false);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
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
                      filter: isWhiteBackground ? 'none' : '',
                    }}
                  />
                </a>
                <nav
  role="navigation"
  className='nav-menu w-nav-menu'
>

                  <div className="nav-menu-link-holder">
                    <div className="nav-menu-link-container">
                      <div className="nav-links">
                        <a href="/" className={`nav-link w-nav-link ${location.pathname === '/' ? 'active' : ''}`} style={{ color: '#f5f4fd' }}>
                          Home
                        </a>
                        <div 
  className="features-wrapper"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <div className="nav-link w-nav-link features-link">
    Features
    <i className={`bi bi-chevron-down arrow-icon ${isFeaturesOpen ? "rotate" : ""}`}></i>
  </div>

  {isFeaturesOpen && (
    <div className="dropdown-menu">
      <a href="/features/admission" className="dropdown-item">Admission & Academics Management</a>
      <a href="/features/students" className="dropdown-item">Student Engagement & Support</a>
    </div>
  )}
</div>

                        <a href="/about" className={`nav-link w-nav-link ${location.pathname === '/about' ? 'active' : ''}`} style={{ color: '#f5f4fd' }}>
                          About
                        </a>
                        <a href="/inner-pages/contact" className={`nav-link w-nav-link ${location.pathname === '/inner-pages/contact' ? 'active' : ''}`} style={{ color: '#f5f4fd' }}>
                          Contact
                        </a>
                      </div>
                    </div>
                    <div className="nav-button-holder">
                      <a
                        href="/inner-pages/contact"
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
                {isMenuOpen && (
          <div className="mobile-nav-menu">
            <a href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="/features" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="/inner-pages/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="/inner-pages/contact" className="mobile-nav-button" onClick={() => setIsMenuOpen(false)}>Book Now</a>
          </div>
        )}
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
