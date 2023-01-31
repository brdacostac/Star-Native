import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


import HomeScreen from "./src/components/HomeScreen";
import Navigation from './src/navigation/Navigation';


export default function App() {
  //return (
    return (
      <NavigationContainer>
        <Navigation />
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

