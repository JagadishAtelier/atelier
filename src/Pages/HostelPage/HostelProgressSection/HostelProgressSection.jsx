import React from 'react'
import './HostelProgressSection.css'
function HostelProgressSection() {
  return (
    <div>
          <div className="prog-progress-section">
      <div className="prog-section-spacing">
        <div className="prog-container">
          <div className="prog-progress-layout">
            <div className="prog-progress-thumb-wrap">
              <img
                src="https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821d198c55246b0dd6546d4_thumb-5.webp"
                loading="lazy"
                sizes="(max-width: 1641px) 100vw, 1641px"
                srcSet="
                  https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821d198c55246b0dd6546d4_thumb-5-p-500.webp 500w,
                  https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821d198c55246b0dd6546d4_thumb-5-p-800.webp 800w,
                  https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821d198c55246b0dd6546d4_thumb-5-p-1080.webp 1080w,
                  https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821d198c55246b0dd6546d4_thumb-5-p-1600.webp 1600w,
                  https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821d198c55246b0dd6546d4_thumb-5.webp 1641w
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
                Track Progress & Monitor Hostel and Transport Efficiency
                </h1>
              </div>
              <div className="prog-progress-text-wrap">
                <p className="prog-features-text">
                Stay updated with real-time insights into hostel occupancy, 
                    mess management, and transport performance.
                </p>
              </div>

              <ul className="prog-progress-list-wrap">
                <li className="prog-progress-list">
                Real-time reports on hostel occupancy & room utilization
                </li>
                <li className="prog-progress-list">
                Attendance & route progress tracking for buses
                </li>
                <li className="prog-progress-list last">
                Data-driven analytics for performance & resource planning
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

export default HostelProgressSection
