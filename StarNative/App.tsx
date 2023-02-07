import * as React from 'react';
import Navigation from './src/navigation/Navigation';
import {SafeAreaProvider} from "react-native-safe-area-context";
import store from './src/store/characterStore';
import { Provider } from 'react-redux';
import { loadFavorites, loadFavoritesSuccess } from './src/actions/actionsFavorites';
import { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true);

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
    loadData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.mainSafeArea}>
      <Provider store={store}>
        <Navigation></Navigation>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainSafeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});