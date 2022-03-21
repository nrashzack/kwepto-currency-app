import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparklines, SparklinesCurve } from "react-sparklines";
import { CardCointainerStyled, CoinRowStyled } from "../styles/CoinCard.styled";

const DiscoverCard = ({ coin, currency, formatCurrency }) => {
  const [coinInfo, setCoinInfo] = useState({});
  // const [currencyType, setCurrencyType] = useState(currency);
  useEffect(async () => {
    console.log(currency);
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coin?.item.id}?tickers=false&market_data=true&sparkline=true`
      )
      .then((res) => {
        console.log(res.data);
        setCoinInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sparkLine = coinInfo.market_data?.sparkline_7d.price
    .slice(50, 60)
    .map((data) => data);

  return (
    <CardCointainerStyled>
      <CoinRowStyled>
        <div className="coin-col">
          <img src={coinInfo.image?.large} alt={coinInfo.name} />
          <strong>{coinInfo.name}</strong>
          <p>{coinInfo.symbol?.toUpperCase()}</p>
        </div>
        <div className="price-col">
          <strong>
            {formatCurrency(coinInfo.market_data?.current_price[currency])}
          </strong>
          {coinInfo.market_data?.price_change_percentage_24h < 0 ? (
            <p className="percent bold red ">
              {coinInfo.market_data?.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="percent bold ">
              +{coinInfo.market_data?.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
        </div>
      </CoinRowStyled>
      <div className="graph-row">
        {coinInfo.market_data?.price_change_percentage_24h < 0 ? (
          <Sparklines data={sparkLine} width={100} height={60}>
            <SparklinesCurve color="red" />
          </Sparklines>
        ) : (
          <Sparklines
            data={coinInfo.market_data?.sparkline_7d.price
              .slice(0, 10)
              .map((data) => data)}
            width={100}
            height={60}
          >
            <SparklinesCurve color="green" />
          </Sparklines>
        )}
      </div>
    </CardCointainerStyled>
  );
};

export default DiscoverCard;
