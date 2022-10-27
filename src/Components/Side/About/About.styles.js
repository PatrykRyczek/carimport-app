import styled from "styled-components";
import img from "../../../images/about-car.jpg";

export const Container = styled.div`
  justify-content: center;
  align-items: flex-start;
  display: flex;
  height: 100vh;
  background-color: antiquewhite;

  @media (max-width: 1200px) {
    height: 150vh;
  }

  @media (max-width: 1000px) {
    height: 180vh;
  }

  @media (max-width: 700px) {
    height: 190vh;
  }

  @media (max-width: 600px) {
    height: 210vh;
  }

  @media (max-width: 500px) {
    height: 225vh;
  }

  @media (max-width: 400px) {
    height: 275vh;
  }
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

  @media (max-width: 1000px) {
    flex-direction: column;
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

  @media (max-width: 1000px) {
    margin: 25px auto;
    width: 80%;
    height: 600px;
  }

  @media (max-width: 900px) {
    height: 450px;
  }

  @media (max-width: 800px) {
    height: 400px;
  }

  @media (max-width: 500px) {
    height: 350px;
  }

  @media (max-width: 400px) {
    height: 250px;
  }
`;

export const Description = styled.div`
  width: 40%;

  @media (max-width: 1000px) {
    margin: 0 auto;
    width: 90%;
  }
`;
