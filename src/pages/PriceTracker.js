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
  PageNumberStyled,
} from "../styles/CoinList.styled";
import NowTrending from "../components/NowTrending";
import CoinList from "../components/CoinList";
import FilterCoinList from "../components/FilterCoinList";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const PriceTracker = ({ loading, coins, currency, setCurrency }) => {
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
      <NowTrending />
      <SectionStyled>
        <HeaderStyled>
          <h1>CRYPTOCURRENCIES</h1>
          <p>Today's Cryptocurrency Prices by Market Cap</p>
        </HeaderStyled>
        <FilterCoinList currency={currency} setCurrency={setCurrency} />
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
          {coins
            .slice(pagesVisited, pagesVisited + coinsPerPage)
            .map((coin) => {
              return (
                <Link to={`/${coin.id}`}>
                  <CoinList key={coin.id} coin={coin} currency={currency} />
                </Link>
              );
            })}
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
