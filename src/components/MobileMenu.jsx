import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = ({ menuOpen, closeMenu }) => {
  return (
    <Wrapper>
      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu active" : ""}`}
        id="mobile-menu"
      >
        <div className="mobile-contents">
          <div className="menu-close">
            <button className="menu-close-btn" onClick={closeMenu}>
              <span className="menu-close-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
            </button>
          </div>
          <div className="mobilemenu-content">
            <div className="main-wrap">
              <ul className="main-menu">
                <li className="menu-link">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `link-title ${isActive ? "active-link" : ""}`
                    }
                  >
                    <span className="sp-link-title">Home</span>
                  </NavLink>
                </li>
                <li className="menu-link">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `link-title ${isActive ? "active-link" : ""}`
                    }
                  >
                    <span className="sp-link-title">About</span>
                  </NavLink>
                </li>
                <li className="menu-link">
                  <NavLink
                    to="/product"
                    className={({ isActive }) =>
                      `link-title ${isActive ? "active-link" : ""}`
                    }
                  >
                    <span className="sp-link-title">Product</span>
                  </NavLink>
                </li>
                <li className="menu-link">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      `link-title ${isActive ? "active-link" : ""}`
                    }
                  >
                    <span className="sp-link-title">Blog</span>
                  </NavLink>
                </li>
                <li className="menu-link">
                  <NavLink
                    to="#menu-sub"
                    className="link-title"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                  >
                    <span className="sp-link-title">Page</span>
                    <span className="menu-arrow">
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </NavLink>

                  <div
                    className="menu-dropdown menu-sub collapse"
                    id="menu-sub"
                  >
                    <ul className="ul">
                      <li className="menusub-li">
                        <NavLink
                          to="#menu-sup"
                          className="menusub-title"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                        >
                          <span className="sp-link-title">About us</span>
                          <span className="menu-arrow">
                            <i className="fa-solid fa-angle-down"></i>
                          </span>
                        </NavLink>
                        <div
                          className="menusup-dropdown collapse"
                          id="menu-sup"
                        >
                          <ul className="menusup-ul">
                            <li className="menusup-li">
                              {/* <Link to="/about" className="menusup-title">
                                <span className="sp-link-title">About us</span>
                              </Link> */}
                              <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                  `menusup-title ${
                                    isActive ? "active-link" : ""
                                  }`
                                }
                              >
                                <span className="sp-link-title">About us</span>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menusub-li">
                        <Link
                          to="#account"
                          className="menusub-title"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                        >
                          <span className="sp-link-title">My account</span>
                          <span className="menu-arrow">
                            <i className="fa-solid fa-angle-down"></i>
                          </span>
                        </Link>
                        <div className="menusup-dropdown collapse" id="account">
                          <ul className="menusup-ul">
                            <li className="menusup-li">
                              <Link
                                to="/order-history"
                                className="menusup-title"
                              >
                                <span className="sp-link-title">Order</span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link to="/profile" className="menusup-title">
                                <span className="sp-link-title">Profile</span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link to="/pro-address" className="menusup-title">
                                <span className="sp-link-title">Address</span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link
                                to="/pro-wishlist"
                                className="menusup-title"
                              >
                                <span className="sp-link-title">Wishlist</span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link to="/pro-tickets" className="menusup-title">
                                <span className="sp-link-title">
                                  My tickets
                                </span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link
                                to="/billing-info"
                                className="menusup-title"
                              >
                                <span className="sp-link-title">
                                  Billing info
                                </span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link to="/track-page" className="menusup-title">
                                <span className="sp-link-title">
                                  Track page
                                </span>
                              </Link>
                            </li>
                            <li className="menusup-li">
                              <Link
                                to="/order-complete"
                                className="menusup-title"
                              >
                                <span className="sp-link-title">
                                  Order complete
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menusub-li">
                        <Link
                          to="#menu-sup-contact"
                          className="menusub-title"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                        >
                          <span className="sp-link-title">Contact us</span>
                          <span className="menu-arrow">
                            <i className="fa-solid fa-angle-down"></i>
                          </span>
                        </Link>
                        <div
                          className="menusup-dropdown collapse"
                          id="menu-sup-contact"
                        >
                          <ul className="menusup-ul">
                            <li className="menusup-li">
                              <Link to="/contact" className="menusup-title">
                                <span className="sp-link-title">
                                  Contact us
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menusub-li">
                        <Link
                          to="#desk-checkout"
                          className="menusub-title"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                        >
                          <span className="sp-link-title">Checkout</span>
                          <span className="menu-arrow">
                            <i className="fa-solid fa-angle-down"></i>
                          </span>
                        </Link>
                        <div
                          className="menusup-dropdown collapse"
                          id="desk-checkout"
                        >
                          <ul className="menusup-ul">
                            <li className="menusup-li">
                              <Link to="/checkout" className="menusup-title">
                                <span className="sp-link-title">Checkout</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menusub-li">
                        <Link to="faq" className="menusub-title">
                          <span className="sp-link-title">Faq's</span>
                        </Link>
                      </li>
                      <li className="menusub-li">
                        <Link to="/privacy-policy" className="menusub-title">
                          <span className="sp-link-title">Privacy policy</span>
                        </Link>
                      </li>
                      <li className="menusub-li">
                        <Link to="/payment-policy" className="menusub-title">
                          <span className="sp-link-title">Payment policy</span>
                        </Link>
                      </li>
                      <li className="menusub-li">
                        <Link to="/terms-condition" className="menusub-title">
                          <span className="sp-link-title">
                            Terms &amp; condition
                          </span>
                        </Link>
                      </li>
                      <li className="menusub-li">
                        <Link to="/return-policy" className="menusub-title">
                          <span className="sp-link-title">Return policy</span>
                        </Link>
                      </li>
                      <li className="menusub-li">
                        <Link to="/404" className="menusub-title">
                          <span className="sp-link-title">404</span>
                        </Link>
                      </li>
                      <li className="menusub-li">
                        <Link to="/coming-soon" className="menusub-title">
                          <span className="sp-link-title">Coming soon</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu-link">
                  <Link
                    to="https://themeforest.net/user/spacingtech_webify/portfolio"
                    className="link-title"
                  >
                    <span className="sp-link-title">Buy electon</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mobile-social">
              <div className="mob-wrap mob-social">
                <ul className="social-icon">
                  <li>
                    <Link to="https://www.facebook.com/">
                      <span className="icon-social facebook">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </span>

                      <span>90K Followers</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="https://in.pinterest.com/">
                      <span className="icon-social pinterest">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </span>

                      <span>60K Followers</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-title.active-link .sp-link-title,
  .menusub-title.active-link .sp-link-title,
  .menusup-title.active-link .sp-link-title {
    color: #0d6efd !important;
  }
`;

export default MobileMenu;
