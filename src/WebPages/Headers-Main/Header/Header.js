import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopBanner from "../Top-Banner/TopBanner";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container className="m-4" fluid>
          <Navbar.Brand className="text-light" href="#">
            Modhurima WoodCraft Corner
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="class-link" to="/home">
                Home
              </Link>
              <Link className="class-link" to="/">
                About
              </Link>
              <Link className="class-link" to="/">
                Login
              </Link>
              <Link className="class-link" to="/">
                DashBoard
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
