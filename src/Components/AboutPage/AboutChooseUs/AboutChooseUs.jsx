import React,{useEffect} from 'react';
import './AboutChooseUs.css';

function AboutChooseUs() {
  useEffect(() => {
    const cards = document.querySelectorAll(".abt-cho-choose-v1-single-wrap");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Rotation sensitivity
        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      });
    });
  }, []);
  return (
    <div>
      <section className="section choose-v1">
        <div className="w-layout-blockcontainer-abt-cho abt-cho-container w-container-abt-cho">
          <div className="abt-cho-choose-v1-wrapper">
            <div className="abt-cho-easy-top-wrap" data-aos="fade-right">
              <h2
                data-w-id="b9d69243-e3f6-8620-3a4c-0895a809a2dd"
                style={{ opacity: 1 }}
                className="abt-cho-easy-title"
              >
                Why choose us
              </h2>
              <p
                data-w-id="b9d69243-e3f6-8620-3a4c-0895a809a2df"
                style={{ opacity: 1 }}
                className="abt-cho-easy-details"
              >
                AI delivers advanced Search &amp; Ads relevance solutions
                powered by world-class experts in search, recommendation, and
                machine learning.
              </p>
              <div
                data-w-id="b9d69243-e3f6-8620-3a4c-0895a809a2e1"
                style={{ opacity: 1 }}
                className="abt-cho-easy-btn-wrap"
              >
                <a
                  data-w-id="b9d69243-e3f6-8620-3a4c-0895a809a2e2"
                  href="/inner-pages/contact"
                  className="abt-cho-secondary-button gray w-inline-block"
                >
                  <div className="abt-cho-secondary-btn-wrap">
                    <div className="abt-cho-secondary-text-wrap">
                      <div className="abt-cho-secondary-btn-text">Get Started</div>
                    </div>
                    <div className="abt-cho-secondary-icon-wrap">
                      <img
                        src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/681cc09d12f97f72f483b28a_Arrow%20Icon%20(1).svg"
                        loading="lazy"
                        alt="Arrow Icon"
                        className="secondary-btn-icon"
                      />
                    </div>
                  </div>
                  <div className="abt-cho-secondary-btn-bg gray"></div>
                </a>
              </div>
            </div>

            <div className="abt-cho-choose-v1-wrap">
              <div className="abt-cho-choose-v1-grid-wrap">
                {[
                  {
                    id: '9f0d0cd7-8286-208f-1c22-5690e0cf3266',
                    icon: 'https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/68233150fe73d80bd1642f3d_Security%20Icon.svg',
                    miniIcon: 'https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/6823311d904c296d421a8637_Security%20Icon%20Mini.svg',
                    title: 'Elite-Level security',
                    desc:
                      'Experience seamless interaction for a holistic financial picture of tools and services that work.',
                  },
                  {
                    id: '92407da1-9a1c-d47b-a12e-b9266dc740de',
                    icon: 'https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/6823311de09069d12c518751_Drag%20Icon.svg',
                    miniIcon: 'https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/6823311de1ee02f4f0d18a65_Drag%20Icon%20Mini.svg',
                    title: 'Effortless Integration',
                    desc:
                      'Create a custom version or clone of Spendee for your own app or business Customize your categories',
                  },
                  {
                    id: 'fe822191-2a0d-8c03-034d-2fe72005999f',
                    icon: 'https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/6823311d6f49ba3728d33b8f_Dashboard%20Icon.svg',
                    miniIcon: 'https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/6823311d76e0c9379506d6be_Dashboard%20Icon%20Mini.svg',
                    title: 'Custom Dashboard',
                    desc:
                      'Is valuable for everyone using Spondee across devices and sharing Spondee with others.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    data-w-id={item.id}
                    style={{ opacity: 1 }}
                    className="abt-cho-choose-v1-single-wrap"
                    data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} 
                  >
                    <div className="abt-cho-choose-v1-single-item">
                      <div className="abt-cho-choose-image-wrap">
                        <div className="abt-cho-choose-v1-image-icon">
                          <img
                            src={item.icon}
                            loading="lazy"
                            alt="Choose V1 Image"
                            className="abt-cho-choose-v1-image"
                          />
                        </div>
                      </div>
                      <div className="abt-cho-choose-title-wrap">
                        <img
                          src={item.miniIcon}
                          loading="lazy"
                          alt="Choose Title Icon"
                          className="abt-cho-choose-title-icon"
                        />
                        <div className="abt-cho-choose-v1-single-title">{item.title}</div>
                      </div>
                      <p className="abt-cho-choose-v1-single-details">{item.desc}</p>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/6823311de1ee02f4f0d18a59_Plus%20Circle.svg"
                      loading="lazy"
                      alt="Choose Plus Icon"
                      className="abt-cho-choose-plus-icon"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutChooseUs;
