import React from "react";
import { Row, Col, Jumbotron, Button, Card } from "react-bootstrap";
import Badmitton from "../jumbotron-img.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import CardContainer from "./CardContainer";

export default function Home() {
  return (
    <Router>
      <Jumbotron fluid>
        <Row className="align-items-center">
          <Col md={8} sm={10} xs={8}>
            <h1>
              Goal GetHers believes that every girl should have access to an
              elite sports education.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <Button>
              <a href="/about">Learn More</a>
            </Button>{" "}
          </Col>
          <Col className="jumbotron-right" md={4} sm={2} xs={4}>
            <img
              className="img-in-jumbotron"
              src={Badmitton}
              alt="badmitton"
            ></img>
          </Col>
        </Row>
      </Jumbotron>
      <CardContainer />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
