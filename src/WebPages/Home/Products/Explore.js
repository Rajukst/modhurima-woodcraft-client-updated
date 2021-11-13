import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Explore = ({ exploreProducts }) => {
  const { _id, name, image, description, price } = exploreProducts;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{price}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to={`/place-order/${_id}`}>
              <Button variant="outline-dark">Purchase Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Explore;
