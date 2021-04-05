import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

export default function ContactContainer() {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <Container fluid className="contact-container">
        <Row>
          <Col md={{ offset: 1, span: 5 }}>
            <h3>Get in touch</h3>
            <h5>
              Maybe you want to bring Women4Good to your city. Maybe you want to
              find ways to volunteer with us. Or maybe you have a fundraising
              idea to share with the world. Whatever it is, we’d love to hear
              from you.
            </h5>
          </Col>
          <Col md={5}>
            <Form>
              <Form.Group controlId="formGroupFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="First Name" />
              </Form.Group>
              <Form.Group controlId="formGroupLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Last Name" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="password" placeholder="Email" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </ScrollAnimation>
  );
}
