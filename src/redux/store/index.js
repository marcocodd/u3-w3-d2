import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouritesReducer from '../reducers/favourites'

const globalReducer = combineReducers ({

  favourites: favouritesReducer


})

const store = configureStore({
  reducer: globalReducer
})

export default store