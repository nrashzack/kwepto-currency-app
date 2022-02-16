import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 15%) 1fr;
  height: 100vh;
`;

export const SideBarContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  background-color: #def3ff;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const MainContainer = styled.div`
  margin: 0 auto;
  width: 75%;
  padding-top: 5em;
`;

export const Header = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 0.25em;
  }
  p {
    font-size: 1.25rem;
  }
`;
