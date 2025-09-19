import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import categoriesData from "../../category.js";

const PrevArrow = ({ onClick }) => (
  <button
    className="slider-arrow prev-arrow"
    style={{
      position: "absolute",
      left: "-25px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      background: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    }}
    onClick={onClick}
  >
    <i className="feather-arrow-left"></i>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="slider-arrow next-arrow"
    style={{
      position: "absolute",
      right: "-25px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      background: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    }}
    onClick={onClick}
  >
    <i className="feather-arrow-right"></i>
  </button>
);

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="slider-category section-ptb"
      style={{ position: "relative" }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-capture d-flex justify-content-between align-items-center mb-4">
              <div className="section-title">
                <span className="sub-title">Favorites item</span>
                <h2>
                  <span>Popular category</span>
                </h2>
              </div>
              <Link to="/product" className="btn btn-style2">
                View all
              </Link>
            </div>

            <Slider {...settings}>
              {categories.map((cat) => (
                <div key={cat.id} className="cate-info text-center p-2">
                  <div className="category-block">
                    <Link to="/product" className="cat-img banner-hover">
                      <img
                        src={cat.img}
                        alt={cat.title}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <span className="text-content">+{cat.count}</span>
                  <h6 className="cat-title">{cat.title}</h6>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
