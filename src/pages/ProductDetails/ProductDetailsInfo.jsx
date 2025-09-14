import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const ProductDetailsInfo = () => {
  const navigate = useNavigate();
  const [bigNav, setBigNav] = useState(null);
  const [thumbNav, setThumbNav] = useState(null);

  const [isFullView, setIsFullView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/home1-pro-1.jpg",
    "/home1-pro-2.jpg",
    "/home1-pro-3.jpg",
    "/home1-pro-4.jpg",
    "/home1-pro-5.jpg",
    "/home1-pro-6.jpg",
    "/home1-pro-7.jpg",
    "/home1-pro-8.jpg",
    "/home1-pro-9.jpg",
    "/home1-pro-10.jpg",
    "/home1-pro-11.jpg",
    "/home1-pro-12.jpg",
  ];

  // ✅ Big slider settings
  const bigSettings = {
    asNavFor: thumbNav,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  // Custom Fullscreen Modal Arrows
  const FullPrevArrow = ({ className, style, onClick }) => (
    <button
      className="fullview-arrow prev"
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="bi bi-chevron-left"></i>
    </button>
  );

  const FullNextArrow = ({ className, style, onClick }) => (
    <button
      className="fullview-arrow next"
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  );

  // ✅ Thumbnail arrows
  const PrevArrow = ({ onClick }) => (
    <button className="thumb-arrow prev" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
  const NextArrow = ({ onClick }) => (
    <button className="thumb-arrow next" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );

  const thumbSettings = {
    asNavFor: bigNav,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 425, settings: { slidesToShow: 3 } },
      { breakpoint: 375, settings: { slidesToShow: 3 } },
      { breakpoint: 320, settings: { slidesToShow: 3 } },
    ],
  };

  // ✅ Smooth zoom effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    const img = e.currentTarget.querySelector("img");
    if (img) {
      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = "scale(2)";
    }
  };

  const handleMouseLeave = (e) => {
    const img = e.currentTarget.querySelector("img");
    if (img) {
      img.style.transformOrigin = "center center";
      img.style.transform = "scale(1)";
    }
  };

  // ✅ Open fullscreen modal
  const openFullView = () => {
    if (bigNav) {
      setCurrentIndex(bigNav.innerSlider.state.currentSlide);
    }
    setIsFullView(true);
  };

  return (
    <Wrapper>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="col">
            <div className="row">
              <div className="breadcrumb-index">
                <ul className="breadcrumb-ul">
                  <li className="breadcrumb-li">
                    <Link className="breadcrumb-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-li">
                    <span className="breadcrumb-text">Wireless earbuds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details-page pro-style1 section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="pro-details-pos pro-details-left-pos">
                {/* <!-- Product slider start --> */}
                <div className="product-detail-slider product-details-tb product-details">
                  <div className="product-detail-img product-detail-img-bottom">
                    <div className="product-img-top">
                      <button className="full-view" onClick={openFullView}>
                        <i className="bi bi-arrows-fullscreen"></i>
                      </button>

                      <Slider
                        {...bigSettings}
                        ref={setBigNav}
                        className="slider-big"
                      >
                        {images.map((img, index) => (
                          <div className="slick-slide" key={index}>
                            <figure
                              className="zoom"
                              onMouseMove={handleMouseMove}
                              onMouseLeave={handleMouseLeave}
                            >
                              <img
                                src={`/img/product/${img}`}
                                className="img-fluid zoom-img"
                                alt={`pro-${index + 1}`}
                              />
                            </figure>
                          </div>
                        ))}
                      </Slider>
                    </div>

                    <div className="pro-slider">
                      <Slider
                        {...thumbSettings}
                        ref={setThumbNav}
                        className="slider-small"
                      >
                        {images.map((img, index) => (
                          <div className="slick-slide" key={index}>
                            <Link to="#!" className="product-single--thumbnail">
                              <img
                                src={`/img/product/${img}`}
                                className="img-fluid"
                                alt={`pro-${index + 1}`}
                              />
                            </Link>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>

                  {isFullView && (
                    <div className="fullview-modal">
                      <div
                        className="fullview-overlay"
                        onClick={() => setIsFullView(false)}
                      ></div>

                      <div className="fullview-content">
                        <button
                          className="fullview-close"
                          onClick={() => setIsFullView(false)}
                        >
                          &times;
                        </button>

                        <Slider
                          slidesToShow={1}
                          slidesToScroll={1}
                          arrows={true}
                          fade={true}
                          initialSlide={currentIndex}
                          className="slider-big fullview-slider"
                          prevArrow={<FullPrevArrow />}
                          nextArrow={<FullNextArrow />}
                        >
                          {images.map((img, index) => (
                            <div key={index} className="slick-slide">
                              <img
                                src={`/img/product/${img}`}
                                className="img-fluid"
                                alt={`pro-${index + 1}`}
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  )}
                </div>

       
                <div className="product-details-wrap product-details-tb product-details">
                  <div className="product-details-info">
                    <div className="pro-nprist">
                      <div className="product-info">
                    
                        <div className="product-ratting">
                          <span className="pro-ratting">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </span>
                          <span className="spr-badge-caption">3 Reviews</span>
                        </div>
                     
                      </div>
                      <div className="product-info">
                    
                        <div className="product-title">
                          <h2>Wireless earbuds</h2>
                        </div>
                    
                      </div>
                      <div className="product-info">
                        <div className="pro-prlb pro-sale">
                          <div className="price-box">
                            <span className="new-price">$21.00</span>
                            <span className="old-price">$25.00</span>
                            <span className="percent-count">16</span>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-inventory">
                          <div className="stock-inventory stock-more">
                            <p className="text-success">
                              Hurry up! only
                              <span className="available-stock bg-success">
                                4
                              </span>
                              <span>products left in stock!</span>
                            </p>
                          </div>
                          <div className="product-variant">
                            <h6>Availability:</h6>
                            <span className="stock-qty in-stock text-success">
                              <span>
                                In stock<i className="bi bi-check2"></i>
                              </span>
                            </span>
                            <span
                              className="stock-qty out-stock text-danger collapse"
                              style={{ display: "none" }}
                            >
                              <span>Out of stock</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="pro-detail-action">
                          <form method="get" className="cart">
                            <div className="product-variant-option">
                              <div className="swatch-variant">
                                <div className="swatch clearfix Color">
                                  <div className="header">
                                    <h6>
                                      <span>Color</span>
                                    </h6>
                                  </div>
                                  <div className="variant-wrap">
                                    <div className="variant-property">
                                      <div className="swatch-element Black first-variant">
                                        <input
                                          type="radio"
                                          name="option-0"
                                          value="Black"
                                          checked
                                        />
                                        <label>Black</label>
                                      </div>
                                      <div className="swatch-element Red">
                                        <input
                                          type="radio"
                                          name="option-0"
                                          value="Red"
                                        />
                                        <label>Red</label>
                                      </div>
                                      <div className="swatch-element Green">
                                        <input
                                          type="radio"
                                          name="option-0"
                                          value="Green"
                                        />
                                        <label>Green</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="product-info">
                        <form method="post" className="cart">
                          <div className="product-quantity-action">
                            <h6>Quantity:</h6>
                            <div className="product-quantity">
                              <div className="cart-plus-minus">
                                <button className="dec qtybutton minus">
                                  <i className="fa-solid fa-minus"></i>
                                </button>
                                <input type="text" name="quantity" value="1" />
                                <button className="inc qtybutton plus">
                                  <i className="fa-solid fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="product-info">
                        <div className="product-actions">
                      
                          <div className="pro-detail-button">
                            <button
                              type="button"
                              onClick={() => {
                                navigate("/cart-view");
                              }}
                              className="btn add-to-cart ajax-spin-cart"
                            >
                              <span className="cart-title">Add to cart</span>
                            </button>
                            <Link
                              to="/cart-empty"
                              className="btn btn-cart btn-theme"
                            >
                              <span>Buy now</span>
                            </Link>
                          </div>
                          {/* <!-- pro-deatail button start --> */}
                          {/* <!-- pro-deatail wishlist start --> */}
                          <div className="pro-aff-che">
                            <Link to="/wishlist-product" className="wishlist">
                              <span className="wishlist-icon action-wishlist tile-actions--btn wishlist-btn">
                                <span className="add-wishlist">
                                  <i className="bi bi-heart"></i>
                                </span>
                              </span>
                              <span className="wishlist-text">Wishlist</span>
                            </Link>
                          </div>
           
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="form-group">
                          <Link to="#deliver-modal" data-bs-toggle="modal">
                            Delivery &amp; return
                          </Link>
                          <Link to="#que-modal" data-bs-toggle="modal">
                            Ask Link question
                          </Link>
                        </div>
                      </div>
                      <div
                        className="modal fade deliver-modal"
                        id="deliver-modal"
                        tabindex="-1"
                        style={{ display: "none" }}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body">
                              <button
                                type="button"
                                className="pop-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <i className="feather-x"></i>
                              </button>
                              <div className="delivery-block">
                                <div className="space-block">
                                  <h4>Delivery</h4>
                                  <p>All orders shipped with UPS Express.</p>
                                  <p>
                                    Always free shipping for orders over US
                                    $250.
                                  </p>
                                  <p>
                                    All orders are shipped with Link UPS
                                    tracking number.
                                  </p>
                                </div>
                                <div className="space-block">
                                  <h4>Returns</h4>
                                  <p>
                                    Items returned within 14 days of their
                                    original shipment date in same as new
                                    condition will be eligible for Link full
                                    refund or store credit.
                                  </p>
                                  <p>
                                    Refunds will be charged back to the original
                                    form of payment used for purchase.
                                  </p>
                                  <p>
                                    Customer is responsible for shipping charges
                                    when making returns and shipping/handling
                                    fees of original purchase is non-refundable.
                                  </p>
                                  <p>All sale items are final purchases.</p>
                                </div>
                                <div className="space-block">
                                  <h4>Help</h4>
                                  <p>
                                    Give us Link shout if you have any other
                                    questions and/or concerns.
                                  </p>
                                  <p>
                                    Email:
                                    <Link to="mailto:contact@domain.com">
                                      demo@gmail.com
                                    </Link>
                                  </p>
                                  <p>
                                    Phone:
                                    <Link to="tel:+1(23)456789">
                                      +1 (23) 456 789
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- que-modal stat --> */}
                      <div
                        className="modal fade que-modal"
                        id="que-modal"
                        aria-modal="true"
                        tabindex="-1"
                        role="dialog"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body">
                              <button
                                type="button"
                                className="pop-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <i className="feather-x"></i>
                              </button>
                              <div className="product-form-list">
                                <div className="single-product-wrap">
                                  <div className="product-image">
                                    <Link className="pro-img" to="/product">
                                      <img
                                        className="img-fluid img1 resp-img1"
                                        src="/img/product/home1-pro-12.jpg"
                                        alt="p-1"
                                      />
                                      <img
                                        className="img-fluid img2 resp-img2"
                                        src="/img/product/home1-pro-13.jpg"
                                        alt="p-2"
                                      />
                                    </Link>
                                  </div>
                                  <div className="product-content">
                                    <div className="pro-title-price">
                                      <h6>
                                        <Link to="/product">
                                          Portable speaker
                                        </Link>
                                      </h6>
                                      <div className="product-price">
                                        <div className="price-box">
                                          <span className="new-price">
                                            $44.00
                                          </span>
                                          <span className="old-price">
                                            $49.00
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ask-form">
                                <h6>Ask Link question</h6>
                                <form method="post" className="contact-form">
                                  <input
                                    type="hidden"
                                    name="contact[product url]"
                                    value=""
                                  />
                                  <div className="form-grp">
                                    <input
                                      type="text"
                                      name="contact[name]"
                                      required=""
                                      placeholder="Your name*"
                                    />
                                    <input
                                      type="text"
                                      name="contact[phone]"
                                      placeholder="Your phone number"
                                    />
                                    <input
                                      type="email"
                                      name="contact[email]"
                                      required=""
                                      placeholder="Your email*"
                                    />
                                    <textarea
                                      name="contact[question]"
                                      rows="4"
                                      required=""
                                      placeholder="Your message*"
                                    ></textarea>
                                    <p>* Required fields</p>
                                    <button
                                      type="submit"
                                      className="btn-style2"
                                    >
                                      Submit Now
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <div className="product-info">
                        <p>
                          <span>🚚</span> Item will be delivered on or before
                          <span id="ten-days-ahead">Mar 3 2025</span>
                        </p>
                      </div>
                      <div className="product-info">
                        <div className="product-sku">
                          <h6>SKU:</h6>
                          <span className="variant-sku">abccd-13</span>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="share-icons">
                          <h6>Share:</h6>
                          <div className="pro-social">
                            <ul className="social-icon">
                              <li className="facebook">
                                <Link
                                  to="https://facebook.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaFacebookF />
                                </Link>
                              </li>
                              <li className="twitter">
                                <Link
                                  to="https://twitter.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaTwitter />
                                </Link>
                              </li>
                              <li className="pinterest">
                                <Link
                                  to="https://pinterest.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaPinterestP />
                                </Link>
                              </li>
                              <li className="instagram">
                                <Link
                                  to="https://instagram.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaInstagram />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-payment-image">
                          <ul className="payment-icon">
                            <li>
                              <Link to="/">
                                <svg
                                  viewBox="0 0 38 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  role="img"
                                  width="38"
                                  height="24"
                                >
                                  <title id="visa">Visa</title>
                                  <path
                                    opacity=".07"
                                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                                  ></path>
                                  <path
                                    fill="#fff"
                                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                                  ></path>
                                  <path
                                    d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                                    fill="#142688"
                                  ></path>
                                </svg>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <svg
                                  viewBox="0 0 38 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  role="img"
                                  width="38"
                                  height="24"
                                >
                                  <title id="master">Mastercard</title>
                                  <path
                                    opacity=".07"
                                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                                  ></path>
                                  <path
                                    fill="#fff"
                                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                                  ></path>
                                  <circle
                                    fill="#EB001B"
                                    cx="15"
                                    cy="12"
                                    r="7"
                                  ></circle>
                                  <circle
                                    fill="#F79E1B"
                                    cx="23"
                                    cy="12"
                                    r="7"
                                  ></circle>
                                  <path
                                    fill="#FF5F00"
                                    d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                                  ></path>
                                </svg>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  role="img"
                                  viewBox="0 0 38 24"
                                  width="38"
                                  height="24"
                                >
                                  <title id="american-express">
                                    American Express
                                  </title>
                                  <path
                                    fill="#000"
                                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"
                                    opacity=".07"
                                  ></path>
                                  <path
                                    fill="#006FCF"
                                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"
                                  ></path>
                                  <path
                                    fill="#FFF"
                                    d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"
                                  ></path>
                                  <path
                                    fill="#006FCF"
                                    d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"
                                  ></path>
                                  <path
                                    fill="#006FCF"
                                    d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"
                                  ></path>
                                  <path
                                    fill="#FFF"
                                    d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"
                                  ></path>
                                  <path
                                    fill="#006FCF"
                                    d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"
                                  ></path>
                                  <path
                                    fill="#006FCF"
                                    d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"
                                  ></path>
                                </svg>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <svg
                                  viewBox="0 0 38 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="38"
                                  height="24"
                                  role="img"
                                >
                                  <title id="paypal">PayPal</title>
                                  <path
                                    opacity=".07"
                                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                                  ></path>
                                  <path
                                    fill="#fff"
                                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                                  ></path>
                                  <path
                                    fill="#003087"
                                    d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
                                  ></path>
                                  <path
                                    fill="#3086C8"
                                    d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
                                  ></path>
                                  <path
                                    fill="#012169"
                                    d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
                                  ></path>
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .zoom {
    overflow: hidden;
    position: relative;
  }
  .zoom img {
    transition: transform 0.4s ease-out, transform-origin 0.4s ease-out;
    will-change: transform;
    cursor: zoom-in;
    display: block;
    width: 100%;
    height: auto;
    transform: scale(1);
  }

  .thumb-arrow {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 35%;
    z-index: 1;
    transition: all 0.3s ease;
  }
  .thumb-arrow.prev {
    left: -40px;
  }
  .thumb-arrow.next {
    right: -40px;
  }
  .thumb-arrow:hover {
    background: #512ec3;
    color: #fff;
    border-color: #512ec3;
  }

  /* ================ fullview-slider ================ */
  .fullview-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fullview-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  .fullview-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    z-index: 10000;
  }

  .fullview-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background: #000; /* black background */
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    z-index: 10100;

    /* center the X icon */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: background 0.3s, transform 0.2s;
  }

  .fullview-close:hover {
    background: #222;
    transform: scale(1.1);
  }

  .fullview-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.8rem;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
    z-index: 10100;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fullview-arrow.prev {
    left: 10px;
  }

  .fullview-arrow.next {
    right: 10px;
  }

  .fullview-slider img {
    max-height: 80vh;
    margin: 0 auto;
    display: block;
    object-fit: contain;
  }
`;

export default ProductDetailsInfo;
