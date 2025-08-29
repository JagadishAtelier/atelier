import React,{useState} from 'react'
import './NewNav.css'
function NewNav() {
    const [openDropdown, setOpenDropdown] = useState(false);
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
          className="new-nav-navbar new-nav-w-nav"
        >
        
                      {/* Navbar */}
                      <div className="new-nav-navbar-wrapper">
      {/* Logo */}
      <a href="/home-01" className="new-nav-navbar-brand-header new-nav-w-nav-brand">
        <img
          src="https://cdn.prod.website-files.com/67fb5942fe2143f8740c18cc/67fb5942fe2143f8740c1f4e_logo.svg"
          loading="lazy"
          alt="Logo"
          className="new-nav-navbar-brand-header-logo"
        />
      </a>

      {/* Navigation Menu */}
      <nav role="navigation" className="new-nav-nav-menu-wrapper new-nav-w-nav-menu">
        <ul role="list" className="new-nav-nav-menu new-nav-w-list-unstyled">
          {/* Dropdown */}
          <li className="new-nav-list-item"><a href="/" className="new-nav-nav-link">Home</a></li>
          <li className="new-nav-dropdown-list-item">
            <div
              className="new-nav-nav-dropdown new-nav-w-dropdown"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
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
              {openDropdown && (
                <nav className="new-nav-nav-dropdown-list new-nav-w-dropdown-list">
                  <div className="new-nav-mega-menu">
                    <div className="new-nav-menu-item-list">
                      <div className="menu-items">
                        <a href="/features/admission" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Admission & Academics Management</a>
                        <a href="/features/students" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Student Engagement & Support</a>
                        <a href="/features/alumni" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Alumni & Placement Management</a>
                        <a href="/features/coe" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">COE & Advanced Reporting</a>
                        <a href="/features/survey" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Grievance & Survey Management</a>
                        <a href="/company" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Hostel & Transport Management</a>
                        <a href="/features" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Learning & Library Management</a>
                        <a href="/features" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Office & Governance Management</a>
                        <a href="/features" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">Portal & Payment Management</a>
                        <a href="/features" className="new-nav-nav-dropdown-link new-nav-w-dropdown-link">R&D and Governance</a>
                      </div>
                    </div>
                  </div>
                </nav>
              )}
            </div>
          </li>

          {/* Other menu items */}
          <li className="new-nav-list-item"><a href="/company" className="new-nav-nav-link">Contact</a></li>
          <li className="new-nav-list-item"><a href="/pricing-01" className="new-nav-nav-link">pricing</a></li>
        </ul>
      </nav>

      {/* Signup Button */}
      <div className="new-nav-navbar-button">
        <a
          href="/sign-up"
          className="new-nav-button w-variant-7778ebb7-2c5c-cfaa-dc4f-71e962a09032 new-nav-w-inline-block"
        >
          <div className="new-nav-button-area">
            <div className="new-nav-button-text">SignUp</div>
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

      {/* Mobile Menu Button */}
      <div className="new-nav-menu-button new-nav-w-nav-button" role="button" tabIndex="0">
        <div className="new-nav-menu-button-icon">
          {/* You can replace with react-lottie or svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 740 530"
            width="30"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="40"
              d="M0 100 H740 M0 265 H740 M0 430 H740"
              stroke="black"
            />
          </svg>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default NewNav
