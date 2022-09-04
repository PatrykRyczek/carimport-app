import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 30vh;
  background-color: #ffbe7bff;
  padding-top: 40px;
  align-items: flex-start;
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
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 33%;
`;

export const Bottom = styled.div`
  flex: 100%;
`;
