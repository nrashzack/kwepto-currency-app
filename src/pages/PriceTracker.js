import React, { useState } from "react";
import {
  CardStyled,
  HeaderStyled,
  LoadingScreenStyled,
  SectionStyled,
} from "../styles/Main.styled";
import { CoinTableStyled, PageNumberStyled } from "../styles/CoinList.styled";
import Trending from "../components/Trending";
import CoinList from "../components/CoinList";
import FilterCoinList from "../components/FilterCoinList";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const PriceTracker = ({ loading, coins, currency, rate, setCurrency }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const coinsPerPage = 10;
  const pagesVisited = pageNumber * coinsPerPage;
  const pageCount = Math.ceil(coins.length / coinsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (loading) {
    return (
      <LoadingScreenStyled>
        <h1>Loading...</h1>
      </LoadingScreenStyled>
    );
  }

  return (
    <>
      <Banner />
      <Trending rate={rate} />
      <SectionStyled>
        <HeaderStyled>
          <h1>CRYPTOCURRENCIES</h1>
          <p>Today's Cryptocurrency Prices by Market Cap</p>
        </HeaderStyled>
        <FilterCoinList
          rate={rate}
          currency={currency}
          setCurrency={setCurrency}
        />
        <CardStyled>
          <CoinTableStyled>
            <thead>
              <tr>
                <th className="rank">
                  <strong>#</strong>
                </th>
                <th className="coin-name">
                  <strong>Name</strong>
                </th>
                <th>
                  <strong>Price</strong>
                </th>
                <th className="percentage">
                  <strong>24hr</strong>
                </th>
                <th className="percentage visible">
                  <strong>7d</strong>
                </th>
                <th>
                  <strong>Market Cap</strong>
                </th>
              </tr>
            </thead>
            {coins
              .slice(pagesVisited, pagesVisited + coinsPerPage)
              .map((coin) => {
                return (
                  <Link to={`/${coin.id}`}>
                    <CoinList key={coin.id} coin={coin} currency={currency} />
                  </Link>
                );
              })}
          </CoinTableStyled>
        </CardStyled>
        <SectionStyled>
          <PageNumberStyled
            previousLabel={<RiArrowLeftSFill />}
            nextLabel={<RiArrowRightSFill />}
            pageCount={pageCount}
            onPageChange={changePage}
            pageRangeDisplayed="10"
          />
        </SectionStyled>
      </SectionStyled>
    </>
  );
};

export default PriceTracker;
