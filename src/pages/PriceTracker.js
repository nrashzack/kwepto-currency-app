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
import ReactPaginate from "react-paginate";
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
      <HeaderStyled>
        <h1>Crypto Price Tracker</h1>
        <p>Get the latest crypto prices.</p>
      </HeaderStyled>
      <FilterCoinList setCurrency={setCurrency} />
      <SectionStyled>
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
        <CenterEverythingStyled>
          <SectionStyled>
            <ReactPaginate
              previousLabel={<RiArrowLeftSFill />}
              nextLabel={<RiArrowRightSFill />}
              pageCount={pageCount}
              onPageChange={changePage}
              className={<PageNumberStyled />}
            />
          </SectionStyled>
        </CenterEverythingStyled>
      </SectionStyled>
    </>
  );
};

export default PriceTracker;
