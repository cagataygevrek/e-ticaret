import React from "react";
import Duyurular from "../bilesenler/Duyurular";
import Kategoriler from "../bilesenler/Kategoriler";

import Navbar from "../bilesenler/Navbar";
import Slider from "../bilesenler/Slider";

const HomePage = () => {
  return (
    <div className='Container'>
      <Duyurular />
      <Navbar />
      <Slider />
      <Kategoriler />
    </div>
  );
};

export default HomePage;
