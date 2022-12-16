import React from "react";
import Duyurular from "../bilesenler/Duyurular";
import Navbar from "../bilesenler/Navbar";

const HomePage = () => {
  return (
    <div className='Container'>
      <Duyurular />
      <Navbar />
    </div>
  );
};

export default HomePage;
