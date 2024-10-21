import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import HeroSection from "./HeroSection";
import TrendingProducts from "../shop/TrendingProducts";
import DealsSection from "./DealsSection";
import PromoBaner from "./PromoBaner";
import Blog from "../blog/Blog";

const Home = () => {
  return (
    <>
      <Banner />
      <Category/>
      <HeroSection/>
      <TrendingProducts/>
      <DealsSection/>
      <PromoBaner/>
      <Blog/>
    </>
  );
};

export default Home;
