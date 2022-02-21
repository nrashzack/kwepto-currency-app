import styled from "styled-components";

export const CoinListStyled = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 1fr repeat(4, 0.5fr) 1fr;
  place-items: center;
  width: 55vw;
  padding: 1rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  place-items: center;
  z-index: 1;
`;

export const CoinInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: start;
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

export const ListHeaderStyled = styled.div`
  border-top: solid 2px;
  border-bottom: solid 2px;
  display: grid;
  grid-template-columns: 0.25fr 1fr repeat(4, 0.5fr) 1fr;
  place-items: center;
  width: 55vw;
  padding: 1rem;
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

export const SearchBarStyled = styled.div`
  .search-bar {
    border: solid;
    border-radius: 50px;
    width: 55vw;
    padding: 0.5rem;
    font-size: 20px;
    text-align: center;
  }
`;
