import React, { useState, useEffect } from "react";
import { SectionStyled } from "../styles/Main.styled";
import {
  DiscoverTitleStyled,
  DiscoverContainerStyled,
  DiscoverCardStyled,
} from "../styles/Discover.styled";
import axios from "axios";

const DiscoverPage = () => {
  const [gainCoins, setGainCoins] = useState([]);
  const [loserCoins, setLoserCoins] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=8&page=1&sparkline=true
`
      )
      .then((res) => {
        setGainCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_asc&per_page=8&page=1&sparkline=true
`
      )
      .then((res) => {
        setLoserCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   console.log("start connection");
  //   let ws = new WebSocket(`wss://stream.binance.com:9443/ws/btcusdt@trade`);

  //   ws.onmessage = (event) => {
  //     console.log("connection is ON");
  //     let stockObject = JSON.parse(event.data);
  //     let realprice = parseFloat(stockObject.p).toFixed(2);
  //     setPrice(realprice);
  //     console.log(price);
  //   };
  //   return () => {
  //     ws.close();
  //     console.log("connection off");
  //   };
  // }, []);

  useEffect(() => {
    console.log("open connection");
    var ws = new WebSocket(
      "wss://ws.coincap.io/prices?assets=bitcoin,ethereum"
    );

    ws.onopen = () => {
      console.log("connection is on");
    };

    ws.onmessage = (msg) => {
      var data = JSON.parse(msg.data);
      console.log("Price right here", data);
    };

    return () => {
      console.log("close connection");
      ws.close();
    };
  }, []);

  return (
    <SectionStyled>
      <DiscoverContainerStyled>
        <DiscoverTitleStyled>
          <h1>Discover</h1>
        </DiscoverTitleStyled>
        <h1>Top Gainers</h1>
        <div className="topCoins">
          {gainCoins.map((coins, i) => (
            <DiscoverCardStyled>
              <div className="regular" key={i}>
                <div className="content-container">
                  <img src={coins.image} />
                  <strong>{coins.name}</strong>
                  <p>{coins.symbol.toUpperCase()}</p>
                </div>
              </div>
            </DiscoverCardStyled>
          ))}
        </div>
        <h1>Top Losers</h1>
        <div className="topCoins">
          {loserCoins.map((coins, i) => (
            <DiscoverCardStyled>
              <div className="regular" key={i}>
                <div className="content-container">
                  <img src={coins.image} />
                  <strong>{coins.name}</strong>
                  <p>{coins.symbol.toUpperCase()}</p>
                </div>
              </div>
            </DiscoverCardStyled>
          ))}
        </div>
        <div>
          <h1>Trending</h1>
        </div>
      </DiscoverContainerStyled>
    </SectionStyled>
  );
};

export default DiscoverPage;
