import React from 'react';
import './AboutDashBoard.css';

function AboutDashBoard() {
  return (
    <div>
      <section className="section cta">
        <div className="w-layout-blockcontainer-cta cta-container w-container-cta">
          <div className="cta-wrapper">
            {/* Left Side */}
            <div className="cta-left-wrap">
              <h2
                data-w-id="ec4702fd-512c-47e9-8dfa-4ef466a8bb13"
                className="cta-title"
              >
                Finance Management for Modern Owners
              </h2>
              <div
                data-w-id="ec4702fd-512c-47e9-8dfa-4ef466a8bb15"
                className="cta-details"
              >
                Aliens delivers advanced Search & Ads relevance solutions powered
              </div>

              {/* CTA Button */}
              <div
                data-w-id="ec4702fd-512c-47e9-8dfa-4ef466a8bb17"
                className="cta-button-wrap"
              >
                <a
                  data-w-id="ec4702fd-512c-47e9-8dfa-4ef466a8bb18"
                  href="/inner-pages/contact"
                  className="cta-secondary-button w-inline-block"
                >
                  <div className="cta-secondary-btn-wrap">
                    <div className="cta-secondary-text-wrap">
                      <div className="cta-secondary-btn-text">Get Started</div>
                    </div>
                    <div className="cta-secondary-icon-wrap">
                      <img
                        src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/681cc09d12f97f72f483b28a_Arrow%20Icon%20(1).svg"
                        loading="lazy"
                        alt="Arrow Icon"
                        className="cta-secondary-btn-icon"
                      />
                    </div>
                  </div>
                  <div className="cta-secondary-btn-bg"></div>
                </a>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="cta-right-wrap">
              <img
                src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/681d638e074e278afa511688_e782726017ef2d2f28d133ec867cf550_Cta%20Image.webp"
                loading="lazy"
                data-w-id="ec4702fd-512c-47e9-8dfa-4ef466a8bb24"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                alt="Cta Image"
                srcSet="
                  https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/681d638e074e278afa511688_e782726017ef2d2f28d133ec867cf550_Cta%20Image-p-500.webp 500w,
                  https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/681d638e074e278afa511688_e782726017ef2d2f28d133ec867cf550_Cta%20Image-p-800.webp 800w,
                  https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/681d638e074e278afa511688_e782726017ef2d2f28d133ec867cf550_Cta%20Image-p-1080.webp 1080w,
                  https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/681d638e074e278afa511688_e782726017ef2d2f28d133ec867cf550_Cta%20Image.webp 1172w
                "
                className="cta-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDashBoard;
