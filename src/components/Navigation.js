import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import Team from "./Team";
import Donate from "./Donate";
import Services from "./Services";
import About from "./About";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="navbar" expand="lg" sticky="top" variant="dark">
          <Navbar.Brand href="/">Goal GetHERS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Nav.Link href="/about">What We Believe</Nav.Link>
              <Nav.Link href="/team">Who We Are</Nav.Link>
              <Nav.Link href="/services">What We Do</Nav.Link>
              <Nav.Link className="donate-link" href="/donate">
                Donate
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/team" component={Team}>
            <Team />
          </Route>
          <Route path="/donate" component={Donate}>
            <Donate />
          </Route>
          <Route path="/services" component={Services}>
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Navigation;
