"use client";
import React from "react";
import AboutUs from "../component/about-us";
import MainBanner from "../component/mainBanner";
import Products from "../component/products";
import ProductGallery from "../component/gallery";

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <AboutUs />
      <Products />
      <ProductGallery />
    </div>
  );
};

export default HomePage;
