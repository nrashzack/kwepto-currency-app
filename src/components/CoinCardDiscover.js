import React from "react";
import { DiscoverCardStyled } from "../styles/Discover.styled";

const CoinCardDiscover = ({ coins }) => {
  return (
    <DiscoverCardStyled>
      <div className="regular">
        <div className="content-container">
          <div className="discover-header">
            <img src={coins.image} alt="coin" />
            <strong>{coins.name}</strong>
            <p>{coins.symbol.toUpperCase()}</p>
          </div>
          <div className="discover-footer">
            <p>Price</p>
            <strong>{coins.current_price}</strong>
          </div>
        </div>
      </div>
    </DiscoverCardStyled>
  );
};

export default CoinCardDiscover;
