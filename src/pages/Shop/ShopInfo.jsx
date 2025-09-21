import React from "react";
import { Link } from "react-router-dom";

const ShopInfo = () => {
  return (
    <section className="main-content-wrap bg-color shop-page section-ptb">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="pro-grli-wrapper left-side-wrap">
              <div className="pro-grli-wrap product-grid">
                <div className="collection-img-wrap">
                  <h6 className="st-title">Collection left (23)</h6>
                  {/* <!-- collection info start --> */}
                  <div className="collection-info">
                    <div className="collection-image">
                      <img
                        src="/img/banner/sall-banner.jpg"
                        className="img-fluid"
                        alt="sall-banner"
                      />
                    </div>
                  </div>
                  {/* <!-- collection info end --> */}
                </div>
                {/* <!-- shop-top-bar start --> */}
                <div className="shop-top-bar wow">
                  <div className="product-filter without-sidebar">
                    <button className="filter-button" type="button">
                      <i className="fa-solid fa-filter"></i>
                      <span>Filter</span>
                    </button>
                  </div>
                  <div className="product-view-mode">
                    {/* <!-- shop-item-filter-list start --> */}
                    <Link
                      to="#"
                      className="list-change-view grid-three active"
                      data-grid-view="3"
                    >
                      <i className="fa-solid fa-border-all"></i>
                    </Link>
                    <Link
                      to="#"
                      data-grid-view="1"
                      className="list-change-view list-one"
                    >
                      <i className="fa-solid fa-list"></i>
                    </Link>
                    {/* <!-- shop-item-filter-list end --> */}
                  </div>
                  {/* <!-- product-short start --> */}
                  <div className="product-short">
                    <label for="SortBy">Sort by:</label>
                    <select className="nice-select" name="sortby" id="SortBy">
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                    </select>
                    <Link to="#" className="short-title">
                      <span className="sort-title">Best Selling</span>
                      <span className="sort-icon">
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    </Link>
                    <Link to="#" className="short-title short-title-lg">
                      <span className="sort-title">Best Selling</span>
                      <span className="sort-icon">
                        <i className="bi bi-chevron-down"></i>
                      </span>
                    </Link>
                    <ul className="pro-ul collapse">
                      <li className="pro-li">
                        <Link to="#">Featured</Link>
                      </li>
                      <li className="pro-li selected">
                        <Link to="#">Best Selling</Link>
                      </li>
                      <li className="pro-li">
                        <Link to="#">Alphabetically, A-Z</Link>
                      </li>
                      <li className="pro-li">
                        <Link to="#">Alphabetically, Z-A</Link>
                      </li>
                      <li className="pro-li">
                        <Link to="#">Price, low to high</Link>
                      </li>
                      <li className="pro-li">
                        <Link to="#">Price, high to low</Link>
                      </li>
                      <li className="pro-li">
                        <Link to="#">Date, new to old</Link>
                      </li>
                      <li className="pro-li">
                        <Link to="#">Date, old to new</Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- product-short end --> */}
                </div>
                {/* <!-- shop-top-bar end --> */}
                {/* <!-- Latest-product start --> */}
                <div className="special-product grid-3">
                  <div className="collection-category">
                    <div className="row">
                      <div className="col">
                        <div className="collection-wrap">
                          <ul className="product-view-ul">
                            <li className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image banner-hover">
                                  <Link
                                    to="product-template.html"
                                    className="pro-img"
                                  >
                                    <img
                                      src="/img/product/home1-pro-1.jpg"
                                      className="img-fluid img1 mobile-img1"
                                      alt="p1"
                                    />
                                    <img
                                      src="/img/product/home1-pro-2.jpg"
                                      className="img-fluid img2 mobile-img2"
                                      alt="p2"
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      to="#quickview"
                                      className="quickview"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                    >
                                      <span className="tooltip-text">
                                        Quickview
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-eye"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="#add-to-cart"
                                      className="add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                    >
                                      <span className="tooltip-text">
                                        Add to cart
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-shopping-bag"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="/wishlist-product"
                                      className="wishlist"
                                    >
                                      <span className="tooltip-text">
                                        Wishlist
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-heart"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="product-caption">
                                  <div className="product-content">
                                    <div className="product-sub-title">
                                      <span>Wireless device</span>
                                    </div>
                                    <div className="product-title">
                                      <h6>
                                        <Link to="product-template.html">
                                          Wireless headphones
                                        </Link>
                                      </h6>
                                    </div>
                                    <div className="product-price">
                                      <div className="pro-price-box">
                                        <span className="new-price">
                                          $10.00
                                        </span>
                                        <span className="old-price">
                                          $15.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="product-description">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                    <div className="product-action">
                                      <Link
                                        to="#quickview"
                                        className="quickview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickview"
                                      >
                                        <span className="tooltip-text">
                                          Quickview
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-eye"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="#add-to-cart"
                                        className="add-to-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-to-cart"
                                      >
                                        <span className="tooltip-text">
                                          Add to cart
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-shopping-bag"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="wishlist-product.html"
                                        className="wishlist"
                                      >
                                        <span className="tooltip-text">
                                          Wishlist
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-heart"></i>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="pro-label-retting">
                                    <div className="product-ratting">
                                      <span className="pro-ratting">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </span>
                                    </div>
                                    <div className="product-label pro-new-sale">
                                      <span className="product-label-title">
                                        Sale<span>22%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image banner-hover">
                                  <Link
                                    to="product-template.html"
                                    className="pro-img"
                                  >
                                    <img
                                      src="/img/product/home1-pro-3.jpg"
                                      className="img-fluid img1 mobile-img1"
                                      alt="p1"
                                    />
                                    <img
                                      src="/img/product/home1-pro-4.jpg"
                                      className="img-fluid img2 mobile-img2"
                                      alt="p2"
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      to="#quickview"
                                      className="quickview"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                    >
                                      <span className="tooltip-text">
                                        Quickview
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-eye"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="#add-to-cart"
                                      className="add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                    >
                                      <span className="tooltip-text">
                                        Add to cart
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-shopping-bag"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="wishlist-product.html"
                                      className="wishlist"
                                    >
                                      <span className="tooltip-text">
                                        Wishlist
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-heart"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="product-caption">
                                  <div className="product-content">
                                    <div className="product-sub-title">
                                      <span>Waterproof</span>
                                    </div>
                                    <div className="product-title">
                                      <h6>
                                        <Link to="product-template.html">
                                          Waterproof
                                        </Link>
                                      </h6>
                                    </div>
                                    <div className="product-price">
                                      <div className="pro-price-box">
                                        <span className="new-price">
                                          $18.00
                                        </span>
                                        <span className="old-price">
                                          $24.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="product-description">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                    <div className="product-action">
                                      <Link
                                        to="#quickview"
                                        className="quickview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickview"
                                      >
                                        <span className="tooltip-text">
                                          Quickview
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-eye"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="#add-to-cart"
                                        className="add-to-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-to-cart"
                                      >
                                        <span className="tooltip-text">
                                          Add to cart
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-shopping-bag"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="wishlist-product.html"
                                        className="wishlist"
                                      >
                                        <span className="tooltip-text">
                                          Wishlist
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-heart"></i>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="pro-label-retting">
                                    <div className="product-ratting">
                                      <span className="pro-ratting">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </span>
                                    </div>
                                    <div className="product-label pro-new-sale">
                                      <span className="product-label-title">
                                        Sale<span>14%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image banner-hover">
                                  <Link
                                    to="/product-template"
                                    className="pro-img"
                                  >
                                    <img
                                      src="/img/product/home1-pro-5.jpg"
                                      className="img-fluid img1 mobile-img1"
                                      alt="p1"
                                    />
                                    <img
                                      src="/img/product/home1-pro-6.jpg"
                                      className="img-fluid img2 mobile-img2"
                                      alt="p2"
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      to="#quickview"
                                      className="quickview"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                    >
                                      <span className="tooltip-text">
                                        Quickview
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-eye"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="#add-to-cart"
                                      className="add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                    >
                                      <span className="tooltip-text">
                                        Add to cart
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-shopping-bag"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="/wishlist-product"
                                      className="wishlist"
                                    >
                                      <span className="tooltip-text">
                                        Wishlist
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-heart"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="product-caption">
                                  <div className="product-content">
                                    <div className="product-sub-title">
                                      <span>Live program</span>
                                    </div>
                                    <div className="product-title">
                                      <h6>
                                        <Link to="/product-template">
                                          Pen drivess
                                        </Link>
                                      </h6>
                                    </div>
                                    <div className="product-price">
                                      <div className="pro-price-box">
                                        <span className="new-price">
                                          $10.00
                                        </span>
                                        <span className="old-price">
                                          $15.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="product-description">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                    <div className="product-action">
                                      <Link
                                        to="#quickview"
                                        className="quickview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickview"
                                      >
                                        <span className="tooltip-text">
                                          Quickview
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-eye"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="#add-to-cart"
                                        className="add-to-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-to-cart"
                                      >
                                        <span className="tooltip-text">
                                          Add to cart
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-shopping-bag"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="wishlist-product.html"
                                        className="wishlist"
                                      >
                                        <span className="tooltip-text">
                                          Wishlist
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-heart"></i>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="pro-label-retting">
                                    <div className="product-ratting">
                                      <span className="pro-ratting">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </span>
                                    </div>
                                    <div className="product-label pro-new-sale">
                                      <span className="product-label-title">
                                        Sale<span>22%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image banner-hover">
                                  <Link
                                    to="product-template.html"
                                    className="pro-img"
                                  >
                                    <img
                                      src="/img/product/home1-pro-7.jpg"
                                      className="img-fluid img1 mobile-img1"
                                      alt="p1"
                                    />
                                    <img
                                      src="/img/product/home1-pro-8.jpg"
                                      className="img-fluid img2 mobile-img2"
                                      alt="p2"
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      to="#quickview"
                                      className="quickview"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                    >
                                      <span className="tooltip-text">
                                        Quickview
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-eye"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="#add-to-cart"
                                      className="add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                    >
                                      <span className="tooltip-text">
                                        Add to cart
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-shopping-bag"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="/wishlist-product"
                                      className="wishlist"
                                    >
                                      <span className="tooltip-text">
                                        Wishlist
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-heart"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="product-caption">
                                  <div className="product-content">
                                    <div className="product-sub-title">
                                      <span>Waterproof watch</span>
                                    </div>
                                    <div className="product-title">
                                      <h6>
                                        <Link to="/product-template">
                                          Smart watch
                                        </Link>
                                      </h6>
                                    </div>
                                    <div className="product-price">
                                      <div className="pro-price-box">
                                        <span className="new-price">
                                          $32.00
                                        </span>
                                        <span className="old-price">
                                          $38.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="product-description">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                    <div className="product-action">
                                      <Link
                                        to="#quickview"
                                        className="quickview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickview"
                                      >
                                        <span className="tooltip-text">
                                          Quickview
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-eye"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="#add-to-cart"
                                        className="add-to-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-to-cart"
                                      >
                                        <span className="tooltip-text">
                                          Add to cart
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-shopping-bag"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="/wishlist-product"
                                        className="wishlist"
                                      >
                                        <span className="tooltip-text">
                                          Wishlist
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-heart"></i>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="pro-label-retting">
                                    <div className="product-ratting">
                                      <span className="pro-ratting">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </span>
                                    </div>
                                    <div className="product-label pro-new-sale">
                                      <span className="product-label-title">
                                        Sale<span>30%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image banner-hover">
                                  <Link
                                    to="product-template.html"
                                    className="pro-img"
                                  >
                                    <img
                                      src="/img/product/home1-pro-9.jpg"
                                      className="img-fluid img1 mobile-img1"
                                      alt="p1"
                                    />
                                    <img
                                      src="/img/product/home1-pro-10.jpg"
                                      className="img-fluid img2 mobile-img2"
                                      alt="p2"
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      to="#quickview"
                                      className="quickview"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                    >
                                      <span className="tooltip-text">
                                        Quickview
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-eye"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="#add-to-cart"
                                      className="add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                    >
                                      <span className="tooltip-text">
                                        Add to cart
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-shopping-bag"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="/wishlist-product"
                                      className="wishlist"
                                    >
                                      <span className="tooltip-text">
                                        Wishlist
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-heart"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="product-caption">
                                  <div className="product-content">
                                    <div className="product-sub-title">
                                      <span>Softness music</span>
                                    </div>
                                    <div className="product-title">
                                      <h6>
                                        <Link to="/product-template">
                                          Verse earphones
                                        </Link>
                                      </h6>
                                    </div>
                                    <div className="product-price">
                                      <div className="pro-price-box">
                                        <span className="new-price">
                                          $08.00
                                        </span>
                                        <span className="old-price">
                                          $10.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="product-description">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                    <div className="product-action">
                                      <Link
                                        to="#quickview"
                                        className="quickview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickview"
                                      >
                                        <span className="tooltip-text">
                                          Quickview
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-eye"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="#add-to-cart"
                                        className="add-to-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-to-cart"
                                      >
                                        <span className="tooltip-text">
                                          Add to cart
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-shopping-bag"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="wishlist-product.html"
                                        className="wishlist"
                                      >
                                        <span className="tooltip-text">
                                          Wishlist
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-heart"></i>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="pro-label-retting">
                                    <div className="product-ratting">
                                      <span className="pro-ratting">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </span>
                                    </div>
                                    <div className="product-label pro-new-sale">
                                      <span className="product-label-title">
                                        Sale<span>20%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image banner-hover">
                                  <Link
                                    to="product-template.html"
                                    className="pro-img"
                                  >
                                    <img
                                      src="/img/product/home1-pro-11.jpg"
                                      className="img-fluid img1 mobile-img1"
                                      alt="p1"
                                    />
                                    <img
                                      src="/img/product/home1-pro-12.jpg"
                                      className="img-fluid img2 mobile-img2"
                                      alt="p2"
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      to="#quickview"
                                      className="quickview"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                    >
                                      <span className="tooltip-text">
                                        Quickview
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-eye"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="#add-to-cart"
                                      className="add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                    >
                                      <span className="tooltip-text">
                                        Add to cart
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-shopping-bag"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="/wishlist-product"
                                      className="wishlist"
                                    >
                                      <span className="tooltip-text">
                                        Wishlist
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-heart"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="product-caption">
                                  <div className="product-content">
                                    <div className="product-sub-title">
                                      <span>Rotation camera</span>
                                    </div>
                                    <div className="product-title">
                                      <h6>
                                        <Link to="/product">
                                          Wifro camera
                                        </Link>
                                      </h6>
                                    </div>
                                    <div className="product-price">
                                      <div className="pro-price-box">
                                        <span className="new-price">
                                          $32.00
                                        </span>
                                        <span className="old-price">
                                          $39.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="product-description">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                    <div className="product-action">
                                      <Link
                                        to="#quickview"
                                        className="quickview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickview"
                                      >
                                        <span className="tooltip-text">
                                          Quickview
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-eye"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="#add-to-cart"
                                        className="add-to-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-to-cart"
                                      >
                                        <span className="tooltip-text">
                                          Add to cart
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-shopping-bag"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="/wishlist-product"
                                        className="wishlist"
                                      >
                                        <span className="tooltip-text">
                                          Wishlist
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-heart"></i>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="pro-label-retting">
                                    <div className="product-ratting">
                                      <span className="pro-ratting">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </span>
                                    </div>
                                    <div className="product-label pro-new-sale">
                                      <span className="product-label-title">
                                        Sale<span>14%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image banner-hover">
                                  <Link
                                    to="product-template.html"
                                    className="pro-img"
                                  >
                                    <img
                                      src="/img/product/home1-pro-13.jpg"
                                      className="img-fluid img1 mobile-img1"
                                      alt="p1"
                                    />
                                    <img
                                      src="/img/product/home1-pro-14.jpg"
                                      className="img-fluid img2 mobile-img2"
                                      alt="p2"
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      to="#quickview"
                                      className="quickview"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                    >
                                      <span className="tooltip-text">
                                        Quickview
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-eye"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="#add-to-cart"
                                      className="add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                    >
                                      <span className="tooltip-text">
                                        Add to cart
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-shopping-bag"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="/wishlist-product"
                                      className="wishlist"
                                    >
                                      <span className="tooltip-text">
                                        Wishlist
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-heart"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="product-caption">
                                  <div className="product-content">
                                    <div className="product-sub-title">
                                      <span>Wireless device</span>
                                    </div>
                                    <div className="product-title">
                                      <h6>
                                        <Link to="/product">
                                          Bluetooth earbuds
                                        </Link>
                                      </h6>
                                    </div>
                                    <div className="product-price">
                                      <div className="pro-price-box">
                                        <span className="new-price">
                                          $55.00
                                        </span>
                                        <span className="old-price">
                                          $58.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="product-description">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                    <div className="product-action">
                                      <Link
                                        to="#quickview"
                                        className="quickview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickview"
                                      >
                                        <span className="tooltip-text">
                                          Quickview
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-eye"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="#add-to-cart"
                                        className="add-to-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-to-cart"
                                      >
                                        <span className="tooltip-text">
                                          Add to cart
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-shopping-bag"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="/wishlist-product"
                                        className="wishlist"
                                      >
                                        <span className="tooltip-text">
                                          Wishlist
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-heart"></i>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="pro-label-retting">
                                    <div className="product-ratting">
                                      <span className="pro-ratting">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </span>
                                    </div>
                                    <div className="product-label pro-new-sale">
                                      <span className="product-label-title">
                                        Sale<span>30%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image banner-hover">
                                  <Link
                                    to="/product"
                                    className="pro-img"
                                  >
                                    <img
                                      src="/img/product/home1-pro-15.jpg"
                                      className="img-fluid img1 mobile-img1"
                                      alt="p1"
                                    />
                                    <img
                                      src="/img/product/home1-pro-16.jpg"
                                      className="img-fluid img2 mobile-img2"
                                      alt="p2"
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      to="#quickview"
                                      className="quickview"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                    >
                                      <span className="tooltip-text">
                                        Quickview
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-eye"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="#add-to-cart"
                                      className="add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                    >
                                      <span className="tooltip-text">
                                        Add to cart
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-shopping-bag"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="/wishlist-product"
                                      className="wishlist"
                                    >
                                      <span className="tooltip-text">
                                        Wishlist
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-heart"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="product-caption">
                                  <div className="product-content">
                                    <div className="product-sub-title">
                                      <span>Live program</span>
                                    </div>
                                    <div className="product-title">
                                      <h6>
                                        <Link to="/product">
                                          Projector leptop
                                        </Link>
                                      </h6>
                                    </div>
                                    <div className="product-price">
                                      <div className="pro-price-box">
                                        <span className="new-price">
                                          $18.00
                                        </span>
                                        <span className="old-price">
                                          $24.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="product-description">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                    <div className="product-action">
                                      <Link
                                        to="#quickview"
                                        className="quickview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickview"
                                      >
                                        <span className="tooltip-text">
                                          Quickview
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-eye"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="#add-to-cart"
                                        className="add-to-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-to-cart"
                                      >
                                        <span className="tooltip-text">
                                          Add to cart
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-shopping-bag"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="/wishlist-product"
                                        className="wishlist"
                                      >
                                        <span className="tooltip-text">
                                          Wishlist
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-heart"></i>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="pro-label-retting">
                                    <div className="product-ratting">
                                      <span className="pro-ratting">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </span>
                                    </div>
                                    <div className="product-label pro-new-sale">
                                      <span className="product-label-title">
                                        Sale<span>14%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image banner-hover">
                                  <Link
                                    to="/product"
                                    className="pro-img"
                                  >
                                    <img
                                      src="/img/product/home1-pro-17.jpg"
                                      className="img-fluid img1 mobile-img1"
                                      alt="p1"
                                    />
                                    <img
                                      src="/img/product/home1-pro-18.jpg"
                                      className="img-fluid img2 mobile-img2"
                                      alt="p2"
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      to="#quickview"
                                      className="quickview"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                    >
                                      <span className="tooltip-text">
                                        Quickview
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-eye"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="#add-to-cart"
                                      className="add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                    >
                                      <span className="tooltip-text">
                                        Add to cart
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-shopping-bag"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="/wishlist-product"
                                      className="wishlist"
                                    >
                                      <span className="tooltip-text">
                                        Wishlist
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-heart"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="product-caption">
                                  <div className="product-content">
                                    <div className="product-sub-title">
                                      <span>Double door</span>
                                    </div>
                                    <div className="product-title">
                                      <h6>
                                        <Link to="/product-template">
                                          Refrigerator
                                        </Link>
                                      </h6>
                                    </div>
                                    <div className="product-price">
                                      <div className="pro-price-box">
                                        <span className="new-price">
                                          $18.00
                                        </span>
                                        <span className="old-price">
                                          $24.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="product-description">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                    <div className="product-action">
                                      <Link
                                        to="#quickview"
                                        className="quickview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickview"
                                      >
                                        <span className="tooltip-text">
                                          Quickview
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-eye"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="#add-to-cart"
                                        className="add-to-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-to-cart"
                                      >
                                        <span className="tooltip-text">
                                          Add to cart
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-shopping-bag"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="/wishlist-product"
                                        className="wishlist"
                                      >
                                        <span className="tooltip-text">
                                          Wishlist
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-heart"></i>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="pro-label-retting">
                                    <div className="product-ratting">
                                      <span className="pro-ratting">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </span>
                                    </div>
                                    <div className="product-label pro-new-sale">
                                      <span className="product-label-title">
                                        Sale<span>14%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image banner-hover">
                                  <Link
                                    to="/product-template"
                                    className="pro-img"
                                  >
                                    <img
                                      src="/img/product/home1-pro-19.jpg"
                                      className="img-fluid img1 mobile-img1"
                                      alt="p1"
                                    />
                                    <img
                                      src="/img/product/home1-pro-20.jpg"
                                      className="img-fluid img2 mobile-img2"
                                      alt="p2"
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      to="#quickview"
                                      className="quickview"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                    >
                                      <span className="tooltip-text">
                                        Quickview
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-eye"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="#add-to-cart"
                                      className="add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                    >
                                      <span className="tooltip-text">
                                        Add to cart
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-shopping-bag"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="/wishlist-product"
                                      className="wishlist"
                                    >
                                      <span className="tooltip-text">
                                        Wishlist
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-heart"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="product-caption">
                                  <div className="product-content">
                                    <div className="product-sub-title">
                                      <span>New system</span>
                                    </div>
                                    <div className="product-title">
                                      <h6>
                                        <Link to="/product">
                                          New system
                                        </Link>
                                      </h6>
                                    </div>
                                    <div className="product-price">
                                      <div className="pro-price-box">
                                        <span className="new-price">
                                          $10.00
                                        </span>
                                        <span className="old-price">
                                          $15.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="product-description">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                    <div className="product-action">
                                      <Link
                                        to="#quickview"
                                        className="quickview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickview"
                                      >
                                        <span className="tooltip-text">
                                          Quickview
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-eye"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="#add-to-cart"
                                        className="add-to-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-to-cart"
                                      >
                                        <span className="tooltip-text">
                                          Add to cart
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-shopping-bag"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="/wishlist-product"
                                        className="wishlist"
                                      >
                                        <span className="tooltip-text">
                                          Wishlist
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-heart"></i>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="pro-label-retting">
                                    <div className="product-ratting">
                                      <span className="pro-ratting">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </span>
                                    </div>
                                    <div className="product-label pro-new-sale">
                                      <span className="product-label-title">
                                        Sale<span>22%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image banner-hover">
                                  <Link
                                    to="product-template.html"
                                    className="pro-img"
                                  >
                                    <img
                                      src="/img/product/home1-pro-21.jpg"
                                      className="img-fluid img1 mobile-img1"
                                      alt="p1"
                                    />
                                    <img
                                      src="/img/product/home1-pro-22.jpg"
                                      className="img-fluid img2 mobile-img2"
                                      alt="p2"
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      to="#quickview"
                                      className="quickview"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                    >
                                      <span className="tooltip-text">
                                        Quickview
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-eye"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="#add-to-cart"
                                      className="add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                    >
                                      <span className="tooltip-text">
                                        Add to cart
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-shopping-bag"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="/wishlist-product"
                                      className="wishlist"
                                    >
                                      <span className="tooltip-text">
                                        Wishlist
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-heart"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="product-caption">
                                  <div className="product-content">
                                    <div className="product-sub-title">
                                      <span>Avone machine</span>
                                    </div>
                                    <div className="product-title">
                                      <h6>
                                        <Link to="/product">
                                          Avone machine
                                        </Link>
                                      </h6>
                                    </div>
                                    <div className="product-price">
                                      <div className="pro-price-box">
                                        <span className="new-price">
                                          $32.00
                                        </span>
                                        <span className="old-price">
                                          $38.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="product-description">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                    <div className="product-action">
                                      <Link
                                        to="#quickview"
                                        className="quickview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickview"
                                      >
                                        <span className="tooltip-text">
                                          Quickview
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-eye"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="#add-to-cart"
                                        className="add-to-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-to-cart"
                                      >
                                        <span className="tooltip-text">
                                          Add to cart
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-shopping-bag"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="/wishlist-product"
                                        className="wishlist"
                                      >
                                        <span className="tooltip-text">
                                          Wishlist
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-heart"></i>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="pro-label-retting">
                                    <div className="product-ratting">
                                      <span className="pro-ratting">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </span>
                                    </div>
                                    <div className="product-label pro-new-sale">
                                      <span className="product-label-title">
                                        Sale<span>30%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image banner-hover">
                                  <Link
                                    to="/product"
                                    className="pro-img"
                                  >
                                    <img
                                      src="/img/product/home1-pro-23.jpg"
                                      className="img-fluid img1 mobile-img1"
                                      alt="p1"
                                    />
                                    <img
                                      src="/img/product/home1-pro-24.jpg"
                                      className="img-fluid img2 mobile-img2"
                                      alt="p2"
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      to="#quickview"
                                      className="quickview"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                    >
                                      <span className="tooltip-text">
                                        Quickview
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-eye"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="#add-to-cart"
                                      className="add-to-cart"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-to-cart"
                                    >
                                      <span className="tooltip-text">
                                        Add to cart
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-shopping-bag"></i>
                                      </span>
                                    </Link>
                                    <Link
                                      to="/wishlist-product"
                                      className="wishlist"
                                    >
                                      <span className="tooltip-text">
                                        Wishlist
                                      </span>
                                      <span className="pro-action-icon">
                                        <i className="feather-heart"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="product-caption">
                                  <div className="product-content">
                                    <div className="product-sub-title">
                                      <span>Fancy design</span>
                                    </div>
                                    <div className="product-title">
                                      <h6>
                                        <Link to="/product">
                                          Mobile cover
                                        </Link>
                                      </h6>
                                    </div>
                                    <div className="product-price">
                                      <div className="pro-price-box">
                                        <span className="new-price">
                                          $44.00
                                        </span>
                                        <span className="old-price">
                                          $48.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="product-description">
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                      </p>
                                    </div>
                                    <div className="product-action">
                                      <Link
                                        to="#quickview"
                                        className="quickview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickview"
                                      >
                                        <span className="tooltip-text">
                                          Quickview
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-eye"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="#add-to-cart"
                                        className="add-to-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-to-cart"
                                      >
                                        <span className="tooltip-text">
                                          Add to cart
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-shopping-bag"></i>
                                        </span>
                                      </Link>
                                      <Link
                                        to="/wishlist-product"
                                        className="wishlist"
                                      >
                                        <span className="tooltip-text">
                                          Wishlist
                                        </span>
                                        <span className="pro-action-icon">
                                          <i className="feather-heart"></i>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="pro-label-retting">
                                    <div className="product-ratting">
                                      <span className="pro-ratting">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </span>
                                    </div>
                                    <div className="product-label pro-new-sale">
                                      <span className="product-label-title">
                                        Sale<span>22%</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="paginatoin-area">
                          <ul className="pagination-page-box">
                            <li className="number active">
                              <Link to="#" className="theme-glink">
                                1
                              </Link>
                            </li>
                            <li className="number">
                              <Link to="#" className="gradient-text">
                                2
                              </Link>
                            </li>
                            <li className="page-next">
                              <Link to="#" className="theme-glink">
                                <i className="fa -solid fa-angle-right"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Latest-product end --> */}
              </div>
              <div className="pro-grli-wrap product-sidebar">
                <div className="pro-grid-block">
                  <div className="shop-sidebar-inner">
                    <div className="shop-sidebar-wrap filter-sidebar">
                      {/* <!-- button start --> */}
                      <button className="close-sidebar" type="button">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                      {/* <!-- button end --> */}
                      {/* <!-- filter-form start --> */}
                      <div className="facets">
                        <form className="facets-form">
                          <div className="facets-wrapper">
                            {/* <!-- Product-Categories start --> */}
                            <div className="shop-sidebar">
                              <h6 className="shop-title">Categories</h6>
                              <Link
                                to="#collapse-5"
                                data-bs-toggle="collapse"
                                className="shop-title shop-title-lg"
                              >
                                Categories<i className="fa fa-angle-down"></i>
                              </Link>
                              <div
                                className="collapse show shop-element"
                                id="collapse-5"
                              >
                                <ul className="brand-ul scrollbar">
                                  <li className="cat-checkbox">
                                    <label className="checkbox-label">
                                      <input
                                        type="checkbox"
                                        className="cust-checkbox"
                                      />
                                      <span className="check-name">
                                        Bluetooth
                                      </span>
                                      <span className="count-check">(12)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                  <li className="cat-checkbox">
                                    <label className="checkbox-label">
                                      <input
                                        type="checkbox"
                                        className="cust-checkbox"
                                      />
                                      <span className="check-name">
                                        Earphones
                                      </span>
                                      <span className="count-check">(12)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                  <li className="cat-checkbox">
                                    <label className="checkbox-label 64gb">
                                      <input
                                        type="checkbox"
                                        value="64gb"
                                        className="cust-checkbox"
                                      />
                                      <span className="check-name">
                                        Headphones
                                      </span>
                                      <span className="count-check">(12)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                  <li className="cat-checkbox">
                                    <label className="checkbox-label 500gb">
                                      <input
                                        type="checkbox"
                                        value="500gb"
                                        className="cust-checkbox"
                                      />
                                      <span className="check-name">
                                        Collection
                                      </span>
                                      <span className="count-check">(12)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                  <li className="cat-checkbox">
                                    <label className="checkbox-label 1tb">
                                      <input
                                        type="checkbox"
                                        value="1tb"
                                        className="cust-checkbox"
                                      />
                                      <span className="check-name">
                                        Collection left
                                      </span>
                                      <span className="count-check">(12)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                  <li className="cat-checkbox">
                                    <label className="checkbox-label 2tb">
                                      <input
                                        type="checkbox"
                                        value="2tb"
                                        className="cust-checkbox"
                                      />
                                      <span className="check-name">
                                        Collection list
                                      </span>
                                      <span className="count-check">(12)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                  <li className="cat-checkbox">
                                    <label className="checkbox-label 3tb">
                                      <input
                                        type="checkbox"
                                        value="3tb"
                                        className="cust-checkbox"
                                      />
                                      <span className="check-name">
                                        Collection list left
                                      </span>
                                      <span className="count-check">(12)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                  <li className="cat-checkbox">
                                    <label className="checkbox-label 3tb">
                                      <input
                                        type="checkbox"
                                        value="3tb"
                                        className="cust-checkbox"
                                      />
                                      <span className="check-name">
                                        Collection right
                                      </span>
                                      <span className="count-check">(12)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                  <li className="cat-checkbox">
                                    <label className="checkbox-label 3tb">
                                      <input
                                        type="checkbox"
                                        value="3tb"
                                        className="cust-checkbox"
                                      />
                                      <span className="check-name">
                                        Speaker
                                      </span>
                                      <span className="count-check">(12)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                  <li className="cat-checkbox">
                                    <label className="checkbox-label 3tb">
                                      <input
                                        type="checkbox"
                                        value="3tb"
                                        className="cust-checkbox"
                                      />
                                      <span className="check-name">
                                        360 cemera
                                      </span>
                                      <span className="count-check">(12)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                  <li className="cat-checkbox">
                                    <label className="checkbox-label 3tb">
                                      <input
                                        type="checkbox"
                                        value="3tb"
                                        className="cust-checkbox"
                                      />
                                      <span className="check-name">
                                        DVD player
                                      </span>
                                      <span className="count-check">(12)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                  <li className="cat-checkbox">
                                    <label className="checkbox-label 3tb">
                                      <input
                                        type="checkbox"
                                        value="3tb"
                                        className="cust-checkbox"
                                      />
                                      <span className="check-name">
                                        Air conditioner
                                      </span>
                                      <span className="count-check">(12)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* <!-- Product-Categories end --> */}
                            <div className="shop-sidebar sidebar-filter">
                              <h6 className="shop-title">Filter</h6>
                              <Link to="#" className="shop-title shop-title-lg">
                                Filter
                              </Link>
                              <div className="filter-info">
                                <span className="filter-count-text">
                                  23 products
                                </span>
                                <span className="loading-spinner">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    role="presentation"
                                    className="spinner"
                                    viewBox="0 0 66 66"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      className="path"
                                      fill="none"
                                      stroke-width="6"
                                      cx="33"
                                      cy="33"
                                      r="30"
                                    ></circle>
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className="shop-sidebar sidebar-price">
                              <h6 className="shop-title">Price</h6>
                              <Link
                                to="#collapse-3"
                                data-bs-toggle="collapse"
                                className="shop-title shop-title-lg"
                              >
                                Price
                              </Link>
                              <div className="filter-info">
                                <span className="shop-price">
                                  The highest price is $89.00
                                </span>
                                <facet-remove>
                                  <Link
                                    to="collection.html"
                                    className="reset-text"
                                  >
                                    Reset
                                  </Link>
                                </facet-remove>
                              </div>
                              {/* <!-- Product-price start --> */}
                              <div
                                className="collapse price-wrap"
                                id="collapse-3"
                              >
                                <price-range className="price-range">
                                  <div className="price-range-group group-range">
                                    <input
                                      type="range"
                                      className="range"
                                      min="0"
                                      max="89"
                                      value="0"
                                      id="range1"
                                    />
                                    <input
                                      type="range"
                                      className="range"
                                      min="0"
                                      max="89"
                                      value="89"
                                      id="range2"
                                    />
                                  </div>
                                  <div className="price-input-group group-input">
                                    <div className="price-range-input input-price">
                                      <label className="label-text">From</label>
                                      <span className="price-value">$</span>
                                      <span id="demo1" className="price-field">
                                        0
                                      </span>
                                    </div>
                                    <span className="price-range-delimeter">
                                      -
                                    </span>
                                    <div className="price-range-input input-price">
                                      <label className="label-text">To</label>
                                      <span className="price-value">$</span>
                                      <span id="demo2" className="price-field">
                                        89
                                      </span>
                                    </div>
                                  </div>
                                </price-range>
                              </div>
                              {/* <!-- Product-price end --> */}
                              {/* <!-- More-filters start --> */}
                              <div className="shop-sidebar sidebar-open">
                                <h6 className="shop-title">More filters</h6>
                                <Link
                                  to="#collapse-6"
                                  data-bs-toggle="collapse"
                                  className="shop-title shop-title-lg"
                                >
                                  More filters
                                  <i className="fa fa-angle-down"></i>
                                </Link>
                                <div className="filter-info">
                                  <span className="shop-price">0 selected</span>
                                  <facet-remove>
                                    <Link
                                      to="collection-list-right.html"
                                      className="reset-text"
                                    >
                                      Reset
                                    </Link>
                                  </facet-remove>
                                </div>
                                <div
                                  className="collapse shop-element shop-flavor"
                                  id="collapse-6"
                                >
                                  <ul className="brand-ul scrollbar">
                                    <li className="cat-checkbox">
                                      <label className="checkbox-label 16gb">
                                        <input
                                          type="checkbox"
                                          value="16gb"
                                          className="cust-checkbox"
                                        />
                                        <span className="check-name">
                                          Air conditioner
                                        </span>
                                        <span className="count-check">
                                          (12)
                                        </span>
                                        <span className="cust-check"></span>
                                      </label>
                                    </li>
                                    <li className="cat-checkbox">
                                      <label className="checkbox-label 32gb">
                                        <input
                                          type="checkbox"
                                          value="32gb"
                                          className="cust-checkbox"
                                        />
                                        <span className="check-name">
                                          Portable speaker
                                        </span>
                                        <span className="count-check">
                                          (12)
                                        </span>
                                        <span className="cust-check"></span>
                                      </label>
                                    </li>
                                    <li className="cat-checkbox">
                                      <label className="checkbox-label 64gb">
                                        <input
                                          type="checkbox"
                                          value="64gb"
                                          className="cust-checkbox"
                                        />
                                        <span className="check-name">
                                          Wireless earbuds
                                        </span>
                                        <span className="count-check">
                                          (12)
                                        </span>
                                        <span className="cust-check"></span>
                                      </label>
                                    </li>
                                    <li className="cat-checkbox">
                                      <label className="checkbox-label 500gb">
                                        <input
                                          type="checkbox"
                                          value="500gb"
                                          className="cust-checkbox"
                                        />
                                        <span className="check-name">
                                          Ev charging plug
                                        </span>
                                        <span className="count-check">
                                          (12)
                                        </span>
                                        <span className="cust-check"></span>
                                      </label>
                                    </li>
                                    <li className="cat-checkbox">
                                      <label className="checkbox-label 1tb">
                                        <input
                                          type="checkbox"
                                          value="1tb"
                                          className="cust-checkbox"
                                        />
                                        <span className="check-name">
                                          DVD player slot
                                        </span>
                                        <span className="count-check">
                                          (12)
                                        </span>
                                        <span className="cust-check"></span>
                                      </label>
                                    </li>
                                    <li className="cat-checkbox">
                                      <label className="checkbox-label 2tb">
                                        <input
                                          type="checkbox"
                                          value="2tb"
                                          className="cust-checkbox"
                                        />
                                        <span className="check-name">
                                          Verse earphones
                                        </span>
                                        <span className="count-check">
                                          (12)
                                        </span>
                                        <span className="cust-check"></span>
                                      </label>
                                    </li>
                                    <li className="cat-checkbox">
                                      <label className="checkbox-label 3tb">
                                        <input
                                          type="checkbox"
                                          value="3tb"
                                          className="cust-checkbox"
                                        />
                                        <span className="check-name">
                                          Video shoot drone
                                        </span>
                                        <span className="count-check">
                                          (12)
                                        </span>
                                        <span className="cust-check"></span>
                                      </label>
                                    </li>
                                    <li className="cat-checkbox">
                                      <label className="checkbox-label 3tb">
                                        <input
                                          type="checkbox"
                                          value="3tb"
                                          className="cust-checkbox"
                                        />
                                        <span className="check-name">
                                          Collection right
                                        </span>
                                        <span className="count-check">
                                          (12)
                                        </span>
                                        <span className="cust-check"></span>
                                      </label>
                                    </li>
                                    <li className="cat-checkbox">
                                      <label className="checkbox-label 3tb">
                                        <input
                                          type="checkbox"
                                          value="3tb"
                                          className="cust-checkbox"
                                        />
                                        <span className="check-name">
                                          Wifro wi-fi camera
                                        </span>
                                        <span className="count-check">
                                          (12)
                                        </span>
                                        <span className="cust-check"></span>
                                      </label>
                                    </li>
                                    <li className="cat-checkbox">
                                      <label className="checkbox-label 3tb">
                                        <input
                                          type="checkbox"
                                          value="3tb"
                                          className="cust-checkbox"
                                        />
                                        <span className="check-name">
                                          Movie projector S8
                                        </span>
                                        <span className="count-check">
                                          (12)
                                        </span>
                                        <span className="cust-check"></span>
                                      </label>
                                    </li>
                                    <li className="cat-checkbox">
                                      <label className="checkbox-label 3tb">
                                        <input
                                          type="checkbox"
                                          value="3tb"
                                          className="cust-checkbox"
                                        />
                                        <span className="check-name">
                                          Wireless headphones
                                        </span>
                                        <span className="count-check">
                                          (12)
                                        </span>
                                        <span className="cust-check"></span>
                                      </label>
                                    </li>
                                    <li className="cat-checkbox">
                                      <label className="checkbox-label 3tb">
                                        <input
                                          type="checkbox"
                                          value="3tb"
                                          className="cust-checkbox"
                                        />
                                        <span className="check-name">
                                          Stylish for trimmer
                                        </span>
                                        <span className="count-check">
                                          (12)
                                        </span>
                                        <span className="cust-check"></span>
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              {/* <!-- More-filters end --> */}
                            </div>
                            <div className="shop-sidebar sidebar-product">
                              <h6 className="shop-title">Product type</h6>
                              <Link
                                to="#collapse-2"
                                data-bs-toggle="collapse"
                                className="shop-title shop-title-lg"
                              >
                                Product type
                              </Link>
                              <div className="filter-info">
                                <span className="shop-price no-js-hidden">
                                  0 selected
                                </span>
                                <facet-remove>
                                  <Link
                                    to="collection.html"
                                    className="reset-text"
                                  >
                                    Reset
                                  </Link>
                                </facet-remove>
                              </div>
                              <div
                                className="collapse filter-element"
                                id="collapse-2"
                              >
                                <ul className="brand-ul scrollbar">
                                  <li className="brand-li">
                                    <label className="cust-checkbox-label">
                                      <input
                                        type="checkbox"
                                        name="cust-checkbox"
                                        className="cust-checkbox"
                                      />
                                      <span className="filter-name">
                                        Electon
                                      </span>
                                      <span className="count-check">(23)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="shop-sidebar sidebar-wedget">
                              <h6 className="shop-title">Availability</h6>
                              <Link
                                to="#collapse-1"
                                className="shop-title shop-title-lg"
                                data-bs-toggle="collapse"
                              >
                                Availability
                              </Link>
                              <div className="filter-info">
                                <span className="shop-price no-js-hidden">
                                  0 selected
                                </span>
                                <facet-remove>
                                  <Link
                                    to="collection.html"
                                    className="reset-text"
                                  >
                                    Reset
                                  </Link>
                                </facet-remove>
                              </div>
                              <div
                                className="collapse filter-element"
                                id="collapse-1"
                              >
                                <ul className="brnad-ul scrollbar">
                                  <li className="availability">
                                    <label className="cust-checkbox-label availability in-stock">
                                      <input
                                        type="checkbox"
                                        name="filter.v.availability"
                                        value="1"
                                        className="cust-checkbox"
                                      />
                                      <span className="filter-name">
                                        In stock
                                      </span>
                                      <span className="count-check">(23)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                  <li className="availability">
                                    <label className="cust-checkbox-label availability in-stock">
                                      <input
                                        type="checkbox"
                                        name="filter.v.availability"
                                        value="1"
                                        className="cust-checkbox"
                                      />
                                      <span className="filter-name">
                                        Out of stock
                                      </span>
                                      <span className="count-check">(1)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="shop-sidebar sidebar-wedget">
                              <h6 className="shop-title">Brand</h6>
                              <Link
                                to="#reset"
                                data-bs-toggle="collapse"
                                className="shop-title shop-title-lg"
                              >
                                Brand
                              </Link>
                              <div className="filter-info">
                                <span className="shop-price no-js-hidden">
                                  0 selected
                                </span>
                                <facet-remove>
                                  <Link
                                    to="collection.html"
                                    className="reset-text"
                                  >
                                    Reset
                                  </Link>
                                </facet-remove>
                              </div>
                              <div
                                className="collapse filter-element"
                                id="reset"
                              >
                                <ul className="brand-ul scrollbar">
                                  <li className="brand-li">
                                    <label className="cust-checkbox-label">
                                      <input
                                        type="checkbox"
                                        name="cust-checkbox"
                                        className="cust-checkbox"
                                      />
                                      <span className="filter-name">
                                        Electon
                                      </span>
                                      <span className="count-check">(23)</span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* <!-- filter-form end --> */}
                    </div>
                  </div>
                  {/* <!-- sidebar img start --> */}
                  <div className="sidebar-banner banner-hover">
                    <Link
                      to="collection.html"
                      className="sidebar-img banner-img"
                    >
                      <span className="sidebar-banner-image">
                        <img
                          src="/img/banner/side-banner.jpg"
                          className="img-fluid"
                          alt="side-banner"
                        />
                      </span>
                      <span className="sidebar-banner-icon">
                        <i className="bi bi-arrow-right-short"></i>
                      </span>
                    </Link>
                  </div>
                  {/* <!-- sidebar img start --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
