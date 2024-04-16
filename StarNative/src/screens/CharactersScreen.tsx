import {View, Text } from 'react-native';
import { useEffect, useState, useRef, useContext } from 'react';
import DisplayListsCharacter from '../components/DisplayListsCharacter';
import { useSelector } from 'react-redux';
import { LanguageContext } from '../context/language-context';
import fr from '../globalization/fr';
import en from '../globalization/en';


export default function CharactersScreen() {
  const dataCharactersState = useSelector((state) => state.charactersReducer.characters);
  const { language, setLanguage } = useContext(LanguageContext);
  const translations = language === 'en' ? en : fr;
  const [dataCharacters, setDataCharacters] = useState([]);

  useEffect(() => {
    if (dataCharactersState) {
      setDataCharacters(dataCharactersState);
    }
  }, [dataCharactersState]);

  return dataCharacters.length ? (
    <DisplayListsCharacter isSearchBar={true} dataCharactersParam={dataCharacters} />
  ) : (
    <View>
      <Text>{translations.problem}</Text>
    </View>
  );
}