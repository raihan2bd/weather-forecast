import { configureStore } from '@reduxjs/toolkit';

import countries from './countries/countries';
import weather from './weather/weather';

const store = configureStore({
  reducer: { countries, weather },
});

export default store;
