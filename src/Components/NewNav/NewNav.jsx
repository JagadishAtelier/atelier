import React,{useState,useEffect} from 'react'
import './NewNav.css'
import logo from '../../Assets/image/Atelier_technology_white logo.png'
import logo2 from '../../Assets/AST.png'
function NewNav() {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Detect mobile screen
        const checkMobile = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
      }, []);

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
    <div className="new-nav-header">
      <div className="new-nav-w-layout-blockcontainer new-nav-container position-relative new-nav-w-container">
        <div
          data-w-id="be61f925-d3a9-be49-f008-b802122495b1"
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className={`new-nav-navbar new-nav-w-nav  ${isWhiteBackground ? 'scrolled' : ''}`}
        >
        
                      {/* Navbar */}
                      <div className="new-nav-navbar-wrapper">
      {/* Logo */}
      <a href="/" className="new-nav-navbar-brand-header new-nav-w-nav-brand">
        <img
          src={isNotHome ? logo2 : scrolled ? logo2 : logo}
          loading="lazy"
          alt="Logo"
          className="new-nav-navbar-brand-header-logo"
          style={{
            transition: 'filter 0.3s ease', // smooth transition
          }}
        />
      </a>

      {/* Navigation Menu */}
      <nav role="navigation" className={`new-nav-nav-menu-wrapper new-nav-w-nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul role="list" className="new-nav-nav-menu new-nav-w-list-unstyled">
          {/* Dropdown */}
          <li className="new-nav-list-item"><a href="/" className="new-nav-nav-link">Home</a></li>
          <li className="new-nav-dropdown-list-item">
            <div
              className="new-nav-nav-dropdown new-nav-w-dropdown"
              onMouseEnter={!isMobile ? () => setOpenDropdown(true) : undefined}
              onMouseLeave={!isMobile ? () => setOpenDropdown(false) : undefined}
              onClick={isMobile ? () => setOpenDropdown(!openDropdown) : undefined}
            >
              <div
                className="new-nav-nav-dropdown-toggle new-nav-w-dropdown-toggle"
                role="button"
                tabIndex="0"
                aria-expanded={openDropdown}
              >
                <div className="nav-dropdown-icon w-icon-dropdown-toggle" />
                <div className="new-nav-menu-dropdown-text">all pages</div>
              </div>

              {/* Dropdown List */}
              {!isMobile && openDropdown && (
                <nav className="new-nav-nav-dropdown-list new-nav-w-dropdown-list">
                  <div className="new-nav-mega-menu">
                    <div className="new-nav-menu-item-list">
                      <div className="menu-items">
                        <a href="/features/admission" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Admission & Academics Management</a>
                        <a href="/features/students" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Student Engagement & Support</a>
                        <a href="/features/alumni" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Alumni & Placement Management</a>
                        <a href="/features/coe" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">COE & Advanced Reporting</a>
                        <a href="/features/survey" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Grievance & Survey Management</a>
                        <a href="/features/hostel" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Hostel & Transport Management</a>
                        <a href="/features/lib" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Learning & Library Management</a>
                        <a href="/features/office" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Office & Governance Management</a>
                        <a href="/features/portal" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Portal & Payment Management</a>
                        <a href="/features/rnd" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">R&D and Governance</a>
                      </div>
                    </div>
                  </div>
                </nav>
              )}
                  {isMobile && openDropdown && (
      <ul className="mobile-submenu">
        <li><a href="/features/admission">Admission & Academics Management</a></li>
        <li><a href="/features/students">Student Engagement & Support</a></li>
        <li><a href="/features/alumni">Alumni & Placement Management</a></li>
        <li><a href="/features/coe">COE & Advanced Reporting</a></li>
        <li><a href="/features/survey">Grievance & Survey Management</a></li>
        <li><a href="/features/hostel">Hostel & Transport Management</a></li>
        <li><a href="/features/lib">Learning & Library Management</a></li>
        <li><a href="/features/office">Office & Governance Management</a></li>
        <li><a href="/features/portal">Portal & Payment Management</a></li>
        <li><a href="/features/rnd">R&D and Governance</a></li>
      </ul>
    )}
            </div>
          </li>

          {/* Other menu items */}
          <li className="new-nav-list-item"><a href="/about" className="new-nav-nav-link">About</a></li>
          <li className="new-nav-list-item"><a href="/inner-pages/contact" className="new-nav-nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Signup Button */}
      <div className="new-nav-navbar-button">
        <a
          href="/inner-pages/contact"
          className="new-nav-button w-variant-7778ebb7-2c5c-cfaa-dc4f-71e962a09032 new-nav-w-inline-block"
        >
          <div className="new-nav-button-area">
            <div className="new-nav-button-text">Book Now</div>
            <div className="new-nav-button-icon-wrapper">
              <img
                src="https://cdn.prod.website-files.com/67fb5942fe2143f8740c18cc/67fb5942fe2143f8740c1f4d_arrow-right-02.svg"
                alt="Icon"
                className="new-nav-button-right-icon-normal"
              />
            </div>
          </div>
        </a>
      </div>
      <div
              className="mob-new-nav-menu-button mob-new-nav-w-nav-button"
              role="button"
              tabIndex="0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <i className="bi bi-x-lg" style={{ fontSize: "1.8rem" }}></i> // Close icon
              ) : (
                <i className="bi bi-list" style={{ fontSize: "2rem" }}></i> // Hamburger icon
              )}
            </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default NewNav
