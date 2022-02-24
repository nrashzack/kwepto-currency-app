import styled from "styled-components";

export const NavBarLinksCointainerStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 55vw;

  span {
    font-weight: bolder;
    color: #000;
  }

  ul {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  li {
    &:hover {
      cursor: pointer;
    }
  }

  & .logo {
    width: 5rem;
  }
`;
