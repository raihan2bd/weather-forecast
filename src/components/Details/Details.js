import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  TbTemperature,
  TbTemperatureMinus,
  TbTemperaturePlus,
} from 'react-icons/tb';
import { GiPressureCooker } from 'react-icons/gi';
import { WiHumidity } from 'react-icons/wi';
import { FaWind, FaCloud } from 'react-icons/fa';

import classes from './Details.module.css';

const Details = () => {
  const weather = useSelector((state) => state.weather);
  const countries = useSelector((state) => state.countries.countries);
  const { cc } = useParams();
  const country = countries.find(
    (country) => country.cc.toLocaleLowerCase() === cc.toLocaleLowerCase(),
  );

  let weatherContent = (
    <p className={classes.no_content}>
      No data found!! plese go back to
      {' '}
      <Link to="/">Home</Link>
    </p>
  );
  if (country && weather.name) {
    weatherContent = (
      <>
        <div className={classes.map}>
          <img src={country.map} alt={country.name} />
        </div>
        <div className={classes.weather}>
          <h2>{weather.name}</h2>
          <img src={weather.icon} alt={weather.name} />
          <p>{weather.description}</p>
          <ul className={classes.weather_info}>
            <li className={classes.weather_item}>
              <span>
                <TbTemperature />
                {' '}
                Temperature:
              </span>
              <span>{weather.temp}</span>
            </li>
            <li className={classes.weather_item}>
              <span>
                <TbTemperature />
                {' '}
                Feels Like:
              </span>
              {weather.feels_like}
            </li>
            <li className={classes.weather_item}>
              <span>
                <TbTemperatureMinus />
                {' '}
                Min Temperature:
              </span>

              <span>{weather.temp_min}</span>
            </li>
            <li className={classes.weather_item}>
              <span>
                <TbTemperaturePlus />
                {' '}
                Max Temperature:
              </span>
              <span>{weather.temp_max}</span>
            </li>
            <li className={classes.weather_item}>
              <span>
                <GiPressureCooker />
                {' '}
                Pressure:
              </span>
              <span>{weather.pressure}</span>
            </li>
            <li className={classes.weather_item}>
              <span>
                <WiHumidity />
                {' '}
                Humidity:
              </span>
              <span>{weather.humidity}</span>
            </li>
            <li className={classes.weather_item}>
              <span>
                <FaWind />
                {' '}
                Wind Speed:
              </span>
              <span>{weather.wind_speed}</span>
            </li>
            <li className={classes.weather_item}>
              <span>
                <FaCloud />
                {' '}
                Cloud cover:
              </span>
              <span>{weather.cloud}</span>
            </li>
          </ul>
        </div>
      </>
    );
  }

  return <div className={classes.container}>{weatherContent}</div>;
};

export default Details;
