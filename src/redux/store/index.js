import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouritesReducer from '../reducers/favourites'
import jobsListreducer from "../reducers/jobslist";
const globalReducer = combineReducers({
 favourites: favouritesReducer,
 joblist: jobsListreducer,
});

const store = configureStore({
  reducer: globalReducer
})

export default store