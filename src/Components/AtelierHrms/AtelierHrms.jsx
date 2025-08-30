import React from 'react'
import './AtelierHrms.css'
const features = [
    {
      image:
        'https://cdn.prod.website-files.com/66a76e2a019784d7d9a1624d/66be890444f5c7dd12562168_Image%20Card%2001.webp',
      title: 'Improve productivity and control your workload',
      text:
        'Help you organize, prioritize, and track your task by creating to-do lists, assign due dates, set priorities, and track your progress.',
      className: 'hrm-card-image-01 hrm-slide-bottom-600ms',
    },
    {
      image:
        'https://cdn.prod.website-files.com/66a76e2a019784d7d9a1624d/66be89052426593fc143ea5a_Image%20Card%2002.webp',
      title: 'Always stay on top of your schedule',
      text:
        'Integrate with your calendar and manage all of your tasks and appointments in one place.',
      className: 'hrm-card-image-02 hrm-slide-bottom-800ms',
    },
    {
      image:
        'https://cdn.prod.website-files.com/66a76e2a019784d7d9a1624d/66be890506b9209e0962a966_Image%20Card%2003.webp',
      title: 'Staying on top of your tasks and avoiding procrastination',
      text:
        'We help you remember things in the moment when it matters most, and can even suggest ways to be more productive.',
      className: 'hrm-card-image-03 hrm-slide-bottom-600ms',
    },
    {
      image:
        'https://cdn.prod.website-files.com/66a76e2a019784d7d9a1624d/66be890500692c2c469ddb50_Image%20Card%2004.webp',
      title: 'Work on multiple project at a time',
      text:
        'Forget complex project management tools. Create the simplest project boards, assign tasks to team members, and easy track the progress of each project.',
      className: 'hrm-card-image-04 hrm-slide-bottom-600ms',
    },
  ];
function AtelierHrms() {
  return (
    <div data-aos="zoom-in">
       <section id="Feature" className="hrm-feature-01-section">
      <div className="hrm-feature-01-desktop">
        <div className="hrm-vertical-padding-small">
          <div className="hrm-w-layout-blockcontainer hrm-container-large hrm-w-container">
            <div className="hrm-divider-blank-medium" />
            <div className="hrm-title-section-center">
              <div className="hrm-feature-title">
              <div className='header-design-for-all'>
                  <div className="pla-c-sub-title-wrap">
              <div className="pla-c-sub-title">Atelier HRM</div>
            </div>
            </div>
                <h1 className="hrm-section-title hrm-slide-bottom-400ms">
                  Take control of your day organize your life
                </h1>
              </div>
              <div className="hrm-sub-title-center hrm-slide-bottom-600ms">
                <p className="hrm-text-neutral-03">
                  Experience less stress, increased efficiency, and the
                  satisfaction of a job well done. Simplify your work life
                  and achieve more with less effort.
                </p>
              </div>
            </div>
            <div className="hrm-feature-bento-01 hrm-slide-bottom-400ms">
              <div className="hrm-w-layout-grid hrm-grid-feature-01">
                {features.slice(0, 2).map((f, i) => (
                  <div className="hrm-feature-wrapper" key={i}>
                    <div className="hrm-feature-image-01">
                      <img src={f.image} alt="Feature Graphic" className={f.className} />
                    </div>
                    <div className="hrm-feature-01-content">
                      <h4 className="hrm-feature-bento-title hrm-text-weight-medium">
                        {f.title}
                      </h4>
                      <p className="hrm-text-neutral-03">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hrm-w-layout-grid hrm-grid-feature-02">
                {features.slice(2, 4).map((f, i) => (
                  <div className="hrm-feature-wrapper" key={i + 2}>
                    <div className="hrm-feature-image-01">
                      <img src={f.image} alt="Feature Graphic" className={f.className} />
                    </div>
                    <div className="hrm-feature-01-content">
                      <h4 className="hrm-feature-bento-title hrm-text-weight-medium">
                        {f.title}
                      </h4>
                      <p className="hrm-text-neutral-03">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      {/* <div className="feature-01-mobile">
        <div className="vertical-padding-small">
          <div className="w-layout-blockcontainer container-large w-container">
            <div className="divider-blank-medium" />
            <div className="title-section-center">
              <div className="feature-title">
                <div className="small-title">
                  <p className="text-neutral-03 text-accent">Our Features</p>
                </div>
                <h3 className="section-title slide-bottom-400ms">
                  Take control of your day,<br />
                  <span className="text-weight-bold">organize your life</span>
                </h3>
              </div>
              <div className="sub-title-center slide-bottom-600ms">
                <p className="text-neutral-03">
                  Experience less stress, increased efficiency, and the
                  satisfaction of a job well done. Simplify your work life
                  and achieve more with less effort.
                </p>
              </div>
            </div>
            <div className="feature-bento-01-mobile slide-bottom-400ms">
              {features.map((f, i) => (
                <div className="feature-wrapper-01" key={i}>
                  <div className="feature-image-01">
                    <img src={f.image} alt="Feature Graphic" className={f.className} />
                  </div>
                  <div className="feature-01-content">
                    <h4 className="feature-bento-title text-weight-medium">
                      {f.title}
                    </h4>
                    <p className="text-card">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </section>
    </div>
  )
}

export default AtelierHrms
