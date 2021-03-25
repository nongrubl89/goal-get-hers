import { Card, Button } from "react-bootstrap";
import React from "react";

export default function HomeCard(props) {
  return (
    <Card className="shadow p-3">
      <Card.Img variant="top" src={props.cardImage} className="p-4" />
      <Card.Body>
        <Card.Title className="justify-content-center">
          {props.cardTitle}
        </Card.Title>
        <Card.Text>{props.cardText}</Card.Text>
        <Button className="align-content-end" variant="primary">
          {props.buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}
