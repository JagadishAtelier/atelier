import React from 'react'
import './LibHero.css'
import { Link } from 'react-router-dom';
import LibSection from '../LibSection/LibSection';
import LibProgressSection from '../LibProgressSection/LibProgressSection';
import LibProductivitySection from '../LibProductivitySection/LibProductivitySection';
import BlogPost from '../../../Components/BlogPost/BlogPost';
import LibLaunchFaster from '../LibFaster/LibLaunchFaster';
import LibEngagement from '../LibEngagement/LibEngagement';

function LibHero() {
  return (
    <div>
        <div className="fea-c-hero-section f-hero-shape">
      <div className="fea-section-spacing">
        <div className="fea-container">
          <div className="fea-hero-content">
            <div className="fea-hero-subtitle-wrap">
              <div className="fea-hero-subtitle">Smart Library Solutions</div>
            </div>
            <div className="fea-hero-title-wrap">
              <h1 className="fea-hero-title">Learning & Library Management</h1>
            </div>
            <div className="fea-hero-text-wrap">
              <p className="fea-hero-text">
              Empower institutions with a centralized digital platform to manage
              learning resources, e-books, research papers, journals, and physical
              library assets. Enable students and faculty to access materials anytime,
              track borrowing history, and integrate with e-learning platforms for a
              seamless academic experience.
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
      src: "https://www.reutlingen-university.de/fileadmin/_processed_/b/8/csm_Buecherregal_Katalog_1cf5c6077e.jpg",
      alt: "Digital Library",
      title: "Digital Library",
    },
    {
      src: "https://medconverge.in/wp-content/uploads/2019/09/e-learning.jpg",
      alt: "E-Learning Hub",
      title: "E-Learning Hub",
    },
    {
      src: "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=612x612&w=0&k=20&c=yvFDnYMNEJ6WEDYrAaOOLXv-Jhtv6ViBRXSzJhL9S_k=",
      alt: "Student Access",
      title: "Student Access",
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
    <LibEngagement/>
    {/* <FeaturesProduct/> */}
    <LibSection/>
    <LibProgressSection/>
    <LibProductivitySection/>
    <BlogPost/>
    <LibLaunchFaster/>
    </div>
  )
}

export default LibHero
