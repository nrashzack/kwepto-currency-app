import React, { useState } from "react";

import {
  CardStyled,
  HeaderStyled,
  LoadingScreenStyled,
  SectionStyled,
} from "../styles/Main.styled";
import {
  ListHeaderStyled,
  CoinInfoStyled,
  FilterCoinListContainerStyled,
  PageNumberFooterStyled,
  SearchBarStyled,
  SearchStyled,
  FilterSearchContainer,
  BannerStyled,
} from "../styles/CoinList.styled";
import NowTrending from "../components/NowTrending";
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
  const [search, setSearch] = useState("");

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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      {/* <BannerStyled>
          <h1>hello</h1>
        </BannerStyled> */}
      <NowTrending trend={trend} />
      <HeaderStyled>
        <h1>Crypto Price Tracker</h1>
        <p>Get the latest crypto prices.</p>
      </HeaderStyled>
      <FilterSearchContainer>
        <FilterCoinListContainerStyled>
          <FilterCoinList setCurrency={setCurrency} />
        </FilterCoinListContainerStyled>
        <SearchStyled>
          <SearchBarStyled>
            <input
              class="search-bar"
              placeholder="Search..."
              type="text"
              onChange={handleSearch}
            ></input>
          </SearchBarStyled>
        </SearchStyled>
      </FilterSearchContainer>
      <SectionStyled>
        <CardStyled>
          <ListHeaderStyled>
            <strong className="center">#</strong>
            <CoinInfoStyled>
              <strong>Name</strong>
            </CoinInfoStyled>
            <strong>Price</strong>
            <strong>24hr</strong>
            <strong>7d</strong>
            <strong>Market Cap</strong>
          </ListHeaderStyled>
          {filteredCoins.map((coin) => (
            <CoinList
              key={coin.market_cap_rank}
              coin={coin}
              currency={currency}
            />
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
      </SectionStyled>
    </>
  );
};

export default PriceTracker;
