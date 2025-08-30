import React, { useState } from "react";
import "./FAQSection.css";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);


  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: "What is Aien.ai?",
      answer:
        "Aliens is an AI-powered website builder that helps you create professional, responsive websites quickly and easily—no coding required.",
    },
    {
      question: "Do I need coding skills to use Aien.ai?",
      answer:
        "Not at all! Our platform uses AI to generate and customize designs, so anyone can build a beautiful website without writing code.",
    },
    {
      question: "Can I export my website to Webflow?",
      answer:
        "Yes, you can export clean, Webflow-ready code directly from Aien.ai to continue editing or publish on your own.",
    },
    {
      question: "Is my data secure on Aien.ai?",
      answer:
        "Absolutely. We use industry-leading encryption and layered security to protect your data at every stage.",
    },
    {
      question: "Can I customize the AI-generated designs?",
      answer:
        "Yes! Once your site is generated, you can fully customize every element to match your brand and preferences.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 customer support through chat and email to assist you whenever you need help.",
    },
  ];

  return (
    <div id='faq' data-aos="zoom-in">
      <div className="w-layout-blockcontainer containers w-container" style={{marginTop:'5%'}}>
        <div className="faq-wrapper">
          <div className="faq-flex-wrap">
            <div className="faq-left-wrap">
              <h2
                className="faq-title"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                FAQs
              </h2>
              <p
                className="faq-details"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                Our team of experienced financial advisors is here to provide
                personalized guidance and support.
              </p>
            </div>

            {/* FAQ Right Side */}
            <div className="faq-right-wrap">
              <div className="faq-item-flex-wrap">
                {faqItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <div
                      className="faq-single-wrap"
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div
                        className="faq-question-wrap"
                        onClick={() => toggleAnswer(index)}
                        style={{ cursor: "pointer" }}
                      >
<div
  className="faq-question"
  style={{
    color: activeIndex === index ? "#000" : "rgb(154, 154, 154)", // Black when active
    fontWeight: activeIndex === index ? "600" : "normal",
  }}
>

                          {item.question}
                        </div>
                        <img
                          src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/681def4f40f4dd8798e5ab52_Arrow%20Icon.svg"
                          alt="Faq Icon"
                          className="faq-icon"
                          style={{
                            opacity: 0.5,
                            filter: "brightness(0) invert(0)",
                            transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s",
                          }}
                        />
                      </div>
                      <div
                        className="faq-answer-wrap"
                        style={{
                          height: activeIndex === index ? "auto" : "0px",
                          overflow: "hidden",
                          transition: "height 0.3s ease",
                        }}
                      >
                        <p className="faq-answer">{item.answer}</p>
                      </div>
                    </div>
                    {index !== faqItems.length - 1 && (
                      <div
                        className="faq-item-line"
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      ></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
