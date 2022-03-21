import React from "react";
import { LoadingScreenStyled, WrapperStyled } from "../styles/Main.styled";
import Banner from "../components/Banner";
import MarketData from "../components/MarketData";

const HomePage = ({ loading, coins, data, formatCurrency }) => {
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
      <div data-aos="fade-up">
        <MarketData data={data} coins={coins} formatCurrency={formatCurrency} />
      </div>
    </WrapperStyled>
  );
};

export default HomePage;
