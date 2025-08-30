import React from 'react'
import './ProductivitySection.css'
import { Link } from 'react-router-dom';
function ProductivitySection() {
  return (
    <div data-aos="zoom-in">
      <div className="prod-productivity-section">
      <div className="prod-section-spacing">
        <div className="prod-container">
          <div className="prod-progress-layout-2">
            <div className="prod-section-heading progress-heading-2">
              <div className='prod-center-mob'>
                <div className="prod-c-sub-title-wrap">
                  <div className="prod-c-sub-title">Atelier Productivity</div>
                </div>
              </div>
              <div className="prod-common-title-wrap">
                <h1 className="prod-common-title">
                How Our Software Boosts Productivity
                </h1>
              </div>
              <div className="prod-progress-text-wrap">
                <p className="prod-features-text">
                Our Student Engagement & Support software helps educational institutions streamline workflows,
                </p>
              </div>
              <ul role="list" className="prod-progress-list-wrap">
                <li className="prod-progress-list">
                Ensure students never miss deadlines or important updates.
                </li>
                <li className="prod-progress-list">
                Facilitate smooth communication between faculty, students, and support staff.
                </li>
                <li className="prod-progress-list last">
                Track student engagement, performance, and productivity trends.
                </li>
              </ul>
              <div className="prod-progress-btn-wrap">
                <Link to="/inner-pages/contact" className="prod-btn-wrap w-inline-block">
                  <div className="prod-btn-inner">
                    <div>Get Started</div>
                    <div className="prod-btn-icon-wrap">
                      <div className="prod-btn-icon">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4767 6.1664L6.00668 1.6964L7.18501 0.518066L13.6667 6.99973L7.18501 13.4814L6.00668 12.3031L10.4767 7.83307H0.333344V6.1664H10.4767Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="prod-btn-icon">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4767 6.1664L6.00668 1.6964L7.18501 0.518066L13.6667 6.99973L7.18501 13.4814L6.00668 12.3031L10.4767 7.83307H0.333344V6.1664H10.4767Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="prod-progress-thumb-wrap">
              <img
                src="https://cdn.prod.website-files.com/65afd8dc16873da38e2b5ecb/6601737e389fac869ac92183_2021_07_rsz_presentation-of-chart-yv5qcbg.jpeg"
                loading="lazy"
                alt="thumb-6"
                className="prod-progress-thumb"
                sizes="(max-width: 1641px) 100vw, 1641px"
                srcSet="
                https://cdn.prod.website-files.com/65afd8dc16873da38e2b5ecb/6601737e389fac869ac92183_2021_07_rsz_presentation-of-chart-yv5qcbg.jpeg   500w,
                https://cdn.prod.website-files.com/65afd8dc16873da38e2b5ecb/6601737e389fac869ac92183_2021_07_rsz_presentation-of-chart-yv5qcbg.jpeg   800w,
                https://cdn.prod.website-files.com/65afd8dc16873da38e2b5ecb/6601737e389fac869ac92183_2021_07_rsz_presentation-of-chart-yv5qcbg.jpeg 1080w,
                https://cdn.prod.website-files.com/65afd8dc16873da38e2b5ecb/6601737e389fac869ac92183_2021_07_rsz_presentation-of-chart-yv5qcbg.jpeg 1600w,
                https://cdn.prod.website-files.com/65afd8dc16873da38e2b5ecb/6601737e389fac869ac92183_2021_07_rsz_presentation-of-chart-yv5qcbg.jpeg        1641w
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductivitySection
