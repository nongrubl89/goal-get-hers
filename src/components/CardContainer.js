import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import HomeCard from "./HomeCard";
import Support from "../support.svg";
import Money from "../money.svg";
import Field from "../field.svg";

export default function CardContainer() {
  return (
    <Container>
      <CardDeck>
        <HomeCard
          cardTitle="Access"
          cardImage={Field}
          cardText="Girls have 1.3 million fewer opportunities to play high school sports than boys have. Lack of physical education in schools and limited opportunities to play sports in both high school and college mean girls have to look elsewhere for sports –which may not exist or may cost more money. There is often lack of access to adequate playing facilities near their homes."
          buttonText="Services"
        />
        <HomeCard
          cardTitle="Funding"
          buttonText="Donate"
          cardImage={Money}
          cardText="School sports budgets are being slashed every day, all across the country. Fewer opportunities within schools mean families must pay to play in private programs while also footing the bill for expensive coaches, equipment and out-of-pocket travel requirements.This additional expense is just not possible for many families."
        />

        <HomeCard
          cardTitle="Support"
          buttonText="Connect With Us"
          cardText="School sports budgets are being slashed every day, all across the country. Fewer opportunities within schools mean families must pay to play in private programs while also footing the bill for expensive coaches, equipment and out-of-pocket travel requirements.This additional expense is just not possible for many families."
          cardImage={Support}
        />
      </CardDeck>
    </Container>
  );
}
