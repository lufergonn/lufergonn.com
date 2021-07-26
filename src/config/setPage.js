const SetConfigPage = () => {
  let toPage = window.location.hash.toLowerCase()

  if (toPage.includes('#analysis')) toPage = 'analysis';
  else if (toPage.includes('#github')) toPage = 'github';
  else  toPage = 'home';

  return toPage;
}

export default SetConfigPage;