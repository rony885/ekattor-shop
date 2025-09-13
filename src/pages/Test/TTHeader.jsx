/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

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
                    <a href="index.html" className="theme-logo">
                      <img
                        src="img/logo/logo.png"
                        className="img-fluid"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="header-element header-search">
                  <div className="search-crap">
                    <div className="search-content">
                      <div className="search-box">
                        <form
                          action="https://spacingtech.com/html/electon/electon/search.html"
                          method="get"
                          className="search-bar"
                        >
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
                          <a href="#searchmodal" data-bs-toggle="modal">
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
                          </a>
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
                          <a href="index.html" className="icon">
                            <i className="feather-headphones"></i>
                          </a>
                          <div className="info-text">
                            <span className="label">Hotline number</span>
                            <a href="tel:+260005002600" className="info-link">
                              +2600 0500 2600
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="info-wrap info-Login">
                        <div className="info-wrapper">
                          <a href="index.html" className="icon">
                            <i className="feather-user"></i>
                          </a>
                          <div className="info-text">
                            <span className="label">My account</span>
                            <a href="login-account.html" className="info-link">
                              Login & Register
                            </a>
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
                    <a
                      href="#vega-collapse"
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
                    </a>
                    <a
                      href="#vega-collapse"
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
                    </a>
                    <div className="vegawrap collapse" id="vega-collapse">
                      <ul className="vega-menu">
                        <li className="menu-link">
                          <a href="collection.html" className="link-title">
                            <span className="menu-img-icon">
                              <img
                                src="img/menu/cate-menu1.jpg"
                                className="img-fluid"
                                alt="cate-menu1"
                              />
                            </span>
                            <span className="sp-link-title">Pen drivess</span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </a>
                          <div
                            className="menu-dropdown product-menu collapse"
                            id="vega-electronics"
                          >
                            <ul className="ul">
                              <li className="productlink-li">
                                <a
                                  href="collection.html"
                                  className="productlink-title"
                                >
                                  <span className="sp-link-title">
                                    Shop page
                                  </span>
                                </a>
                                <ul className="productsupmenu-dropdown">
                                  <li className="productsupmenu-li">
                                    <a
                                      href="collection-without.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Collection
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="collection.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Collection left
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="collection-right.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Collection right
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="collection-list-without.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Collection list
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="collection-list.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Collection list left
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="collection-list-right.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Collection list right
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="productlink-li">
                                <a
                                  href="collection.html"
                                  className="productlink-title"
                                >
                                  <span className="sp-link-title">
                                    Product page
                                  </span>
                                </a>
                                <ul className="productsupmenu-dropdown">
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product layout
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template2.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product tab
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template3.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product advanc
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template4.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product advance
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template5.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product accordion
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template6.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product center
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template7.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product side
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="productlink-li shoplink-br">
                                <div className="shop-banner banner-hover">
                                  <a href="#" className="banner-img">
                                    <img
                                      src="img/menu/vega-banner1.jpg"
                                      className="img-fluid"
                                      alt="vega-banner1"
                                    />
                                  </a>
                                </div>
                              </li>
                              <li className="productlink-li shoplink-br">
                                <div className="shop-banner banner-hover">
                                  <a href="#" className="banner-img">
                                    <img
                                      src="img/menu/vega-banner2.jpg"
                                      className="img-fluid"
                                      alt="vega-banner2"
                                    />
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-link">
                          <a href="collection.html" className="link-title">
                            <span className="menu-img-icon">
                              <img
                                src="img/menu/cate-menu2.jpg"
                                className="img-fluid"
                                alt="cate-menu2"
                              />
                            </span>
                            <span className="sp-link-title">Smart watch</span>
                          </a>
                        </li>
                        <li className="menu-link">
                          <a href="collection.html" className="link-title">
                            <span className="menu-img-icon">
                              <img
                                src="img/menu/cate-menu3.jpg"
                                className="img-fluid"
                                alt="cate-menu3"
                              />
                            </span>
                            <span className="sp-link-title">
                              Verse earphones
                            </span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </a>
                          <div
                            className="menu-dropdown product-menu collapse"
                            id="cosmetic"
                          >
                            <ul className="ul">
                              <li className="productlink-li">
                                <a
                                  href="collection.html"
                                  className="productlink-title"
                                >
                                  <span className="sp-link-title">
                                    Shop page
                                  </span>
                                </a>
                                <ul className="productsupmenu-dropdown">
                                  <li className="productsupmenu-li">
                                    <a
                                      href="collection-without.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Collection
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="collection.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Collection left
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="collection-right.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Collection right
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="collection-list-without.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Collection list
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="collection-list.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Collection list left
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="collection-list-right.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Collection list right
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="productlink-li">
                                <a
                                  href="collection.html"
                                  className="productlink-title"
                                >
                                  <span className="sp-link-title">
                                    Product page
                                  </span>
                                </a>
                                <ul className="productsupmenu-dropdown">
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product layout
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template2.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product tab
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template3.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product advanc
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template4.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product advance
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template5.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product accordion
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template6.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product center
                                      </span>
                                    </a>
                                  </li>
                                  <li className="productsupmenu-li">
                                    <a
                                      href="product-template7.html"
                                      className="productsuplink-title"
                                    >
                                      <span className="sp-link-title">
                                        Product side
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="productlink-li menu-product">
                                <div className="product-title-arrow">
                                  <h6>Best seller</h6>
                                  <div className="swiper-buttons">
                                    <button className="swiper-prev swiper-prev-vega">
                                      <i className="feather-arrow-left"></i>
                                    </button>
                                    <button className="swiper-next swiper-next-vega">
                                      <i className="feather-arrow-right"></i>
                                    </button>
                                  </div>
                                </div>
                                <div className="swiper" id="vega-menu-slider">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide swiper-slide-prev">
                                      <div className="product-menu-grid">
                                        <div className="product-image">
                                          <a
                                            href="product-template-2.html"
                                            className="pro-img"
                                          >
                                            <img
                                              src="img/product/home1-pro-1.jpg"
                                              className="img-fluid"
                                              alt="home1-pro-1"
                                            />
                                          </a>
                                        </div>
                                        <div className="product-content">
                                          <div className="product-sub-title">
                                            <span>Wireless device</span>
                                          </div>
                                          <div className="product-title">
                                            <h6>
                                              <a href="product-template.html">
                                                Wireless headphones
                                              </a>
                                            </h6>
                                          </div>
                                          <div className="product-price">
                                            <div className="pro-price-box">
                                              <span className="new-price">
                                                $21.00
                                              </span>
                                              <span className="old-price">
                                                $25.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-prev">
                                      <div className="product-menu-grid">
                                        <div className="product-image">
                                          <a
                                            href="product-template-2.html"
                                            className="pro-img"
                                          >
                                            <img
                                              src="img/product/home1-pro-3.jpg"
                                              className="img-fluid"
                                              alt="home1-pro-3"
                                            />
                                          </a>
                                        </div>
                                        <div className="product-content">
                                          <div className="product-sub-title">
                                            <span>Waterproof</span>
                                          </div>
                                          <div className="product-title">
                                            <h6>
                                              <a href="product-template.html">
                                                Wireless mouse
                                              </a>
                                            </h6>
                                          </div>
                                          <div className="product-price">
                                            <div className="pro-price-box">
                                              <span className="new-price">
                                                $18.00
                                              </span>
                                              <span className="old-price">
                                                $24.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-prev">
                                      <div className="product-menu-grid">
                                        <div className="product-image">
                                          <a
                                            href="product-template-2.html"
                                            className="pro-img"
                                          >
                                            <img
                                              src="img/product/home1-pro-5.jpg"
                                              className="img-fluid"
                                              alt="home1-pro-5"
                                            />
                                          </a>
                                        </div>
                                        <div className="product-content">
                                          <div className="product-sub-title">
                                            <span>Live program</span>
                                          </div>
                                          <div className="product-title">
                                            <h6>
                                              <a href="product-template.html">
                                                Pen drivess
                                              </a>
                                            </h6>
                                          </div>
                                          <div className="product-price">
                                            <div className="pro-price-box">
                                              <span className="new-price">
                                                $10.00
                                              </span>
                                              <span className="old-price">
                                                $15.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-prev">
                                      <div className="product-menu-grid">
                                        <div className="product-image">
                                          <a
                                            href="product-template-2.html"
                                            className="pro-img"
                                          >
                                            <img
                                              src="img/product/home1-pro-7.jpg"
                                              className="img-fluid"
                                              alt="home1-pro-7"
                                            />
                                          </a>
                                        </div>
                                        <div className="product-content">
                                          <div className="product-sub-title">
                                            <span>Waterproof watch</span>
                                          </div>
                                          <div className="product-title">
                                            <h6>
                                              <a href="product-template.html">
                                                Smart watch
                                              </a>
                                            </h6>
                                          </div>
                                          <div className="product-price">
                                            <div className="pro-price-box">
                                              <span className="new-price">
                                                $32.00
                                              </span>
                                              <span className="old-price">
                                                $38.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-prev">
                                      <div className="product-menu-grid">
                                        <div className="product-image">
                                          <a
                                            href="product-template-2.html"
                                            className="pro-img"
                                          >
                                            <img
                                              src="img/product/home1-pro-9.jpg"
                                              className="img-fluid"
                                              alt="home1-pro-9"
                                            />
                                          </a>
                                        </div>
                                        <div className="product-content">
                                          <div className="product-sub-title">
                                            <span>Softness music</span>
                                          </div>
                                          <div className="product-title">
                                            <h6>
                                              <a href="product-template.html">
                                                Verse earphones
                                              </a>
                                            </h6>
                                          </div>
                                          <div className="product-price">
                                            <div className="pro-price-box">
                                              <span className="new-price">
                                                $08.00
                                              </span>
                                              <span className="old-price">
                                                $10.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-prev">
                                      <div className="product-menu-grid">
                                        <div className="product-image">
                                          <a
                                            href="product-template-2.html"
                                            className="pro-img"
                                          >
                                            <img
                                              src="img/product/home1-pro-13.jpg"
                                              className="img-fluid"
                                              alt="home1-pro-13"
                                            />
                                          </a>
                                        </div>
                                        <div className="product-content">
                                          <div className="product-sub-title">
                                            <span>Wireless device</span>
                                          </div>
                                          <div className="product-title">
                                            <h6>
                                              <a href="product-template.html">
                                                Bluetooth earbuds
                                              </a>
                                            </h6>
                                          </div>
                                          <div className="product-price">
                                            <div className="pro-price-box">
                                              <span className="new-price">
                                                $44.00
                                              </span>
                                              <span className="old-price">
                                                $48.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-prev">
                                      <div className="product-menu-grid">
                                        <div className="product-image">
                                          <a
                                            href="product-template-2.html"
                                            className="pro-img"
                                          >
                                            <img
                                              src="img/product/home1-pro-12.jpg"
                                              className="img-fluid"
                                              alt="home1-pro-12"
                                            />
                                          </a>
                                        </div>
                                        <div className="product-content">
                                          <div className="product-sub-title">
                                            <span>Rotation camera</span>
                                          </div>
                                          <div className="product-title">
                                            <h6>
                                              <a href="product-template.html">
                                                Wifro camera
                                              </a>
                                            </h6>
                                          </div>
                                          <div className="product-price">
                                            <div className="pro-price-box">
                                              <span className="new-price">
                                                $32.00
                                              </span>
                                              <span className="old-price">
                                                $39.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <span
                                    className="swiper-notification"
                                    aria-live="assertive"
                                    aria-atomic="true"
                                  ></span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-link">
                          <a href="collection.html" className="link-title">
                            <span className="menu-img-icon">
                              <img
                                src="img/menu/cate-menu4.jpg"
                                className="img-fluid"
                                alt="cate-menu4"
                              />
                            </span>
                            <span className="sp-link-title">Wifro camera</span>
                          </a>
                        </li>
                        <li className="menu-link">
                          <a href="collection.html" className="link-title">
                            <span className="menu-img-icon">
                              <img
                                src="img/menu/cate-menu5.jpg"
                                className="img-fluid"
                                alt="cate-men5"
                              />
                            </span>
                            <span className="sp-link-title">
                              Bluetooth earbuds
                            </span>
                          </a>
                        </li>
                        <li className="menu-link">
                          <a href="collection.html" className="link-title">
                            <span className="menu-img-icon">
                              <img
                                src="img/menu/cate-menu6.jpg"
                                className="img-fluid"
                                alt="cate-menu6"
                              />
                            </span>
                            <span className="sp-link-title">
                              Projector leptop
                            </span>
                          </a>
                        </li>
                        <li className="menu-link">
                          <a href="collection.html" className="link-title">
                            <span className="menu-img-icon">
                              <img
                                src="img/menu/cate-menu7.jpg"
                                className="img-fluid"
                                alt="cate-menu7"
                              />
                            </span>
                            <span className="sp-link-title">
                              Wireless mouse
                            </span>
                          </a>
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
                          <a href="index.html" className="link-title">
                            <span className="sp-link-title">Home</span>
                          </a>
                          <div className="menu-dropdown menu-single collapse">
                            <ul className="ul">
                              <li className="menusingle-li">
                                <a
                                  href="index.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">Home 01</span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="index2.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">Home 02</span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="index3.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">Home 03</span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="index4.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">Home 04</span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="index5.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">Home 05</span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="index6.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">Home 06</span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="index7.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">Home 07</span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="index8.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">Home 08</span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="index9.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">Home 09</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-link">
                          <a href="collection.html" className="link-title">
                            <span className="sp-link-title">Shop</span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </a>
                          <div
                            className="menu-dropdown menu-banner collapse"
                            id="collapse-shop"
                          >
                            <ul className="container ul">
                              <li className="menubanner-li">
                                <div className="menubanner-img">
                                  <a
                                    href="collection.html"
                                    className="banner-hover"
                                  >
                                    <img
                                      src="img/menu/home1-menu-banner1.jpg"
                                      className="img-fluid"
                                      alt="menu-banner1"
                                    />
                                  </a>
                                  <a
                                    href="collection.html"
                                    className="collection-title"
                                  >
                                    <span>Wireless earbuds</span>
                                  </a>
                                </div>
                              </li>
                              <li className="menubanner-li">
                                <div className="menubanner-img">
                                  <a
                                    href="collection.html"
                                    className="banner-hover"
                                  >
                                    <img
                                      src="img/menu/home1-menu-banner2.jpg"
                                      className="img-fluid"
                                      alt="menu-banner2"
                                    />
                                  </a>
                                  <a
                                    href="collection.html"
                                    className="collection-title"
                                  >
                                    <span>Portable speaker</span>
                                  </a>
                                </div>
                              </li>
                              <li className="menubanner-li">
                                <div className="menubanner-img">
                                  <a
                                    href="collection.html"
                                    className="banner-hover"
                                  >
                                    <img
                                      src="img/menu/home1-menu-banner3.jpg"
                                      className="img-fluid"
                                      alt="menu-banner3"
                                    />
                                  </a>
                                  <a
                                    href="collection.html"
                                    className="collection-title"
                                  >
                                    <span>Air conditioner</span>
                                  </a>
                                </div>
                              </li>
                              <li className="menubanner-li">
                                <div className="menubanner-img">
                                  <a
                                    href="collection.html"
                                    className="banner-hover"
                                  >
                                    <img
                                      src="img/menu/home1-menu-banner4.jpg"
                                      className="img-fluid"
                                      alt="menu-banner4"
                                    />
                                  </a>
                                  <a
                                    href="collection.html"
                                    className="collection-title"
                                  >
                                    <span>Ev charging plug</span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-link">
                          <a href="collection.html" className="link-title">
                            <span className="sp-link-title">
                              Product
                              <span className="header-sale-lable">Sale</span>
                            </span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </a>
                          <div
                            className="menu-dropdown menu-mega collapse"
                            id="colection"
                          >
                            <ul className="ul container p-0">
                              <li className="menumega-li">
                                <a
                                  href="javascript:void(0)"
                                  className="menumega-title"
                                >
                                  <span className="sp-link-title">
                                    Shop page
                                  </span>
                                  <span className="menu-arrow">
                                    <i className="fa-solid fa-angle-down"></i>
                                  </span>
                                </a>
                                <div className="menumegasup-dropdown collapse">
                                  <ul className="menumegasup-ul">
                                    <li className="menumegasup-li">
                                      <a
                                        href="collection-without.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Collection
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menumegasup-li">
                                      <a
                                        href="collection.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Collection left
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menumegasup-li">
                                      <a
                                        href="collection-right.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Collection right
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menumegasup-li">
                                      <a
                                        href="collection-list-without.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Collection list
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menumegasup-li">
                                      <a
                                        href="collection-list.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Collection list left
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menumegasup-li">
                                      <a
                                        href="collection-list-right.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Collection list right
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="menumega-li">
                                <a
                                  href="javascript:void(0)"
                                  className="menumega-title"
                                >
                                  <span className="sp-link-title">
                                    Product page
                                  </span>
                                  <span className="menu-arrow">
                                    <i className="fa-solid fa-angle-down"></i>
                                  </span>
                                </a>
                                <div className="menumegasup-dropdown collapse">
                                  <ul className="menumegasup-ul">
                                    <li className="menumegasup-li">
                                      <a
                                        href="product-template.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Product layout
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menumegasup-li">
                                      <a
                                        href="product-template2.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Product tab
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menumegasup-li">
                                      <a
                                        href="product-template3.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Product advance
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menumegasup-li">
                                      <a
                                        href="product-template4.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Product accordion
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menumegasup-li">
                                      <a
                                        href="product-template5.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Product center
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menumegasup-li">
                                      <a
                                        href="product-template6.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Product sticky
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menumegasup-li">
                                      <a
                                        href="product-template7.html"
                                        className="menumegasup-title"
                                      >
                                        <span className="sp-link-title">
                                          Product side
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="menumega-li">
                                <div className="menu-product">
                                  <ul className="menumegasup-ul">
                                    <li className="menumegasup-li">
                                      <div className="product-menu-list">
                                        <div className="single-product-wrap">
                                          <div className="product-image">
                                            <a
                                              href="product-template.html"
                                              className="pro-img"
                                            >
                                              <img
                                                className="img-fluid img1"
                                                src="img/menu/home-pro-banner1.jpg"
                                                alt="menupro-1"
                                              />
                                              <img
                                                className="img-fluid img2"
                                                src="img/menu/home-pro-banner2.jpg"
                                                alt="menupro-2"
                                              />
                                            </a>
                                          </div>
                                          <div className="product-content">
                                            <h6>
                                              <a href="product-template.html">
                                                Bluetooth earbuds
                                              </a>
                                            </h6>
                                            <div className="price-box">
                                              <span className="new-price">
                                                $25.00
                                              </span>
                                              <span className="old-price">
                                                $45.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="menumegasup-li">
                                      <div className="product-menu-list">
                                        <div className="single-product-wrap">
                                          <div className="product-image">
                                            <a
                                              href="product-template.html"
                                              className="pro-img"
                                            >
                                              <img
                                                className="img-fluid img1"
                                                src="img/menu/home-pro-banner3.jpg"
                                                alt="menupro-1"
                                              />
                                              <img
                                                className="img-fluid img2"
                                                src="img/menu/home-pro-banner4.jpg"
                                                alt="menupro-2"
                                              />
                                            </a>
                                          </div>
                                          <div className="product-content">
                                            <h6>
                                              <a href="product-template.html">
                                                Portable speaker
                                              </a>
                                            </h6>
                                            <div className="price-box">
                                              <span className="new-price">
                                                $11.00
                                              </span>
                                              <span className="old-price">
                                                $19.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="menu-product-btn">
                                    <a
                                      href="collection.html"
                                      className="menu-pro-link"
                                    >
                                      See more
                                      <i className="bi bi-chevron-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="menumega-li">
                                <div className="menu-product">
                                  <ul className="menumegasup-ul">
                                    <li className="menumegasup-li">
                                      <div className="product-menu-list">
                                        <div className="single-product-wrap">
                                          <div className="product-image">
                                            <a
                                              href="product-template.html"
                                              className="pro-img"
                                            >
                                              <img
                                                className="img-fluid img1"
                                                src="img/menu/home-pro-banner5.jpg"
                                                alt="menupro-1"
                                              />
                                              <img
                                                className="img-fluid img2"
                                                src="img/menu/home-pro-banner6.jpg"
                                                alt="menupro-2"
                                              />
                                            </a>
                                          </div>
                                          <div className="product-content">
                                            <h6>
                                              <a href="product-template.html">
                                                Headphones
                                              </a>
                                            </h6>
                                            <div className="price-box">
                                              <span className="new-price">
                                                $21.00
                                              </span>
                                              <span className="old-price">
                                                $25.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="menumegasup-li">
                                      <div className="product-menu-list">
                                        <div className="single-product-wrap">
                                          <div className="product-image">
                                            <a
                                              href="product-template.html"
                                              className="pro-img"
                                            >
                                              <img
                                                className="img-fluid img1"
                                                src="img/menu/home-pro-banner7.jpg"
                                                alt="menupro-1"
                                              />
                                              <img
                                                className="img-fluid img2"
                                                src="img/menu/home-pro-banner8.jpg"
                                                alt="menupro-2"
                                              />
                                            </a>
                                          </div>
                                          <div className="product-content">
                                            <h6>
                                              <a href="product-template.html">
                                                Shoot drone
                                              </a>
                                            </h6>
                                            <div className="price-box">
                                              <span className="new-price">
                                                $69.00
                                              </span>
                                              <span className="old-price">
                                                $89.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="menu-product-btn">
                                    <a
                                      href="collection.html"
                                      className="menu-pro-link"
                                    >
                                      See more
                                      <i className="bi bi-chevron-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-link">
                          <a href="blog-grid.html" className="link-title">
                            <span className="sp-link-title">Blogs</span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </a>
                          <div
                            className="menu-dropdown menu-single collapse"
                            id="blogs"
                          >
                            <ul className="ul">
                              <li className="menusingle-li">
                                <a
                                  href="blog-grid-without.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">
                                    Blog grid
                                  </span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="blog-grid.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">
                                    Blog grid left
                                  </span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="blog-grid-right.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">
                                    Blog grid right
                                  </span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="article-post-without.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">
                                    Article post
                                  </span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="article-post.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">
                                    Article post left
                                  </span>
                                </a>
                              </li>
                              <li className="menusingle-li">
                                <a
                                  href="article-post-right.html"
                                  className="menusingle-title"
                                >
                                  <span className="sp-link-title">
                                    Article post right
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-link">
                          <a href="contact-us.html" className="link-title">
                            <span className="sp-link-title">Contact us</span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </a>
                        </li>
                        <li className="menu-link">
                          <a href="about-us.html" className="link-title">
                            <span className="sp-link-title">Pages</span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </a>
                          <div
                            className="menu-dropdown menu-sub collapse"
                            id="page"
                          >
                            <ul className="ul">
                              <li className="menusub-li">
                                <a
                                  href="about-us.html"
                                  className="menusub-title"
                                >
                                  <span className="sp-link-title">
                                    About us
                                  </span>
                                  <span className="menu-arrow">
                                    <i className="fa-solid fa-angle-right"></i>
                                  </span>
                                </a>
                                <div
                                  className="menusup-dropdown collapse"
                                  id="About"
                                >
                                  <ul className="menusup-ul">
                                    <li className="menusup-li">
                                      <a
                                        href="about-us.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          About us
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="about-us-2.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          About us 2
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="about-us-3.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          About us 3
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="menusub-li">
                                <a
                                  href="login-account.html"
                                  className="menusub-title"
                                >
                                  <span className="sp-link-title">
                                    My account
                                  </span>
                                  <span className="menu-arrow">
                                    <i className="fa-solid fa-angle-right"></i>
                                  </span>
                                </a>
                                <div className="menusup-dropdown collapse">
                                  <ul className="menusup-ul">
                                    <li className="menusup-li">
                                      <a
                                        href="order-history.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Order
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="profile.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Profile
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="pro-address.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Address
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="pro-wishlist.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Wishlist
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="pro-tickets.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          My tickets
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="billing-info.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Billing info
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="track-page.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Track page
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="order-complete.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Order complete
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="menusub-li">
                                <a
                                  href="contact-us.html"
                                  className="menusub-title"
                                >
                                  <span className="sp-link-title">
                                    Contact us
                                  </span>
                                  <span className="menu-arrow">
                                    <i className="fa-solid fa-angle-right"></i>
                                  </span>
                                </a>
                                <div className="menusup-dropdown collapse">
                                  <ul className="menusup-ul">
                                    <li className="menusup-li">
                                      <a
                                        href="contact-us.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Contact us
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="contact-us-2.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Contact us 2
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="menusub-li">
                                <a
                                  href="checkout-style1.html"
                                  className="menusub-title"
                                >
                                  <span className="sp-link-title">
                                    Checkout
                                  </span>
                                  <span className="menu-arrow">
                                    <i className="fa-solid fa-angle-right"></i>
                                  </span>
                                </a>
                                <div className="menusup-dropdown collapse">
                                  <ul className="menusup-ul">
                                    <li className="menusup-li">
                                      <a
                                        href="checkout-style1.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Checkout style 1
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="checkout-style2.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Checkout style 2
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="checkout-style3.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Checkout style 3
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="menusub-li">
                                <a
                                  href="javascript:void(0)"
                                  className="menusub-title"
                                >
                                  <span className="sp-link-title">
                                    Features
                                  </span>
                                  <span className="menu-arrow">
                                    <i className="fa-solid fa-angle-right"></i>
                                  </span>
                                </a>
                                <div className="menusup-dropdown collapse">
                                  <ul className="menusup-ul">
                                    <li className="menusup-li">
                                      <a
                                        href="cancellation.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Cancellation
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="cart-page.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Cart page
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="wishlist-product.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Wishlist product
                                        </span>
                                      </a>
                                    </li>
                                    <li className="menusup-li">
                                      <a
                                        href="sitemap.html"
                                        className="menusup-title"
                                      >
                                        <span className="sp-link-title">
                                          Sitemap
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="menusub-li">
                                <a href="faq.html" className="menusub-title">
                                  <span className="sp-link-title">Faq's</span>
                                </a>
                              </li>
                              <li className="menusub-li">
                                <a
                                  href="privacy-policy.html"
                                  className="menusub-title"
                                >
                                  <span className="sp-link-title">
                                    Privacy policy
                                  </span>
                                </a>
                              </li>
                              <li className="menusub-li">
                                <a
                                  href="payment-policy.html"
                                  className="menusub-title"
                                >
                                  <span className="sp-link-title">
                                    Payment policy
                                  </span>
                                </a>
                              </li>
                              <li className="menusub-li">
                                <a
                                  href="terms-condition.html"
                                  className="menusub-title"
                                >
                                  <span className="sp-link-title">
                                    Terms &amp; condition
                                  </span>
                                </a>
                              </li>
                              <li className="menusub-li">
                                <a
                                  href="return-policy.html"
                                  className="menusub-title"
                                >
                                  <span className="sp-link-title">
                                    Return policy
                                  </span>
                                </a>
                              </li>
                              <li className="menusub-li">
                                <a href="404.html" className="menusub-title">
                                  <span className="sp-link-title">404</span>
                                </a>
                              </li>
                              <li className="menusub-li">
                                <a
                                  href="coming-soon.html"
                                  className="menusub-title"
                                >
                                  <span className="sp-link-title">
                                    Coming soon
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-link">
                          <a
                            href="https://themeforest.net/user/spacingtech_webify/portfolio"
                            className="link-title"
                          >
                            <span className="sp-link-title">Buy electon</span>
                            <span className="menu-arrow">
                              <i className="fa fa-angle-down"></i>
                            </span>
                          </a>
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
                          <a href="#searchmodal" data-bs-toggle="modal">
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
                          </a>
                        </div>
                      </li>
                      <li className="side-wrap user-wrap">
                        <div className="user-wrapper">
                          <a
                            href="#store-account"
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
                          </a>
                          <div
                            className="user-drower collapse"
                            id="store-account"
                          >
                            <a href="login-account.html">Login</a>
                            <a href="create-account.html">Register</a>
                          </div>
                        </div>
                      </li>
                      <li className="side-wrap wishlist-wrap">
                        <div className="wishlist-wrapper">
                          <a href="wishlist-empty.html">
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
                          </a>
                        </div>
                      </li>
                      <li className="side-wrap cart-wrap">
                        <div className="cart-wrapper">
                          <div className="shopping-cart">
                            <a
                              className="add-to-cart"
                              href="javascript:void(0)"
                            >
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
                            </a>
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
