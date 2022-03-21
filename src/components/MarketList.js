import React from "react";
import { MarketListStyled } from "../styles/MarketList.styled";

const MarketList = ({ market }) => {
  return (
    <MarketListStyled>
      <div className="market-name">
        <a href={market?.trade_url} target="_blank">
          <strong>{market?.market.name}</strong>
        </a>
      </div>
      <div className="market-volume-score">
        <div className="market-volume">
          <p>Volume:</p>
          <strong>
            {market?.volume.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </strong>
        </div>
        {market?.trust_score === "green" ? (
          <div className="market-score">
            <div>High</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </MarketListStyled>
  );
};

export default MarketList;
