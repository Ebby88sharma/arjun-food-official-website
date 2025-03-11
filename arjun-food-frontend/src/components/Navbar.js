import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import logo from "../assets/arjun-food-traiders-logo-normal.png"; // Import Logo

const Navigation = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm p-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-success d-flex align-items-center">
          <img src={logo} alt="Arjun Food Traders" height="50" className="me-2" />
        </Navbar.Brand>
        <Form className="d-flex mx-auto">
          <FormControl type="search" placeholder="Search..." className="me-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-dark">Home</Nav.Link>
            <Nav.Link href="#about" className="text-dark">About Us</Nav.Link>
            <Nav.Link href="#contact" className="text-dark">Contact</Nav.Link>
            <Nav.Link className="text-danger">Special Offers!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
