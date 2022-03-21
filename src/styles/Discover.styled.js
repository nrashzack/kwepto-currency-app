import styled from "styled-components/macro";

export const DiscoverTitleStyled = styled.div`
  text-align: left;
  width: 100%;
  margin: 1.5em 0;
  h1 {
    font-size: clamp(20px, 10vw, 25px);
    font-weight: 500;
  }
  @media (max-width: 945px) {
    text-align: center;
  }
`;

export const DiscoverContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 2em;

  .coins-row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, auto));
    column-gap: 2.5em;
    row-gap: 1.5em;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 50vh;

    @media (max-width: 1279px) {
      justify-content: center;
    }
    @media (max-width: 500px) {
      margin: 0 auto;
      max-width: 375px;
    }
  }
`;

export const RealTimeContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .price-column {
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #fff;
    width: 318px;
    height: 200px;
    border-radius: 25px;

    strong {
      color: #f7a528;
      font-size: 35px;
      font-weight: 800;
    }
    p {
      font-size: 25px;
      font-weight: 500;
    }
  }
`;

export const DiscoverCardStyled = styled.div`
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 25px;

  /* regular size cards */
  .regular {
    margin: 0 auto;
    max-width: 220px;
    height: 230px;
    padding: 1em;
    border: 1px solid red;
  }

  /* content within the regular card */
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    .discover-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      border: 1px solid green;
      img {
        width: 50px;
        height: 100%;
        border-radius: 25px;
        margin-bottom: 0.5em;
      }
      strong {
        font-size: 18px;
        font-weight: 800;
        color: #484848;
        width: 100%;
        line-height: 1;
      }
      p {
        font-size: 12px;
        font-weight: 800;
        color: #8a8a8a;
      }
    }
    .discover-footer {
      border: 1px solid green;
    }
  }
`;
