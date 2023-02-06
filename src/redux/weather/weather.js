import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weather: [],
};

const weatherSlice = createSlice({
  name: 'weather-slice',
  initialState,
  reducers: {},
});

export default weatherSlice.reducer;
