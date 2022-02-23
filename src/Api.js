import axios from "axios";

export const getTrendingCoins = () => {
  axios
    .get(`https://api.coingecko.com/api/v3/search/trending`)
    .then((res) => {
      console.log(res.data.coins);
      setTrend(res.data.coins);
    })
    .catch((error) => {
      console.log(error);
    });
};
