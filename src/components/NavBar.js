import React from "react";
import {
  NavContainerStyled,
  NavLinksStyled,
  CrytoMarketStyled,
} from "../styles/NavBar.styled";
import Logo from "../assets/LogoImg.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavContainerStyled>
      <NavLinksStyled>
        <div className="logo">
          <img src={Logo} alt="kwepto" />
        </div>
        <ul className="links">
          <Link to="/">
            <li>Currencies</li>
          </Link>
          <Link to="/exchange">
            <li>Exchanges</li>
          </Link>
          <li>News</li>
        </ul>
        <ul className="responsive">
          <li>Currencies</li>
          <li>Exchanges</li>
          <li>News</li>
        </ul>
      </NavLinksStyled>
      <CrytoMarketStyled>
        <li>
          Cryptos : <span>17,200</span>
        </li>
        <li>
          Exchanges : <span>462</span>
        </li>
        <li>
          Market Cap: <span>$1,707,443,014,522</span>
        </li>
        <li>
          24h Vol: <span>$83,173,623,418</span>
        </li>
      </CrytoMarketStyled>
    </NavContainerStyled>
  );
};

export default NavBar;
