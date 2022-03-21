import React, { useState, useEffect } from "react";
import { SectionStyled, WrapperStyled } from "../styles/Main.styled";
import axios from "axios";
import { Link } from "react-router-dom";
import { CurrencyContainerStyled } from "../styles/CoinCard.styled";
import DiscoverCard from "../components/DiscoverCard";
import CoinCard from "../components/CoinCard";
import {
  DiscoverHeaderStyled,
  DiscoverTitleStyled,
  RealTimeContainerStyled,
} from "../styles/Discover.styled";
import TrendingImg from "../assets/Trending.svg";
import BTCIcon from "../assets/BTC.svg";
import ETHIcon from "../assets/ETH.svg";
import XRPIcon from "../assets/XRP.svg";

const DiscoverPage = ({ setLoading, currency, formatCurrency }) => {
  const [trendCoins, setTrendCoins] = useState([]);
  const [gainCoins, setGainCoins] = useState([]);
  const [loadingPrices, setLoadingPrices] = useState(false);

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
    setLoading(true);
    getTrendCoins();
    setLoading(false);
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

  const [btcPrice, setBtcPrice] = useState([]);
  const [ethPrice, setEthPrice] = useState([]);
  const [xrpPrice, setXrpPrice] = useState([]);

  // Get Current Price For Currencies
  useEffect(() => {
    console.log("open connection");
    var ws = new WebSocket(
      "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,xrp"
    );

    ws.onopen = () => {
      console.log("connection is on");
    };

    ws.onmessage = (msg) => {
      var data = JSON.parse(msg.data);
      var btcCoinPrice = data.bitcoin;
      var ethCoinPrice = data.ethereum;
      var xrpCoinPrice = data.xrp;
      if (
        btcCoinPrice != null &&
        ethCoinPrice != null &&
        xrpCoinPrice != null
      ) {
        console.log("ETH", ethPrice);
        console.log("BTC", btcPrice);
        console.log("XRP", xrpPrice);
        setBtcPrice((currentPrice) => [...currentPrice, btcCoinPrice]);
        setEthPrice((currentPrice) => [...currentPrice, ethCoinPrice]);
        setXrpPrice((currentPrice) => [...currentPrice, xrpCoinPrice]);
        setLoadingPrices(false);
      } else {
        setLoadingPrices(true);
      }
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
    <div data-aos="fade-up" data-aos-duration="1000">
      <SectionStyled>
        <WrapperStyled>
          <DiscoverHeaderStyled>
            <img src={TrendingImg} alt="trending" />
            <div className="title-container">
              <h1>DISCOVER</h1>
              <p>Real time prices and Trending currencies</p>
            </div>
          </DiscoverHeaderStyled>
          <WrapperStyled>
            <RealTimeContainerStyled>
              <div className="realtime-card">
                <img src={BTCIcon} alt="bitcoin" />
                <div className="price-column">
                  <strong>BTC</strong>
                  {loadingPrices(true) ? (
                    <p>Fetching Data...</p>
                  ) : (
                    <p>{btcPrice.slice(-1)}</p>
                  )}
                </div>
              </div>
              <div className="realtime-card">
                <img src={ETHIcon} alt="ethereum" />
                <div className="price-column">
                  <strong>ETH</strong>
                  {loadingPrices(true) ? (
                    <p>Fetching Data...</p>
                  ) : (
                    <p>{ethPrice.slice(-1)}</p>
                  )}
                </div>
              </div>
              <div className="realtime-card">
                <img src={XRPIcon} alt="xrp" />
                <div className="price-column">
                  <strong>XRP</strong>
                  {loadingPrices(true) ? (
                    <p>Fetching Data...</p>
                  ) : (
                    <p>{xrpPrice.slice(-1)}</p>
                  )}
                </div>
              </div>
            </RealTimeContainerStyled>
          </WrapperStyled>
          <DiscoverTitleStyled>
            <h1>Trending Coin</h1>
          </DiscoverTitleStyled>
          <CurrencyContainerStyled>
            {trendCoins.map((coin, i) => (
              <Link to={`/currencies/${coin.item.id}`}>
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
              <Link to={`/currencies/${coin.id}`}>
                <CoinCard coin={coin} key={i} formatCurrency={formatCurrency} />
              </Link>
            ))}
          </CurrencyContainerStyled>
        </WrapperStyled>
      </SectionStyled>
    </div>
  );
};

export default DiscoverPage;
