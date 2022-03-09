import React, { useState } from "react";
import {
  HeaderStyled,
  LoadingScreenStyled,
  SectionStyled,
} from "../styles/Main.styled";
import {
  TableContainerStyled,
  CoinTableStyled,
  PageNumberStyled,
} from "../styles/CoinList.styled";
import Trending from "../components/Trending";
import CoinList from "../components/CoinList";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
// import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const PriceTracker = ({ loading, coins, currency }) => {
  // const [pageNumber, setPageNumber] = useState(0);
  // const coinsPerPage = 10;
  // const pagesVisited = pageNumber * coinsPerPage;
  // const pageCount = Math.ceil(coins.length / coinsPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

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
      <Trending />
      <SectionStyled>
        <HeaderStyled>
          <h1>CRYPTOCURRENCIES</h1>
          <p>Today's Cryptocurrency Prices by Market Cap</p>
        </HeaderStyled>
        <TableContainerStyled>
          <CoinTableStyled>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>
                  <strong>Name</strong>
                </th>
                <th>
                  <strong>Price</strong>
                </th>
                <th className="percentage">
                  <strong>24hr</strong>
                </th>
                <th className="visible">
                  <strong>Mkt Cap</strong>
                </th>
              </tr>
            </thead>
            {coins
              // .slice(pagesVisited, pagesVisited + coinsPerPage)
              .map((coin) => {
                return (
                  <Link to={`/${coin.id}`}>
                    <CoinList
                      key={coin.market_cap_rank}
                      coin={coin}
                      currency={currency}
                    />
                  </Link>
                );
              })}
            <tfoot>
              <tr>
                {/* <PageNumberStyled
                  previousLabel={<RiArrowLeftSFill />}
                  nextLabel={<RiArrowRightSFill />}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  pageRangeDisplayed="5"
                /> */}
              </tr>
              <button>
                <p>View More</p>
              </button>
            </tfoot>
          </CoinTableStyled>
        </TableContainerStyled>
      </SectionStyled>
    </>
  );
};

export default PriceTracker;
