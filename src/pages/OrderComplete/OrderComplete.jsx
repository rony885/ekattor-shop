import React from "react";
import { Link } from "react-router-dom";

const OrderComplete = () => {
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
                    <span className="breadcrumb-text">Order complete</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="order-complete section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="order-area">
                {/* <!-- order-price start --> */}
                <div className="order-price">
                  <ul className="total-order">
                    <li>
                      <span className="order-no">Order no. 1724</span>
                      <span className="order-date">
                        <span className="order-date">
                          23th jan 2025 3:04 pm
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="total-price">Order total</span>
                      <span className="amount">$136,00</span>
                    </li>
                  </ul>
                </div>

                {/* <!-- order-details start --> */}
                <div className="order-details">
                  <span className="text-success order-i">
                    <i className="fa fa-check-circle"></i>
                  </span>
                  <h6>Thank you for order</h6>
                  <span className="order-s">
                    Your order will ship within few hours
                  </span>
                  <Link to="/track" className="tracking-link btn btn-style2">
                    Tracking details
                  </Link>
                </div>

                {/* <!-- order-delivery start --> */}
                <div className="order-delivery">
                  <ul className="delivery-payment">
                    <li className="delivery">
                      <h6>Delivery address</h6>
                      <p>Lorem ipsum</p>
                      <span className="order-span">7003 fairway street</span>
                      <span className="order-span">New york</span>
                      <span className="order-span">NY 10033</span>
                      <span className="order-span">USA</span>
                      <span className="order-span">
                        Mobile No :+11-123456789
                      </span>
                    </li>
                    <li className="pay">
                      <h6>Payment summary</h6>
                      <p className="transition">Transaction No : 66282856617</p>
                      <span className="order-span p-label">
                        <span className="n-price">Price</span>
                        <span className="o-price">$128,00</span>
                      </span>
                      <span className="order-span p-label">
                        <span className="n-price">Shipping charge</span>
                        <span className="o-price">$8,00</span>
                      </span>
                      <span className="order-span p-label">
                        <span className="n-price">Order Total</span>
                        <span className="o-price">$136,00</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderComplete;
