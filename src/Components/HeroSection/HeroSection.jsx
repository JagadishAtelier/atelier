import React, { useEffect,useRef } from 'react';
import './HeroSection.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dashBoard from '../../Assets/dashBoard.png'
const logos = [
  "https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b85_Logo%2003.svg",
  "https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b84_Logo%2001.svg",
  "https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b83_Logo%2002.svg",
  "https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b82_Logo%2004.svg",
  "https://cdn.prod.website-files.com/6537b1db509ef0817e8f4b5d/6537b1db509ef0817e8f4b79_Logo%2005.svg",
  "https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f82974e65f89a3c0ca8baf_Logo%2005.svg",
];

gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      // ✅ Desktop only (≥768px)
      "(min-width: 768px)": function () {
        gsap.fromTo(
          ".feature-grid-content-holder-2",
          { y: 0, opacity: 1 },
          { 
            y: 200,
            opacity: 0.9,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".feature-grid-content-holder-2",
              start: "top -80%",
              end: "bottom top",
              scrub: 5,
              markers: false,
            },
          }
        );
      },
  
      // ❌ Mobile (<768px) → no GSAP animation
      "(max-width: 767px)": function () {
        // Do nothing, GSAP disabled for mobile
      }
    });
  
    const dash = document.querySelector(".dashboad-holder img");
  
    if (!dash) return;
  
    const handleImageLoad = () => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          const alignX = dash.offsetWidth / 2;
          const alignY = dash.offsetHeight /0.8;
  
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".dashboad-holder",
              start: "top 40%",
              end: "+=4000",
              scrub: true,
              markers: false,
            },
          });
  
          tl.to(".dashboad-holder", {
            x: alignX,
            y: alignY,
            ease: "power2.out",
            duration: 1,
          })
          tl.to(".dashboad-holder", {
            boxShadow: `0 0 50px 50px rgba(255, 255, 255, 0.20)`,  // white glow only
            duration: 0.3,
            ease: "none",
          }, 0)
          .to(
            ".dashboad-holder",
            {
              boxShadow: `
                10px 10px 30px rgba(0, 0, 0, 0.1),
               -10px -10px 30px rgba(0, 0, 0, 0.1),
                -10px 10px 30px rgba(0, 0, 0, 0.1),
                10px -10px 30px rgba(0, 0, 0, 0.1)
              `,
              ease: "none",
              duration:0.3,
            },
            0.3
          )          
            .to(".dashboad-holder", {
              rotateY: -40,
              scale: 1.01,
              rotateZ:3,
              ease: "power1.out",
              duration: 0.5,
            }, 0.1)
            .to(".dashboad-holder", {
              rotateY: -45,
              scale: 1.015,
              ease: "power1.out",
              duration: 0.5,
            })
            
            .to(".dashboad-holder", {
              y: alignY + 300,
              rotation: 40,
              ease: "none",
              duration: 1,
            });
        },
  
        "(max-width: 767px)": function () {
          const alignX = 0;
          const alignY = dash.offsetHeight / 0.8;
  
          const tlMobile = gsap.timeline({
            scrollTrigger: {
              trigger: ".dashboad-holder",
              start: "top 40%",
              end: "+=1300",
              scrub: true,
              markers: false,
            },
          });
  
          tlMobile
            .to(".dashboad-holder", {
              y: alignY,
              ease: "power2.out",
              duration: 1,
            })
            .to(".dashboad-holder", {
              rotateY: -40,
              scale: 1.01,
              rotateZ:3,
              ease: "power1.out",
              duration: 0.5,
            }, 0.3)
            .to(".dashboad-holder", {
              rotateY: -45,
              scale: 1.015,
              ease: "power1.out",
              duration: 0.5,
            })
            .to(".dashboad-holder", {
              y: alignY + 450,
              ease: "none",
              duration: 1,
            });
        },
      });
    };
  
    // Check if image is already loaded
    if (dash.complete) {
      handleImageLoad();
    } else {
      dash.addEventListener("load", handleImageLoad);
    }
  
    return () => {
      dash.removeEventListener("load", handleImageLoad);
    };
  }, []);
  
  return (
    <div>
      <div data-w-id="fa14a2cc-8e59-b8f9-6108-3fd80f7015c7" className="wrapper" data-aos="zoom-in">
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
  src={dashBoard}
  alt="Dashboard"
  className="dashobard-image"
  loading="lazy"
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
      <div className='slider-tracker'>
      <div className="company-logo-holder">
        <div className="company-logo-holder-2">
  {[...logos, ...logos].map((logo, idx) => (
    <div className="company-logo-wrapper-2" key={idx}>
      <img
        loading="lazy"
        src={logo}
        alt={`Company Logo ${idx + 1}`}
        className="company-logo-2"
      />
    </div>
  ))}
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
    </div>
  );
}

export default HeroSection;
