import { View, Text, Button, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

const KEY_FAVORITE_CHARACTERS = 'favorite_characters';

export default function DetailCharacterScreen({route}) {
  const character = route.params.character;
  const favoriteCharacters = useSelector(state => state.favoriteCharacters);
  const [isLike, setIsLike] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  

  useEffect(() => {
    setIsLike(favoriteCharacters.includes(character.name));
  }, []);

  
  const addToFavorites = () => {
    if (!favoriteCharacters.includes(character.name)) {
        setIsLike(true);
        dispatch({ type: 'ADD_FAVORITE_CHARACTER', payload: character.name });
      }
    
  };

  const deleteToFavorites = () => {
    if (favoriteCharacters.includes(character.name)) {
        setIsLike(false);
        dispatch({ type: 'DELETE_FAVORITE_CHARACTER', payload: character.name });
      }
    
  };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Go back"
            onPress={() => navigation.goBack()}
          />
          <Image source={{ uri: character.image }} style={{
                    width: 100, 
                    height: 100, 
                    borderRadius: 100, 
                    overflow: 'hidden'
                  }} />
          
          <Text>{character.name}</Text>
          <Text>{character.homeworld}</Text>
          <Text>{character.height}</Text>
          <Text>{character.mass}</Text>
          {Array.isArray(character.masters) ? (
            character.masters.map((master: string) => <Text>{master}</Text>)
          ) : character.masters ? (
            <Text>{character.masters}</Text>
          ) : (
            <Text>Pas de master</Text>
          )}
          {Array.isArray(character.apprentices) ? (
            character.apprentices.map((apprentice: string) => <Text>{apprentice}</Text>)
          ) : (
            <Text>Pas d'apprentit</Text>
          )}
          <Text>{character.gender}</Text>
          {!isLike ? (
            <Icon
              name="star"
              color="blue"
              size={33}
              onPress={addToFavorites}
            />
          ) : (
            <Icon
              name="star"
              color="green"
              size={33}
              onPress={deleteToFavorites}
            />
          )}
          <TouchableOpacity onPress={() => Linking.openURL(character.wiki)}>
            <Text>Page Wikia de {character.name}</Text>
          </TouchableOpacity>
          <Text>{character.species}</Text>
        </View>
      );
  }