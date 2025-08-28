import React from 'react'
import './RndHero.css'
import { Link } from 'react-router-dom';
import RndSection from '../RndSection/RndSection';
import RndProgressSection from '../RndProgressSection/RndProgressSection';
import RndProductivitySection from '../RndProductivitySection/RndProductivitySection';
import BlogPost from '../../../Components/BlogPost/BlogPost';
import RndLaunchFaster from '../RndFaster/RndLaunchFaster';
import RndEngagement from '../RndEngagement/RndEngagement';

function RndHero() {
  return (
    <div>
        <div className="fea-c-hero-section f-hero-shape">
      <div className="fea-section-spacing">
        <div className="fea-container">
          <div className="fea-hero-content">
            <div className="fea-hero-subtitle-wrap">
              <div className="fea-hero-subtitle">Innovating for the Future</div>
            </div>
            <div className="fea-hero-title-wrap">
              <h1 className="fea-hero-title">Research & Development (R&D) and Governance</h1>
            </div>
            <div className="fea-hero-text-wrap">
              <p className="fea-hero-text">
              Empowering organizations with cutting-edge software innovation, structured R&D frameworks, and 
                  governance models that ensure transparency, compliance, and sustainable growth.
              </p>
            </div>
            <div className="fea-hero-btn-wrap">
              <Link to="/inner-pages/contact" className="fea-btn-wrap">
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

              <Link to="/inner-pages/contact" className="fea-btn-wrap-3">
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

          <div className="fea-about-hero-thumb-wrap">
  {[
    {
      src: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f71f89b00a6eb5120f_thumb-9.webp",
      alt: "Innovation Lab",
      title: "Innovation Lab",
    },
    {
      src: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f616d416ba44568c03_thumb-10.webp",
      alt: "Governance Framework",
      title: "Governance Framework",
    },
    {
      src: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683048f7022b063ce0f4afae_thumb-11.webp",
      alt: "Future-Ready Solutions",
      title: "Future-Ready Solutions",
    },
  ].map((item, index) => (
    <div className="image-hover-wrapper" key={index}>
      <img
        src={item.src}
        alt={item.alt}
        className="fea-about-hero-thumb"
        loading={index === 2 ? 'lazy' : 'eager'}
      />
      <div className="image-hover-overlay">
        <span>{item.title}</span>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
      <div className="fea-c-overlay"></div>
    </div>
    {/* <PlatformSection/> */}
    <RndEngagement/>
    {/* <FeaturesProduct/> */}
    <RndSection/>
    <RndProgressSection/>
    <RndProductivitySection/>
    <BlogPost/>
    <RndLaunchFaster/>
    </div>
  )
}

export default RndHero
