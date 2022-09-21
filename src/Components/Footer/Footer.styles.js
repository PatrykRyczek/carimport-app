import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 25vh;
  background-color: #ffbe7bff;
  padding-top: 40px;
  flex-wrap: wrap;

  h2 {
    font-size: 14px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
  }

  h2 span {
    background: #ffbe7bff;
    padding: 0 5px;
  }

  ul {
    list-style-type: none;
  }

  li {
    text-align: justify;
    padding: 3px;
  }

  li strong {
    display: inline-block;
    margin-bottom: 5px;
  }

  @media (max-width: 1200px) {
    height: 30vh;
  }

  @media (max-width: 1000px) {
    height: 35vh;
  }

  @media (max-width: 800px) {
    height: 70vh;
  }

  @media (max-width: 400px) {
    height: 80vh;
  }
`;

export const Contact = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    width: 40%;
    margin: 0 auto;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    width: 50%;
  }

  @media (max-width: 400px) {
    width: 80%;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 20%;

  @media (max-width: 1000px) {
    width: 25%;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;

export const Bottom = styled.div`
  flex: 100%;
`;
