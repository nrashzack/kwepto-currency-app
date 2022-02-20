import React from "react";
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
} from "../styles/CoinList.styled";
import CoinList from "../components/CoinList";
import FilterCoinList from "../components/FilterCoinList";

const PriceTracker = ({
  loading,
  coins,
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
  return (
    <div>
      <HeaderStyled>
        <h1>Crypto Price Tracker</h1>
        <p>Get the latest crypto prices.</p>
      </HeaderStyled>
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
        {coins.map((coin) => (
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
    </div>
  );
};

export default PriceTracker;
