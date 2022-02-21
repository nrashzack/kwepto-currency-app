import styled from "styled-components";

export const CardCointainerCenterStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
`;

export const CardStyled = styled.div`
  width: 15rem;
  padding: 30px 20px 30px 30px;
  justify-content: flex-start;
  background: #ffffff;
  border: 2px solid #636e72;
  border-radius: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: wrap;

  img {
    padding-right: 1rem;
    width: 30px;
  }

  p {
    padding-left: 5px;
  }
`;

export const RowStyled = styled.div`
  justify-content: center;
  padding-top: 10px;
  align-items: center;
  font-size: 1.2rem;
  place-items: center;
`;

export const stylingex = styled.div`
  justify-content: center;
`;
