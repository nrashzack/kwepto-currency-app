import styled from "styled-components";
import { device } from "../devices";
import ReactPaginate from "react-paginate";
import Select from "react-select";

export const ListHeaderStyled = styled.div`
  border-bottom: solid 2px #dfe6e9;
  display: grid;
  grid-template-columns: 10% 25% repeat(3, 15%) 20%;
  align-items: center;
  text-align: right;
  width: 50vw;
  padding: 1em;

  & .center {
    place-self: center;
  }

  & .visibility {
    visibility: visible;
  }
`;

export const CoinListStyled = styled.div`
  display: grid;
  grid-template-columns: 10% 25% repeat(3, 15%) 20%;
  align-items: center;
  text-align: right;
  width: 50vw;
  height: 4vh;
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
`;

export const CoinInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: start;
  text-align: start;
  img {
    width: 25px;
    height: auto;
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

export const FilterCoinListButtonStyled = styled.button`
  padding: 0.5em 1.5em;
  margin-right: 0.5em;
  background-color: #484848;
  border-radius: 25px;

  span {
    color: #fff;
  }
`;

export const CurrenctDropdownStyled = styled.select`
  display: grid;
  place-items: center;
  border: 2.5px solid #484848;
  border-radius: 25px;
  padding: 0.5em;
`;

export const ReactSelectStyled = styled(Select)`
  width: 15%;
  text-align: center;
`;

export const PageNumberStyled = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  a {
    margin: 0 0.5em;
    &:active {
      color: #f7a528;
    }
  }
`;
