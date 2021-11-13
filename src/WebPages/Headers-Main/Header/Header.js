import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
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
            </Nav>
            <Form className="d-flex">
              <div className="me-2 text-light">Logged As: {user.email}</div>
              {user.email ? (
                <Button onClick={logOut}>LogOut</Button>
              ) : (
                <Link className="class-link" to="/login">
                  Login
                </Link>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
