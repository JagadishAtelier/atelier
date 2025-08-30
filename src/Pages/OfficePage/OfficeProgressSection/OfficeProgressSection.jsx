import React from 'react'
import './OfficeProgressSection.css'
function OfficeProgressSection() {
  return (
    <div data-aos="zoom-in">
          <div className="prog-progress-section">
      <div className="prog-section-spacing">
        <div className="prog-container">
          <div className="prog-progress-layout">
            <div className="prog-progress-thumb-wrap">
              <img
                src="https://thumbs.dreamstime.com/b/project-management-chart-virtual-screen-schedule-timeline-124589563.jpg"
                loading="lazy"
                sizes="(max-width: 1641px) 100vw, 1641px"
                srcSet="
                https://thumbs.dreamstime.com/b/project-management-chart-virtual-screen-schedule-timeline-124589563.jpg 500w,
                https://thumbs.dreamstime.com/b/project-management-chart-virtual-screen-schedule-timeline-124589563.jpg 800w,
                https://thumbs.dreamstime.com/b/project-management-chart-virtual-screen-schedule-timeline-124589563.jpg 1080w,
                https://thumbs.dreamstime.com/b/project-management-chart-virtual-screen-schedule-timeline-124589563.jpg 1600w,
                https://thumbs.dreamstime.com/b/project-management-chart-virtual-screen-schedule-timeline-124589563.jpg 1641w
                "
                alt="Progress thumbnail"
                className="prog-progress-thumb"
              />
            </div>

            <div className="prog-section-heading progress-heading">
              <div className="prog-c-sub-title-wrap">
                <div className="prog-c-sub-title">Atelier Progress</div>
              </div>
              <div className="prog-common-title-wrap">
                <h1 className="prog-common-title">
                Track progress to strengthen governance & workflow
                </h1>
              </div>
              <div className="prog-progress-text-wrap">
                <p className="prog-features-text">
                Gain real-time visibility into office operations with clear reporting 
                    and monitoring tools.
                </p>
              </div>

              <ul className="prog-progress-list-wrap">
                <li className="prog-progress-list">
                Real-time performance dashboards for teams and projects
                </li>
                <li className="prog-progress-list">
                Compliance tracking and automated governance reporting
                </li>
                <li className="prog-progress-list last">
                Transparent progress reviews for better decision-making
                </li>
              </ul>

              <div className="prog-progress-btn-wrap">
                <a href="/inner-pages/contact" className="prog-btn-wrap">
                  <div className="prog-btn-inner">
                    <div>Get Started</div>
                    <div className="prog-btn-icon-wrap">
                      <div className="prog-btn-icon">
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
                      <div className="prog-btn-icon">
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OfficeProgressSection
