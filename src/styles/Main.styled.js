import styled from "styled-components";

export const AppContainerStyled = styled.div`
  display: grid;
  grid-template-columns: min(300px, 15%) 1fr;
  height: 100%;
`;

export const SideBarContainerStyled = styled.div`
  z-index: 1;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  max-width: 25%;
  min-width: 300px;
  background-color: #def3ff;
  overflow-x: hidden;
`;

export const MainContainerStyled = styled.div`
  position: absolute;
  top: 0;
  left: 25%;
  width: 100%;
`;

export const HeaderStyled = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 0.25em;
  }
  p {
    font-size: 1.25rem;
  }
`;
