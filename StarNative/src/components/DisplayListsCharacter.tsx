import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CardCharacter from './../components/CardCharacter';
import axios from 'axios';
import { useEffect, useState, useRef, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LanguageContext } from '../context/language-context';
import en from '../globalization/en';
import fr from '../globalization/fr';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';


export default function DisplayListsCharacter({isSearchBar, dataCharactersParam}) {
          const [searchTerm, setSearchTerm] = useState('');
          const [dataCharacters, setDataCharacters] = useState([]);
          const textInputRef = useRef(null);
          const navigation = useNavigation();
          const { language, setLanguage } = useContext(LanguageContext);
          const translations = language === 'en' ? en : fr;

          useEffect(() => {
            setDataCharacters(dataCharactersParam);
          }, [dataCharactersParam]);

          const filteredData = isSearchBar && dataCharacters.length  ? 
                                dataCharacters.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())) : 
                                dataCharacters;
        
          return (
              <View style={styles.searchContainer}>
                {isSearchBar &&
                (<View style={[styles.searchBar]}>
                  <TextInput style={styles.textInput}
                    placeholder={translations.searchBar}
                    value={searchTerm}
                    onChangeText={text => setSearchTerm(text)}
                    ref={textInputRef}
                  />
                  {searchTerm.length > 0 && (
                    <TouchableOpacity style={{ fontSize: 20, marginLeft: 10}} onPress={() => {
                      setSearchTerm('');
                      if (textInputRef.current) {
                        textInputRef.current.blur();
                      }
                    }}>
                      <Text >&times;</Text>
                    </TouchableOpacity>
                  )} 
                  </View>
                  )}
                <FlatList 
                  data={filteredData} 
                  renderItem={({ item }) => (
                    <TouchableOpacity 
                      onPress={() => navigation.navigate('CharacterDetails', { character: item, isFavorite : isSearchBar })}
                    >
                      <CardCharacter props={item} />
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
          );
  }

  const styles = StyleSheet.create({
    searchContainer: {
        flex:1,
        padding:5,
        margin:5,
    },
    searchBar: {
        backgroundColor: '#F5F5F5',
        height: 50,
        borderRadius: 25,
        marginBottom: 20,
    },
    textInput: {
        padding: 10,
    },

});