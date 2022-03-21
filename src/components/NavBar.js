import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  NavContainerStyled,
  NavLinksStyled,
  CrytoMarketStyled,
} from "../styles/NavBar.styled";
import Logo from "../assets/LogoImg.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import FilterCoinList from "./FilterCoinList";

const NavBar = ({ data, currency, setCurrency, formatCurrency }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeNav = () => {
    setToggleMenu(false);
  };

  return (
    <NavContainerStyled>
      <NavLinksStyled>
        <Link to="/">
          <div className="logo" onClick={closeNav}>
            <img src={Logo} alt="kwepto" />
          </div>
        </Link>
        <ul className="links">
          <Link to="/currencies">
            <li>Currencies</li>
          </Link>
          <Link to="/discover">
            <li>Discover</li>
          </Link>
          <Link to="/exchanges">
            <li>Exchanges</li>
          </Link>
          <Link to="/news">
            <li>News</li>
          </Link>
        </ul>
        <div className="end">
          <FilterCoinList currency={currency} setCurrency={setCurrency} />
        </div>
        <div className="responsive">
          <button className="responsie burger">
            <GiHamburgerMenu onClick={toggleNav} />
          </button>
          {toggleMenu && (
            <ul>
              <Link to="/currencies" onClick={toggleNav}>
                <li>Currencies</li>
              </Link>
              <Link to="/discover" onClick={toggleNav}>
                <li>Discover</li>
              </Link>
              <Link to="/exchanges" onClick={toggleNav}>
                <li>Exchanges</li>
              </Link>
              <Link to="/news" onClick={toggleNav}>
                <li>News</li>
              </Link>
              <FilterCoinList currency={currency} setCurrency={setCurrency} />
            </ul>
          )}
        </div>
      </NavLinksStyled>
      <CrytoMarketStyled>
        <li>
          <p>
            Cryptos : <span>{data.active_cryptocurrencies}</span>
          </p>
        </li>
        <li>
          <p>
            Markets : <span>{data.markets}</span>
          </p>
        </li>
        <li>
          <p>
            Market Cap:{" "}
            <span>{formatCurrency(data.total_market_cap?.[currency])}</span>
          </p>
        </li>
        <li>
          <p>
            24h Vol:{" "}
            <span>
              {data.market_cap_change_percentage_24h_usd?.toFixed(2)}%
            </span>
          </p>
        </li>
      </CrytoMarketStyled>
    </NavContainerStyled>
  );
};

export default NavBar;
