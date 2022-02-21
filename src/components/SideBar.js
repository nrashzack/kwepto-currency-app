import React from "react";
import logo from "../assets/logo.png";
import { AiFillGithub, AiFillApi } from "react-icons/ai";
import { SideBarContainerStyled } from "../styles/Main.styled";
import {
  SideBarButtonsStyled,
  SideBarContentStyled,
  SideBarLogoStyled,
  SideBarEndStyled,
  SideBarFooterStyled,
  SideBarFooterIconsStyled,
} from "../styles/SideBar.styled";

const SideBar = () => {
  return (
    <SideBarContainerStyled>
      <SideBarContentStyled>
        <li>
          <SideBarLogoStyled src={logo} alt="logo" />
        </li>
        <li>
          <SideBarButtonsStyled>
            <span>Price Tracker</span>
          </SideBarButtonsStyled>
        </li>
        <li>
          <SideBarButtonsStyled>
            <span>Exchange</span>
          </SideBarButtonsStyled>
        </li>
        <li>
          <SideBarButtonsStyled>
            <span>News</span>
          </SideBarButtonsStyled>
        </li>
        <li>
          <SideBarButtonsStyled>
            <span>Watch List</span>
          </SideBarButtonsStyled>
        </li>
        <SideBarEndStyled>
          <SideBarFooterIconsStyled>
            <a
              href="https://github.com/aizadrzo/kwepto-currency-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.coingecko.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillApi />
            </a>
          </SideBarFooterIconsStyled>
          <SideBarFooterStyled>v1.0 Made By BeSquare, 2022</SideBarFooterStyled>
        </SideBarEndStyled>
      </SideBarContentStyled>
    </SideBarContainerStyled>
  );
};

export default SideBar;
