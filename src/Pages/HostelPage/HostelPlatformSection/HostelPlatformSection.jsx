import React from 'react'
import './HostelPlatformSection.css'
import { Link } from 'react-router-dom';
function HostelPlatformSection() {
  return (
    <div>
       <div className="pla-platform-section-2">
      <div className="pla-section-spacing">
        <div className="pla-container">
          {/* Section Heading */}
          <div className="pla-section-heading platform-heading">
            <div className="pla-c-sub-title-wrap">
              <div className="pla-c-sub-title">Key Features</div>
            </div>
            <div className="pla-common-title-wrap">
              <h1 className="pla-common-title">
                One platform for all the controls you need
              </h1>
            </div>
          </div>

          {/* Platform Layout */}
          <div className="pla-platform-layout">
            {/* Item 1 */}
            <div className="pla-platform-item-2">
              <div className="pla-platform-item-content">
                <div className="pla-platform-item-title-wrap">
                  <p className="pla-platform-item-title">Innovation Center</p>
                </div>
                <div className="pla-platform-item-text-wrap">
                  <p className="pla-platform-item-text">
                    Days, will period, don't often turn for were the
                    importance, some for indication at present not.
                  </p>
                </div>
              </div>
              <div className="pla-platform-item-thumb-wrap">
                <img
                  src="https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c33c0ce66b95131c440b_thumb-2.webp"
                  loading="lazy"
                  sizes="(max-width: 1578px) 100vw, 1578px"
                  srcSet="
                    https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c33c0ce66b95131c440b_thumb-2-p-500.webp 500w,
                    https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c33c0ce66b95131c440b_thumb-2-p-800.webp 800w,
                    https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c33c0ce66b95131c440b_thumb-2-p-1080.webp 1080w,
                    https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c33c0ce66b95131c440b_thumb-2.webp 1578w
                  "
                  alt="thumb-2"
                  className="pla-platform-item-thumb"
                />
              </div>
            </div>

            {/* Item 2 */}
            <div className="pla-platform-item-2">
              <div className="pla-platform-item-content">
                <div className="pla-platform-item-title-wrap">
                  <p className="pla-platform-item-title">Assistance for expansion</p>
                </div>
                <div className="pla-platform-item-text-wrap">
                  <p className="pla-platform-item-text">
                    Opposite think you on to result, to but as back a little
                    the and stash of characters she that theoretically
                  </p>
                </div>
              </div>
              <div className="pla-platform-item-thumb-wrap">
                <img
                  src="https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c37d85524cb450a65a83_thumb-3.webp"
                  loading="lazy"
                  sizes="(max-width: 1578px) 100vw, 1578px"
                  srcSet="
                    https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c37d85524cb450a65a83_thumb-3-p-500.webp 500w,
                    https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c37d85524cb450a65a83_thumb-3-p-800.webp 800w,
                    https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c37d85524cb450a65a83_thumb-3-p-1080.webp 1080w,
                    https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c37d85524cb450a65a83_thumb-3.webp 1578w
                  "
                  alt="thumb-3"
                  className="pla-platform-item-thumb"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pla-platform-layout-3">
            <div className="pla-platform-item-content-2">
              <div className="pla-platform-item-title-wrap-2">
                <p className="pla-platform-item-title-2">Continue to stay in contact</p>
              </div>
              <ul role="list" className="pla-platform-item-list-wrap">
                <li className="pla-platform-item-list">
                  Become one towards console the if seven world
                </li>
                <li className="pla-platform-item-list">
                  My asking overcome it o'clock he and first found day
                </li>
                <li className="pla-platform-item-list last">
                  Some my entirely the been without more to designer
                </li>
              </ul>
              <div className="pla-platform-item-btn-wrap">
                <Link to="/inner-pages/contact" className="pla-btn-wrap">
                  <div className="pla-btn-inner">
                    <div>Get Started</div>
                    <div className="pla-btn-icon-wrap">
                      <div className="pla-btn-icon">
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
                      <div className="pla-btn-icon">
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

            <div className="pla-platform-item-thumb-wrap-2">
              <div className="pla-platform-shape-wrap"></div>
              <img
                src="https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c66cf7843ad1d5ac0ac9_thumb-4.webp"
                loading="lazy"
                sizes="(max-width: 1893px) 100vw, 1893px"
                srcSet="
                  https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c66cf7843ad1d5ac0ac9_thumb-4-p-500.webp 500w,
                  https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c66cf7843ad1d5ac0ac9_thumb-4-p-800.webp 800w,
                  https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c66cf7843ad1d5ac0ac9_thumb-4-p-1080.webp 1080w,
                  https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c66cf7843ad1d5ac0ac9_thumb-4-p-1600.webp 1600w,
                  https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821c66cf7843ad1d5ac0ac9_thumb-4.webp 1893w
                "
                alt="thumb-4"
                className="pla-platform-item-thumb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HostelPlatformSection
