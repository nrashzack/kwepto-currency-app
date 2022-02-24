import React, { useState, useEffect } from "react";
import axios from "axios";
import { HeaderStyled, SectionStyled } from "../styles/Main.styled";
import TrendList from "./TrendList";
import { CardContainerStyled } from "../styles/TrendList.styled";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import CoinPage from "../pages/CoinPage";

const NowTrending = () => {
  const [trend, setTrend] = useState([]);

  // Get trending coins
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/search/trending`)
      .then((res) => {
        setTrend(res.data.coins);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SectionStyled>
      <HeaderStyled>
        <h1>Trending Coins</h1>
        <p>The hottest coins in the market right now!</p>
      </HeaderStyled>
      <Marquee>
        <CardContainerStyled>
          {trend.map((trends) => (
            <Link to={`/${trend.id}`} element={<CoinPage />}>
              <TrendList key={trends.coin_id} trends={trends} />
            </Link>
          ))}
        </CardContainerStyled>
      </Marquee>
    </SectionStyled>
  );
};

export default NowTrending;
