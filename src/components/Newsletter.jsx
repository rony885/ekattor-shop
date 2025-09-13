import React from "react";

const Newsletter = () => {
  return (
    <div id="newsletter" className="popup-wrapper">
      <div className="popup-wrapper">
        <div
          className="modal fade show"
          id="news-letter-modal"
          aria-modal="true"
          role="dialog"
        >
          <div className="newsletter-popup-inner modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <form method="post" className="contact-form">
                  <button
                    type="button"
                    className="close-btn"
                    data-bs-dismiss="modal"
                  >
                    <i className="feather-x"></i>
                  </button>
                  <div className="newsletter-info">
                    <div className="subscribe-area">
                      <div className="subscribe-content">
                        <h2>Newsletter</h2>
                        <p>
                          Subscribe with us to get special offers and other
                          discount information
                        </p>
                      </div>
                      <div className="popup-newsletter">
                        <div className="subscribe-con">
                          <div className="subscribe-block">
                            <input
                              type="email"
                              name="q"
                              className="email mail"
                              placeholder="Enter your mail"
                            />
                            <div className="email-submit">
                              <button
                                type="submit"
                                className="news-btn btn btn-style"
                              >
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
