import React, {useContext, useState} from 'react';
import {View, Text, Image, Animated, StyleSheet, ScrollView,Dimensions} from 'react-native';
import {useTheme} from "../context/theme-context";
import {Headline} from "react-native-paper";
import { LanguageContext } from '../context/language-context';
import fr from '../globalization/fr';
import en from '../globalization/en';

export default function HomeScreen() {
    const [fadeAnim] = useState(new Animated.Value(0));
    const {theme} = useTheme();
    const { language, setLanguage } = useContext(LanguageContext);
    const translations = language === 'en' ? en : fr;

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, []);


  return (
    <ScrollView style={styles.container}>
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.title,
                    opacity: fadeAnim,
                }}>
                <Image
                    source={theme.images.logo}
                    style={styles.logo}
                />
            </Animated.View>
            <Text style={[{color: theme.colors.sideColor}, styles.text]}>
                Welcome to Star Native, the ultimate Star Wars encyclopedia!</Text>
            <Headline style={[{color: theme.colors.sideColor}, styles.text]}>
                {translations.hometext}
            </Headline>
      </View>
    </ScrollView>
  );
}
const SIZE = Dimensions.get('window').width * 0.9;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:5,
        margin:5,
    },
    logo: {
        width: SIZE,
        height: SIZE,
        alignItems:'center',
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        textAlign: 'justify',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        marginTop:-70,
    },
    text: {
        fontSize: 18,
        textAlign: 'justify',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        lineHeight: 22,
    },
});