import { Card } from "react-bootstrap";
import React from "react";

export default function HomeCard(props) {
  return (
    <Card className="border-0">
      <Card.Body>
        <Card.Title className="justify-content-center">
          {props.cardTitle}
        </Card.Title>
        <h2>
          <i className={props.cardImage}></i>
        </h2>
        <Card.Text>{props.cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
}
