import { configureStore } from '@reduxjs/toolkit';
import { saveFavorites, loadFavorites } from '../actions/actionsFavorites';

interface InitialState {
    favoriteCharacters: string[];
  }
  
  const initialState: InitialState = {
    favoriteCharacters: []
  };
  
  const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'LOAD_FAVORITES_SUCCESS':
      return {
        ...state,
        favoriteCharacters: action.payload
      };
      case 'ADD_FAVORITE_CHARACTER':
        const favoriteCharacters = [...state.favoriteCharacters, action.payload];
        saveFavorites(favoriteCharacters);
        return {
          ...state,
          favoriteCharacters: [...state.favoriteCharacters, action.payload]
        };
      case 'DELETE_FAVORITE_CHARACTER':
        const updatedFavorites = state.favoriteCharacters.filter(char => char !== action.payload);
        saveFavorites(updatedFavorites);
        return {
          ...state,
          favoriteCharacters: state.favoriteCharacters.filter(
          char => char !== action.payload
          )};
      default:
        return state;
    }
  };

const store = configureStore({
  reducer: rootReducer
});

export default store;