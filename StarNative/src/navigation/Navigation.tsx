import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/HomeScreen";
import CharactersScreen from '../screens/CharactersScreen';
import {NavigationContainer} from "@react-navigation/native";
import {Image} from "react-native";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                           options={{
                                               title: 'Home',
                                               tabBarIcon: ({color}) => <BarIcon name="iconHome" color={color}/>
                                           }}/>
                <BottomTabNavigator.Screen name="Characters" component={CharactersScreen}
                                           options={{
                                               title: 'Characters',
                                               tabBarIcon: ({color}) => <BarIcon name="iconCharacteres" color={color}/>
                                           }}/>
                <BottomTabNavigator.Screen name="Favorites" component={HomeScreen}
                                           options={{
                                               title: 'Favorites',
                                               tabBarIcon: ({color}) => <BarIcon name="iconFavorites" color={color}/>
                                           }}/>
                <BottomTabNavigator.Screen name="Settings" component={HomeScreen}
                                           options={{
                                               title: 'Settings',
                                               tabBarIcon: ({color}) => <BarIcon name="iconSettings" color={color} />
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

const images = {
    iconHome: require('../../assets/img/icons/homeIcon.png'),
    iconCharacteres: require('../../assets/img/icons/characteresIcon.png'),
    iconFavorites: require('../../assets/img/icons/favoritesIcon.png'),
    iconSettings: require('../../assets/img/icons/settingsIcon.png'),
};

function BarIcon(props: {
    name: string;
    color: string;
}) {
    const imageSource = images[props.name];

    return (
        <Image
            style={{ width: 30, height: 30 }}
            source={imageSource}
        />
    );
}
