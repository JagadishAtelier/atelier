import React from 'react'
import { Link } from 'react-router-dom';
function LibProductivitySection() {
  return (
    <div>
      <div className="prod-productivity-section" >
      <div className="prod-section-spacing">
        <div className="prod-container">
          <div className="prod-progress-layout-2">
            <div className="prod-section-heading progress-heading-2" data-aos="fade-right">
              <div className='prod-center-mob'>
                <div className="prod-c-sub-title-wrap">
                  <div className="prod-c-sub-title">Atelier Productivity</div>
                </div>
              </div>
              <div className="prod-common-title-wrap">
                <h1 className="prod-common-title">
                How Atelier boosts productivity in learning & library management
                </h1>
              </div>
              <div className="prod-progress-text-wrap">
                <p className="prod-features-text">
                Atelier streamlines academic workflows, automates routine tasks, 
                    and enhances collaboration so educators,
                </p>
              </div>
              <ul role="list" className="prod-progress-list-wrap">
                <li className="prod-progress-list">
                Automates borrowing, returns, and digital resource access
                </li>
                <li className="prod-progress-list">
                Reduces manual workload with centralized academic records
                </li>
                <li className="prod-progress-list last">
                Provides real-time analytics for data-driven decision-making
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
            <div className="prod-progress-thumb-wrap" data-aos="fade-left">
              <img
                src="https://egenius.in/wp-content/uploads/2025/07/Munshify-Blog-Image-97.webp"
                loading="lazy"
                alt="thumb-6"
                className="prod-progress-thumb"
                sizes="(max-width: 1641px) 100vw, 1641px"
                srcSet="
                https://egenius.in/wp-content/uploads/2025/07/Munshify-Blog-Image-97.webp   500w,
                https://egenius.in/wp-content/uploads/2025/07/Munshify-Blog-Image-97.webp   800w,
                https://egenius.in/wp-content/uploads/2025/07/Munshify-Blog-Image-97.webp 1080w,
                https://egenius.in/wp-content/uploads/2025/07/Munshify-Blog-Image-97.webp 1600w,
                https://egenius.in/wp-content/uploads/2025/07/Munshify-Blog-Image-97.webp       1641w
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

export default LibProductivitySection
