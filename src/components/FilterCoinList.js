import React from "react";
import { SectionStyled } from "../styles/Main.styled";
import { FilterCoinListButtonStyled } from "../styles/CoinList.styled";
const FilterCoinList = ({ setCurrency }) => {
  return (
    <SectionStyled>
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
    </SectionStyled>
  );
};

export default FilterCoinList;
