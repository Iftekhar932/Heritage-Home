import React from "react";
import Analytics from "./Analytics";
import Cards from "./Cards";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
const Main = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
};

export default Main;
