import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  CoinInfoDataStyled,
  CoinInfoStyled,
  CoinDataStyled,
  CoinConverterStyled,
} from "../styles/CoinPage.styled";
import {
  FaLink,
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();
  const [coinValue, setCoinValue] = useState("");
  const [usdValue, setUsdValue] = useState(coin.market_data?.current_price.usd);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.coinid}`)
      .then((res) => {
        setCoin(res.data);
        setUsdValue(res.data);
        console.log(usdValue);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.coinid]);

  const changeCoinValue = (value) => {
    // setCoinValue(parseFloat(value));
  };

  const changeUsdValue = (value) => {
    // setUsdValue(parseFloat(value));
  };

  return (
    <>
      <CoinInfoDataStyled>
        <div className="coin-info-card">
          <CoinInfoStyled>
            <div className="coin-image">
              <img src={coin.image?.["large"]} alt={coin.name} />
            </div>
            <div className="coin-symbol-name">
              <span className="coin-symbol">{coin.symbol}</span>
              <span>{coin.name}</span>
              <span>{usdValue?.name}</span>
            </div>
          </CoinInfoStyled>

          <div className="coin-rank-categories">
            <div className="coin-rank">Rank #{coin.coingecko_rank}</div>
            {coin.categories?.[0] ? (
              <div className="coin-categories">{coin.categories?.[0]}</div>
            ) : (
              <div className="coin-categories">{coin.categories?.[1]}</div>
            )}
          </div>

          <div className="coin-website-score">
            <div className="coin-website-main">
              <div>Website</div>
              <div className="coin-website">
                <a href={coin.links?.homepage[0]}>
                  <FaLink /> Visit Homepage
                </a>
              </div>
            </div>
            <div className="coin-score-main">
              <div>Score</div>
              <div className="coin-score">
                {coin.coingecko_score?.toFixed(1)}
              </div>
            </div>
          </div>
        </div>

        <div className="coin-data-card">
          <div className="coin-price-main">
            <div className="coin-price-change">
              {coin.market_data?.price_change_percentage_24h_in_currency.usd <
              0 ? (
                <div className="coin-price-red">
                  <div>
                    <FaRegArrowAltCircleDown />
                  </div>
                  <div>
                    {coin.market_data?.price_change_percentage_24h_in_currency.usd.toFixed(
                      2
                    )}
                    %
                  </div>
                </div>
              ) : (
                <div className="coin-price-green">
                  <FaRegArrowAltCircleUp />
                  {coin.market_data?.price_change_percentage_24h_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </div>
              )}
            </div>
            <div className="coin-price">
              $ {coin.market_data?.current_price.usd.toLocaleString()}
            </div>
          </div>
          <div className="coin-market-main">
            <CoinDataStyled>
              <div className="market-data">
                <div>Market Cap</div>
                {coin.market_data?.market_cap.usd ? (
                  <div className="market-value">
                    $ {coin.market_data?.market_cap.usd.toLocaleString()}
                  </div>
                ) : (
                  <div className="market-value">Not available</div>
                )}
              </div>
              <div className="market-data">
                <div>24 hour Trading Volume</div>
                {coin.market_data?.total_volume.usd ? (
                  <div className="market-value">
                    $ {coin.market_data?.total_volume.usd.toLocaleString()}
                  </div>
                ) : (
                  <div className="market-value">Not available</div>
                )}
              </div>
              <div className="market-data">
                <div>Fully Diluted Valuation</div>
                {coin.market_data?.fully_diluted_valuation.usd ? (
                  <div className="market-value">
                    {coin.market_data?.fully_diluted_valuation.usd.toLocaleString()}
                  </div>
                ) : (
                  <div className="market-value">Not available</div>
                )}
              </div>
            </CoinDataStyled>
            <CoinDataStyled>
              <div className="market-data">
                <div>Circulating Supply</div>
                {coin.market_data?.circulating_supply ? (
                  <div className="market-value">
                    {coin.market_data?.circulating_supply.toLocaleString()}
                  </div>
                ) : (
                  <div className="market-value">Not available</div>
                )}
              </div>
              <div className="market-data">
                <div>Total Supply</div>
                {coin.market_data?.total_supply ? (
                  <div className="market-value">
                    {coin.market_data?.total_supply.toLocaleString()}
                  </div>
                ) : (
                  <div className="market-value">Not available</div>
                )}
              </div>
              <div className="market-data">
                <div>Max Supply</div>
                {coin.market_data?.max_supply ? (
                  <div className="market-value">
                    {coin.market_data?.max_supply.toLocaleString()}
                  </div>
                ) : (
                  <div className="market-value">Not available</div>
                )}
              </div>
            </CoinDataStyled>
          </div>
        </div>
      </CoinInfoDataStyled>
      <CoinConverterStyled>
        <div className="coin-converter">
          <form>
            <div className="coin-amount-value">
              <div>{coin.symbol?.toUpperCase()}</div>
              <div>
                <input
                  type="text"
                  className="coin-amount"
                  value={coinValue?.toLocaleString()}
                  onChangeText={changeCoinValue}
                />
              </div>
            </div>
            <div className="converter-text">IS EQUAL TO</div>
            <div className="coin-amount-value">
              <div>USD</div>
              <div>
                <input
                  type="text"
                  className="coin-amount"
                  value={usdValue?.toLocaleString()}
                  onChangeText={changeUsdValue}
                />
              </div>
            </div>
          </form>
        </div>
      </CoinConverterStyled>
    </>
  );
};

export default CoinPage;
