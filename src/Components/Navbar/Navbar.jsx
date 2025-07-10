import React from 'react';
import './Navbar.css';
function Navbar() {
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
          className="navbar w-nav"
          style={{
            opacity: 1,
            borderColor: 'rgba(255, 255, 255, 0.08)',
            willChange: 'background',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          }}
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
                    src="https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82d406e2e36f6c00399f2_Logo%20Black.svg"
                    loading="lazy"
                    alt="logo"
                    className="brand-image"
                    style={{
                      willChange: 'filter',
                      filter: 'invert(100%)',
                    }}
                  />
                </a>
                <nav role="navigation" className="nav-menu w-nav-menu">
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
                        href="https://webflow.com/templates/designers/over-sight"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button w-button"
                      >
                        Get Template
                      </a>
                    </div>
                  </div>
                </nav>
                <div
                  className="menu-button w-nav-button"
                  aria-label="menu"
                  role="button"
                  tabIndex={0}
                  aria-controls="w-nav-overlay-0"
                  aria-haspopup="menu"
                  aria-expanded="false"
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
