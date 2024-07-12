import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './moviesSlice'
import userReducer from "./userSlice"
import gptReducer from "./gptSlice"
import configreducer from "./configSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesSlice,
    gpt: gptReducer,
    config: configreducer,
  },
});

export default appStore;