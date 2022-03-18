import styled from "styled-components/macro";

export const DiscoverTitleStyled = styled.div`
  h1 {
  }
  p {
  }
`;

export const DiscoverContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2em;

  .topCoins {
  }
  .trendingCoins {
  }
`;

export const DiscoverCardStyled = styled.div`
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 25px;
  .big {
    width: 315px;
    height: 315px;
  }
  .regular {
    width: 215px;
    height: 150px;
  }
`;
