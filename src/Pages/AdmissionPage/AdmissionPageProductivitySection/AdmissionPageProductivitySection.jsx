import React from 'react'
import { Link } from 'react-router-dom';
function AdmissionPageProductivitySection() {
  return (
    <div data-aos="zoom-in">
      <div className="prod-productivity-section">
      <div className="prod-section-spacing">
        <div className="prod-container">
          <div className="prod-progress-layout-2">
            <div className="prod-section-heading progress-heading-2">
              <div className='prod-center-mob'>
                <div className="prod-c-sub-title-wrap">
                  <div className="prod-c-sub-title">Admissions & Academics Productivity</div>
                </div>
              </div>
              <div className="prod-common-title-wrap">
                <h1 className="prod-common-title">
                Boost efficiency in managing admissions and academics
                </h1>
              </div>
              <div className="prod-progress-text-wrap">
                <p className="prod-features-text">
                Streamline your institution’s operations by automating manual tasks, reducing paperwork, and enabling faculty, students, and administrators to focus on what truly matters – learning and growth.
                </p>
              </div>
              <ul role="list" className="prod-progress-list-wrap">
                <li className="prod-progress-list">
                Simplify admissions with automated application processing and document verification
                </li>
                <li className="prod-progress-list">
                Enhance academic productivity through smart scheduling, attendance, and grading
                </li>
                <li className="prod-progress-list last">
                Gain insights with real-time dashboards and reports for faster decision-making
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
                src="https://www.iitms.co.in/higher-education-erp/img/Dashboard-screenshot-2.webp"
                loading="lazy"
                alt="thumb-6"
                className="prod-progress-thumb"
                sizes="(max-width: 1641px) 100vw, 1641px"
                srcSet="
                https://www.iitms.co.in/higher-education-erp/img/Dashboard-screenshot-2.webp   500w,
                https://www.iitms.co.in/higher-education-erp/img/Dashboard-screenshot-2.webp   800w,
                https://www.iitms.co.in/higher-education-erp/img/Dashboard-screenshot-2.webp 1080w,
                https://www.iitms.co.in/higher-education-erp/img/Dashboard-screenshot-2.webp 1600w,
                https://www.iitms.co.in/higher-education-erp/img/Dashboard-screenshot-2.webp 1641w
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

export default AdmissionPageProductivitySection
