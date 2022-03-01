import styled from "styled-components/macro";

export const FooterContainerStyled = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .footer-txt {
    padding: 2em;
    width: 100%;
    background-color: #484848;
    display: grid;
    place-items: center;
    p {
      font-size: clamp(15px, 1.5vw, 20px);
      font-weight: 400;
      color: #fff;
    }
  }
`;
