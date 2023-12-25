// import React from 'react'
import "./style.scss";
import HeroBanner from "./heroBanner/heroBanner";
import Tranding from "./Tranding/tranding";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";

function Home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Tranding />
      <Popular />
      <TopRated />
    </div>
  );
}

export default Home;
