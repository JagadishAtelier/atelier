import React from "react";
import './OfficeEngagement.css'
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
      title: "Seamless Admission Process",
      description:
        "Streamline your institution’s admission process with an intuitive and automated system. From online applications to document verification, ensure a hassle-free experience for students and administrators.",
      points: [
        "Online Application & Registration",
        "Automated Document Verification",
        "Fee Payment & Receipt Generation",
        "Merit-Based & Direct Admission Support",
      ],
      extraClass: "alumini_space", // custom extra class if needed
    },
    {
        icon: <FaUsers className="text-theme "style={{ fontSize: "30px" }}  />,
      title: "Student Information Management",
      description:
        "Keep track of student records effortlessly with a centralized system that provides real-time access to academic and personal details.",
      points: [
        "Comprehensive Student Profiles",
        "Attendance & Performance Tracking",
        "Course & Batch Management",
        "Parent & Guardian Communication",
      ],
    },
    {
      icon: <FaBook className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Academic Planning & Course Management",
      description:
        "Enhance learning outcomes with a well-structured academic management system that ensures smooth course delivery.",
      points: [
        "Curriculum & Syllabus Management",
        "Timetable & Scheduling Automation",
        "Faculty Allocation & Workload Management",
        "Exam & Result Processing",
      ],
    },
    {
      icon: <FaClipboardCheck className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Grading & Assessment",
      description:
        "Simplify grading and assessment with automated evaluation tools that align with institutional policies.",
      points: [
        "Customizable Grading Systems",
        "Internal & External Assessment Tracking",
        "Automated Report Card Generation",
        "Student Performance Analytics",
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

export default OfficeEngagement;
