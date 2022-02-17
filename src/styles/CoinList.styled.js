import styled from "styled-components";

export const CoinListStyled = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 1fr repeat(2, 0.5fr) 1fr;
  place-items: end;
  align-items: center;
  width: 55vw;
  padding: 1rem 1rem;
  border-bottom: solid 2px #dfe6e9;

  & .bold {
    font-weight: bolder;
  }

  & .coin_percent {
    color: #6ab04c;
  }

  & .red {
    color: #eb4d4b;
  }

  &:hover {
    background-color: #f5f6fa;
  }
`;

export const CenterCoinStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  place-items: center;
`;

export const CoinInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  img {
    width: 25px;
  }
  strong {
    padding: 0rem 0.5rem;
  }

  &:hover {
    cursor: pointer;
  }
`;
