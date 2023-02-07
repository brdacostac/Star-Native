import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadFavoritesSuccess = (favorites: string[]) => ({
    type: 'LOAD_FAVORITES_SUCCESS',
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

export const saveFavorites = async (favoriteCharacters: string[]) => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(favoriteCharacters));
    } catch (error) {
      console.error(error);
    }
};
  