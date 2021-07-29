import Twitter from '../assets/img/twitter.svg';
import Internet from '../assets/img/internet.svg';

const getIconWebpageCard = (type='') => {
  if (type === 'atwitter') return Twitter;

  return Internet;
}

export default getIconWebpageCard;