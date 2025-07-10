import React from "react";
import "./WhyUsSection.css";

function WhyUsSection() {
  const animationStyle = {
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    opacity: 1,
  };

  const animationStyleHidden = {
    transform:
      "translate3d(0px, 45px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    opacity: 1,
  };

  return (
    <div>
      <div className="container">
        <div className="spacing">
          <div className="center-text-holder">
            <div className="tag" style={animationStyle}>
              <div>Why us</div>
            </div>
            <div className="title-holder l" style={animationStyle}>
              <h2 className="title">Banking Made Simple, Secure, and Smart</h2>
            </div>
            <div className="paragraph-holder" style={animationStyle}>
              <p>
                Built on a foundation of trust and security, we ensure that your
                finances are always protected.
              </p>
            </div>
          </div>

          <div className="new-features-holder">
            <div className="w-layout-grid new-features-grid">
              <div
                id="w-node-e5b4a9f2-978a-d998-ece6-b03bfedc8d69-c0ca8b6f"
                className="feature-grid-content"
              >
                <div className="feature-grid-content-holder-2">
                  <div className="fade-in-on-scroll" style={animationStyle}>
                    <h3 className="title">
                      Banking, Anytime, Wherever You Are
                    </h3>
                  </div>
                  <div className="line" style={animationStyle}></div>
                  <div className="fade-in-on-scroll" style={animationStyle}>
                    <p>
                      Manage your finances on the go with a seamless mobile
                      experience. Whether you're transferring money, paying
                      bills, or tracking expenses, everything is just a tap
                      away.
                    </p>
                  </div>
                </div>
              </div>

              <div
                id="w-node-e5b4a9f2-978a-d998-ece6-b03bfedc8d71-c0ca8b6f"
                className="feature-graphic-holder"
                style={animationStyle}
              >
                <div className="feature-image-container">
                  <img
                    sizes="(max-width: 1710px) 100vw, 1710px"
                    srcSet="
                      https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c7509847ef60cfc13_Feature%20Images%20(2)-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c7509847ef60cfc13_Feature%20Images%20(2)-p-800.jpg 800w,
                      https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c7509847ef60cfc13_Feature%20Images%20(2)-p-1080.jpg 1080w,
                      https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c7509847ef60cfc13_Feature%20Images%20(2)-p-1600.jpg 1600w,
                      https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c7509847ef60cfc13_Feature%20Images%20(2).jpg 1710w"
                    src="https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c7509847ef60cfc13_Feature%20Images%20(2).jpg"
                    alt=""
                    loading="lazy"
                    className="feature-image-full"
                  />
                  <div
                    className="feature-overlay"
                    style={animationStyle}
                  >
                    <div className="content-touch">
                      <h4 className="white-text">Simple yet secure</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-layout-grid new-features-grid">
              <div
                id="w-node-e5b4a9f2-978a-d998-ece6-b03bfedc8d76-c0ca8b6f"
                className="feature-graphic-holder"
                style={{ opacity: 1 }}
              >
                <div className="feature-image-container">
                  <img
                    sizes="(max-width: 1710px) 100vw, 1710px"
                    srcSet="
                      https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c1726da58cf00eedb_Feature%20Images%20(1)-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c1726da58cf00eedb_Feature%20Images%20(1)-p-800.jpg 800w,
                      https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c1726da58cf00eedb_Feature%20Images%20(1)-p-1080.jpg 1080w,
                      https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c1726da58cf00eedb_Feature%20Images%20(1)-p-1600.jpg 1600w,
                      https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c1726da58cf00eedb_Feature%20Images%20(1).jpg 1710w"
                    src="https://cdn.prod.website-files.com/67f82974e65f89a3c0ca8b7c/67f8371c1726da58cf00eedb_Feature%20Images%20(1).jpg"
                    alt=""
                    loading="lazy"
                    className="feature-image-full"
                  />
                  <div className="feature-overlay" style={{ opacity: 0 }}>
                    <div className="content-touch">
                      <h4 className="white-text">Track, Transfer, Save</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="w-node-e5b4a9f2-978a-d998-ece6-b03bfedc8d7a-c0ca8b6f"
                className="feature-grid-content"
              >
                <div className="feature-grid-content-holder-2">
                  <div
                    className="fade-in-on-scroll"
                    style={animationStyleHidden}
                  >
                    <h3 className="title">
                      Advanced Security Tailored For You
                    </h3>
                  </div>
                  <div className="line" style={animationStyleHidden}></div>
                  <div
                    className="fade-in-on-scroll"
                    style={animationStyleHidden}
                  >
                    <p>
                      Your peace of mind matters. That’s why we use
                      cutting-edge encryption, multi-factor authentication, and
                      real-time fraud monitoring to protect your transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUsSection;
