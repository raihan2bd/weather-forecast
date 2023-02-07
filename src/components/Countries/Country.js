import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './Country.module.css';

const Country = ({
  name, capital, population, cc, flag, map,
}) => (
  <li className={classes.country}>
    <img src={map} alt={name} />
    <div className={classes.country_info}>
      <div className={classes.country_header}>
        <img src={flag} alt={name} />
        <Link to={`/details/${cc}`}>Arrow</Link>
      </div>
      <div className={classes.country_footer}>
        <h3>{name}</h3>
        <span>{`Capital: ${capital}`}</span>
        <span>
          {`Population: ${population}
          `}
        </span>
      </div>
    </div>
  </li>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  cc: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
};

export default Country;
