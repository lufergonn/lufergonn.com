import Home from '../pages/Home';
import Github from '../pages/Github';
import Analysis from '../pages/Analysis';

const ToPage = (page) => {
  if (page === 'analysis') return <Analysis />;
  if (page === 'github') return <Github />;

  return <Home />;
}

export default ToPage;