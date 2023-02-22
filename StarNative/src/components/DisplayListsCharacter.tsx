import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CardCharacter from './../components/CardCharacter';
import axios from 'axios';
import { useEffect, useState, useRef, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LanguageContext } from '../context/language-context';
import en from '../globalization/en';
import fr from '../globalization/fr';


export default function DisplayListsCharacter({isSearchBar, dataCharactersParam}) {
          const [searchTerm, setSearchTerm] = useState('');
          const [dataCharacters, setDataCharacters] = useState([]);
          const textInputRef = useRef(null);
          const navigation = useNavigation();
          const { language, setLanguage } = useContext(LanguageContext);
          const translations = language === 'en' ? en : fr;

          useEffect(() => {
            //console.log(dataCharactersParam)
            console.log(isSearchBar);
            setDataCharacters(dataCharactersParam);
          }, [dataCharactersParam]);
   

          const filteredData = dataCharacters.length ? 
                                dataCharacters.filter((item: { name: string; }) => item.name.toLowerCase().includes(searchTerm.toLowerCase())) : 
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
                    <TouchableOpacity onPress={() => {
                      setSearchTerm('');
                      if (textInputRef.current) {
                        textInputRef.current.blur();
                      }
                    }}>
                      <Text style={{fontSize: 20, marginLeft: 10}}>&times;</Text>
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