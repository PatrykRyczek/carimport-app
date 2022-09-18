import styled from "styled-components";
import flag from "../../../images/flag.jpg";

export const Container = styled.div`
  margin: auto;
  height: 70vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(${flag});
  background-repeat: no-repeat;
  background-size: cover;

  h3 {
    text-align: left;
    padding-bottom: 15px;
    font-size: 1.5em;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    text-align: justify;
  }

  span {
    color: white;
  }

  ul {
    margin: 5px;
    padding-left: 35px;
  }

  li::marker {
    color: black;
    font-size: 1.5em;
  }

  @media (max-width: 1400px) {
    height: 100vh;
  }

  @media (max-width: 1060px) {
    height: 200vh;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  @media (max-width: 500px) {
    height: 275vh;
  }

  @media (max-width: 350px) {
    height: 300vh;
  }
`;
export const Header = styled.div`
  text-align: center;
  padding: 0 20px;
  margin-top: 30px;
  width: 100%;

  h1 {
    color: white;
  }

  @media (max-width: 1060px) {
    text-align: center;
    font-size: 16px;
  }
`;
export const Infobox = styled.div`
  font-size: 20px;
  border-radius: 5%;
  padding: 30px;
  margin: 20px;
  max-width: 22%;
  background-color: #ffa351ff;

  @media (max-width: 1400px) {
    max-width: 28%;
    height: 70%;
  }

  @media (max-width: 1200px) {
    max-width: 28%;
    height: 80%;
  }

  @media (max-width: 1060px) {
    margin: 20px auto;
    max-width: 80%;
    height: 40%;
  }
`;
