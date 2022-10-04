import React from "react";
import { ConvertedEmployee } from "ts/interfaces";
import { Container, CardsContainer, CardsComponent, CardsInitials } from "components/StylingComponents/Cards";
import { useState } from "react";
import "./CardsList.css";

interface CardsProps {
  userData: ConvertedEmployee[];
}

export default function CardsList(props: CardsProps) {
  const getInitials = (name: string) => {
    let names = name.split(" "),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  return (
    <Container>
      <CardsContainer className="cards__container">
        {props.userData?.map((user: ConvertedEmployee) => (
          <CardsComponent key={user.id}>
            <CardsInitials>
              <h3>{getInitials(user.fullName)}</h3>
            </CardsInitials>
            <h4>{user.fullName}</h4>
            <h4>{user.birthday}</h4>
            <h4>{user.salary}</h4>
            <h4>{user.gender}</h4>
          </CardsComponent>
        ))}
      </CardsContainer>
    </Container>
  );
}
