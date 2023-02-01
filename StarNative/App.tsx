import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//const Stack = createNativeStackNavigator();

import { createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


import Navigation from './src/navigation/Navigation';


export default function App() {
  //return (
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Root" component={Navigation} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Home"
      //                   component={HomeScreen}
      //                   options={{
      //                       title:"Welcome",
      //                       headerStyle: {backgroundColor: '#03203f',},
      //                       headerTintColor: '#fff',
      //                       headerTitleStyle: {fontWeight: 'bold', alignSelf:'center'}
      //                   }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
  //);
}

