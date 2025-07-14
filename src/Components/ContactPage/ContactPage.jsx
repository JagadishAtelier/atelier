import React from "react";
import "./ContactPage.css";
import AboutDashBoard from "../AboutPage/AboutDashBoard/AboutDashBoard";
function ContactPage() {
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
                Flexible Pricing That Scales With You
              </h1>
              <p
                data-w-id="b1189f76-eff5-4e92-6964-d1a50aba5043"
                style={{ opacity: 1 }}
                className="about-details"
              >
                AI delivers advanced Search & Ads relevance solutions powered by
                world-class experts in search, recommendation, and machine
                learning.
              </p>
            </div>

            <div
              data-w-id="987c1494-b34c-c70c-6399-b5e9b4ee4582"
              style={{ opacity: 1 }}
              className="about-wrap"
            ></div>
          </div>
        </div>
      </section>
      <div
      data-w-id="a027c98f-2587-5a77-a1a6-a741ad3d784c"
      style={{
        opacity: 1,
        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve-3d'
      }}
      className="con-contact-wrap"
    >
      <div className="contact-form-block w-form-con">
        <form
          id="email-form"
          name="email-form"
          method="get"
          className="con-contact-form"
          aria-label="Email Form"
        >
          <div className="con-contact-all-field-wrap">
            <div className="con-contact-single-wrapper">
              <div className="con-contact-single-wrap">
                <label htmlFor="First-Name" className="con-contact-text-label">First Name</label>
                <input
                  className="con-contact-text-field w-input"
                  maxLength="256"
                  name="First-Name"
                  placeholder="First Name"
                  type="text"
                  id="First-Name"
                />
              </div>
              <div className="con-contact-single-wrap">
                <label htmlFor="Firs-Name" className="con-contact-text-label">Last Name</label>
                <input
                  className="con-contact-text-field w-input"
                  maxLength="256"
                  name="Firs-Name"
                  placeholder="Last Name"
                  type="text"
                  id="Firs-Name"
                  required
                />
              </div>
            </div>

            <div className="con-contact-single-wrapper">
              <div className="con-contact-single-wrap">
                <label htmlFor="Enter-Your-Email" className="con-contact-text-label">Email</label>
                <input
                  className="con-contact-text-field w-input"
                  maxLength="256"
                  name="Enter-Your-Email"
                  placeholder="Enter Your Email"
                  type="email"
                  id="Enter-Your-Email"
                  required
                />
              </div>
              <div className="con-contact-single-wrap">
                <label htmlFor="Enter-Your-Phone" className="con-contact-text-label">Phone</label>
                <input
                  className="con-contact-text-field w-input"
                  maxLength="256"
                  name="Enter-Your-Phone"
                  placeholder="Enter Your Phone"
                  type="tel"
                  id="Enter-Your-Phone"
                />
              </div>
            </div>

            <div className="con-contact-single-wrapper">
              <div className="con-contact-single-wrap">
                <label htmlFor="field" className="con-contact-text-label">Message</label>
                <textarea
                  placeholder="Message"
                  maxLength="5000"
                  id="field"
                  name="field"
                  className="con-contact-text-area w-input"
                ></textarea>
              </div>
            </div>
          </div>

          <input
            type="submit"
            data-wait="Please wait..."
            className="con-submit-button w-button"
            value="Send Message"
          />
        </form>

        <div
          className="con-success-message w-form-done"
          tabIndex="-1"
          role="region"
          aria-label="Email Form success"
        >
          <div>Thank you! Your submission has been received!</div>
        </div>

        <div
          className="con-error-message w-form-fail"
          tabIndex="-1"
          role="region"
          aria-label="Email Form failure"
        >
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
    <AboutDashBoard/>
    </div>
  );
}

export default ContactPage;
