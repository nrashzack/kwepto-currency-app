import styled from "styled-components";

export const NavBarLinksCointainerStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 55vw;

  span {
    font-weight: bolder;
  }

  ul {
    display: flex;
    flex-direction: row;
    margin-left: 1em;
  }
  li {
    margin-right: 1em;
    &:hover {
      cursor: pointer;
    }
  }
  input {
    margin-left: 1em;
  }

  & .logo {
    width: 5rem;
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
