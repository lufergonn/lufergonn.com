import HeroCard from '../components/Analysis/HeroCard';
import CardWebPage from '../components/Analysis/WebpageCard';
import CryptoCard from '../components/Analysis/CryptoCard';
import Loading from '../components/Loading';
import Error from '../components/Error';
import '../assets/css/analysis.css';
import { useState } from 'react';

const Analysis = () => {
  const [data] = useState({
    loading: true,
    error: false,
    data: [],
    TotalAnalysis: '---',
    TotalTwitter: '---',
    TotalOthers: '---'
  });

  return (
    <>
      <div className="analysis_hero hero-body">
        <div className="columns">
          <HeroCard count={data.TotalAnalysis} text="Total analysis" background="primary" />
          <HeroCard count={data.TotalTwitter} text="Twitter" background="danger" />
          <HeroCard count={data.TotalOthers} text="Others" background="warning-dark" />
        </div>
      </div>
      <div className="analysis__content columns">
        <div className="analysis__content-cardswebpages column box">
          { data.loading ? <Loading /> : null }
          { data.error ? <Error /> : null }
          { 
            (!data.error && !data.loading) ? data.data.map( e => {
              return <CardWebPage key={e.id} data={e} />
            }) : null
          }
        </div>
        <aside className="analysis__content-cardaside column is-one-third left">
          <div className="analysis__content-cardaside_box box">
            <CryptoCard name={'bitcoin'} color={'#ff6600'} image="1/small/bitcoin" />
            <CryptoCard name={'Monero'} color={'#666699'}image="69/small/monero_logo" />
          </div>
        </aside>
      </div>
    </>
  );
}

export default Analysis;