import styled from "styled-components";

export const SideBarContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  span {
    font-size: 0.7rem;
    font-weight: bolder;
  }
`;

export const SideBarLogoStyled = styled.img`
  width: 65%;
  height: auto;
`;

export const SideBarButtonsStyled = styled.button`
  background-color: #fff;
  padding: 1.2em 1.5em;
  width: 55%;
  border-radius: 25px;
  border: solid 3px #636e72;

  span {
    font-weight: bolder;
    font-size: 1rem;
  }
`;
