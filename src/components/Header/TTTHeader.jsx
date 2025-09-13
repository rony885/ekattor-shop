import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header" id="stickyheader">
      <div className="header-top-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="header-area">
                <div className="header-element header-toggle">
                  <div className="header-icon-block">
                    <ul className="shop-element">
                      <li className="side-wrap toggler-wrap">
                        <div className="toggler-wrapper">
                          <button className="toggler-btn">
                            <span className="toggler-icon">
                              <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="css-i6dzq1"
                              >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-element header-logo">
                  <div className="header-theme-logo">
                    <Link to="/" className="theme-logo">
                      <img
                        src="/img/logo/logo.png"
                        className="img-fluid"
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-element header-search">
                  <div className="search-crap">
                    <div className="search-content">
                      <div className="search-box">
                        <form className="search-bar">
                          <div className="form-search">
                            <input
                              type="search"
                              name="q"
                              placeholder="Find our search"
                              className="search-input"
                            />
                            <button type="submit" className="search-btn">
                              <i className="feather-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-element header-icon">
                  <div className="header-icon-block">
                    <ul className="shop-element">
                      <li className="side-wrap search-wrap">
                        <div className="search-wrapper">
                          <Link to="#searchmodal" data-bs-toggle="modal">
                            <span className="search-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9m0 16c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7m8.485.071l2.829 2.828l-1.415 1.415l-2.828-2.829z"
                                ></path>
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-element header-details">
                  <div className="header-icon-details">
                    <ul className="details-ul">
                      <li className="info-wrap info-headphones">
                        <div className="info-wrapper">
                          <Link to="/" className="icon">
                            <i className="feather-headphones"></i>
                          </Link>
                          <div className="info-text">
                            <span className="label">Hotline number</span>
                            <Link to="tel:+260005002600" className="info-link">
                              +2600 0500 2600
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="info-wrap info-Login">
                        <div className="info-wrapper">
                          <Link to="/" className="icon">
                            <i className="feather-user"></i>
                          </Link>
                          <div className="info-text">
                            <span className="label">My account</span>
                            <Link to="/login-account" className="info-link">
                              Login & Register
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- header-bottam start --> */}
      <div className="header-bottom-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="main-block">
                <div className="side-wrap header-support">
                  <div className="vega-menu-area">
                    <Link
                      to="#vega-collapse"
                      className="browse-cat"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      <span className="menu-icon">
                        <i className="feather-menu"></i>
                      </span>
                      <span className="menu-title">Trending category</span>
                      <span className="menu-arrow">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </Link>
                    <Link
                      to="#vega-collapse"
                      className="browse-cat browse-cat-lg"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      <span className="menu-icon">
                        <i className="feather-menu"></i>
                      </span>
                      <span className="menu-title">Trending category</span>
                      <span className="menu-arrow">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </Link>
                    <div className="vegawrap collapse" id="vega-collapse">
                      <ul className="vega-menu">
                        <li className="menu-link">
                          <Link to="/product" className="link-title">
                            <span className="menu-img-icon">
                              <img
                                src="/img/menu/cate-menu1.jpg"
                                className="img-fluid"
                                alt="cate-menu1"
                              />
                            </span>
                            <span className="sp-link-title">Pen drivess</span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </Link>
                        </li>
                        <li className="menu-link">
                          <Link to="collection.html" className="link-title">
                            <span className="menu-img-icon">
                              <img
                                src="img/menu/cate-menu2.jpg"
                                className="img-fluid"
                                alt="cate-menu2"
                              />
                            </span>
                            <span className="sp-link-title">Smart watch</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="side-wrap header-menu">
                  <div className="mainmenu-content">
                    <div className="main-wrap">
                      <ul className="main-menu">
                        <li className="menu-link">
                          <Link to="/" className="link-title">
                            <span className="sp-link-title">Home</span>
                          </Link>
                        </li>
                        <li className="menu-link">
                          <Link to="/product" className="link-title">
                            <span className="sp-link-title">Shop</span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </Link>
                        </li>
                        <li className="menu-link">
                          <Link to="/product" className="link-title">
                            <span className="sp-link-title">
                              Product
                              <span className="header-sale-lable">Sale</span>
                            </span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </Link>
                        </li>
                        <li className="menu-link">
                          <Link to="/blog" className="link-title">
                            <span className="sp-link-title">Blogs</span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </Link>
                        </li>
                        <li className="menu-link">
                          <Link to="/contact-us" className="link-title">
                            <span className="sp-link-title">Contact us</span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </Link>
                        </li>
                        <li className="menu-link">
                          <Link to="/about-us" className="link-title">
                            <span className="sp-link-title">Pages</span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </Link>
                          <div
                            className="menu-dropdown menu-sub collapse"
                            id="page"
                          >
                            <ul className="ul">
                              <li className="menusub-li">
                                <Link
                                  to="login-account.html"
                                  className="menusub-title"
                                >
                                  <span className="sp-link-title">
                                    My account
                                  </span>
                                  <span className="menu-arrow">
                                    <i className="fa-solid fa-angle-right"></i>
                                  </span>
                                </Link>
                                <div className="menusup-dropdown collapse">
                                  <ul className="menusup-ul">
                                    <li className="menusup-li">
                                      <Link
                                        to="order-history.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Order
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="menusup-li">
                                      <Link
                                        to="profile.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Profile
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="menusup-li">
                                      <Link
                                        to="pro-address.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Address
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="menusup-li">
                                      <Link
                                        to="pro-wishlist.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Wishlist
                                        </span>
                                      </Link>
                                    </li>

                                    <li className="menusup-li">
                                      <Link
                                        to="billing-info.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Billing info
                                        </span>
                                      </Link>
                                    </li>

                                    <li className="menusup-li">
                                      <Link
                                        to="order-complete.html"
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
                                  to="checkout-style1.html"
                                  className="menusub-title"
                                >
                                  <span className="sp-link-title">
                                    Checkout
                                  </span>
                                  <span className="menu-arrow">
                                    <i className="fa-solid fa-angle-right"></i>
                                  </span>
                                </Link>
                              </li>
                              <li className="menusub-li">
                                <Link to="#" className="menusub-title">
                                  <span className="sp-link-title">
                                    Features
                                  </span>
                                  <span className="menu-arrow">
                                    <i className="fa-solid fa-angle-right"></i>
                                  </span>
                                </Link>
                                <div className="menusup-dropdown collapse">
                                  <ul className="menusup-ul">
                                    <li className="menusup-li">
                                      <Link
                                        to="cancellation.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Cancellation
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="menusup-li">
                                      <Link
                                        to="cart-page.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Cart page
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="menusup-li">
                                      <Link
                                        to="wishlist-product.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Wishlist product
                                        </span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="side-wrap header-icon">
                  <div className="header-icon-block">
                    <ul className="shop-element">
                      <li className="side-wrap toggler-wrap">
                        <div className="toggler-wrapper">
                          <button className="toggler-btn">
                            <span className="toggler-icon">
                              <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="css-i6dzq1"
                              >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </li>
                      <li className="side-wrap search-wrap">
                        <div className="search-wrapper">
                          <Link to="#searchmodal" data-bs-toggle="modal">
                            <span className="search-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9m0 16c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7m8.485.071l2.829 2.828l-1.415 1.415l-2.828-2.829z"
                                ></path>
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </li>
                      <li className="side-wrap user-wrap">
                        <div className="user-wrapper">
                          <Link
                            to="#store-account"
                            className="collapsed"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                          >
                            <span className="user-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                                ></path>
                              </svg>
                            </span>
                            <span className="user-title">Login</span>
                          </Link>
                          <div
                            className="user-drower collapse"
                            id="store-account"
                          >
                            <Link to="login-account.html">Login</Link>
                            <Link to="create-account.html">Register</Link>
                          </div>
                        </div>
                      </li>
                      <li className="side-wrap wishlist-wrap">
                        <div className="wishlist-wrapper">
                          <Link to="wishlist-empty.html">
                            <span className="wishlist-icon-count">
                              <span className="wishlist-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12.001 4.529a5.998 5.998 0 0 1 8.242.228a6 6 0 0 1 .236 8.236l-8.48 8.492l-8.478-8.492a6 6 0 0 1 8.48-8.464m6.826 1.641a3.998 3.998 0 0 0-5.49-.153l-1.335 1.198l-1.336-1.197a4 4 0 0 0-5.686 5.605L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                            <span className="wishlist-title">My wishlist</span>
                          </Link>
                        </div>
                      </li>
                      <li className="side-wrap cart-wrap">
                        <div className="cart-wrapper">
                          <div className="shopping-cart">
                            <Link className="add-to-cart" to="#">
                              <span className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M6.505 2h11a1 1 0 0 1 .8.4l2.7 3.6v15a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4m12.5 6h-14v12h14zm-.5-2l-1.5-2h-10l-1.5 2zm-9.5 4v2a3 3 0 1 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2z"
                                  ></path>
                                </svg>
                              </span>
                              <span className="cart-title text">My cart</span>
                              <span className="bigcounter">04</span>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
