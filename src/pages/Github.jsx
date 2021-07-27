import { useState } from 'react';
import Card from '../components/Github/Card';
import Loading from '../components/Loading';
import Error from '../components/Error';
import '../assets/css/github.css';

const Github = () => {
  const [data, setData] = useState({
    data: [],
    loading: false,
    error: false
  });
  
  return (
    <>
      <div className="github_hero hero-body">
        <div className="container has-text-centered">
          <figure className="image is-128x128">
            <img className="is-rounded" src="https://avatars.githubusercontent.com/u/47482967?v=4" alt="Github avatar"/>
          </figure>
          <p className="title">Lufergonn</p>
          <p className="subtitle">
            <a href="https://github.com/lufergonn" target="_blank" rel="noreferrer">
              Luis Fernando <i className="fas fa-external-link-alt"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="github_content">
        { data.loading ? <Loading /> : null }
        { data.error ? <Error /> : null }
        { 
          (!data.error && !data.loading) ? data.data.map( e => {
            return <Card key={e.id} data={e}/>
          }) : null
        }
      </div>
    </>
  );
}

export default Github;