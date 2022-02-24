import React from "react";
import { NavBarContainerStyled } from "../styles/Main.styled";
import { NavBarLinksCointainerStyled } from "../styles/NavBar.styled";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarContainerStyled>
      <NavBarLinksCointainerStyled>
        <ul>
          <li className="logo">
            <span>Logo</span>
          </li>
          <li>
            <Link to="/">
              <span>Price</span>
            </Link>
          </li>
          <li>
            <Link to="/exchange">
              <span>Exchange</span>
            </Link>
          </li>
          <li>
            <span>News</span>
          </li>
          <li>
            <span>Watch List</span>
          </li>
        </ul>
      </NavBarLinksCointainerStyled>
    </NavBarContainerStyled>
  );
};

export default NavBar;
