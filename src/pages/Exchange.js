import React, { useState } from "react";
import {
  HeaderStyled,
  LoadingScreenStyled,
  SectionStyled,
} from "../styles/Main.styled";
import {
  ExchangeBannerStyled,
  ExchangeContainerStyled,
} from "../styles/ExchangeList.styled";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import ExchangeList from "../components/ExchangeList";
import ExchangeBanner from "../assets/ExchangeBanner.svg";
import ReactPaginate from "react-paginate";
import { CurrencyPageStyled } from "../styles/CoinCard.styled";

function Exchange({ loading, exchanges }) {
  const [pageNumber, setPageNumber] = useState(0);
  const exchangesPerPage = 10;
  const pagesVisited = pageNumber * exchangesPerPage;
  const pageCount = Math.ceil(exchanges?.length / exchangesPerPage);

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
      <SectionStyled>
        <HeaderStyled>
          <ExchangeBannerStyled>
            <img src={ExchangeBanner} alt="Exchange Banner" />
          </ExchangeBannerStyled>
          <h1>EXCHANGES</h1>
          <p>Top Exchanges ranked by trading volume</p>
        </HeaderStyled>
        <ExchangeContainerStyled>
          {exchanges
            ?.slice(pagesVisited, pagesVisited + exchangesPerPage)
            ?.map((exchange) => {
              return <ExchangeList key={exchange?.id} exchange={exchange} />;
            })}
        </ExchangeContainerStyled>
        <CurrencyPageStyled>
          <ReactPaginate
            previousLabel={<RiArrowLeftSFill />}
            nextLabel={<RiArrowRightSFill />}
            pageCount={pageCount}
            onPageChange={changePage}
            pageRangeDisplayed="10"
            containerClassName={"paginate-container"}
            previousLinkClassName={"paginate-prev"}
            nextLinkClassName={"paginate-next"}
            disabledClassName={"paginate-disable"}
            activeClassName={"paginate-active"}
          />
        </CurrencyPageStyled>
      </SectionStyled>
    </>
  );
}

export default Exchange;
