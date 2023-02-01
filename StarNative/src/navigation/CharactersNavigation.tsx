import React from 'react';
import CharactersScreen from '../screens/CharactersScreen';
import DetailCharacterScreen from '../screens/DetailCharacterScreen';
import {createStackNavigator} from '@react-navigation/stack';


export default function CharactersNavigation() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="NounoursList">
        <Stack.Screen name="CharactersList" component={CharactersScreen}/>
        <Stack.Screen name="CharacterDetails" component={DetailCharacterScreen}/>
      </Stack.Navigator>
    )
  }