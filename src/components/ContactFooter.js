import React from "react";
import Logo from "../OrangeLogo.png";
import ScrollAnimation from "react-animate-on-scroll";
import { Navbar } from "react-bootstrap";

export default function ContactFooter() {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn">
        <Navbar
          id="bottom-nav"
          className="navbar navbar-bottom justify-content-center"
        >
          <img className="logo-in-footer" src={Logo} alt="logo"></img>
        </Navbar>
        {/* <Navbar
          id="bottom-nav"
          className="navbar navbar-bottom navbar-light bg-light justify-content-center"
        >
          <ul className="list-inline">
            <li className="list-inline-item">
              <i className="bi bi-facebook"></i>
            </li>
            <li className="list-inline-item">
              <i className="bi bi-instagram"></i>
            </li>
            <li className="list-inline-item">
              <i className="bi bi-twitter"></i>
            </li>
          </ul>
        </Navbar> */}
      </ScrollAnimation>
    </>
  );
}
