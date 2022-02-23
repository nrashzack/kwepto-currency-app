import styled from "styled-components";
import { device } from "../devices";

export const ListHeaderStyled = styled.div`
  border-bottom: solid 2px #dfe6e9;
  display: grid;
  /* grid-template-columns: 0.25fr 1fr repeat(3, 0.5fr) 0.8fr; */
  grid-template-columns: 10% 25% repeat(3, 15%) 20%;
  place-items: end;
  width: 55vw;
  padding: 1em;

  & .center {
    place-self: center;
  }
`;

export const CoinListStyled = styled.div`
  display: grid;
  /* grid-template-columns: 0.25fr 1fr repeat(3, 0.5fr) 0.8fr; */
  grid-template-columns: 10% 25% repeat(3, 15%) 20%;
  place-items: end;
  align-items: center;
  width: 55vw;
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

  & .coin-percent {
    color: #6ab04c;
  }

  & .red {
    color: #eb4d4b;
  }

  & .visibility {
    visibility: visible;
  }

  &:hover {
    background-color: #ecf0f1;
  }

  @media screen ${device.tablet} {
    & .visibility {
      visibility: hidden;
    }
  }
`;

export const CoinInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: start;
  img {
    width: 25px;
    border-radius: 12.5px;
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
  /* margin: 1.5em 0; */
  /* padding-left: 1rem; */
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

export const SearchBarStyled = styled.div`
  & .search-bar {
    display: flex;
    border-radius: 50px;
    width: 100%;
    padding: 0.5rem;
    padding-left: 1rem;
    font-size: 15px;

    &:hover {
      background: #eeeeee;
      color: #74b9ff;
    }
  }
`;

export const SearchStyled = styled.div`
  display: flex;
  justify-content: end;
`;

export const FilterSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: 0.8rem;
`;

export const BannerStyled = styled.div`
  background-color: black;
  width: 100%;
`;
