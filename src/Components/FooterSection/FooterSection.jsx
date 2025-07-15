import React from 'react';
import './FooterSection.css';

function FooterSection() {
  return (
    <div>
      <section className="foo-section footer">
        <div className="foo-container">
          <div className="foo-footer-content">
            <div className="foo-footer-info">
              <div className="foo-footer-contact" id="w-node-_38407cdc-e5a2-b07c-57ba-e616474027ef-000c7cc3">
                <div className="foo-footer-contact-text">
                  <h1 className="foo-display-h4 t---neutral-10">Contact us at</h1>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=atelierhub.official@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration:"none"}}
                  ><h1 className="foo-display-h4">  atelierhub.official@gmail.com</h1></a>
                </div>
                <div className="foo-form foo-w-form">
                  <form
                    id="wf-form-Subscribe-Form"
                    name="wf-form-Subscribe-Form"
                    method="get"
                    className="foo-subscribe-form"
                    aria-label="Subscribe Form"
                  >
                    <div className="foo-field-wrapper" id="w-node-_7046d6d2-f8aa-382a-3970-b6b17df9ef03-000c7cc3">
                      <div className="foo-input-field">
                        <input
                          className="foo-text-field foo-subscribe foo-w-input"
                          maxLength="256"
                          name="Email-address"
                          placeholder="Enter your email"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="foo-primary-button foo-w-button"
                      value="Subscribe"
                    />
                  </form>
                </div>
              </div>
              <div className="foo-footer-nav-wrap" id="w-node-_0310f138-e725-42be-dc26-959590ce9ce4-000c7cc3">
                <div className="foo-footer-nav-menu">
                  <a href="/" className="foo-navbar-link footer foo-w-inline-block">
                    <div className="foo-nav footer">Home</div>
                  </a>
                  <a href="https://lenora-template.webflow.io/#feature" className="foo-navbar-link footer w-inline-block">
                    <div className="foo-nav footer">Features</div>
                  </a>
                  <a href="https://lenora-template.webflow.io/#pricing" className="foo-navbar-link footer w-inline-block">
                    <div className="foo-nav footer">Pricing</div>
                  </a>
                  <a href="https://lenora-template.webflow.io/#integration" className="foo-navbar-link footer w-inline-block">
                    <div className="foo-nav footer">Integrations</div>
                  </a>
                  <a href="https://lenora-template.webflow.io/#contact" className="foo-navbar-link footer w-inline-block">
                    <div className="foo-nav footer">Contact</div>
                  </a>
                </div>

                <div className="foo-footer-nav-menu">
                  <a href="https://lenora-template.webflow.io/#faq" className="foo-navbar-link footer foo-w-inline-block">
                    <div className="foo-nav footer">FAQ</div>
                  </a>
                  <a href="/blog" className="foo-navbar-link footer foo-w-inline-block">
                    <div className="foo-nav footer">Blog</div>
                  </a>
                  <a href="https://lenora-template.webflow.io/#testimonial" className="foo-navbar-link footer foo-w-inline-block">
                    <div className="foo-nav footer">Testimonials</div>
                  </a>
                  <a href="/terms-and-conditions" className="foo-navbar-link footer foo-w-inline-block">
                    <div className="foo-nav footer">Terms</div>
                  </a>
                  <a href="/privacy-policy" className="foo-navbar-link footer foo-w-inline-block">
                    <div className="foo-nav footer">Privacy Policy</div>
                  </a>
                </div>
              </div>
            </div>

            <div className="foo-divider-line bg---neutral-03"></div>

            <div className="foo-footer-copyrights">
              <p className="foo-paragraph">
                Designed by{" "}
                <a href="https://lunisdesign.com" target="_blank" rel="noopener noreferrer" className="foo-link footer">
                  Atelier Technology Solution
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterSection;
