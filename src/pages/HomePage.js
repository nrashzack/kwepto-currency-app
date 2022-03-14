import React from "react";
import Trending from "../components/Trending";
import Banner from "../components/Banner";
import MarketData from "../components/MarketData";

const HomePage = ({ coins, formatCurrency }) => {
  return (
    <>
      <Banner />
      {/* <Trending /> */}
      <MarketData coins={coins} formatCurrency={formatCurrency} />
    </>
  );
};

export default HomePage;
