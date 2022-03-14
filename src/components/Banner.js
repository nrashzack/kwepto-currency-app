import React, { useState } from "react";
import BannerImg from "../assets/BannerImg.svg";
import {
  BannerContainer,
  Button,
  ArrowForward,
  ArrowRight,
  HomeContainer,
} from "../styles/Banner.styled";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const Banner = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HomeContainer>
      <BannerContainer>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="banner-txt"
        >
          <h1>KWEPTO</h1>
          <p>ALL YOUR COINS UNDER ONE ROOF</p>
        </div>

        <div data-aos="zoom-in" data-aos-duration="500" className="banner-img">
          <img src={BannerImg} alt="banner" />
        </div>
        <div data-aos="fade-right" data-aos-duration="500" className="homeBtn">
          <Button onMouseEnter={onHover} onMouseLeave={onHover}>
            <Link to="/currencies">
              <p>Let's geddit {hover ? <ArrowForward /> : <ArrowRight />}</p>
            </Link>
          </Button>
        </div>
      </BannerContainer>
    </HomeContainer>
  );
};

export default Banner;
