import { ADD_TO_FAVOURITES } from "../actions";

const initalState = {
    favourites : []
}

const addFavouriteReducer = (state = initalState, action) =>{


switch (action.type){
case ADD_TO_FAVOURITES:

return{
...state,
    favourites: [ ...state.favourites, action.payload],
}

default : 
return state
}
}

export default addFavouriteReducer