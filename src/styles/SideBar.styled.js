import styled from "styled-components";

export const SideBarContentStyled = styled.ul`
  margin: 2.5em auto;
  height: 100%;

  span {
    font-size: 0.7rem;
    font-weight: bolder;
  }

  li {
    width: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 1.5em;
  }
`;

export const SideBarLogoStyled = styled.img`
  width: 60%;
  height: auto;
`;

export const SideBarButtonsStyled = styled.button`
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

export const SideBarEndStyled = styled.li`
  position: absolute;
  bottom: 0;
`;

export const SideBarFooterIconsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em 0;

  a {
    padding: 0 0.5em;
    color: #000;
  }
`;

export const SideBarFooterStyled = styled.span`
  font-size: 2.5rem;
  font-weight: bolder;
`;
