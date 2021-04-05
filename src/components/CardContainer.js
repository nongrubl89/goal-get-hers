import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import HomeCard from "./HomeCard";

export default function CardContainer() {
  return (
    <Container>
      <CardDeck className="text-center pb-4">
        <HomeCard
          cardTitle="Meet"
          cardImage="bi bi-book"
          cardText="Provide a place for women to convene and network with like-minded individuals"
        />
        <HomeCard
          cardTitle="Learn"
          cardImage="bi bi-book"
          cardText="Share information on relevant topics through panel events, webinars, or other information-sharing venues"
        />

        <HomeCard
          cardTitle="Give"
          cardImage="bi bi-book"
          cardText="Provide opportunities for service through donations, or volunteer opportunities"
        />
        <HomeCard
          cardTitle="Lead"
          cardImage="bi bi-book"
          cardText="Provide members with the training, tangible skills, and tactics to affect change in their communities on topics of interest"
        />
      </CardDeck>
    </Container>
  );
}
