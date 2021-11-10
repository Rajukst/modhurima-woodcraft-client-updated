import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import HomeProducts from "../Home-Products/HomeProducts";

const MainHome = () => {
  const [products, setProducts] = useState();
  useEffect(() => {}, []);
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        <HomeProducts></HomeProducts>
      </Row>
    </div>
  );
};

export default MainHome;
