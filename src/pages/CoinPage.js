import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const CoinPage = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.coinId}`)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <p>Pls work</p>
      <h1>{coin.name}</h1>
    </div>
  );
};

export default CoinPage;
