import styled from "styled-components";

export const AppContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 20vw auto;
  background-color: red;
`;

export const SideBarContainerStyled = styled.div`
  position: fixed;
  width: 20vw;
  height: 100vh;
  background-color: #def3ff;
`;

export const MainContainerStyled = styled.div`
  grid-column-start: 2;
  margin: 2.5em auto;
  width: 55vw;
  background-color: yellow;
`;

export const HeaderStyled = styled.div`
  width: 100%;
  margin-bottom: 1.5em;
  background-color: aqua;
  h1 {
    font-size: 3rem;
    margin-bottom: 0.25em;
  }
  p {
    font-size: 1.25rem;
  }
`;
