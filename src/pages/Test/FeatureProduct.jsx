import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FeaturedProduct = () => {
  // productData.js
  const products = [
    {
      id: 1,
      img1: "img/product/home1-pro-1.jpg",
      img2: "img/product/home1-pro-2.jpg",
      subtitle: "Wireless device",
      title: "Wireless headphones",
      newPrice: "$21.00",
      oldPrice: "$25.00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sale: "20%",
    },
    {
      id: 2,
      img1: "img/product/home1-pro-3.jpg",
      img2: "img/product/home1-pro-4.jpg",
      subtitle: "Waterproof",
      title: "Wireless mouse",
      newPrice: "$18.00",
      oldPrice: "$24.00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sale: "14%",
    },
    {
      id: 3,
      img1: "img/product/home1-pro-5.jpg",
      img2: "img/product/home1-pro-6.jpg",
      subtitle: "Live program",
      title: "Pen drives",
      newPrice: "$10.00",
      oldPrice: "$15.00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sale: "22%",
    },
    {
      id: 4,
      img1: "img/product/home1-pro-7.jpg",
      img2: "img/product/home1-pro-8.jpg",
      subtitle: "Waterproof watch",
      title: "Smart watch",
      newPrice: "$32.00",
      oldPrice: "$38.00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sale: "30%",
    },
    {
      id: 5,
      img1: "img/product/home1-pro-9.jpg",
      img2: "img/product/home1-pro-10.jpg",
      subtitle: "Softness music",
      title: "Verse earphones",
      newPrice: "$08.00",
      oldPrice: "$10.00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sale: "20%",
    },
    {
      id: 6,
      img1: "img/product/home1-pro-11.jpg",
      img2: "img/product/home1-pro-12.jpg",
      subtitle: "Rotation camera",
      title: "Wifro camera",
      newPrice: "$32.00",
      oldPrice: "$39.00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sale: "14%",
    },
    {
      id: 7,
      img1: "img/product/home1-pro-13.jpg",
      img2: "img/product/home1-pro-14.jpg",
      subtitle: "Wireless device",
      title: "Bluetooth earbuds",
      newPrice: "$44.00",
      oldPrice: "$48.00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sale: "22%",
    },
    {
      id: 8,
      img1: "img/product/home1-pro-15.jpg",
      img2: "img/product/home1-pro-16.jpg",
      subtitle: "Live program",
      title: "Projector laptop",
      newPrice: "$55.00",
      oldPrice: "$58.00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sale: "30%",
    },
    {
      id: 9,
      img1: "img/product/home1-pro-1.jpg",
      img2: "img/product/home1-pro-2.jpg",
      subtitle: "Gadget",
      title: "Mini speaker",
      newPrice: "$12.00",
      oldPrice: "$15.00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sale: "18%",
    },
    {
      id: 10,
      img1: "img/product/home1-pro-3.jpg",
      img2: "img/product/home1-pro-4.jpg",
      subtitle: "Accessories",
      title: "Phone stand",
      newPrice: "$05.00",
      oldPrice: "$08.00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sale: "10%",
    },
    {
      id: 11,
      img1: "img/product/home1-pro-5.jpg",
      img2: "img/product/home1-pro-6.jpg",
      subtitle: "Gadget",
      title: "Smart lamp",
      newPrice: "$22.00",
      oldPrice: "$28.00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sale: "25%",
    },
    {
      id: 12,
      img1: "img/product/home1-pro-7.jpg",
      img2: "img/product/home1-pro-8.jpg",
      subtitle: "Tech",
      title: "Wireless charger",
      newPrice: "$30.00",
      oldPrice: "$35.00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      sale: "20%",
    },
  ];


    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <button className="swiper-next swiper-next-Featured">
        <span>
          <i className="feather-arrow-right"></i>
        </span>
      </button>
    ),
    prevArrow: (
      <button className="swiper-prev swiper-prev-Featured">
        <span>
          <i className="feather-arrow-left"></i>
        </span>
      </button>
    ),
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div className="swiper-dots">
        <ul>{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="Featured -product bg-color section-ptb">
      <div className="collection-category">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-capture">
                <div className="section-title">
                  <span className="sub-title" data-animate="animate__fadeInUp">
                    Featured collection
                  </span>
                  <h2 data-animate="animate__fadeInUp">
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
                <div className="collection-slider swiper" id="Featured-product">
                  <div className="swiper-wrapper">
                    {products.map((product) => (
                      <div className="swiper-slide" key={product.id}>
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <a href="product-template.html" className="pro-img">
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
                            </a>
                            <div className="product-action">
                              <a
                                href="#quickview"
                                className="quickview"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                              >
                                <span className="tooltip-text">Quickview</span>
                                <span className="pro-action-icon">
                                  <i className="feather-eye"></i>
                                </span>
                              </a>
                              <a
                                href="#add-to-cart"
                                className="add-to-cart"
                                data-bs-toggle="modal"
                                data-bs-target="#add-to-cart"
                              >
                                <span className="tooltip-text">
                                  Add to cart
                                </span>
                                <span className="pro-action-icon">
                                  <i className="feather-shopping-bag"></i>
                                </span>
                              </a>
                              <a
                                href="wishlist-product.html"
                                className="wishlist"
                              >
                                <span className="tooltip-text">Wishlist</span>
                                <span className="pro-action-icon">
                                  <i className="feather-heart"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="product-sub-title">
                              <span>{product.subtitle}</span>
                            </div>
                            <div className="product-title">
                              <h6>
                                <a href="product-template.html">
                                  {product.title}
                                </a>
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
                              <p>{product.description}</p>
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
                      </div>
                    ))}
                  </div>
                  <div className="collection-button">
                    <a href="collection.html" className="btn btn-style2">
                      View all item
                    </a>
                  </div>
                </div>

                <div className="swiper-buttons">
                  <div className="swiper-buttons-wrap">
                    <button className="swiper-prev swiper-prev-Featured">
                      <span>
                        <i className="feather-arrow-left"></i>
                      </span>
                    </button>
                    <button className="swiper-next swiper-next-Featured">
                      <span>
                        <i className="feather-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="swiper-dots">
                  <div className="swiper-pagination swiper-pagination-Featured"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default FeaturedProduct;




