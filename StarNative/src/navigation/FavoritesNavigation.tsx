import React from 'react';
import DetailCharacterScreen from '../screens/DetailCharacterScreen';
import {createStackNavigator} from '@react-navigation/stack';
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

