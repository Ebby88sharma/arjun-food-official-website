import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const categories = [
  { name: "Fruits", image: "https://source.unsplash.com/200x200/?fruits" },
  { name: "Vegetables", image: "https://source.unsplash.com/200x200/?vegetables" },
  { name: "Dairy", image: "https://source.unsplash.com/200x200/?milk" },
  { name: "Spices", image: "https://source.unsplash.com/200x200/?spices" },
];

const Categories = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center">Search by Category</h2>
        <Row className="text-center">
          {categories.map((category, index) => (
            <Col key={index} md={3} sm={6} className="p-3">
              <img src={category.image} alt={category.name} className="img-fluid rounded" />
              <h5 className="mt-2">{category.name}</h5>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
