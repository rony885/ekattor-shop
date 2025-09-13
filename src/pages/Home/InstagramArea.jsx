import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const instagramImages = [
  { id: 1, src: "/img/insta/insta-1.jpg", alt: "insta-1" },
  { id: 2, src: "/img/insta/insta-2.jpg", alt: "insta-2" },
  { id: 3, src: "/img/insta/insta-3.jpg", alt: "insta-3" },
  { id: 4, src: "/img/insta/insta-4.jpg", alt: "insta-4" },
  { id: 5, src: "/img/insta/insta-5.jpg", alt: "insta-5" },
  { id: 6, src: "/img/insta/insta-6.jpg", alt: "insta-6" },
  { id: 7, src: "/img/insta/insta-7.jpg", alt: "insta-7" },
];

const InstagramArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="instagram section-ptb">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {/* Section Title */}
            <div className="section-capture text-center mb-4">
              <div className="section-title">
                <span className="sub-title">Our instagram shop</span>
                <h2>
                  <span>Follow on instagram</span>
                </h2>
              </div>
            </div>

            {/* Slider */}
            <div className="insta-slider">
              <Slider {...settings}>
                {instagramImages.map((item) => (
                  <div key={item.id} className="insta-content banner-hover p-2">
                    <Link to="/" className="insta-img">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                ))}
              </Slider>

              <div
                className="insta-button text-center mt-3"
                data-animate="animate__fadeInUp"
              >
                <Link to="/product" className="btn btn-style2">
                  # Electon Template
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramArea;
