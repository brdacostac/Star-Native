import { NavigationContainer } from '@react-navigation/native';
import { Platform, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
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

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};


// const Tab = createBottomTabNavigator()

// export default function MainTabNavigator() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
                
//                 screenOptions={({ route }) => {
//                     return {
//                         screenOptions: ({ focused, color, size }) => {
//                             let iconName = "";
//                             let platformPrefix = "";
                    
//                             // Define the icon type based on the platform
//                             if (Platform.OS === "android") {
//                                 platformPrefix = "md-";
//                             } else if (Platform.OS === "ios") {
//                                 platformPrefix = "ios-";
//                             }
                    
//                             // Assign the icon
//                             switch (route.name) {
//                                 case "Mon profil": {
//                                     iconName = "home";
//                                     break;
//                                 }
//                                 case "Créer attestation": {
//                                     iconName = "create";
//                                     break;
//                                 }
//                                 default: {
//                                     break;
//                                 }
//                             }
//                             return <Ionicons name={platformPrefix + iconName} size={size} color={color} />;
//                         }
//                     }
//                 }}>
//                 <Tab.Screen
//                     name='Mon profil'
//                     component={HomeScreen}
//                 />
//                 <Tab.Screen
//                     name='Créer attestation'
//                     component={DetailsScreen}
//                 />
//             </Tab.Navigator>
            
//         </NavigationContainer>
//     )
// }