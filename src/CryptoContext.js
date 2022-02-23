import React, { useState, createContext } from "react";

export const CoinContext = createContext();
export const TrendContext = createContext();
export const CurrencyContext = createContext();
export const PageContext = createContext();
export const LoadingContext = createContext();

export const CoinsContext = (props) => {
  const [coins, setCoins] = useState([]);
  return (
    <CoinContext.Provider value={[coins, setCoins]}>
      {props.children}
    </CoinContext.Provider>
  );
};

export const TrendContext = (props) => {
  const [trend, setTrend] = useState([]);
  return (
    <TrendContext.Provider value={[trend, setTrend]}>
      {props.children}
    </TrendContext.Provider>
  );
};

export const CurrencyContext = (props) => {
  const [currency, setCurrency] = useState("myr");
  return (
    <CurrencyContext.Provider value={[currency, setCurrency]}>
      {props.children}
    </CurrencyContext.Provider>
  );
};

export const PageContext = (props) => {
  const [page, setPage] = useState(1);
  return (
    <PageContext.Provider value={[page, setPage]}>
      {props.children}
    </PageContext.Provider>
  );
};

export const LoadingContext = (props) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
      {props.children}
    </LoadingContext.Provider>
  );
};
