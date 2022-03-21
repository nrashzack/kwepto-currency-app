import styled from "styled-components/macro";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HomeContainer = styled.div`
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%);
  }
  @media (max-width: 425px) {
    overflow-x: hidden;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80vh;

  .banner-img {
    width: clamp(250px, 25vw, 25vw);

    img {
      height: 100%;
      width: 100%;
    }
  }

  .banner-txt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;
    line-height: 1;
    h1 {
      font-size: clamp(55px, 10vw, 125px);
      font-weight: 850;
    }
    p {
      font-size: clamp(25px, 3vw, 55px);
      width: 80%;
      font-weight: 300;
    }
  }

  .home_btn {
    padding: 2em 0em;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    .banner-txt {
      align-items: center;
      text-align: center;
      p {
        width: 100%;
      }
    }
  }
`;

export const Button = styled.button`
  border-radius: 25px;
  background: #f7a528;
  padding: ${({ big }) => (big ? "3em 3.5em" : ".5em 1.5em")};
  color: #fff;
  font-size: 40px;
  margin-top: 20px;

  transition: all 0.2s ease-in-out;

  p {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }

  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
