import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeProducts = ({ service }) => {
  const { name, img, description } = service;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to="/place-order">
              <Button variant="outline-dark">Purchase Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default HomeProducts;
