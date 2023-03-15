    import React, {useContext, useEffect, useState} from 'react';
    import {
    Dimensions,
    StyleSheet,
    Switch,
    View, Image, TouchableOpacity, StatusBar,
} from 'react-native';


    import { Audio } from 'expo-av';
    import { useTheme } from '../context/theme-context';
    import { Headline } from 'react-native-paper';
    import { LanguageContext } from '../context/language-context';
    import fr from '../globalization/fr';
    import en from '../globalization/en';
    import SelectDropdown from 'react-native-select-dropdown'
    import FontAwesome from 'react-native-vector-icons/FontAwesome';
    import Ionicons from 'react-native-vector-icons/Ionicons';

    export default function SettingsScreen() {
        const {toggleThemeType, theme, isDarkTheme} = useTheme();
        const [isEnabled, setIsEnabled] = useState(false);
        const [isMuted, setIsMuted] = useState(false);
        const {language, setLanguage} = useContext(LanguageContext);
        const translations = language === 'en' ? en : fr;

        const languages = [
            {title: 'English', image: require('../../assets/img/usa.png'), language: 'en'},
            {title: 'French', image: require('../../assets/img/france.png'), language: 'fr'},];

        const [sound, setSound] = useState(null);


        const toggleSwitch = async() => {
            toggleThemeType();
            setIsEnabled(!isEnabled);
            if (sound) {
                await sound.unloadAsync();
            }

            let newSource;
            if (isEnabled && !isMuted) {
                newSource = require('../../assets/musics/LightMode.mp3');
            }
            else if (!isEnabled && !isMuted) {
                newSource = require('../../assets/musics/DarkMode.mp3');
            }

            const newSoundObject = new Audio.Sound();

            if(newSource){
                await newSoundObject.loadAsync(newSource);
                setSound(newSoundObject);
                await newSoundObject.playAsync();
            }

        };

        const toggleMute = async () => {
            try{
                setIsMuted(!isMuted);
                if (sound) {
                    await sound.setIsMutedAsync(!isMuted);
                }
            }
            catch (e){

            }

        };

        return (
            <View style={styles.container}>
                <Headline style={styles.text}>{translations.darkside}</Headline>
                <View style={styles.circle}>
                    <Switch
                        onValueChange={toggleSwitch}
                        trackColor={{false: '#d5d4d4', true: theme.colors.sideColor}}
                        thumbColor={isEnabled ? theme.colors.sideColor : theme.colors.sideColor}
                        value={isEnabled}
                    />
                </View>
                <SelectDropdown data={languages}
                                defaultValueByIndex={0}
                                defaultValue={{
                                    title: 'English',
                                    image: require('../../assets/img/usa.png'),
                                }}
                                onSelect={(selectedItem, index) => {
                                    setLanguage(selectedItem.language);
                                }}
                                buttonStyle={[styles.dropdown3BtnStyle, {backgroundColor: theme.colors.background}, {borderColor: theme.colors.text}]}
                                renderCustomizedButtonChild={(selectedItem, index) => {
                                    return (
                                        <View style={[styles.dropdown3BtnChildStyle]}>
                                            {selectedItem ? (
                                                <Image source={selectedItem.image} style={styles.dropdown3BtnImage}/>
                                            ) : (
                                                <Ionicons name="md-earth-sharp" size={25}/>
                                            )}
                                            <Headline
                                                style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select Language'}</Headline>
                                            <FontAwesome name="chevron-down" size={15}/>
                                        </View>
                                    );
                                }}
                                dropdownStyle={styles.dropdown3DropdownStyle}
                                rowStyle={styles.dropdown3RowStyle}
                                selectedRowStyle={styles.dropdown1SelectedRowStyle}
                                renderCustomizedRowChild={(item, index) => {
                                    return (
                                        <View style={styles.dropdown3RowChildStyle}>
                                            <Image source={item.image} style={styles.dropdownRowImage}/>
                                            <Headline style={styles.dropdown3RowTxt}>{item.title}</Headline>
                                        </View>
                                    );
                                }}
                />
                <View>
                    <TouchableOpacity style={styles.boutonMute} onPress={toggleMute}>
                        <Ionicons
                            name={isMuted ? 'volume-mute-outline' : 'volume-high-outline'}
                            size={40}
                            color={theme.colors.text}/>
                    </TouchableOpacity>
                    <StatusBar barStyle={isDarkTheme ? 'light-content' : "dark-content"} backgroundColor={isDarkTheme ? "black" : 'white' } />
                </View>
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
        boutonMute:{
            marginTop: SIZE/2,
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

        dropdown1SelectedRowStyle: {backgroundColor: 'rgba(0,0,0,0.1)'},
        dropdownRowImage: {
            width: 45,
            height: 45,
            resizeMode: 'cover'
        },
        dropdown3BtnStyle: {
            backgroundColor:'white',
            width: '50%',
            height: 35,
            marginTop: 60,
            paddingHorizontal: 0,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#444',
        },
        dropdown3BtnChildStyle: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
        },
        dropdown3BtnImage: {
            width: 25,
            height: 25,
            resizeMode: 'cover'
        },
        dropdown3BtnTxt: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            marginHorizontal: 12,
        },
        dropdown3DropdownStyle: {backgroundColor: 'slategray'},
        dropdown3RowStyle: {
            backgroundColor: 'slategray',
            borderBottomColor: '#444',
            height: 50,
        },
        dropdown3RowChildStyle: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingHorizontal: 18,
        },
        dropdown3RowTxt: {
            color: '#F1F1F1',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 24,
            marginHorizontal: 12,
        },
        text: {
            fontSize: 20,
            textTransform: 'uppercase',
            fontWeight: '700',
            letterSpacing: 14,
            marginBottom: 10,
        },
    });