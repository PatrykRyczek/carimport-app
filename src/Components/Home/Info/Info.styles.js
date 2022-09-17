import styled from "styled-components";
import flag from "../../../images/flag.jpg";

export const Container = styled.div`
  margin: auto;
  height: 65vh;
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

  @media (max-width: 1200px) {
    height: 350vh;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
export const Header = styled.div`
  text-align: center;
  margin: 25px 0;
  flex-basis: 100%;

  h1 {
    color: white;
  }

  @media (max-width: 1200px) {
    text-align: center;
    flex-basis: 10%;
    margin: 0 auto;
    font-size: 16px;
  }
`;
export const Infobox = styled.div`
  border-radius: 5%;
  padding: 30px;
  margin: 20px;
  max-width: 22%;
  background-color: #ffa351ff;

  @media (max-width: 1200px) {
    margin: 20px auto;
    max-width: 80%;
  }
`;
