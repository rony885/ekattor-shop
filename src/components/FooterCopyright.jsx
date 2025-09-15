import React from "react";
import { Link } from "react-router-dom";

const FooterCopyright = () => {
  return (
    <footer className="ft-copyright-area bt">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="ft-copyright">
              <ul className="ft-copryright-ul">
                <li className="ft-copryright-li ft-payment">
                  <ul className="payment-icon">
                    <li>
                      <Link to="/">
                        <img
                          src="/img/payment/pay-1.jpg"
                          className="img-fluid"
                          alt="pay-1"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img
                          src="/img/payment/pay-2.jpg"
                          className="img-fluid"
                          alt="pay-2"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img
                          src="/img/payment/pay-3.jpg"
                          className="img-fluid"
                          alt="pay-3"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img
                          src="/img/payment/pay-4.jpg"
                          className="img-fluid"
                          alt="pay-4"
                        />
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="ft-copryright-li news-letter">
                  <div className="news-block">
                    <div className="section-title">
                      <h2>Subscribe newsletter</h2>
                    </div>
                    <form
                      method="post"
                      id="contact_form"
                      acceptCharset="UTF-8"
                      className="contact-form"
                    >
                      <input type="hidden" name="form_type" value="customer" />
                      <input type="hidden" name="utf8" value="✓" />
                      <input
                        type="hidden"
                        name="contact[tags]"
                        value="newsletter"
                      />
                      <div className="subscribe-block">
                        <input
                          type="email"
                          name="contact[email]"
                          className="email mail"
                          id="E-mail"
                          placeholder="Enter your email"
                          autoCapitalize="off"
                        />
                        <div className="email-submit">
                          <button type="submit" className="btn btn-style2">
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                {/* Copyright */}
                {/* <li className="ft-copryright-li ft-copyright-text">
                  <p>
                    <span>© 2025 Power by spacingtech template</span>
                  </p>
                </li> */}
                <li className="ft-copryright-li ft-copyright-text">
                  <p>
                    <Link
                      rel="noopener noreferrer"
                      to="https://www.ekattorit.com/"
                      target="_blank"
                    >
                      <small className="small">
                        <small className="footer" style={{ fontSize: "14px" }}>
                          © {new Date().getFullYear()},
                        </small>
                        &nbsp;
                        <span className="" style={{ fontSize: "14px" }}>
                          Designed &amp; Developed By&nbsp;
                        </span>
                        <span style={{ color: "red" }}>EKATTOR</span>&nbsp;
                        <span style={{ color: "green" }}> iT</span>
                      </small>
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCopyright;
