import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import Team from "./Team";
import Donate from "./Donate";
import Services from "./Services";
import About from "./About";
import Logo from "../OrangeLogo.png";

export default function Navigation() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY < 60);
    });
  }, []);
  return (
    <div>
      <Navbar
        className={scroll ? "navbar" : "navbar-dark"}
        fixed="top"
        expand="lg"
      >
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="facebook.com">
              <i class="bi bi-facebook"></i>
            </Nav.Link>
            <Nav.Link href="instagram.com">
              <i class="bi bi-instagram"></i>
            </Nav.Link>
            <Nav.Link href="twitter.com">
              <i class="bi bi-twitter"></i>
            </Nav.Link>
            <Nav.Link href="/about">Our Mission</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/services">Get Involved</Nav.Link>
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
