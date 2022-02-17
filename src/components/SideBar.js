import React from "react";
import logo from "../assets/logo.png";
import { SideBarContainerStyled } from "../styles/Main.styled";
import {
  SideBarButtonsStyled,
  SideBarContentStyled,
  SideBarLogoStyled,
} from "../styles/SideBar.styled";

const SideBar = () => {
  return (
    <SideBarContainerStyled>
      <SideBarContentStyled>
        <SideBarLogoStyled src={logo} alt="logo" />
        <SideBarButtonsStyled>
          <span>Price Tracker</span>
        </SideBarButtonsStyled>
        <SideBarButtonsStyled>
          <span>Now Trending</span>
        </SideBarButtonsStyled>
        <SideBarButtonsStyled>
          <span>FAQs</span>
        </SideBarButtonsStyled>
        <SideBarButtonsStyled>
          <span>News</span>
        </SideBarButtonsStyled>
        <SideBarButtonsStyled>
          <span>Memes</span>
        </SideBarButtonsStyled>
        <span>v1.0 Made By BeSquare, 2022</span>
      </SideBarContentStyled>
    </SideBarContainerStyled>
  );
};

export default SideBar;
