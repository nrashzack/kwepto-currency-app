import React from "react";
import PriceTracker from "../pages/PriceTracker";
import { MainContainerStyled } from "../styles/Main.styled";

const MainSection = ({ loading, coins, trend, currency, setCurrency, page, setPage, }) => {
  return (
    <MainContainerStyled>
      <PriceTracker
        loading={loading}
        coins={coins}
        page={page}
        trend={trend}
        currency={currency}
        setCurrency={setCurrency}
        setPage={setPage}
      />
    </MainContainerStyled>
  );
};

export default MainSection;
