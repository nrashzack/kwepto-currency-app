import React from "react";
import { FooterStyled } from "../styles/Footer.styled";
import { GreyBgStyled, FooterContainerStyled } from "../styles/Main.styled";

const Footer = () => {
  return (
    <FooterContainerStyled>
      <GreyBgStyled>
        <FooterStyled>
          <p>© 2022 Kwepto. All rights reserved</p>
        </FooterStyled>
      </GreyBgStyled>
    </FooterContainerStyled>
  );
};

export default Footer;
