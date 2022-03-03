import styled from "styled-components";

export const CoinInfoDataStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 300px;
  margin-top: 30px;
  color: #484848;
  /* background-color: red; */

  .coin-info-card {
    background-color: white;
    padding: 50px;

    /* border: 1px solid black; */
    border-radius: 50px;
    /* box-shadow: lightgray 2px 2px 10px; */
  }
  .coin-data-card {
    /* background-color: white; */
    padding: 50px;
    width: 40vw;

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
  width: 20vw;
  border: 1px solid #d3d3d3;
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
  /* background-color: red; */
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #484848;
  .converter-title {
    /* background-color: red; */
    margin-bottom: 10px;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
  form {
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    /* border: 1px solid #d3d3d3; */
    width: 50vw;
    border-radius: 30px;
  }
  .coin-amount-value {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    font-weight: bold;
    padding: 20px;
    /* background-color: blue; */
  }
  .header-title {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  img.coin-image {
    height: 50px;
    width: 50px;
  }
  img.usd-image {
    height: 60px;
    width: 60px;
  }
  .coin-symbol {
    font-size: 10px;
  }
  .coin-name {
    font-size: 15px;
  }
  input {
    border: 1px solid #d3d3d3;
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    box-sizing: border-box;
  }
  .converter-symbol {
    color: #484848;
    display: flex;
    align-items: center;
  }
`;

export const CoinGraphStatsStyled = styled.div`
  display: flex;
  /* background-color: red; */
  margin: 20px auto;
  justify-content: center;
  column-gap: 20px;
  color: #484848;
  .coin-graph {
    background-color: white;
    border-radius: 20px;
    padding: 50px;
    width: 40vw;
    height: 40vh;
  }
  .coin-stats {
    background-color: white;
    border-radius: 20px;
    padding: 20px;
  }
  .coin-stats-header {
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .coin-stats-list {
    display: flex;
    justify-content: space-between;
    margin: 30px;
    column-gap: 20px;
  }
  .coin-stats-title {
    /* background-color: aqua; */
  }
  .coin-stats-value {
    /* background-color: green; */
    font-weight: bold;
  }
`;

export const CoinDescriptionStyled = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  margin: 0rem 20rem;
  justify-content: center;
  /* .desc-main {
    background-color: orange;
  } */
  .desc-title {
    /* background-color: green; */
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .desc-content {
    /* background-color: aqua; */
    line-height: 2;
  }
`;
