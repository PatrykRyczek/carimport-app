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
    background-size: 100%;
    height: 45vh;
  }
`;
export const Motto = styled.div`
  text-align: left;
  position: absolute;
  right: 5%;
  top: 15%;

  h1 {
    font-size: 50px;
    text-transform: uppercase;
    color: #aa0018;
  }

  @media (max-width: 1200px) {
    position: static;
    text-align: center;

    h1 {
      margin-top: 25px;
      font-size: 22px;
    }

    h2 {
      font-size: 18px;
    }
  }
`;
