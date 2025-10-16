// import React from "react";

// const Products = () => {
//   return (
//     <section className="Trending-product bg-color section-ptb">
//       <div className="collection-category">
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               <div className="section-capture">
//                 <div className="section-title">
//                   <span className="sub-title" data-animate="animate__fadeInUp">
//                     Browse collection
//                   </span>
//                   <h2>
//                     <span data-animate="animate__fadeInUp">
//                       Trending product
//                     </span>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               <div className="collection-wrap">
//                 <div className="collection-slider swiper" id="Trending-product">
//                   <div className="swiper-wrapper">
//                     <div
//                       className="swiper-slide"
//                       data-animate="animate__fadeInUp"
//                     >
//                       <div className="single-product-wrap">
//                         <div className="product-image">
//                           <a href="product-template.html" className="pro-img">
//                             <img
//                               src="img/product/home1-pro-1.jpg"
//                               className="img-fluid img1 mobile-img1"
//                               alt="p1"
//                             />
//                             <img
//                               src="img/product/home1-pro-2.jpg"
//                               className="img-fluid img2 mobile-img2"
//                               alt="p2"
//                             />
//                           </a>
//                           <div className="product-action">
//                             <a
//                               href="#quickview"
//                               className="quickview"
//                               data-bs-toggle="modal"
//                               data-bs-target="#quickview"
//                             >
//                               <span className="tooltip-text">Quickview</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-eye"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="#add-to-cart"
//                               className="add-to-cart"
//                               data-bs-toggle="modal"
//                               data-bs-target="#add-to-cart"
//                             >
//                               <span className="tooltip-text">Add to cart</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-shopping-bag"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="wishlist-product.html"
//                               className="wishlist"
//                             >
//                               <span className="tooltip-text">Wishlist</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-heart"></i>
//                               </span>
//                             </a>
//                           </div>
//                         </div>
//                         <div className="product-content">
//                           <div className="product-sub-title">
//                             <span>Wireless device</span>
//                           </div>
//                           <div className="product-title">
//                             <h6>
//                               <a href="product-template.html">
//                                 Wireless headphones
//                               </a>
//                             </h6>
//                           </div>
//                           <div className="product-price">
//                             <div className="pro-price-box">
//                               <span className="new-price">$21.00</span>
//                               <span className="old-price">$25.00</span>
//                             </div>
//                           </div>
//                           <div className="product-description">
//                             <p>
//                               Lorem Ipsum is simply dummy text of the printing
//                               and typesetting industry. Lorem Ipsum has been the
//                               industry's standard dummy text ever since the
//                               1500s.
//                             </p>
//                           </div>
//                           <div className="product-action">
//                             <a
//                               href="#quickview"
//                               className="quickview"
//                               data-bs-toggle="modal"
//                               data-bs-target="#quickview"
//                             >
//                               <span className="tooltip-text">Quickview</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-eye"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="#add-to-cart"
//                               className="add-to-cart"
//                               data-bs-toggle="modal"
//                               data-bs-target="#add-to-cart"
//                             >
//                               <span className="tooltip-text">Add to cart</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-shopping-bag"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="wishlist-product.html"
//                               className="wishlist"
//                             >
//                               <span className="tooltip-text">Wishlist</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-heart"></i>
//                               </span>
//                             </a>
//                           </div>
//                         </div>
//                         <div className="pro-label-retting">
//                           <div className="product-ratting">
//                             <span className="pro-ratting">
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                             </span>
//                           </div>
//                           <div className="product-label pro-new-sale">
//                             <span className="product-label-title">
//                               Sale<span>20%</span>
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       className="swiper-slide"
//                       data-animate="animate__fadeInUp"
//                     >
//                       <div className="single-product-wrap">
//                         <div className="product-image">
//                           <a href="product-template.html" className="pro-img">
//                             <img
//                               src="img/product/home1-pro-3.jpg"
//                               className="img-fluid img1 mobile-img1"
//                               alt="p1"
//                             />
//                             <img
//                               src="img/product/home1-pro-4.jpg"
//                               className="img-fluid img2 mobile-img2"
//                               alt="p2"
//                             />
//                           </a>
//                           <div className="product-action">
//                             <a
//                               href="#quickview"
//                               className="quickview"
//                               data-bs-toggle="modal"
//                               data-bs-target="#quickview"
//                             >
//                               <span className="tooltip-text">Quickview</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-eye"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="#add-to-cart"
//                               className="add-to-cart"
//                               data-bs-toggle="modal"
//                               data-bs-target="#add-to-cart"
//                             >
//                               <span className="tooltip-text">Add to cart</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-shopping-bag"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="wishlist-product.html"
//                               className="wishlist"
//                             >
//                               <span className="tooltip-text">Wishlist</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-heart"></i>
//                               </span>
//                             </a>
//                           </div>
//                         </div>
//                         <div className="product-content">
//                           <div className="product-sub-title">
//                             <span>Waterproof</span>
//                           </div>
//                           <div className="product-title">
//                             <h6>
//                               <a href="product-template.html">Wireless mouse</a>
//                             </h6>
//                           </div>
//                           <div className="product-price">
//                             <div className="pro-price-box">
//                               <span className="new-price">$18.00</span>
//                               <span className="old-price">$24.00</span>
//                             </div>
//                           </div>
//                           <div className="product-description">
//                             <p>
//                               Lorem Ipsum is simply dummy text of the printing
//                               and typesetting industry. Lorem Ipsum has been the
//                               industry's standard dummy text ever since the
//                               1500s.
//                             </p>
//                           </div>
//                           <div className="product-action">
//                             <a
//                               href="#quickview"
//                               className="quickview"
//                               data-bs-toggle="modal"
//                               data-bs-target="#quickview"
//                             >
//                               <span className="tooltip-text">Quickview</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-eye"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="#add-to-cart"
//                               className="add-to-cart"
//                               data-bs-toggle="modal"
//                               data-bs-target="#add-to-cart"
//                             >
//                               <span className="tooltip-text">Add to cart</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-shopping-bag"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="wishlist-product.html"
//                               className="wishlist"
//                             >
//                               <span className="tooltip-text">Wishlist</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-heart"></i>
//                               </span>
//                             </a>
//                           </div>
//                         </div>
//                         <div className="pro-label-retting">
//                           <div className="product-ratting">
//                             <span className="pro-ratting">
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                             </span>
//                           </div>
//                           <div className="product-label pro-new-sale">
//                             <span className="product-label-title">
//                               Sale<span>14%</span>
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       className="swiper-slide"
//                       data-animate="animate__fadeInUp"
//                     >
//                       <div className="single-product-wrap">
//                         <div className="product-image">
//                           <a href="product-template.html" className="pro-img">
//                             <img
//                               src="img/product/home1-pro-5.jpg"
//                               className="img-fluid img1 mobile-img1"
//                               alt="p1"
//                             />
//                             <img
//                               src="img/product/home1-pro-6.jpg"
//                               className="img-fluid img2 mobile-img2"
//                               alt="p2"
//                             />
//                           </a>
//                           <div className="product-action">
//                             <a
//                               href="#quickview"
//                               className="quickview"
//                               data-bs-toggle="modal"
//                               data-bs-target="#quickview"
//                             >
//                               <span className="tooltip-text">Quickview</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-eye"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="#add-to-cart"
//                               className="add-to-cart"
//                               data-bs-toggle="modal"
//                               data-bs-target="#add-to-cart"
//                             >
//                               <span className="tooltip-text">Add to cart</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-shopping-bag"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="wishlist-product.html"
//                               className="wishlist"
//                             >
//                               <span className="tooltip-text">Wishlist</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-heart"></i>
//                               </span>
//                             </a>
//                           </div>
//                         </div>
//                         <div className="product-content">
//                           <div className="product-sub-title">
//                             <span>Live program</span>
//                           </div>
//                           <div className="product-title">
//                             <h6>
//                               <a href="product-template.html">Pen drivess</a>
//                             </h6>
//                           </div>
//                           <div className="product-price">
//                             <div className="pro-price-box">
//                               <span className="new-price">$10.00</span>
//                               <span className="old-price">$15.00</span>
//                             </div>
//                           </div>
//                           <div className="product-description">
//                             <p>
//                               Lorem Ipsum is simply dummy text of the printing
//                               and typesetting industry. Lorem Ipsum has been the
//                               industry's standard dummy text ever since the
//                               1500s.
//                             </p>
//                           </div>
//                           <div className="product-action">
//                             <a
//                               href="#quickview"
//                               className="quickview"
//                               data-bs-toggle="modal"
//                               data-bs-target="#quickview"
//                             >
//                               <span className="tooltip-text">Quickview</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-eye"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="#add-to-cart"
//                               className="add-to-cart"
//                               data-bs-toggle="modal"
//                               data-bs-target="#add-to-cart"
//                             >
//                               <span className="tooltip-text">Add to cart</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-shopping-bag"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="wishlist-product.html"
//                               className="wishlist"
//                             >
//                               <span className="tooltip-text">Wishlist</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-heart"></i>
//                               </span>
//                             </a>
//                           </div>
//                         </div>
//                         <div className="pro-label-retting">
//                           <div className="product-ratting">
//                             <span className="pro-ratting">
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                             </span>
//                           </div>
//                           <div className="product-label pro-new-sale">
//                             <span className="product-label-title">
//                               Sale<span>22%</span>
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       className="swiper-slide"
//                       data-animate="animate__fadeInUp"
//                     >
//                       <div className="single-product-wrap">
//                         <div className="product-image">
//                           <a href="product-template.html" className="pro-img">
//                             <img
//                               src="img/product/home1-pro-7.jpg"
//                               className="img-fluid img1 mobile-img1"
//                               alt="p1"
//                             />
//                             <img
//                               src="img/product/home1-pro-8.jpg"
//                               className="img-fluid img2 mobile-img2"
//                               alt="p2"
//                             />
//                           </a>
//                           <div className="product-action">
//                             <a
//                               href="#quickview"
//                               className="quickview"
//                               data-bs-toggle="modal"
//                               data-bs-target="#quickview"
//                             >
//                               <span className="tooltip-text">Quickview</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-eye"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="#add-to-cart"
//                               className="add-to-cart"
//                               data-bs-toggle="modal"
//                               data-bs-target="#add-to-cart"
//                             >
//                               <span className="tooltip-text">Add to cart</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-shopping-bag"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="wishlist-product.html"
//                               className="wishlist"
//                             >
//                               <span className="tooltip-text">Wishlist</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-heart"></i>
//                               </span>
//                             </a>
//                           </div>
//                         </div>
//                         <div className="product-content">
//                           <div className="product-sub-title">
//                             <span>Waterproof watch</span>
//                           </div>
//                           <div className="product-title">
//                             <h6>
//                               <a href="product-template.html">Smart watch</a>
//                             </h6>
//                           </div>
//                           <div className="product-price">
//                             <div className="pro-price-box">
//                               <span className="new-price">$32.00</span>
//                               <span className="old-price">$38.00</span>
//                             </div>
//                           </div>
//                           <div className="product-description">
//                             <p>
//                               Lorem Ipsum is simply dummy text of the printing
//                               and typesetting industry. Lorem Ipsum has been the
//                               industry's standard dummy text ever since the
//                               1500s.
//                             </p>
//                           </div>
//                           <div className="product-action">
//                             <a
//                               href="#quickview"
//                               className="quickview"
//                               data-bs-toggle="modal"
//                               data-bs-target="#quickview"
//                             >
//                               <span className="tooltip-text">Quickview</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-eye"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="#add-to-cart"
//                               className="add-to-cart"
//                               data-bs-toggle="modal"
//                               data-bs-target="#add-to-cart"
//                             >
//                               <span className="tooltip-text">Add to cart</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-shopping-bag"></i>
//                               </span>
//                             </a>
//                             <a
//                               href="wishlist-product.html"
//                               className="wishlist"
//                             >
//                               <span className="tooltip-text">Wishlist</span>
//                               <span className="pro-action-icon">
//                                 <i className="feather-heart"></i>
//                               </span>
//                             </a>
//                           </div>
//                         </div>
//                         <div className="pro-label-retting">
//                           <div className="product-ratting">
//                             <span className="pro-ratting">
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                               <i className="fa-solid fa-star"></i>
//                             </span>
//                           </div>
//                           <div className="product-label pro-new-sale">
//                             <span className="product-label-title">
//                               Sale<span>30%</span>
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div
//                     className="collection-button"
//                     data-animate="animate__fadeInUp"
//                   >
//                     <a
//                       href="collection.html"
//                       className="btn btn-style2"
//                       data-animate="animate__fadeInUp"
//                     >
//                       View all item
//                     </a>
//                   </div>
//                 </div>

//                 <div
//                   className="swiper-buttons"
//                   data-animate="animate__fadeInUp"
//                 >
//                   <div className="swiper-buttons-wrap">
//                     <button className="swiper-prev swiper-prev-Trending">
//                       <span>
//                         <i className="feather-arrow-left"></i>
//                       </span>
//                     </button>
//                     <button className="swiper-next swiper-next-Trending">
//                       <span>
//                         <i className="feather-arrow-right"></i>
//                       </span>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="swiper-dots" data-animate="animate__fadeInUp">
//                   <div className="swiper-pagination swiper-pagination-Trending"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;