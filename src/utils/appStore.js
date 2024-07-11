import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './moviesSlice'
import userReducer from "./userSlice"
import gptReducer from "./gptSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesSlice,
    gpt: gptReducer,
  },
});

export default appStore;