import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import {
  AppStyled,
  NavStyled,
  BodyStyled,
  FooterStyled,
} from "./styles/Main.styled";
import NavBar from "./components/NavBar";
import PriceTracker from "./pages/PriceTracker";
import CoinPage from "./pages/CoinPage";
import Exchange from "./pages/Exchange";
import Footer from "./components/Footer";
import News from "./pages/News";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [exchanges, setExchanges] = useState();
  const [data, setData] = useState({});
  const [currency, setCurrency] = useState("myr");
  const [loading, setLoading] = useState(false);

  // Get Data
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((res) => {
        setCoins(res.data.slice(0, 150));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://api.coingecko.com/api/v3/global`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency]);

  // Get all exchanges
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/exchanges?per_page=100`)
      .then((res) => {
        setExchanges(res.data.slice(0, 100));
        setLoading(false);
        console.log(exchanges);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AppStyled>
      <NavStyled>
        <NavBar data={data} currency={currency} setCurrency={setCurrency} />
      </NavStyled>
      <BodyStyled>
        <Routes>
          <Route
            path="/"
            element={
              <PriceTracker
                loading={loading}
                coins={coins}
                currency={currency}
                setCurrency={setCurrency}
              />
            }
          />
          <Route path=":coinid" element={<CoinPage />} />
          <Route
            path="/exchange"
            element={<Exchange loading={loading} exchanges={exchanges} />}
          />
          <Route path="/news" element={<News />} />
        </Routes>
      </BodyStyled>
      <FooterStyled>
        <Footer />
      </FooterStyled>
    </AppStyled>
  );
};

export default App;
