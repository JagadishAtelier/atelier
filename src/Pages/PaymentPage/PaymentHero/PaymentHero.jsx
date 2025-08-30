import React from 'react'
import { Link } from 'react-router-dom';
import PaymentSection from '../PaymentSection/PaymentSection';
import PaymentProgressSection from '../PaymentProgressSection/PaymentProgressSection';
import PaymentProductivitySection from '../PaymentProductivitySection/PaymentProductivitySection';
import BlogPost from '../../../Components/BlogPost/BlogPost';
import PaymentLaunchFaster from '../PaymentFaster/PaymentLaunchFaster';
import PaymentEngagement from '../PaymentEngagement/PaymentEngagement';

function PaymentHero() {
  return (
    <div data-aos="zoom-in">
        <div className="fea-c-hero-section f-hero-shape">
      <div className="fea-section-spacing">
        <div className="fea-container">
          <div className="fea-hero-content">
            <div className="fea-hero-subtitle-wrap">
              <div className="fea-hero-subtitle">Atelier Features</div>
            </div>
            <div className="fea-hero-title-wrap">
              <h1 className="fea-hero-title">Portal & Payment Management</h1>
            </div>
            <div className="fea-hero-text-wrap">
              <p className="fea-hero-text">
              A centralized portal to manage user access, digital payments, and financial workflows. 
              Our solution simplifies fee collection, automates billing, and ensures secure, 
              real-time payment processing while offering a seamless experience for both users and administrators.
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
      src: "https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/UPI-Payments.png",
      alt: "Unified Payment Portal",
      title: "Unified Payment Portal",
    },
    {
      src: "https://revenue.kiwi/wp-content/uploads/2024/09/image001-3.jpg",
      alt: "Billing Automation",
      title: "Automated Billing",
    },
    {
      src: "https://etedge-insights.com/wp-content/uploads/2024/11/shutterstock_2446518931.jpg",
      alt: "Secure Transactions",
      title: "Secure Transactions",
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
    <PaymentEngagement/>
    {/* <FeaturesProduct/> */}
    <PaymentSection/>
    <PaymentProgressSection/>
    <PaymentProductivitySection/>
    <BlogPost/>
    <PaymentLaunchFaster/>
    </div>
  )
}

export default PaymentHero
