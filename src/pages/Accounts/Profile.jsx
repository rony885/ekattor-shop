import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
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
                    <span className="breadcrumb-text">profile</span>
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
                        <Link to="/pro-wishlist">
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
                        <h6>Profile</h6>
                      </div>
                      <div className="billing-form">
                        <ul className="input-2">
                          <li className="billing-li">
                            <label>First name</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="First name"
                            />
                          </li>
                          <li className="billing-li">
                            <label>Last name</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Last name"
                            />
                          </li>
                          <li className="billing-li">
                            <label>Email address</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Email address"
                              required
                            />
                          </li>
                          <li className="billing-li">
                            <label>Phone number</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Phone number"
                            />
                          </li>
                          <li className="billing-li">
                            <label>New password</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="New password"
                            />
                          </li>
                          <li className="billing-li">
                            <label>Confirm password</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Confirm password"
                            />
                          </li>
                        </ul>
                        <ul className="pro-submit">
                          <li className="label-info">
                            <label className="box-area">
                              <span className="text">
                                Subscribe me to newsletter
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
                              Update profile
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

export default Profile;
