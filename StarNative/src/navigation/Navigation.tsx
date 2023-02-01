import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/HomeScreen";
import CharactersScreen from '../screens/CharactersScreen';
import {NavigationContainer} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                           options={{
                                               title: 'Home',
                                               tabBarIcon: ({color}) => <HomeBarIcon name={'../../assets/img/icon.png'} color={color}/>
                                           }}/>
                <BottomTabNavigator.Screen name="Characters" component={CharactersScreen}
                                           options={{
                                               title: 'Characters',
                                               tabBarIcon: ({color}) => <CharactersBarIcon name={'../../assets/img/icon.png'} color={color}/>
                                           }}/>
                <BottomTabNavigator.Screen name="Favorites" component={HomeScreen}
                                           options={{
                                               title: 'Favorites',
                                               tabBarIcon: ({color}) => <FavoritesBarIcon name={'../../assets/img/icon.png'} color={color}/>
                                           }}/>
                <BottomTabNavigator.Screen name="Settings" component={HomeScreen}
                                           options={{
                                               title: 'Settings',
                                               tabBarIcon: ({color}) => <SettingsBarIcon name={'../../assets/img/icon.png'} color={color} />
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

function HomeBarIcon(props: {
    name: string;
    color: string;
}) {
    return <Image size={30} source={require('../../assets/img/icon.png')} />;
}

function FavoritesBarIcon(props: {
    name: string;
    color: string;
}) {
    return <Image size={30} source={require('../../assets/img/icon.png')} />;
}
function CharactersBarIcon(props: {
    name: string;
    color: string;
}) {
    return <Image size={30} source={require('../../assets/img/icon.png')} />;
}
function SettingsBarIcon(props: {
    name: string;
    color: string;
}) {
    return <Image size={5} source={require('../../assets/img/icon.png')} />;
}