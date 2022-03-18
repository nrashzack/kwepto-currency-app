import React, { useState, useEffect } from "react";
import { SectionStyled } from "../styles/Main.styled";
import {
  DiscoverTitleStyled,
  DiscoverContainerStyled,
  DiscoverCardStyled,
} from "../styles/Discover.styled";
import axios from "axios";

const DiscoverPage = () => {
  const [discoverCoins, setDiscoverCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_asc&per_page=10&page=1&sparkline=false
`
      )
      .then((res) => {
        console.log(res.data);
        setDiscoverCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SectionStyled>
      <DiscoverContainerStyled>
        <DiscoverTitleStyled>
          <h1>Discover</h1>
        </DiscoverTitleStyled>
        <div className="topCoins">
          {discoverCoins.slice(1, 10).map((coins, i) => (
            <DiscoverCardStyled>
              <div className="regular" key={i}>
                <strong>{coins.name}</strong>
                <p>{coins.symbol.toUpperCase()}</p>
                <p>{coins.current_price}</p>
              </div>
            </DiscoverCardStyled>
          ))}
        </div>
      </DiscoverContainerStyled>
    </SectionStyled>
  );
};

export default DiscoverPage;
