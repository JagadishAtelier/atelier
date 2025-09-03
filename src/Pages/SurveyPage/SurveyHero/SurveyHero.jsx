import React from 'react'
import { Link } from 'react-router-dom';
import SurveySection from '../SurveySection/SurveySection';
import SurveyProgressSection from '../SurveyProgressSection/SurveyProgressSection';
import SurveyProductivitySection from '../SurveyProductivitySection/SurveyProductivitySection';
import BlogPost from '../../../Components/BlogPost/BlogPost';
import SurveyLaunchFaster from '../SurveyFaster/SurveyLaunchFaster';
import SurveyEngagement from '../SurveyEngagement/SurveyEngagement';

function SurveyHero() {
  return (
    <div>
        <div className="fea-c-hero-section f-hero-shape">
      <div className="fea-section-spacing">
        <div className="fea-container">
          <div className="fea-hero-content" data-aos="fade-right">
            <div className="fea-hero-subtitle-wrap">
              <div className="fea-hero-subtitle">Atelier Features</div>
            </div>
            <div className="fea-hero-title-wrap">
              <h1 className="fea-hero-title">Grievance & Survey Management</h1>
            </div>
            <div className="fea-hero-text-wrap">
              <p className="fea-hero-text">
              Streamline feedback collection, grievance resolution, and employee or client surveys with our intelligent platform. Track issues, measure satisfaction, and enhance productivity across teams.
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
      src: "https://cdn.cpdonline.co.uk/wp-content/uploads/2024/08/08103650/Promoting-Clear-Communication.jpg",
      alt: "Centralized Dashboard",
      title: "Centralized Dashboard",
    },
    {
      src: "https://a-us.storyblok.com/f/1003529/742x463/a8695800ad/monitoring-improvement.png",
      alt: "Survey Analytics",
      title: "Survey Analytics",
    },
    {
      src: "https://workpro.com/hubfs/Young%20female%20businesswoman%20in%20the%20office.jpeg",
      alt: "Automated Feedback & Resolution",
      title: "Automated Feedback & Resolution",
    },
  ].map((item, index) => (
    <div className="image-hover-wrapper" key={index} data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} >
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
    <SurveyEngagement/>
    {/* <FeaturesProduct/> */}
    <SurveySection/>
    <SurveyProgressSection/>
    <SurveyProductivitySection/>
    <BlogPost/>
    <SurveyLaunchFaster/>
    </div>
  )
}

export default SurveyHero
