import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Gallery from "../components/gallery/Gallery";
import { listImage } from "../data/ImageArray";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery galleryImages={listImage} />
    </>
  );
};

export default Home;
