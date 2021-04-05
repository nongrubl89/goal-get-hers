import { React, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import EmailModal from "./EmailModal";
import ScrollAnimation from "react-animate-on-scroll";

export default function EmailContainer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <ScrollAnimation animateIn="fadeIn">
      <Container fluid className="email-container">
        <Row>
          <Col md={{ offset: 1, span: 5 }}>
            <h3>Subscribe to our Newsletter</h3>
            <h5>
              We envision a world where all women are change agents and
              “she-roes” for their communities, through giving, volunteering,
              and activism.{" "}
            </h5>
            <Button onClick={handleShow} className="mt-1 mb-4 p-3">
              Subscribe
            </Button>
          </Col>
          <Col md={5}>
            <h3>Become a Goal GetHERS Partner</h3>
            <h5>
              We’re always looking for new organizations, associations, and
              nonprofits to partner with, along with companies interested in
              giving back.{" "}
            </h5>
            <Button className="mt-1 p-3">Learn More</Button>
            <EmailModal show={show} handleClose={handleClose} />
          </Col>
        </Row>
      </Container>
    </ScrollAnimation>
  );
}
