import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CoinCard from "../components/CoinCard";
import {
  SectionStyled,
  HeaderStyled,
  WrapperStyled,
} from "../styles/Main.styled";
import { ExchangeBannerStyled } from "../styles/ExchangeList.styled";
import {
  CryptoSearhStyled,
  CurrencyContainerStyled,
  CurrencyPageStyled,
} from "../styles/CoinCard.styled";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CurrencyImg from "../assets/CurrencyImg.svg";

const CurrencyPage = ({ coins, formatCurrency }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const coinsPerPage = 24;
  const pagesVisited = pageNumber * coinsPerPage;
  const pageCount = Math.ceil(coins.length / coinsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [search, setSearch] = useState("");
  let filterCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <WrapperStyled>
      <div data-aos="fade-up" data-aos-duration="1000">
        <SectionStyled>
          <HeaderStyled>
            <ExchangeBannerStyled>
              <img src={CurrencyImg} alt="currency" />
            </ExchangeBannerStyled>
            <h1>CRYPTOCURRENCIES</h1>
            <p>Today's Cryptocurrency Prices by Market Cap</p>
          </HeaderStyled>
        </SectionStyled>
        <SectionStyled>
          <CryptoSearhStyled>
            <input
              type="text"
              placeholder="Search Coins"
              onChange={handleChange}
            />
          </CryptoSearhStyled>

          <CurrencyContainerStyled>
            {filterCoins
              .slice(pagesVisited, pagesVisited + coinsPerPage)
              .map((coin, i) => (
                <Link to={`/currencies/${coin.id}`} key={i}>
                  <div data-aos="flip-left" data-aos-duration="1000">
                    <CoinCard
                      coin={coin}
                      key={i}
                      formatCurrency={formatCurrency}
                    />
                  </div>
                </Link>
              ))}
          </CurrencyContainerStyled>

          <CurrencyPageStyled>
            <ReactPaginate
              previousLabel={<RiArrowLeftSFill />}
              nextLabel={<RiArrowRightSFill />}
              pageCount={pageCount}
              onPageChange={changePage}
              pageRangeDisplayed="11"
              containerClassName={"paginate-container"}
              previousLinkClassName={"paginate-prev"}
              nextLinkClassName={"paginate-next"}
              disabledClassName={"paginate-disable"}
              activeClassName={"paginate-active"}
            />
          </CurrencyPageStyled>
        </SectionStyled>
      </div>
    </WrapperStyled>
  );
};

export default CurrencyPage;
