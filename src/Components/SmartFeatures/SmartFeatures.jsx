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
    <div style={{marginTop:"10%"}}>
      <section
        id="feature"
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
              <div className="tag">Features</div>
            </div>
            <div
              className="section-header"
              style={{
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
                transformStyle: 'preserve-3d',
                opacity: 1,
              }}
            >
              <h2 className="display-h2">Streamline Finances with Smart Features</h2>
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
                  <h3 className="display-h4">Real-Time Analytics</h3>
                  <div className="paragraph t---neutral-10">
                    Monitor your finances live with clear, intuitive dashboards.
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b6_5f6509a0242b30f88806aa1eabfed0c2_Asset%2039.png"
                  loading="lazy"
                  width="313"
                  alt="Chart"
                  sizes="(max-width: 479px) 100vw, 313px"
                  srcSet="
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b6_5f6509a0242b30f88806aa1eabfed0c2_Asset%2039-p-500.png 500w,
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b6_5f6509a0242b30f88806aa1eabfed0c2_Asset%2039-p-800.png 800w,
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b6_5f6509a0242b30f88806aa1eabfed0c2_Asset%2039.png 976w"
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
                  <h3 className="display-h4">Automated Reports</h3>
                  <div className="paragraph t---neutral-10">
                    Generate summaries instantly—no manual work needed.
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b5_9803be50bc139999f06bc74eaf96a654_Asset%2038.png"
                  loading="lazy"
                  width="313"
                  alt="Chart"
                  sizes="313px"
                  srcSet="
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b5_9803be50bc139999f06bc74eaf96a654_Asset%2038-p-500.png 500w,
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b5_9803be50bc139999f06bc74eaf96a654_Asset%2038-p-800.png 800w,
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b5_9803be50bc139999f06bc74eaf96a654_Asset%2038.png 932w"
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
                  <h3 className="display-h4">Smart Budgeting</h3>
                  <div className="paragraph t---neutral-10">
                    Plan and adjust with AI-powered budget suggestions.
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b4_156cd028c9017d98ee244eda00843995_Asset%2037.png"
                  loading="lazy"
                  width="313"
                  alt="Chart"
                  sizes="313px"
                  srcSet="
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b4_156cd028c9017d98ee244eda00843995_Asset%2037-p-500.png 500w,
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b4_156cd028c9017d98ee244eda00843995_Asset%2037-p-800.png 800w,
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b4_156cd028c9017d98ee244eda00843995_Asset%2037.png 927w"
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
                  <h3 className="display-h4">Secure Syncing</h3>
                  <div className="paragraph t---neutral-10">
                    Monitor your finances live with dashboards.
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202a2_2f607487748b8ed97503fab44312c123_daniil-silantev-nBuiLbz_j4A-unsplash.png"
                  loading="lazy"
                  width="313"
                  alt="Chart"
                  sizes="313px"
                  srcSet="
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202a2_2f607487748b8ed97503fab44312c123_daniil-silantev-nBuiLbz_j4A-unsplash-p-500.png 500w,
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202a2_2f607487748b8ed97503fab44312c123_daniil-silantev-nBuiLbz_j4A-unsplash.png 929w"
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
                  <h3 className="display-h4">Growth Score</h3>
                  <div className="paragraph t---neutral-10">
                    Generate summaries instantly.
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202a1_10bed021acc80335836a8d329ea8d8c1_Asset%2018.png"
                  loading="lazy"
                  width="313"
                  alt="Chart"
                  sizes="313px"
                  srcSet="
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202a1_10bed021acc80335836a8d329ea8d8c1_Asset%2018-p-500.png 500w,
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202a1_10bed021acc80335836a8d329ea8d8c1_Asset%2018-p-800.png 800w,
                    https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202a1_10bed021acc80335836a8d329ea8d8c1_Asset%2018.png 927w"
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
