import React, { useEffect, useState } from "react";

import logo from "../assets/paw.png";
import bitcoin from "../assets/bitcoin.png";
import trend from "../assets/trend.png";
import faq from "../assets/faq.png";
import blog from "../assets/blog.png";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: #716969;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: #5c4d7d;
  width: 4rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 4em;
  img {
    width: 40px;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5c4d7d;
  padding: 1rem 0 0 1.2rem;
  position: absolute;
  top: 7rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled.i`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 2rem 3rem;
  cursor: pointer;
  display: flex;
  padding-left: 0rem;
  &:hover {
    border-right: 5px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.7rem;
    height: 1.5rem;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Side = () => {
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
