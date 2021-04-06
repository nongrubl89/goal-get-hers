import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formGroupFirstName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formGroupLastName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="name" placeholder="name@email.com" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder="Message" />
              </Form.Group>
              <Button className="p-3">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </ScrollAnimation>
  );
}
