import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import myImage from "../../../images/top-banner.jpg";
import "./TopBanner.css";
const TopBanner = () => {
  return (
    <>
      <img className="banner-img" src={myImage} alt="" />

      <Link to="/products">
        <Button className="explore-us" variant="outline-info">
          Explore Now
        </Button>
      </Link>
    </>
  );
};

export default TopBanner;
