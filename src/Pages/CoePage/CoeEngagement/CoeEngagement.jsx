import React from "react";
import { 
  FaUsers, 
  FaStar, 
  FaCheckCircle, 
  FaBook, 
  FaClipboardCheck 
} from "react-icons/fa";
const CoeEngagement = () => {
  // Data array for the two cards
  const cards = [
    {
      icon: <FaCheckCircle className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Centralized Governance",
      description:
        "Establish a unified framework through a Center of Excellence (COE) that ensures standardization, compliance, and efficiency across business processes.",
      points: [
        "Standardized Best Practices",
        "Policy & Compliance Management",
        "Cross-Department Collaboration",
        "Scalable Governance Models",
      ],
      extraClass: "alumini_space", // custom extra class if needed
    },
    {
        icon: <FaUsers className="text-theme "style={{ fontSize: "30px" }}  />,
      title: "Team Engagement & Collaboration",
      description:
        "Enhance workforce collaboration with structured engagement models, empowering teams to innovate and deliver consistently.",
      points: [
        "Role-Based Access & Permissions",
        "Cross-Functional Collaboration",
        "Employee Engagement Tracking",
        "Knowledge Sharing Hub",
      ],
    },
    {
      icon: <FaBook className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Advanced Reporting & Analytics",
      description:
        "Gain actionable insights with real-time data visualization, predictive analytics, and interactive dashboards that fuel decision-making.",
      points: [
        "Custom KPI Dashboards",
        "Predictive Analytics & Forecasting",
        "Interactive Reports & Filters",
        "Exportable Reports (PDF/Excel/CSV)",
      ],
    },
    {
      icon: <FaClipboardCheck className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Performance & Productivity Insights",
      description:
        "Track efficiency and measure outcomes with performance-driven reporting tools that align with business objectives.",
      points: [
        "Department & Project Performance Tracking",
        "Automated Report Generation",
        "Real-Time Productivity Metrics",
        "Business Intelligence Integration",
      ],
    },
  ];

  return (
    <div
      className="gbb-row-wrapper section row-first-level blue-bg-sectn gbb-row bg-size-cover"
      data-onepage-title="Image Content"
      data-aos="zoom-in"
    >
      <div className="bb-inner default">
        <div className="bb-container container p-0">
          <div className="row row-wrapper">
            {/* Heading Section */}
            <div className="gsc-column col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="column-inner bg-size-cover">
                <div className="column-content-inner">
                  <div
                    className="widget gsc-heading align-center style-1 padding-bottom-0"
                    style={{ maxWidth: "800px" }}
                  >
                    <div className="heading-content clearfix">
                    <div className="gia-c-sub-title-wrap">
              <div className="gia-c-sub-title">Atelier  COE Solutions</div>
            </div>
                      <h2 className="title fweight-600 text-black">
                        <span>COE & Advanced Reporting</span>
                      </h2>
                      <div className="title-desc text-gray">
                        <p>
                        Our COE & Advanced Reporting solutions empower organizations to drive
    excellence, unify operations, and leverage data-driven insights for
    sustainable growth and digital transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="row row-wrapper g-4">
            {/* Map over cards */}
            {cards.map((card, index) => (
              <div
                key={index}
                className={`gsc-column  col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 white_card ${
                  card.extraClass || ""
                }`}
              >
                <div className="column-inner bg-size-cover border border-gray-200">
                  <div className="column-content-inner">
                    <div className="widget gsc-icon-box left box-margin-medium">
                    <div className="highlight-icon">{card.icon}</div>


                      <div className="highlight_content verticle-align-middle">
                        <h3 className="title text-black">{card.title}</h3>
                        <div className="desc text-gray">
                          <p>{card.description}</p>
                          <ul className="tick_list">
                            {card.points.map((point, i) => (
                              <li key={i} className="flex items-center gap-2">
                                {point}
                                </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* End Map */}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          top: "-40%",
        }}
        className="gva-parallax-inner skrollable bg-size-cover skrollable-before"
        data-bottom-top="top: -40%;"
        data-top-bottom="top: 20%;"
      ></div>
    </div>
  );
};

export default CoeEngagement;
