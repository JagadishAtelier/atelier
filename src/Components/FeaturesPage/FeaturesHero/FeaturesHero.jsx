import React from 'react'
import './FeaturesHero.css'
import { Link } from 'react-router-dom';
import PlatformSection from '../PlatformSection/PlatformSection';
function FeaturesHero() {
  return (
    <div>
        <div className="fea-c-hero-section f-hero-shape">
      <div className="fea-section-spacing">
        <div className="fea-container">
          <div className="fea-hero-content">
            <div className="fea-hero-subtitle-wrap">
              <div className="fea-hero-subtitle">Atelier Features</div>
            </div>
            <div className="fea-hero-title-wrap">
              <h1 className="fea-hero-title">Features of the Atelier management</h1>
            </div>
            <div className="fea-hero-text-wrap">
              <p className="fea-hero-text">
                Temptatio libero tumultus delicate despecto aduro caute.
                Admoneo decet comprehendo ambulo ultra color cenaculum
                asperiores cui.
              </p>
            </div>
            <div className="fea-hero-btn-wrap">
              <Link to="/contact" className="fea-btn-wrap">
                <div className="fea-btn-inner">
                  <div>Get Started</div>
                  <div className="fea-btn-icon-wrap">
                    <div className="fea-btn-icon">
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
                    <div className="fea-btn-icon">
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

              <Link to="/pricing" className="fea-btn-wrap-3">
                <div className="fea-btn-inner-3">
                  <div>Book a demo</div>
                  <div className="fea-btn-icon-wrap">
                    <div className="fea-btn-icon">
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
                    <div className="fea-btn-icon">
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

          <div
      className="fea-about-hero-thumb-wrap"
      style={{
        opacity: 1,
        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve-3d',
      }}
    >
      <img
        src="https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f71f89b00a6eb5120f_thumb-9.webp"
        loading="eager"
        sizes="(max-width: 1547px) 100vw, 1547px"
        srcSet="
          https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f71f89b00a6eb5120f_thumb-9-p-500.webp 500w,
          https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f71f89b00a6eb5120f_thumb-9-p-800.webp 800w,
          https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f71f89b00a6eb5120f_thumb-9-p-1080.webp 1080w,
          https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f71f89b00a6eb5120f_thumb-9.webp 1547w
        "
        alt="thumb-9"
        className="fea-about-hero-thumb"
      />

      <img
        src="https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f616d416ba44568c03_thumb-10.webp"
        loading="eager"
        sizes="(max-width: 1547px) 100vw, 1547px"
        srcSet="
          https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f616d416ba44568c03_thumb-10-p-500.webp 500w,
          https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f616d416ba44568c03_thumb-10-p-800.webp 800w,
          https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f616d416ba44568c03_thumb-10-p-1080.webp 1080w,
          https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f616d416ba44568c03_thumb-10.webp 1547w
        "
        alt="thumb-10"
        className="fea-about-hero-thumb"
      />

      <img
        src="https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f7022b063ce0f4afae_thumb-11.webp"
        loading="lazy"
        sizes="(max-width: 1547px) 100vw, 1547px"
        srcSet="
          https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f7022b063ce0f4afae_thumb-11-p-500.webp 500w,
          https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f7022b063ce0f4afae_thumb-11-p-800.webp 800w,
          https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f7022b063ce0f4afae_thumb-11-p-1080.webp 1080w,
          https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f7022b063ce0f4afae_thumb-11.webp 1547w
        "
        alt="thumb-11"
        className="fea-about-hero-thumb"
      />
    </div>
        </div>
      </div>
      <div className="fea-c-overlay"></div>
    </div>
    <PlatformSection/>
    </div>
  )
}

export default FeaturesHero
