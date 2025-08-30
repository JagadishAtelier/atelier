import React from "react";
import './HostelEngagement.css'
import { 
  FaUsers, 
  FaStar, 
  FaCheckCircle, 
  FaBook, 
  FaClipboardCheck,
  FaBus, 
  FaBed, 
  FaUtensils, 
  FaShieldAlt,  
} from "react-icons/fa";
const HostelEngagement = () => {
  // Data array for the two cards
  const cards = [
    {
      icon: <FaBed className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Smart Hostel Allocation",
      description:
        "Automate room allotments and manage hostel occupancy with real-time availability tracking, ensuring transparency and efficiency.",
      points: [
        "Room Allotment & Change Requests",
        "Digital Attendance & Leave Records",
        "Visitor & Guest Management",
        "Integrated Billing for Hostel Fees",
      ],
    },
    {
        icon: <FaShieldAlt className="text-theme "style={{ fontSize: "30px" }}  />,
      title: "Student Safety & Compliance",
      description:
        "Ensure a safe and secure environment in hostel and transport facilities with integrated compliance tools.",
      points: [
        "Emergency Alerts & Notifications",
        "Fire & Safety Compliance Records",
        "Biometric/Smart Card Access",
        "Incident Reporting & Tracking",
      ],
    },
    {
      icon: <FaBus className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Transport Scheduling & Tracking",
      description:
        "Plan and monitor transport services with intelligent scheduling and live tracking for student safety and punctuality.",
      points: [
        "Route & Bus Allocation",
        "GPS-Based Real-Time Tracking",
        "Driver & Vehicle Management",
        "Automated Fee Collection",
      ],
    },
    {
      icon: <FaUtensils  className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Mess & Facility Management",
      description:
        "Digitize mess planning and resource allocation to ensure smooth operations and quality services for students.",
      points: [
        "Meal Planning & Scheduling",
        "Inventory & Resource Tracking",
        "Feedback & Complaint Management",
        "Expense & Budget Monitoring",
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
                        <span>Hostel & Transport Management</span>
                      </h2>
                      <div className="title-desc text-gray">
                        <p>
                        Simplify hostel operations and transportation services with 
                          our advanced ERP solutions. From room allocation to GPS-based 
                          transport tracking, ensure safety, efficiency, and a seamless 
                          student experience.
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

export default HostelEngagement;
