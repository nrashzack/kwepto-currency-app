import styled from "styled-components";

export const NavBarLinksCointainerStyled = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  width: 55vw;

  span {
    font-size: 1em;
    font-weight: bolder;
  }

  li {
    display: grid;
    place-items: center;
    width: 15%;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const NavBarLogoStyled = styled.img`
  width: 60%;
  height: auto;
`;

export const NavBarButtonsStyled = styled.button`
  background-color: #fff;
  padding: 1em 1.5em;
  width: 55%;
  border-radius: 25px;
  border: solid 3px #636e72;

  span {
    font-weight: bolder;
    font-size: 1rem;
  }
`;

export const NavBarEndStyled = styled.li`
  position: absolute;
  bottom: 0;
`;

export const NavBarFooterStyled = styled.span`
  font-size: 2.5rem;
  font-weight: bolder;
`;
