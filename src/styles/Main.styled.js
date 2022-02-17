import styled from "styled-components";

export const AppContainerStyled = styled.div`
  display: grid;
  /* grid-template-columns: minmax(300px, 20vw) auto; */
  grid-template-columns: "nav content";
`;

export const SideBarContainerStyled = styled.div`
  grid-area: nav;
  z-index: 1;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 20vw;
  min-width: 300px;
  overflow-x: hidden;
  background-color: #def3ff;
`;

export const MainContainerStyled = styled.div`
  grid-area:"content"
  width: 80vw;
  margin-left: 20vw;
  padding: 4em 10em;
`;

export const HeaderStyled = styled.div`
  width: 100%;
  h1 {
    font-size: 3rem;
    margin-bottom: 0.25em;
  }
  p {
    font-size: 1.25rem;
  }
`;
