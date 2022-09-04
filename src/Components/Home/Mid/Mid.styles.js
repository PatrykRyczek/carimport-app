import styled from "styled-components";
import img from "../../../images/mid-photo.png";

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
`;
