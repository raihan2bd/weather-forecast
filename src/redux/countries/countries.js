import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: 'country-slice',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
