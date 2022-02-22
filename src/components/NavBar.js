import React from "react";
import { NavBarContainerStyled } from "../styles/Main.styled";
import { NavBarLinksCointainerStyled } from "../styles/NavBar.styled";

const NavBar = () => {
  return (
    <NavBarContainerStyled>
      <NavBarLinksCointainerStyled>
        <h1>Logo</h1>
        <li>
          <span>Price Tracker</span>
        </li>
        <li>
          <span>Exchange</span>
        </li>
        <li>
          <span>News</span>
        </li>
        <li>
          <span>Watch List</span>
        </li>
      </NavBarLinksCointainerStyled>
    </NavBarContainerStyled>
  );
};

export default NavBar;
