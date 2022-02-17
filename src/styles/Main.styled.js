import styled from "styled-components";

export const AppContainerStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 20vw) 1fr;
`;

export const SideBarContainerStyled = styled.div`
  z-index: 1;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 20vw;
  min-width: 300px;
  background-color: #def3ff;
  overflow-x: hidden;
`;

export const MainContainerStyled = styled.div`
  margin-left: 20vw;
`;

export const HeaderStyled = styled.div`
  width: 100%;
  background-color: red;
  h1 {
    font-size: 3rem;
    margin-bottom: 0.25em;
  }
  p {
    font-size: 1.25rem;
  }
`;
