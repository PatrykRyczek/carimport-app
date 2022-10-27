import React from "react";
import { Container, Infobox, Header, Contact } from "./Service.styles";
import { Link } from "react-router-dom";

function Servicebody() {
  return (
    <Container>
      <Header>
        <h1>Nasze usługi</h1>
      </Header>
      <Infobox>
        <h3>Sprowadzenia auta z usa lub kanady</h3>
        <p>
          Jesteśmy jednym z wiodących na polskim rynku importerów aut, motocykli
          i quadów z terenu USA oraz Kanady. Za pośrednictwem naszej strony
          internetowej otrzymasz kompleksową pomoc w sprowadzeniu samochodu ze
          Stanów Zjednoczonych.
        </p>
      </Infobox>
      <Infobox>
        <h3>Transport auta pod dom</h3>
        <p>
          Przy wyborze naszej firmy masz możliwość odebrać pojazd bez wychodzenia z domu! Wystarczy ,że wybierzesz opcje z dostarczeniem pojazdu pod dom. Dostarczymy twoje wymarzone auto pod wskazany adres, a Ty będziesz mógł sie nim cieszyć bez martwienia się jak je przetransportować z portu.
        </p>
      </Infobox>
      <Infobox>
        <h3>Naprawa</h3>
        <p>
          W naszej ofercie jesteśmy w stanie zaoferować naprawę sprowadzonego auta w zaprzyjaźnionym serwisie mechanicznym. Przedstawimy Ci wycenę naprawy, otrzymasz faktury na wszystkie części i będziesz mógł odebrać już naprawiony pojazd ,którym będziesz mógł odrazu wyjechać na ulice!
        </p>
      </Infobox>
      <Contact>
        <Link to="/kontakt">
          <button>Kontakt</button>
        </Link>
      </Contact>
    </Container>
  );
}

export default Servicebody;
