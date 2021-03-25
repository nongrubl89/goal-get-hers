import { Card, Button } from "react-bootstrap";
import React from "react";
import Badmitton from "../jumbotron-img.svg";

export default function HomeCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Badmitton} />
      <Card.Body>
        <Card.Title className="justify-content-center">
          {props.cardTitle}
        </Card.Title>
        <Card.Text>{props.cardText}</Card.Text>
        <Button variant="primary">{props.buttonText}</Button>
      </Card.Body>
    </Card>
  );
}
