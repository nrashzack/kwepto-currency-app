import React from "react";
import PriceTracker from "../pages/PriceTracker";
import { MainContainerStyled } from "../styles/Main.styled";

const MainSection = ({ coins }) => {
  return (
    <MainContainerStyled>
      <PriceTracker coins={coins} />
    </MainContainerStyled>
  );
};

export default MainSection;
