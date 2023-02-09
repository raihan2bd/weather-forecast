import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { weatherApiBaseUrl, weatherApiKey } from '../../api/api';

export const fetchWeather = createAsyncThunk(
  'weather/fetch',
  async ({ lat, lon }) => {
    const response = await fetch(
      `${weatherApiBaseUrl}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`,
    );
    const result = await response.json();
    const weather = {
      id: result.id,
      name: result.name,
      description: result.weather[0].description,
      temp: result.main.temp,
      feels_like: result.main.feels_like,
      temp_min: result.main.temp_min,
      temp_max: result.main.temp_max,
      pressure: result.main.pressure,
      humidity: result.main.humidity,
      wind_speed: result.wind.speed,
      cloud: result.clouds.all,
      icon: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
    };
    return weather;
  },
);

const initialState = {
  weather: {},
};

const weatherSlice = createSlice({
  name: 'weather-slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
      const updatedState = { ...state, weather: payload };
      return updatedState;
    });
  },
});

export default weatherSlice.reducer;
