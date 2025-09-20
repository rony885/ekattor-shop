import React from "react";
import { Link } from "react-router-dom";

const ProAdress = () => {
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
                    <span className="breadcrumb-text">pro address</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pro-address-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="password-block">
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
                        <Link to="/profile" className="active">
                          Profile
                        </Link>
                      </li>
                      <li className="profile-li">
                        <Link to="/pro-address">Address</Link>
                      </li>
                      <li className="profile-li">
                        <Link to="pro-wishlist">
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

                <div className="profile-form profile-address">
                  <div className="billing-area">
                    <form>
                      <div className="pro-add-title">
                        <h6>Contact address</h6>
                      </div>
                      <div className="billing-form">
                        <ul className="input-2">
                          <li className="billing-li">
                            <label>Company</label>
                            <input
                              type="text"
                              name="f-name"
                              placeholder="Company"
                            />
                          </li>
                          <li className="billing-li">
                            <label>Country</label>
                            <select>
                              <option>United states</option>
                              <option>India</option>
                              <option>Canada</option>
                              <option>France</option>
                              <option>Germany</option>
                            </select>
                          </li>
                          <li className="billing-li">
                            <label>City</label>
                            <select>
                              <option>Choose city</option>
                              <option>New york</option>
                              <option>Berlin</option>
                              <option>Geneve</option>
                            </select>
                          </li>
                          <li className="billing-li">
                            <label>Zip Code</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Zip code"
                            />
                          </li>
                          <li className="billing-li">
                            <label>Address 1</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Address 1"
                            />
                          </li>
                          <li className="billing-li">
                            <label>Address 2</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Address 2"
                            />
                          </li>
                        </ul>
                        <ul className="pro-submit">
                          <li className="label-info">
                            <label className="box-area">
                              <span className="text">
                                Same as contact address
                              </span>
                              <input
                                type="checkbox"
                                className="cust-checkbox"
                              />
                              <span className="cust-check"></span>
                            </label>
                          </li>
                          <li>
                            <Link
                              to="/pro-wishlist"
                              className="btn btn-style2 checkout disabled"
                            >
                              Update address
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </form>
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

export default ProAdress;
