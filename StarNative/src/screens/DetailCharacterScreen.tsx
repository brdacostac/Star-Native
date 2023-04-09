import { View, FlatList, Image, TouchableOpacity, Linking, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Animated, Easing } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Headline} from "react-native-paper";
import {useTheme} from "../context/theme-context";
import { LanguageContext } from '../context/language-context';
import fr from '../globalization/fr';
import en from '../globalization/en';
import Like from "./../../assets/img/unlike.png";
import Unlike from '../../assets/img/like.png';
import Bin from '../../assets/img/poubelle.png';
import { addFavorites, deleteFavorites } from '../actions/actionsFavorites';

export default function DetailCharacterScreen({route}) {
  const character = route.params.character;
  const isFavorite = route.params.isFavorite;
  const favoriteCharacters = useSelector(state => state.favoritesReducer.favoriteCharacters);
  const dataCharactersState = useSelector((state) => state.charactersReducer.characters);
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {theme} = useTheme();
  const { language, setLanguage } = useContext(LanguageContext);
  const translations = language === 'en' ? en : fr;


  useEffect(() => {
    const favoriteCharacter = favoriteCharacters.find(
      (favChar) => favChar.name === character.name
    );
    setIsLiked(favoriteCharacter !== undefined);
  }, [favoriteCharacters, character]);

  const [scaleValue, setScaleValue] = useState(new Animated.Value(1));

  const handleImagePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 1.2,
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
        dispatch(addFavorites(character));
      }
  };

  const deleteFromFavorites = () => {
    if (favoriteCharacters.find(favChar => favChar.name === character.name)) {
        setIsLiked(false);
        dispatch(deleteFavorites(character));
      }
  };

  const formatWord = (word) => {
    console.log(word);
    if(Array.isArray(word))
      word = word[0];
    word = word.trim();
    return word.charAt(0).toUpperCase() + word.slice(1);
    };

  return (

          <View  style={{paddingTop: 25}}>
            <View style={isFavorite ? styles.contentTop : styles.contentTopF }>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={isFavorite && styles.iconBack }>
                <Ionicons name="ios-arrow-back" size={30} style={{color: theme.colors.sideColor}} />
              </TouchableOpacity>
              <Headline style={styles.name}>{character.name}</Headline>
              {! isFavorite &&
                <TouchableOpacity
                  style={styles.iconBin}
                  onPress={() => {
                  deleteFromFavorites(), navigation.goBack() ;
                  }}>
                  <Image source={Bin}  style={styles.binImage} />
                </TouchableOpacity>
              }
            </View>

            <ScrollView style={{ paddingHorizontal: 25}}>

            <TouchableWithoutFeedback
              onPressIn={handleImagePressIn}
              onPressOut={handleImagePressOut}
            >
              <Animated.Image
                source={{ uri: character.image }}
                style={[styles.imageCharacter, { transform: [{ scale: scaleValue }]}]}
              />
            </TouchableWithoutFeedback>
            {isFavorite &&
              <TouchableOpacity
                style={styles.iconLike}
                onPress={() => {
                isLiked ? deleteFromFavorites() : addToFavorites();
                }}>
                {isLiked ? (
                  <Image source={Like} style={styles.likeImage} />
                ) : (
                  <Image source={Unlike} style={styles.unlikeImage} />
                )}
              </TouchableOpacity>
            }
            <View style={{ flexDirection: 'row', paddingBottom: 7, paddingTop: 20 }}>
              <Headline style={styles.label}>{translations.gender}</Headline>
              <Headline style={styles.value} >{character.gender ? formatWord(character.gender) : translations.unknown}</Headline>
            </View>
            <View style={styles.contentDescription}>
              <Headline style={styles.label}>{translations.homeworld}</Headline>
              <Headline style={styles.value} >{character.homeworld ? formatWord(character.homeworld) : translations.unknown}</Headline>
            </View>
            <View style={styles.contentDescription}>
              <Headline style={styles.label}>{translations.height}</Headline>
              <Headline style={styles.value} >{character.height ? character.height + " " + translations.meters : translations.unknown}</Headline>
            </View>
            <View style={styles.contentDescription}>
              <Headline style={styles.label}>{translations.mass}</Headline>
              <Headline style={styles.value} >{character.mass? character.mass + " " + translations.kilograms : translations.unknown}</Headline>
            </View>
            <View style={styles.contentDescription}>
              <Headline style={styles.label}>{translations.species}</Headline>
              <Headline style={styles.value} >{character.species ? formatWord(character.species) : translations.unknown}</Headline>
            </View>
            {character.masters && (dataCharactersState.filter(favChar => character.masters.includes(favChar.name)).length > 0 || dataCharactersState.find(favChar => favChar.name === character.masters)) && (
              <View style={styles.contentList}>
                <Headline style={styles.label}>{translations.masters}</Headline>
                <FlatList
                  horizontal={true}
                  data={Array.isArray(character.masters) ?
                    dataCharactersState.filter(favChar => character.masters.includes(favChar.name)) :
                    [dataCharactersState.find(favChar => favChar.name === character.masters)]
                  }
                  renderItem={({ item }) => (
                    ! isFavorite ? (
                      <TouchableOpacity style={{ marginLeft: 10, opacity: 0.2 }}>
                        <Image source={{ uri: item.image }} style={styles.imageCharacters} />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.push('CharacterDetails', { character: item, isFavorite: true })}>
                        <Image source={{ uri: item.image }} style={styles.imageCharacters} />
                      </TouchableOpacity>
                    )
                  )}
                  keyExtractor={(item, index) => index.toString()} />
              </View>
            )}


            {character.apprentices  && (dataCharactersState.filter(favChar => character.apprentices.includes(favChar.name)).length > 0 || dataCharactersState.find(favChar => favChar.name === character.apprentices)) &&
              <View style={styles.contentList}>
                  <Headline style={styles.label}>{translations.apprentices}</Headline>
                  <FlatList
                    horizontal={true}
                    data={Array.isArray(character.apprentices) ?
                      dataCharactersState.filter(favChar => character.apprentices.includes(favChar.name)) :
                        [dataCharactersState.find(favChar => favChar.name === character.apprentices)] }
                    renderItem={({ item }) => (
                      ! isFavorite ? (
                        <TouchableOpacity style={{ marginLeft: 10, opacity: 0.1 }}>
                          <Image source={{ uri: item.image }} style={styles.imageCharacters} />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.push('CharacterDetails', { character: item, isFavorite: true })}>
                          <Image source={{ uri: item.image }} style={styles.imageCharacters} />
                        </TouchableOpacity>
                      ))}
                    keyExtractor={(item, index) => index.toString()} />
              </View>}
              <TouchableOpacity onPress={() => Linking.openURL(character.wiki)}>
                <Headline style={styles.wiki}>{translations.wiki}</Headline>
              </TouchableOpacity>
            </ScrollView>
          </View>
          );
        }


const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    fontSize: 20,
    width: '45%',
    fontWeight: 'bold',
  },
  value: {
    marginLeft: '10%',
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
    paddingHorizontal: 25,

  },
  contentTopF: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25
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
    margin: 20
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
    paddingBottom: 30
  },
  likeImage: {
    width: 30,
    height: 30,
    tintColor: 'red',
  },
  binImage: {
    width: 25,
    height: 25,
    tintColor: 'red',
  },
  unlikeImage: {
    width: 30,
    height: 30,
    tintColor: 'black',
  },
  iconBin: {
    marginTop: 2,
    right: 0,
  },
});