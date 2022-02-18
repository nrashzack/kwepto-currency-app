import React from "react";
import { FilterCoinListButtonStyled } from "../styles/CoinList.styled";
const FilterCoinList = ({ setCurrency }) => {
  return (
    <div>
      <FilterCoinListButtonStyled onClick={() => setCurrency("myr")}>
        <span>MYR</span>
      </FilterCoinListButtonStyled>
      <FilterCoinListButtonStyled onClick={() => setCurrency("usd")}>
        <span>USD</span>
      </FilterCoinListButtonStyled>
      <FilterCoinListButtonStyled onClick={() => setCurrency("eur")}>
        <span>EUR</span>
      </FilterCoinListButtonStyled>
      <FilterCoinListButtonStyled onClick={() => setCurrency("jpy")}>
        <span>JPY</span>
      </FilterCoinListButtonStyled>
    </div>
  );
};

export default FilterCoinList;
