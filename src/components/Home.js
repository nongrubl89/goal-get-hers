import React from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";
import CardContainer from "./CardContainer";

export default function Home() {
  return (
    <div>
      <div>
        <Jumbotron fluid>
          <Row>
            <Col md={6}>
              <h1 className="text-in-jumbotron">
                Goal GetHERS empowers girls to follow their dreams
              </h1>
            </Col>
          </Row>
        </Jumbotron>
      </div>
      <CardContainer />
    </div>
  );
}
