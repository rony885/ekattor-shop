import React from "react";
import { Link } from "react-router-dom";

const AboutInfo = () => {
  return (
    <>
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
                    <span className="breadcrumb-text">About us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="about-content">
                <div className="section-capture">
                  <div className="section-title">
                    <h2>
                      <span>About us</span>
                    </h2>
                  </div>
                </div>

                <div className="about-banner">
                  <div className="about-banner-area section-pt">
                    <ul className="about-ul">
                      <li className="about-li about-company">
                        <img
                          src="/img/about/our-company.png"
                          className="img-fluid"
                          alt="our-company"
                        />
                      </li>

                      <li className="about-li abt-desc">
                        <h6>Our company</h6>
                        <p>
                          Lorem ipsum dolor sit amet conse ctetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam. Lorem
                          ipsum dolor sit amet conse ctetur adipisicing elit.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="about-banner-area section-pt">
                    <ul className="about-ul">
                      <li className="about-li about-company">
                        <img
                          src="/img/about/team-work.png"
                          className="img-fluid"
                          alt="team-work"
                        />
                      </li>

                      <li className="about-li abt-desc">
                        <h6>Team work</h6>
                        <p>
                          Lorem ipsum dolor sit amet conse ctetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam. Lorem
                          ipsum dolor sit amet conse ctetur adipisicing elit.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInfo;
