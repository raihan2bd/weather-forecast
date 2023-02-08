import { createSlice } from '@reduxjs/toolkit';

import { mapBaseUrl } from '../../api/api';
import AsiaMap from '../../assets/images/asia.png';

const initialState = {
  region: {
    name: 'Asia',
    regionMap: AsiaMap,
    totalCountries: 52,
    totalPopulation: 5555555555,
  },
  countries: [
    {
      id: '112',
      name: 'Banglasesh',
      capital: 'Dhaka',
      population: 164689383,
      cc: 'bd',
      flag: 'https://flagcdn.com/bd.svg',
      map: `${mapBaseUrl}bd/vector.svg`,
      lat: 24,
      lon: 90,
    },
    {
      id: '113',
      name: 'Banglasesh',
      capital: 'Dhaka',
      population: 164689383,
      cc: 'bd',
      flag: 'https://flagcdn.com/bd.svg',
      map: `${mapBaseUrl}bd/vector.svg`,
      lat: 24,
      lon: 90,
    },
    {
      id: '114',
      name: 'Banglasesh',
      capital: 'Dhaka',
      population: 164689383,
      cc: 'bd',
      flag: 'https://flagcdn.com/bd.svg',
      map: `${mapBaseUrl}bd/vector.svg`,
      lat: 24,
      lon: 90,
    },
  ],
};

const countriesSlice = createSlice({
  name: 'country-slice',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
