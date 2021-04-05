import React from "react";
import Logo from "../OrangeLogo.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function ContactFooter() {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <div className="mb-1 text-center">
          <img className="logo-in-footer" src={Logo} alt="logo"></img>
        </div>
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
      </footer>
    </ScrollAnimation>
  );
}
