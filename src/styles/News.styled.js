import { Select, Card } from "antd";
import Title from "antd/lib/skeleton/Title";
import Text from "antd/lib/typography/Text";
import styled from "styled-components/macro";

export const selectNews = styled(Select)`
  width: 180px;
`;

export const newsCard = styled(Card)`
  min-height: 300px !important;

  p {
    color: black;
    margin: 10px 0px !important;
  }
`;

export const newsImage = styled.div`
  display: flex !important;
  justify-content: space-between !important;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const newsTitle = styled(Title)`
  width: 70%;
`;

export const providerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const providerName = styled(Text)`
  margin-left: 10px;
`;
