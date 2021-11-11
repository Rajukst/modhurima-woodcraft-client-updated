import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
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
              <Link className="class-link" to="/dashboard">
                DashBoard
              </Link>
              {user.email ? (
                <Button onClick={logOut}>LogOut</Button>
              ) : (
                <Link className="class-link" to="/login">
                  Login
                </Link>
              )}
              <div className="me-2 text-light">Logged As: {user.email}</div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
