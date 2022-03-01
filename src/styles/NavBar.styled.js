import styled from "styled-components/macro";

export const NavStyled = styled.nav`
  background-color: ${(props) => (props.orange ? "#F7A528" : "#FFF")};
`;

export const NavLinksStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  p {
    font-size: 1rem;
    font-weight: 400;
  }

  span {
    color: #fff;
    font-weight: bold;
  }

  ul {
    width: ${(props) => (props.center ? "100%" : "50%")};
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) =>
      props.center ? "space-around" : "space-between"};
  }

  & .logo {
    display: grid;
    place-items: center;
    width: 100px;
  }
`;
