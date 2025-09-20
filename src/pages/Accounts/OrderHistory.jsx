import React from "react";
import { Link } from "react-router-dom";

const OrderHistory = () => {
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
                    <span className="breadcrumb-text">Order history</span>
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
                      <h6>Miranda joy</h6>
                      <span>Joined April 06, 2025</span>
                    </div>
                  </div>
                  <div className="account-detail">
                    <ul className="profile-ul">
                      <li className="profile-li">
                        <Link to="/order-history" className="active">
                          <span>Orders</span>
                          <span className="pro-count">5</span>
                        </Link>
                      </li>
                      <li className="profile-li">
                        <Link to="/profile">Profile</Link>
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

                <div className="profile-form order-info">
                  <div className="pro-add-title">
                    <h6>Order</h6>
                  </div>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Order #</th>
                        <th>Date purchased</th>
                        <th>Status</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>78A643CD409</td>
                        <td>April 08, 2025</td>
                        <td className="canceled">Canceled</td>
                        <td>$760.50</td>
                      </tr>
                      <tr>
                        <td>34VB5540K83</td>
                        <td>April 11, 2025</td>
                        <td className="process">In progress</td>
                        <td>$540.30</td>
                      </tr>
                      <tr>
                        <td>78A643CD409</td>
                        <td>April 15, 2025</td>
                        <td className="delayed">Delayed</td>
                        <td>$412.00</td>
                      </tr>
                      <tr>
                        <td>78A643CD409</td>
                        <td>April 18, 2025</td>
                        <td className="delivered">Delivered</td>
                        <td>$805.00</td>
                      </tr>
                      <tr className="no-bottom-border">
                        <td>78A643CD409</td>
                        <td>April 21, 2025</td>
                        <td className="delivered">Delivered</td>
                        <td>$270.20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
