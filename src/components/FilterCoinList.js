import React from "react";
import { SectionStyled } from "../styles/Main.styled";
import { CurrenctDropdownStyled } from "../styles/CoinList.styled";
import Select from "react-select";

const FilterCoinList = ({ currency, setCurrency }) => {
  const currencyOptions = [
    { value: "myr", label: "🇲🇾 MYR" },
    { value: "usd", label: "🇺🇸 USD" },
    { value: "eur", label: "🇪🇺 EUR" },
    { value: "gbp", label: "🇬🇧 GBP" },
    { value: "jpy", label: "🇯🇵 JPY" },
  ];

  const pickCurrency = (currencyOptions) => {
    setCurrency(currencyOptions.value);
  };
  return (
    <SectionStyled>
      <Select
        options={currencyOptions}
        onChange={pickCurrency}
        placeholder="Select Currency"
      />
    </SectionStyled>
  );
};

export default FilterCoinList;
