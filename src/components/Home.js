import React from "react";
import { Row, Col, Jumbotron, Button } from "react-bootstrap";
import CardContainer from "./CardContainer";
import EmailContainer from "./EmailContainer";
import ContactContainer from "./ContactContainer";
import { Switch, Route } from "react-router-dom";
import About from "./About";

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
              <Button className="mt-1 p-3">
                <a href="/about">About Us</a>
              </Button>
            </Col>
          </Row>
        </Jumbotron>
      </div>
      <CardContainer />
      <EmailContainer />
      <ContactContainer />
      <Switch>
        <Route exact path="/about" component={About}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
