import React from "react";
import { Container } from "react-bootstrap";

const Products = () => {
  return (
    <section id="products" className="py-5">
      <Container>
        <h2>Our Products</h2>
        <p>We offer a variety of Indian spices, grains, and other essential ingredients.</p>
        <ul>
          <li>Premium Basmati Rice</li>
          <li>Authentic Indian Spices</li>
          <li>Pulses & Lentils</li>
          <li>Ready-to-Eat Indian Delicacies</li>
        </ul>
      </Container>
    </section>
  );
};

export default Products;
