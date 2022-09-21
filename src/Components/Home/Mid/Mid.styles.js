import styled from "styled-components";
import img from "../../../images/mid-photo.png";
import imgS from "../../../images/mid-photo-s.png";

export const Container = styled.div`
  background-color: #50d8d7;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  background-image: url(${img});

  @media (max-width: 1200px) {
    background-image: url(${imgS});
    background-position: center bottom;
    background-size: 80%;
    height: 75vh;
  }

  @media (max-width: 800px) {
    background-size: 75%;
    height: 65vh;
  }

  @media (max-width: 700px) {
    background-size: 80%;
    height: 60vh;
  }

  @media (max-width: 600px) {
    background-size: 100%;
    height: 50vh;
  }

  @media (max-width: 600px) {
    background-size: 100%;
    height: 60vh;
  }

  @media (max-width: 500px) {
    background-size: 100%;
    height: 55vh;
  }

  @media (max-width: 400px) {
    height: 45vh;
  }
`;
export const Motto = styled.div`
  text-align: left;
  position: absolute;
  right: 5%;
  top: 10%;

  h1 {
    font-size: 50px;
    text-transform: uppercase;
    color: #aa0018;
  }

  @media (max-width: 1200px) {
    h1 {
      margin-top: 0;
      font-size: 22px;
    }

    h2 {
      font-size: 18px;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      margin-top: 25px;
      font-size: 24px;
    }

    h2 {
      font-size: 20px;
    }
  }
  @media (max-width: 800px) {
    position: static;
    text-align: center;
  }

  @media (max-width: 600px) {
    h1 {
      margin-top: 25px;
      font-size: 24px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;
