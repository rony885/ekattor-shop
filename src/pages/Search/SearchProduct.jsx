import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import prodactData from "../../products.js";

const SearchProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(prodactData);
  }, []);

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
                    <span className="breadcrumb-text">Link</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="search-page bg-color section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-capture">
                <div className="section-title">
                  <h2>
                    <span>Your search for "Link" revealed the following:</span>
                  </h2>
                </div>
              </div>
              <div className="saerch-input">
                <form>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search our store"
                  />
                  <Link to="/search" className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Link>
                </form>
              </div>
              {/* <!-- special-product start --> */}
              <div className="special-product grid-3">
                <div className="collection-category">
                  <div className="row">
                    <div className="col">
                      <div className="collection-wrap">
                        <ul className="product-view-ul">
                          {products.map((product) => (
                            <li key={product.id} className="pro-item-li">
                              <div className="single-product-wrap">
                                <div className="product-image">
                                  <Link
                                    to="/product-details"
                                    className="pro-img"
                                  >
                                    <img
                                      src={product.img1}
                                      className="img-fluid img1 mobile-img1"
                                      alt={product.title}
                                    />
                                    <img
                                      src={product.img2}
                                      className="img-fluid img2 mobile-img2"
                                      alt={product.title}
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <Link
                                      className="quickview"
                                      onClick={() => openModal("quickview")}
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
                                </div>
                                <div className="pro-label-retting">
                                  <div className="product-ratting">
                                    {Array.from({ length: product.rating }).map(
                                      (_, i) => (
                                        <i
                                          key={i}
                                          className="fa-solid fa-star"
                                        ></i>
                                      )
                                    )}
                                  </div>
                                  <div className="product-label pro-new-sale">
                                    <span className="product-label-title">
                                      Sale<span>{product.sale}</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
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
              {/* <!-- special-product end --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchProduct;
