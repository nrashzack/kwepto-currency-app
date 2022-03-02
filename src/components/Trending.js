import React, { useState, useEffect } from "react";
import axios from "axios";
import { HeaderStyled, SectionStyled } from "../styles/Main.styled";
import TrendList from "./TrendList";
import {
  TrendingCointainerStyled,
  CardContainerStyled,
} from "../styles/TrendList.styled";
import Marquee from "react-easy-marquee";

const Trending = ({ rate, currency }) => {
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
    <TrendingCointainerStyled>
      <SectionStyled>
        <HeaderStyled>
          <h1>TRENDING COINS</h1>
          <p>Trending coins that people are searching for</p>
        </HeaderStyled>
        <Marquee
          duration={50000}
          height="20vh"
          width="100%"
          reverse={true}
          className="marquee"
        >
          <CardContainerStyled>
            {trend.map((trends) => (
              <TrendList
                key={trends.coin_id}
                trends={trends}
                currency={currency}
                rate={rate}
              />
            ))}
          </CardContainerStyled>
        </Marquee>
      </SectionStyled>
    </TrendingCointainerStyled>
  );
};

export default Trending;
