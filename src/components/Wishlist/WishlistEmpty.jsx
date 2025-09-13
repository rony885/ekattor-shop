import React from "react";
import { Link } from "react-router-dom";

const WishlistEmpty = () => {
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
                    <span className="breadcrumb-text">Wishlist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cart-page section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="empty-cart-page">
                <div className="section-capture">
                  <div className="section-title">
                    <h2>
                      <span>Wishlist empty</span>
                    </h2>
                    <p>
                      Sorry your wishlist has currently no more products, click
                      on 'here' given below for continue browsing.
                    </p>
                    <p>
                      Continue browsing <Link to="/product">here</Link>.
                    </p>
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

export default WishlistEmpty;
