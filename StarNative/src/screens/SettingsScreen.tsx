import React, {useContext, useState} from 'react';
import {Dimensions, StyleSheet, Switch, StatusBar, TouchableOpacity, Text} from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useDerivedValue,
    withTiming,
} from 'react-native-reanimated';


import {useTheme} from "../context/theme-context";
import {Headline} from "react-native-paper";
import { LanguageContext } from '../context/language-context';
import fr from '../globalization/fr';
import en from '../globalization/en';


export default function SettingsScreen() {
    const {toggleThemeType, theme} = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);
    const { language, setLanguage } = useContext(LanguageContext);
    const translations = language === 'en' ? en : fr;
    
    const toggleSwitch=() =>{
        if(isEnabled) {
            toggleThemeType()
        } else{
            toggleThemeType()
        }
        setIsEnabled(previousState => !previousState)
    }

    return (
    <Animated.View style={[styles.container]}>
        <Headline style={styles.text}>Dark Side</Headline>
        <Animated.View style={[styles.circle]}>
            <Switch
                onValueChange={(toggleSwitch)}
                trackColor={{false: '#d5d4d4', true: theme.colors.sideColor}}
                thumbColor={isEnabled ? theme.colors.sideColor : theme.colors.sideColor}
                value={isEnabled}
            />
        </Animated.View>
        <TouchableOpacity onPress={() => setLanguage(language === 'en' ? 'fr' : 'en')}>
            <Text>eee</Text>
            <Text>{translations.language}</Text>
        </TouchableOpacity>
    </Animated.View>
    );
}

const SIZE = Dimensions.get('window').width * 0.4;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop:80,
    },
    circle: {
        width: SIZE,
        height: SIZE,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZE / 2,
        shadowOffset: {
            width: 0,
            height: 20,
        },

        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 10,
    },
    text: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '700',
        letterSpacing: 14,
        marginBottom: 10,
    },
});