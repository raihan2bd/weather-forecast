import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidV4 } from 'uuid';
import { countryApi, mapBaseUrl } from '../../api/api';
import generateMap from '../../utils/utils';

export const fetchCounties = createAsyncThunk(
  'countries/fetch',
  async (region) => {
    const response = await fetch(`${countryApi}${region}`);
    const result = await response.json();
    let totalPopulation = 0;
    const countries = result.map((item) => {
      totalPopulation += item.population;
      return {
        id: uuidV4(),
        name: item.name.common,
        capital: `${!item.capital ? 'Not specified' : item.capital[0]}`,
        population: item.population,
        cc: item.cca2,
        flag: item.flags.svg,
        map: `${mapBaseUrl}${item.cca2.toLowerCase()}/vector.svg`,
        lat: item.latlng[0],
        lon: item.latlng[1],
      };
    }).sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
    return {
      region: {
        name: region,
        regionMap: generateMap(region),
        totalCountries: countries.length,
        totalPopulation,
      },
      countries,
    };
  },
);

const initialState = {
  region: {},
  countries: [],
};

const countriesSlice = createSlice({
  name: 'country-slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCounties.fulfilled, (state, action) => {
      const updatedState = {
        ...state,
        region: action.payload.region,
        countries: action.payload.countries,
      };
      return updatedState;
    });
  },
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice.reducer;
