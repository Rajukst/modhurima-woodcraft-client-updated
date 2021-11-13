import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import TopBanner from "../../Headers-Main/Top-Banner/TopBanner";
import HomeProducts from "../Home-Products/HomeProducts";
import Opinion from "../Opinion/Opinion";

const MainHome = () => {
  const [homeData, setHomeData] = useState([]);
  useEffect(() => {
    fetch("https://thawing-plains-66619.herokuapp.com/explore-products")
      .then((res) => res.json())
      .then((data) => setHomeData(data));
  }, []);
  return (
    <div>
      <TopBanner></TopBanner>
      <Row xs={1} md={2} lg={3} className="g-4 m-2">
        {homeData.slice(0, 6).map((getProduct) => (
          <HomeProducts
            key={getProduct._id}
            products={getProduct}
          ></HomeProducts>
        ))}
        <Opinion></Opinion>
      </Row>
    </div>
  );
};

export default MainHome;
