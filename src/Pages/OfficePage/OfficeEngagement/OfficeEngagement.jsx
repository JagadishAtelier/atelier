import React from "react";
import { 
  FaUsers, 
  FaStar, 
  FaCheckCircle, 
  FaBook, 
  FaClipboardCheck 
} from "react-icons/fa";
const OfficeEngagement = () => {
  // Data array for the two cards
  const cards = [
    {
      icon: <FaCheckCircle className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Governance & Compliance",
      description:
        "Ensure organizational compliance and accountability with built-in policy tracking, audit trails, and automated approval workflows.",
      points: [
        "Policy & Regulation Management",
        "Automated Compliance Tracking",
        "Audit-Ready Reports",
        "Role-Based Access Control",
      ],
      extraClass: "alumini_space", // custom extra class if needed
    },
    {
        icon: <FaUsers className="text-theme "style={{ fontSize: "30px" }}  />,
      title: "Employee & Team Management",
      description:
        "Manage workforce details, performance, and collaboration with a centralized office management system.",
      points: [
        "Employee Profiles & Roles",
        "Team Communication Tools",
        "Attendance & Leave Tracking",
        "Performance Monitoring",
      ],
    },
    {
      icon: <FaBook className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Meeting & Decision Management",
      description:
        "Streamline board meetings and decision-making with digital agendas, action item tracking, and secure document sharing.",
      points: [
        "Board & Committee Management",
        "Agenda & Minutes Automation",
        "Task Assignment & Follow-ups",
        "Secure File & Notes Sharing",
      ],
    },
    {
      icon: <FaClipboardCheck className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Workflow & Approvals",
      description:
        "Accelerate office operations with automated approval pipelines and workflow monitoring.",
      points: [
        "Multi-Level Approval Workflows",
        "Digital Forms & Requests",
        "Task Prioritization & Delegation",
        "Progress Tracking Dashboard",
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
              <div className="gia-c-sub-title">Atelier Supports</div>
            </div>
                      <h2 className="title fweight-600 text-black">
                        <span>Office & Governance Management</span>
                      </h2>
                      <div className="title-desc text-gray">
                        <p>
                        Drive transparency, accountability, and efficiency in your
                          organization with powerful governance and office management tools
                          tailored for modern enterprises.
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

export default OfficeEngagement;
