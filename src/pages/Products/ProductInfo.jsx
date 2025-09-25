import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import categoriesData from "../../category.js";
import prodactData from "../../products.js";

const ProductInfo = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [gridView, setGridView] = useState("3");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  useEffect(() => {
    setProducts(prodactData);
    setFilteredProducts(prodactData); // initially show all
  }, []);

  const handleGridChange = (view) => {
    setGridView(view);
  };

  // ✅ Handle Category Selection
  const handleCategoryChange = (categoryTitle) => {
    if (categoryTitle === "All") {
      setSelectedCategories([]);
      setFilteredProducts(products);
      return;
    }

    let updatedSelected;
    if (selectedCategories.includes(categoryTitle)) {
      updatedSelected = selectedCategories.filter((c) => c !== categoryTitle);
    } else {
      updatedSelected = [...selectedCategories, categoryTitle];
    }
    setSelectedCategories(updatedSelected);

    if (updatedSelected.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) =>
        updatedSelected.includes(p.category)
      );
      setFilteredProducts(filtered);
    }
  };

  // Open modal with body scroll handling
  const openModal = (modalId) => {
    const modalEl = document.getElementById(modalId);

    if (modalEl && window.bootstrap) {
      const modalInstance = window.bootstrap.Modal.getOrCreateInstance(
        modalEl,
        {
          backdrop: true,
          keyboard: true,
        }
      );

      // 🟢 Ensure modal is reset before showing again
      modalEl.style.display = "block";
      modalEl.removeAttribute("aria-hidden");
      modalEl.setAttribute("aria-modal", "true");
      modalEl.setAttribute("role", "dialog");

      modalInstance.show();
    }
  };

  return (
    <section className="main-content-wrap bg-color shop-page section-ptb">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="pro-grli-wrapper left-side-wrap">
              <div className="pro-grli-wrap product-grid">
                <div className="collection-img-wrap">
                  <h6 className="st-title">Collection left (23)</h6>

                  <div className="collection-info">
                    <div className="collection-image">
                      <img
                        src="/img/banner/sall-banner.jpg"
                        className="img-fluid"
                        alt="sall-banner"
                      />
                    </div>
                  </div>
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
                      className={`list-change-view grid-three ${
                        gridView === "3" ? "active" : ""
                      }`}
                      data-grid-view="3"
                      onClick={() => handleGridChange("3")}
                    >
                      <i className="fa-solid fa-border-all"></i>
                    </Link>
                    <Link
                      to="#"
                      data-grid-view="1"
                      className={`list-change-view list-one ${
                        gridView === "1" ? "active" : ""
                      }`}
                      onClick={() => handleGridChange("1")}
                    >
                      <i className="fa-solid fa-list"></i>
                    </Link>
                  </div>
                  {/* <!-- product-short start --> */}
                  <div className="product-short">
                    <label htmlFor="SortBy">Sort by:</label>
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
                </div>

                <div className={`special-product grid-${gridView}`}>
                  <div className="collection-category">
                    <div className="row">
                      <div className="col">
                        <div className="collection-wrap">
                          <ul className="product-view-ul">
                            {filteredProducts.length > 0 ? (
                              products.map((product) => {
                                return (
                                  <li
                                    key={product.id}
                                    className="pro-item-li coll-li"
                                  >
                                    <div className="single-product-wrap">
                                      <div className="product-image banner-hover">
                                        <Link
                                          to="/product-details"
                                          className="pro-img"
                                        >
                                          <img
                                            src={product.img1}
                                            className="img-fluid img1 mobile-img1"
                                            alt="p1"
                                          />
                                          <img
                                            src={product.img2}
                                            className="img-fluid img2 mobile-img2"
                                            alt="p2"
                                          />
                                        </Link>
                                        <div className="product-action">
                                          <Link
                                            className="quickview"
                                            onClick={() =>
                                              openModal("quickview")
                                            }
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
                                            // data-bs-toggle="modal"
                                            // data-bs-target="#add-to-cart"
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
                                            <span>{product.subtitle}</span>
                                          </div>
                                          <div className="product-title">
                                            <h6>
                                              <Link to="/product-details">
                                                {product.title}
                                              </Link>
                                            </h6>
                                          </div>
                                          <div className="product-price">
                                            <div className="pro-price-box">
                                              <span className="new-price">
                                                {product.newPrice}
                                              </span>
                                              <span className="old-price">
                                                {product.oldPrice}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="product-description">
                                            <p>{product.description}</p>
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
                                              {Array.from({
                                                length: product.rating,
                                              }).map((_, i) => (
                                                <i
                                                  key={i}
                                                  className="fa-solid fa-star"
                                                ></i>
                                              ))}
                                            </span>
                                          </div>
                                          <div className="product-label pro-new-sale">
                                            <span className="product-label-title">
                                              Sale<span>{product.sale}</span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                );
                              })
                            ) : (
                              <p>No products found.</p>
                            )}
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
              </div>

              <div className="pro-grli-wrap product-sidebar">
                <div className="pro-grid-block">
                  <div className="shop-sidebar-inner">
                    <div className="shop-sidebar-wrap filter-sidebar">
                      {/* <!-- button start --> */}
                      <button className="close-sidebar" type="button">
                        <i className="fa-solid fa-xmark"></i>
                      </button>

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
                                        checked={
                                          selectedCategories.length === 0
                                        }
                                        onChange={() =>
                                          handleCategoryChange("All")
                                        }
                                      />
                                      <span className="check-name">All</span>
                                      {/* <span className="count-check">(142)</span> */}
                                      <span className="count-check">
                                        ({products.length})
                                      </span>
                                      <span className="cust-check"></span>
                                    </label>
                                  </li>

                                  {categories.map((category) => {
                                    return (
                                      <li
                                        key={category.id}
                                        className="cat-checkbox"
                                      >
                                        <label className="checkbox-label">
                                          <input
                                            type="checkbox"
                                            className="cust-checkbox"
                                            checked={selectedCategories.includes(
                                              category.title
                                            )}
                                            onChange={() =>
                                              handleCategoryChange(
                                                category.title
                                              )
                                            }
                                          />
                                          <span className="check-name">
                                            {category.title}
                                          </span>
                                          <span className="count-check">
                                            ({category.count})
                                          </span>
                                          <span className="cust-check"></span>
                                        </label>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>

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
                                      strokeWidth="6"
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
                                  <Link to="/product" className="reset-text">
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
                                      defaultValue="0"
                                      id="range1"
                                    />
                                    <input
                                      type="range"
                                      className="range"
                                      min="0"
                                      max="89"
                                      defaultValue="89"
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
                                    <Link to="/product" className="reset-text">
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
                                  <Link to="/product" className="reset-text">
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
                                  <Link to="/product" className="reset-text">
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
                                  <Link to="/product" className="reset-text">
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
                    </div>
                  </div>
                  {/* <!-- sidebar img start --> */}
                  <div className="sidebar-banner banner-hover">
                    <Link to="/product" className="sidebar-img banner-img">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
