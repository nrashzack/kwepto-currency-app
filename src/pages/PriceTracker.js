import React, { useState } from "react";

import {
  CardStyled,
  HeaderStyled,
  LoadingScreenStyled,
} from "../styles/Main.styled";
import {
  ListHeaderStyled,
  CoinInfoStyled,
  FilterCoinListContainerStyled,
  PageNumberFooterStyled,
  SearchBarStyled,
} from "../styles/CoinList.styled";
import NowTrending from "./NowTrending";
import CoinList from "../components/CoinList";
import FilterCoinList from "../components/FilterCoinList";

const PriceTracker = ({
  loading,
  coins,
  trend,
  page,
  currency,
  setCurrency,
  setPage,
}) => {
  if (loading) {
    return (
      <LoadingScreenStyled>
        <h1>Loading...</h1>
      </LoadingScreenStyled>
    );
  }

  const NextPage = () => {
    setPage((page) => page + 1);
  };

  const PreviosPage = () => {
    setPage((page) => page - 1);
  };
  
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
      <CardStyled>
        <ListHeaderStyled>
          <strong className="center">#</strong>
          <CoinInfoStyled>
            <strong>Name</strong>
          </CoinInfoStyled>
          <strong className="center">Price</strong>
          <strong>24hr</strong>
          <strong>7d</strong>
          <strong className="center">Market Cap</strong>
        </ListHeaderStyled>
        {filteredCoins.map((coin) => (
        <CoinList key={coin.market_cap_rank} coin={coin} currency={currency} />
      ))}
        <PageNumberFooterStyled>
          {page > 1 ? (
            <button onClick={PreviosPage}>Previos</button>
          ) : (
            <div></div>
          )}
          <p>Page: {page}</p>
          {page < 10 ? <button onClick={NextPage}>Next</button> : <div></div>}
        </PageNumberFooterStyled>
      </CardStyled>
    </div>
  );
};

export default PriceTracker;
