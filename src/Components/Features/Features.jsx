import React from 'react'
import './Features.css'

function Features() {
  return (
    <section className="section easy">
      <div className="w-layout-blockcontainer containers w-container">
        <div className="easy-wrapper">
          <div className="easy-top-wrap">
            <h2
              data-w-id="52b9eeaa-a1d3-a444-3a61-9b646aa1912b"
              style={{ opacity: 1 }}
              className="easy-title"
            >
              New Features Designed to Make Renting Easy
            </h2>
            <p
              data-w-id="52b9eeaa-a1d3-a444-3a61-9b646aa1912d"
              style={{ opacity: 1 }}
              className="easy-details"
            >
              AI delivers advanced Search &amp; Ads relevance solutions powered by world-class
              experts in search, recommendation, and machine learning.
            </p>
          </div>

          <div className="easy-wrap">
            <div className="easy-top-grid-wrap">

              {/* Feature Card 1 */}
              <div
                data-w-id="52b9eeaa-a1d3-a444-3a61-9b646aa1914d"
                style={{ opacity: 1 }}
                className="easy-item-wrap"
              >
                <div className="easy-image-wrap _01">
                  <div
                    data-w-id="6eb28c92-7adb-585e-7358-5438dc2b7f6c"
                    data-is-ix2-target="1"
                    className="lottie"
                    data-animation-type="lottie"
                    data-src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/685ede9ad47ecba278c234d8_data.json"
                    data-loop="0"
                    data-direction="1"
                    data-autoplay="0"
                    data-renderer="svg"
                    data-default-duration="0"
                    data-duration="3.0166666666666666"
                  ></div>
                </div>
                <div className="easy-item-details-wrap">
                  <div className="easy-item-title">Advance Analysic</div>
                  <p className="easy-item-details">
                    Smarter Search. Sharper Ads. Powered by AI and the best minds in machine learning.
                  </p>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div
                data-w-id="52b9eeaa-a1d3-a444-3a61-9b646aa19155"
                style={{ opacity: 1 }}
                className="easy-item-wrap"
              >
                <div className="easy-image-wrap _02">
                  <div
                    className="feature-lottie-ii"
                    data-w-id="13e4e5b2-1eef-e416-7eaf-71b6e1d10aaf"
                    data-animation-type="lottie"
                    data-src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/685ee5a620a5accb70118091_data.json"
                    data-loop="0"
                    data-direction="1"
                    data-autoplay="1"
                    data-is-ix2-target="0"
                    data-renderer="svg"
                    data-default-duration="0"
                    data-duration="0"
                  ></div>
                  <img
                    src="https://cdn.prod.website-files.com/placeholder.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="easy-item-details-wrap">
                  <div className="easy-item-title">Top Security</div>
                  <p className="easy-item-details">
                    Industry-leading protection for your data and systems. Encrypted, monitored, and
                    built for trust.
                  </p>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div
                id="w-node-_52b9eeaa-a1d3-a444-3a61-9b646aa1915d-0e5ef413"
                data-w-id="52b9eeaa-a1d3-a444-3a61-9b646aa1915d"
                style={{ opacity: 1 }}
                className="easy-item-wrap"
              >
                <div className="easy-image-wrap _03">
                  <img
                    src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/68695e1aaa59a5cd6d692721_Feature%20Images.png"
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 840px"
                    srcSet="
                      https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/68695e1aaa59a5cd6d692721_Feature%20Images-p-500.png 500w,
                      https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/68695e1aaa59a5cd6d692721_Feature%20Images.png       840w
                    "
                    alt=""
                  />
                </div>
                <div className="easy-item-details-wrap">
                  <div className="easy-item-title">Advance Integrations</div>
                  <p className="easy-item-details">
                    Unlock automation with simple connections. Expand functionality with flexible APIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="easy-btm-grid-wrap">

              {/* Bottom Feature 1 */}
              <div
                data-w-id="52b9eeaa-a1d3-a444-3a61-9b646aa1913d"
                style={{ opacity: 1 }}
                className="easy-single-wrap _01"
              >
                <div className="easy-single-image"></div>
                <div className="easy-single-details-wrap">
                  <div className="easy-item-title">All-in-One Dashboard</div>
                  <p className="easy-item-details">
                    Manage everything from one centralized hub. Simplify workflows and stay in control.
                  </p>
                </div>
              </div>

              {/* Bottom Feature 2 */}
              <div
                data-w-id="52b9eeaa-a1d3-a444-3a61-9b646aa19144"
                style={{ opacity: 1 }}
                className="easy-single-wrap"
              >
                <div className="easy-single-image">
                  <img
                    src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/682187838ced6b2225c3c639_Easy%20Single%20Image.svg"
                    loading="lazy"
                    alt="Easy Single Image"
                    className="easy-single-item-image"
                  />
                </div>
                <div className="easy-single-details-wrap _1">
                  <div className="easy-item-title">All in You’re control</div>
                  <p className="easy-item-details">
                    Complete flexibility to manage every detail. You steer the process, your way.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
