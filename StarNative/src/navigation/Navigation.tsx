import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import CharactersNavigation from './CharactersNavigation';

import {ThemeContextProvider, useTheme} from "../context/theme-context";

const images: { [key: string]: any } = {
    iconHome: require('../../assets/img/icons/homeIcon.png'),
    iconCharacteres: require('../../assets/img/icons/characteresIcon.png'),
    iconFavorites: require('../../assets/img/icons/favoritesIcon.png'),
    iconSettings: require('../../assets/img/icons/settingsIcon.png'),
};

interface Props {
    name: string;
    color: string;
}

function BarIcon(props: Props) {
    const imageSource = images[props.name];
    if (!imageSource) {
        return null;
    }

    return (
        <Image
            style={{ width: 30, height: 30, tintColor: props.color }}
            source={imageSource}
        />
    );
}

const BottomTabNavigator = createBottomTabNavigator();

function Navigation() {
    return (
        <ThemeContextProvider>

                <BottomTabNavigator.Navigator initialRouteName="Home"
                                              screenOptions={{
                                                  tabBarActiveTintColor: '#ebb807',
                                                  tabBarStyle: { height: 60 },
                                              }}>
                    <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                               options={{
                                                   title: 'Home',
                                                   headerShown: false,
                                                   tabBarIcon: ({color}) => <BarIcon name="iconHome" color={color}/>,

                                               }}/>
                    <BottomTabNavigator.Screen name="Characters" component={CharactersNavigation}
                                               options={{
                                                   title: 'Characters',
                                                   headerShown: false,
                                                   tabBarIcon: ({color}) => <BarIcon name="iconCharacteres" color={color}/>
                                               }}/>
                    <BottomTabNavigator.Screen name="Favorites" component={HomeScreen}
                                               options={{
                                                   title: 'Favorites',
                                                   headerShown: false,
                                                   tabBarIcon: ({color}) => <BarIcon name="iconFavorites" color={color}/>
                                               }}/>
                    <BottomTabNavigator.Screen name="Settings" component={SettingsScreen}
                                               options={{
                                                   title: 'Settings',
                                                   headerShown: false,
                                                   tabBarIcon: ({color}) => <BarIcon name="iconSettings" color={color} />
                                               }}/>
                </BottomTabNavigator.Navigator>

        </ThemeContextProvider>
    )
}

export default Navigation;