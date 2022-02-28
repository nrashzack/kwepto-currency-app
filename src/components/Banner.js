import React from "react";
import { SectionStyled } from "../styles/Main.styled";
import {
  BannerContainer,
  BannerImgStyled,
  BannerTextStyled,
} from "../styles/Banner.styled";
import IconBanner from "../iconComponents/IconBanner";

const Banner = () => {
  return (
    <SectionStyled>
      <BannerContainer>
        <BannerTextStyled>
          <h1>KWEPTO</h1>
          <p>ALL YOUR COINS UNDER ONE ROOF</p>
        </BannerTextStyled>
        <BannerImgStyled>
          <IconBanner style={{ height: 500, width: "auto" }} />
        </BannerImgStyled>
      </BannerContainer>
    </SectionStyled>
  );
};

export default Banner;
