import styled from "styled-components";

export const CardStyled = styled.div`
  display: grid;
  place-items: center;
  padding: 1em;
  border-radius: 25px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #d3d3d3;
`;

export const SectionStyled = styled.div`
  margin: 0em auto;
  width: 60vw;
  min-width: 768px;
  padding: 1.5em 0em;
  .market-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #484848;
  }
`;

export const MarketHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 50vw;
  border-bottom: solid 2px #dfe6e9;
  text-align: right;
  padding: 1em;
  .source {
    text-align: left;
  }
`;

export const MarketListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  text-align: right;
  align-items: center;
  padding: 10px;
  width: 50vw;
  .market-name {
    text-align: left;
  }
  .market-pair {
    font-weight: bold;
  }
  .market-score {
    background-color: #00c118;
    margin-left: 120px;
    border-radius: 20px;
    padding: 10px;
    color: white;
    font-weight: bold;
  }
`;
