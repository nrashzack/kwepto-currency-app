import React from "react";
import { HomeContainer, HomeBg, VideoBg } from "../styles/Homepage.styled";
import Video from "../assets/video.mp4";

const HomeSection = () => {
  return (
    <HomeContainer>
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HomeBg>
    </HomeContainer>
  );
};

export default HomeSection;
