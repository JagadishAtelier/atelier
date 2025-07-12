import React from 'react';
import './AboutBusiness.css';

function AboutBusiness() {
  return (
    <div>
      <section
        data-w-id="360d9050-828a-0ad5-3b12-347250b6ec21"
        className="section business"
      >
        <div className="w-layout-blockcontainer-about-bus container-about-bus w-container-about-bus">
          <div className="business-wrapper">
            <div className="about-business-flex-wrap">
              {/* LEFT */}
              <div className="about-business-left-wrap">
                <h2
                  data-w-id="3fd46d74-d992-bab3-e0b6-b55f075ff3ef"
                  style={{ opacity: 1 }}
                  className="about-business-title"
                >
                  Why We’re Building the Brain of Modern Business
                </h2>
                <p
                  data-w-id="34eeeb16-9641-b90d-4201-b939fe641c29"
                  style={{ opacity: 1 }}
                  className="about-business-details"
                >
                  In a world overflowing with data and complexity, we believe
                  management should be clear, responsive, and intelligent — not
                  manual, fragmented, or reactive.
                </p>
                <div
                  data-w-id="468d3220-e8eb-2cb9-451e-fccfab97214d"
                  style={{ opacity: 1 }}
                  className="about-business-btn-wrap"
                >
                  <a
                    data-w-id="708cba3f-26ba-adc2-d98b-854446de534c"
                    href="/inner-pages/contact"
                    className="about-bus-secondary-button w-inline-block"
                  >
                    <div className="about-bus-secondary-btn-wrap">
                      <div className="about-bus-secondary-text-wrap">
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
                    <div style={{ width: '0%' }} className="secondary-btn-bg"></div>
                  </a>
                </div>
              </div>

              {/* RIGHT */}
              <div className="about-business-right-wrap">
                <div className="about-business-right-image-wrap">
                  <div className="about-bus-approach-line-wrap">
                    <div className="about-bus-approach-line"></div>
                  </div>
                </div>

                <div className="about-business-item-flex-wrap">
                  {[
                    {
                      id: '969d4f39-efba-e12a-0baa-a0fa045ce55f',
                      title: 'Design for Clarity',
                      desc:
                        'Every feature we build is crafted to simplify decision-making. We strip away the noise so your team can focus on what truly matters.',
                    },
                    {
                      id: '01245270-19b5-fa10-25fe-1486dd44c95e',
                      title: 'Automate the Amplify the Strategic',
                      desc:
                        'AI should work quietly in the background, automating the things humans shouldn’t have to worry.',
                    },
                    {
                      id: 'a95b36d8-4b6a-f83e-35a0-2c6aa0eb33d7',
                      title: 'Technology Should Grow',
                      desc:
                        'We don’t believe in one-size-fits-all. Our platform evolves with your business — learning, adapting, and becoming smarter as you do.',
                    },
                    {
                      id: '30effd79-06a5-8f79-d6f1-7d18c4c6995b',
                      title: 'Built for Momentum',
                      desc:
                        'Daily monitoring, creative refreshes, budget shifting, and ongoing experiments.',
                    },
                    {
                      id: 'f9367d0a-1881-13c2-1e63-03fd0d8bf731',
                      title: 'Smarter Every Day',
                      desc:
                        'Weekly or monthly reports with full breakdowns of performance and insights.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      data-w-id={item.id}
                      style={{ opacity: 1 }}
                      className="about-business-single-wrap"
                    >
                      <div className="about-business-single-title">{item.title}</div>
                      <p className="about-business-single-details">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutBusiness;
