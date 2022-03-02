import styled from "styled-components/macro";

export const NavContainerStyled = styled.nav`
  display: flex;
  flex-direction: column;

  li {
    font-size: clamp(12px, 5vw, 18px);
  }
`;

export const NavLinksStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding: 0.85em;

  .logo {
    max-width: 5vw;
    min-width: 100px;
    margin-right: 1em;
  }

  img {
    height: 100%;
    width: 100%;
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .responsive {
    display: none;
  }

  ul {
    gap: 1em;
  }

  @media (max-width: 376px) {
    justify-content: space-between;
    .links {
      display: none;
    }
    .responsive {
      display: block;
      margin: 2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    .logo {
      margin: 2rem;
    }
  }
`;

export const CrytoMarketStyled = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  background-color: #f7a528;
  padding: 1em;

  span {
    color: #fff;
    font-weight: bolder;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
