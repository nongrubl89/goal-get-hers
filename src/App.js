import React from "react";
import Navigation from "./components/Navigation.js";
import ContactFooter from "./components/ContactFooter.js";
import ScrollAnimation from "react-animate-on-scroll";

export default function App() {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <Navigation />
      <ContactFooter />
    </ScrollAnimation>
  );
}
