import React from 'react'
import './OfficeProductivitySection.css'
import { Link } from 'react-router-dom';
function OfficeProductivitySection() {
  return (
    <div>
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
                How We Drive Office Productivity & Governance
                </h1>
              </div>
              <div className="prod-progress-text-wrap">
                <p className="prod-features-text">
                Improve operational efficiency and foster transparency with tools 
                    designed to automate governance processes
                </p>
              </div>
              <ul role="list" className="prod-progress-list-wrap">
                <li className="prod-progress-list">
                Automated workflow & approval pipelines to reduce delays
                </li>
                <li className="prod-progress-list">
                Centralized dashboards for governance, compliance, and reporting
                </li>
                <li className="prod-progress-list last">
                Collaboration tools to streamline meetings and decision-making
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
                src="https://modulardata.co.uk/wp-content/uploads/2024/09/how-to-improve-public-sector-productivity-and-innovation-bring-in-the-smes-feature.jpeg"
                loading="lazy"
                alt="thumb-6"
                className="prod-progress-thumb"
                sizes="(max-width: 1641px) 100vw, 1641px"
                srcSet="
                https://modulardata.co.uk/wp-content/uploads/2024/09/how-to-improve-public-sector-productivity-and-innovation-bring-in-the-smes-feature.jpeg   500w,
                https://modulardata.co.uk/wp-content/uploads/2024/09/how-to-improve-public-sector-productivity-and-innovation-bring-in-the-smes-feature.jpeg   800w,
                https://modulardata.co.uk/wp-content/uploads/2024/09/how-to-improve-public-sector-productivity-and-innovation-bring-in-the-smes-feature.jpeg 1080w,
                https://modulardata.co.uk/wp-content/uploads/2024/09/how-to-improve-public-sector-productivity-and-innovation-bring-in-the-smes-feature.jpeg 1600w,
                https://modulardata.co.uk/wp-content/uploads/2024/09/how-to-improve-public-sector-productivity-and-innovation-bring-in-the-smes-feature.jpeg        1641w
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

export default OfficeProductivitySection
