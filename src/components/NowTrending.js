import React, { useState, useEffect } from "react";
import axios from "axios";
import { HeaderStyled, SectionStyled } from "../styles/Main.styled";
import TrendList from "./TrendList";
import { CardContainerStyled } from "../styles/TrendList.styled";
import Marquee from "react-easy-marquee";
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
    <SectionStyled white>
      <HeaderStyled>
        <h1>TRENDING COINS</h1>
        <p>Trending coins that people are searching for</p>
      </HeaderStyled>
      <Marquee duration={50000} height="20vh" width="55vw" reverse={true}>
        <CardContainerStyled>
          {trend.map((trends) => (
            <Link to={`/${trends.id}`} element={<CoinPage />}>
              <TrendList key={trends.coin_id} trends={trends} />
            </Link>
          ))}
        </CardContainerStyled>
      </Marquee>
    </SectionStyled>
  );
};

export default NowTrending;
