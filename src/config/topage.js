import Github from '../pages/Github';

const ToPage = (page) => {
  if (page === 'analysis') return 'analysis';
  if (page === 'github') return <Github />;

  return 'home';
}

export default ToPage;