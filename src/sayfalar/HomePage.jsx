import React from "react";
import Duyurular from "../bilesenler/Duyurular";
import Footer from "../bilesenler/Footer";
import Kategoriler from "../bilesenler/Kategoriler";

import Navbar from "../bilesenler/Navbar";
import Slider from "../bilesenler/Slider";
import Urunbildirimi from "../bilesenler/Urunbildirimi";
import Urunler from "../bilesenler/Urunler";

const HomePage = () => {
  return (
    <div className='Container'>
      <Duyurular />
      <Navbar />
      <Slider />
      <Kategoriler />
      <Urunler />
      <Urunbildirimi />
      <Footer />
    </div>
  );
};

export default HomePage;
