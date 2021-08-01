import Chart from 'react-apexcharts';
import config from '../../config/cryptoCard.json';
import getCryptoMarketPrice from '../../api/getCryptoMarketPrice';
import { useEffect, useState } from 'react';

const CryptoCard = ({ name, color, image }) => {
  let c = JSON.parse(JSON.stringify(config));
  const [data, setData] = useState({
    loading: true,
    data: [1, 1],
    title: '$0.00',
    subtitle: '---'
  });

  useEffect(() => {
    if (data.loading) {
      getCryptoMarketPrice(name).then(response => {
        if (!response.error) {
          setData({
            loading: false,
            data: response.data,
            title: `$${response.data[response.data.length -1]}`,
            subtitle: 'Last month'
          });
        } else {
          setData({...data, loading: false, subtitle: 'Error'});
        }
      });
    }
  });

  c.series[0].data = data.data;
  c.options.title.text = data.title;
  c.options.subtitle.text = data.subtitle;
  
  c.options.stroke.colors = [color];
  c.options.fill.colors= [color];
  //c.options.title.style.color = 'color';
  //c.options.subtitle.style.color = 'color';

  return (
    <div className="box">
      <img src={`https://assets.coingecko.com/coins/images/${image}.png`} />
      <Chart options={c.options} series={c.series} type="area" height={150}/>
    </div>
  );
}

export default CryptoCard;