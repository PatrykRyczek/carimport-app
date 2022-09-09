import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const api = "http://api.nbp.pl/api/exchangerates/rates/c/usd/?format=json";

function Calculator() {
  const [usd, setUsd] = useState([]);
  const [engine, setEngine] = useState({
    engine: 0,
  });

  axios
    .get(api)
    .then(function (response) {
      setUsd(response.data.rates[0].ask);
    })
    .catch(function (error) {
      console.log(error);
    });

  const [selectedOption, setSelectedOption] = useState({
    selectedValue: 0,
    shipment: 0,
  });

  const handleChangeSelectOption = (e) => {
    const idx = e.target.selectedIndex;
    const option = e.target.querySelectorAll("option")[idx];
    const color = option.getAttribute("data-shipment");
    const value = e.target.value;

    setSelectedOption({ selectedValue: value, shipment: color });
  };

  const [inputValue, setInputValue] = useState({ inputValue: 0 });

  const handleChangeInput = (e) => {
    const value = e.target.value;

    setInputValue(value);
  };

  const auctionCost = Math.round(parseInt(inputValue) * 0.08);

  const sum =
    parseInt(selectedOption.selectedValue) +
    parseInt(selectedOption.shipment) +
    500 +
    parseInt(inputValue) +
    parseInt(auctionCost);

  const celna = parseInt(inputValue) * 0.33 + 450 * parseInt(usd);

  const tax = (parseInt(engine) / 100) * parseInt(usd) * parseInt(inputValue);

  const maxCost = sum * usd + celna + tax;

  return (
    <Container>
      <Left>
        <div className="content">
          <h1> Kalkulator opłat</h1>
          <div className="row">
            <strong>Podaj cene auta w USD</strong>
            <input
              type="number"
              name="car-price"
              onChange={handleChangeInput}
            />
          </div>
          <div className="row">
            <strong>Koszty aukcyjne (około)</strong>
            <span name="auction-cost">
              {isNaN(auctionCost) ? 0 : auctionCost}$
            </span>
          </div>
          <div className="row">
            <strong>
              Wybierz stan, w którym znajduje się Twoje wymarzone auto
            </strong>
            <select name="usa-state" onChange={handleChangeSelectOption}>
              <option selected="" value="0" data-i="0">
                wybierz...
              </option>
              <option value="800" data-shipment="850" data-i="1">
                Alabama AL
              </option>
              <option value="1250" data-shipment="1200" data-i="1">
                Arizona AZ
              </option>
              <option value="850" data-shipment="850" data-i="1">
                Arkansas AR
              </option>
              <option value="400" data-shipment="750" data-i="1">
                Connecticut CT
              </option>
              <option value="1250" data-shipment="1200" data-i="1">
                Dakota Południowa SD
              </option>
              <option value="1000" data-shipment="900" data-i="1">
                Dakota Północna ND
              </option>
              <option value="400" data-shipment="750" data-i="1">
                Delaware DE
              </option>
              <option value="900" data-shipment="1000" data-i="1">
                MIAMI / Floryda FL
              </option>
              <option value="800" data-shipment="850" data-i="1">
                Georgia GA
              </option>
              <option value="1250" data-shipment="1200" data-i="1">
                Idaho ID
              </option>
              <option value="700" data-shipment="750" data-i="1">
                Illinois IL
              </option>
              <option value="700" data-shipment="750" data-i="1">
                Indiana IN
              </option>
              <option value="850" data-shipment="900" data-i="1">
                Iowa IA
              </option>
              <option value="1350" data-shipment="1200" data-i="1">
                Kalifornia CA
              </option>
              <option value="950" data-shipment="750" data-i="1">
                Kansas KS
              </option>
              <option value="700" data-shipment="850" data-i="1">
                Karolina Południowa SC
              </option>
              <option value="650" data-shipment="850" data-i="1">
                Karolina Północna NC
              </option>
              <option value="700" data-shipment="750" data-i="1">
                Kentucky KY
              </option>
              <option value="1150" data-shipment="900" data-i="1">
                Kolorado CO
              </option>
              <option value="1350" data-shipment="1400" data-i="1">
                Los Angeles
              </option>
              <option value="900" data-shipment="900" data-i="1">
                Luizjana LA
              </option>
              <option value="600" data-shipment="750" data-i="1">
                Maine ME
              </option>
              <option value="400" data-shipment="750" data-i="1">
                Maryland MD
              </option>
              <option value="450" data-shipment="750" data-i="1">
                Massachusetts MA
              </option>
              <option value="700" data-shipment="750" data-i="1">
                Michigan MI
              </option>
              <option value="850" data-shipment="900" data-i="1">
                Minnesota MN
              </option>
              <option value="850" data-shipment="900" data-i="1">
                Missisipi MS
              </option>
              <option value="900" data-shipment="900" data-i="1">
                Missouri MO
              </option>
              <option value="1250" data-shipment="1200" data-i="1">
                Montana MT
              </option>
              <option value="900" data-shipment="1200" data-i="1">
                Nebraska NE
              </option>
              <option value="1250" data-shipment="1200" data-i="1">
                Nevada NV
              </option>
              <option value="550" data-shipment="750" data-i="1">
                New Hampshire NH
              </option>
              <option value="350" data-shipment="900" data-i="1">
                New Jersey NJ
              </option>
              <option value="375" data-shipment="900" data-i="1">
                Nowy Jork NY
              </option>
              <option value="1100" data-shipment="1200" data-i="1">
                Nowy Meksyk NM
              </option>
              <option value="650" data-shipment="750" data-i="1">
                Ohio OH
              </option>
              <option value="950" data-shipment="900" data-i="1">
                Oklahoma OK
              </option>
              <option value="1450" data-shipment="1200" data-i="1">
                Oregon OR
              </option>
              <option value="500" data-shipment="750" data-i="1">
                Pensylwania PA
              </option>
              <option value="850" data-shipment="1150" data-i="1">
                Teksas TX
              </option>
              <option value="750" data-shipment="900" data-i="1">
                Tennessee TN
              </option>
              <option value="1150" data-shipment="1200" data-i="1">
                Utah UT
              </option>
              <option value="600" data-shipment="750" data-i="1">
                Vermont VT
              </option>
              <option value="1350" data-shipment="1200" data-i="1">
                Waszyngton WA
              </option>
              <option value="600" data-shipment="750" data-i="1">
                Wirginia VA
              </option>
              <option value="650" data-shipment="750" data-i="1">
                Wirginia Zachodnia WV
              </option>
              <option value="850" data-shipment="750" data-i="1">
                Wisconsin WI
              </option>
            </select>
          </div>
          <div className="row">
            <strong>Koszt transportu do portu w USA</strong>
            <span name="transport-usa-port">
              {selectedOption.selectedValue}$
            </span>
          </div>
          <div className="row">
            <strong>Koszt transportu z USA do portu w Gdyni</strong>
            <span name="transport-gdynia">{selectedOption.shipment}$</span>
          </div>
          <div className="row">
            <strong>Nasza prowizja</strong>
            <span>$500</span>
          </div>
          <div className="row">
            <strong>Suma bez odprawy celnej </strong>
            <span name="price"> {isNaN(sum) ? 0 : sum}$</span>
          </div>
        </div>
      </Left>
      <Right>
        <Up>
          <div className="up-content">
            <h1>Kalkulator akcyzy</h1>
            <strong>Podaj pojemność silnika</strong>
            <br />
            <input
              type="radio"
              name="engine"
              value="3.1"
              onChange={(e) => setEngine(e.target.value)}
            />
            <label for="below"> Silnik poniżej 2.0L akcyza 3.1%</label>
            <br />
            <input
              type="radio"
              name="engine"
              value="18.6"
              onChange={(e) => setEngine(e.target.value)}
            />
            <label for="above"> Silnik powyżej 2.0L akcyza 18.6%</label>
            <br />
            <strong>
              Szacowana akcyza:{" "}
              {isNaN(tax) ? "Podaj wartość auta w USD" : tax + " PLN"}
            </strong>
            <hr />
            <p>
              Gdy samochód dopłynie do Europy i zostanie rozładowany oraz oclony
              tą kwotę należy wpłacić na podstawie faktury do Agencji Celnej.
              10% cło , 23% vat odraz opłata dla agencji celnej 450$.
            </p>
            <strong>Kwota opłaty celnej: {isNaN(celna) ? 0 : celna} PLN</strong>
          </div>
        </Up>
        <Down>
          <h1>Łączny koszt</h1>
          <span>{isNaN(maxCost) ? 0 : maxCost} PLN</span>
          <h3>Chcesz otrzymać szczegółową wycene?</h3>
          <p>Skontaktuj się z nami drogą mailową</p>
          <Link to="/kontakt">
            <button>Kontakt</button>
          </Link>
        </Down>
      </Right>
    </Container>
  );
}

export default Calculator;

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
`;

const Left = styled.div`
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
`;

const Right = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
  width: 30%;
`;

const Up = styled.div`
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
`;

const Down = styled.div`
  background-color: #ffa351ff;
  height: 25vh;
  width: 100%;
  border-radius: 20%;

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
`;
