import React from "react";
import { Row, Col, Jumbotron, Button } from "react-bootstrap";
import CardContainer from "./CardContainer";

export default function Home() {
  return (
    <div>
      <div>
        <Jumbotron fluid>
          <Row>
            <Col className="jumbotron-content" md={6}>
              <h1 className="text-in-jumbotron">
                Goal GetHERS empowers girls to follow their dreams.
              </h1>
              <Button className="mt-1 p-3">About Us</Button>
            </Col>
          </Row>
        </Jumbotron>
      </div>
      <CardContainer />
    </div>
  );
}
