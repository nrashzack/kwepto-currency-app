import styled from "styled-components/macro";
import ReactPaginate from "react-paginate";

export const ExchangeBannerStyled = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 300px;
  margin-top: 100px;

  @media (max-width: 425px) {
    img {
      width: 300px;
      height: 100%;
    }
  }
`;

export const ExchangeContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 0.5em;
  row-gap: 1em;
  place-items: center;
  @media (max-width: 768px) {
  }
`;

export const CardStyled = styled.div`
  background-color: #fff;
  width: 300px;
  height: 350px;
  display: grid;
  place-items: center;
  border-radius: 28px;
  .exchange-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    gap: 2em;
    height: 306px;
    width: 248px;
  }

  img {
    width: 80px;
    height: auto;
    border-radius: 50%;
  }
  .exchange-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    strong {
      font-size: 18px;
      font-weight: 800;
    }
    p {
      font-size: 18px;
      color: #8a8a8a;
      font-weight: 700;
    }
  }
  .exchange-info {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
  .exchange-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 18px;
      font-weight: 800;
    }
    p {
      font-size: 15px;
      color: #8a8a8a;
      font-weight: 700;
    }
    .green {
      color: #1a8917;
    }
    .yellow {
      color: #ffc700;
    }
  }
  .bars {
    padding: 0 0.5em;
    border-right: 2px solid #484848;
    border-left: 2px solid #484848;
  }
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
