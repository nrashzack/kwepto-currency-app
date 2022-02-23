import React from "react";

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
} from "../styles/CoinList.styled";
import NowTrending from "../components/NowTrending";
import CoinList from "../components/CoinList";
import FilterCoinList from "../components/FilterCoinList";
import { Link } from "react-router-dom";
import CoinPage from "./CoinPage";

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
    <>
      <NowTrending />
      <HeaderStyled>
        <h1>Crypto Price Tracker</h1>
        <p>Get the latest crypto prices.</p>
      </HeaderStyled>
      <FilterCoinList setCurrency={setCurrency} />
      <SectionStyled>
        <CardStyled>
          <ListHeaderStyled>
            <strong className="center">#</strong>
            <CoinInfoStyled>
              <strong>Name</strong>
            </CoinInfoStyled>
            <strong>Price</strong>
            <strong>24hr</strong>
            <strong className="visibility">7d</strong>
            <strong>Market Cap</strong>
          </ListHeaderStyled>
          {coins.map((coin) => (
            <Link to={`/${coin.id}`} element={<CoinPage />}>
              <CoinList
                key={coin.market_cap_rank}
                coin={coin}
                currency={currency}
              />
            </Link>
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
