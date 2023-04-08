import React, {useContext, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';
import DisplayListsCharacter from '../components/DisplayListsCharacter';
import {Headline} from "react-native-paper";
import en from "../globalization/en";
import fr from "../globalization/fr";
import {LanguageContext} from "../context/language-context";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useTheme} from "../context/theme-context";



export default function FavoritesScreen() {
  const [localFavoriteCharacters, setLocalFavoriteCharacters] = useState([]);
  const { language, setLanguage } = useContext(LanguageContext);
  const translations = language === 'en' ? en : fr;
  const {isDarkTheme} = useTheme();


  const favoriteCharacters = useSelector(state => state.favoritesReducer.favoriteCharacters);
  
  useEffect(() => {
    //console.log(favoriteCharacters);
    setLocalFavoriteCharacters(favoriteCharacters);
  }, [favoriteCharacters]);
  
  return (
    <>
      <Headline style={styles.textFavorite}>{translations.favorites}</Headline>
      {localFavoriteCharacters.length ? (
        <DisplayListsCharacter  isSearchBar={false} dataCharactersParam={localFavoriteCharacters}/>
      ) : (
        <View style={styles.waitingFavoritesContainer}>
          <View style={styles.waitingFavorites}>
            <Headline>{translations.emptyFavorites}</Headline>
            { !isDarkTheme ?
              <TouchableOpacity style={styles.circularImage}>
                  <Image
                    source={{uri: 'https://dailygeekshow.com/wp-content/uploads/sites/2/2016/05/starWars.gif'}}
                    style={{width: 150, height: 150}}
                  />
              </TouchableOpacity>:
              <TouchableOpacity >
                <Image
                  source={{uri: 'https://media.giphy.com/media/7RUNuow9v0bUxrwgSw/giphy.gif'}}
                  style={{width: 250, height: 250}}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              }
          </View>
        </View>
      )}
    </>)
}


const styles = StyleSheet.create({
  circularImage: {
    borderRadius: 1000,
    width: 150,
    height: 150,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  textFavorite: {
    fontSize: 37,
    fontWeight: "600",
    paddingTop: 20,
    paddingLeft: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  waitingFavoritesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waitingFavorites: {
    alignItems: "center",
  }
});