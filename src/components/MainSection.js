import React from "react";
import PriceTracker from "../pages/PriceTracker";
import { MainContainerStyled } from "../styles/Main.styled";

const MainSection = ({ coins, trend, currency, setCurrency }) => {
  return (
    <MainContainerStyled>
      <PriceTracker
        coins={coins}
        trend={trend}
        currency={currency}
        setCurrency={setCurrency}
      />
    </MainContainerStyled>
  );
};

export default MainSection;
