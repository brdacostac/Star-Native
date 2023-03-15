import { saveFavorites } from '../actions/actionsFavorites';
import {  LOAD_FAVORITES_SUCCESS, ADD_FAVORITE_CHARACTER, DELETE_FAVORITE_CHARACTER } from './constantes';

const initialState = {
  favoriteCharacters: []
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FAVORITES_SUCCESS:
      return {
        ...state,
        favoriteCharacters: action.payload
      };
    case ADD_FAVORITE_CHARACTER:
      saveFavorites([...state.favoriteCharacters]);
      return {
        ...state,
        favoriteCharacters: [...state.favoriteCharacters, action.payload]
      };
    case DELETE_FAVORITE_CHARACTER:
      const updatedFavoriteCharacters = state.favoriteCharacters.filter(
        favChar => favChar.name !== action.payload.name
      );
      saveFavorites(updatedFavoriteCharacters);
      return {
        ...state,
        favoriteCharacters: [...updatedFavoriteCharacters]
      };
    default:
      return state;
  }
};

export default favoritesReducer;
