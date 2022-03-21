import React, { useState, useEffect } from "react";
import {
  HeaderStyled,
  SectionStyled,
  WrapperStyled,
} from "../styles/Main.styled";
import axios from "axios";
import { Link } from "react-router-dom";
import { CurrencyContainerStyled } from "../styles/CoinCard.styled";
import DiscoverCard from "../components/DiscoverCard";
import CoinCard from "../components/CoinCard";
import { DiscoverTitleStyled } from "../styles/Discover.styled";

const DiscoverPage = ({ currency, formatCurrency }) => {
  const [trendCoins, setTrendCoins] = useState([]);
  const [gainCoins, setGainCoins] = useState([]);

  const getTrendCoins = async () => {
    await axios
      .get(`https://api.coingecko.com/api/v3/search/trending`)
      .then((res) => {
        setTrendCoins(res.data.coins);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get Trending Coins
  useEffect(async () => {
    getTrendCoins();
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=8&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d
  `
      )
      .then((res) => {
        setGainCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [price, setPrice] = useState([]);
  // Get Current Price For Currencies
  useEffect(() => {
    console.log("open connection");
    var ws = new WebSocket("wss://ws.coincap.io/prices?assets=ethereum");

    ws.onopen = () => {
      console.log("connection is on");
    };

    ws.onmessage = (msg) => {
      var data = JSON.parse(msg.data);
      var coinPrice = data.ethereum;
      console.log("Price right here", coinPrice);
      setPrice((currentPrice) => [...currentPrice, coinPrice]);
    };

    return () => {
      console.log("close connection");
      ws.close();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000">
        <SectionStyled>
          <WrapperStyled>
            <HeaderStyled>
              <h1>Discover</h1>
            </HeaderStyled>
            <DiscoverTitleStyled>
              <h1>Trending Coin</h1>
            </DiscoverTitleStyled>
            <CurrencyContainerStyled>
              {trendCoins.map((coin, i) => (
                <Link to={`/currencies/${coin.item.id}`} key={i}>
                  <DiscoverCard
                    key={i}
                    coin={coin}
                    currency={currency}
                    formatCurrency={formatCurrency}
                  />
                </Link>
              ))}
            </CurrencyContainerStyled>
            <DiscoverTitleStyled>
              <h1>Top Coins Based Volume</h1>
            </DiscoverTitleStyled>
            <CurrencyContainerStyled>
              {gainCoins.map((coin, i) => (
                <Link to={`/currencies/${coin.id}`} key={i}>
                  <CoinCard
                    coin={coin}
                    key={i}
                    formatCurrency={formatCurrency}
                  />
                </Link>
              ))}
            </CurrencyContainerStyled>
            <div>ETH:{price.slice(-1)}</div>
          </WrapperStyled>
        </SectionStyled>
      </div>
    </>
  );
};

export default DiscoverPage;
