import React from "react";
import { NavBarContainerStyled } from "../styles/Main.styled";
import { NavBarLinksCointainerStyled } from "../styles/NavBar.styled";

const NavBar = () => {
  return (
    <NavBarContainerStyled>
      <NavBarLinksCointainerStyled>
        <ul>
          <li>
            <span>Logo</span>
          </li>
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
        </ul>
        <div className="end">
          <span>Currency</span>
          <input type="search" />
        </div>
      </NavBarLinksCointainerStyled>
    </NavBarContainerStyled>
  );
};

export default NavBar;
