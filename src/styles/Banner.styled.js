import styled from "styled-components/macro";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin-bottom: 10em;
  margin-top: 2em;

  .banner-img {
    max-width: 18vw;
    min-width: 340px;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .banner-txt {
    width: 45%;
    padding: 2rem;
    line-height: 1;
    h1 {
      font-size: clamp(75px, 6vw, 125px);
      font-weight: 850;
    }
    p {
      font-size: clamp(20px, 2.5vw, 30px);
      font-weight: 500;
    }
  }

  .homeBtn {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 18rem;
    padding: 2rem;
    animation: bounceIn;
    animation-duration: 2s;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    .banner-txt {
      text-align: center;
      width: 100%;
    }

    .homeBtn {
      display: none;
    }
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%);
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

export const Button = styled.button`
  border-radius: 50px;
  background: #f7a528;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  p {
    font-size: 20px;
    margin-left: 8px;
    font-weight: 500;
    color: #fff;
  }

  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
`;
