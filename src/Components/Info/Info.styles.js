import styled from "styled-components";
import flag from "../../images/flag.jpg";

export const Container = styled.div`
  max-width: 80% vw;
  margin: auto;
  height: 65vh;
  display: flex;
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
`;
export const Header = styled.div`
  text-align: center;
  margin: 25px;
  flex-basis: 100%;

  h1 {
    color: white;
  }
`;
export const Infobox = styled.div`
  border-radius: 5%;
  padding: 30px;
  margin: 20px;
  max-width: 22%;
  background-color: #ffa351ff;
`;
