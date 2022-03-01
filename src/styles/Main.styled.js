import styled from "styled-components/macro";

// Base Style for App
export const AppContainerStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

// Base Style for NavBar
export const NavContainerStyled = styled.div`
  grid-row-start: 1;
`;

// Base style for MainSection
export const MainContainerStyled = styled.div`
  grid-row-start: 2;
`;

// Base style for Footer
export const FooterContainerStyled = styled.div`
  grid-row-start: 3;
`;

// For headers and big text
export const HeaderStyled = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 1em;
  h1 {
    font-size: 3em;
    margin-bottom: 0.1em;
  }
  p {
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1.2em;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 1.5em;
    }
    p {
      font-size: 0.8em;
    }
  }
`;

// Loading Screen Style
export const LoadingScreenStyled = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  h1 {
    font-size: 3rem;
  }
`;

// Apply card-style background with shadow
export const CardStyled = styled.div`
  display: grid;
  place-items: center;
  padding: 1em;
  border-radius: 25px;
  border: 2.5px solid #484848;
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

// To give center text and items within a component
export const SectionStyled = styled.div`
  margin: 0em auto;
  width: 55vw;
  min-width: 768px;
  padding: 1.5em 0em;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

// Center Everyhthing
export const CenterEverythingStyled = styled.div`
  display: grid;
  place-items: center;
`;

export const WhiteBgStyled = styled.div`
  background-color: #fff;
`;

export const GreyBgStyled = styled.div`
  background-color: #484848;
  height: 100%;
`;
