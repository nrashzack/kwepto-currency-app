import styled from "styled-components/macro";

// Base Style for App
export const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

// Base Style for NavBar
export const NavStyled = styled.nav`
  grid-row-start: 1;
  background-color: red;
`;

// Base style for MainSection
export const BodyStyled = styled.div`
  grid-row-start: 2;
  margin: 2em 0;
`;

// Base style for Footer
export const FooterStyled = styled.footer`
  grid-row-start: 3;
`;

// For headers and big text
export const HeaderStyled = styled.div`
  text-align: center;
  margin: 0.5em;
  h1 {
    font-size: clamp(30px, 3vw, 50px);
  }
  p {
    font-size: clamp(18px, 1.5vw, 25px);
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
export const SectionStyled = styled.section`
  margin-inline: auto;
  max-width: 1028px;
  min-width: 15vw;
  margin-top: 2em;
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
