
import React from "react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    image: "/img/service/home-ser1.png",
    alt: "service-1",
    title: "Worldwide shipping",
    description: "The generated is there was !",
  },
  {
    id: 2,
    image: "/img/service/home-ser2.png",
    alt: "service-2",
    title: "Secure payment",
    description: "The generated is there was !",
  },
  {
    id: 3,
    image: "/img/service/home-ser3.png",
    alt: "service-3",
    title: "Return method",
    description: "The generated is there was !",
  },
  {
    id: 4,
    image: "/img/service/home-ser4.png",
    alt: "service-4",
    title: "Best gift voucher",
    description: "The generated is there was !",
  },
];

const Service = () => {
  return (
    <section className="our-service-area section-ptb">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="grid-wrap">
              {servicesData.map((service) => (
                <li key={service.id} className="grid-wrapper">
                  <div className="ser-block">
                    <Link to="#">
                      <span className="ser-icon">
                        <img
                          src={service.image}
                          className="img-fluid"
                          alt={service.alt}
                        />
                        <span></span>
                      </span>
                      <div className="service-text">
                        <h6>{service.title}</h6>
                        <p>{service.description}</p>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
