import styled from "styled-components/macro";

export const LiveContainerStyled = styled.div`
  display: grid;
  place-content: center;
`;

export const LiveHeaderStyled = styled.div`
  margin: 2em 0em;
  h1 {
    font-size: clamp(25px, 15vw, 50px);
    font-weight: 800;
    color: #484848;
  }
  p {
    font-size: clamp(20px, 10vw, 25px);
    font-weight: 700;
    color: #8a8a8a;
  }
`;

export const GraphContainerStyled = styled.div`
  width: 800px;
  height: 500px;
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 25px;
  padding: 2em;
  display: grid;
  place-content: center;

  canvas {
    height: 250px;
    width: auto;
  }
`;

export const CoinInfoStyled = styled.div`
  width: 325px;
  height: 500px;
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 25px;
  padding: 2em;

  .info-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    height: 100%;
  }

  .info-row {
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 1.2;

    strong {
      font-size: 24px;
      font-weight: 800;
      color: #4a4a4a;
    }
    p {
      font-size: 20px;
      font-weight: 500;
      color: #8a8a8a;
    }
  }
`;
