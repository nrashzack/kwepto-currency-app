import styled from "styled-components";

// Base Style for Cointainer
export const AppContainerStyled = styled.div`
  display: grid;
  grid-template-rows: 2.5vw auto;
`;

// Base Style for Cointainer
export const NavBarContainerStyled = styled.div`
  height: 2.5vw;
  background-color: #ecf0f1;
  padding: 0.5em 0em;
`;

// Base style for Container
export const MainContainerStyled = styled.div`
  grid-row-start: 2;
  margin: 0 auto;
  width: 55vw;
`;

// For headers and big text
export const HeaderStyled = styled.div`
  width: 100%;
  margin-bottom: 1em;
  h1 {
    font-size: 2rem;
    margin-bottom: 0.25em;
  }
  p {
    font-size: 1rem;
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
  width: 60vw;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

// To give space between components
export const SectionStyled = styled.div`
  margin: 1em auto;
`;
