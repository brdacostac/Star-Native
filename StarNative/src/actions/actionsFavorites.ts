import AsyncStorage from '@react-native-async-storage/async-storage';
import { Characters } from '../../model/characters';
import { LOAD_FAVORITES_SUCCESS } from '../store/constantes';

export const loadFavoritesSuccess = (favorites: Characters[]) => ({
    type: LOAD_FAVORITES_SUCCESS,
    payload: favorites
});
  
export const loadFavorites = async () => {
    try {
        //await AsyncStorage.clear();
        const favorites = await AsyncStorage.getItem('favorites');
        if (favorites) {
            console.log(JSON.parse(favorites));
            return JSON.parse(favorites);
        }
        return [];
    } catch (error) {
        console.error(error);
    }
};

export const saveFavorites = async (favoriteCharacters: Characters[]) => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(favoriteCharacters));
    } catch (error) {
      console.error(error);
    }
};

export const removeFavorites = async (favoriteCharacters: []) => {
    try {
      await AsyncStorage.removeItem('favorites');
    } catch (error) {
      console.error(error);
    }
};
  
export const clearAllStorage = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        console.log("An error occurred", e);
    }
}