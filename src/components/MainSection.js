import React from "react";
import {
  HeaderStyled,
  MainContainerStyled,
  ListHeaderStyled,
} from "../styles/Main.styled";
import { MainSectionStyled } from "../styles/MainSection.styled";
import CoinList from "./CoinList";

const MainSection = ({ coins }) => {
  return (
    <MainContainerStyled>
      <MainSectionStyled>
        <HeaderStyled>
          <h1>Crypto Tracking</h1>
          <p>Get the latest crypto prices.</p>
        </HeaderStyled>
        <ListHeaderStyled>
          <h3>#</h3>
          <h3>Name</h3>
          <h3>Price</h3>
          <h3>24hr%</h3>
          <h3>Market Cap</h3>
        </ListHeaderStyled>
        {coins.map((coin) => (
          <CoinList key={coin.market_cap_rank} coin={coin} />
        ))}
      </MainSectionStyled>
    </MainContainerStyled>
  );
};

export default MainSection;
