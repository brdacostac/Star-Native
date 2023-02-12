import React from 'react';
import CharactersScreen from '../screens/CharactersScreen';
import DetailCharacterScreen from '../screens/DetailCharacterScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from "react-native";
import FavoritesScreen from '../screens/FavoritesScreen';


export default function FavoritesNavigation() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen name="FavoritesList" component={FavoritesScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CharacterDetails" component={DetailCharacterScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    )
}

