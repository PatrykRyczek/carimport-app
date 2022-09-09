import styled from "styled-components";
import img from "../../../images/about-car.jpg";

export const Container = styled.div`
  justify-content: center;
  align-items: flex-start;
  display: flex;
  height: 100vh;
  background-color: antiquewhite;
`;

export const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: justify;
  justify-content: center;

  h1 {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    padding: 50px 0;
  }
`;

export const Img = styled.div`
  margin-left: 15px;
  height: 700px;
  width: 40%;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Description = styled.div`
  width: 40%;
`;
