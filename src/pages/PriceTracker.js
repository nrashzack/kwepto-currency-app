import React from "react";
import { HeaderStyled } from "../styles/Main.styled";
import CoinList from "../components/CoinList";

const PriceTracker = ({ coins }) => {
  return (
    <div>
      <HeaderStyled>
        <h1>Crypto Price Tracker</h1>
        <p>Get the latest crypto prices.</p>
      </HeaderStyled>
      {coins.map((coin) => (
        <CoinList key={coin.market_cap_rank} coin={coin} />
      ))}
    </div>
  );
};

export default PriceTracker;
