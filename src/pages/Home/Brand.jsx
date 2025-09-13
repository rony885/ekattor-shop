import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const brandLogos = [
  { id: 1, src: "/img/brand-logo/home1-brand-logo1.png", alt: "brand-logo1" },
  { id: 2, src: "/img/brand-logo/home1-brand-logo2.png", alt: "brand-logo2" },
  { id: 3, src: "/img/brand-logo/home1-brand-logo3.png", alt: "brand-logo3" },
  { id: 4, src: "/img/brand-logo/home1-brand-logo4.png", alt: "brand-logo4" },
  { id: 5, src: "/img/brand-logo/home1-brand-logo5.png", alt: "brand-logo5" },
  { id: 6, src: "/img/brand-logo/home1-brand-logo6.png", alt: "brand-logo6" },
];

const PrevArrow = ({ onClick }) => (
  <button
    className="custom-arrow custom-prev"
    onClick={onClick}
    aria-label="Previous"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="custom-arrow custom-next"
    onClick={onClick}
    aria-label="Next"
  >
    <FaChevronRight />
  </button>
);

const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <Wrapper>
      <div className="brand-logo">
        <div className="container">
          <div className="row">
            <div className="col">
              <Slider {...settings}>
                {brandLogos.map((logo) => (
                  <div key={logo.id} className="brand-logo-wrap text-center">
                    <Link to="/">
                      <span className="brand-img">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="img-fluid"
                        />
                      </span>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .custom-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    background: #fff;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #333;
  }

  .custom-arrow:hover {
    color: #512ec3;
    border: 1px solid #f5e70e;
  }

  .custom-prev {
    left: -20px;
  }

  .custom-next {
    right: -20px;
  }

  .custom-arrow svg {
    font-size: 18px;
  }
`;

export default Brand;
