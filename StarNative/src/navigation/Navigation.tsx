import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import CharactersNavigation from './CharactersNavigation';
import FavoritesScreen from '../screens/FavoritesScreen';

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
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                           options={{
                                               title: 'Home',
                                               tabBarIcon: ({color}) => <BarIcon name="iconHome" color={color}/>,
                                               headerShown: false,
                                           }}/>
                <BottomTabNavigator.Screen name="Characters" component={CharactersNavigation}
                                           options={{
                                               title: 'Characters',
                                               tabBarIcon: ({color}) => <BarIcon name="iconCharacteres" color={color}/>,
                                               headerShown: false,
                                           }}/>
                <BottomTabNavigator.Screen name="Favorites" component={FavoritesScreen}
                                           options={{
                                               title: 'Favorites',
                                               tabBarIcon: ({color}) => <BarIcon name="iconFavorites" color={color}/>,
                                               headerShown: false,
                                           }}/>
                <BottomTabNavigator.Screen name="Settings" component={HomeScreen}
                                           options={{
                                               title: 'Settings',
                                               tabBarIcon: ({color}) => <BarIcon name="iconSettings" color={color} />,
                                               headerShown: false,
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;