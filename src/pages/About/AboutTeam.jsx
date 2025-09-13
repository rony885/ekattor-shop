import React from "react";
import { Link } from "react-router-dom";

const AboutTeam = () => {
  return (
    <section className="about-team section-ptb">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="our-team">
              <div className="section-capture">
                <div className="section-title">
                  <h2>
                    <span className="title-main">Our team</span>
                  </h2>
                </div>
              </div>
              <div className="team-wrap">
                <ul className="team-ul">
                  <li className="team-li">
                    <Link to="#">
                      <img
                        src="/img/team/team-1.jpg"
                        className="img-fluid"
                        alt="team-1"
                      />
                    </Link>
                    <div className="team-info">
                      <h6>Johnny walker</h6>
                      <span>Web designer</span>
                    </div>
                  </li>
                  <li className="team-li">
                    <Link to="#">
                      <img
                        src="/img/team/team-2.jpg"
                        className="img-fluid"
                        alt="team-2"
                      />
                    </Link>
                    <div className="team-info">
                      <h6>Rebecca flex</h6>
                      <span>Support staff</span>
                    </div>
                  </li>
                  <li className="team-li">
                    <Link to="#">
                      <img
                        src="/img/team/team-3.jpg"
                        className="img-fluid"
                        alt="team-3"
                      />
                    </Link>
                    <div className="team-info">
                      <h6>Jan ringo</h6>
                      <span>Deputy sale</span>
                    </div>
                  </li>
                  <li className="team-li">
                    <Link to="#">
                      <img
                        src="/img/team/team-4.jpg"
                        className="img-fluid"
                        alt="team-4"
                      />
                    </Link>
                    <div className="team-info">
                      <h6>Ringo kai</h6>
                      <span>Policy member</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
