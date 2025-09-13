import React from "react";
import { Link } from "react-router-dom";

const banners = [
  {
    id: 1,
    image: "/img/banner/home-banner-1.jpg",
    alt: "big-banner1",
    discount: "60% Off",
    title: "Wireless devices",
  },
  {
    id: 2,
    image: "/img/banner/home-banner-2.jpg",
    alt: "big-banner2",
    discount: "45% Off",
    title: "A music players",
  },
  {
    id: 3,
    image: "/img/banner/home-banner-3.jpg",
    alt: "big-banner3",
    discount: "20% off",
    title: "Android watch T6",
  },
];

const Banner = () => {
  return (
    <section className="home-banner-grid section-pt">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="banner-grid-block">
              <ul className="banner-grid-ul">
                {banners.map((banner) => (
                  <li key={banner.id} className="banner-grid-li big-banner">
                    <div className="banner-block">
                      <Link to="/product">
                        <span className="image-block">
                          <img
                            src={banner.image}
                            className="img-fluid"
                            alt={banner.alt}
                          />
                        </span>
                        <div className="banner-content banner-text-left banner-content-right">
                          <span className="subtitle">{banner.discount}</span>
                          <h2 className="title">{banner.title}</h2>
                          <span className="banner-button btn-style">
                            Shop now
                          </span>
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
