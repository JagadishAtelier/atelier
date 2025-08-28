import React from "react";
import './AlumniEngagement.css'
import { 
  FaUsers, 
  FaStar, 
  FaCheckCircle, 
  FaBook, 
  FaClipboardCheck 
} from "react-icons/fa";
const AlumniEngagement = () => {
  // Data array for the two cards
  const cards = [
    {
      icon: <FaCheckCircle className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Alumni Community Engagement",
      description:
        "Foster strong connections with alumni through networking opportunities, mentorship programs, and interactive platforms.",
      points: [
        "Centralized Alumni Directory",
        "Networking & Collaboration Tools",
        "Mentorship Opportunities",
        "Event Participation & Invitations",
      ],
      extraClass: "alumini_space", // custom extra class if needed
    },
    {
        icon: <FaUsers className="text-theme "style={{ fontSize: "30px" }}  />,
      title: "Placement Drive Management",
      description:
        "Simplify campus recruitment with tools that manage employer partnerships, placement schedules, and interview processes.",
      points: [
        "Employer & Recruiter Database",
        "Automated Placement Scheduling",
        "Interview & Offer Tracking",
        "Real-time Placement Reports",
      ],
    },
    {
      icon: <FaBook className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Corporate Collaboration",
      description:
        "Build long-term partnerships with companies and organizations to provide better career opportunities for students.",
      points: [
        "Employer Engagement Portals",
        "Corporate-Alumni Networking",
        "Job Posting & Internship Listings",
        "Sponsorship & Collaboration Management",
      ],
    },
    {
      icon: <FaClipboardCheck className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Career Growth Tracking",
      description:
        "Track alumni career progress and use analytics to showcase success stories, strengthening institutional reputation.",
      points: [
        "Career Progress Analytics",
        "Industry-wise Placement Reports",
        "Skill Development Insights",
        "Success Story Showcasing",
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
                        <span>Alumni & Placement Management</span>
                      </h2>
                      <div className="title-desc text-gray">
                        <p>
                        Empower institutions with tools to manage alumni relations and streamline 
                          placements. Strengthen networks, track career growth, and build lasting 
                          corporate partnerships for student success.
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

export default AlumniEngagement;
