import React from "react";
import { HeaderStyled, SectionStyled } from "../styles/Main.styled";
import TrendList from "../components/TrendList";
import { CardContainerStyled } from "../styles/TrendList.styled";

const NowTrending = ({ trend }) => {
  return (
    <SectionStyled>
      <HeaderStyled>
        <h1>Trending Coins</h1>
      </HeaderStyled>

      <CardContainerStyled>
        {trend.map((trends) => (
          <TrendList key={trends.coin_id} trends={trends} />
        ))}
      </CardContainerStyled>
    </SectionStyled>
  );
};

export default NowTrending;
