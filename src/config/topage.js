import Github from '../pages/Github';
import Analysis from '../pages/Analysis';

const ToPage = (page) => {
  if (page === 'analysis') return <Analysis />;
  if (page === 'github') return <Github />;

  return 'home';
}

export default ToPage;