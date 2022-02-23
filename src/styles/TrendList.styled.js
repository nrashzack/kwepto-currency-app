import Marquee from "react-fast-marquee";
import styled from "styled-components";

export const CardCointainerCenterStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardContainerStyled = styled.div`
  display: flex;
  padding: 1rem 0 1em 0;
  flex-direction: row;
  flex-flow: nowrap;
  justify-content: start;
  overflow: hidden;
`;

export const CardStyled = styled.div`
  width: 15rem;
  padding: 20px 20px 30px 30px;
  justify-content: flex-start;
  background: #ffffff;
  border-radius: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: wrap;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  img {
    padding-right: 1rem;
    width: 30px;
  }

  p {
    padding-left: 5px;
  }
`;

export const RowStyled = styled.div`
  justify-content: center;
  padding-top: 10px;
  align-items: center;
  font-size: 1.2rem;
  place-items: center;
`;
