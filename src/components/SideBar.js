import React from "react";
import logo from "../assets/logo.png";
import { SideBarContainerStyled } from "../styles/Main.styled";
import {
  SideBarButtonsStyled,
  SideBarContentStyled,
  SideBarLogoStyled,
  SideBarEndStyled,
  SideBarFooterStyled,
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
            <span>Now Trending</span>
          </SideBarButtonsStyled>
        </li>

        <li>
          <SideBarButtonsStyled>
            <span>FAQs</span>
          </SideBarButtonsStyled>
        </li>
        <li>
          <SideBarButtonsStyled>
            <span>News</span>
          </SideBarButtonsStyled>
        </li>
        <li>
          <SideBarButtonsStyled>
            <span>Memes</span>
          </SideBarButtonsStyled>
        </li>
        <SideBarEndStyled>
          <SideBarLogoStyled
            src="https://media.giphy.com/media/1GAErYo91X5tejHofL/giphy.gif"
            alt="elon dancing"
          />
          <SideBarFooterStyled>v1.0 Made By BeSquare, 2022</SideBarFooterStyled>
        </SideBarEndStyled>
      </SideBarContentStyled>
    </SideBarContainerStyled>
  );
};

export default SideBar;
