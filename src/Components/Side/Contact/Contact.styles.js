import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  display: flex;
  height: 80vh;
  background-color: antiquewhite;
`;

export const Header = styled.div`
  padding-top: 50px;
  width: 100%;
`;

export const Form = styled.div`
  max-width: 30%;

  input,
  textarea {
    margin: 10px 0;
    padding: 10px 5px;
    width: 100%;
  }
  textarea {
    resize: none;
  }

  input[type="checkbox"] {
    display: inline-block;
    width: 15px;
    margin-right: 5px;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"] {
    background-color: antiquewhite;
    outline: 0;
    border-width: 0 0 2px;
    border-color: black;
  }

  input[type="submit"] {
    cursor: pointer;
    font-size: 18px;

    background-color: white;
    color: black;
    text-transform: uppercase;
    width: 50%;
    transition: 0.3s;
  }
  input[type="submit"]:hover {
    color: white;
    background-color: black;
  }
`;