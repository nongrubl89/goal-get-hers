import React from "react";
import Hockey from "../hockey.jpg";
import ComingSoon from "./ComingSoon";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

export default function Services() {
  return <ComingSoon imgSrc={Hockey} />;
}
