import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./../screens/HomeScreen";
import CharactersScreen from './../screens/CharactersScreen';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'ios-notifications' : 'ios-notifications';
          }

          return "";
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      })} 
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Characters" component={CharactersScreen} />
      <Tab.Screen name="Favorites" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
};

