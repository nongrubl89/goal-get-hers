import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Dancer from "../dancer.svg";

export default function ComingSoon(props) {
  return (
    <Container>
      <Row className="align-items-center mt-5">
        <Col md={6}>
          <img src={props.imgSrc} alt="players"></img>
        </Col>
        <Col md={6}>
          <h1>Coming Soon!</h1>
        </Col>
      </Row>
    </Container>
  );
}
