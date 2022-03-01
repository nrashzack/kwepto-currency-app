import React from "react";
import { NavBarContainerStyled } from "../styles/Main.styled";
import { NavBarLinksCointainerStyled } from "../styles/NavBar.styled";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavBarContainerStyled>
        <NavBarLinksCointainerStyled>
          <ul>
            <li className="logo">
              <p>Logo</p>
            </li>
            <li>
              <Link to="/">
                <p>Currencies</p>
              </Link>
            </li>
            <li>
              <Link to="/exchange">
                <p>Exchanges</p>
              </Link>
            </li>
            <li>
              <p>News</p>
            </li>
            <li>
              <p>Watch List</p>
            </li>
          </ul>
        </NavBarLinksCointainerStyled>
      </NavBarContainerStyled>
      <NavBarContainerStyled orange>
        <NavBarLinksCointainerStyled center>
          <ul>
            <li>
              <p>
                Cryptos: <span>17,200</span>
              </p>
            </li>
            <li>
              <p>
                Exchanges: <span>482</span>
              </p>
            </li>
            <li>
              <p>
                Market Cap: <span>$1,707,443,014,522</span>
              </p>
            </li>
            <li>
              <p>
                24h Vol: <span>$83,173,623,418</span>
              </p>
            </li>
          </ul>
        </NavBarLinksCointainerStyled>
      </NavBarContainerStyled>
    </>
  );
};

export default NavBar;
