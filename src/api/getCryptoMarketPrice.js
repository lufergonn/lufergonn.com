import axios from "axios";

const getCryptoMarketPrice = (name='') => {
  const url = `https://api.coingecko.com/api/v3/coins/${name.toLowerCase()}/market_chart?vs_currency=usd&days=7&interval=daily`;

  return axios.get(url)
    .then(response => {
      if (response.status === 200) {
        response.data.prices = response.data.prices.map(price => {
          return parseFloat(price[1].toFixed(2));
        });
        
        return {
          error: false,
          data: response.data.prices
        };
      }
    })
    .catch(error => {
      return {
        error: true
      };
    });
}

export default getCryptoMarketPrice;
