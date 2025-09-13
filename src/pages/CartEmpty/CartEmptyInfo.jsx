import React from "react";
import { Link } from "react-router-dom";

const CartEmptyInfo = () => {
  return (
    <>
      <section class="breadcrumb-area">
        <div class="container">
          <div class="col">
            <div class="row">
              <div class="breadcrumb-index">
                <ul class="breadcrumb-ul">
                  <li class="breadcrumb-li">
                    <Link class="breadcrumb-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="breadcrumb-li">
                    <span class="breadcrumb-text">
                      Your shopping cart empty
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cart-page section-ptb">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="empty-cart-page">
                <div class="section-capture">
                  <div class="section-title">
                    <h2>
                      <span>Cart empty</span>
                    </h2>
                    <p>
                      Sorry your cart has currently no more products, click on
                      'here' given below for continue browsing.
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

export default CartEmptyInfo;
