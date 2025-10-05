import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    deskImg: "/img/slider/home1-slider1.jpg",
    mobileImg: "/img/slider/home1-mobile-slider1.jpg",
    subtitle: "Get up to discount 80% off",
    title: "DSLR 360 CAMERA",
    text: "100% trusted electronics gadget",
    btnText: "ONLINE COLLECTION",
  },
  {
    id: 2,
    deskImg: "/img/slider/home1-slider2.jpg",
    mobileImg: "/img/slider/home1-mobile-slider2.jpg",
    subtitle: "Get up to discount 80% off",
    title: "Wireless earbuds",
    text: "100% trusted electronics gadget",
    btnText: "ONLINE COLLECTION",
  },
  {
    id: 3,
    deskImg: "/img/slider/home1-slider3.jpg",
    mobileImg: "/img/slider/home1-mobile-slider3.jpg",
    subtitle: "Get up to discount 80% off",
    title: "Wireless handset",
    text: "100% trusted electronics gadget",
    btnText: "ONLINE COLLECTION",
  },
];

const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow custom-prev" onClick={onClick}>
    <FaAngleLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="custom-arrow custom-next" onClick={onClick}>
    <FaAngleRight />
  </button>
);

const SliderHeroArea = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Wrapper>
      <section className="slider-content">
        <Slider {...settings} className="home-slider">
          {slides.map((slide) => (
            <div key={slide.id} className="item">
              <div className="slider-image-info">
                <div className="slider-image">
                  <img
                    src={slide.deskImg}
                    className="img-fluid desk-img"
                    alt={slide.title}
                  />
                  <img
                    src={slide.mobileImg}
                    className="img-fluid mobile-img"
                    alt={slide.title}
                  />
                </div>

                <div className="container slider-info-content">
                  <div className="row">
                    <div className="col">
                      <div className="slider-info-wrap slider-content-left slider-text-left">
                        <div className="slider-info-text">
                          <div className="slider-text-info">
                            <span className="sub-title">{slide.subtitle}</span>
                            <h2>
                              <span>{slide.title}</span>
                            </h2>
                            <div className="slider-text">
                              <span>{slide.text}</span>
                            </div>
                            <Link to="/product" className="btn btn-style">
                              {slide.btnText}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  body,
  html {
    overflow-x: hidden;
  }
  .slider-content {
    position: relative;
    overflow: hidden;
  }
  .item {
    position: relative;
  }
  .slider-image img {
    width: 100%;
    max-width: 100%;
    display: block;
  }
  .mobile-img {
    display: none;
  }
  @media (max-width: 768px) {
    .desk-img {
      display: none;
    }
    .mobile-img {
      display: block;
    }
  }

  /* Custom Arrows */
  .custom-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    background: #f5e70e;
    color: #000;

    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
  }
  .custom-arrow:hover {
    background: #f7c406;
    color: #fff;
  }
  .custom-prev {
    left: 15px;
  }
  .custom-next {
    right: 15px;
  }
`;

export default SliderHeroArea;
