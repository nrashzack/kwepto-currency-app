import React from "react";
import { HeaderStyled } from "../styles/Main.styled";
import { ListHeaderStyled } from "../styles/CoinList.styled";
import CoinList from "../components/CoinList";

const PriceTracker = ({ coins }) => {
  return (
    <div>
      <HeaderStyled>
        <h1>Crypto Price Tracker</h1>
        <p>Get the latest crypto prices.</p>
      </HeaderStyled>
      <ListHeaderStyled>
        <h3>#</h3>
        <h3>Name</h3>
        <h3>Price</h3>
        <h3>24hr%</h3>
        <h3>Market Cap</h3>
      </ListHeaderStyled>
      {coins.map((coin) => (
        <CoinList key={coin.market_cap_rank} coin={coin} />
      ))}
    </div>
  );
};

export default PriceTracker;
