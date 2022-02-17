import React from "react";
import {
  CoinListStyled,
  CenterCoinStyled,
  CoinInfoStyled,
} from "../styles/CoinList.styled";

const CoinList = ({ coin }) => {
  return (
    <CoinListStyled>
      <CenterCoinStyled>
        <p>{coin.market_cap_rank}</p>
      </CenterCoinStyled>
      <CoinInfoStyled>
        <img src={coin.image} alt={coin.name} />
        <strong>{coin.name}</strong>
        <p>{coin.symbol.toUpperCase()}</p>
      </CoinInfoStyled>
      <p>{coin.current_price}</p>
      <p>{coin.price_change_percentage_24h_in_currency.toFixed(2)}</p>
      <p>{coin.market_cap}</p>
    </CoinListStyled>
  );
};

export default CoinList;
