import React, { useState } from "react";
import logo from "../assets/paw.png";
import bitcoin from "../assets/bitcoin.png";
import trend from "../assets/trend.png";
import faq from "../assets/faq.png";
import blog from "../assets/blog.png";
import {
  Button,
  SidebarContainer,
  Logo,
  SlickBar,
  Item,
  Text,
} from "../styles/Sidebar.styled";

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleMouseIn = () => {
    setClick(true);
  };
  const handleMouseOut = () => {
    setClick(false);
  };

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}></Button>
      <SidebarContainer
        onMouseEnter={() => handleMouseIn()}
        onMouseLeave={() => handleMouseOut()}
      >
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/"
          >
            <img src={bitcoin} alt="Home" />
            <Text clicked={click}>Price Tracker</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/team"
          >
            <img src={trend} alt="Now Trending" />
            <Text clicked={click}>Now Trending</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/calender"
          >
            <img src={faq} alt="FAQs" />
            <Text clicked={click}>FAQs</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/documents"
          >
            <img src={blog} alt="Blog" />
            <Text clicked={click}>Blog</Text>
          </Item>
        </SlickBar>

        <div className="footer">
          <p>v1.0 Made by BeSquare @2022</p>
        </div>
      </SidebarContainer>
    </Container>
  );
};

export default Side;
