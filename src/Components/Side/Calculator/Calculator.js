import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Left, Right, Up, Down } from "./Calculator.styles";

const api = "http://api.nbp.pl/api/exchangerates/rates/c/usd/?format=json";

function Calculator() {
  const [usd, setUsd] = useState([]);
  const [engine, setEngine] = useState([]);

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
    const price = option.getAttribute("data-shipment");
    const value = e.target.value;

    setSelectedOption({ selectedValue: value, shipment: price });
  };

  const [inputValue, setInputValue] = useState({ inputValue: 0 });

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleChangeRadioOption = (e) => {
    const value = e.target.value;
    setEngine(value);
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
              <option selected="" value="0">
                wybierz...
              </option>
              <option value="800" data-shipment="850">
                Alabama AL
              </option>
              <option value="1250" data-shipment="1200">
                Arizona AZ
              </option>
              <option value="850" data-shipment="850">
                Arkansas AR
              </option>
              <option value="400" data-shipment="750">
                Connecticut CT
              </option>
              <option value="1250" data-shipment="1200">
                Dakota Południowa SD
              </option>
              <option value="1000" data-shipment="900">
                Dakota Północna ND
              </option>
              <option value="400" data-shipment="750">
                Delaware DE
              </option>
              <option value="900" data-shipment="1000">
                MIAMI / Floryda FL
              </option>
              <option value="800" data-shipment="850">
                Georgia GA
              </option>
              <option value="1250" data-shipment="1200">
                Idaho ID
              </option>
              <option value="700" data-shipment="750">
                Illinois IL
              </option>
              <option value="700" data-shipment="750">
                Indiana IN
              </option>
              <option value="850" data-shipment="900">
                Iowa IA
              </option>
              <option value="1350" data-shipment="1200">
                Kalifornia CA
              </option>
              <option value="950" data-shipment="750">
                Kansas KS
              </option>
              <option value="700" data-shipment="850">
                Karolina Południowa SC
              </option>
              <option value="650" data-shipment="850">
                Karolina Północna NC
              </option>
              <option value="700" data-shipment="750">
                Kentucky KY
              </option>
              <option value="1150" data-shipment="900">
                Kolorado CO
              </option>
              <option value="1350" data-shipment="1400">
                Los Angeles
              </option>
              <option value="900" data-shipment="900">
                Luizjana LA
              </option>
              <option value="600" data-shipment="750">
                Maine ME
              </option>
              <option value="400" data-shipment="750">
                Maryland MD
              </option>
              <option value="450" data-shipment="750">
                Massachusetts MA
              </option>
              <option value="700" data-shipment="750">
                Michigan MI
              </option>
              <option value="850" data-shipment="900">
                Minnesota MN
              </option>
              <option value="850" data-shipment="900">
                Missisipi MS
              </option>
              <option value="900" data-shipment="900">
                Missouri MO
              </option>
              <option value="1250" data-shipment="1200">
                Montana MT
              </option>
              <option value="900" data-shipment="1200">
                Nebraska NE
              </option>
              <option value="1250" data-shipment="1200">
                Nevada NV
              </option>
              <option value="550" data-shipment="750">
                New Hampshire NH
              </option>
              <option value="350" data-shipment="900">
                New Jersey NJ
              </option>
              <option value="375" data-shipment="900">
                Nowy Jork NY
              </option>
              <option value="1100" data-shipment="1200">
                Nowy Meksyk NM
              </option>
              <option value="650" data-shipment="750">
                Ohio OH
              </option>
              <option value="950" data-shipment="900">
                Oklahoma OK
              </option>
              <option value="1450" data-shipment="1200">
                Oregon OR
              </option>
              <option value="500" data-shipment="750">
                Pensylwania PA
              </option>
              <option value="850" data-shipment="1150">
                Teksas TX
              </option>
              <option value="750" data-shipment="900">
                Tennessee TN
              </option>
              <option value="1150" data-shipment="1200">
                Utah UT
              </option>
              <option value="600" data-shipment="750">
                Vermont VT
              </option>
              <option value="1350" data-shipment="1200">
                Waszyngton WA
              </option>
              <option value="600" data-shipment="750">
                Wirginia VA
              </option>
              <option value="650" data-shipment="750">
                Wirginia Zachodnia WV
              </option>
              <option value="850" data-shipment="750">
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
              onChange={handleChangeRadioOption}
            />
            <label for="below"> Silnik poniżej 2.0L akcyza 3.1%</label>
            <br />
            <input
              type="radio"
              name="engine"
              value="18.6"
              onChange={handleChangeRadioOption}
            />
            <label for="above"> Silnik powyżej 2.0L akcyza 18.6%</label>
            <br />
            <strong>
              Szacowana akcyza:{" "}
              {isNaN(tax)
                ? "Podaj wartość auta w USD"
                : Math.round(tax) + " PLN"}
            </strong>
            <hr />
            <p>
              Gdy samochód dopłynie do Europy i zostanie rozładowany oraz oclony
              tą kwotę należy wpłacić na podstawie faktury do Agencji Celnej.
              10% cło , 23% vat oraz opłata dla agencji celnej 450$.
            </p>
            <strong>
              Kwota opłaty celnej: {isNaN(celna) ? 0 : Math.round(celna)} PLN
            </strong>
          </div>
        </Up>
        <Down>
          <h1>Łączny koszt</h1>
          <span>{isNaN(maxCost) ? 0 : Math.round(maxCost)} PLN</span>
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
