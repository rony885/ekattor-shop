import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    img: "/img/testi/test-1.jpg",
    name: "Karen onnabit",
    role: "Store customer",
    comment:
      "If you are going to use a passage of you need to be sure there isn't anything embarrassing hidden in the middle of text generator on the internet dictionary of over.",
    rating: 4,
    reviews: 1,
  },
  {
    id: 2,
    img: "/img/testi/test-2.jpg",
    name: "Lynne gwistic",
    role: "Store customer",
    comment:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged in the 1960s with the release of containing passages.",
    rating: 4,
    reviews: 1,
  },
  {
    id: 3,
    img: "/img/testi/test-3.jpg",
    name: "Karen onnabit",
    role: "Store customer",
    comment:
      "If you are going to use a passage of you need to be sure there isn't anything embarrassing hidden in the middle of text generator on the internet dictionary of over.",
    rating: 4,
    reviews: 1,
  },
  {
    id: 4,
    img: "/img/testi/test-4.jpg",
    name: "David williams",
    role: "Store customer",
    comment:
      "It was popularised in the 1960s with the release of letraset sheets containing lorem Ipsum passages, and more recently with desktop software.",
    rating: 4,
    reviews: 1,
  },
  {
    id: 5,
    img: "/img/testi/test-5.jpg",
    name: "Lynne gwistic",
    role: "Store customer",
    comment:
      "If you are going to use a passage of you need to be sure there isn't anything embarrassing hidden in the middle of text generator on the internet dictionary of over.",
    rating: 4,
    reviews: 1,
  },
];

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <i className="fa-solid fa-arrow-left"></i>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <i className="fa-solid fa-arrow-right"></i>
    </div>
  );
};

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <section className="testimonial section-ptb">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-title">1300+ Customer reviews</span>
            <h2>Our customers love</h2>
          </div>
          <Slider {...settings}>
            {testimonials.map((testi) => (
              <div key={testi.id} className="testi-info text-center p-4">
                <div className="auth-img mb-3">
                  <img
                    src={testi.img}
                    alt={testi.name}
                    className="img-fluid rounded-circle testi-img"
                  />
                </div>
                <div className="testi-review-block mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa${
                        i < testi.rating ? " fa-star" : " fa-regular fa-star"
                      }`}
                    ></i>
                  ))}
                  <span className="testi-comment ms-2">
                    {testi.reviews} Comment
                  </span>
                </div>
                <p className="mb-3">{testi.comment}</p>
                <div className="bottom-text">
                  <span className="icon mb-2">
                    <i className="fa-solid fa-quote-left"></i>
                  </span>
                  <div className="title">
                    <h6>{testi.name}</h6>
                    <span>{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .testi-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    height: 100%;
  }

  .testi-img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  }

  /* Custom arrows */
  .custom-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    /* z-index: 10; */
    background: #634cda;
    color: #fff;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
  }

  .prev-arrow {
    left: -25px; 
  }

  .next-arrow {
    right: -25px; 
  }
`;

export default Testimonial;
