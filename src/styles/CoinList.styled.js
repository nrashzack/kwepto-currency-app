import styled from "styled-components/macro";
import ReactPaginate from "react-paginate";
import Select from "react-select";

export const CoinTableStyled = styled.table`
  font-size: clamp(10px, 1.5vw);
  width: 100%;
  min-width: 375px;
  th,
  td {
    padding: 0.5em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  th {
    border-bottom: solid 2px #dfe6e9;
    padding: 1em;
  }

  tr {
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5em;
  }

  tbody > tr {
    &:hover {
      background-color: #ecf0f1;
    }
  }

  .rank {
    width: 10%;
    display: grid;
    place-items: center;
  }

  .coin-name {
    min-width: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5em;

    img {
      width: 25px;
      height: auto;
      border-radius: 25px;
    }
  }

  .bold {
    font-weight: bolder;
  }

  .coin-percent {
    color: #6ab04c;
  }

  .red {
    color: #eb4d4b;
  }

  .visibility {
    visibility: visible;
  }
`;

export const ListHeaderStyled = styled.div`
  border-bottom: solid 2px #dfe6e9;
  display: grid;
  grid-template-columns: 0.25fr 1fr repeat(3, 0.5fr) 1fr;
  align-items: center;
  text-align: right;
  width: 100%;
  min-width: 768px;
  padding: 1em;

  .center {
    place-self: center;
  }

  .visibility {
    visibility: visible;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 5%repeat (4, 20%);
    .visibility {
      visibility: hidden;
    }
  }
`;

export const CoinListStyled = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 1fr repeat(3, 0.5fr) 1fr;
  align-items: center;
  text-align: right;
  width: 100%;
  min-width: 768px;
  height: 4vh;
  padding: 1em;

  p {
    color: #000;
  }

  .center {
    place-self: center;
  }

  .bold {
    font-weight: bolder;
  }

  .coin-percent {
    color: #6ab04c;
  }

  .red {
    color: #eb4d4b;
  }

  .visibility {
    visibility: visible;
  }

  &:hover {
    background-color: #ecf0f1;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 5%repeat (4, 20%);
    .visibility {
      visibility: hidden;
    }
  }
`;

export const CoinInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: start;
  text-align: start;
  img {
    width: 18px;
    height: auto;
    border-radius: 12.5px;
  }
  p {
    color: #636e72;
  }

  strong {
    padding: 0rem 0.5rem;
  }
`;

export const ReactSelectStyled = styled(Select)`
  width: 15%;
  text-align: center;
  margin-bottom: 1em;
  font-weight: 700;
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
