import React from 'react'
function AdmissionPageProgressSection() {
  return (
    <div data-aos="zoom-in">
          <div className="prog-progress-section">
      <div className="prog-section-spacing">
        <div className="prog-container">
          <div className="prog-progress-layout">
            <div className="prog-progress-thumb-wrap">
              <img
                src="https://www.flowlu.com/site/assets/files/33045/student_2.712x443.png"
                loading="lazy"
                sizes="(max-width: 1641px) 100vw, 1641px"
                srcSet="
                https://www.flowlu.com/site/assets/files/33045/student_2.712x443.png 500w,
                https://www.flowlu.com/site/assets/files/33045/student_2.712x443.png 800w,
                https://www.flowlu.com/site/assets/files/33045/student_2.712x443.png 1080w,
                https://www.flowlu.com/site/assets/files/33045/student_2.712x443.png 1600w,
                https://www.flowlu.com/site/assets/files/33045/student_2.712x443.png 1641w
                "
                alt="Progress thumbnail"
                className="prog-progress-thumb"
              />
            </div>

            <div className="prog-section-heading progress-heading">
              <div className="prog-c-sub-title-wrap">
                <div className="prog-c-sub-title">Admissions & Academics Progress</div>
              </div>
              <div className="prog-common-title-wrap">
                <h1 className="prog-common-title">
                Track student progress and streamline academic workflows
                </h1>
              </div>
              <div className="prog-progress-text-wrap">
                <p className="prog-features-text">
                Monitor every stage of admissions and academics with real-time tracking. 
                    From application status to academic performance, keep everything transparent, 
                    measurable, and easy to manage.
                </p>
              </div>

              <ul className="prog-progress-list-wrap">
                <li className="prog-progress-list">
                Track admission applications, approvals, and enrollments with ease
                </li>
                <li className="prog-progress-list">
                Monitor student attendance, grades, and course progression in real time
                </li>
                <li className="prog-progress-list last">
                Generate insights with automated reports for faculty and administrators
                </li>
              </ul>

              <div className="prog-progress-btn-wrap">
                <a href="/inner-pages/contact" className="prog-btn-wrap">
                  <div className="prog-btn-inner">
                    <div>Get Started</div>
                    <div className="prog-btn-icon-wrap">
                      <div className="prog-btn-icon">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4767 6.1664L6.00668 1.6964L7.18501 0.518066L13.6667 6.99973L7.18501 13.4814L6.00668 12.3031L10.4767 7.83307H0.333344V6.1664H10.4767Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="prog-btn-icon">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4767 6.1664L6.00668 1.6964L7.18501 0.518066L13.6667 6.99973L7.18501 13.4814L6.00668 12.3031L10.4767 7.83307H0.333344V6.1664H10.4767Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdmissionPageProgressSection
