import React from 'react'
import { Link } from "react-router-dom";
function SurveyLaunchFaster() {
  return (
    <div data-aos="fade-right">
       <div className="lau-footer-component">
      <div className="lau-cta-section">
        <div className="lau-container">
          <div className="lau-section-heading cta-heading">
            <div className="lau-c-sub-title-wrap">
              <div className="lau-c-sub-title">Launch faster</div>
            </div>
            <div className="lau-common-title-wrap">
              <h1 className="lau-common-title">
                Ready to build something remarkable?
              </h1>
            </div>
            <div className="lau-cta-btn-wrap">
              <Link to="/inner-pages/contact" className="lau-btn-wrap">
                <div className="lau-btn-inner">
                  <div>Get Started</div>
                  <div className="lau-btn-icon-wrap">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="lau-btn-icon">
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
                    ))}
                  </div>
                </div>
              </Link>

              <Link to="/inner-pages/contact" className="lau-btn-wrap-3">
                <div className="lau-btn-inner-3">
                  <div>Book a demo</div>
                  <div className="lau-btn-icon-wrap">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="lau-btn-icon">
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
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SurveyLaunchFaster
