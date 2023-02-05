import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import CardCharacter from './../components/CardCharacter';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function CharactersScreen() {
          const navigation = useNavigation();
          const [dataCharacters, setDataCharacters] = useState(null);
          const [searchTerm, setSearchTerm] = useState('');
          const API_URL = 'https://akabab.github.io/starwars-api/api/all.json';
          const textInputRef = useRef(null);
          
          useEffect(() => {
            fetch(API_URL)
              .then(response => response.json())
              .then(data => setDataCharacters(data))
              .catch(error => console.error(error));
          }, []);
        
          if (!dataCharacters) {
            return <View />;
          }
        
          const filteredData = dataCharacters.filter((item: { name: string; }) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        
          return (
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  placeholder="Rechercher un personnage"
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
              <FlatList 
                data={filteredData} 
                renderItem={({ item }) => <CardCharacter props={item} navigation={navigation} />} 
                keyExtractor={item => item.id}
              />
            </View>
          );
  }