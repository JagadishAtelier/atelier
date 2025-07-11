import React, { useEffect,useRef } from 'react';
import './HeroSection.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  useEffect(() => {
    const dash = document.querySelector(".dashobard-wrapper");
    const alignX = dash.offsetWidth / 2;
    const alignY = dash.offsetHeight / 6;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".dashobard-wrapper",
        start: "top 60%",          // when the top of dashboard hits 60% viewport
        end: "+=1500",             // total scroll distance
        scrub: true,
        markers: false,
      }
    });

    // 🟪 Step 1: Move diagonally to alignment
    tl.to(".dashobard-wrapper", {
      x: alignX,
      y: alignY,
      ease: "power2.out",
      duration: 1
    });

    // 🟨 Step 2: After alignment, keep going down on scroll
    tl.to(".dashobard-wrapper", {
      y: alignY + 600, // move down from aligned position
      ease: "none",
      duration: 1
    });

  }, []);
  
  
  
  


  return (
    <div>
      <div data-w-id="fa14a2cc-8e59-b8f9-6108-3fd80f7015c7" className="wrapper">
        <div id="Pricing" className="section">
          <div className="hero-section-wrapper">
            <div className="container">
              <div className="hero">
                <div className="content-holder">
                  <div className="animate-on-load-01">
                    <div className="hero-heading-holder">
                      <h1 className="hero-text">
                        Your Money. Your Sky. Your Future is here.
                      </h1>
                    </div>
                  </div>
                  <div className="animate-on-load-02">
                    <div className="paragraph-holder awards-holder">
                      <p className="white-text">
                        Built on a foundation of trust and security, we ensure
                        that your finances are always protected.
                      </p>
                    </div>
                  </div>
                  <div className="animate-on-load-03">
                    <div className="button-holder _100width">
                      <div className="form-block l w-form">
                        <form
                          id="wf-form-Career-Tips"
                          name="wf-form-Career-Tips"
                          data-name="Career Tips"
                          method="get"
                          className="form"
                          data-wf-page-id="67f82974e65f89a3c0ca8b6f"
                          data-wf-element-id="aa86b3fd-1cd2-cc59-4bb7-19723e1ac5cc"
                        >
                          <input
                            className="text-field transparent w-input"
                            maxLength="256"
                            name="email-2"
                            data-name="Email 2"
                            placeholder="Email@example.com"
                            type="email"
                            id="email-2"
                            required
                          />
                          <input
                            type="submit"
                            data-wait="Please wait..."
                            className="button form-button w-button"
                            value="Open Account"
                          />
                        </form>
                        <div className="success-message w-form-done">
                          <div>
                            <span>Thank you!</span> We'll reach out soon
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="animate-on-load-04">
                  <div className="perspective">
                    <div className="dashobard-wrapper">
                      <div className="dashboad-holder">
                        <img
                          src="https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82d4295804261dec89f6a_Dashboard.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 2391px) 100vw, 2391px"
                          srcSet="
                            https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82d4295804261dec89f6a_Dashboard-p-500.png   500w,
                            https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82d4295804261dec89f6a_Dashboard-p-800.png   800w,
                            https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82d4295804261dec89f6a_Dashboard-p-1080.png 1080w,
                            https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82d4295804261dec89f6a_Dashboard-p-1600.png 1600w,
                            https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82d4295804261dec89f6a_Dashboard-p-2000.png 2000w,
                            https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82d4295804261dec89f6a_Dashboard.png        2391w
                          "
                          className="dashobard-image"
                        />
                      </div>
                      <div className="blue-blur"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-holder">
              <div
                className="bg-video w-background-video w-background-video-atom"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    backgroundImage:
                      "url('https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c%2F6806b1a9934255cdbea583c4_7031039_Above_Abstract_3840x2160_1-poster-00001.jpg')",
                  }}
                  data-object-fit="cover"
                >
                  <source
                    src="https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/6806b1a9934255cdbea583c4_7031039_Above_Abstract_3840x2160_1-transcode.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/6806b1a9934255cdbea583c4_7031039_Above_Abstract_3840x2160_1-transcode.webm"
                    type="video/webm"
                  />
                </video>
              </div>
              <div className="bg-overlay"></div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="secondary-hero-holder">
            <div className="container secondary-hero">
              <div className="center-on-container">
                <div className="feature-grid-content-holder-2">
                  <div className="fade-in-on-scroll">
                    <h3 className="title">Banking, Anytime, Wherever You Are</h3>
                  </div>
                  <div className="line"></div>
                  <div className="fade-in-on-scroll">
                    <p>
                      Manage your finances on the go with a seamless mobile
                      experience. Whether you're transferring money, paying
                      bills, or tracking expenses, everything is just a tap away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="company-logo-wrapper">
      <div className="company-logo-holder">
        <div
          className="fade-in-on-scroll"
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            opacity: 1,
          }}
        >
          <div className="company-logo-holder-2">
            <div
              className="company-logo-container"
              style={{
                transform:
                  "translate3d(-60.089%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b85_Logo%2003.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b84_Logo%2001.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b83_Logo%2002.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b82_Logo%2004.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b79_Logo%2005.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b84_Logo%2001.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b83_Logo%2002.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82974e65f89a3c0ca8baf_Logo%2005.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
            </div>

            <div
              className="company-logo-container"
              style={{
                transform:
                  "translate3d(-60.089%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b85_Logo%2003.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b84_Logo%2001.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b83_Logo%2002.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b82_Logo%2004.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b79_Logo%2005.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b84_Logo%2001.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b83_Logo%2002.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
              <div className="company-logo-wrapper-2">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82974e65f89a3c0ca8baf_Logo%2005.svg"
                  alt=""
                  className="company-logo-2"
                />
              </div>
            </div>

            <div className="graident-for-logos"></div>
            <div className="graident-for-logos right"></div>
          </div>
        </div>

        <div
          className="fade-in-on-scroll"
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            opacity: 1,
          }}
        >
          <div className="container _100width">
            <div
              className="line"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default HeroSection;
