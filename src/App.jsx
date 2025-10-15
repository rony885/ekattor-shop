import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Notificationbar from "./components/Notificationbar";
import Footer from "./components/Footer";
import FooterCopyright from "./components/FooterCopyright";
import VegaMobile from "./components/VegaMobile";
import MobileMenu from "./components/MobileMenu";
import SearchModal from "./components/SearchModal";
import Cart from "./components/Cart";
import BottomMenu from "./components/BottomMenu";
import Top from "./components/Top";
import ScrolltoTop from "./components/ScrolltoTop";
import Error from "./components/Error";
import Loader from "./components/Loader";
import Header from "./components/Header/Header";
// import Newsletter from "./components/Newsletter";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from "./pages/Products/Product";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SearchProduct from "./pages/Search/SearchProduct";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
// import Contact from "./pages/Contact/Contact";

import QuickviewModal from "./components/QuickviewModal";
import ViewCart from "./pages/ViewCart/ViewCart";
import CartEmpty from "./pages/CartEmpty/CartEmpty";
import WishlistEmpty from "./components/Wishlist/WishlistEmpty";
import WishlistProduct from "./pages/WishlistProduct/WishlistProduct";
import Checkout from "./pages/Checkout/Checkout";
import OrderComplete from "./pages/OrderComplete/OrderComplete";
import OrderHistory from "./pages/Accounts/OrderHistory";
import Tracking from "./pages/Tracking/Tracking";
import Profile from "./pages/Accounts/Profile";
import ProAdress from "./pages/Accounts/ProAdress";
import ProWishlist from "./pages/Accounts/ProWishlist";
import BillingInfo from "./pages/Accounts/BillingInfo";
import Login from "./pages/Accounts/Login";
import PageTitle from "./components/PageTitle";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [vegaMobileOpen, setVegaMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleMennu = () => {
    setCartOpen(!cartOpen);
  };
  const toggleMennuVegaMobile = () => {
    setVegaMobileOpen(!cartOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const closeMennu = () => {
    setCartOpen(false);
  };
  const closeMennuVegaMobile = () => {
    setVegaMobileOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Top />
        <ScrolltoTop />
        <Notificationbar />
        <Header
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          toggleMennu={toggleMennu}
          toggleMennuVegaMobile={toggleMennuVegaMobile}
        />
        <main id="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <PageTitle title="Home | Ekattor Shop" />
                  <Home />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <PageTitle title="About | Ekattor Shop" />
                  <About />
                </>
              }
            />
            <Route
              path="/product"
              element={
                <>
                  <PageTitle title="Product | Ekattor Shop" />
                  <Product />
                </>
              }
            />
            <Route
              path="/product-details/:prodId"
              element={
                <>
                  <PageTitle title="Product Details | Ekattor Shop" />
                  <ProductDetails />
                </>
              }
            />
            <Route
              path="/search"
              element={
                <>
                  <PageTitle title="Search Product | Ekattor Shop" />
                  <SearchProduct />
                </>
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/wishlist-product" element={<WishlistProduct />} />
            <Route path="/wishlist-empty" element={<WishlistEmpty />} />
            <Route path="/cart-view" element={<ViewCart />} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-complete" element={<OrderComplete />} />
            <Route path="/cart-empty" element={<CartEmpty />} />
            <Route path="/track" element={<Tracking />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pro-address" element={<ProAdress />} />
            <Route path="/pro-wishlist" element={<ProWishlist />} />
            <Route path="/billing-info" element={<BillingInfo />} />
            <Route path="/login-account" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
        <FooterCopyright />
        <VegaMobile
          vegaMobileOpen={vegaMobileOpen}
          closeMennuVegaMobile={closeMennuVegaMobile}
        />
        <MobileMenu closeMenu={closeMenu} menuOpen={menuOpen} />
        <SearchModal />
        <Cart closeMennu={closeMennu} cartOpen={cartOpen} />
        {/* <Newsletter /> */}
        <QuickviewModal />
        <div className="bg-screen"></div>
        <BottomMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
