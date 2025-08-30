import React from "react";
import './PaymentEngagement.css'
import { 
  FaUsers, 
  FaStar, 
  FaCheckCircle, 
  FaBook, 
  FaClipboardCheck ,
  FaLock, 
  FaCreditCard, 
  FaFileInvoice, 
  FaShieldAlt 
} from "react-icons/fa";
const PaymentEngagement = () => {
  // Data array for the two cards
  const cards = [
    {
      icon: <FaCreditCard className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Unified Payment Gateway",
      description:
        "Enable smooth fee collection, online transactions, and digital wallets all from a single platform.",
      points: [
        "OMulti-Mode Payment Support (UPI, Cards, Net Banking)",
        "Instant Fee Receipt Generation",
        "Seamless Mobile & Web Payments",
        "Integration with Leading Gateways",
      ],
      extraClass: "alumini_space", // custom extra class if needed
    },
    {
        icon: <FaFileInvoice className="text-theme "style={{ fontSize: "30px" }}  />,
      title: "Automated Billing & Invoicing",
      description:
        "Simplify finance operations with auto-generated invoices, reminders, and settlements.",
      points: [
        "Smart Invoice Creation",
        "Automated Due Reminders",
        "Subscription & Recurring Payments",
        "Ledger & Financial Reports",
      ],
    },
    {
      icon: <FaUsers className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Centralized Portal Access",
      description:
        "Provide users with a single secure login to access all services, transactions, and dashboards.",
      points: [
        "Role-Based Access Control",
        "Custom User Dashboards",
        "Self-Service Portal for Clients",
        "Admin Control & Monitoring",
      ],
    },
    {
      icon: <FaShieldAlt className="text-theme" style={{ fontSize: "30px" }} />,
      title: "Secure Transactions",
      description:
        "Protect sensitive payment data with enterprise-grade security protocols.",
      points: [
        "End-to-End Encryption",
        "PCI-DSS Compliance",
        "Fraud Detection & Alerts",
        "Two-Factor Authentication",
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
                        <span>Portal & Payment Management</span>
                      </h2>
                      <div className="title-desc text-gray">
                        <p>
                        A powerful portal and payment ecosystem designed for 
                          businesses, institutions, and organizations. 
                          Manage transactions, automate billing, and 
                          provide secure, user-friendly access—all in one place.
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

export default PaymentEngagement;
