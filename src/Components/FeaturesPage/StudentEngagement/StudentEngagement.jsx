import React from "react";
import './StudentEngagement.css'
import { FaUsers, FaStar,FaCheckCircle  } from "react-icons/fa";
const StudentEngagement = () => {
  // Data array for the two cards
  const cards = [
    {
        icon: <FaStar className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Holistic Student Support",
      description:
        "Offer personalized care and timely intervention through a range of support services.",
      points: [
        "Counseling session management",
        "Wellness programs & mental health resources",
        "Academic and behavioral support tracking",
        "Confidential case logging & follow-ups",
      ],
      extraClass: "alumini_space", // custom extra class if needed
    },
    {
        icon: <FaUsers className="text-theme "style={{ fontSize: "30px" }}  />,
      title: "Engaging Student Life",
      description:
        "Create a vibrant campus experience with tools to plan, promote, and manage student involvement.",
      points: [
        "Event scheduling & activity tracking",
        "Club and organization management",
        "Student recognition & participation records",
        "Feedback collection for continuous improvement",
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
            <div className="gsc-column col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" data-aos="fade-right">
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
                        <span>Student Engagement & Support</span>
                      </h2>
                      <div className="title-desc text-gray">
                        <p>
                          Our Student Engagement & Support module is designed to
                          nurture student well-being, encourage participation,
                          and provide the guidance students need to thrive—
                          academically, emotionally, and socially.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>

            {/* Map over cards */}
            {cards.map((card, index) => (
              <div
                key={index}
                className={`gsc-column  col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 white_card ${
                  card.extraClass || ""
                }`}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} 
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

export default StudentEngagement;
