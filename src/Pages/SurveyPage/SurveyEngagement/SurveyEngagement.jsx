import React from "react";
import { 
  FaUsers, 
  FaStar, 
  FaCheckCircle, 
  FaBook, 
  FaClipboardCheck 
} from "react-icons/fa";
const SurveyEngagement = () => {
  // Data array for the two cards
  const cards = [
    {
      icon: <FaCheckCircle className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Centralized Grievance Dashboard",
      description:
        "Monitor and manage all employee or client grievances from a single intuitive dashboard. Track, assign, and resolve issues efficiently.",
      points: [
        "Real-time Issue Tracking",
        "Priority-based Assignment & Escalation",
        "Status Updates & Notifications",
        "Automated Resolution Workflows",
      ],
      extraClass: "alumini_space", // custom extra class if needed
    },
    {
        icon: <FaUsers className="text-theme "style={{ fontSize: "30px" }}  />,
      title: "Survey & Feedback Collection",
      description:
        "Collect actionable feedback from employees, clients, or customers through smart surveys and forms, enhancing engagement and satisfaction.",
      points: [
        "Customizable Survey Templates",
        "Anonymous Feedback Option",
        "Scheduled & Triggered Surveys",
        "Real-time Response Analysis",
      ],
    },
    {
      icon: <FaBook className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Analytics & Insights",
      description:
        "Transform raw survey and grievance data into actionable insights to improve processes, employee satisfaction, and overall organizational productivity.",
      points: [
        "Data Visualization & Reports",
        "Trend & Sentiment Analysis",
        "Performance Benchmarking",
        "Actionable Recommendations",
      ],
    },
    {
      icon: <FaClipboardCheck className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Automated Resolution & Follow-up",
      description:
        "Streamline the grievance resolution process with automation. Ensure timely follow-ups and closure to enhance trust and transparency.",
      points: [
        "Automated Issue Routing",
        "Follow-up Reminders & Alerts",
        "Closure & Feedback Tracking",
        "Audit Trail & Compliance Reports",
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
                        <span>Grievance & Survey Management</span>
                      </h2>
                      <div className="title-desc text-gray">
                        <p>
                        Collect, track, and resolve grievances while capturing meaningful survey feedback. Make informed decisions and enhance organizational efficiency with actionable insights.
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

export default SurveyEngagement;
