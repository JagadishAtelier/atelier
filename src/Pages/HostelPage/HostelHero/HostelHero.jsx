import React from 'react'
import './HostelHero.css'
import { Link } from 'react-router-dom';
import HostelSection from '../HostelSection/HostelSection';
import HostelProgressSection from '../HostelProgressSection/HostelProgressSection';
import HostelProductivitySection from '../HostelProductivitySection/HostelProductivitySection';
import BlogPost from '../../../Components/BlogPost/BlogPost';
import HostelLaunchFaster from '../HostelFaster/HostelLaunchFaster';
import HostelEngagement from '../HostelEngagement/HostelEngagement';

function HostelHero() {
  return (
    <div data-aos="zoom-in">
        <div className="fea-c-hero-section f-hero-shape">
      <div className="fea-section-spacing">
        <div className="fea-container">
          <div className="fea-hero-content">
            <div className="fea-hero-subtitle-wrap">
              <div className="fea-hero-subtitle"> Smart Campus Solutions</div>
            </div>
            <div className="fea-hero-title-wrap">
              <h1 className="fea-hero-title">Hostel & Transport Management</h1>
            </div>
            <div className="fea-hero-text-wrap">
              <p className="fea-hero-text">
              Our software simplifies hostel and transport administration by 
                  managing room allocations, attendance, mess planning, and 
                  student transportation. With real-time tracking and automated 
                  scheduling, institutions ensure security, efficiency, and 
                  hassle-free operations for both students and staff.
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
      src: "https://iotiq.co.in/assets/NEW%20IMAGES/Solutions/Smart%20Hostel/Reduce%20dependency%20on%20manual%20labour.jpg",
      alt: "Smart Hostel Dashboard",
      title: "Smart Hostel Dashboard",
    },
    {
      src: "https://mavenmachines.com/wp-content/uploads/2023/10/Dispatch-Suite_Dispatch-Page_FINAL_2.png",
      alt: "Transport Scheduling",
      title: "Transport Scheduling",
    },
    {
      src: "https://cdn.mobisoftinfotech.com/assets/images/solutions/school-bus-tracking/key-features-seamless-integrations-school-bus-tracking.webp",
      alt: "Student Safety Tracking",
      title: "Student Safety Tracking",
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
    <HostelEngagement/>
    {/* <FeaturesProduct/> */}
    <HostelSection/>
    <HostelProgressSection/>
    <HostelProductivitySection/>
    <BlogPost/>
    <HostelLaunchFaster/>
    </div>
  )
}

export default HostelHero
