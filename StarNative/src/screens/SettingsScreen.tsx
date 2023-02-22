import React, { useContext, useState } from 'react';
import {
Dimensions,
StyleSheet,
Switch,
StatusBar,
TouchableOpacity,
Text,
View,
} from 'react-native';
import Animated, {
Easing,
interpolateColor,
useAnimatedStyle,
useDerivedValue,
withTiming,
} from 'react-native-reanimated';

import { useTheme } from '../context/theme-context';
import { Headline } from 'react-native-paper';
import { LanguageContext } from '../context/language-context';
import fr from '../globalization/fr';
import en from '../globalization/en';

export default function SettingsScreen() {
    const { toggleThemeType, theme } = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);
    const { language, setLanguage } = useContext(LanguageContext);
    const translations = language === 'en' ? en : fr;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Français');
    const rotateValue = new Animated.Value(0);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        Animated.timing(rotateValue, {
          toValue: isOpen ? 0 : 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();
      };
    
      const rotateStyle = useAnimatedStyle(() => {
        const rotate = withTiming(isOpen ? 1 : 0, { duration: 500, easing: Easing.linear });
        return {
          transform: [
            {
              rotate: `${rotate * 180}deg`,
            },
          ],
        };
      });

    const toggleSwitch = () => {
        toggleThemeType();
        setIsEnabled(!isEnabled);
    };

    return (
        <View style={styles.container}>
            <Headline style={styles.text}>Dark Side</Headline>
            <View style={styles.circle}>
                <Switch
                onValueChange={toggleSwitch}
                trackColor={{ false: '#d5d4d4', true: theme.colors.sideColor }}
                thumbColor={isEnabled ? theme.colors.sideColor : theme.colors.sideColor}
                value={isEnabled}
                />
            </View>
        <TouchableOpacity onPress={toggleOpen}>
            <Text>{language}</Text>
            <Text>▼</Text>
            <Animated.View style={rotateStyle}>
            </Animated.View>
        </TouchableOpacity>
        {isOpen && (
            <View>
                <TouchableOpacity onPress={() => { setLanguage('fr'); setIsOpen(false) }}>
                    <Text>Français</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setLanguage('en'); setIsOpen(false) }}>
                    <Text>Anglais</Text>
                </TouchableOpacity>
            </View>
        )}
        </View>
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