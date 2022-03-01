import React from "react";
import { CardStyled, RowStyled } from "../styles/TrendList.styled";

const TrendList = ({ trends }) => {
  return (
    <CardStyled>
      <div className="coin-name">
        <img src={trends.item.small} alt={trends.item.name} />
        {/* <strong>{trends.item.name}</strong> */}
        <p>{trends.item.symbol.toUpperCase()}</p>
      </div>
      <div className="coin-price">
        <strong>{trends.item.price_btc.toFixed(15)}</strong>
      </div>
    </CardStyled>
  );
};

export default TrendList;
