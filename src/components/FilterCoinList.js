import React from "react";
import { SectionStyled } from "../styles/Main.styled";
import { ReactSelectStyled } from "../styles/CoinList.styled";

const FilterCoinList = ({ currency, setCurrency }) => {
  const currencyOptions = [
    { value: "myr", label: "MYR" },
    { value: "usd", label: "USD" },
    { value: "eur", label: "EUR" },
    { value: "gbp", label: "GBP" },
    { value: "jpy", label: "JPY" },
  ];

  const pickCurrency = (currencyOptions) => {
    setCurrency(currencyOptions.value);
  };
  return (
    <SectionStyled>
      <ReactSelectStyled
        options={currencyOptions}
        onChange={pickCurrency}
        placeholder={currency.toUpperCase()}
      />
    </SectionStyled>
  );
};

export default FilterCoinList;
