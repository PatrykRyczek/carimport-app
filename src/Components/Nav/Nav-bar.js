import React from "react";
import { Link } from "react-router-dom";
import { Container, LeftNav, RightNav } from "./Nav-bar.styles";

export const NavBar = () => {
  return (
    <Container>
      <LeftNav>
        <Link to="/">
          <span>Car-import</span>
        </Link>
      </LeftNav>
      <RightNav>
        <Link to="/uslugi">
          <span>Nasze uslugi</span>
        </Link>
        <Link to="/kalkulator">
          <span>Kalkulator</span>
        </Link>
        <Link to="/faq">
          <span>FAQ</span>
        </Link>
        <Link to="/o-nas">
          <span>O Nas</span>
        </Link>
        <Link to="/kontakt">
          <span>Kontakt</span>
        </Link>
      </RightNav>
    </Container>
  );
};
