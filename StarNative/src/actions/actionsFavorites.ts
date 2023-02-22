import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOAD_FAVORITES_SUCCESS } from '../store/constantes';

export const loadFavoritesSuccess = (favorites: string[]) => ({
    type: LOAD_FAVORITES_SUCCESS,
    payload: favorites
});
  
export const loadFavorites = async () => {
    try {
        const favorites = await AsyncStorage.getItem('favorites');
        if (favorites) {
            return JSON.parse(favorites);
        }
        return [];
    } catch (error) {
        console.error(error);
    }
};

export const saveFavorites = async (favoriteCharacters) => {
    console.log("test10")
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(favoriteCharacters));
    } catch (error) {
        console.log("test11")
      console.error(error);
    }
};
  