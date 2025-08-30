import React from 'react';
import './SmartFeatures.css';
import { useEffect } from "react";
function SmartFeatures() {
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Rotation sensitivity
        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      });
    });
  }, []);

  return (
    <div style={{marginTop:"2%"}} data-aos="zoom-in">
      <section
        data-w-id="563f3494-b7b7-2e37-b2f7-2fb5d68984a4"
        className="section feature"
      >
        <div className="smart-containers centered">
          <div data-wf--section-header--variant="center" className="section-header-wrap">
            <div
              data-w-id="a0327130-8c70-bb87-5c9d-f673fbbdd23b"
              className="tag-wrap"
              style={{
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
                transformStyle: 'preserve-3d',
                opacity: 1,
              }}
            >
              <div className="tag" id="features">Features</div>
            </div>
            <div
              className="section-header"
              style={{
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
                transformStyle: 'preserve-3d',
                opacity: 1,
              }}
            >
              <h2 className="display-h2">Our Services Includes</h2>
            </div>
            <div className='text-center'>
            <p>Developing awesome website, process oriented automation (including software and hardware)that is better than your competitors. Provide guidance on taking web presence</p>
            </div>
          </div>

          <div className="feature-grid">
            <div className="smart-feature-wrap">
              {/* Card 1 */}
              <div
                data-wf--feature-card--variant="vertical"
                data-w-id="e92f7dce-e628-7416-c073-fb80acb64d6e"
                className="feature-card"
                style={{
                  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
                  transformStyle: 'preserve-3d',
                  opacity: 1,
                  willChange: 'transform',
                }}
              >
                <div className="feature-header">
                  <h3 className="display-h4">Business Administration Services</h3>
                  <div className="paragraph t---neutral-10">
                  Turning vision into action—with clarity, structure, and support to help your business grow and adapt in any market.
                  </div>
                </div>
                <img
                  src="https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/business.jpeg"
                  loading="lazy"
                  width="313"
                  alt="Chart"
                  sizes="(max-width: 479px) 100vw, 313px"
                  srcSet="
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/business.jpeg 500w,
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/business.jpeg 800w,
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/business.jpeg 976w"
                  className="feature-image"
                />
              </div>

              {/* Card 2 */}
              <div
                data-wf--feature-card--variant="vertical"
                data-w-id="e92f7dce-e628-7416-c073-fb80acb64d6e"
                className="feature-card"
                style={{
                  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
                  transformStyle: 'preserve-3d',
                  opacity: 1,
                  willChange: 'transform',
                }}
              >
                <div className="feature-header">
                  <h3 className="display-h4">Cloud Computing</h3>
                  <div className="paragraph t---neutral-10">
                  Transform your operations with cloud software—flexible, scalable, and cost-efficient. Pay only for what you use.
                  </div>
                </div>
                <img
                  src="https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/cloud.jpeg"
                  loading="lazy"
                  width="313"
                  alt="Chart"
                  sizes="313px"
                  srcSet="
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/cloud.jpeg 500w,
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/cloud.jpeg 800w,
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/cloud.jpeg 932w"
                  className="feature-image"
                />
              </div>

              {/* Card 3 */}
              <div
                data-wf--feature-card--variant="vertical"
                data-w-id="e92f7dce-e628-7416-c073-fb80acb64d6e"
                className="feature-card"
                style={{
                  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
                  transformStyle: 'preserve-3d',
                  opacity: 1,
                  willChange: 'transform',
                }}
              >
                <div className="feature-header">
                  <h3 className="display-h4">E-Commerce</h3>
                  <div className="paragraph t---neutral-10">
                  We create secure, scalable e-commerce solutions that drive growth and enhance your digital storefront.
                  </div>
                </div>
                <img
                  src="https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/ecommerce.jpeg"
                  loading="lazy"
                  width="313"
                  alt="Chart"
                  sizes="313px"
                  srcSet="
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/ecommerce.jpeg 500w,
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/ecommerce.jpeg 800w,
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/ecommerce.jpeg 927w"
                  className="feature-image"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="smart-feature-wrap _2">
              {/* Card 4 */}
              <div
                data-wf--feature-card--variant="horizontal"
                data-w-id="e92f7dce-e628-7416-c073-fb80acb64d6e"
                className="feature-card w-variant-cf55b21c-0f72-5bb5-a0ba-5f89ad39895f"
                style={{
                  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
                  transformStyle: 'preserve-3d',
                  opacity: 1,
                }}
              >
                <div className="feature-header w-variant-cf55b21c-0f72-5bb5-a0ba-5f89ad39895f">
                  <h3 className="display-h4">Technology Solutions</h3>
                  <div className="paragraph t---neutral-10">
                  Align your tech investment with growth and security. We guide your digital transformation with clarity and precision.
                  </div>
                </div>
                <img
                  src="https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/technology%20solution.jpeg"
                  loading="lazy"
                  width="313"
                  alt="Chart"
                  sizes="313px"
                  srcSet="
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/technology%20solution.jpeg 500w,
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/technology%20solution.jpeg 929w"
                  className="feature-image w-variant-cf55b21c-0f72-5bb5-a0ba-5f89ad39895f"
                />
              </div>

              {/* Card 5 */}
              <div
                data-wf--feature-card--variant="horizontal"
                data-w-id="e92f7dce-e628-7416-c073-fb80acb64d6e"
                className="feature-card w-variant-cf55b21c-0f72-5bb5-a0ba-5f89ad39895f"
                style={{
                  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
                  transformStyle: 'preserve-3d',
                  opacity: 1,
                }}
              >
                <div className="feature-header w-variant-cf55b21c-0f72-5bb5-a0ba-5f89ad39895f">
                  <h3 className="display-h4">Web Application</h3>
                  <div className="paragraph t---neutral-10">
                  Streamline operations and scale faster with powerful, flexible browser-based applications.
                  </div>
                </div>
                <img
                  src="https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/webapplication.jpeg"
                  loading="lazy"
                  width="313"
                  alt="Chart"
                  sizes="313px"
                  srcSet="
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/webapplication.jpeg 500w,
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/webapplication.jpeg 800w,
                  https://enovasolutions.com/sites/enovasolutions.com/files/images/icons/webapplication.jpeg 927w"
                  className="feature-image w-variant-cf55b21c-0f72-5bb5-a0ba-5f89ad39895f"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SmartFeatures;
