import React from "react";
import { Row, Col, Jumbotron, Button } from "react-bootstrap";
import CardContainer from "./CardContainer";
import EmailContainer from "./EmailContainer";
import ContactContainer from "./ContactContainer";

export default function Home() {
  return (
    <div>
      <div>
        <Jumbotron fluid>
          <Row>
            <Col className="jumbotron-content" md={6}>
              <h1 className="text-in-jumbotron">
                Goal GetHERs empowers girls to follow their dreams.
              </h1>
              <Button className="mt-1 p-3">About Us</Button>
            </Col>
          </Row>
        </Jumbotron>
      </div>
      <CardContainer />
      <EmailContainer />
      <ContactContainer />
    </div>
  );
}
