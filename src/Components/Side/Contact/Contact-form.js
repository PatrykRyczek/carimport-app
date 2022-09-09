import React from "react";
import { Container, Header, Form } from "./Contact.styles";

function Contactform() {
  return (
    <Container>
      <Header>
        <h1>Napisz do nas!</h1>
      </Header>
      <Form>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Imię i nazwisko"
            required
          />
          <br />
          <input type="email" name="email" placeholder="E-mail" required />
          <br />
          <input type="text" name="topic" placeholder="Temat" required />
          <br />
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
            minlength="9"
            maxlength="9"
            placeholder="Numer Telefonu"
            required
          />
          <br />
          <textarea
            name="your-message"
            placeholder="Treść wiadomości"
            cols="60"
            rows="10"
            required
          />
          <br />
          <input type="checkbox" id="terms" name="terms" required />
          <label for="terms">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
            kontaktu w sprawie złożonego zapytania.Lorem, ipsum dolor sit amet
            consectetur adipisicing elit.
          </label>
          <br />
          <input type="submit" name="submit" value="Wyślij" />
        </form>
      </Form>
    </Container>
  );
}

export default Contactform;
