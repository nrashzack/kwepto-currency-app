import React, { useState } from "react";
import { HeaderStyled } from "../styles/Main.styled";
import { ListHeaderStyled, SearchBarStyled } from "../styles/CoinList.styled";
import CoinList from "../components/CoinList";

const PriceTracker = ({ coins }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <HeaderStyled>
        <h1>Crypto Price Tracker</h1>
        <p>Get the latest crypto prices.</p>
      </HeaderStyled>
      <SearchBarStyled>
        <input
          class="search-bar"
          placeholder="Search..."
          type="text"
          onChange={handleSearch}
        ></input>
      </SearchBarStyled>
      <ListHeaderStyled>
        <h3>#</h3>
        <h3>Name</h3>
        <h3>Price</h3>
        <h3>24hr%</h3>
        <h3>Market Cap</h3>
      </ListHeaderStyled>
      {filteredCoins.map((coin) => (
        <CoinList key={coin.market_cap_rank} coin={coin} />
      ))}
    </div>
  );
};

export default PriceTracker;
