import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

import {Image, Text} from "react-native";
import CharactersNavigation from './CharactersNavigation';

import {ThemeContextProvider, useTheme} from "../context/theme-context";
import FavoritesNavigation from './FavoritesNavigation';
import { LanguageContext } from '../context/language-context';
import en from '../globalization/en';
import fr from '../globalization/fr';

interface Props {
    name: string;
    color: string;
    focused: boolean;
}

function BarIcon(props: Props) {
    const {theme} = useTheme();
    const imageSource = images[props.name];
    if (!imageSource) {
        return null;
    }
    return (
        <Image
            style={{ width: 30, height: 30, tintColor: props.focused ? theme.colors.sideColor : '#888888'}}
            source={imageSource}
        />
    );
}


interface TabBarLabelProps {
    title: string;
    focused: boolean;
}

function BarLabel(props: TabBarLabelProps) {
    const {theme} = useTheme();
    return (
        <Text style={{color: props.focused ? theme.colors.sideColor : '#888888', fontSize: 10,}}>{props.title}</Text>

    );
}

const images: { [key: string]: any } = {
    iconHome: require('../../assets/img/icons/homeIcon.png'),
    iconCharacteres: require('../../assets/img/icons/characteresIcon.png'),
    iconFavorites: require('../../assets/img/icons/favoritesIcon.png'),
    iconSettings: require('../../assets/img/icons/settingsIcon.png'),
};

const BottomTabNavigator = createBottomTabNavigator();

function Navigation() {
    const { language, setLanguage } = useContext(LanguageContext);
    const translations = language === 'en' ? en : fr;
    const {theme} = useTheme();
    return (
        <ThemeContextProvider>
                <BottomTabNavigator.Navigator initialRouteName="Home"
                                              screenOptions={{
                                                  tabBarStyle: { height: 60 },
                                              }}>
                    <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                               options={{
                                                   headerShown: false,
                                                   tabBarIcon: ({color,focused}) => <BarIcon name="iconHome" color={color} focused={focused}/>,
                                                   tabBarLabel: ({focused})=> <BarLabel title={translations.home} focused={focused} />
                                               }}/>
                    <BottomTabNavigator.Screen name="Characters" component={CharactersNavigation}
                                               options={{
                                                   title: 'Characters',
                                                   headerShown: false,
                                                   tabBarIcon: ({color,focused}) => <BarIcon name="iconCharacteres" color={color} focused={focused}/>,
                                                   tabBarLabel: ({focused})=> <BarLabel title={translations.characters} focused={focused} />
                                               }}/>
                    <BottomTabNavigator.Screen name="Favorites" component={FavoritesNavigation}
                                               options={{
                                                   title: 'Favorites',
                                                   headerShown: false,
                                                   tabBarIcon: ({color,focused}) => <BarIcon name="iconFavorites" color={color} focused={focused}/>,
                                                   tabBarLabel: ({focused})=> <BarLabel title={translations.favorites} focused={focused} />
                                               }}/>
                    <BottomTabNavigator.Screen name="Settings" component={SettingsScreen}
                                               options={{
                                                   title: 'Settings',
                                                   headerShown: false,
                                                   tabBarIcon: ({color, focused}) => <BarIcon name="iconSettings" color={color} focused={focused}/>,
                                                   tabBarLabel: ({focused})=> <BarLabel title={translations.settings} focused={focused} />
                                               }}/>
                </BottomTabNavigator.Navigator>

        </ThemeContextProvider>
    )
}

export default Navigation;