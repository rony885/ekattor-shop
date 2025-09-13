
import React from "react";
import { Link } from "react-router-dom";

const ShopHeroArea = () => {
  return (
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
                  <span className="breadcrumb-text">Collection left</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHeroArea;
