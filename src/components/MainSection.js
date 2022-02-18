import React from "react";
import NowTrending from "../pages/NowTrending";
import PriceTracker from "../pages/PriceTracker";
import { MainContainerStyled } from "../styles/Main.styled";

const MainSection = ({ coins, trend }) => {
  return (
    <MainContainerStyled>
      <PriceTracker coins={coins} />
      <NowTrending trend={trend} />
    </MainContainerStyled>
  );
};

export default MainSection;
