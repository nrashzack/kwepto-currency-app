import styled from "styled-components";

export const SideBarContent = styled.div`
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  span {
    font-size: 0.7rem;
    font-weight: bolder;
  }
`;

export const SideBarLogo = styled.img`
  width: 70%;
  height: auto;
`;

export const SideBarButtons = styled.button`
  background-color: #fff;
  padding: 1.2em 1.5em;
  width: 70%;
  border-radius: 25px;
  border: solid 3px #636e72;

  span {
    font-weight: bolder;
    font-size: 1rem;
  }
`;
