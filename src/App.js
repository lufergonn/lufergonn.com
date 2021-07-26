import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SetConfigPage from './config/setPage';
import ToPage from './config/topage';
import './assets/css/index.css';

function App() {
  const [page, setPage] = useState(SetConfigPage());

  console.log(page);
  return (
    <div className="app">
      <Header setPage={setPage} page={page}/>
      <main className="main container">
        {ToPage(page)}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
