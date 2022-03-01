import styled from "styled-components";

export const CoinInfoDataStyled = styled.div`
  display: flex;
  /* background-color: red; */
  color: #484848;

  .coin-info-card {
    background-color: white;
    padding: 50px;
    /* border: 1px solid black; */
    border-radius: 50px;
    box-shadow: lightgray 2px 2px 10px;
  }
  .coin-data-card {
    /* background-color: white; */
    padding: 20px;
    /* border: 1px solid black;
    border-radius: 50px; */
  }
  .coin-rank-categories {
    display: flex;
    margin-top: 20px;
    column-gap: 10px;
  }
  .coin-rank {
    background-color: #d3d3d3;
    padding: 15px;
    border-radius: 50px;
  }
  .coin-categories {
    background-color: #d3d3d3;
    padding: 15px;
    border-radius: 50px;
  }
  .coin-website-score {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
  }
  .coin-website {
    border: 1px solid;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: #484848;
  }
  a {
    color: white;
  }
  .coin-score-main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .coin-score {
    background-color: #d4f5c8;
    color: #287e00;
    font-size: 30px;
    font-weight: bold;
    padding: 20px;
    border-radius: 20px;
  }
  .coin-price {
    font-size: 50px;
    font-weight: bold;
  }
  .coin-price-change {
    width: 100px;
    margin-bottom: 10px;
  }
  .coin-market-main {
    /* background-color: green; */
    display: flex;
    margin-top: 20px;
    column-gap: 20px;
  }
  .coin-price-red {
    background-color: #f5c8c8;
    color: #7e0000;
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 6rem;
    border-radius: 50px;
    font-size: 20px;
    font-weight: bold;
    column-gap: 3px;
  }
  .coin-price-green {
    background-color: #d4f5c8;
    color: #287e00;
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 6rem;
    border-radius: 50px;
    font-size: 20px;
    font-weight: bold;
    column-gap: 3px;
  }
`;

export const CoinInfoStyled = styled.div`
  display: flex;
  .coin-symbol-name {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: 40px;
  }
  span.coin-symbol {
    font-weight: bold;
  }
  img {
    width: 100px;
    height: 100px;
  }
`;

export const CoinDataStyled = styled.div`
  background-color: white;
  padding: 10px;
  width: 12vw;
  border: 1px solid #484848;
  border-radius: 50px;
  font-size: 15px;
  .market-data {
    margin: 20px;
  }
  .market-value {
    font-weight: bold;
    margin-top: 10px;
  }
`;

export const CoinConverterStyled = styled.div`
  background-color: white;
  margin-top: 20px;
  padding: 30px;
  border-radius: 30px;
  box-shadow: lightgray 2px 2px 10px;
  form {
    display: flex;
    justify-content: space-evenly;
  }
  .coin-amount-value {
    display: flex;
    align-items: center;
    column-gap: 15px;
    font-weight: bold;
  }
  input {
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    width: 100%;
  }
  .converter-text {
    font-size: 30px;
    color: #484848;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
`;
