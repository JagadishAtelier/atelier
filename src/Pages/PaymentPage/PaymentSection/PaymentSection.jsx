import React from 'react'
const giantsData = [
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cad29acc56c3e5d69658_icon-2.svg",
      alt: "icon-2",
      title: "Scalable Solutions",
      text: "From small startups to global enterprises, our platform adapts to your growth without disruption.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba7d0796fa368de7642_icon-3.svg",
      alt: "icon-3",
      title: "Seamless Checkout",
      text: "Deliver a frictionless payment experience with customizable checkout flows and one-click options.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba899756b728354290f_icon-4.svg",
      alt: "icon-4",
      title: "Mobile-Optimized",
      text: "Accept payments anytime, anywhere with responsive designs that work across all devices.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba790a745724ec63385_icon-5.svg",
      alt: "icon-5",
      title: "Smooth integrations",
      text: "Connect effortlessly with CRMs, ERPs, and accounting tools to simplify financial management.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba890a745724ec633ac_icon-6.svg",
      alt: "icon-6",
      title: "Interactive Dashboards",
      text: "Get real-time insights into transactions, revenue trends, and customer payment behavior.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba96178b79e5d5c8615_icon-7.svg",
      alt: "icon-7",
      title: "24/7 Support",
      text: "Access round-the-clock assistance from our expert payment team whenever you need it.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba96949c37d0725b6e9_icon-8.svg",
      alt: "icon-8",
      title: "Continuous  updates",
      text: "Stay ahead with regular enhancements, security patches, and new features at no extra cost.",
    },
    {
      icon: "https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6821cba97cc578cffd2d5330_icon-9.svg",
      alt: "icon-9",
      title: "Safe data management",
      text: "Your data is protected with end-to-end encryption, PCI DSS compliance, and fraud detection.",
    },
  ];
function PaymentSection() {
  return (
    <div data-aos="zoom-in">
      <div className="gia-giants-section">
      <div className="gia-section-spacing">
        <div className="gia-container">
          <div className="gia-section-heading giants-heading">
            <div className="gia-c-sub-title-wrap">
              <div className="gia-c-sub-title">Atelier Giants</div>
            </div>
            <div className="gia-common-title-wrap">
              <h1 className="gia-common-title">
                Dependable for both giants and startups
              </h1>
            </div>
          </div>
          <div className="gia-giants-layout">
            {giantsData.map(({ icon, alt, title, text }, index) => (
              <div className="gia-giants-item" key={index}>
                <div className="gia-giants-item-top">
                  <div className="gia-giants-item-icon-wrap">
                    <img
                      src={icon}
                      alt={alt}
                      loading="lazy"
                      className="gia-giants-item-icon"
                    />
                  </div>
                  <div className="gia-giants-item-title-wrap">
                    <h2 className="gia-giants-item-title">{title}</h2>
                  </div>
                </div>
                <div className="gia-giants-item-text-wrap">
                  <p className="gia-giants-item-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PaymentSection
