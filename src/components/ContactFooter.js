import React from "react";
import Logo from "../OrangeLogo.png";
import ScrollAnimation from "react-animate-on-scroll";
import { Nav, Row, Col } from "react-bootstrap";

export default function ContactFooter() {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn">
        <Nav
          id="bottom-nav"
          class="navbar navbar-bottom justify-content-center"
        >
          <img className="logo-in-footer" src={Logo} alt="logo"></img>
        </Nav>
        <Nav
          id="bottom-nav"
          class="navbar navbar-bottom navbar-light bg-light justify-content-center"
        >
          <ul className="list-inline">
            <li className="list-inline-item">
              <i class="bi bi-facebook"></i>
            </li>
            <li className="list-inline-item">
              <i class="bi bi-instagram"></i>
            </li>
            <li className="list-inline-item">
              <i class="bi bi-twitter"></i>
            </li>
          </ul>
        </Nav>
      </ScrollAnimation>
    </>
  );
}
