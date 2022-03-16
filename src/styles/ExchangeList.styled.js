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
`;

export const ExchangeContainerStyled = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.5em;
  row-gap: 1em;
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
    padding: 1em;
    gap: 2em;
  }

  img {
    width: 65px;
    height: auto;
    border-radius: 50%;
  }
  .exchange-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    strong {
      font-size: 20px;
      font-weight: 800;
    }
    p {
      font-size: 20px;
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
      font-weight: 600;
    }
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
