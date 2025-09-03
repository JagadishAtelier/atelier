import React from 'react'
function HostelProgressSection() {
  return (
    <div>
          <div className="prog-progress-section">
      <div className="prog-section-spacing">
        <div className="prog-container">
          <div className="prog-progress-layout">
            <div className="prog-progress-thumb-wrap" data-aos="fade-right">
              <img
                src="https://kvrssgroup.com/wp-content/uploads/2024/01/19-min-700x350.png"
                loading="lazy"
                sizes="(max-width: 1641px) 100vw, 1641px"
                srcSet="
                https://kvrssgroup.com/wp-content/uploads/2024/01/19-min-700x350.png 500w,
                https://kvrssgroup.com/wp-content/uploads/2024/01/19-min-700x350.png 800w,
                https://kvrssgroup.com/wp-content/uploads/2024/01/19-min-700x350.png 1080w,
                https://kvrssgroup.com/wp-content/uploads/2024/01/19-min-700x350.png 1600w,
                https://kvrssgroup.com/wp-content/uploads/2024/01/19-min-700x350.png 1641w
                "
                alt="Progress thumbnail"
                className="prog-progress-thumb"
              />
            </div>

            <div className="prog-section-heading progress-heading" data-aos="fade-left">
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
