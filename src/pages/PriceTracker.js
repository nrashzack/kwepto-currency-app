import React, { useState } from "react";

import {
  CardStyled,
  CenterEverythingStyled,
  HeaderStyled,
  LoadingScreenStyled,
  SectionStyled,
} from "../styles/Main.styled";
import {
  ListHeaderStyled,
  CoinInfoStyled,
  PageNumberStyled,
} from "../styles/CoinList.styled";
import NowTrending from "../components/NowTrending";
import CoinList from "../components/CoinList";
import FilterCoinList from "../components/FilterCoinList";
import { Link } from "react-router-dom";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const PriceTracker = ({ loading, coins, currency, setCurrency }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const coinsPerPage = 10;
  const pagesVisited = pageNumber * coinsPerPage;

  const displayCoins = coins
    .slice(pagesVisited, pagesVisited + coinsPerPage)
    .map((coin) => {
      return (
        <Link to={`/${coin.id}`}>
          <CoinList key={coin.id} coin={coin} currency={currency} />
        </Link>
      );
    });

  if (loading) {
    return (
      <LoadingScreenStyled>
        <h1>Loading...</h1>
      </LoadingScreenStyled>
    );
  }

  const pageCount = Math.ceil(coins.length / coinsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <NowTrending />
      <SectionStyled>
        <HeaderStyled>
          <h1>CRYPTOCURRENCIES</h1>
          <p>Today's Cryptocurrency Prices by Market Cap</p>
        </HeaderStyled>
        <FilterCoinList setCurrency={setCurrency} />
        <CardStyled>
          <CenterEverythingStyled>
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
            {displayCoins}
          </CenterEverythingStyled>
        </CardStyled>
        <SectionStyled>
          <PageNumberStyled
            previousLabel={<RiArrowLeftSFill />}
            nextLabel={<RiArrowRightSFill />}
            pageCount={pageCount}
            onPageChange={changePage}
          />
        </SectionStyled>
      </SectionStyled>
    </>
  );
};

export default PriceTracker;
