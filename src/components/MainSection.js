import React from "react";
import PriceTracker from "../pages/PriceTracker";
import { MainContainerStyled } from "../styles/Main.styled";

const MainSection = ({ coins, currency, setCurrency }) => {
  return (
    <MainContainerStyled>
      <PriceTracker
        coins={coins}
        currency={currency}
        setCurrency={setCurrency}
      />
    </MainContainerStyled>
  );
};

export default MainSection;
