import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import classes from './Details.module.css';

const Details = () => {
  const weather = useSelector((state) => state.weather);
  const countries = useSelector((state) => state.countries.countries);
  const { cc } = useParams();
  const country = countries.find((country) => country.cc === cc);

  return (
    <div className={classes.container}>
      <div className={classes.map}>
        <img src={country.map} alt={country.name} />
      </div>
      <div className={classes.weather}>
        <h2>{weather.name}</h2>
        <img src={weather.icon} alt={weather.name} />
        <p>{weather.description}</p>
        <ul className={classes.weather_info}>
          <li className={classes.weather_item}>
            icon Temperature:
            {' '}
            {weather.temp}
          </li>
          <li className={classes.weather_item}>
            icon Feels Like:
            {' '}
            {weather.feels_like}
          </li>
          <li className={classes.weather_item}>
            icon Min Temperature:
            {' '}
            {weather.temp_min}
          </li>
          <li className={classes.weather_item}>
            icon Max Temperature:
            {' '}
            {weather.temp_max}
          </li>
          <li className={classes.weather_item}>
            icon Pressure:
            {' '}
            {weather.pressure}
          </li>
          <li className={classes.weather_item}>
            icon Humidity:
            {' '}
            {weather.humidity}
          </li>
          <li className={classes.weather_item}>
            icon Wind Speed:
            {' '}
            {weather.wind_speed}
          </li>
          <li className={classes.weather_item}>
            icon Cloud cover:
            {' '}
            {weather.cloud}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
