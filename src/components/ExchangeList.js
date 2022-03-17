import React from "react";
import { CardStyled } from "../styles/ExchangeList.styled";

const ExchangeList = ({ exchange }) => {
  return (
    <CardStyled>
      <a href={exchange.url} target="_blank">
        <div className="exchange-content">
          <img src={exchange.image} alt={exchange?.name} />
          <div className="exchange-name">
            <strong>{exchange.name}</strong>
            <p>{exchange.year_established}</p>
          </div>
          <div className="exchange-info">
            <div className="exchange-col">
              <strong>Coins</strong>
              <p>150</p>
            </div>
            <div className="exchange-col bars">
              <strong>Markets</strong>
              <p>350</p>
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
