import React, { useState } from "react";
import {
  NavContainerStyled,
  NavLinksStyled,
  CrytoMarketStyled,
} from "../styles/NavBar.styled";
import Logo from "../assets/LogoImg.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const NavBar = ({ data, currency }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
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
          <li>Watch List</li>
        </ul>
        <div className="responsive">
          <button className="responsie burger">
            <GiHamburgerMenu onClick={toggleNav} />
          </button>
          {toggleMenu && (
            <ul>
              <Link to="/">
                <li>Currencies</li>
              </Link>
              <Link to="/exchange">
                <li>Exchanges</li>
              </Link>
              <li>News</li>
              <li>Watch List</li>
            </ul>
          )}
        </div>
      </NavLinksStyled>
      <CrytoMarketStyled>
        <li>
          Cryptos : <span>{data.active_cryptocurrencies}</span>
        </li>
        <li>
          Markets : <span>{data.markets}</span>
        </li>
        <li>
          Market Cap: <span>$1,707,443,014,522</span>
          {/* Market Cap: <span>{data.total_market_cap[currency]}</span> */}
        </li>
        <li>
          24h Vol: <span>$83,173,623,418</span>
        </li>
      </CrytoMarketStyled>
    </NavContainerStyled>
  );
};

export default NavBar;
