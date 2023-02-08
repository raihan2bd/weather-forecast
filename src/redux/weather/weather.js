import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 1210997,
  name: 'Bangladesh',
  description: 'clear sky',
  temp: 22.03,
  feels_like: 21.25,
  temp_min: 22.03,
  temp_max: 22.03,
  pressure: 1014,
  humidity: 37,
  wind_speed: 2.39,
  icon: 'https://openweathermap.org/img/wn/01d@2x.png',
  cloud: 5,
};

const weatherSlice = createSlice({
  name: 'weather-slice',
  initialState,
  reducers: {},
});

export default weatherSlice.reducer;
