import styled from "styled-components/macro";

export const CoinInfoDataStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  color: #484848;
  background-color: red;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .coin-info-card {
    background-color: white;
    padding: 50px;
    border-radius: 50px;
    width: 50%;
    box-sizing: border-box;
    margin: auto;

    @media (max-width: 768px) {
      width: 90%;
    }
  }
  .coin-data-card {
    background-color: green;
    padding: 50px;
    width: 50%;
    box-sizing: border-box;

    @media (max-width: 768px) {
      width: 90%;
      padding: 30px;
    }
  }
  .coin-rank-categories {
    background-color: blue;
    display: flex;
    margin-top: 20px;
    column-gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      row-gap: 10px;
    }
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
    background-color: yellow;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
  }
  .coin-website {
    padding: 10px;
    border-radius: 10px;
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
    font-size: clamp(20px, 2vw, 30px);
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
    background-color: purple;
    display: flex;
    margin-top: 20px;
    column-gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      row-gap: 20px;
    }
  }
  .coin-price-red {
    background-color: #f5c8c8;
    color: #7e0000;
    display: flex;
    justify-content: center;
    align-items: center;
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
    align-items: center;
    padding: 10px;
    width: 6rem;
    border-radius: 50px;
    font-size: 20px;
    font-weight: bold;
    column-gap: 3px;
  }
`;

export const CoinNameStyled = styled.div`
  display: flex;
  .coin-symbol-name {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: clamp(30px, 2vw, 60px);
    font-weight: bold;
    line-height: auto;
    justify-content: center;
  }
  span.coin-symbol {
    font-weight: bold;
    font-size: clamp(20px, 2.5vw, 30px);
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
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
  .market-data {
    margin: 20px;
    box-sizing: border-box;
  }
  .market-value {
    font-weight: bold;
    margin-top: 10px;
    box-sizing: border-box;
  }
`;

export const CoinConverterStyled = styled.div`
  background-color: red;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: #484848;
  .converter-title {
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
  }
  form {
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    width: 100%;
    border-radius: 30px;
    box-sizing: border-box;
  }
  .coin-amount-value {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    font-weight: bold;
    padding: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: space-evenly;
      text-align: center;
    }
  }
  .header-title {
    display: flex;
    align-items: center;
    column-gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  img.coin-image {
    height: 50px;
    width: 50px;

    @media (max-width: 768px) {
      height: 40px;
      width: 40px;
    }
  }
  img.usd-image {
    height: 60px;
    width: 60px;

    @media (max-width: 768px) {
      height: 45px;
      width: 45px;
    }
  }
  .coin-symbol {
    font-size: clamp(8px, 1.5vw, 12px);
  }
  .coin-name {
    font-size: clamp(12px, 1.5vw, 20px);
  }
  input {
    border: 1px solid #d3d3d3;
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    font-weight: bold;
    font-size: clamp(12px, 2vw, 20px);
    box-sizing: border-box;

    @media (max-width: 768px) {
      padding: 5px;
    }
  }
  .converter-symbol {
    color: #484848;
    display: flex;
    align-items: center;
  }
`;

export const CoinGraphStatsStyled = styled.div`
  display: flex;
  background-color: red;
  margin-top: 20px;
  justify-content: space-between;
  color: #484848;
  column-gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
  .coin-graph {
    background-color: white;
    border-radius: 20px;
    padding: 50px;
    width: 60%;
    box-sizing: border-box;

    @media (max-width: 768px) {
      width: 90%;
      height: auto;
      padding: 10px;
    }
  }
  .coin-stats {
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    width: 40%;

    @media (max-width: 768px) {
      width: 90%;
    }
  }
  .coin-stats-header {
    display: flex;
    justify-content: center;
    font-size: clamp(20px, 2vw, 30px);
    font-weight: bold;
    margin-bottom: 40px;
  }
  .coin-stats-list {
    display: flex;
    justify-content: space-between;
    margin: 30px;
  }
  .coin-stats-title {
    background-color: aqua;
  }
  .coin-stats-value {
    background-color: green;
    font-weight: bold;
    text-align: right;
  }
`;

export const CoinDescriptionStyled = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  .desc-main {
    background-color: yellow;
    @media (max-width: 768px) {
      width: 90%;
      margin: auto;
    }
  }
  .desc-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #484848;
  }
  .desc-content {
    color: #484848;
    line-height: 2;
  }
`;
