import React from 'react'
import './AtelierErp.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';

function AtelierErp() {
  return (
    <div>
          <section className="erp-section_help-transform erp-section-margin">
          <div className='header-design-for-all'>
                  <div className="pla-c-sub-title-wrap">
              <div className="pla-c-sub-title">Atelier Portal</div>
            </div>
            <h1>Comprehensive Management Information System for Educational Institutions</h1>
            </div>
      <div className="erp-w-layout-blockcontainer erp-global-wrapper erp-w-container">
        <div className="erp-global-padding">
          <div className="erp-help-transform_wrapper" data-aos="fade-right">
            {/* Left Content */}
            <div
              data-w-id="aeb35c57-a2fb-8f94-e8b6-a01b0ce2cec3"
              className="erp-help-transform_content-left"
            >
              <div className="erp-section-headline_wrapper erp-section-align-left">
                <h3 className="erp-section-headline-text">
                  We help transforms your businees
                </h3>
                <p className="erp-text-lg-2 erp-text-color-black-900">
                  Our mission is to empower individuals and organizations to
                  unleash their creative potential
                </p>
              </div>
              <div className="erp-section-button">
                <a href="/inner-pages/contact" className="erp-button-sm">
                  <div className="erp-button-cmponent-text erp-text-sm erp-text-weight-medium erp-text-color-white">
                    Get Started
                  </div>
                  <div className="erp-button-image_block">
                    <div className="erp-button-image_content">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/67d5e6f8c0c32c5ff1c7f21d/67d5e9deae483e2d92925c27_Vector.svg"
                        alt="Button Arrow"
                        className="erp-button-big-arrow-image-w"
                      />
                    </div>
                    <div className="erp-button-image_content-w">
                      {[...Array(2)].map((_, index) => (
                        <img
                          key={index}
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/67d5e6f8c0c32c5ff1c7f21d/67d5e9deae483e2d92925c25_Vector.svg"
                          alt="Button Arrow"
                          className="erp-button-big-arrow-image-b"
                        />
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div
              data-w-id="aeb35c57-a2fb-8f94-e8b6-a01b0ce2ceca"
              className="erp-help-transform_content-right"
              data-aos="fade-left"
            >
<Swiper
  modules={[Autoplay, Grid]}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  loop={true}
  spaceBetween={5}
  slidesPerView={2}
  style={{marginBottom:"30px"}}
  grid={{
    rows: 2,
    fill: 'row',
  }}
  breakpoints={{
    0: {
      // 👇 For small devices
      slidesPerView: 1,
      grid: {
        rows: 1, // remove the 2-row layout on mobile
      },
    },
    768: {
      // 👇 Tablet
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    1024: {
      // 👇 Desktop
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
  }}
  className="erp-help-transform_swiper"
>
  {[
    {
      title: "Admission & Academics Management",
      description:
        "Manages the student admission process, academic records, course enrollments, and faculty assignments, ensuring a streamlined academic workflow.",
      icon: "https://cdn.prod.website-files.com/67d5e6f8c0c32c5ff1c7f21d/67d9940cf61fbec096d2a02c_base-station-line.svg",
    },
    {
      title: "Hostel & Transport Management",
      description:
        "Handles hostel allotment, room management, mess facilities, and student transportation, ensuring smooth accommodation and commute for students.",
      icon: "https://cdn.prod.website-files.com/67d5e6f8c0c32c5ff1c7f21d/67d997d6096a6c911bd9c1a9_centos-line.svg",
    },
    {
      title: "Learning & Library Management",
      description:
        "Supports e-learning modules, online course content, library cataloging, and book issuance, enhancing the academic experience for students and faculty.",
      icon: "https://cdn.prod.website-files.com/67d5e6f8c0c32c5ff1c7f21d/67d997d6096a6c911bd9c1a9_centos-line.svg",
    },
    {
      title: "Alumni & Placement Management",
      description:
        "Manages alumni engagement, networking events, and placement activities, connecting students with job opportunities and industry professionals.",
      icon: "https://cdn.prod.website-files.com/67d5e6f8c0c32c5ff1c7f21d/67d9981903a04ab037735334_command-fill.svg",
    },
    {
      title: "COE & Advanced Reporting",
      description:
        "Manages examination processes, results, certifications, and generates detailed reports for data-driven decision-making.",
      icon: "https://cdn.prod.website-files.com/67d5e6f8c0c32c5ff1c7f21d/67d9981903a04ab037735334_command-fill.svg",
    },
    {
      title: "Office & Governance Management",
      description:
        "Covers administrative operations, document handling, compliance, and governance policies to maintain institutional efficiency.",
      icon: "https://cdn.prod.website-files.com/67d5e6f8c0c32c5ff1c7f21d/67d9981903a04ab037735334_command-fill.svg",
    },
    {
      title: "Grievance & Survey Management",
      description:
        "Facilitates student and faculty feedback, grievance redressal mechanisms, and surveys to improve institutional policies and services.",
      icon: "https://cdn.prod.website-files.com/67d5e6f8c0c32c5ff1c7f21d/67d9981903a04ab037735334_command-fill.svg",
    },
    {
      title: "Portal & Payment Management",
      description:
        "Oversees the institutional website, student portals, online fee payments, and digital transactions for a seamless user experience.",
      icon: "https://cdn.prod.website-files.com/67d5e6f8c0c32c5ff1c7f21d/67d9981903a04ab037735334_command-fill.svg",
    },
  ].map((item, i) =>
  
  {
    const aosEffect = i % 2 === 0 ? "fade-up" : "fade-down";
    return(
    <SwiperSlide key={i}>
      <div className="erp-help-transform_card erp-drop-shadow" data-aos={aosEffect}>
        <div className="erp-help-transform_icon-wrapper">
          <img
            loading="lazy"
            src={item.icon}
            alt={item.title}
            className="erp-help-transform_icon-image"
          />
        </div>
        <div className="erp-help-transform_text-block">
          <div className="erp-text-lg erp-text-weight-semibold erp-text-color-black-900">
            {item.title}
          </div>
          <div className="erp-why-appe-card_text">
            <div className="erp-text-sm erp-text-color-black-600">
              {item.description}
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  )
    }
  )}
</Swiper>
              <div className="erp-help-transform_bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default AtelierErp
