import { View, Text, FlatList, Image, TouchableOpacity, Linking, Button } from 'react-native';
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
    if (!favoriteCharacters.includes(character.id)) {
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
          renderItem={({ item }) => <Text style={{ marginLeft: 10 }}>{item}</Text>}
          keyExtractor={item => item}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>Apprentices:</Text>
        <FlatList
          horizontal={true}
          data={Array.isArray(character.apprentices) ? character.apprentices : [character.apprentices]}
          renderItem={({ item }) => <Text style={{ marginLeft: 10 }}>{item}</Text>}
          keyExtractor={item => item}
        />
      </View>
      <TouchableOpacity onPress={() => Linking.openURL(character.wiki)}>
        <Text style={{ color: 'blue' }}>Learn more on Wikipedia</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity onPress={!isLike ? addToFavorites : deleteToFavorites}>
          <Icon
            name={isLike ? 'heart' : 'heart-o'}
            size={30}
            color={isLike ? 'red' : 'black'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}