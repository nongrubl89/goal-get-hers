import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";
import { Container, Row } from "react-bootstrap";

export default function InstaContainer() {
  return (
    <Container className="pt-1 mb-3">
      <Row className="justify-content-center">
        <h1 id="instagram-header" className="p-4">
          Follow us on Instagram
        </h1>
      </Row>
      <Row className="justify-content-center">
        <InstagramFeed
          token={process.env.REACT_APP_INSTAGRAM_TOKEN}
          counter="3"
        />
      </Row>
    </Container>
  );
}
