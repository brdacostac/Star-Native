import {View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import CardCharacter from './../components/CardCharacter';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DisplayListsCharacter from '../components/DisplayListsCharacter';
import { useSelector } from 'react-redux';


export default function CharactersScreen() {
  const dataCharactersState = useSelector((state) => state.charactersReducer.characters);

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
      <Text>Problème avec les données</Text>
    </View>
  );
}