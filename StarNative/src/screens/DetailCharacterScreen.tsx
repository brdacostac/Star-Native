import { View, Text, FlatList, Image, TouchableOpacity, Linking, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FAVORITE_CHARACTER, DELETE_FAVORITE_CHARACTER } from '../store/constantes';

const KEY_FAVORITE_CHARACTERS = 'favorite_characters';

export default function DetailCharacterScreen({route}) {
  const character = route.params.character;
  const favoriteCharacters = useSelector(state => state.favoritesReducer.favoriteCharacters);
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  

  useEffect(() => {
    const favoriteCharacter = favoriteCharacters.find(
      (favChar) => favChar.name === character.name
    );
    
    setIsLiked(favoriteCharacter !== undefined);
  }, [favoriteCharacters, character]);

  
  const addToFavorites = () => {
    if (!favoriteCharacters.find(favChar => favChar.name === character.name)) {
        setIsLiked(true);
        dispatch({ type: ADD_FAVORITE_CHARACTER, payload: character });
      }
  };

  const deleteFromFavorites = () => {
    if (favoriteCharacters.find(favChar => favChar.name === character.name)) {
        setIsLiked(false);
        dispatch({ type: DELETE_FAVORITE_CHARACTER, payload: character });
      }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
        buttonStyle={{ marginBottom: 20 }}
      />
      <Image
        source={{ uri: character.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          overflow: 'hidden',
          marginBottom: 20
        }}
      />
      <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>{character.name}</Text>
      <Text style={{ marginBottom: 10 }}>{character.homeworld}</Text>
      <Text style={{ marginBottom: 10 }}>Height: {character.height}</Text>
      <Text style={{ marginBottom: 10 }}>Mass: {character.mass}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>Masters:</Text>
        <FlatList
          horizontal={true}
          data={Array.isArray(character.masters) ? character.masters : [character.masters]}
          renderItem={({ item }) => <Text
          style={{ marginLeft: 10 }}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
          />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Apprentices:</Text>
          <FlatList
          horizontal={true}
          data={Array.isArray(character.apprentices) ? character.apprentices : [character.apprentices]}
          renderItem={({ item }) => <Text
          style={{ marginLeft: 10 }}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
          />
          </View>
          <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => {
          isLiked ? deleteFromFavorites() : addToFavorites();
          }}
          >
          <Icon
          name={isLiked ? 'heart' : 'heart-o'}
          size={30}
          color={isLiked ? 'red' : 'black'}
          />
          </TouchableOpacity>
          </View>
          );
        }