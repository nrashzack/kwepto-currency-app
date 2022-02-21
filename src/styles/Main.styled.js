import styled from "styled-components";

export const AppContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 20vw auto;
`;

export const SideBarContainerStyled = styled.div`
  position: fixed;
  width: 20vw;
  height: 100vh;
  background-color: #def3ff;
`;

export const MainContainerStyled = styled.div`
  grid-column-start: 2;
  margin: 0 auto;
  width: 60vw;
`;

export const HeaderStyled = styled.div`
  width: 100%;
  margin-bottom: 1.5em;
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

export const CardStyled = styled.div`
  padding: 1em 1.5em;
  border-radius: 25px;
  width: 60vw;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;
