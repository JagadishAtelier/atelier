import React,{useEffect} from 'react';
import './AboutPageWork.css';

function AboutPageWork() {
  useEffect(() => {
    const cards = document.querySelectorAll(".about-work-card-wrap");

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
      <section className="section work">
        <div className="w-layout-blockcontainer-about-work container-about-work w-container-about-work">
          <div className="work-wrapper">
            <div className="work-top-wrap">
              <h2
                data-w-id="baf608fd-acb4-c566-3e75-d6457d474a15"
                style={{ opacity: 1 }}
                className="about-work-title"
              >
                How it works
              </h2>
              <p
                data-w-id="725d7820-06f6-08f3-be94-1c450b72908b"
                style={{ opacity: 1 }}
                className="about-work-details"
              >
                Get access to $100.000 in trading capital with Atmos, backed by
                Taurex, a globally regulated multi-asset broker.
              </p>
              <div
                data-w-id="b8d836b9-aaae-04e6-dbd7-9f43dd1df34e"
                style={{ opacity: 1 }}
                className="about-work-button"
              >
                <a
                  data-w-id="1b2e533e-88c2-ad5a-7c1b-8aefa7a22cad"
                  href="/inner-pages/contact"
                  className="secondary-button gray w-inline-block"
                >
                  <div className="secondary-btn-wrap">
                    <div className="secondary-text-wrap">
                      <div className="secondary-btn-text">Get Started</div>
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
                  <div className="secondary-btn-bg gray"></div>
                </a>
              </div>
            </div>

            <div className="about-work-wrap">
              <div className="about-work-grid-wrap">
                {[
                  {
                    icon: "https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/6820352d0a46bb29bb9e9e85_Work%20Single%20Icon%2001.svg",
                    title: "Connect Your Tools",
                    text: "Integrate your existing apps in minutes from project boards and CRMs to calendars.",
                    id: "365af3ab-8f3d-eb5a-2b20-9f547af09a8f"
                  },
                  {
                    icon: "https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/682039a03ea22ac67dc5e177_Card%20Icon%2002.svg",
                    title: "Let the AI Learn",
                    text: "Our system analyzes workflows, communication patterns, and key metrics to understand.",
                    id: "a04940eb-967b-13f1-5a61-c2c7a6575b2d"
                  },
                  {
                    icon: "https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/682039a000aa5aab286c87d4_Card%20Icon%2003.svg",
                    title: "Automate & Optimize",
                    text: "Trigger intelligent workflows, delegate tasks automatically, and receive AI-suggested.",
                    id: "74301e95-fb19-24b4-14cb-371f473d3d68"
                  },
                  {
                    icon: "https://cdn.prod.website-files.com/681b3a6cecccc4f90e5ef403/682039a036bb659c52f01142_Card%20Icon%2004.svg",
                    title: "Track & Adapt Real Time",
                    text: "Use your personalized dashboard to monitor performance, detect bottlenecks, and act on live data.",
                    id: "9fc5f4b5-cfec-0777-4dc1-df17c2c3f05b"
                  }
                ].map((card, idx) => (
                  <div
                    key={idx}
                    data-w-id={card.id}
                    style={{ opacity: 1 }}
                    className="about-work-card-wrap"
                  >
                    <img
                      src={card.icon}
                      loading="lazy"
                      alt="Work Single Icon"
                      className="work-single-icon"
                    />
                    <div className="about-work-single-title">{card.title}</div>
                    <p className="about-work-single-details">{card.text}</p>
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

export default AboutPageWork;
