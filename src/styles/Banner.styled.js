import styled from "styled-components/macro";
export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

export const BannerTextStyled = styled.div`
  text-align: left;
  width: 40%;
  h1 {
    font-size: 4rem;
    font-weight: 800;
  }
  p {
    font-size: 2.5rem;
    font-weight: 400;
  }
`;

export const BannerImgStyled = styled.div`
  height: 100%;
`;

export const NewsBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
`;

export const NewsTextBanner = styled.div`
  text-align: left;

  h1 {
    font-size: 5rem;
    font-weight: 800;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
  }
`;
