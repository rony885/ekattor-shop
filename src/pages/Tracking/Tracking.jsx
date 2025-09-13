import React from "react";
import { Link } from "react-router-dom";

const Tracking = () => {
  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-index">
                <ul className="breadcrumb-ul">
                  <li className="breadcrumb-li">
                    <Link className="breadcrumb-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-li">
                    <span className="breadcrumb-text">Traking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="track-block section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="track-area">
                <div className="track-price">
                  <ul className="track-order">
                    <li className="track-li">
                      <h6>Your order id is: 121</h6>
                    </li>
                    <li className="track-li">
                      <span className="track-status">Status:</span>
                      Picked by courier
                    </li>
                  </ul>
                </div>
                <div className="track-info">
                  <div className="track-content">
                    <div className="track-wrap active">
                      <span className="track-icon">
                        <i className="fa fa-check"></i>
                      </span>
                      <span className="track-text">Order confirmed</span>
                    </div>
                    <div className="track-wrap active">
                      <span className="track-icon">
                        <i className="fa fa-user"></i>
                      </span>
                      <span className="track-text">Picked by courier</span>
                    </div>
                    <div className="track-wrap">
                      <span className="track-icon">
                        <i className="fa fa-truck"></i>
                      </span>
                      <span className="track-text"> On the way </span>
                    </div>
                    <div className="track-wrap">
                      <span className="track-icon">
                        <i className="fa fa-archive"></i>
                      </span>
                      <span className="track-text">Ready for pickup</span>
                    </div>
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

export default Tracking;
