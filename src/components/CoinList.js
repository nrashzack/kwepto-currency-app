import React from "react";
import {
  CoinListStyled,
  CenterCoinStyled,
  CoinInfoStyled,
} from "../styles/CoinList.styled";

const CoinList = ({ coin, currency }) => {
  const formatCurrency = (price) => {
    let newPrice = 0;
    if (price < 0.99 && price > -1) {
      newPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
        maximumFractionDigits: 8,
      }).format(price);
    } else {
      newPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
      }).format(price);
    }
    return newPrice;
  };
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
      <p>{formatCurrency(coin.current_price)}</p>
      {coin.price_change_percentage_1h_in_currency < 0 ? (
        <p className="coin_percent bold red">
          {coin.price_change_percentage_1h_in_currency.toFixed(2)}
        </p>
      ) : (
        <p className="coin_percent bold">
          {coin.price_change_percentage_1h_in_currency.toFixed(2)}
        </p>
      )}
      {coin.price_change_percentage_24h_in_currency < 0 ? (
        <p className="coin_percent bold red">
          {coin.price_change_percentage_24h_in_currency.toFixed(2)}
        </p>
      ) : (
        <p className="coin_percent bold">
          {coin.price_change_percentage_24h_in_currency.toFixed(2)}
        </p>
      )}
      {coin.price_change_percentage_7d_in_currency < 0 ? (
        <p className="coin_percent bold red">
          {coin.price_change_percentage_7d_in_currency.toFixed(2)}
        </p>
      ) : (
        <p className="coin_percent bold">
          {coin.price_change_percentage_7d_in_currency.toFixed(2)}
        </p>
      )}
      <p>{formatCurrency(coin.market_cap)}</p>
    </CoinListStyled>
  );
};

export default CoinList;
