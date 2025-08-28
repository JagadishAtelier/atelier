import React from "react";
import './LibEngagement.css'
import { 
  FaUsers, 
  FaStar, 
  FaCheckCircle, 
  FaBook, 
  FaClipboardCheck 
} from "react-icons/fa";
const LibEngagement = () => {
  // Data array for the two cards
  const cards = [
    {
      icon: <FaCheckCircle className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Digital Resource Management",
      description:
        "Centralize and manage all digital and physical library resources with ease, ensuring quick access for students and faculty.",
      points: [
        "E-books, Journals & Research Papers",
        "Centralized Resource Repository",
        "Categorization & Metadata Support",
        "Advanced Search & Filtering",
      ],
      extraClass: "alumini_space", // custom extra class if needed
    },
    {
        icon: <FaUsers className="text-theme "style={{ fontSize: "30px" }}  />,
      title: "User Access & Membership",
      description:
        "Provide personalized access to resources with smart membership and role-based controls.",
      points: [
        "Student & Faculty Memberships",
        "Borrowing & Lending Policies",
        "Role-Based Access Controls",
        "Multi-Device Accessibility",
      ],
    },
    {
      icon: <FaBook className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Learning Content Integration",
      description:
        "Seamlessly integrate library resources with e-learning platforms to enhance the digital classroom experience.",
      points: [
        "LMS Integration for Study Materials",
        "Video & Multimedia Resource Support",
        "Interactive Content Sharing",
        "Collaborative Learning Tools",
      ],
    },
    {
      icon: <FaClipboardCheck className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Analytics & Reporting",
      description:
        "Gain insights into resource usage, learning patterns, and student engagement with built-in analytics.",
      points: [
        "Real-Time Usage Reports",
        "Resource Popularity Insights",
        "Borrowing & Return Statistics",
        "AI-Powered Learning Analytics",
      ],
    },
  ];

  return (
    <div
      className="gbb-row-wrapper section row-first-level blue-bg-sectn gbb-row bg-size-cover"
      data-onepage-title="Image Content"
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
                        <span>Admission & Academics Management</span>
                      </h2>
                      <div className="title-desc text-gray">
                        <p>
                        Manages the student admission process, academic records, course enrollments, and faculty assignments, ensuring a streamlined academic workflow.
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

export default LibEngagement;
