import React, {useState} from 'react';
import {Dimensions, StyleSheet, Switch, View} from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useDerivedValue,
    withTiming,
} from 'react-native-reanimated';

import {useTheme} from "../context/theme-context";
import {Headline} from "react-native-paper";

export default function SettingsScreen() {
    const {toggleThemeType, theme} = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);

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
                trackColor={{false: 'rgba(0,0,0,0.1)', true:'rgba(229,9,9,0.49)'}}
                thumbColor={'red'}
                value={isEnabled}
            />
        </Animated.View>
    </Animated.View>
    );
}

const SIZE = Dimensions.get('window').width * 0.3;
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