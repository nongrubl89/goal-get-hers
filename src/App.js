import React from "react";
import Navigation from "./components/Navigation.js";
import ContactFooter from "./components/ContactFooter.js";
import ScrollAnimation from "react-animate-on-scroll";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <ScrollAnimation animateIn="fadeIn">
      <Navigation />
      <ContactFooter />
    </ScrollAnimation>
  );
}
