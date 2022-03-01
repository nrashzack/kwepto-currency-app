import React from "react";
import { CardStyled, RowStyled } from "../styles/TrendList.styled";
import { CardCointainerCenterStyled } from "../styles/TrendList.styled";

const TrendList = ({ trends }) => {
  return (
    <CardStyled>
      <img src={trends.item.thumb} alt={trends.item.name} />
      <strong>{trends.item.name}</strong>
      <p>{trends.item.symbol.toUpperCase()}</p>
      <RowStyled>
        <strong>{trends.item.price_btc.toFixed(15)}</strong>
      </RowStyled>
    </CardStyled>
  );
};

export default TrendList;
