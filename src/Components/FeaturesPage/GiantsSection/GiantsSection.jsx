import React from 'react'
import './GiantsSection.css'
const giantsData = [
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cad29acc56c3e5d69658_icon-2.svg",
      alt: "icon-2",
      title: "Customizable Dashboards",
      text: "Easily configure student and teacher dashboards to highlight key metrics and insights.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba7d0796fa368de7642_icon-3.svg",
      alt: "icon-3",
      title: "Intuitive Editing Tools",
      text: "Edit course content, schedules, and notifications quickly without technical expertise.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba899756b728354290f_icon-4.svg",
      alt: "icon-4",
      title: "Mobile-Friendly Access",
      text: "Students and educators can engage with the platform anytime, anywhere via mobile devices.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba790a745724ec63385_icon-5.svg",
      alt: "icon-5",
      title: "Seamless Integrations",
      text: "Connect effortlessly with LMS, ERP, and communication tools to unify your workflow.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba890a745724ec633ac_icon-6.svg",
      alt: "icon-6",
      title: "Interactive Components",
      text: "Enable quizzes, polls, and discussion forums to actively engage students in learning.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba96178b79e5d5c8615_icon-7.svg",
      alt: "icon-7",
      title: "24/7 assistance",
      text: "Our team is available around the clock to assist educators and administrators.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba96949c37d0725b6e9_icon-8.svg",
      alt: "icon-8",
      title: "Regular updates",
      text: "Stay ahead with continuous software improvements and new features for better engagement.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba97cc578cffd2d5330_icon-9.svg",
      alt: "icon-9",
      title: "Safe data management",
      text: "Protect sensitive student and institutional data with robust security protocols.",
    },
  ];
function GiantsSection() {
  return (
    <div>
      <div className="gia-giants-section">
      <div className="gia-section-spacing">
        <div className="gia-container">
          <div className="gia-section-heading giants-heading" data-aos="fade-right">
            <div className="gia-c-sub-title-wrap">
              <div className="gia-c-sub-title">Atelier Giants</div>
            </div>
            <div className="gia-common-title-wrap">
              <h1 className="gia-common-title">
              Reliable Solutions for Educational Institutions and EdTech Startups
              </h1>
            </div>
          </div>
          <div className="gia-giants-layout">
            {giantsData.map(({ icon, alt, title, text }, index) => (
              <div className="gia-giants-item" key={index} data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} >
                <div className="gia-giants-item-top">
                  <div className="gia-giants-item-icon-wrap">
                    <img
                      src={icon}
                      alt={alt}
                      loading="lazy"
                      className="gia-giants-item-icon"
                    />
                  </div>
                  <div className="gia-giants-item-title-wrap">
                    <h2 className="gia-giants-item-title">{title}</h2>
                  </div>
                </div>
                <div className="gia-giants-item-text-wrap">
                  <p className="gia-giants-item-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default GiantsSection
