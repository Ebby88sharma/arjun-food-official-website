import React from "react";
import { Container, Button } from "react-bootstrap";
import "../App.css";

const Hero = () => {
  return (
    <section className="hero-section text-center text-white d-flex align-items-center justify-content-center">
      <Container>
        <h1>Welcome to Arjun Food Traders</h1>
        <p>Your trusted supplier of Indian food products in Leipzig.</p>
        <Button variant="warning" href="#contact">Get in Touch</Button>
      </Container>
    </section>
  );
};

export default Hero;
