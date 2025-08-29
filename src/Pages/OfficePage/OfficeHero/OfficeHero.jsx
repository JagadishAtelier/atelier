import React from 'react'
import './OfficeHero.css'
import { Link } from 'react-router-dom';
import OfficeSection from '../OfficeSection/OfficeSection';
import OfficeProgressSection from '../OfficeProgressSection/OfficeProgressSection';
import OfficeProductivitySection from '../OfficeProductivitySection/OfficeProductivitySection';
import BlogPost from '../../../Components/BlogPost/BlogPost';
import OfficeLaunchFaster from '../OfficeFaster/OfficeLaunchFaster';
import OfficeEngagement from '../OfficeEngagement/OfficeEngagement';

function OfficeHero() {
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
              <h1 className="fea-hero-title">Office & Governance Management</h1>
            </div>
            <div className="fea-hero-text-wrap">
              <p className="fea-hero-text">
              Simplify office operations, ensure compliance, and strengthen governance with a
              centralized digital platform. From document workflows, meeting management, and
              approvals to policy tracking and audit readiness, our solution helps organizations
              achieve transparency, accountability, and efficiency across every level.
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
      src: "https://www.figma.com/community/resource/5364650e-eebc-423e-b3f9-a758ccc7b1c3/thumbnail",
      alt: "Governance Dashboard",
      title: "Governance Dashboard",
    },
    {
      src: "https://www.tripwire.com/sites/default/files/Policy-Compliance.jpg",
      alt: "Policy & Compliance",
      title: "Policy & Compliance",
    },
    {
      src: "https://www.diligent.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F15850142858138934f1eb3b39d0b127cc382b473-1080x720.jpg&w=2048&q=75",
      alt: "Meeting & Approvals",
      title: "Meeting & Approvals",
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
    <OfficeEngagement/>
    {/* <FeaturesProduct/> */}
    <OfficeSection/>
    <OfficeProgressSection/>
    <OfficeProductivitySection/>
    <BlogPost/>
    <OfficeLaunchFaster/>
    </div>
  )
}

export default OfficeHero
