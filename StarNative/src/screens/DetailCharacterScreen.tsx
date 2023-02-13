import { View, Text, FlatList, Image, TouchableOpacity, Linking, Button, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FAVORITE_CHARACTER, DELETE_FAVORITE_CHARACTER } from '../store/constantes';
import { Ionicons } from '@expo/vector-icons';
import { Animated, Easing } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Headline} from "react-native-paper";
import {ThemeContextProvider, useTheme} from "../context/theme-context";


export default function DetailCharacterScreen({route}) {
  const character = route.params.character;
  const favoriteCharacters = useSelector(state => state.favoritesReducer.favoriteCharacters);
  const dataCharactersState = useSelector((state) => state.charactersReducer.characters);
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {theme} = useTheme();
  

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
            <View style={styles.contentTop}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.iconBack}>
                <Ionicons name="ios-arrow-back" size={30} style={{color: theme.colors.sideColor}} />
              </TouchableOpacity> 
              <Headline style={styles.name}>{character.name}</Headline>
            </View>

            <ScrollView>

            <TouchableWithoutFeedback
              onPressIn={handleImagePressIn}
              onPressOut={handleImagePressOut}
            >
              <Animated.Image
                source={{ uri: character.image }}
                style={styles.imageCharacter}
              />
            </TouchableWithoutFeedback>
            <TouchableOpacity
              style={styles.iconLike}
              onPress={() => {
              isLiked ? deleteFromFavorites() : addToFavorites();
              }}>
              <Icon
                name={isLiked ? 'heart' : 'heart-o'}
                size={30}
                color={isLiked ? 'red' : 'black'}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', paddingBottom: 7, paddingTop: 20 }}>
              <Headline style={styles.label}>GENDER</Headline>
              <Headline style={styles.value} >{formatWord(character.gender)}</Headline>
            </View>
            <View style={styles.contentDescription}>
              <Headline style={styles.label}>HOMEWORLD</Headline>
              <Headline style={styles.value} >{character.homeworld ? formatWord(character.homeworld) : "Aucun"}</Headline>
            </View>
            <View style={styles.contentDescription}>
              <Headline style={styles.label}>HEIGHT</Headline>
              <Headline style={styles.value} >{character.height ? character.height + " meters" : "Inconnue"}</Headline>
            </View>
            <View style={styles.contentDescription}>
              <Headline style={styles.label}>MASS</Headline>
              <Headline style={styles.value} >{character.mass? character.mass + " kilograms" : "Inconnue"}</Headline>
            </View>
            <View style={styles.contentDescription}>
              <Headline style={styles.label}>SPECIES</Headline>
              <Headline style={styles.value} >{formatWord(character.species)}</Headline>
            </View>
            {character.masters && (dataCharactersState.filter(favChar => character.masters.includes(favChar.name)).length > 0 || dataCharactersState.find(favChar => favChar.name === character.masters)) &&
              <View style={styles.contentList}>
                <Headline style={styles.label}>Masters:</Headline>
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
                        <Image source={{ uri: item.image }} style={styles.imageCharacters} />
                      </TouchableOpacity>)}
                    keyExtractor={(item, index) => index.toString()} />
              </View>}
            
            {character.apprentices  && (dataCharactersState.filter(favChar => character.apprentices.includes(favChar.name)).length > 0 || dataCharactersState.find(favChar => favChar.name === character.apprentices)) &&
              <View style={styles.contentList}> 
                  <Headline style={styles.label}>Apprentis:</Headline>
                  <FlatList
                    horizontal={true}
                    data={Array.isArray(character.apprentices) ?
                      dataCharactersState.filter(favChar => character.apprentices.includes(favChar.name)) :
                        [dataCharactersState.find(favChar => favChar.name === character.apprentices)] }
                    renderItem={({ item }) => (
                      <TouchableOpacity style={{ marginLeft: 10 }}
                                        onPress={() => navigation.navigate('CharacterDetails', { character: item })}>
                        {/* <Text>{item.name}</Text> */}
                        <Image source={{ uri: item.image }} style={styles.imageCharacters} />
                      </TouchableOpacity>)}
                    keyExtractor={(item, index) => index.toString()} />
              </View>}
              <TouchableOpacity onPress={() => Linking.openURL(character.wiki)}>
                <Headline style={styles.wiki}>Learn more on Wikipedia</Headline>
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
    fontWeight: 'bold',
  },
  value: {
    marginLeft: '20%',
    fontSize: 20,
  },
  name: { 
    fontWeight: 'bold', 
    fontSize: 30, 
    textAlign: 'center', 
  },
  contentTop: { 
    flexDirection: 'row', 
    justifyContent: 'center',
  },
  iconBack: { 
    position: 'absolute', 
    left: 0,
  },
  imageCharacter: {
    width: 200,
    height: 200,
    borderRadius: 50,
    overflow: 'hidden',
    alignSelf: 'center',
    margin: 20,
    // transform: [{ scale: scaleValue }]
  },
  iconLike: { 
    marginTop: 2, 
    alignSelf: 'center'
  },
  contentDescription: { 
    flexDirection: 'row', 
    paddingBottom: 7 
  },
  contentList: { 
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    marginBottom: 20 
  },
  imageCharacters: { 
    width: 65, 
    height: 65, 
    borderRadius: 50, 
    borderWidth: 2, 
    borderColor: '#333' 
  },
  wiki: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold', 
    paddingBottom: 10
  }
});