import React from "react";
import { Container, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2>Contact Us</h2>
        <p>📍 Address: Leipzig, Germany</p>
        <p>📧 Email: contact@arjunfoodtraders.com</p>
        <p>📞 Phone: +49 123 456 7890</p>
        <Button variant="success" href="mailto:contact@arjunfoodtraders.com">Email Us</Button>
      </Container>
    </section>
  );
};

export default Contact;
