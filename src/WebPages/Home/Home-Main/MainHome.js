import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import TopBanner from "../../Headers-Main/Top-Banner/TopBanner";
import HomeProducts from "../Home-Products/HomeProducts";

const MainHome = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./Fakedata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <TopBanner></TopBanner>
      <Row xs={1} md={2} lg={3} className="g-4 m-2">
        {products.map((getProducts) => (
          <HomeProducts
            key={getProducts.id}
            service={getProducts}
          ></HomeProducts>
        ))}
      </Row>
    </div>
  );
};

export default MainHome;
