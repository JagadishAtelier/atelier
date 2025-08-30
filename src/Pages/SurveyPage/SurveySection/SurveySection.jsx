import React from 'react'
const giantsData = [
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cad29acc56c3e5d69658_icon-2.svg",
      alt: "icon-2",
      title: "Customizable Surveys",
      text: "Create and deploy surveys that are fully adaptable to your organizational needs, collecting accurate feedback from employees or clients.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba7d0796fa368de7642_icon-3.svg",
      alt: "icon-3",
      title:"Automated Grievance Tracking",
      text: "Track grievances from submission to resolution automatically, reducing response times and improving satisfaction.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba899756b728354290f_icon-4.svg",
      alt: "icon-4",
      title: "Mobile-Friendly Access",
      text: "Enable employees and clients to submit feedback or grievances from any device, anytime, anywhere for maximum convenience.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba790a745724ec63385_icon-5.svg",
      alt: "icon-5",
      title: "Seamless Integrations",
      text: "Integrate with existing HR, CRM, or project management systems to unify all feedback and grievance data.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba890a745724ec633ac_icon-6.svg",
      alt: "icon-6",
      title: "Interactive Analytics",
      text: "Visualize responses and grievance trends through dashboards, charts, and reports for quick decision-making.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba96178b79e5d5c8615_icon-7.svg",
      alt: "icon-7",
      title: "24/7 assistance",
      text: "Ensure continuous support and assistance for system users, helping resolve issues and answer queries promptly.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba96949c37d0725b6e9_icon-8.svg",
      alt: "icon-8",
      title: "Regular updates",
      text: "Receive automatic system updates with new features and improvements for enhanced functionality.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba97cc578cffd2d5330_icon-9.svg",
      alt: "icon-9",
      title: "Safe data management",
      text: "Protect sensitive employee or client data with advanced encryption and role-based access controls.",
    },
  ];
function SurveySection() {
  return (
    <div data-aos="zoom-in">
      <div className="gia-giants-section">
      <div className="gia-section-spacing">
        <div className="gia-container">
          <div className="gia-section-heading giants-heading">
            <div className="gia-c-sub-title-wrap">
              <div className="gia-c-sub-title">Atelier Giants</div>
            </div>
            <div className="gia-common-title-wrap">
              <h1 className="gia-common-title">
              Trusted for efficient grievance & survey management
              </h1>
            </div>
          </div>
          <div className="gia-giants-layout">
            {giantsData.map(({ icon, alt, title, text }, index) => (
              <div className="gia-giants-item" key={index}>
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

export default SurveySection
