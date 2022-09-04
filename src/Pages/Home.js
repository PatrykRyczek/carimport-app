import React from "react";
import { Mid } from "../Components/Home/Mid/Mid";
import { Offers } from "../Components/Home/Offers/Offers";
import { Info } from "../Components/Home/Info/Info";

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
