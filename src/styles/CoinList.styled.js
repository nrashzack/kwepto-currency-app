import styled from "styled-components";

export const ListHeaderStyled = styled.div`
  border-bottom: solid 2px #dfe6e9;
  display: grid;
  grid-template-columns: 0.25fr 1fr repeat(3, 0.5fr) 0.8fr;
  place-items: end;
  width: 50vw;
  padding: 1em;

  & .center {
    place-self: center;
  }
`;

export const CoinListStyled = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 1fr repeat(3, 0.5fr) 0.8fr;
  place-items: end;
  align-items: center;
  width: 50vw;
  padding: 1em;

  p {
    color: #000;
  }

  & .center {
    place-self: center;
  }

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
    background-color: #ecf0f1;
  }
`;

export const CoinInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: start;
  img {
    width: 25px;
  }
  p {
    color: #636e72;
  }

  strong {
    padding: 0rem 0.5rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const FilterCoinListContainerStyled = styled.div`
  margin: 1.5em 0;
`;

export const FilterCoinListButtonStyled = styled.button`
  padding: 0.5em 1.5em;
  margin-right: 0.5em;
  background-color: white;
  border: 2px solid;
  border-radius: 25px;

  span {
    font-weight: bolder;
  }
`;

export const PageNumberFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
