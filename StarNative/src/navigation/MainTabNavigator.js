import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Switch } from 'react-native';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';



const Tab = createBottomTabNavigator()

export default function MainTabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                
                screenOptions={({ route }) => {
                    return {
                        screenOptions: ({ focused, color, size }) => {
                            let iconName = "";
                            let platformPrefix = "";
                    
                            // Define the icon type based on the platform
                            if (Platform.OS === "android") {
                                platformPrefix = "md-";
                            } else if (Platform.OS === "ios") {
                                platformPrefix = "ios-";
                            }
                    
                            // Assign the icon
                            switch (route.name) {
                                case "Mon profil": {
                                    iconName = "home";
                                    break;
                                }
                                case "Créer attestation": {
                                    iconName = "create";
                                    break;
                                }
                                default: {
                                    break;
                                }
                            }
                            return <Ionicons name={platformPrefix + iconName} size={size} color={color} />;
                        }
                    }
                }}>
                <Tab.Screen
                    name='Mon profil'
                    component={HomeScreen}
                />
                <Tab.Screen
                    name='Créer attestation'
                    component={DetailsScreen}
                />
            </Tab.Navigator>
            
        </NavigationContainer>
    )
}