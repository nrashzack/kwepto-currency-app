import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import {
  AppStyled,
  NavStyled,
  BodyStyled,
  FooterStyled,
  LoadingScreenStyled,
} from "./styles/Main.styled";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CurrencyPage from "./pages/CurrencyPage";
import CoinPage from "./pages/CoinPage";
import NewsPage from "./pages/NewsPage";
import PageNotFound from "./pages/PageNotFound";
import ExchangePage from "./pages/ExchangePage";
import LiveGraphPage from "./pages/LiveGraphPage";
import DiscoverPage from "./pages/DiscoverPage";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [exchanges, setExchanges] = useState();
  const [currency, setCurrency] = useState("myr");
  const [loading, setLoading] = useState(false);

  // Get Data
  useEffect(() => {
    setLoading(true);
    // Get Coin Data
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((res) => {
        setCoins(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/exchanges
`
      )
      .then((res) => setExchanges(res.data))
      .catch((error) => console.log(error));
  }, []);

  // Format Currency
  const formatCurrency = (price) => {
    let newPrice = 0;
    if (price < 0.99 && price > -1) {
      newPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
        maximumFractionDigits: 8,
      }).format(price);
    } else {
      newPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
      }).format(price);
    }
    return newPrice;
  };

  if (loading) {
    return (
      <LoadingScreenStyled>
        <h1>Loading...</h1>
      </LoadingScreenStyled>
    );
  }

  return (
    <AppStyled>
      <NavStyled>
        <NavBar currency={currency} setCurrency={setCurrency} />
      </NavStyled>
      <BodyStyled>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                coins={coins}
                currency={currency}
                setCurrency={setCurrency}
                formatCurrency={formatCurrency}
              />
            }
          />
          <Route
            path="/currencies"
            element={
              <CurrencyPage coins={coins} formatCurrency={formatCurrency} />
            }
          />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route
            path="/exchanges"
            element={<ExchangePage loading={loading} exchanges={exchanges} />}
          />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/livegraph" element={<LiveGraphPage />} />
          <Route path="/currencies/:coinid" element={<CoinPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BodyStyled>
      <FooterStyled>
        <Footer />
      </FooterStyled>
    </AppStyled>
  );
};

export default App;
