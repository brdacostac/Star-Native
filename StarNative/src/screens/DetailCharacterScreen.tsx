import { View, Text, FlatList, Image, TouchableOpacity, Linking, Button, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FAVORITE_CHARACTER, DELETE_FAVORITE_CHARACTER } from '../store/constantes';
import { Ionicons } from '@expo/vector-icons';
import { Animated, Easing } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const KEY_FAVORITE_CHARACTERS = 'favorite_characters';

export default function DetailCharacterScreen({route}) {
  const character = route.params.character;
  const favoriteCharacters = useSelector(state => state.favoritesReducer.favoriteCharacters);
  const dataCharactersState = useSelector((state) => state.charactersReducer.characters);
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  

  useEffect(() => {
    const favoriteCharacter = favoriteCharacters.find(
      (favChar) => favChar.name === character.name
    );

    setIsLiked(favoriteCharacter !== undefined);
  }, [favoriteCharacters, character]);

  const [scaleValue, setScaleValue] = useState(new Animated.Value(1));
  
  const handleImagePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 1.3,
      duration: 300,
      useNativeDriver: true
    }).start();
  };
  
  const handleImagePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  
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
  
  const formatWord = (word) => {
    word = word.trim();
    return word.charAt(0).toUpperCase() + word.slice(1);
    };

  return (
          <View style={{   padding: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ position: 'absolute', left: 0 }}>
                <Ionicons name="ios-arrow-back" size={30} color="#333" />
              </TouchableOpacity> 
              <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>{character.name}</Text>
            </View>

            <ScrollView>

            <TouchableWithoutFeedback
              onPressIn={handleImagePressIn}
              onPressOut={handleImagePressOut}
            >
              <Animated.Image
                source={{ uri: character.image }}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 50,
                  overflow: 'hidden',
                  alignSelf: 'center',
                  margin: 20,
                  transform: [{ scale: scaleValue }]
                }}
              />
            </TouchableWithoutFeedback>
            <View style={{ flexDirection: 'row', paddingBottom: 7, paddingTop: 20 }}>
              <Text style={styles.label}>GENDER</Text>
              <Text style={styles.value} >{formatWord(character.gender)}</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingBottom: 7 }}>
              <Text style={styles.label}>HOMEWORLD</Text>
              <Text style={styles.value} >{character.homeworld ? formatWord(character.homeworld) : "Aucun"}</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingBottom: 7 }}>
              <Text style={styles.label}>HEIGHT</Text>
              <Text style={styles.value} >{character.height ? character.height + " meters" : "Inconnue"}</Text>
            </View>
            <View style={{ flexDirection: 'row' , paddingBottom: 7 }}>
              <Text style={styles.label}>MASS</Text>
              <Text style={styles.value} >{character.mass? character.mass + " kilograms" : "Inconnue"}</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingBottom: 7 }}>
              <Text style={styles.label}>SPECIES</Text>
              <Text style={styles.value} >{formatWord(character.species)}</Text>
            </View>
            <TouchableOpacity onPress={() => Linking.openURL(character.wiki)}>
              <Text style={{ color: 'blue' }}>Learn more on Wikipedia</Text>
            </TouchableOpacity>
            {character.masters && (dataCharactersState.filter(favChar => character.masters.includes(favChar.name)).length > 0 || dataCharactersState.find(favChar => favChar.name === character.masters)) &&
              <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>Masters:</Text>
                <FlatList
                  horizontal={true}
                  data={
                    Array.isArray(character.masters) ?
                      dataCharactersState.filter(favChar => character.masters.includes(favChar.name)) :
                        [dataCharactersState.find(favChar => favChar.name === character.masters)] 
                  }
                    renderItem={({ item }) => (
                      <TouchableOpacity style={{ marginLeft: 10 }}
                                        onPress={() => navigation.navigate('CharacterDetails', { character: item })}>
                        {/* <Text>{item.name}</Text> */}
                        <Image source={{ uri: item.image }} style={{ width: 65, height: 65, borderRadius: 50 , borderWidth: 1, borderColor: '#333' }} />
                      </TouchableOpacity>)}
                    keyExtractor={(item, index) => index.toString()} />
              </View>}
            
            {character.apprentices  && (dataCharactersState.filter(favChar => character.apprentices.includes(favChar.name)).length > 0 || dataCharactersState.find(favChar => favChar.name === character.apprentices)) &&
              <View style={{ flexDirection: 'column', alignItems: 'flex-start'}}> 
                  <Text style={{ fontWeight: 'bold' }}>Apprentis:</Text>
                  <FlatList
                    horizontal={true}
                    data={Array.isArray(character.apprentices) ?
                      dataCharactersState.filter(favChar => character.apprentices.includes(favChar.name)) :
                        [dataCharactersState.find(favChar => favChar.name === character.apprentices)] }
                    renderItem={({ item }) => (
                      <TouchableOpacity style={{ marginLeft: 10 }}
                                        onPress={() => navigation.navigate('CharacterDetails', { character: item })}>
                        {/* <Text>{item.name}</Text> */}
                        <Image source={{ uri: item.image }} style={{ width: 65, height: 65, borderRadius: 50 }} />
                      </TouchableOpacity>)}
                    keyExtractor={(item, index) => index.toString()} />
              </View>}
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => {
              isLiked ? deleteFromFavorites() : addToFavorites();
              }}>
              <Icon
                name={isLiked ? 'heart' : 'heart-o'}
                size={30}
                color={isLiked ? 'red' : 'black'}
              />
            </TouchableOpacity>
            </ScrollView>
          </View>
          );
        }


const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    fontSize: 20,
    width: '35%',
  },
  value: {
    marginLeft: '20%',
    fontSize: 20,
  },
});