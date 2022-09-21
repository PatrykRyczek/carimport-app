import React from "react";
import { Container, Bottom, Contact, Info } from "./Footer.styles";

export const Footer = () => {
  return (
    <Container>
      <Contact>
        <Info>
          <ul>
            <li>
              <strong>Zapraszamy do kontaktu:</strong>
            </li>
            <li>
              <b>Tel.</b> 123 456 789 Kuba
            </li>
            <li>
              <b>Tel.</b> 123 456 789 Arek
            </li>
            <li>
              <b>Tel.</b> 123 456 789 Jacek
            </li>
            <li>
              <b>Tel.</b> 123 456 789 Monika
            </li>
            <li>
              <b>Tel.</b> 123 456 789 Rafał
            </li>
          </ul>
        </Info>
        <Info>
          <ul>
            <li>
              <strong>Adres:</strong>
            </li>
            <li>CAR-IMPORT</li>
            <li>ul. Frontowa 3/74</li>
            <li>12-345 Poznań</li>
          </ul>
        </Info>
        <Info>
          <ul>
            <li>
              <strong>Godziny otwarcia:</strong>
            </li>
            <li>Pon - Piątek - 8:00 - 16:00</li>
            <li>Sobota - 10:00 - 15:00</li>
            <li>Przed wizytą prosimy o telefon.</li>
          </ul>
        </Info>
      </Contact>
      <Bottom>
        <h2>
          <span> &copy; Copyright Patryk Ryczek</span>
        </h2>
      </Bottom>
    </Container>
  );
};
