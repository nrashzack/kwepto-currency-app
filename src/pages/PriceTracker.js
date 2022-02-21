import React from "react";
import { HeaderStyled } from "../styles/Main.styled";
import {
  ListHeaderStyled,
  CoinInfoStyled,
  CenterCoinStyled,
  FilterCoinListContainerStyled,
} from "../styles/CoinList.styled";
import NowTrending from "./NowTrending";
import CoinList from "../components/CoinList";
import FilterCoinList from "../components/FilterCoinList";

const PriceTracker = ({ coins, trend, currency, setCurrency }) => {
  return (
    <div>
      <NowTrending trend={trend} />
      <HeaderStyled>
        <h1>Crypto Price Tracker</h1>
        <p>Get the latest crypto prices.</p>
      </HeaderStyled>
      <FilterCoinListContainerStyled>
        <FilterCoinList setCurrency={setCurrency} />
      </FilterCoinListContainerStyled>
      <ListHeaderStyled>
        <CenterCoinStyled>
          <strong>#</strong>
        </CenterCoinStyled>
        <CoinInfoStyled>
          <strong>Name</strong>
        </CoinInfoStyled>
        <strong>Price</strong>
        <strong>1hr</strong>
        <strong>24hr</strong>
        <strong>7d</strong>
        <strong>Market Cap</strong>
      </ListHeaderStyled>
      {coins.map((coin) => (
        <CoinList key={coin.market_cap_rank} coin={coin} currency={currency} />
      ))}
    </div>
  );
};

export default PriceTracker;
