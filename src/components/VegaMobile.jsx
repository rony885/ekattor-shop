import React from "react";
import { Link } from "react-router-dom";

const VegaMobile = ({ vegaMobileOpen, closeMennuVegaMobile }) => {
  return (
    <div className="mobile-vega">
      <div className="vega-menu-area">
        <div
          className={`mobile-vega-menu ${
            vegaMobileOpen ? "mobile-vega-menu active" : ""
          }`}
          id="mobile-vega-menu"
        >
          <div className="vega-close">
            <button className="vega-close-btn" onClick={closeMennuVegaMobile}>
              <span className="vega-close-icon">
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
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
            </button>
          </div>
          <ul className="vega-menu">
            <li className="menu-link">
              <div className="link-title">
                <Link
                  to="#mobile-vega-electronics"
                  data-bs-toggle="collapse"
                  className="sp-link-title"
                >
                  <span className="menu-img-icon">
                    <img
                      src="/img/menu/cate-menu1.jpg"
                      className="img-fluid"
                      alt="cate-menu1"
                    />
                    <span>Pen drivess</span>
                  </span>
                  <span className="menu-arrow">
                    <i className="feather-plus"></i>
                  </span>
                </Link>
              </div>
              <div
                className="menu-dropdown product-menu collapse"
                id="mobile-vega-electronics"
              >
                <ul className="ul">
                  <li className="productlink-li">
                    <div className="productlink-title">
                      <Link
                        to="#vega-sub1"
                        data-bs-toggle="collapse"
                        className="sp-link-title"
                      >
                        <span>Shop page</span>
                        <span className="menu-arrow">
                          <i className="feather-plus"></i>
                        </span>
                      </Link>
                    </div>
                    <ul
                      className="productsupmenu-dropdown collapse"
                      id="vega-sub1"
                    >
                      <li className="productsupmenu-li">
                        <Link
                          to="/collection-without"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Collection</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/collection"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Collection left</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/collection-right-2"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">
                            Collection right
                          </span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/collection-list-without"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Collection list</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/collection-list"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">
                            Collection list lef
                          </span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link to="#" className="productsuplink-title">
                          <span className="sp-link-title">
                            Collection list right
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="productlink-li">
                    <div className="productlink-title">
                      <Link
                        to="#vega-sub2"
                        data-bs-toggle="collapse"
                        className="sp-link-title"
                      >
                        <span>Product page</span>
                        <span className="menu-arrow">
                          <i className="feather-plus"></i>
                        </span>
                      </Link>
                    </div>
                    <ul
                      className="productsupmenu-dropdown collapse"
                      id="vega-sub2"
                    >
                      <li className="productsupmenu-li">
                        <Link
                          to="product-template"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Product layout</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/product-template2"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Product tab</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/product-template3"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Product advanc</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/product-template4"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Product advance</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="product-template5"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">
                            Product accordion
                          </span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/product-template6"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Product center</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/product-template7"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Product side</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-link">
              <div className="link-title">
                <Link
                  to="#vega-furniture"
                  data-bs-toggle="collapse"
                  className="sp-link-title"
                >
                  <span className="menu-img-icon">
                    <img
                      src="/img/menu/cate-menu2.jpg"
                      className="img-fluid"
                      alt="cate-menu2"
                    />
                    <span>Smart watch</span>
                  </span>
                </Link>
              </div>
            </li>
            <li className="menu-link">
              <div className="link-title">
                <Link
                  to="#mob-cosmetic"
                  data-bs-toggle="collapse"
                  className="sp-link-title"
                >
                  <span className="menu-img-icon">
                    <img
                      src="/img/menu/cate-menu3.jpg"
                      className="img-fluid"
                      alt="cate-menu3"
                    />
                    <span>Verse earphones</span>
                  </span>
                  <span className="menu-arrow">
                    <i className="feather-plus"></i>
                  </span>
                </Link>
              </div>
              <div
                className="menu-dropdown product-menu collapse"
                id="mob-cosmetic"
              >
                <ul className="ul">
                  <li className="productlink-li">
                    <div className="productlink-title">
                      <Link
                        to="#productsup-vega1"
                        data-bs-toggle="collapse"
                        className="sp-link-title"
                      >
                        <span>Shop page</span>
                        <span className="menu-arrow">
                          <i className="feather-plus"></i>
                        </span>
                      </Link>
                    </div>
                    <ul
                      className="productsupmenu-dropdown collapse"
                      id="productsup-vega1"
                    >
                      <li className="productsupmenu-li">
                        <Link
                          to="/collection-without"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Collection</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/collection"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Collection left</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/collection-right-2"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">
                            Collection right
                          </span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/collection-list-without"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Collection list</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/collection-list"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">
                            Collection list lef
                          </span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link to="#" className="productsuplink-title">
                          <span className="sp-link-title">
                            Collection list right
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="productlink-li">
                    <div className="productlink-title">
                      <Link
                        to="#productsup-vega2"
                        data-bs-toggle="collapse"
                        className="sp-link-title"
                      >
                        <span>Product page</span>
                        <span className="menu-arrow">
                          <i className="feather-plus"></i>
                        </span>
                      </Link>
                    </div>
                    <ul
                      className="productsupmenu-dropdown collapse"
                      id="productsup-vega2"
                    >
                      <li className="productsupmenu-li">
                        <Link
                          to="/product-template"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Product layout</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="product-template2"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Product tab</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/product-template3"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Product advanc</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/product-template4"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Product advance</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/product-template5"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">
                            Product accordion
                          </span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/product-template6"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Product center</span>
                        </Link>
                      </li>
                      <li className="productsupmenu-li">
                        <Link
                          to="/product-template7"
                          className="productsuplink-title"
                        >
                          <span className="sp-link-title">Product side</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-link">
              <div className="link-title">
                <Link to="collection" className="sp-link-title">
                  <span className="menu-img-icon">
                    <img
                      src="/img/menu/cate-menu4.jpg"
                      className="img-fluid"
                      alt="cate-menu4"
                    />
                    <span>Wifro camera</span>
                  </span>
                </Link>
              </div>
            </li>
            <li className="menu-link">
              <div className="link-title">
                <Link to="collection" className="sp-link-title">
                  <span className="menu-img-icon">
                    <img
                      src="/img/menu/cate-menu5.jpg"
                      className="img-fluid"
                      alt="cate-menu5"
                    />
                    <span>Bluetooth earbuds</span>
                  </span>
                </Link>
              </div>
            </li>
            <li className="menu-link">
              <div className="link-title">
                <Link to="/collection" className="sp-link-title">
                  <span className="menu-img-icon">
                    <img
                      src="/img/menu/cate-menu6.jpg"
                      className="img-fluid"
                      alt="cate-menu6"
                    />
                    <span>Projector leptop</span>
                  </span>
                </Link>
              </div>
            </li>
            <li className="menu-link">
              <div className="link-title">
                <Link to="/collection" className="sp-link-title">
                  <span className="menu-img-icon">
                    <img
                      src="/img/menu/cate-menu7.jpg"
                      className="img-fluid"
                      alt="cate-menu7"
                    />
                    <span>Wireless mouse</span>
                  </span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VegaMobile;
