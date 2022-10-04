import styled from "styled-components";

export const Container = styled.div`
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  height: 90vh;
  background-color: antiquewhite;

  h1 {
    margin: 15px 0;
  }

  @media (max-width: 1400px) {
    height: 110vh;
  }

  @media (max-width: 1000px) {
    padding-top: 50px;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 160vh;
  }

  @media (max-width: 800px) {
    height: 175vh;
  }

  @media (max-width: 500px) {
    height: 200vh;
  }

  @media (max-width: 400px) {
    padding-top: 50px;
    height: 225vh;
  }
`;

export const Left = styled.div`
  background-color: #ffa351ff;
  text-align: center;
  height: 70vh;
  width: 30%;
  border-radius: 5%;

  .content {
    margin: auto;
    width: 80%;
  }

  .row:nth-last-of-type(1) {
    border: none;
  }
  .row:nth-last-of-type(1) strong {
    color: red;
    text-transform: uppercase;
  }

  .row {
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
    padding: 5px 5px;
    border-bottom: 1px solid black;
  }

  select {
    width: 100%;
    margin: 10px;
    padding: 10px;
  }

  input {
    max-width: 150px;
    padding: 5px 10px;
  }

  @media (max-width: 1400px) {
    height: 90vh;
    font-size: 16px;
  }

  @media (max-width: 1200px) {
    height: 100vh;
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    height: 75vh;
    width: 50%;
  }

  @media (max-width: 800px) {
    height: 80vh;
    width: 70%;
    font-size: 13px;
  }

  @media (max-width: 500px) {
    height: 95vh;
    font-size: 12px;
    width: 80%;
  }

  @media (max-width: 400px) {
    height: 120vh;
    font-size: 12px;
    width: 80%;
  }
`;

export const Right = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
  width: 30%;

  @media (max-width: 1400px) {
    height: 90vh;
    font-size: 16px;
  }

  @media (max-width: 1400px) {
    height: 100vh;
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    height: 80vh;
    justify-content: space-evenly;
    width: 50%;
  }

  @media (max-width: 800px) {
    width: 70%;
    height: 90vh;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    width: 80%;
  }

  @media (max-width: 400px) {
    height: 120vh;
    justify-content: space-evenly;
    font-size: 12px;
    width: 80%;
  }
`;

export const Up = styled.div`
  background-color: #ffa351ff;
  height: 40vh;
  width: 100%;
  border-radius: 5%;

  .up-content {
    width: 80%;
    margin: auto;
  }

  strong {
    display: inline-block;
    margin-bottom: 10px;
  }

  hr {
    border: 1px solid black;
  }

  input,
  p {
    margin: 10px 0;
  }

  @media (max-width: 1400px) {
    height: 50vh;
    font-size: 16px;
  }

  @media (max-width: 1200px) {
    height: 55vh;
    font-size: 15px;
  }

  @media (max-width: 1000px) {
    height: 40vh;
    font-size: 13px;
  }

  @media (max-width: 800px) {
    height: 45vh;
    font-size: 13px;
  }

  @media (max-width: 500px) {
    height: 50vh;
  }

  @media (max-width: 400px) {
    height: 60vh;
    font-size: 13px;
  }
`;

export const Down = styled.div`
  background-color: #ffa351ff;
  height: 25vh;
  width: 100%;
  border-radius: 5%;

  span {
    font-size: 24px;
  }

  h3 {
    margin: 10px 0;
  }

  button {
    text-transform: uppercase;
    background-color: rebeccapurple;
    color: white;
    width: 125px;
    margin: 10px 0;
    padding: 8px;
    transition: 0.3s;
  }

  button:hover {
    background-color: aquamarine;
    color: black;
  }

  @media (max-width: 1400px) {
    height: 35vh;
    font-size: 16px;
  }

  @media (max-width: 1400px) {
    padding: 10px 0;
    height: 35vh;
    font-size: 15px;
  }

  @media (max-width: 1000px) {
    height: 30vh;
    font-size: 13px;
  }

  @media (max-width: 500px) {
    height: 35vh;
  }
`;
