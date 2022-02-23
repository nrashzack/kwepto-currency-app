import React from "react";
import { HeaderStyled, SectionStyled } from "../styles/Main.styled";
import TrendList from "./TrendList";
import { CardContainerStyled } from "../styles/TrendList.styled";
import Marquee from "react-fast-marquee";

const NowTrending = ({ trend }) => {
  return (
    <SectionStyled>
      <HeaderStyled>
        <h1>Trending Coins</h1>
        <p>The hottest coins in the market right now!</p>
      </HeaderStyled>
      <Marquee>
        <CardContainerStyled>
          {trend.map((trends) => (
            <TrendList key={trends.coin_id} trends={trends} />
          ))}
        </CardContainerStyled>
      </Marquee>
    </SectionStyled>
  );
};

export default NowTrending;
