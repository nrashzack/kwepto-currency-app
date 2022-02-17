import styled from "styled-components";

export const CoinListStyled = styled.div`
  display: grid;
  grid-template-columns: 0.2fr repeat(6, 1fr);
  place-items: end;
  align-items: center;
  margin-bottom: 0.1em;
  width: 100%;

  img {
    width: 25px;
    height: 25px;
  }

  p {
    font-size: 1rem;
  }

  strong {
    font-size: 1.2rem;
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
  display: grid;
  grid-template-columns: 0.25fr repeat(2, 1fr) repeat(2, 0.5fr);
  place-items: start;
  align-items: center;
  width: 20vw;
  padding: 1rem 1rem;

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
