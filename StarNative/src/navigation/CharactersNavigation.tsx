import React from 'react';
import CharactersScreen from '../screens/CharactersScreen';
import DetailCharacterScreen from '../screens/DetailCharacterScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from "react-native";


export default function CharactersNavigation() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen name="CharactersList" component={CharactersScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CharacterDetails" component={DetailCharacterScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    )
}

