import axios from "axios";
import React, { useState, useEffect } from "react";
import { CardStyled } from "../styles/ExchangeList.styled";

const ExchangeList = ({ exchange }) => {
  const [exchanges, setExchanges] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.coinpaprika.com/v1/exchanges/${exchange.id}`)
      .then((res) => {
        setExchanges(res.data);
        console.log(exchanges);
      });
  }, []);
  return (
    <CardStyled>
      <a href={exchange.url} target="_blank">
        <div className="exchange-content">
          <img src={exchange.image} alt={exchange?.name} />
          <div className="exchange-name">
            <strong>{exchange.name}</strong>
            {exchange.year_established ? (
              <p>{exchange.year_established}</p>
            ) : (
              <p>2020</p>
            )}
          </div>
          <div className="exchange-info">
            <div className="exchange-col">
              <strong>Coins</strong>
              {exchanges?.currencies ? (
                <p>{exchanges?.currencies}</p>
              ) : (
                <p>176</p>
              )}
            </div>
            <div className="exchange-col bars">
              <strong>Markets</strong>
              {exchanges?.markets ? <p>{exchanges?.markets}</p> : <p>240</p>}
            </div>
            <div className="exchange-col">
              <strong>Score</strong>
              {exchange.trust_score > 6 ? (
                <p className="green">{exchange.trust_score}</p>
              ) : (
                <p className="yellow">{exchange.trust_score}</p>
              )}
            </div>
          </div>
        </div>
      </a>
    </CardStyled>
  );
};

export default ExchangeList;
