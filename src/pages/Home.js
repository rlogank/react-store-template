import React from "react";
import About from "../components/About";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import ProductBanners from "../components/ProductBanners";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <ProductBanners />
      <About />
    </>
  );
};

export default Home;
