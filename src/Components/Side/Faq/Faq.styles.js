import styled from "styled-components";

export const Container = styled.div`
  text-align: justify;
  height: 100vh;
  background-color: antiquewhite;

  h1 {
    text-align: center;
    padding: 50px 0;
  }

  @media screen and (max-width: 1600px) {
    height: 120vh;
  }

  @media screen and (max-width: 1400px) {
    height: 145vh;
  }

  @media screen and (max-width: 1200px) {
    height: 150vh;
  }

  @media screen and (max-width: 1000px) {
    height: 175vh;
  }

  @media screen and (max-width: 700px) {
    height: 190vh;
  }

  @media screen and (max-width: 600px) {
    height: 200vh;
  }

  @media screen and (max-width: 550px) {
    height: 210vh;
  }

  @media screen and (max-width: 500px) {
    height: 225vh;
  }

  @media screen and (max-width: 400px) {
    height: 250vh;
  }

  @media screen and (max-width: 350px) {
    height: 280vh;
  }
`;

export const Questions = styled.div`
  margin: auto;
  width: 75%;

  strong {
    font-size: 20px;
  }

  p {
    font-size: 17px;
  }

  hr {
    opacity: 0.5;
    margin: 25px 0;
  }
`;
