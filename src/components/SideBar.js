import React from "react";
import logo from "../assets/logo.png";
import { SideBarContainer } from "../styles/Main.styled";
import {
  SideBarButtons,
  SideBarContent,
  SideBarLogo,
} from "../styles/SideBar.styled";

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarContent>
        <SideBarLogo src={logo} alt="logo" />
        <SideBarButtons>
          <span>Price Tracker</span>
        </SideBarButtons>
        <SideBarButtons>
          <span>Now Trending</span>
        </SideBarButtons>
        <SideBarButtons>
          <span>FAQs</span>
        </SideBarButtons>
        <SideBarButtons>
          <span>Blogs</span>
        </SideBarButtons>
        <SideBarButtons>
          <span>Memes</span>
        </SideBarButtons>
        <span>v1.0 Made By BeSquare, 2022</span>
      </SideBarContent>
    </SideBarContainer>
  );
};

export default SideBar;
