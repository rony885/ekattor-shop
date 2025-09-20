import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ cartOpen, closeMennu }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`cart-drawer ${cartOpen ? "cart-drawer active" : ""}`}
      id="cart-drawer"
    >
      <form className="drawer-contents">
        <div className="drawer-fixed-header">
          <div className="drawer-header">
            <h6 className="drawer-header-title">Cart</h6>
            <div className="drawer-close">
              <button
                type="button"
                className="drawer-close-btn"
                onClick={closeMennu}
              >
                <span className="drawer-close-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="drawer-cart-empty">
          <div className="drawer-scrollable">
            <h2>Your cart is currently empty</h2>
            <Link
              to="https://spacingtech.com/collection/all"
              className="btn btn-style2"
            >
              Continue shopping
            </Link>
          </div>
        </div>
        <div className="drawer-inner">
          <div className="drawer-scrollable">
            <ul className="cart-items">
              <li className="cart-item">
                <div className="cart-item-info">
                  <div className="cart-item-image">
                    <Link to="/product-details">
                      <img
                        src="/img/menu/home-pro-banner1.jpg"
                        className="img-fluid"
                        alt="cart-1"
                      />
                    </Link>
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-name">
                      <Link to="/product-details">Portable speaker</Link>
                    </div>
                    <div className="cart-pro-info">
                      <div className="cart-qty-price">
                        <span>1</span>
                        <span>×</span>
                        <span className="price">$25.00</span>
                      </div>
                    </div>
                    <div className="cart-item-sub">
                      <div className="cart-qty-price-remove">
                        <div className="cart-item-qty">
                          <div className="js-qty-wrapper">
                            <div className="js-qty-wrap">
                              <button
                                type="button"
                                className="js-qty-adjust ju-qty-adjust-minus"
                              >
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                  >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                  </svg>
                                </span>
                              </button>
                              <input
                                type="text"
                                className="js-qty-num"
                                name="name"
                                defaultValue="1"
                                pattern="[0-9]*"
                              />
                              <button
                                type="button"
                                className="js-qty-adjust ju-qty-adjust-plus"
                              >
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                  >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="cart-item-price">
                          <span className="cart-price">$12.00</span>
                        </div>
                        <div className="cart-item-remove">
                          <button type="button" className="cart-remove">
                            <span>
                              <svg
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="css-i6dzq1"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-variants">
                      <h6>Color:</h6>
                      <span>Black</span>
                    </div>
                    <div className="cart-item-variants">
                      <h6>Size:</h6>
                      <span>XL</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cart-item">
                <div className="cart-item-info">
                  <div className="cart-item-image">
                    <Link to="/product-details">
                      <img
                        src="/img/menu/home-pro-banner2.jpg"
                        className="img-fluid"
                        alt="cart-2"
                      />
                    </Link>
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-name">
                      <Link to="/product-details">Strelitzia nicolai</Link>
                    </div>
                    <div className="cart-pro-info">
                      <div className="cart-qty-price">
                        <span>1</span>
                        <span>×</span>
                        <span className="price">$18.00</span>
                      </div>
                    </div>
                    <div className="cart-item-sub">
                      <div className="cart-qty-price-remove">
                        <div className="cart-item-qty">
                          <div className="js-qty-wrapper">
                            <div className="js-qty-wrap">
                              <button
                                type="button"
                                className="js-qty-adjust ju-qty-adjust-minus"
                              >
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                  >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                  </svg>
                                </span>
                              </button>
                              <input
                                type="text"
                                className="js-qty-num"
                                name="name"
                                defaultValue="1"
                                pattern="[0-9]*"
                              />
                              <button
                                type="button"
                                className="js-qty-adjust ju-qty-adjust-plus"
                              >
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                  >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="cart-item-price">
                          <span className="cart-price">$12.00</span>
                        </div>
                        <div className="cart-item-remove">
                          <button type="button" className="cart-remove">
                            <span>
                              <svg
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="css-i6dzq1"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-variants">
                      <h6>Color:</h6>
                      <span>Black</span>
                    </div>
                    <div className="cart-item-variants">
                      <h6>Size:</h6>
                      <span>XL</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cart-item">
                <div className="cart-item-info">
                  <div className="cart-item-image">
                    <Link to="/product-details">
                      <img
                        src="/img/menu/home-pro-banner3.jpg"
                        className="img-fluid"
                        alt="cart-3"
                      />
                    </Link>
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-name">
                      <Link to="/product-details">Video shoot drone</Link>
                    </div>
                    <div className="cart-pro-info">
                      <div className="cart-qty-price">
                        <span>1</span>
                        <span>×</span>
                        <span className="price">$20.00</span>
                      </div>
                    </div>
                    <div className="cart-item-sub">
                      <div className="cart-qty-price-remove">
                        <div className="cart-item-qty">
                          <div className="js-qty-wrapper">
                            <div className="js-qty-wrap">
                              <button
                                type="button"
                                className="js-qty-adjust ju-qty-adjust-minus"
                              >
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                  >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                  </svg>
                                </span>
                              </button>
                              <input
                                type="text"
                                className="js-qty-num"
                                name="name"
                                defaultValue="1"
                                pattern="[0-9]*"
                              />
                              <button
                                type="button"
                                className="js-qty-adjust ju-qty-adjust-plus"
                              >
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                  >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="cart-item-price">
                          <span className="cart-price">$12.00</span>
                        </div>
                        <div className="cart-item-remove">
                          <button type="button" className="cart-remove">
                            <span>
                              <svg
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="css-i6dzq1"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-variants">
                      <h6>Color:</h6>
                      <span>Black</span>
                    </div>
                    <div className="cart-item-variants">
                      <h6>Size:</h6>
                      <span>XL</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cart-item">
                <div className="cart-item-info">
                  <div className="cart-item-image">
                    <Link to="/product-details">
                      <img
                        src="/img/menu/home-pro-banner4.jpg"
                        className="img-fluid"
                        alt="cart-4"
                      />
                    </Link>
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-name">
                      <Link to="/product-details">Air conditioner</Link>
                    </div>
                    <div className="cart-pro-info">
                      <div className="cart-qty-price">
                        <span>1</span>
                        <span>×</span>
                        <span className="price">$22.00</span>
                      </div>
                    </div>
                    <div className="cart-item-sub">
                      <div className="cart-qty-price-remove">
                        <div className="cart-item-qty">
                          <div className="js-qty-wrapper">
                            <div className="js-qty-wrap">
                              <button
                                type="button"
                                className="js-qty-adjust ju-qty-adjust-minus"
                              >
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                  >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                  </svg>
                                </span>
                              </button>
                              <input
                                type="text"
                                className="js-qty-num"
                                name="name"
                                defaultValue="1"
                                pattern="[0-9]*"
                              />
                              <button
                                type="button"
                                className="js-qty-adjust ju-qty-adjust-plus"
                              >
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="css-i6dzq1"
                                  >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="cart-item-price">
                          <span className="cart-price">$12.00</span>
                        </div>
                        <div className="cart-item-remove">
                          <button type="button" className="cart-remove">
                            <span>
                              <svg
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="css-i6dzq1"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-variants">
                      <h6>Color:</h6>
                      <span>Black</span>
                    </div>
                    <div className="cart-item-variants">
                      <h6>Size:</h6>
                      <span>XL</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="drawer-notes">
              <label htmlFor="cartnote">Order note</label>
              <textarea
                name="note"
                className="cart-notes"
                id="cartnote"
              ></textarea>
            </div>
          </div>
          <div className="drawer-footer">
            <div className="drawer-block drawer-total">
              <span className="drawer-subtotal">Subtotal</span>
              <span className="drawer-totalprice">$74.00</span>
            </div>
            <div className="drawer-block drawer-ship-text">
              <label className="box-area">
                <span className="text">
                  I have read and agree with the
                  <Link to="/terms-condition">terms &amp; condition.</Link>
                </span>
                <input type="checkbox" className="cust-checkbox" />
                <span className="cust-check"></span>
              </label>
            </div>
            <div className="drawer-block drawer-cart-checkout">
              <div className="cart-checkout-btn">
                <button
                  type="button"
                  name="checkout"
                  className="btn btn-style2"
                  onClick={() => {
                    navigate("/cart-view");
                    closeMennu();
                  }}
                >
                  View cart
                </button>
                <button
                  type="button"
                  className="checkout btn btn-style2 disabled"
                  onClick={() => navigate("/checkout")}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cart;
