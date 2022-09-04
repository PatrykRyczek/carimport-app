import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { a3, a4, ford, dodge, x5, camaro } from "../../../images";

export const Offers = () => {
  return (
    <Container>
      <Section
        title="Audi A3"
        backgroundIMG={a3}
        price="5000"
        year="2014"
        engine="2.0"
        milage="175000"
      />
      <Section
        title="Audi A4"
        backgroundIMG={a4}
        price="6000"
        year="2015"
        engine="3.8"
        milage="75000"
      />
      <Section
        title="Ford Mustang"
        backgroundIMG={ford}
        price="14000"
        year="2017"
        engine="5.0"
        milage="51000"
      />
      <Section
        title="Dodge Charger"
        backgroundIMG={dodge}
        price="3750"
        year="2012"
        engine="3.7"
        milage="125000"
      />
      <Section
        title="BMW X5"
        backgroundIMG={x5}
        price="5000"
        year="2004"
        engine="3.0"
        milage="275000"
      />
      <Section
        title="Chevrolet Camaro"
        backgroundIMG={camaro}
        price="40000"
        year="2016"
        engine="6.2"
        milage="55000"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: antiquewhite;
`;
