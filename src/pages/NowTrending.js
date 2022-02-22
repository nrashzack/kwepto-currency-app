import React from "react";
import { HeaderStyled, MainContainerStyled } from "../styles/Main.styled";
import TrendList from "../components/TrendList";
import { CardContainerStyled } from "../styles/TrendList.styled";

const NowTrending = ({ trend }) => {
  return (
    <MainContainerStyled>
      <HeaderStyled>
        <h1>Trending Coins</h1>
      </HeaderStyled>

      <CardContainerStyled>
        {trend.map((trends) => (
          <TrendList key={trends.coin_id} trends={trends} />
        ))}
      </CardContainerStyled>
    </MainContainerStyled>
  );
};

export default NowTrending;
