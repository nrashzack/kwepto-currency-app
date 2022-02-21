import React, { useState } from "react";
import { HeaderStyled } from "../styles/Main.styled";
import {
  ListHeaderStyled,
  CoinInfoStyled,
  CenterCoinStyled,
  FilterCoinListContainerStyled,
  SearchBarStyled,
} from "../styles/CoinList.styled";
import NowTrending from "./NowTrending";
import CoinList from "../components/CoinList";
import FilterCoinList from "../components/FilterCoinList";

const PriceTracker = ({ coins, trend, currency, setCurrency }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <NowTrending trend={trend} />
      <HeaderStyled>
        <h1>Crypto Price Tracker</h1>
        <p>Get the latest crypto prices.</p>
      </HeaderStyled>
      <SearchBarStyled>
        <input
          class="search-bar"
          placeholder="Search..."
          type="text"
          onChange={handleSearch}
        ></input>
      </SearchBarStyled>
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
      {filteredCoins.map((coin) => (
        <CoinList key={coin.market_cap_rank} coin={coin} currency={currency} />
      ))}
    </div>
  );
};

export default PriceTracker;
