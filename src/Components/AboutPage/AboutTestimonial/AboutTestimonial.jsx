import React, { useEffect, useState } from 'react';
import './AboutTestimonial.css';

const box1Testimonials = [
  { text: "Their platform has completely transformed how we handle transactions.Amazing service, very professional and effective.", name: "Smith Runner" },
  { text: "Amazing service, very professional and effective.", name: "Jessica Poe" },
  { text: "We've grown 3x thanks to their support!.Amazing service, very professional and effective.", name: "David Lee" },
  { text: "Reliable, simple, and efficient.Amazing service, very professional and effective.", name: "Monica Ray" },
  { text: "Our team productivity improved drastically.Amazing service, very professional and effective.", name: "Chris Jordan" },
];

const box2Testimonials = [
  { text: "Their service simplified our operations. Everything just works now.Amazing service, very professional and effective.", name: "Amber Arnessia" },
  { text: "Great experience! Seamless onboarding.Amazing service, very professional and effective.", name: "Tina White" },
  { text: "No headaches, just results.Amazing service, very professional and effective.", name: "Neil Patrick" },
  { text: "Top-notch support and tools.Amazing service, very professional and effective.", name: "Laura Kane" },
  { text: "Perfect for scaling startups.Amazing service, very professional and effective.", name: "Ryan Smith" },
];

const box3Testimonials = [
  { text: "Their solution drastically improved our workflow.Amazing service, very professional and effective.", name: "Alex Gregor" },
  { text: "Minutes instead of hours. Incredible!.Amazing service, very professional and effective.", name: "George Woods" },
  { text: "We reduced manual errors by 90%.Amazing service, very professional and effective.", name: "Alicia Fox" },
  { text: "Saves us so much time.Amazing service, very professional and effective.", name: "Priya Singh" },
  { text: "Highly recommended!.Amazing service, very professional and effective.", name: "Tom Bailey" },
];

function AboutTestimonial() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [fade1, setFade1] = useState(true);
  const [fade2, setFade2] = useState(true);
  const [fade3, setFade3] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade1(false);
      setFade2(false);
      setFade3(false);

      setTimeout(() => {
        setIndex1((prev) => (prev + 1) % box1Testimonials.length);
        setIndex2((prev) => (prev + 1) % box2Testimonials.length);
        setIndex3((prev) => (prev + 1) % box3Testimonials.length);
        setFade1(true);
        setFade2(true);
        setFade3(true);
      }, 300); // match fade-out duration
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="test-section trusted">
        <div className="w-layout-blockcontainer-test test-container w-containertest">
          <div className="trusted-wrap">
            <div className="trusted-top-wrap">
              <h2 className="team-title">Trusted by 6k+ people to move business forward</h2>
            </div>

            <div className="trusted-bottom-wrap">
              {/* Row 1 */}
              <div className="trusted-row-01">
                <div className="trusted-item-list-wraap">
                  <div className="trusted-item _02">
                    <p className="trusted-item-text">{box1Testimonials[index1].text}</p>
                    <div className="client-info-02">
                      <div className="client-name-01">{box1Testimonials[index1].name}</div>
                      <img
                        src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/684c7210205b44a55c161e87_Star.svg"
                        loading="lazy"
                        alt=""
                        className="star-image"
                      />
                    </div>
                  </div>
                  <div className="border-absolute"></div>
                </div>

                <div className="trusted-item _01">
                  <img
                    src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/684c6686f9a6a8d5e2cb4ad6_Trusted%20Row%20Image.avif"
                    loading="lazy"
                    alt=""
                    className="trusted-row-bg-01"
                  />
                  <div className="trusted-text-wrap">
                    <h2>1200+</h2>
                    <div className="trusted-item-title">Satisfied Clients</div>
                  </div>
                </div>
              </div>

              {/* Row 2 (unchanged content) */}
              <div className="trusted-row-02">
                <div className="trusted-item-image">
                  <img
                    src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/684c6686532dde0099f6246b_Trusted%20Row%20Image%2002.avif"
                    loading="lazy"
                    alt=""
                    className="trusted-row-bg-02"
                  />
                </div>
                <div className="trusted-02-text-wrap">
                  <div className="trusted-02-top-text">
                    <h2>24/7</h2>
                    <div className="trusted-item-title">Our dedicated service</div>
                  </div>
                  <div className="trusted-02-bottom-text">
                    <h4>Leave the busy work to us</h4>
                    <p className="trusted-item-paragrap">
                      Keep everyone focused on the big picture, and let Cuppa automate the rest—expenses, accounting, compliance, and more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="trusted-row-03">
                <div className="trusted-item-list-wraap">
                  <div className="trusted-item _03">
                    <p className="trusted-item-text">{box2Testimonials[index2].text}</p>
                    <div className="client-info-02">
                      <div className="client-name-01">{box2Testimonials[index2].name}</div>
                      <img
                        src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/684c7210205b44a55c161e87_Star.svg"
                        loading="lazy"
                        alt=""
                        className="star-image"
                      />
                    </div>
                  </div>
                  <div className="border-absolute"></div>
                </div>

                <div className="trusted-item-list-wraap">
                  <div className="trusted-item _02">
                    <p className="trusted-item-text">{box3Testimonials[index3].text}</p>
                    <div className="client-info-02">
                      <div className="client-name-01">{box3Testimonials[index3].name}</div>
                      <img
                        src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/684c7210205b44a55c161e87_Star.svg"
                        loading="lazy"
                        alt=""
                        className="star-image"
                      />
                    </div>
                  </div>
                  <div className="border-absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutTestimonial;
