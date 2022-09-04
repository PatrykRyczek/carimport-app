import React from "react";
import styled from "styled-components";

function Contactform() {
  return (
    <Container>
      <Header>
        <h1>Napisz do nas!</h1>
      </Header>
      <Form>
        <form>
          <input type="text" name="name" placeholder="Imię i nazwisko" />
          <br />
          <input type="email" name="email" placeholder="E-mail" />
          <br />
          <input type="text" name="topic" placeholder="Temat" />
          <br />
          <textarea
            name="your-message"
            placeholder="Treść wiadomości"
            cols="60"
            rows="10"
          />
          <br />
          <input type="checkbox" id="terms" name="terms" />
          <label for="terms">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
            kontaktu w sprawie złożonego zapytania.Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. cum.
          </label>
          <br />
          <input type="submit" name="submit" value="Wyślij" />
        </form>
      </Form>
    </Container>
  );
}

export default Contactform;

const Container = styled.div`
  margin: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  height: 80vh;
  background-color: antiquewhite;
`;

const Header = styled.div`
  padding-top: 50px;
  justify-content: center;
  width: 100%;
`;

const Form = styled.div`
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
  input[type="email"] {
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
