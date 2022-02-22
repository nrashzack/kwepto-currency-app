import axios from "axios";
import React, { useState, useEffect } from "react";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import { AppContainerStyled } from "./styles/Main.styled";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [trend, setTrend] = useState([]);
  const [currency, setCurrency] = useState("myr");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=25&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((res) => {
        setCoins(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency, page]);

  useEffect(() => {
    axios

      .get(`https://api.coingecko.com/api/v3/search/trending`)
      .then((res) => {
        console.log(res.data.coins);
        setTrend(res.data.coins);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <AppContainerStyled>
        <MainSection
          loading={loading}
          coins={coins}
          page={page}
          trend={trend}
          currency={currency}
          setCurrency={setCurrency}
          setPage={setPage}
        />
      </AppContainerStyled>
    </>
  );
};

export default App;
