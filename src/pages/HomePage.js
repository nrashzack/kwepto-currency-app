import React from "react";
import { LoadingScreenStyled, WrapperStyled } from "../styles/Main.styled";
import Banner from "../components/Banner";
import MarketData from "../components/MarketData";

const HomePage = ({ loading, coins, formatCurrency }) => {
  if (loading) {
    return (
      <LoadingScreenStyled>
        <h1>Loading...</h1>
      </LoadingScreenStyled>
    );
  }
  return (
    <WrapperStyled>
      <Banner />
      {/* <div data-aos="fade-up" id="trend">*/}
      <div data-aos="fade-up">
        <MarketData coins={coins} formatCurrency={formatCurrency} />
      </div>

      {/* </div> */}
    </WrapperStyled>
  );
};

export default HomePage;
