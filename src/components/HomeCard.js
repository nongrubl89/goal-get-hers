import { Card } from "react-bootstrap";
import { React, useState } from "react";

export default function HomeCard(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <Card
      className={hovered ? "border-0 shadow-lg" : "border-0"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
