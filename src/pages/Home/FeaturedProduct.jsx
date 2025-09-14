import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prodactData from "../../products.js";

const ProductTranding = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(prodactData);
  }, []);

  const PrevArrow = ({ className, style, onClick }) => (
    <button
      className={`swiper-prev swiper-prev-Trending ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <span>
        <i className="feather-arrow-left"></i>
      </span>
    </button>
  );

  const NextArrow = ({ className, style, onClick }) => (
    <button
      className={`swiper-next swiper-next-Trending ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <span>
        <i className="feather-arrow-right"></i>
      </span>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  // Open modal with body scroll handling
  const openModal = (modalId) => {
    const modalEl = document.getElementById(modalId);

    if (modalEl && window.bootstrap) {
      const modalInstance = window.bootstrap.Modal.getOrCreateInstance(
        modalEl,
        {
          backdrop: true,
          keyboard: true,
        }
      );

      // 🟢 Ensure modal is reset before showing again
      modalEl.style.display = "block";
      modalEl.removeAttribute("aria-hidden");
      modalEl.setAttribute("aria-modal", "true");
      modalEl.setAttribute("role", "dialog");

      modalInstance.show();
    }
  };

  return (
    <Wrapper>
      <section className="Trending-product bg-color section-ptb">
        <div className="collection-category">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section-capture">
                  <div className="section-title">
                    <span className="sub-title">Featured collection</span>
                    <h2>
                      <span>Weekly bestseller</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col">
                <div className="collection-wrap">
                  <Slider {...settings}>
                    {products.map((product) => (
                      <div key={product.id} className="single-product-wrap">
                        <div className="product-image">
                          <Link to="/product" className="pro-img">
                            <img
                              src={product.img1}
                              className="img-fluid img1 mobile-img1"
                              alt={product.title}
                            />
                            <img
                              src={product.img2}
                              className="img-fluid img2 mobile-img2"
                              alt={product.title}
                            />
                          </Link>
                          <div className="product-action">
                            <Link
                              className="quickview"
                              onClick={() => openModal("quickview")}
                            >
                              <span className="tooltip-text">Quickview</span>
                              <span className="pro-action-icon">
                                <i className="feather-eye"></i>
                              </span>
                            </Link>
                            <Link
                              to="#add-to-cart"
                              className="add-to-cart"
                              // data-bs-toggle="modal"
                              // data-bs-target="#add-to-cart"
                            >
                              <span className="tooltip-text">Add to cart</span>
                              <span className="pro-action-icon">
                                <i className="feather-shopping-bag"></i>
                              </span>
                            </Link>
                            <Link to="/wishlist-product" className="wishlist">
                              <span className="tooltip-text">Wishlist</span>
                              <span className="pro-action-icon">
                                <i className="feather-heart"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="product-sub-title">
                            <span>{product.subtitle}</span>
                          </div>
                          <div className="product-title">
                            <h6>
                              <Link to="/product">{product.title}</Link>
                            </h6>
                          </div>
                          <div className="product-price">
                            <div className="pro-price-box">
                              <span className="new-price">
                                {product.newPrice}
                              </span>
                              <span className="old-price">
                                {product.oldPrice}
                              </span>
                            </div>
                          </div>
                          <div className="product-description">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                          </div>
                        </div>
                        <div className="pro-label-retting">
                          <div className="product-ratting">
                            <span className="pro-ratting">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </div>
                          <div className="product-label pro-new-sale">
                            <span className="product-label-title">
                              Sale<span>{product.sale}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>

                  <div className="collection-button">
                    <Link to="/product" className="btn btn-style2">
                      View all item
                    </Link>
                  </div>

                  <div className="swiper-dots">
                    <div className="swiper-pagination swiper-pagination-Trending"></div>
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
  /* Fix slick cloned slides */
  .slick-slide {
    display: flex !important;
    height: auto !important;
  }

  /* Add spacing between slider cards */
  .slick-slide > div {
    padding: 0 12px; /* controls horizontal gap */
  }

  .single-product-wrap {
    background: #fff;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .single-product-wrap:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* -------- Slick Arrows -------- */
  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  .slick-prev {
    left: -45px;
  }

  .slick-next {
    right: -45px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "Font Awesome 6 Free"; /* if you use FA */
    font-weight: 900;
    font-size: 18px;
    color: #333;
    opacity: 1; /* remove default greyed look */
  }

  .slick-prev:before {
    content: "\\f104"; /* fa-chevron-left */
  }

  .slick-next:before {
    content: "\\f105"; /* fa-chevron-right */
  }

  .slick-prev:hover,
  .slick-next:hover {
    background: #6353dc;
    border-color: #6353dc;
  }

  .slick-prev:hover:before,
  .slick-next:hover:before {
    color: #fff;
  }

  /* Smaller arrows on mobile */
  @media (max-width: 1440px) {
    .single-product-wrap .product-action {
      opacity: 1 !important;
      visibility: visible !important;
      display: flex !important;
      justify-content: center;
      gap: 10px;
      margin-top: 12px;
    }
  }
  @media (max-width: 1024px) {
    .slick-prev {
      left: -20px;
    }

    .slick-next {
      right: -20px;
    }
    .single-product-wrap .product-action {
      opacity: 1 !important;
      visibility: visible !important;
      display: flex !important;
      justify-content: center;
      gap: 10px;
      margin-top: 12px;
    }
  }
  @media (max-width: 768px) {
    .slick-prev {
      left: -10px;
    }

    .slick-next {
      right: -10px;
    }

    .slick-prev,
    .slick-next {
      width: 34px;
      height: 34px;
    }
    .slick-prev:before,
    .slick-next:before {
      font-size: 16px;
    }
  }
  @media (max-width: 425px) {
    .slick-prev {
      left: -5px;
    }

    .slick-next {
      right: -5px;
    }
  }
`;

export default ProductTranding;
