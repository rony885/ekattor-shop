import React from "react";
import { Link } from "react-router-dom";

const ProWishlist = () => {
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
                    <span className="breadcrumb-text">pro-wishlist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="order-histry-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="password-block">
                {/* <!-- order profile start --> */}
                <div className="profile-info">
                  <div className="account-profile">
                    <div className="pro-img">
                      <Link to="#">
                        <img
                          src="/img/testi/test-1.jpg"
                          className="img-fluid"
                          alt="testi-1"
                        />
                      </Link>
                    </div>
                    <div className="profile-text">
                      <h6>David williams</h6>
                      <span>Joined April 06, 2025</span>
                    </div>
                  </div>
                  <div className="account-detail">
                    <ul className="profile-ul">
                      <li className="profile-li">
                        <Link to="/order-history">
                          <span>Orders</span>
                          <span className="pro-count">5</span>
                        </Link>
                      </li>
                      <li className="profile-li">
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li className="profile-li">
                        <Link to="pro-address">Address</Link>
                      </li>
                      <li className="profile-li">
                        <Link to="/pro-wishlist" className="active">
                          <span>Wishlist</span>
                          <span className="pro-count">3</span>
                        </Link>
                      </li>
                      <li className="profile-li">
                        <Link to="/change-password">
                          <span>Change password</span>
                        </Link>
                      </li>
                      <li className="profile-li">
                        <Link to="/pro-tickets">
                          <span>My tickets</span>
                          <span className="pro-count">4</span>
                        </Link>
                      </li>
                      <li className="profile-li">
                        <Link to="/">
                          <span>Sign out</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- order profile end --> */}
                {/* <!-- order info start --> */}
                <div className="profile-form order-info">
                  <div className="pro-add-title">
                    <h6>Wishlist</h6>
                  </div>
                  <div className="wishlist-area">
                    <div className="wishlist-details">
                      <div className="wishlist-item">
                        <span className="wishlist-head">My wishlist:</span>
                        <span className="sp-link-title">3 item</span>
                      </div>
                      <div className="wishlist-all-pro">
                        <div className="wishlist-pro">
                          <div className="wishlist-pro-image">
                            <Link to="/product">
                              <img
                                src="/img/menu/home-pro-banner1.jpg"
                                className="img-fluid"
                                alt="p-1"
                              />
                            </Link>
                          </div>
                          <div className="pro-details">
                            <h6>
                              <Link to="/product">Portable speaker</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="qty-item">
                          <Link to="/cart-page" className="add-wishlist">
                            Add to cart
                          </Link>
                          <Link to="/checkout-style1" className="add-wishlist">
                            Buy now
                          </Link>
                        </div>
                        <div className="all-pro-price">
                          <div className="price-box">
                            <span className="new-price">$21.00</span>
                            <span className="old-price">$25.00</span>
                          </div>
                          <span className="wishalist-icon">
                            <i className="fa fa-heart text-danger"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist-area">
                    <div className="wishlist-details">
                      <div className="wishlist-all-pro">
                        <div className="wishlist-pro">
                          <div className="wishlist-pro-image">
                            <Link to="/product">
                              <img
                                src="/img/menu/home-pro-banner3.jpg"
                                className="img-fluid"
                                alt="p-2"
                              />
                            </Link>
                          </div>
                          <div className="pro-details">
                            <h6>
                              <Link to="/product">Ev charging plug</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="qty-item">
                          <Link to="/cart-page" className="add-wishlist">
                            Add to cart
                          </Link>
                          <Link to="checkout-style1" className="add-wishlist">
                            Buy now
                          </Link>
                        </div>
                        <div className="all-pro-price">
                          <div className="price-box">
                            <span className="new-price">$54.00</span>
                            <span className="old-price">$65.00</span>
                          </div>
                          <span className="wishalist-icon">
                            <i className="fa fa-heart text-danger"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist-area">
                    <div className="wishlist-details">
                      <div className="wishlist-all-pro">
                        <div className="wishlist-pro">
                          <div className="wishlist-pro-image">
                            <Link to="/product">
                              <img
                                src="/img/menu/home-pro-banner5.jpg"
                                className="img-fluid"
                                alt="p-3"
                              />
                            </Link>
                          </div>
                          <div className="pro-details">
                            <h6>
                              <Link to="/product">Verse earphones</Link>
                            </h6>
                          </div>
                        </div>
                        <div className="qty-item">
                          <Link to="/cart-page" className="add-wishlist">
                            Add to cart
                          </Link>
                          <Link to="/checkout" className="add-wishlist">
                            Buy now
                          </Link>
                        </div>
                        <div className="all-pro-price">
                          <div className="price-box">
                            <span className="new-price">$21.00</span>
                            <span className="old-price">$45.00</span>
                          </div>
                          <span className="wishalist-icon">
                            <i className="fa fa-heart text-danger"></i>
                          </span>
                        </div>
                      </div>
                      <div className="other-link">
                        <ul className="other-ul">
                          <li className="wishlist-other-link">
                            <Link to="/product" className="btn btn-style2">
                              Continue shopping
                            </Link>
                          </li>
                          <li className="wishlist-other-link">
                            <Link
                              to="/wishlist-empty"
                              className="btn btn-style2"
                            >
                              Clear wishlist
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- order info end --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProWishlist;
