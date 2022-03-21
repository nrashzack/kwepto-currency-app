import styled from "styled-components/macro";

export const NavContainerStyled = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  z-index: 1000;

  li {
    font-size: clamp(12px, 5vw, 18px);
  }
`;

export const NavLinksStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding: 1em 2em;

  .logo {
    max-width: 5.5vw;
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
    width: 100%;
  }

  .end {
    justify-content: flex-end;
  }

  .responsive {
    display: none;
  }

  ul {
    gap: 1.5em;
  }

  li {
    font-size: 1.2em;
    font-weight: 500;

    :hover {
      color: #f7a528;
    }
  }

  @media (max-width: 800px) {
    padding: 0;
    align-items: center;
    justify-content: space-between;
    .logo {
      margin: 2rem;
    }
    .end,
    .links {
      display: none;
    }
    .responsive {
      display: block;
      margin: 2rem;
      z-index: 1;

      .burger {
        font-size: 45px;
        color: #484848;
      }

      ul {
        margin: 0;
        padding-top: 2.5em;
        position: fixed;
        top: 110px;
        height: 100vh;
        right: 0%;
        width: 100vw;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3em;
      }
      li {
        color: #484848;
        font-size: 1.25rem;
        font-weight: 800;
        padding: 0 2em;

        &:hover {
          color: #f7a528;
        }
      }
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

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  span {
    color: #fff;
    font-weight: bolder;
  }

  p {
    font-size: clamp(12px, 2vw, 15px);
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const DropdownLinksStyled = styled.ul`
  .dropdown-menu {
    display: none;
    position: absolute;
    top: 80px;
  }
  .clicked {
    display: block;
  }
  .dropdown-link {
  }
`;
