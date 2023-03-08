import * as React from 'react';
import Navigation from './src/navigation/Navigation';
import store from './src/store/index';
import { Provider, useDispatch } from 'react-redux';
import { loadFavorites, loadFavoritesSuccess } from './src/actions/actionsFavorites';
import {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme} from 'react-native';
import { loadCharacters, loadCharactersSuccess } from './src/actions/actionsCharacters';
import { LanguageProvider } from './src/context/language-context';


import { ThemeContext } from './src/context/theme-context';


export default function App() {
  const [loading, setLoading] = useState(true);
  const { themeType } = useContext(ThemeContext);
  

  useEffect(() => {
    const loadData = async () => {
      try {
        const favorites = await loadFavorites();
        store.dispatch(loadFavoritesSuccess(favorites));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    const loadDataCharacter = () => {
      console.log("test");
      store.dispatch(loadCharacters());
      console.log("test2");
      // try {
      //   const characters = await loadCharacters();
      //   store.dispatch(loadCharactersSuccess(characters));
      //   setLoading(false);
      // } catch (error) {
      //   console.error(error);
      // }
    };



    loadDataCharacter();
    loadData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Provider store={store}>
       <LanguageProvider>
        <SafeAreaView style={styles.mainSafeArea}>
          <StatusBar barStyle={themeType ? 'light-content' : "dark-content" } />
            <Navigation></Navigation>
        </SafeAreaView>
      </LanguageProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainSafeArea: {
    flex: 1,
    //marginTop: StatusBar.currentHeight
  }
});