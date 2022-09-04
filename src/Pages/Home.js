import React from "react";
import { Mid } from "../Components/Mid/Mid";
import { Offers } from "../Components/Offers/Offers";
import { Info } from "../Components/Info/Info";

function Home() {
  return (
    <div className="Home">
      <Mid />
      <Offers />
      <Info />
    </div>
  );
}

export default Home;
