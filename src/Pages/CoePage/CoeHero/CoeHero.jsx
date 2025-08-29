import React from 'react'
import './CoeHero.css'
import { Link } from 'react-router-dom';
import CoeSection from '../CoeSection/CoeSection';
import CoeProgressSection from '../CoeProgressSection/CoeProgressSection';
import CoeProductivitySection from '../CoeProductivitySection/CoeProductivitySection';
import BlogPost from '../../../Components/BlogPost/BlogPost';
import CoeLaunchFaster from '../CoeFaster/CoeLaunchFaster';
import CoeEngagement from '../CoeEngagement/CoeEngagement';

function CoeHero() {
  return (
    <div>
        <div className="fea-c-hero-section f-hero-shape">
      <div className="fea-section-spacing">
        <div className="fea-container">
          <div className="fea-hero-content">
            <div className="fea-hero-subtitle-wrap">
              <div className="fea-hero-subtitle">Enterprise Excellence</div>
            </div>
            <div className="fea-hero-title-wrap">
              <h1 className="fea-hero-title">COE & Advanced Reporting</h1>
            </div>
            <div className="fea-hero-text-wrap">
              <p className="fea-hero-text">
              Empower your organization with a Center of Excellence (COE) framework 
      that drives innovation, efficiency, and compliance. Our advanced reporting 
      and analytics solutions give leaders actionable insights, helping them make 
      data-driven decisions, optimize operations, and scale digital transformation.
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
      src: "https://gens-associates.com/wordpress/wp-content/uploads/2021/03/Gens_Focus_FPO_2-400x260.jpg",
      alt: "Atelier Portal",
      title: "Our Focus and History",
    },
    {
      src: "https://pearllemonleads.com/wp-content/uploads/2024/03/featured-image-How-to-Get-Local-Customers.jpg",
      alt: "Atelier ERP",
      title: "Our Customers and Approach",
    },
    {
      src: "https://www.advisory.com/content/advisory/us/en/company/products/expert-support/_jcr_content/root/container_1581629625/container/flexiblehero.coreimg.jpeg/1756237854241/team-working-discuss-presentation.jpeg",
      alt: "Atelier HRMs",
      title: "Our Team, Advisory Board and Partners",
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
    <CoeEngagement/>
    {/* <FeaturesProduct/> */}
    <CoeSection/>
    <CoeProgressSection/>
    <CoeProductivitySection/>
    <BlogPost/>
    <CoeLaunchFaster/>
    </div>
  )
}

export default CoeHero
