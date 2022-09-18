import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  LeftNav,
  RightNav,
  BurgerNav,
  CloseWrapper,
  CustomMenu,
} from "./Nav-bar.styles";

export const NavBar = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

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
      <div className="active">
        <CustomMenu onClick={() => setBurgerStatus(!burgerStatus)}></CustomMenu>
      </div>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <ul>
            <li>
              <Link to="/uslugi">
                <span>Nasze uslugi</span>
              </Link>
            </li>
            <li>
              <Link to="/kalkulator">
                <span>Kalkulator</span>
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <span>FAQ</span>
              </Link>
            </li>
            <li>
              <Link to="/o-nas">
                <span>O Nas</span>
              </Link>
            </li>
            <li>
              <Link to="/kontakt">
                <span>Kontakt</span>
              </Link>
            </li>
          </ul>
        </CloseWrapper>
      </BurgerNav>
    </Container>
  );
};
