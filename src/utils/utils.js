import asiaMap from '../assets/images/asia.png';
import europeMap from '../assets/images/europe.png';
import africaMap from '../assets/images/africa.png';
import northAmericaMap from '../assets/images/anorth-america.png';
import southAmericaMap from '../assets/images/south-america.png';
import oceaniaMap from '../assets/images/oceania.png';
import antarcticaMap from '../assets/images/antarctica.png';

const generateMap = (region) => {
  switch (region) {
    case 'Asia':
      return asiaMap;
    case 'Europe':
      return europeMap;
    case 'Africa':
      return africaMap;
    case 'North America':
      return northAmericaMap;
    case 'South America':
      return southAmericaMap;
    case 'Antarctic':
      return antarcticaMap;
    case 'Oceania':
      return oceaniaMap;

    default:
      return asiaMap;
  }
};

export default generateMap;
