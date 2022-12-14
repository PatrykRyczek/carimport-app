import React from "react";
import styled from "styled-components";

function Section({ title, year, price, engine, milage, backgroundIMG }) {
  return (
    <Wrap>
      <ItemText>
        <Split>
          <h2>{title}</h2>
          <img src={backgroundIMG} alt="Propozycja sprowadzenia" />
        </Split>
        <p>Szacowana cena: {price} $</p>
        <p>Rocznik: {year}</p>
        <p>Silnik: {engine}L</p>
        <p>Przebieg: {milage} KM</p>
      </ItemText>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 20vw;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 15px;

  img {
    height: 100px;
    transition: 0.5s;
  }

  img:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    width: 25vw;
    height: 40vh;
  }

  @media (max-width: 800px) {
    width: 40vw;
    height: 40vh;
  }

  @media (max-width: 600px) {
    width: 80vw;
    height: 40vh;
  }
`;
const ItemText = styled.div`
  text-align: left;
  h2 {
    padding-bottom: 5px;
  }
`;

const Split = styled.div`
  text-align: center;
`;
