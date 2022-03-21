import styled from "styled-components/macro";

export const CardStyled = styled.div`
  text-align: center;
  padding: 1em;
  margin-top: 20px;
  .market-title {
    font-size: clamp(2em, 2.5vw, 5em);
    font-weight: bold;
    margin-bottom: 0.5em;
    color: #484848;
  }
  .market-info-container {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    column-gap: 1em;
    row-gap: 1em;
  }
`;

export const MarketListStyled = styled.div`
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25em;
  .market-name {
    strong {
      font-size: 25px;
    }
    &:hover {
      color: #f7a528;
    }
  }
  .market-volume-score {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1em 0em;
  }
  .market-volume {
    display: flex;
    flex-direction: column;
    text-align: left;
    p {
      font-size: 15px;
    }
    strong {
      font-size: 25px;
    }
  }
  .market-score {
    background-color: #00c118;
    border-radius: 20px;
    padding: 10px;
    color: white;
    font-weight: bold;
  }
`;
