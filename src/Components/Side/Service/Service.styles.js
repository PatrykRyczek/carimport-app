import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  height: 70vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 20px;
  justify-content: center;
  background-color: antiquewhite;

  @media (max-width: 1400px) {
    height: 100vh;
  }

  @media (max-width: 1200px) {
    height: 175vh;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  @media (max-width: 700px) {
    height: 200vh;
  }

  @media (max-width: 500px) {
    height: 250vh;
  }

  @media (max-width: 400px) {
    height: 300vh;
  }

  @media (max-width: 300px) {
    height: 350vh;
  }
`;

export const Header = styled.div`
  text-align: center;
  padding: 0 20px;
  width: 100%;

  h1 {
    padding: 25px 0;
  }

  @media (max-width: 1200px) {
    text-align: center;
    font-size: 16px;
  }
`;

export const Infobox = styled.div`
  font-size: 18px;
  border-radius: 5%;
  padding: 30px;
  margin: 20px;
  max-width: 22%;
  background-color: #ffa351ff;

  h3 {
    color: #353531;
    padding: 10px 0;
  }

  @media (max-width: 1400px) {
    max-width: 28%;
    height: 40%;
  }

  @media (max-width: 1200px) {
    margin: 20px auto;
    max-width: 70%;
    height: 30%;
  }

  @media (max-width: 700px) {
    height: 25%;
  }
`;

export const Contact = styled.div`
  text-align: center;
  width: 100%;

  button {
    text-transform: uppercase;
    background-color: rebeccapurple;
    color: white;
    height: 50px;
    width: 250px;
    font-size: 18px;
    margin: 10px 0;
    padding: 8px;
    transition: 0.3s;
  }

  button:hover {
    background-color: lightcoral;
    color: black;
  }
`;
