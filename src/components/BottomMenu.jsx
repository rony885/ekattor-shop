import React from "react";
import { Link } from "react-router-dom";

const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <ul className="bottom-menu-element">
        <li className="bottom-menu-wrap">
          <div className="bottom-menu-wrapper">
            <Link to="/" className="bottom-menu-home">
              <span className="bottom-menu-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </span>

              <span className="bottom-menu-title">Home</span>
            </Link>
          </div>
        </li>
        <li className="bottom-menu-wrap">
          <div className="bottom-menu-wrapper">
            <Link to="login-account.html" className="bottom-menu-user">
              <span className="bottom-menu-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>

              <span className="bottom-menu-title">Account</span>
            </Link>
          </div>
        </li>
        <li className="bottom-menu-wrap">
          <div className="bottom-menu-wrapper">
            <Link to="/product" className="bottom-menu-collection">
              <span className="bottom-menu-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </span>

              <span className="bottom-menu-title">Shop</span>
            </Link>
          </div>
        </li>
        <li className="bottom-menu-wrap">
          <div className="bottom-menu-wrapper">
            <Link to="/wishlist-product" className="bottom-menu-wishlist">
              <span className="bottom-menu-icon-wrap">
                <span className="bottom-menu-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </span>
                <span className="bottom-menu-counter wishlist-counter">5</span>
              </span>

              <span className="bottom-menu-title">Wishlist</span>
            </Link>
          </div>
        </li>
        <li className="bottom-menu-wrap">
          <div className="bottom-menu-wrapper">
            <Link to="#" className="bottom-menu-cart">
              <span className="bottom-menu-icon-wrap">
                <span className="bottom-menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.505 2h11a1 1 0 0 1 .8.4l2.7 3.6v15a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4m12.5 6h-14v12h14zm-.5-2l-1.5-2h-10l-1.5 2zm-9.5 4v2a3 3 0 1 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2z"
                    ></path>
                  </svg>
                </span>
                <span className="bottom-menu-counter cart-counter">3</span>
              </span>

              <span className="bottom-menu-title">Cart</span>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BottomMenu;
