import React from "react";
import { Link } from "react-router-dom";

const AboutMissionVision = () => {
  return (
    <>
      <section className="about-vision bg-color section-pt">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="abt-vision">
                <ul className="abt-vision-ul">
                  <li className="abt-vision-li">
                    <div className="abt-vision-content">
                      <img
                        src="/img/about/our-mission.png"
                        className="img-fluid"
                        alt="our-mission"
                      />
                      <h6>Our mission</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry's standard dummy text ever since
                        the 1500s
                      </p>
                    </div>
                  </li>
                  <li className="abt-vision-li">
                    <div className="abt-vision-content">
                      <img
                        src="/img/about/our-vision.png"
                        className="img-fluid"
                        alt="our-vision"
                      />
                      <h6>Our vision</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry's standard dummy text ever since
                        the 1500s
                      </p>
                    </div>
                  </li>
                  <li className="abt-vision-li">
                    <div className="abt-vision-content">
                      <img
                        src="/img/about/our-idea.png"
                        className="img-fluid"
                        alt="our-idea"
                      />
                      <h6>Our idea</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry's standard dummy text ever since
                        the 1500s
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-count bg-color section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="single-count">
                <ul>
                  <li className="count-wrap">
                    <div className="count-info">
                      <div className="count">
                        <span className="count-number">10</span>
                        <span>+</span>
                      </div>
                      <h6>Years</h6>
                    </div>

                    <div className="counter-icon">
                      <Link to="#">
                        <i className="bi bi-briefcase"></i>
                      </Link>
                    </div>
                  </li>
                  <li className="count-wrap">
                    <div className="count-info">
                      <div className="count">
                        <span className="count-number">100</span>
                        <span>+</span>
                      </div>
                      <h6>Clients</h6>
                    </div>

                    <div className="counter-icon">
                      <Link to="#">
                        <i className="bi bi-people"></i>
                      </Link>
                    </div>
                  </li>
                  <li className="count-wrap">
                    <div className="count-info">
                      <div className="count">
                        <span className="count-number">50</span>
                        <span>+</span>
                      </div>
                      <h6>Shops</h6>
                    </div>

                    <div className="counter-icon">
                      <Link to="#">
                        <i className="bi bi-shop"></i>
                      </Link>
                    </div>
                  </li>
                  <li className="count-wrap">
                    <div className="count-info">
                      <div className="count">
                        <span className="count-number">17</span>
                        <span>M+</span>
                      </div>
                      <h6>Sales</h6>
                    </div>

                    <div className="counter-icon">
                      <Link to="#">
                        <i className="bi bi-tags"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMissionVision;
