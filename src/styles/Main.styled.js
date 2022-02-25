import styled from "styled-components";

// Base Style for Cointainer
export const AppContainerStyled = styled.div`
  display: grid;
  grid-template-rows: 2.5vw auto;
`;

// Base Style for Cointainer
export const NavBarContainerStyled = styled.div`
  height: 2.5vw;
  background-color: ${(props) => (props.orange ? "#F7A528" : "#FFF")};
  padding: 0.5em 0em;
`;

// Base style for Container
export const MainContainerStyled = styled.div`
  grid-row-start: 2;
  place-content: center;
  margin: 0 auto;
  width: 55vw;
`;

// For headers and big text
export const HeaderStyled = styled.div`
  text-align: ${(props) => (props.left ? "left" : "center")};
  width: 100%;
  margin-bottom: 1em;
  h1 {
    font-size: 3em;
    margin-bottom: 0.1em;
  }
  p {
    font-size: 1.5rem;
  }
`;

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
  padding: 1em 1.5em;
  border-radius: 25px;
  border: 2.5px solid #484848;
  width: auto;
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

// To give space between components
export const SectionStyled = styled.div`
  margin: 1.5em auto;
  width: 55vw;
`;

// Center Everyhthing
export const CenterEverythingStyled = styled.div`
  display: grid;
  place-items: center;
`;
