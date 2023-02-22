import React, {useContext, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import DisplayListsCharacter from '../components/DisplayListsCharacter';
import {Headline} from "react-native-paper";
import en from "../globalization/en";
import fr from "../globalization/fr";
import {LanguageContext} from "../context/language-context";


// interface Character {
//   affiliations: string[];
//   apprentices: string[];
//   born: number;
//   bornLocation: string;
//   cybernetics: string;
//   died: number;
//   diedLocation: string;
//   eyeColor: string;
//   formerAffiliations: any[];
//   gender: string;
//   hairColor: string;
//   height: number;
//   homeworld: string;
//   id: number;
//   image: string;
//   mass: number;
//   masters: string[];
//   name: string;
//   skinColor: string;
//   species: string;
//   wiki: string;
// }

export default function FavoritesScreen() {
  const [localFavoriteCharacters, setLocalFavoriteCharacters] = useState([]);
  const { language, setLanguage } = useContext(LanguageContext);
  const translations = language === 'en' ? en : fr;

  const favoriteCharacters = useSelector(state => state.favoritesReducer.favoriteCharacters);
  
  useEffect(() => {
    setLocalFavoriteCharacters(favoriteCharacters);
  }, [favoriteCharacters]);
  
  return localFavoriteCharacters.length ? (
    <DisplayListsCharacter  isSearchBar={false} dataCharactersParam={localFavoriteCharacters}/>
  ) : (
    <View>
      <Headline>{translations.emptyFavorites}</Headline>
    </View>
  );
  }