const ToPage = (page) => {
  if (page === 'analysis') return 'analysis';
  if (page === 'github') return 'github';

  return 'home';
}

export default ToPage;