import React from "react";
import "./AboutPageHero.css";
import AboutPageWork from "../AboutPageWork/AboutPageWork";
import AboutBusiness from "../AboutBusiness/AboutBusiness";
import AboutChooseUs from "../AboutChooseUs/AboutChooseUs";
import AboutTestimonial from "../AboutTestimonial/AboutTestimonial";
import AboutDashBoard from "../AboutDashBoard/AboutDashBoard";

function AboutPageHero() {
  return (
    <div>
      <section className="section about-page">
        <div className="w-layout-blockcontainer-about about-container w-container-about">
          <div className="about-wrapper">
            <div className="about-top-wrap">
              <div
                data-w-id="b9a2133f-03e3-caf1-ce0b-9803d6372efa"
                style={{ opacity: 1 }}
                className="section-sub-title-wrap"
              >
                <img
                  src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/681d7a5ac0cebd9db8b41a3b_Sub%20Title%20Image%2001.svg"
                  loading="lazy"
                  alt="Section Sub Image"
                  className="section-sub-image"
                />
                <div className="section-sub-title">Your Product Partner</div>
                <img
                  src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/681d7a5a9c17e0b7b39e7425_Sub%20Title%20Image%2002.svg"
                  loading="lazy"
                  alt="Section Sub Image"
                  className="section-sub-image"
                />
              </div>
              <h1
                data-w-id="3736c57a-46b3-3739-33f2-13326dc010ab"
                style={{ opacity: 1 }}
                className="about-page-title"
              >
                Human Intelligence Meets Artificial Intelligence
              </h1>
              <p
                data-w-id="b1189f76-eff5-4e92-6964-d1a50aba5043"
                style={{ opacity: 1 }}
                className="about-details"
              >
                Combining creativity and technology to unlock new possibilities.
                Smart solutions powered by people and machines working together.
              </p>

              <div
                data-w-id="18e63b67-eab7-7248-bb54-87c81e5ce7a2"
                style={{ opacity: 1 }}
                className="blog-button-wrap"
              >
                <a
                  data-w-id="18e63b67-eab7-7248-bb54-87c81e5ce7a3"
                  href="/inner-pages/contact"
                  className="secondary-button-about w-inline-block"
                >
                  <div className="secondary-btn-wrap">
                    <div className="secondary-text-wrap">
                      <div className="secondary-btn-text">Get Started</div>
                    </div>
                    <div className="secondary-icon-wrap">
                      <img
                        src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/681cc09d12f97f72f483b28a_Arrow%20Icon%20(1).svg"
                        loading="lazy"
                        alt="Arrow Icon"
                        className="secondary-btn-icon"
                      />
                      <img
                        src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/681cc09d12f97f72f483b28a_Arrow%20Icon%20(1).svg"
                        loading="lazy"
                        alt="Arrow Icon"
                        className="secondary-btn-icon"
                      />
                    </div>
                  </div>
                  <div style={{ width: "0%" }} className="secondary-btn-bg" />
                </a>

                <a
                  data-w-id="18e63b67-eab7-7248-bb54-87c81e5ce7ae"
                  href="/inner-pages/contact"
                  className="primary-button-about w-inline-block"
                >
                  <div className="primary-button-wrap">
                    <div className="primary-btn-text">Contact us</div>
                  </div>
                  <div style={{ width: "0%" }} className="primary-btn-bg" />
                </a>
              </div>
            </div>

            <div
              data-w-id="987c1494-b34c-c70c-6399-b5e9b4ee4582"
              style={{ opacity: 1 }}
              className="about-wrap"
            >
              <img
                src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/682032fee5524b061392e001_About%20Image.webp"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                srcSet="
                  https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/682032fee5524b061392e001_About%20Image-p-500.webp   500w,
                  https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/682032fee5524b061392e001_About%20Image-p-800.webp   800w,
                  https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/682032fee5524b061392e001_About%20Image-p-1080.webp 1080w,
                  https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/682032fee5524b061392e001_About%20Image-p-1600.webp 1600w,
                  https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/682032fee5524b061392e001_About%20Image-p-2000.webp 2000w,
                  https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/682032fee5524b061392e001_About%20Image.webp        2560w
                "
                alt="About Image"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>
      <AboutPageWork/>
      <AboutBusiness/>
      <AboutChooseUs/>
      <AboutTestimonial/>
      <AboutDashBoard/>
    </div>
  );
}

export default AboutPageHero;
