import { View, Text, FlatList } from 'react-native';
import CardCharacter from './../components/CardCharacter';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function CharactersScreen() {
          const navigation = useNavigation();
          const [dataCharacters, setDataCharacters] = useState(null);
          const API_URL = 'https://akabab.github.io/starwars-api/api/all.json';
          
          useEffect(() => {
            fetch(API_URL)
              .then(response => response.json())
              .then(data => setDataCharacters(data))
              .catch(error => console.error(error));
          }, []);
        
          if (!dataCharacters) {
            return <View />;
          }
        
          return (
            <View>
              <FlatList 
                data={dataCharacters} 
                renderItem={({ item }) => <CardCharacter props={item} navigation={navigation} />} 
                keyExtractor={item => item.id}
              />
            </View>
          );
  }