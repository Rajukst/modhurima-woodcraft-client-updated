import React from "react";

import myImage from "../../../images/top-banner.jpg";
import "./TopBanner.css";
const TopBanner = () => {
  return (
    <>
      <img className="banner-img" src={myImage} alt="" />
    </>
  );
};

export default TopBanner;
