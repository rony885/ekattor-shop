import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <Wrapper>
      <section className="footer-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer-list">
                <ul className="footer-ul">
                  {/* ---------- Logo + About ---------- */}
                  <li className="footer-li footer-logo">
                    <div className="footer-content">
                      {/* Footer Logo */}
                      <Link to="/" className="theme-logo">
                        <img
                          src="/img/logo/logo.png"
                          className="img-fluid"
                          alt="footer-logo"
                        />
                      </Link>

                      {/* Contact Info */}
                      <ul className="ftcontact-ul">
                        <li className="ftcontact-li mb-4">
                          <div className="footer-desc">
                            <p className="desc">
                              There are many variations of passages of lorem..
                            </p>
                          </div>
                        </li>

                        {/* Address */}
                        <li className="ftcontact-li mb-3">
                          <div className="ft-contact-add">
                            <span className="ft-contact-address">
                              <i className="fa-solid fa-location-dot"></i> Ga
                              -27/2 A, Shajadpur, Gulshan, Dhaka-1212
                            </span>
                          </div>
                        </li>

                        {/* Phone */}
                        <li className="ftcontact-li mb-3">
                          <div className="ft-contact-add">
                            <Link
                              to="tel:+1234567890"
                              className="ft-contact-address colorr"
                            >
                              <i className="fa-solid fa-phone"></i> +1 234 567
                              890
                            </Link>
                          </div>
                        </li>

                        {/* Email */}
                        <li className="ftcontact-li colorr">
                          <div className="ft-contact-add">
                            <Link
                              to="mailto:info@domain.com"
                              className="ft-contact-address colorr"
                            >
                              <i className="fa-solid fa-envelope"></i>{" "}
                              info@domain.com
                            </Link>
                          </div>
                        </li>
                      </ul>

                      {/* Social Media */}
                      <div className="app-code mt-4">
                        <div className="social-icons d-flex gap-3 mt-2">
                          <Link to="/" className="social-icon">
                            <i className="fa-brands fa-facebook-f"></i>
                          </Link>
                          <Link to="/" className="social-icon">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                          <Link to="/" className="social-icon">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                          <Link to="/" className="social-icon">
                            <i className="fa-brands fa-x-twitter"></i>
                          </Link>
                          <Link to="/" className="social-icon">
                            <i className="fa-brands fa-youtube"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* ---------- Help with ---------- */}
                  <li className="footer-li">
                    <ul className="ftlist-ul">
                      <li className="ftlist-li">
                        <h6 className="ftlist-title">Help with</h6>
                        <Link
                          to="#footer-help"
                          className="ftlist-title"
                          onClick={(e) => {
                            e.preventDefault();
                            handleToggle("help");
                          }}
                        >
                          <span>Help with</span>
                          <span>
                            <i
                              className={`fa-solid ${
                                openSection === "help" ? "fa-minus" : "fa-plus"
                              }`}
                            ></i>
                          </span>
                        </Link>
                        <ul
                          className={`ftlink-ul collapse ${
                            openSection === "help" ? "show" : ""
                          }`}
                          id="footer-help"
                        >
                          <li className="ftlink-li">
                            <Link to="contact-us.html">Contact us</Link>
                          </li>
                          <li className="ftlink-li">
                            <Link to="terms-condition.html">
                              Terms & conditions
                            </Link>
                          </li>
                          <li className="ftlink-li">
                            <Link to="track-page.html">Track your order</Link>
                          </li>
                          <li className="ftlink-li">
                            <Link to="shipping-policy.html">
                              Our guarantee{" "}
                            </Link>
                          </li>
                          <li className="ftlink-li">
                            <Link to="pro-tickets.html">Guide des tailles</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* ---------- Information ---------- */}
                  <li className="footer-li">
                    <ul className="ftlist-ul">
                      <li className="ftlist-li">
                        <h6 className="ftlist-title">Information</h6>
                        <Link
                          to="#footer-information"
                          className="ftlist-title"
                          onClick={(e) => {
                            e.preventDefault();
                            handleToggle("information");
                          }}
                        >
                          <span>Information</span>
                          <span>
                            <i
                              className={`fa-solid ${
                                openSection === "information"
                                  ? "fa-minus"
                                  : "fa-plus"
                              }`}
                            ></i>
                          </span>
                        </Link>
                        <ul
                          className={`ftlink-ul collapse ${
                            openSection === "information" ? "show" : ""
                          }`}
                          id="footer-information"
                        >
                          <li className="ftlink-li">
                            <Link to="about-us.html">About story</Link>
                          </li>
                          <li className="ftlink-li">
                            <Link to="Privacy-policy-2.html">
                              Privacy policy
                            </Link>
                          </li>
                          <li className="ftlink-li">
                            <Link to="return-policy.html">Return policy</Link>
                          </li>
                          <li className="ftlink-li">
                            <Link to="payment-policy.html">Payment policy</Link>
                          </li>
                          <li className="ftlink-li">
                            <Link to="collection.html">We our brand</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* ---------- Top category ---------- */}
                  {/* <li className="footer-li">
                    <ul className="ftlist-ul">
                      <li className="ftlist-li">
                        <h6 className="ftlist-title">Top category</h6>
                        <Link
                          to="#footer-category"
                          className="ftlist-title"
                          onClick={(e) => {
                            e.preventDefault();
                            handleToggle("category");
                          }}
                        >
                          <span>Top category</span>
                          <span>
                            <i
                              className={`fa-solid ${
                                openSection === "category"
                                  ? "fa-minus"
                                  : "fa-plus"
                              }`}
                            ></i>
                          </span>
                        </Link>
                        <ul
                          className={`ftlink-ul collapse ${
                            openSection === "category" ? "show" : ""
                          }`}
                          id="footer-category"
                        >
                          <li className="ftlink-li">
                            <Link to="product-template.html">
                              Wireless headphone
                            </Link>
                          </li>
                          <li className="ftlink-li">
                            <Link to="product-template2.html">
                              Bluetooth speakers
                            </Link>
                          </li>
                          <li className="ftlink-li">
                            <Link to="product-template3.html">
                              Portable devices
                            </Link>
                          </li>
                          <li className="ftlink-li">
                            <Link to="product-template4.html">
                              Monio live camera
                            </Link>
                          </li>
                          <li className="ftlink-li">
                            <Link to="product-template5.html">
                              Movie projector T6
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li> */}

                  {/* ---------- Contact info ---------- */}
                  <li className="footer-li footer-contact">
                    <ul className="ftlist-ul">
                      <li className="ftlist-li">
                        <h6 className="ftlist-title">Contact info</h6>
                        <Link
                          to="#footer-Contact"
                          className="ftlist-title"
                          onClick={(e) => {
                            e.preventDefault();
                            handleToggle("contact");
                          }}
                        >
                          <span>Contact info</span>
                          <span>
                            <i
                              className={`fa-solid ${
                                openSection === "contact"
                                  ? "fa-minus"
                                  : "fa-plus"
                              }`}
                            ></i>
                          </span>
                        </Link>
                        <ul
                          className={`ftcontact-ul collapse ${
                            openSection === "contact" ? "show" : ""
                          }`}
                          id="footer-Contact"
                        >
                          <li className="ftcontact-li">
                            <div className="ft-contact-add">
                              <Link to="/" className="image">
                                <img
                                  src="/img/footer/home-footer1.jpg"
                                  className="img-fluid desk-img"
                                  alt="gp-icon-01"
                                />
                              </Link>
                            </div>
                          </li>

                          <li className="ftcontact-li">
                            <div className="ft-contact-add">
                              <Link to="/" className="image">
                                <img
                                  src="/img/footer/home-footer2.jpg"
                                  className="img-fluid desk-img"
                                  alt="as-icon-02"
                                />
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .collapse-menu {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.3s ease;
  }

  .collapse-menu.show {
    max-height: 500px;
    opacity: 1;
  }

  .social-icons .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #512ec3;
    color: #ffff;
    /* color: #333; */
    transition: all 0.3s ease;
    font-size: 16px;
  }

  .social-icons .social-icon:hover {
    background: #e4e4e3;
    color: #512ec3;
  }
  .colorr {
    color: #808080 !important;
  }
`;

export default Footer;
