import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Explore from "./Explore";

const Products = () => {
  const [explore, setExplore] = useState([]);
  useEffect(() => {
    fetch("https://thawing-plains-66619.herokuapp.com/explore-products")
      .then((res) => res.json())
      .then((data) => setExplore(data));
  }, []);
  return (
    <div>
      <h1>This is Products Page</h1>
      <Row xs={1} md={2} lg={3} className="g-4 m-2">
        {explore.slice(6, 30).map((getExploreProducts) => (
          <Explore
            key={getExploreProducts._id}
            exploreProducts={getExploreProducts}
          ></Explore>
        ))}
      </Row>
    </div>
  );
};

export default Products;
