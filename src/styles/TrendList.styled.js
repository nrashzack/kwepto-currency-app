import styled from "styled-components/macro";

export const TrendingCointainerStyled = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 1.5em 0em;
`;

export const CardContainerStyled = styled.div`
  display: flex;
  padding: 1em 0;
  flex-flow: nowrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
`;

export const CardStyled = styled.div`
  width: clamp(150px, 12vw, 300px);
  height: 5rem;
  min-height: 3.75rem;
  padding: 1.5em 2.5em;
  gap: 0.5em;
  background: #ffffff;
  border: 2.5px solid #484848;
  border-radius: 25px;
  margin-left: 2em;
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: flex-start;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  .coin-name {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    img {
      width: 28px;
      height: auto;
      border-radius: 25px;
    }

    strong {
      font-size: clamp(15px, 1.5vw, 20px);
    }

    p {
      font-size: clamp(15px, 1.5vw, 20px);
      font-weight: 100;
    }
  }

  .coin-price {
    padding-top: 0.5em;
    font-size: clamp(18px, 1.5vw, 28px);
  }
`;
