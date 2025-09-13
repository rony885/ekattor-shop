import React from "react";
import CartEmptyInfo from "./CartEmptyInfo";
import Product from "./Product";
import ProductCategory from "./ProductCategory";

const CartEmpty = () => {
  return (
    <>
      <CartEmptyInfo />
      <Product />
      <ProductCategory />
    </>
  );
};

export default CartEmpty;
