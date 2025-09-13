import React from "react";
import SliderHeroArea from "./SliderHeroArea";
import Category from "./Category";
import Banner from "./Banner";
import Service from "./Service";
import Products from "./Products";
import Deal from "./Deal";
import Testimonial from "./Testimonial";
import FeaturedProduct from "./FeaturedProduct";
import Brand from "./Brand";
import InstagramArea from "./InstagramArea";

const Home = () => {
  return (
    <>
      <SliderHeroArea />
      <Category />
      <Banner />
      <Service />
      <Products />
      <Deal />
      <Testimonial />
      <FeaturedProduct />
      <InstagramArea />
      <Brand/>
    </>
  );
};

export default Home;
