import React from "react";
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
    <>
      <ReactSelectStyled
        options={currencyOptions}
        onChange={pickCurrency}
        placeholder={currency.toUpperCase()}
      />
    </>
  );
};

export default FilterCoinList;
