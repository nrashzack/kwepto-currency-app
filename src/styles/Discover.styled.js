import styled from "styled-components/macro";

export const DiscoverTitleStyled = styled.div`
  text-align: center;
  width: 100%;
  h1 {
    font-size: clamp(25px, 10vw, 55px);
    font-weight: 800;
  }
  p {
  }
`;

export const DiscoverContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 2em;

  .topCoins {
    display: grid;
    align-items: center;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    column-gap: 1em;
    row-gap: 1em;
  }

  .trendingCoins {
  }
`;

export const DiscoverCardStyled = styled.div`
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 25px;

  /* regular size cards */
  .regular {
    max-width: 280px;
    height: 300px;
    padding: 1em;
    width: 100%;
  }

  /* content within the regular card */
  .content-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 40px;
      height: 100%;
      border-radius: 25px;
    }
    h1 {
      font-size: 20px;
      font-weight: 800;
      color: #484848;
    }
    p {
      font-size: 15px;
      font-weight: 800;
      color: #8a8a8a;
    }
  }
`;
