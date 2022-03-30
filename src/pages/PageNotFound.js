import React from "react";
import { PageNotFoundStyled, SectionStyled } from "../styles/Main.styled";
import ErrorImg from "../assets/Error404Img.svg";

const PageNotFound = () => {
  return (
    <SectionStyled>
      <PageNotFoundStyled>
        <div className=".center-elements">
          <img src={ErrorImg} alt="error" />
          <div className="error-msg">
            <strong>404</strong>
            <p>Page Not Found</p>
          </div>
        </div>
      </PageNotFoundStyled>
    </SectionStyled>
  );
};

export default PageNotFound;
